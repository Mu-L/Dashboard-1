var S=Object.defineProperty;var s=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var p=(t,e,n)=>e in t?S(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,r=(t,e)=>{for(var n in e||(e={}))w.call(e,n)&&p(t,n,e[n]);if(s)for(var n of s(e))u.call(e,n)&&p(t,n,e[n]);return t};import{_ as g,d as f,r as x,w as _,y as v,G as d,o as y,j as $,t as H,E as k,H as C}from"./index.7b0c689e.js";const h=f({name:"Clock",props:{componentSetting:{type:Object,required:!0}},setup(t){const e=x(n());function n(){const i=new Date().getHours(),l=new Date().getMinutes();return`${i}:${l<10?"0"+l:l}`}let o;function a(){var i;e.value=n(),o=window.setInterval(()=>{e.value=n()},((i=t.componentSetting)==null?void 0:i.duration)||5e3)}a(),_(()=>t.componentSetting.duration,()=>{window.clearInterval(o),a()}),v(()=>{window.clearInterval(o)});const c=d(()=>C(t.componentSetting.position)),m=d(()=>t.componentSetting.textHollow?{"-webkit-text-fill-color":t.componentSetting.textHollowBg,"-webkit-text-stroke":`${t.componentSetting.textHollowBorder}px ${t.componentSetting.textColor}`}:{});return{now:e,positionCSS:c,textHollowStyle:m}}});function B(t,e,n,o,a,c){return y(),$("div",{class:"wrapper",style:k(r(r({fontSize:t.componentSetting.textFontSize+"px",color:t.componentSetting.textColor,textShadow:t.componentSetting.textShadow,padding:t.componentSetting.padding+"px",fontFamily:t.componentSetting.fontFamily},t.positionCSS),t.textHollowStyle))},H(t.now),5)}var z=g(h,[["render",B],["__scopeId","data-v-c149f2c0"]]);export{z as default};
