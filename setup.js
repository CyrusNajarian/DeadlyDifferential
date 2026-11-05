const fileInput=document.querySelector('#workbookFile');
const validation=document.querySelector('#validation');
const actions=document.querySelector('#actions');
let parsedConfig=null;
let pendingMediaReads=0;
const escapeScript=s=>s.replace(/<\/script/gi,'<\\/script');

function parseWorkbook(workbook){return window.DDAnswerMatrix.parse(workbook,XLSX)}

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
 for(const clue of parsedConfig.clues){const m=clue.stages[0].media;if(m.type!=='none'&&(!m.src||!/^https?:\/\/|^data:(image|audio)\/|^assets\//i.test(m.src)))throw new Error(`${clue.title}: choose the local media file or enter a public URL before using the case.`);}
}
document.querySelector('#previewButton').onclick=async()=>{
 const button=document.querySelector('#previewButton');button.disabled=true;
 try{validateMedia();validation.className='validation';validation.textContent='Preparing preview with your media…';await window.DDPreviewStore.save(parsedConfig);localStorage.removeItem('dd-state-v4');localStorage.removeItem('dd-attempt-v2');location.href='index.html'}
 catch(error){validation.className='validation error';validation.textContent=error.name==='QuotaExceededError'?'Your browser has run out of device storage. Free some storage or download the configuration to keep your media.':error.message}
 finally{button.disabled=false}
};
document.querySelector('#downloadButton').onclick=()=>{try{validateMedia();const source=`/* Generated from the Deadly Differential answer matrix. */\nwindow.CASE_CONFIG=${escapeScript(JSON.stringify(parsedConfig,null,2))};\n`;const blob=new Blob([source],{type:'text/javascript'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='case-config.js';a.click();URL.revokeObjectURL(url)}catch(error){validation.className='validation error';validation.textContent=error.message}};
