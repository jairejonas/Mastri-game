const baseUpdate163=update;
const baseDraw163=draw;
const baseAttack164=attack;
const redir164=document.getElementById('redir');
const dodge164=document.getElementById('dodge');

document.title='SIGNO — Prototype 16.4';
const version164=document.querySelector('#start .sub');
if(version164)version164.textContent='PROTOTYPE 16.4';
const desc164=document.querySelector('#start .small');
if(desc164)desc164.textContent='Combat feedback pass: clearer defense timing, stronger hit feedback, and runner getaway progress.';

attack=function(){
  const [e]=near(),before=e?e.h:null;
  baseAttack164();
  if(e&&before!==null&&e.h<before){
    e.hitFlash=.18;
    const dx=e.x-P.x,dy=e.y-P.y,m=Math.hypot(dx,dy)||1;
    e.x+=dx/m*10;e.y+=dy/m*10;
  }
};
document.getElementById('atk').onpointerdown=attack;

update=function(dt){
  const r=A.find(e=>e.t==='RUNNER'&&e.h>0);
  const before=r?{x:r.x,y:r.y}:null;
  baseUpdate163(dt);
  for(const v of V){v.x=Math.max(18,Math.min(W-18,v.x));v.y=Math.max(H*.23,Math.min(H-18,v.y))}
  if(r&&before&&escaping&&r.h>0){const f=34/44;r.x=before.x+(r.x-before.x)*f;r.y=before.y+(r.y-before.y)*f}
  for(const e of A)if(e.hitFlash)e.hitFlash=Math.max(0,e.hitFlash-dt);
  const incoming=A.filter(e=>e.h>0&&(e.tele>0||e.wind>0));
  const t=incoming.length?Math.min(...incoming.map(e=>e.tele||e.wind)):0;
  redir164.classList.toggle('ready',t>0);dodge164.classList.toggle('ready',t>0&&!fly);
  redir164.classList.toggle('now',t>0&&t<=.25);dodge164.classList.toggle('now',t>0&&t<=.25&&!fly);
};

draw=function(){
  baseDraw163();
  X.save();
  for(const e of A){
    if(e.h<=0)continue;
    const gap=7,start=e.x-((e.max-1)*gap)/2;
    for(let i=0;i<e.max;i++){X.fillStyle=i<Math.max(0,e.h)?'#f4f4f4':'#555';X.beginPath();X.arc(start+i*gap,e.y-36,2.8,0,Math.PI*2);X.fill()}
    if(e.hitFlash){X.globalAlpha=Math.min(1,e.hitFlash/.18);X.strokeStyle='#fff';X.lineWidth=4;X.beginPath();X.arc(e.x,e.y,21,0,Math.PI*2);X.stroke();X.globalAlpha=1}
  }
  const r=A.find(e=>e.t==='RUNNER'&&e.h>0);
  if(r&&escaping){
    const gx=W*.5,gy=H*.195,total=Math.max(1,Math.hypot(W*.84-gx,H*.66-gy)),left=Math.hypot(r.x-gx,r.y-gy),pct=Math.max(0,Math.min(1,1-left/total));
    const w=58,h=5,x=r.x-w/2,y=r.y+30;
    X.fillStyle='#111';X.fillRect(x,y,w,h);X.fillStyle='#f0b92f';X.fillRect(x,y,w*pct,h);X.strokeStyle='#ffffff88';X.strokeRect(x,y,w,h);X.fillStyle='#fff';X.font='bold 8px Arial';X.textAlign='center';X.fillText('GETAWAY '+Math.round(pct*100)+'%',r.x,y+14);
  }
  X.restore();
};