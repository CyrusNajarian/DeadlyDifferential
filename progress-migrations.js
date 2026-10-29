/* Keep saved answers attached to their evidence when the published order changes. */
function migrateCaseProgress(saved,caseConfig){
 let changed=false,orderChanged=false;
 if(caseConfig.clueOrderRevision===2&&saved.clueOrderRevision!==2){
  const indexMap={0:3,1:2,2:0,3:1,4:4};
  const hadProgress=!!saved.team||Object.keys(saved.flow||{}).length>0;
  if(hadProgress){
   saved.clue=indexMap[saved.clue]??0;
   const migrated={};
   for(const [key,value] of Object.entries(saved.flow||{})){
    const match=key.match(/^culprit-(\d+)-(\d+)$/);
    migrated[match?`culprit-${indexMap[match[1]]??match[1]}-${match[2]}`:key]=value;
   }
   saved.flow=migrated;orderChanged=true;
   for(const field of ['matches','hints','revealed']){
    const moved={};for(const [key,value] of Object.entries(saved[field]||{})){const match=key.match(/^(\d+)-(.*)$/);moved[match?`${indexMap[match[1]]??match[1]}-${match[2]}`:key]=value;}saved[field]=moved;
   }
  }else saved.clue=0;
  saved.clueOrderRevision=2;changed=true;
 }
 caseConfig.clues.forEach((clue,ci)=>clue.stages.forEach((stage,si)=>{
  const p=saved.flow?.[`culprit-${ci}-${si}`];
  if(!p||!stage.previousAnswerIds||p.answerRevision===stage.answerRevision)return;
  const newIndex=new Map(stage.accepted.map((a,i)=>[a.id,i]));
  p.matches=[...new Set((p.matches||[]).map(i=>newIndex.get(stage.previousAnswerIds[i])).filter(i=>i!==undefined))];
  p.stars={};p.answerRevision=stage.answerRevision;changed=true;
 }));
 return {changed,orderChanged,indexMap:{0:3,1:2,2:0,3:1,4:4}};
}
