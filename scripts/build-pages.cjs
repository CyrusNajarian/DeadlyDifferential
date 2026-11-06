// Publish only browser files, media and the editable workbook.
const fs=require('node:fs'),path=require('node:path');
const {buildDefaultCase}=require('./build-default-case.cjs');
const root=path.resolve(__dirname,'..'),output=path.join(root,'_site');
const compiled=buildDefaultCase(); // Validate before replacing the last build.
fs.rmSync(output,{recursive:true,force:true});fs.mkdirSync(output,{recursive:true});
for(const name of fs.readdirSync(root))if(/\.(html|css|js)$/.test(name)&&fs.statSync(path.join(root,name)).isFile())fs.copyFileSync(path.join(root,name),path.join(output,name));
fs.writeFileSync(path.join(output,'case-config.js'),compiled);
fs.cpSync(path.join(root,'assets'),path.join(output,'assets'),{recursive:true});
fs.copyFileSync(path.join(root,'Deadly_Differential_Answer_Matrix.xlsx'),path.join(output,'Deadly_Differential_Answer_Matrix.xlsx'));
fs.writeFileSync(path.join(output,'.nojekyll'),'');
console.log('GitHub Pages artifact ready in _site/; logging uses the external Netlify backend.');
