import{A as l,C as f,T as h,S as m}from"./loadBitmapFont-d4963d14.js";import{b as C}from"./bunny-a4f1a4e8.js";import{d as x,r as _,o as g,c as w,a as b}from"./index-a64373c7.js";const B=x({__name:"01-container",setup(v){const o=_();let i,n;g(()=>{c(),s(),d(),u(),r()});function r(){i.ticker.add(t=>{n.rotation-=.01*t})}function c(){var a;const{width:t,height:e}=(a=o.value)==null?void 0:a.getBoundingClientRect();i=new l({background:"#1099bb",width:t,height:e}),o.value.appendChild(i.view)}function s(){n=new f,i.stage.addChild(n)}const p=h.from(C);function d(){for(let t=0;t<25;t++){const e=new m(p);e.anchor.set(.5),e.x=t%5*40,e.y=Math.floor(t/5)*40,n.addChild(e)}}function u(){n.x=i.screen.width/2,n.y=i.screen.height/2,n.pivot.x=n.width/2,n.pivot.y=n.height/2}return(t,e)=>(b(),w("div",{class:"pixiCon",ref_key:"pixiCon",ref:o},null,512))}});export{B as default};
