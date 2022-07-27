import{_ as x,d as _,u as ee,r as g,G as y,x as ne,y as te,H as oe,o as s,h as l,e as u,C as h,L as E,g as d,t as f,N as T,O as ie,f as S,b as I,P as K,F as D,j as O,D as B,A as ae,Q as se,R as le,U as re,p as ue}from"./index.7cf31232.js";import{g as ce}from"./images.64bde5d9.js";const L=_({name:"Search",props:{componentSetting:{type:Object,required:!0},element:{type:Object,required:!0},isAction:{type:Boolean,default:!1}},setup(e){const o=ee(),c=g(0),k=g(!1),r=g(""),a=g([]),i=g(-1),t=g(!1),v=g(),b=y(()=>e.componentSetting.engineList[c.value]||e.componentSetting.engineList[0]);let w;const J=n=>{c.value=n,k.value=!1},C=()=>{e.componentSetting.rememberHistory&&q(r.value);let n=b.value.link;/\[0\]/.test(n)?n=n.replace(/\[0\]/,encodeURIComponent(r.value)):n=n+encodeURIComponent(r.value),e.componentSetting.jumpType===2?window.location.href=n:window.open(n),r.value="",a.value=[],v.value.blur()},R=n=>{[9,13,38,40].includes(n.keyCode)?(n.keyCode===9&&(n.shiftKey?(c.value=c.value<=0?e.componentSetting.engineList.length-1:--c.value,n.preventDefault()):(c.value=c.value>=e.componentSetting.engineList.length-1?0:++c.value,n.preventDefault())),n.keyCode===13&&C(),n.keyCode===38&&(i.value=i.value<=0&&a.value.length>0?a.value.length-1:i.value-1,r.value=a.value[i.value]),n.keyCode===40&&(i.value=i.value<a.value.length-1&&a.value.length>0?i.value+1:0,r.value=a.value[i.value])):(w&&window.clearTimeout(w),w=window.setTimeout(()=>{H()},400))},A=y(()=>e.componentSetting.focusBgAnimation&&o.global.background.includes("url")),j=()=>{H(),e.componentSetting.showTabTips&&(!e.componentSetting.rememberHistory||e.componentSetting.rememberHistoryList.length===0)&&(t.value=!0),A.value&&o.updateState({key:"showBackgroundEffect",value:!0})},M=()=>{setTimeout(()=>{t.value=!1},200),a.value=[],A.value&&o.updateState({key:"showBackgroundEffect",value:!1})},P=()=>{t.value=!1;const n=JSON.parse(JSON.stringify(e.element));e.isAction?(n.actionSetting.actionClickValue.componentSetting.showTabTips=!1,o.updateActionElement(n)):n.componentSetting.showTabTips=!1,o.editComponent(n)},z=()=>{r.value=""},W=n=>{a.value=[],i.value=-1,r.value=n,setTimeout(()=>{C()},200)};async function H(){if(!r.value){e.componentSetting.rememberHistory?a.value=e.componentSetting.rememberHistoryList||[]:a.value=[],i.value=-1;return}if(!!e.componentSetting.keywordLink)try{const n=await fetch(`${le}/getAutomatedKeywords?s=${r.value}`),{errCode:m,data:p}=await n.json();if(m===200)t.value=!1,r.value&&(a.value=p);else throw new Error("403")}catch{a.value=[],i.value=-1}}function q(n){const m=JSON.parse(JSON.stringify(e.element)),p=m.componentSetting.rememberHistoryList||[];~p.indexOf(n)||(p.unshift(n),p.length>10&&(p.length=10),e.isAction?(m.actionSetting.actionClickValue.componentSetting.rememberHistoryList=p,o.updateActionElement(m)):m.componentSetting.rememberHistoryList=p,o.editComponent(m))}function G(){const n=JSON.parse(JSON.stringify(e.element));e.isAction?(n.actionSetting.actionClickValue.componentSetting.rememberHistoryList=[],o.updateActionElement(n)):n.componentSetting.rememberHistoryList=[],o.editComponent(n)}const F=g();function $(n){k.value&&!F.value.contains(n.target)&&(k.value=!1)}ne(()=>{t.value=e.element.showTabTips,document.addEventListener("click",$)}),te(()=>{document.removeEventListener("click",$)});const Q=y(()=>oe(e.componentSetting.position)),N=y(()=>o.isLock),X=n=>{N.value&&n.stopPropagation()},Y=y(()=>e.componentSetting.boxBackground||"rgba(255,255,255,0.9)"),Z=y(()=>e.componentSetting.textColor||"#464650");return{activeEngine:c,showEngine:k,searchKey:r,linkSearchArr:a,linkSearchArrActive:i,showTabTips:t,activeEngineItem:b,handleChangeEngine:J,handleInputKeyDown:R,handleInputFocus:j,handleInputBlur:M,hanldeNoShowMore:P,handleClear:z,handleLinkSearchJump:W,handleSearchBtnClick:C,searchInput:v,engineSelector:F,positionCSS:Q,getTargetIcon:ce,clearHistory:G,contextmenu:X,isLock:N,boxBackground:Y,textColor:Z}}}),V=()=>{re(e=>({"0797283a":e.boxBackground,caa97c80:e.textColor}))},U=L.setup;L.setup=U?(e,o)=>(V(),U(e,o)):V;const de=L,me=["src"],pe=["src"],ge={key:2,class:"no-icon"},he={class:"search-input-box-wrapper"},ve=["onClick"],fe=["src"],ye=["src"],Se={key:2,class:"no-icon"},ke={class:"text"},be=["onClick"],we={key:0,class:"clear-history"},Ce={class:"tab-tooltips"},Ee={class:"main"};function Te(e,o,c,k,r,a){const i=ue("Icon");return s(),l("div",{class:"wrapper",style:h({padding:e.componentSetting.padding+"px",...e.positionCSS})},[u("div",{class:"search-wrapper-box",style:h({maxWidth:`${e.componentSetting.maxWidth||600}px`,pointerEvents:e.isLock?"all":"none"}),onContextmenu:o[9]||(o[9]=(...t)=>e.contextmenu&&e.contextmenu(...t))},[u("div",{class:"search-main-box",style:h({boxShadow:e.componentSetting.boxShadow,borderRadius:`${e.componentSetting.boxRadius||4}px`,padding:`0 ${(e.componentSetting.boxRadius||4)/4}px`,backdropFilter:e.componentSetting.backdropBlur?"blur(5px)":"none"})},[u("div",{class:"search-engine-box",style:h({filter:e.componentSetting.backdropBlur?"drop-shadow(1px 2px 4px #262626)":"none"}),onClick:o[0]||(o[0]=E(t=>e.showEngine=!e.showEngine,["stop"]))},[e.activeEngineItem.iconType==="local"||e.activeEngineItem.iconType==="network"?(s(),l("img",{key:0,src:e.activeEngineItem.iconPath,alt:"icon",width:"24",height:"24"},null,8,me)):d("",!0),e.activeEngineItem.iconType==="api"?(s(),l("img",{key:1,src:e.getTargetIcon(e.activeEngineItem.link),alt:"icon",width:"24",height:"24"},null,8,pe)):d("",!0),e.activeEngineItem.iconType==="text"?(s(),l("div",ge,f(e.activeEngineItem.name.slice(0,1)),1)):d("",!0)],4),u("div",he,[T(u("input",{class:"search-input-box",style:h({color:e.componentSetting.textColor}),ref:"searchInput","onUpdate:modelValue":o[1]||(o[1]=t=>e.searchKey=t),onKeydown:o[2]||(o[2]=E((...t)=>e.handleInputKeyDown&&e.handleInputKeyDown(...t),["stop"])),onFocus:o[3]||(o[3]=(...t)=>e.handleInputFocus&&e.handleInputFocus(...t)),onBlur:o[4]||(o[4]=(...t)=>e.handleInputBlur&&e.handleInputBlur(...t)),tabindex:"1"},null,36),[[ie,e.searchKey]]),e.searchKey?(s(),l("div",{key:0,class:"clear-btn",onClick:o[5]||(o[5]=(...t)=>e.handleClear&&e.handleClear(...t))},[S(i,{name:"close"})])):d("",!0)]),u("div",{class:"search-btn",style:h({color:e.componentSetting.textColor,filter:e.componentSetting.backdropBlur?"drop-shadow(1px 2px 4px #262626)":"none"}),onClick:o[6]||(o[6]=(...t)=>e.handleSearchBtnClick&&e.handleSearchBtnClick(...t))},[S(i,{name:"search"})],4)],4),S(B,{name:"fadeInUp"},{default:I(()=>[T(u("div",{ref:"engineSelector",class:"engine-selector",style:h({backdropFilter:e.componentSetting.backdropBlur?"blur(5px)":"none",filter:e.componentSetting.backdropBlur?"drop-shadow(1px 2px 4px #262626)":"none"})},[(s(!0),l(D,null,O(e.componentSetting.engineList,(t,v)=>(s(),l("div",{key:v,class:"engine-list-item",onClick:b=>e.handleChangeEngine(v)},[t.iconType==="local"||t.iconType==="network"?(s(),l("img",{key:0,src:t.iconPath,alt:"icon",width:"24",height:"24"},null,8,fe)):d("",!0),t.iconType==="api"?(s(),l("img",{key:1,src:e.getTargetIcon(t.link),alt:"icon",width:"24",height:"24"},null,8,ye)):d("",!0),t.iconType==="text"?(s(),l("div",Se,f(t.name.slice(0,1)),1)):d("",!0),u("div",ke,f(t.name),1)],8,ve))),128))],4),[[K,e.showEngine]])]),_:1}),S(B,{name:"fadeInUp"},{default:I(()=>[e.linkSearchArr.length>0?(s(),l("div",{key:0,class:"link-search-wrapper",style:h({backdropFilter:e.componentSetting.backdropBlur?"blur(5px)":"none"})},[(s(!0),l(D,null,O(e.linkSearchArr,(t,v)=>(s(),l("div",{class:ae(["link-search-item",{active:e.linkSearchArrActive===v}]),key:t,onClick:b=>e.handleLinkSearchJump(t)},f(t),11,be))),128)),!e.searchKey&&e.componentSetting.rememberHistory?(s(),l("div",we,[u("div",{class:"clear-history-btn",onClick:o[7]||(o[7]=(...t)=>e.clearHistory&&e.clearHistory(...t))},[S(i,{name:"delete",size:"1em",style:{"margin-right":"2px"}}),se(" "+f(e.$t("\u6E05\u7A7A\u5386\u53F2\u8BB0\u5F55")),1)])])):d("",!0)],4)):d("",!0)]),_:1}),S(B,{name:"fadeInUp"},{default:I(()=>[T(u("div",Ce,[u("div",Ee,f(e.$t("\u6309Tab\u952E\u53EF\u5FEB\u901F\u5207\u6362\u641C\u7D22\u5F15\u64CE")),1),u("div",{class:"no-more",onClick:o[8]||(o[8]=E((...t)=>e.hanldeNoShowMore&&e.hanldeNoShowMore(...t),["stop"]))},f(e.$t("\u4E0D\u518D\u63D0\u793A")),1)],512),[[K,e.showTabTips]])]),_:1})],36)],4)}var Ae=x(de,[["render",Te],["__scopeId","data-v-69a17b46"]]);export{Ae as default};
