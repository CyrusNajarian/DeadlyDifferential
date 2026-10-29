const fileInput=document.querySelector('#workbookFile');
const validation=document.querySelector('#validation');
const actions=document.querySelector('#actions');
let parsedConfig=null;
let pendingMediaReads=0;
const text=v=>String(v??'').trim();
const number=(v,fallback)=>text(v)!==''&&Number.isFinite(Number(v))?Number(v):fallback;
const escapeScript=s=>s.replace(/<\/script/gi,'<\\/script');

function parseWorkbook(workbook){
  const settingsSheet=workbook.Sheets['Case Settings'];
  if(!settingsSheet)throw new Error('Workbook must contain a “Case Settings” sheet.');
  const settingsRows=XLSX.utils.sheet_to_json(settingsSheet,{header:1,defval:''});
  const settings={};
  settingsRows.slice(4).forEach(row=>{if(text(row[0]))settings[text(row[0])]=row[1]});
  const slideSheets=workbook.SheetNames.filter(name=>name!=='Case Settings');
  if(!slideSheets.length)throw new Error('Add at least one slide worksheet after Case Settings.');
  const slides=[];
  for(const sheetName of slideSheets){
    const rows=XLSX.utils.sheet_to_json(workbook.Sheets[sheetName],{header:1,defval:''});
    const slideSettings={};
    rows.slice(4,8).forEach(row=>{if(text(row[0]))slideSettings[text(row[0])]=row[1]});
    const mediaSettings={};
    rows.slice(4,8).forEach(row=>{if(text(row[5]))mediaSettings[text(row[5])]=row[7]});
    const mediaType=text(mediaSettings['Media type']).toLowerCase()||'none';
    if(!['none','image','audio'].includes(mediaType))throw new Error(`${sheetName}: Media type must be none, image, or audio.`);
    const media={type:mediaType,src:text(mediaSettings['Media source']),alt:text(mediaSettings['Media description']),caption:text(mediaSettings['Media caption'])};
    const extra={};rows.forEach(row=>{if(text(row[11]))extra[text(row[11])]=row[12]});
    const slideTitle=text(slideSettings['Slide title'])||sheetName.replace(/^\d+\s*/, '');
    const stageTitle=text(slideSettings['Stage title'])||'Investigation';
    const questions=[];
    const accepted=[];
    for(let index=10;index<rows.length;index++){
      const row=rows[index]||[];
      const prompt=text(row[2]);
      if(prompt)questions.push({order:number(row[0],questions.length+1),label:text(row[1])||'Hint',prompt,hint:text(row[3])});
      const term=text(row[6]);
      if(term){
        const type=text(row[5]).toLowerCase();
        if(!['symptom','disease'].includes(type))throw new Error(`${sheetName}: Answer Type must be symptom or disease for “${term}”.`);
        if(!accepted.some(item=>item.type===type&&item.term.toLowerCase()===term.toLowerCase()))accepted.push({type,term,aliases:text(row[7]).split(';').map(v=>v.trim()).filter(Boolean),info:text(row[8]),hint:text(row[9])});
      }
    }
    if(!questions.length&&!accepted.length)continue;
    if(!accepted.length)throw new Error(`${sheetName}: add at least one accepted symptom or disease.`);
    questions.sort((a,b)=>a.order-b.order);
    const slideThreshold=slideSettings['Answers needed']??slideSettings['Unique answers needed to reveal full list']??slideSettings['Answers required before revealing all possible symptoms and diagnoses']??slideSettings['Answers required before revealing missed answers'];
    const defaultThreshold=settings['Default unique answers needed to reveal full list']??settings['Default answers required before revealing all possible symptoms and diagnoses']??settings['Default answers required before revealing missed answers'];
    const threshold=number(slideThreshold,number(defaultThreshold,2));
    if(!Number.isInteger(threshold)||threshold<1||threshold>accepted.length)throw new Error(`${sheetName}: the reveal threshold must be a whole number from 1 to ${accepted.length}.`);
    const knobs={};
    for(const [label,key] of [['Symptoms needed','symptomsNeeded'],['Diagnoses needed','diagnosesNeeded'],['Symptom star threshold','symptomStarThreshold'],['Diagnosis star threshold','diagnosisStarThreshold']]){const v=number(extra[label],label.includes('star')?4:2);const count=accepted.filter(a=>a.type===(label.startsWith('Symptom')?'symptom':'disease')).length;if(!Number.isInteger(v)||v<1||v>count)throw new Error(`${sheetName}: ${label} must be 1–${count}.`);knobs[key]=v;}
    if(knobs.symptomStarThreshold<knobs.symptomsNeeded||knobs.diagnosisStarThreshold<knobs.diagnosesNeeded)throw new Error(`${sheetName}: star thresholds must be at least the required counts.`);
    slides.push({order:number(slideSettings['Slide order'],999),title:slideTitle,section:text(extra['Section'])||'culprit',setId:text(extra['Set ID']),personId:text(extra['Person ID']),stages:[{title:stageTitle,revealThreshold:threshold,media,...knobs,questions:questions.map(({label,prompt,hint})=>({label,prompt,hint})),accepted}]});
  }
  const suspectSets=JSON.parse(JSON.stringify(window.SUSPECT_SETS||[]));
  for(const slide of slides.filter(s=>s.section==='suspects')){const person=suspectSets.find(s=>s.id===slide.setId)?.people.find(p=>p.id===slide.personId);if(!person)throw new Error(`Unknown suspect ${slide.setId}/${slide.personId}. Keep the template Set ID and Person ID.`);const stage=slide.stages[0];Object.assign(person,{symptoms:stage.accepted.filter(a=>a.type==='symptom'),diagnoses:stage.accepted.filter(a=>a.type==='disease'),questions:stage.questions,symptomsNeeded:stage.symptomsNeeded,diagnosesNeeded:stage.diagnosesNeeded,symptomStarThreshold:stage.symptomStarThreshold,diagnosisStarThreshold:stage.diagnosisStarThreshold});}
  const clues=slides.filter(s=>s.section!=='suspects').sort((a,b)=>a.order-b.order).map(({title,stages})=>({title,stages}));
  if(!clues.length)throw new Error('No usable slide sheets were found.');
  const defaultThreshold=settings['Default unique answers needed to reveal full list']??settings['Default answers required before revealing all possible symptoms and diagnoses']??settings['Default answers required before revealing missed answers'];
  return {suspectSets,suggestionsAfter:number(settings['Suggestions after letters'],6),title:text(settings['Game title'])||'Deadly Differential',caseLabel:text(settings['Case label']),openingHeadline:text(settings['Opening headline']),openingDescription:text(settings['Opening description']),playerInstructions:text(settings['Player instructions']),revealThreshold:number(defaultThreshold,2),clues};
}

