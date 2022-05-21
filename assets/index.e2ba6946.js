var P=Object.defineProperty,J=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var b=(t,e,s)=>e in t?P(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,A=(t,e)=>{for(var s in e||(e={}))Q.call(e,s)&&b(t,s,e[s]);if(C)for(var s of C(e))R.call(e,s)&&b(t,s,e[s]);return t},F=(t,e)=>J(t,K(e));import{_ as W,d as X,u as Y,G as c,r as _,x as Z,y as tt,w as et,o as n,j as i,g as a,E as g,i as l,F as ot,l as nt,m as u,p as it,q as st,H as at,t as r,U as f}from"./index.7b0c689e.js";import{g as ct}from"./color.556e4bcb.js";const w=t=>(it("data-v-2e828ca8"),t=t(),st(),t),lt={class:"github"},rt=["fill"],dt=w(()=>a("div",{class:"logo-text"},"Github Trending",-1)),gt={key:1,class:"loading"},ut={key:2,class:"error"},ht={key:3,class:"list"},vt=["onClick"],pt={class:"title"},St={key:0,class:"desc"},mt={key:1,class:"today-star"},yt={class:"footer"},_t={key:0,class:"language item"},ft={key:1,class:"total-star item"},wt=["width","height"],kt=w(()=>a("path",{"fill-rule":"evenodd",d:"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"},null,-1)),xt=[kt],zt={key:2,class:"forked item"},Ct=["width","height"],bt=w(()=>a("path",{"fill-rule":"evenodd",d:"M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"},null,-1)),At=[bt],Ft=X({name:"index",props:{componentSetting:{type:Object,required:!0}},setup(t){const e=t,s=Y(),L=c(()=>s.isLock),k=_([]),v=_(!1),p=_(!1),S=c(()=>ct(e.componentSetting.textColor||"#262626")<150),V=c(()=>S.value?"#666":"#ccc"),B=c(()=>S.value?"#777":"#bbb"),I=c(()=>S.value?"#888":"#aaa"),x=async()=>{try{v.value=!0,p.value=!1;const y=await(await fetch("https://www.unpkg.com/@wcj/github-rank/dist/trending-daily.json")).json();if(y){const o=y.slice(0,e.componentSetting.limit).map(z=>{const{rank:E,full_name:N,language:$,color:q,description:D,forked:G,stargazers_count:U,todayStar:H,html_url:O}=z;return{id:E,title:N,language:$,color:q,description:D,forked:G,todayStar:H,totalStar:U,link:O}});k.value=o}else throw new Error("Api server error")}catch(d){p.value=!0,console.error(d)}finally{v.value=!1}};let h;function m(){x(),h&&window.clearInterval(h),h=window.setInterval(()=>{x()},e.componentSetting.duration*60*1e3)}Z(()=>m()),tt(()=>window.clearInterval(h)),et(()=>[e.componentSetting.duration,e.componentSetting.limit],()=>m());const T=c(()=>at(e.componentSetting.position)),j=d=>{window.open(d.link)},M=()=>{e.componentSetting.clickActionType===1?m():e.componentSetting.clickActionType===2&&window.open("https://github.com/")};return(d,y)=>(n(),i("div",{class:"wrapper",style:g(F(A({fontSize:t.componentSetting.textFontSize+"px",color:t.componentSetting.textColor,textShadow:t.componentSetting.textShadow,padding:t.componentSetting.padding+"px",fontFamily:t.componentSetting.fontFamily},u(T)),{"--grey1":u(V),"--grey2":u(B),"--grey3":u(I)}))},[a("div",lt,[t.componentSetting.showTitle!==!1?(n(),i("div",{key:0,class:"logo",style:g({cursor:t.componentSetting.clickActionType?"pointer":"default"}),onClick:M},[(n(),i("svg",{viewBox:"0 0 1024 1024",style:g({filter:`drop-shadow(${t.componentSetting.iconShadow})`})},[a("path",{fill:t.componentSetting.textColor,d:"M512 42.666667A464.64 464.64 0 0 0 42.666667 502.186667 460.373333 460.373333 0 0 0 363.52 938.666667c23.466667 4.266667 32-9.813333 32-22.186667v-78.08c-130.56 27.733333-158.293333-61.44-158.293333-61.44a122.026667 122.026667 0 0 0-52.053334-67.413333c-42.666667-28.16 3.413333-27.733333 3.413334-27.733334a98.56 98.56 0 0 1 71.68 47.36 101.12 101.12 0 0 0 136.533333 37.973334 99.413333 99.413333 0 0 1 29.866667-61.44c-104.106667-11.52-213.333333-50.773333-213.333334-226.986667a177.066667 177.066667 0 0 1 47.36-124.16 161.28 161.28 0 0 1 4.693334-121.173333s39.68-12.373333 128 46.933333a455.68 455.68 0 0 1 234.666666 0c89.6-59.306667 128-46.933333 128-46.933333a161.28 161.28 0 0 1 4.693334 121.173333A177.066667 177.066667 0 0 1 810.666667 477.866667c0 176.64-110.08 215.466667-213.333334 226.986666a106.666667 106.666667 0 0 1 32 85.333334v125.866666c0 14.933333 8.533333 26.88 32 22.186667A460.8 460.8 0 0 0 981.333333 502.186667 464.64 464.64 0 0 0 512 42.666667"},null,8,rt)],4)),dt],4)):l("",!0),v.value?(n(),i("div",gt,"Loading...")):p.value?(n(),i("div",ut,"Something error!")):(n(),i("div",ht,[(n(!0),i(ot,null,nt(k.value,o=>(n(),i("div",{class:"list-item",key:o.id,style:g(u(L)?"":"pointer-events: none"),onClick:z=>j(o)},[a("div",pt,r(o.title),1),o.description?(n(),i("div",St,r(o.description),1)):l("",!0),o.todayStar?(n(),i("div",mt,r(o.todayStar),1)):l("",!0),a("div",yt,[o.language?(n(),i("div",_t,[a("div",{class:"language-circle",style:g(`background: ${o.color}`)},null,4),f(" "+r(o.language),1)])):l("",!0),o.totalStar?(n(),i("div",ft,[(n(),i("svg",{"aria-label":"star",width:t.componentSetting.textFontSize*.7,height:t.componentSetting.textFontSize*.8,viewBox:"0 0 14 16",version:"1.1",role:"img"},xt,8,wt)),f(" "+r(o.totalStar),1)])):l("",!0),o.forked?(n(),i("div",zt,[(n(),i("svg",{"aria-label":"repo-forked",width:t.componentSetting.textFontSize*.64,height:t.componentSetting.textFontSize*.8,viewBox:"0 0 10 16",version:"1.1",role:"img"},At,8,Ct)),f(" "+r(o.forked),1)])):l("",!0)])],12,vt))),128))]))])],4))}});var It=W(Ft,[["__scopeId","data-v-2e828ca8"]]);export{It as default};
