var T=Object.defineProperty;var K=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var z=(e,t,n)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,E=(e,t)=>{for(var n in t||(t={}))j.call(t,n)&&z(e,n,t[n]);if(K)for(var n of K(t))N.call(t,n)&&z(e,n,t[n]);return e};import{_ as q,d as J,u as Z,G as _,I as F,a as H,x as G,y as P,r as A,o as c,j as u,g as i,F as W,l as Q,E as g,h as X,b as B,H as Y,m as ee,V as te,s as oe,f as ie,D as w,t as b,L as V,i as m,N as x,R as ne,O as U,p as de,q as ae}from"./index.e665cea8.js";import{a as L,b as se}from"./images.127cbd51.js";const S={tab:{span:1},Q:{keyCode:81},W:{keyCode:87},E:{keyCode:69},R:{keyCode:82},T:{keyCode:84},Y:{keyCode:89},U:{keyCode:85},I:{keyCode:73},O:{keyCode:79},P:{keyCode:80},brackets:{span:1},caps:{span:2},A:{keyCode:65},S:{keyCode:83},D:{keyCode:68},F:{keyCode:70},G:{keyCode:71},H:{keyCode:72},J:{keyCode:74},K:{keyCode:75},L:{keyCode:76},semi:{span:2},shift:{span:3},Z:{keyCode:90},X:{keyCode:88},C:{keyCode:67},V:{keyCode:86},B:{keyCode:66},N:{keyCode:78},M:{keyCode:77}};const re=J({name:"Collection",props:{componentSetting:{type:Object,required:!0},element:{type:Object,required:!0},isAction:{type:Boolean,default:!1}},setup(e){const t=Z(),n=_(()=>e.componentSetting.userSettingKeyMap||{}),C=_(()=>Y(e.componentSetting.position)),{t:v}=F(),o=H({editingActive:!1,editingInfo:{key:"",url:"",remark:""}}),k=s=>{if(!e.componentSetting.useKeyboardEvent||!t.isLock||document.querySelector("input:focus")||document.querySelector("textarea:focus")||document.querySelector(".ProseMirror-focused")||document.querySelector(".action-popover"))return;const d=s.keyCode,p=Object.keys(S).find(f=>S[f].keyCode===d);p&&n.value[p]&&M(n.value[p].url)};G(()=>{document.addEventListener("keydown",k)}),P(()=>{document.removeEventListener("keydown",k)});const a=A(!1),r=(s,d)=>{d&&n.value[d]?M(n.value[d].url):(a.value=!0,o.editingInfo.key=d,setTimeout(()=>{o.editingActive=!0},200))},l=()=>{o.editingInfo.key="",o.editingInfo.url="",o.editingInfo.remark="",o.editingActive=!1},O=(s,d)=>{a.value=!0,o.editingInfo.key=d;const{url:p,remark:f}=n.value[d];o.editingInfo.url=p,o.editingInfo.remark=f,setTimeout(()=>{o.editingActive=!0},200)},R=()=>{if(o.editingInfo.url&&o.editingInfo.remark&&confirm(v("\u786E\u5B9A\u6E05\u9664\u8BE5\u6309\u952E\u7ED1\u5B9A\u7684\u7F51\u9875\u5417?"))){o.editingInfo.url="",o.editingInfo.remark="";const s=ee(n);delete s[o.editingInfo.key],I(s),l(),a.value=!1}},h=A(!1),$=async()=>{if(!(!o.editingInfo.url||!o.editingInfo.remark))if(/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(o.editingInfo.url)){/https?:\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(o.editingInfo.url)||(o.editingInfo.url="https://"+o.editingInfo.url),h.value=!0;let[s,d]=await te(se(L(o.editingInfo.url)));s&&(d=`${new URL(o.editingInfo.url).origin}/favicon.ico`);const p=JSON.parse(JSON.stringify(n.value));p[o.editingInfo.key]={url:o.editingInfo.url,remark:o.editingInfo.remark,icon:d},I(p),setTimeout(()=>{l(),h.value=!1,a.value=!1},400)}else window.alert(v("URL\u5730\u5740\u4E0D\u6B63\u786E"))},D=s=>{const d=s.currentTarget;d.style.visibility="hidden",d.nextElementSibling.style.visibility="inherit"},I=s=>{const d=JSON.parse(JSON.stringify(oe(e.element)));e.isAction?(d.actionSetting.actionClickValue.componentSetting.userSettingKeyMap=s,t.updateActionElement(d)):d.componentSetting.userSettingKeyMap=s,t.editComponent(d)},M=s=>{e.componentSetting.jumpType===2?window.location.href=s:window.open(s)};return{keyboardMap:S,userSettingKeyMap:n,handleKeyClick:r,handleDialogClose:l,showDialog:O,editState:o,clearEidtInfo:R,handleImgError:D,handleUserKeySave:$,saveLoading:h,dialogVisible:a,positionCSS:C,getTargetIconV2:L}}}),y=e=>(de("data-v-db1d19c0"),e=e(),ae(),e),le=["onClick"],pe={class:"keys"},ce={class:"keys-name"},ue=["onClick"],ye=y(()=>i("svg",{class:"icon",viewBox:"0 0 1024 1024",width:"14",height:"14"},[i("path",{d:"M231.08266667 509.49688889c-0.11377778 51.76888889-41.87022222 93.52533333-93.75288889 93.41155556-51.65511111-0.11377778-93.63911111-42.09777778-93.52533333-93.86666667 0-51.54133333 42.21155555-93.52533333 93.98044444-93.41155556 51.65511111 0.11377778 93.29777778 41.984 93.29777778 93.86666667z m656.49777778-93.75288889c51.76888889 0 93.86666667 41.87022222 93.86666666 93.52533333 0.11377778 51.65511111-41.87022222 93.75288889-93.63911111 93.75288889-51.88266667 0-93.75288889-41.64266667-93.75288889-93.52533333s41.64266667-93.75288889 93.52533334-93.75288889zM512.45511111 603.02222222c-51.65511111 0-93.98044445-42.43911111-93.75288889-93.75288889 0.34133333-51.76888889 42.21155555-93.52533333 93.98044445-93.52533333 51.65511111 0 93.86666667 42.21155555 93.63911111 93.75288889-0.11377778 51.65511111-42.09777778 93.52533333-93.86666667 93.52533333z"})],-1)),be=[ye],ge={key:1,class:"plus-box"},ke=y(()=>i("svg",{class:"icon",viewBox:"0 0 1024 1024",width:"20",height:"20"},[i("path",{d:"M896 469.333333H554.666667V128a42.666667 42.666667 0 0 0-85.333334 0v341.333333H128a42.666667 42.666667 0 0 0 0 85.333334h341.333333v341.333333a42.666667 42.666667 0 0 0 85.333334 0V554.666667h341.333333a42.666667 42.666667 0 0 0 0-85.333334z"})],-1)),fe=[ke],me={key:2,class:"icon-box"},ve=["src"],he={class:"no-icon",style:{visibility:"hidden"}},we={key:3,class:"mark-text"},xe={class:"keys-wrapper",style:{width:"9.08%"}},Se=y(()=>i("div",{class:"keys"},null,-1)),Ce=[Se],Ie={class:"editing-key"},Me=y(()=>i("div",{class:"label"},"URL",-1)),Ke=y(()=>i("div",{class:"line"},null,-1)),ze=y(()=>i("div",{class:"label"},"Remark",-1)),Ee=y(()=>i("div",{class:"line"},null,-1)),_e={class:"footer",style:{"text-align":"right",padding:"12px"}},Ae=["disabled"],Be=["loading"];function Ve(e,t,n,C,v,o){const k=ie("easy-dialog");return c(),u("div",{class:"wrapper",style:g(E({},e.positionCSS))},[i("div",{class:"keyboard-mode",style:g({maxWidth:e.componentSetting.keyboardMaxWidth+"px"})},[(c(!0),u(W,null,Q(e.keyboardMap,(a,r)=>(c(),u("div",{class:w(["keys-wrapper",{hidden:a.span}]),key:r,style:g({width:`${a.span?a.span*4.5:9}%`,padding:`${e.componentSetting.keyGutter}px`})},[i("div",{class:"keys-box",onClick:l=>e.handleKeyClick(l,r),style:g({background:e.componentSetting.keyBackground,borderRadius:e.componentSetting.keyBorderRadius})},[i("div",pe,[i("div",ce,b(r),1),e.userSettingKeyMap[r]?(c(),u("div",{key:0,class:"edit-icon-box",onClick:V(l=>e.showDialog(l,r),["stop"])},be,8,ue)):m("",!0),e.userSettingKeyMap[r]?m("",!0):(c(),u("div",ge,fe)),e.userSettingKeyMap[r]?(c(),u("div",me,[i("img",{class:"icon",src:e.userSettingKeyMap[r].icon||e.getTargetIconV2(e.userSettingKeyMap[r].url),alt:"link",onError:t[0]||(t[0]=(...l)=>e.handleImgError&&e.handleImgError(...l))},null,40,ve),i("div",he,b(e.userSettingKeyMap[r].remark.slice(0,1)),1)])):m("",!0),e.userSettingKeyMap[r]&&e.userSettingKeyMap[r].remark?(c(),u("div",we,b(e.userSettingKeyMap[r].remark),1)):m("",!0)])],12,le)],6))),128)),i("div",xe,[i("div",{class:"keys-box",style:g({background:e.componentSetting.keyBackground,borderRadius:e.componentSetting.keyBorderRadius})},Ce,4)])],4),X(k,{modelValue:e.dialogVisible,"onUpdate:modelValue":t[6]||(t[6]=a=>e.dialogVisible=a),width:"300px",height:"330px",closeOnClickOutside:"",onClose:e.handleDialogClose},{footer:B(()=>[i("div",_e,[i("button",{type:"button",class:"btn",disabled:!e.editState.editingInfo.url&&!e.editState.editingInfo.remark,onClick:t[4]||(t[4]=(...a)=>e.clearEidtInfo&&e.clearEidtInfo(...a))},b(e.$t("\u6E05\u7A7A")),9,Ae),i("button",{type:"button",class:"btn btn-primary",loading:e.saveLoading,onClick:t[5]||(t[5]=(...a)=>e.handleUserKeySave&&e.handleUserKeySave(...a))},b(e.$t("\u786E\u8BA4")),9,Be)])]),default:B(()=>[x(i("div",{class:"edit-content",onKeydown:t[3]||(t[3]=V(()=>{},["stop"]))},[i("div",Ie,b(e.editState.editingInfo.key),1),i("div",{class:w(["row-input",{active:e.editState.editingInfo.url.length>0}])},[x(i("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=a=>e.editState.editingInfo.url=a)},null,512),[[U,e.editState.editingInfo.url]]),Me,Ke],2),i("div",{class:w(["row-input",{active:e.editState.editingInfo.remark.length>0}])},[x(i("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=a=>e.editState.editingInfo.remark=a)},null,512),[[U,e.editState.editingInfo.remark]]),ze,Ee],2)],544),[[ne,e.editState.editingActive]])]),_:1},8,["modelValue","onClose"])],4)}var Re=q(re,[["render",Ve],["__scopeId","data-v-db1d19c0"]]);export{Re as default};
