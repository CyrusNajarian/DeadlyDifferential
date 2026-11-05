// Compile the committed Excel approvals into the default player configuration.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),XLSX=require('xlsx');
const root=path.resolve(__dirname,'..');
function buildDefaultCase(workbookPath=path.join(root,'Deadly_Differential_Answer_Matrix.xlsx')){
 const ctx={window:{}};vm.createContext(ctx);
 for(const name of ['case-config.js','reference-data.js','reference.js','case-resolution-data.js','answer-matrix.js'])vm.runInContext(fs.readFileSync(path.join(root,name),'utf8'),ctx,{filename:name});
 const config=ctx.window.DDAnswerMatrix.parse(XLSX.readFile(workbookPath),XLSX);
 return '/* Generated at build time from Deadly_Differential_Answer_Matrix.xlsx. */\nwindow.CASE_CONFIG='+JSON.stringify(config,null,2)+';\n';
}
if(require.main===module){
 const output=process.argv[2]||path.join(root,'case-config.js');
 fs.writeFileSync(output,buildDefaultCase());
 console.log('Default case compiled from the repository Excel workbook.');
}
module.exports={buildDefaultCase};
