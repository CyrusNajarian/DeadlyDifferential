const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
require('../scripts/build-pages.cjs');
const output=path.resolve(__dirname,'../_site'),base=new URL('https://cyrusnajarian.github.io/DeadlyDifferential/');
for(const file of ['index.html','setup.html'])for(const m of fs.readFileSync(path.join(output,file),'utf8').matchAll(/(?:src|href)="([^"#]+)"/g)){
 if(/^(https?:|data:)/.test(m[1]))continue;
 const url=new URL(m[1],new URL(file,base));assert(url.pathname.startsWith(base.pathname));assert(fs.existsSync(path.join(output,url.pathname.slice(base.pathname.length))),file+' missing '+m[1]);
}
for(const privatePath of ['netlify','logging','.git','node_modules','tests','scripts','README.md'])assert(!fs.existsSync(path.join(output,privatePath)));
assert(fs.existsSync(path.join(output,'.nojekyll')));
assert(fs.readFileSync(path.join(output,'case-config.js'),'utf8').includes('answerMatrixVersion'));
console.log('PASS: Pages artifact builds the Excel defaults, supports repository-relative links and excludes server/development files.');
