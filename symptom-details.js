/* Distribution is recorded separately; changing location never earns duplicate credit. */
window.DDSymptomDetails=(()=>{
 const sides=[['unilateral','Unilateral'],['bilateral','Bilateral']];
 const regions=[['upper','Arm/hand'],['lower','Leg/foot']];
 const normalizeSide=side=>side==='asymmetric_bilateral'?'bilateral':side;
 const ref=()=>window.DDReference;
 function searchTerm(raw){
  const direct=ref().resolve(raw,'symptom');if(direct)return direct.term;
  const withoutSide=String(raw).replace(/\b(?:unilateral|bilateral|one[- ]sided|both[- ]sided|left|right)\b/gi,' ').replace(/\s+/g,' ').trim();
  const sided=ref().resolve(withoutSide,'symptom');if(sided)return sided.term;
  const withoutRegion=withoutSide.replace(/\b(?:upper|lower|arm|arms|leg|legs|hand|hands|foot|feet|extremity|extremities)\b/gi,' ').replace(/\s+/g,' ').trim();
  return ref().resolve(withoutRegion,'symptom')?.term||withoutRegion;
 }
 function resolve(raw){return ref().resolve(raw,'symptom')||ref().resolve(searchTerm(raw),'symptom')}
 function fields(entry,stage={}){const q=entry?.qualifiers,locations=stage.symptomDistribution?.regionsById?.[entry?.id]||stage.symptomDistribution?.regions;
  if(q?.region&&locations?.length&&locations.every(region=>!regions.some(([id])=>id===region)))return [];
  return q?[...(q.side?['side']:[]),...(q.region?['region']:[])]:[]}
 function label(details){return details?[sides.find(([id])=>id===normalizeSide(details.side))?.[1],regions.find(([id])=>id===details.region)?.[1]].filter(Boolean).join(' · '):''}
 function validate(entry,details,stage){
  const required=fields(entry,stage),missing=required.filter(field=>!details?.[field]);
  if(missing.length)return {complete:false,valid:false,reason:'missing_distribution',missing};
  if(!required.length)return {complete:true,valid:true};
  details={...details,side:normalizeSide(details.side)};
  if(details.side&&!sides.some(([id])=>id===details.side)||details.region&&!regions.some(([id])=>id===details.region))return {complete:true,valid:false,reason:'invalid_distribution'};
  const region=entry.qualifiers.fixedRegion||details.region,policy=stage.symptomDistribution||{};
  const allowedRegions=policy.regionsById?.[entry.id]||policy.regions;
  if(allowedRegions&&region&&!allowedRegions.includes(region))return {complete:true,valid:false,reason:'region_mismatch'};
  const allowed=policy.sidesById?.[entry.id]||(['s-hemiparetic-gait','s-hemispatial-neglect'].includes(entry.id)?['unilateral']:null);
  if(allowed&&!allowed.map(normalizeSide).includes(details.side))return {complete:true,valid:false,reason:'side_mismatch'};
  return {complete:true,valid:true,details:{side:details.side,...(region?{region}:{})}};
 }
 return {sides,regions,searchTerm,resolve,fields,label,validate};
})();