fileInput.addEventListener('change',async()=>{
  validation.className='validation';actions.hidden=true;parsedConfig=null;
  try{
    const file=fileInput.files[0];if(!file)return;
    const workbook=XLSX.read(await file.arrayBuffer(),{type:'array'});
    parsedConfig=parseWorkbook(workbook);
    const stages=parsedConfig.clues.reduce((n,c)=>n+c.stages.length,0),answers=parsedConfig.clues.reduce((n,c)=>n+c.stages.reduce((m,s)=>m+s.accepted.length,0),0);
    validation.classList.add('success');validation.textContent=`Loaded ${parsedConfig.clues.length} slides, ${stages} stages, and ${answers} accepted answers.`;actions.hidden=false;renderMediaSetup();
  }catch(error){validation.classList.add('error');validation.textContent=error.message||'The workbook could not be read.'}
});
function renderMediaSetup(){
 const target=document.querySelector('#mediaSetup');target.replaceChildren();
 parsedConfig.clues.forEach((clue,i)=>{
  const media=clue.stages[0].media;
  const section=document.createElement('section');section.className='media-setup';
  const title=document.createElement('h3');title.textContent=`${i+1}. ${clue.title}`;section.append(title);
  const typeLabel=document.createElement('label');typeLabel.textContent='Evidence type';typeLabel.htmlFor=`media-type-${i}`;
  const select=document.createElement('select');select.id=`media-type-${i}`;
  for(const value of ['none','image','audio']){const o=document.createElement('option');o.value=value;o.textContent=value==='none'?'No media':value==='image'?'Picture':'Audio';select.append(o)}select.value=media.type;
  const sourceLabel=document.createElement('label');sourceLabel.textContent='Public URL or uploaded filename';sourceLabel.htmlFor=`media-source-${i}`;
  const source=document.createElement('input');source.className='text-input';source.id=`media-source-${i}`;source.value=media.src;source.placeholder='https://... or evidence.jpg';
  const file=document.createElement('input');file.type='file';file.accept='image/*,audio/*,.mp3,.wav,.m4a,.ogg,.aac,.flac';file.className='media-upload';file.setAttribute('aria-label',`Upload picture or audio for ${clue.title}`);
  const status=document.createElement('p');status.className='media-status';
  const altLabel=document.createElement('label');altLabel.textContent='Image description or audio label';altLabel.htmlFor=`media-alt-${i}`;
  const alt=document.createElement('input');alt.className='text-input';alt.id=`media-alt-${i}`;alt.value=media.alt;
  const captionLabel=document.createElement('label');captionLabel.textContent='Caption (optional)';captionLabel.htmlFor=`media-caption-${i}`;
  const caption=document.createElement('input');caption.className='text-input';caption.id=`media-caption-${i}`;caption.value=media.caption;
  select.onchange=()=>media.type=select.value;source.oninput=()=>{media.src=source.value.trim();status.textContent=''};alt.oninput=()=>media.alt=alt.value.trim();caption.oninput=()=>media.caption=caption.value.trim();
  file.onchange=async()=>{const selected=file.files[0];if(!selected)return;
   if(selected.size>20*1024*1024){status.textContent='Choose a file under 20 MB, or use a public URL.';return;}
   const type=selected.type.startsWith('image/')?'image':selected.type.startsWith('audio/')||/\.(mp3|wav|m4a|ogg|aac|flac)$/i.test(selected.name)?'audio':null;
   if(!type){status.textContent='Choose an image or audio file.';return;}
   status.textContent='Reading media…';pendingMediaReads++;
   const suffix=selected.name.split('.').pop().toLowerCase(),mime=selected.type.startsWith(`${type}/`)?selected.type:({mp3:'audio/mpeg',wav:'audio/wav',m4a:'audio/mp4',ogg:'audio/ogg',aac:'audio/aac',flac:'audio/flac'}[suffix]||selected.type);
   try{media.src=await new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=()=>reject(new Error('Could not read file.'));reader.readAsDataURL(new Blob([selected],{type:mime}))});media.type=type;select.value=type;source.value=selected.name;status.textContent=`${selected.name} is embedded in the case configuration.`}catch(error){status.textContent=error.message}finally{pendingMediaReads--}
  };
  section.append(typeLabel,select,sourceLabel,source,file,altLabel,alt,captionLabel,caption,status);target.append(section);
 });
}
function validateMedia(){
 if(pendingMediaReads)throw new Error('Wait for the media files to finish loading, then try again.');
 for(const clue of parsedConfig.clues){const m=clue.stages[0].media;if(m.type!=='none'&&(!m.src||!/^https?:\/\/|^data:(image|audio)\//i.test(m.src)))throw new Error(`${clue.title}: choose the local media file or enter a public URL before using the case.`);}
}
document.querySelector('#previewButton').onclick=async()=>{
 const button=document.querySelector('#previewButton');button.disabled=true;
 try{validateMedia();validation.className='validation';validation.textContent='Preparing preview with your media…';await window.DDPreviewStore.save(parsedConfig);localStorage.removeItem('dd-state-v4');location.href='index.html'}
 catch(error){validation.className='validation error';validation.textContent=error.name==='QuotaExceededError'?'Your browser has run out of device storage. Free some storage or download the configuration to keep your media.':error.message}
 finally{button.disabled=false}
};
document.querySelector('#downloadButton').onclick=()=>{try{validateMedia();const source=`/* Generated from the Deadly Differential Excel template. */\nwindow.CASE_CONFIG=${escapeScript(JSON.stringify(parsedConfig,null,2))};\n`;const blob=new Blob([source],{type:'text/javascript'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='case-config.js';a.click();URL.revokeObjectURL(url)}catch(error){validation.className='validation error';validation.textContent=error.message}};
