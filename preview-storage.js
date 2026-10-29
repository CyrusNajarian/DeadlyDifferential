/* Device-local case previews use IndexedDB instead of small Web Storage quotas. */
window.DDPreviewStore=(()=>{
 const database='deadly-differential-previews',table='cases',key='active';
 function open(){return new Promise((resolve,reject)=>{
  if(!window.indexedDB)return reject(new Error('Preview storage is unavailable in this browser. Open the setup page in a normal browser window.'));
  const request=window.indexedDB.open(database,1);
  let settled=false;
  const timeout=setTimeout(()=>{settled=true;reject(new Error('Preview storage did not open. Close other tabs for this site and retry.'))},12000);
  request.onupgradeneeded=()=>{if(!request.result.objectStoreNames.contains(table))request.result.createObjectStore(table)};
  request.onsuccess=()=>{clearTimeout(timeout);if(settled){request.result.close();return;}settled=true;resolve(request.result)};
  request.onerror=()=>{clearTimeout(timeout);settled=true;reject(request.error||new Error('Preview storage could not be opened.'))};
  request.onblocked=()=>{clearTimeout(timeout);settled=true;reject(new Error('Preview storage is blocked by another tab. Close other tabs for this site and retry.'))};
 })}
 async function operation(mode,value){const db=await open();return new Promise((resolve,reject)=>{
  let result;let tx;
  try{tx=db.transaction(table,mode);const store=tx.objectStore(table),request=mode==='readwrite'?store.put(value,key):store.get(key);request.onsuccess=()=>result=request.result;
   tx.oncomplete=()=>{db.close();resolve(result)};
   tx.onabort=()=>{db.close();reject(tx.error||request.error||new Error('Preview storage was interrupted.'))};
   tx.onerror=()=>{/* The abort event rejects after rollback. */};
  }catch(error){db.close();reject(error)}
 })}
 return {
  async save(config){await operation('readwrite',config);try{localStorage.removeItem('dd-preview-config')}catch{}},
  async load(){let stored;try{stored=await operation('readonly')}catch(error){
    const legacy=localStorage.getItem('dd-preview-config');if(legacy)return JSON.parse(legacy);throw error;
   }if(stored)return stored;const legacy=localStorage.getItem('dd-preview-config');return legacy?JSON.parse(legacy):null;}
 };
})();
