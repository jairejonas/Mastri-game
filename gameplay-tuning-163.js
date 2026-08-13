const baseUpdate163=update;
update=function(dt){
  const r=A.find(e=>e.t==='RUNNER'&&e.h>0);
  const wasEscaping=!!escaping;
  baseUpdate163(dt);
  for(const v of V){
    v.y=Math.max(H*.22,Math.min(H-24,v.y));
  }
  if(r&&r.h>0&&wasEscaping&&escaping){
    const gx=W*.5,gy=H*.195,dx=gx-r.x,dy=gy-r.y,m=Math.hypot(dx,dy)||1;
    r.x-=dx/m*10*dt;
    r.y-=dy/m*10*dt;
  }
};
const baseDraw163=draw;
draw=function(){
  baseDraw163();
  X.save();
  for(const e of A){
    if(e.h<=0)continue;
    const gap=6,start=e.x-((e.max-1)*gap)/2;
    for(let i=0;i<e.max;i++){
      X.fillStyle=i<Math.max(0,e.h)?'#ff695f':'#3a3d42';
      X.beginPath();
      X.arc(start+i*gap,e.y-35,2.1,0,Math.PI*2);
      X.fill();
    }
  }
  X.restore();
};