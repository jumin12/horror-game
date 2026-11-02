import {copyFile,mkdir,stat,open} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const source=path.join(root,'index.html');
const info=await stat(source);
if(info.size===0||info.size>=100*1024*1024)throw new Error('The standalone build must be nonempty and below GitHub’s 100 MiB file limit.');
const file=await open(source,'r');
const buffer=Buffer.alloc(4096);
await file.read(buffer,0,buffer.length,0);
await file.close();
if(!buffer.toString('utf8').includes('<title>Horror Game</title>'))throw new Error('Expected the Horror Game standalone build.');
const output=path.join(root,'public');
await mkdir(output,{recursive:true});
await copyFile(source,path.join(output,'index.html'));
await copyFile(path.join(root,'THIRD_PARTY_NOTICES.md'),path.join(output,'third-party-notices.txt'));
console.log(`Published Horror Game: ${(info.size/1024/1024).toFixed(2)} MiB in public/`);
