import {writeFile} from 'node:fs/promises';import {fileURLToPath,pathToFileURL} from 'node:url';import {resolve} from 'node:path';
const targets=await fetch('http://127.0.0.1:9223/json').then(r=>r.json());
const page=targets.find(x=>x.type==='page');if(!page)throw Error('No CDP page');
const ws=new WebSocket(page.webSocketDebuggerUrl);await new Promise((ok,no)=>{ws.onopen=ok;ws.onerror=no});
let id=0;const pending=new Map();ws.onmessage=e=>{const m=JSON.parse(e.data);if(m.id&&pending.has(m.id)){const [ok,no]=pending.get(m.id);pending.delete(m.id);m.error?no(Error(m.error.message)):ok(m.result)}};
const call=(method,params={})=>new Promise((ok,no)=>{const n=++id;pending.set(n,[ok,no]);ws.send(JSON.stringify({id:n,method,params}))});
await call('Emulation.setDeviceMetricsOverride',{width:1440,height:900,deviceScaleFactor:1,mobile:false});const base=pathToFileURL(resolve(fileURLToPath(new URL('..',import.meta.url)),'index.html')).href;
for(const [name,url,wait] of [['t-000',base+'?t=0',2600],['t-030',base+'?t=0.3',2600],['t-060',base+'?t=0.6',2600],['t-085',base+'?t=0.85',2600],['final-labels',base+'?t=1',3800]]){
  await call('Page.navigate',{url});await new Promise(r=>setTimeout(r,wait));const shot=await call('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});await writeFile(new URL(`../shots/${name}.png`,import.meta.url),Buffer.from(shot.data,'base64'));
}
ws.close();
