import{_ as $,d as O,I as G,r as t,w as V,x as J,y as K,G as _,H as Q,o as p,h as f,N as u,P as d,C as g,g as B,e as n,t as q,k as z,U as X,R as Y,J as Z,K as ee,s as te,v as ne}from"./index.7cf31232.js";const A=e=>(te("data-v-1e65a99b"),e=e(),ne(),e),oe=["src"],ae={class:"quote-left"},ie=A(()=>n("svg",{viewBox:"0 0 1024 1024"},[n("path",{d:"M928 512h-160v-128c0-70.6 57.4-128 128-128h16c26.6 0 48-21.4 48-48V112c0-26.6-21.4-48-48-48h-16c-176.8 0-320 143.2-320 320v480c0 53 43 96 96 96h256c53 0 96-43 96-96V608c0-53-43-96-96-96z m-576 0H192v-128c0-70.6 57.4-128 128-128h16c26.6 0 48-21.4 48-48V112c0-26.6-21.4-48-48-48h-16C143.2 64 0 207.2 0 384v480c0 53 43 96 96 96h256c53 0 96-43 96-96V608c0-53-43-96-96-96z"})],-1)),ce=[ie],se={class:"quote-right"},le=A(()=>n("svg",{viewBox:"0 0 1024 1024"},[n("path",{d:"M928 64H672c-53 0-96 43-96 96v256c0 53 43 96 96 96h160v128c0 70.6-57.4 128-128 128h-16c-26.6 0-48 21.4-48 48v96c0 26.6 21.4 48 48 48h16c176.8 0 320-143.2 320-320V160c0-53-43-96-96-96z m-576 0H96C43 64 0 107 0 160v256c0 53 43 96 96 96h160v128c0 70.6-57.4 128-128 128h-16c-26.6 0-48 21.4-48 48v96c0 26.6 21.4 48 48 48h16c176.8 0 320-143.2 320-320V160c0-53-43-96-96-96z"})],-1)),re=[le],me=O({__name:"index",props:{componentSetting:{type:Object,required:!0},element:{type:Object,required:!0}},setup(e){const o=e;X(i=>({aad30738:z(M)}));const{t:S}=G(),c=t(),s=t(),l=t(),r=t(""),w=t(""),y=t(""),m=t(""),x=t(""),k=t(""),b=t(!1),v=async()=>{try{const i=await fetch(`${Y}/api/movieLines`),{name:I,img:E,img1:T,img2:H,img3:L,img4:N,link:j,quotes:P}=await i.json();r.value=P,w.value=I,y.value=E.replace("s_ratio_poster","m");const D=[T,T,H,L,N].filter(Boolean),U=~~(Math.random()*D.length),h=D[U];window.innerWidth<768?m.value=h.replace("original","w780"):window.innerWidth<1460?m.value=h.replace("original","w1280"):m.value=h,x.value=j,k.value=`
      background-image: radial-gradient(
        ellipse at ${~~(Math.random()*50)+25}% ${~~(Math.random()*50)+25}%,
        rgba(0, 0, 0,.25),
        rgba(0, 04, 0,.75), 
        rgb(0, 0, 0));`}catch{}};let a;const C=()=>{const i=(o.componentSetting.duration||5)*60*1e3;a&&(window.clearInterval(a),a=null),a=window.setInterval(v,i)};V(()=>o.componentSetting.duration,()=>C(),{immediate:!0}),J(()=>v()),K(()=>a&&window.clearInterval(a));const F=_(()=>Q(o.componentSetting.position)),M=_(()=>o.componentSetting.themeColor);V(()=>r.value,()=>{c.value&&c.value.animate&&c.value.animate({opacity:[0,1]},400),s.value&&s.value.animate&&s.value.animate({opacity:[0,1]},400)});const R=()=>{b.value=!0,l.value&&l.value.animate&&l.value.animate({opacity:[0,1]},400)},W=()=>{o.componentSetting.clickActionType===1?(v(),C()):o.componentSetting.clickActionType===2?window.open(x.value):o.componentSetting.clickActionType===3&&Z(r.value)&&ee({title:S("\u63D0\u793A"),type:"success",message:S("\u590D\u5236\u6210\u529F")})};return(i,I)=>(p(),f("div",{class:"wrapper",style:g({fontSize:e.componentSetting.textFontSize+"px",color:e.componentSetting.textColor,textShadow:e.componentSetting.textShadow,padding:e.componentSetting.padding+"px",fontFamily:e.componentSetting.fontFamily,...z(F),borderRadius:e.element.borderRadius+"px"})},[e.componentSetting.showPoster?u((p(),f("img",{key:0,class:"bg",ref_key:"movieBg",ref:l,src:e.componentSetting.posterType===2?m.value:y.value,style:g({filter:e.componentSetting.posterFilter}),onLoad:R},null,44,oe)),[[d,b.value]]):B("",!0),e.componentSetting.useSpotlight?(p(),f("div",{key:1,class:"bg-effect-box",style:g(k.value)},null,4)):B("",!0),n("blockquote",{class:"blockquote",style:g({background:e.componentSetting.showDecoration?"":"none",maxWidth:e.componentSetting.maxWidth?e.componentSetting.maxWidth+"px":"",cursor:e.componentSetting.clickActionType?"pointer":"default"}),onClick:W},[n("p",{class:"lines",ref_key:"linesText",ref:c},q(r.value),513),u(n("p",{class:"cite",ref_key:"movieText",ref:s},"\u300E "+q(w.value)+" \u300F",513),[[d,e.componentSetting.showCite]]),u(n("div",ae,ce,512),[[d,e.componentSetting.showDecoration]]),u(n("div",se,re,512),[[d,e.componentSetting.showDecoration]])],4)],4))}});var de=$(me,[["__scopeId","data-v-1e65a99b"]]);export{de as default};
