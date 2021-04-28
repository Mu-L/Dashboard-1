var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,n=Object.getOwnPropertySymbols,i=Object.prototype.propertyIsEnumerable,a=(t,n,i)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[n]=i,o=(e,o)=>{for(var s in o||(o={}))t.call(o,s)&&a(e,s,o[s]);if(n)for(var s of n(o))i.call(o,s)&&a(e,s,o[s]);return e};import{s,u as r,c as d,m as l}from"./index.cb8eb178.js";import{d as c,f as g,r as u,e as y,C as p,D as k,aa as m,K as v,p as f,h,A as C,o as b,j as S,s as I,F as w,k as x,t as K,l as M,q as E,m as A,n as O,a9 as j,u as D}from"./element-plus.99702569.js";const L={tab:{span:1},Q:{keyCode:81},W:{keyCode:87},E:{keyCode:69},R:{keyCode:82},T:{keyCode:84},Y:{keyCode:89},U:{keyCode:85},I:{keyCode:73},O:{keyCode:79},P:{keyCode:80},brackets:{span:1},caps:{span:2},A:{keyCode:65},S:{keyCode:83},D:{keyCode:68},F:{keyCode:70},G:{keyCode:71},H:{keyCode:72},J:{keyCode:74},K:{keyCode:75},L:{keyCode:76},semi:{span:2},shift:{span:3},Z:{keyCode:90},X:{keyCode:88},C:{keyCode:67},V:{keyCode:86},B:{keyCode:66},N:{keyCode:78},M:{keyCode:77}};function U(e){return new Promise(((t,n)=>{(function(e,t="image/png",n,i){return new Promise(((a,o)=>{const s=new XMLHttpRequest;s.open("GET",e,!0),s.responseType="arraybuffer",i&&(s.timeout=i),s.onload=()=>{if(200===s.status){const e=new Uint8Array(s.response);let n=e.length;const i=new Array(n);for(;n--;)i[n]=String.fromCharCode(e[n]);const o=i.join(""),r=window.btoa(o);a("data:"+(t||"image/png")+";base64,"+r)}},s.onerror=e=>{o(e)},s.onprogress=e=>{n&&n(e)},i&&(s.ontimeout=e=>{s.abort(),o(e)}),s.send()}))})(`http://favicon.cccyun.cc/${e}`,"image/x-icon",null,5e3).then((e=>{const i=new Image;i.src=e,i.onload=()=>{const e=document.createElement("canvas"),n=e.getContext("2d"),a=i.width>32?32:i.width,o=i.height>32?32:i.height;e.width=a,e.height=o,n.drawImage(i,0,0,a,o);const s=n.getImageData(0,0,a,o),[r,d,l,c]=[255,255,255,255];for(let t=0;t<s.data.length;t+=4){const e=s.data[t],n=s.data[t+1],i=s.data[t+2],a=s.data[t+3];Math.sqrt((e-r)**2+(n-d)**2+(i-l)**2+(a-c)**2)<=0&&(s.data[t]=0,s.data[t+1]=0,s.data[t+2]=0,s.data[t+3]=0)}n.putImageData(s,0,0);const g=e.toDataURL("image/png");t(g)},i.onerror=e=>{n(e)}}),(e=>{n(e)}))}))}var T=c({name:"Collection",components:{AnimationDialog:s},props:{componentSetting:{type:Object,required:!0},element:{type:Object,required:!0}},setup(e){const t=r(),n=g((()=>e.componentSetting.userSettingKeyMap||{})),i=g((()=>l(e.componentSetting.position))),a=u({editingActive:!1,editingInfo:{key:"",url:"",remark:""}}),o=y(!1),s=i=>{if(!e.componentSetting.useKeyboardEvent)return;if(!t.state.isLock)return;if(document.querySelector("input:focus")||document.querySelector("textarea:focus"))return;const a=i.keyCode,o=Object.keys(L).find((e=>L[e].keyCode===a));o&&n.value[o]&&window.open(n.value[o].url)};p((()=>{document.addEventListener("keydown",s)})),k((()=>{document.removeEventListener("keydown",s)}));const c=y(),f=()=>{a.editingInfo.key="",a.editingInfo.url="",a.editingInfo.remark="",a.editingActive=!1},h=y(!1),C=n=>{const i=JSON.parse(JSON.stringify(v(e.element)));i.componentSetting.userSettingKeyMap=n,t.commit("editComponent",i)};return{keyboardMap:L,userSettingKeyMap:n,handleKeyClick:(e,t)=>{t&&n.value[t]?window.open(n.value[t].url):(c.value.open(e.currentTarget),a.editingInfo.key=t,setTimeout((()=>{a.editingActive=!0,o.value=!0}),200))},handleDialogClose:f,showDialog:(e,t)=>{var i,s;const r=null==(s=null==(i=null==e?void 0:e.currentTarget)?void 0:i.parentNode)?void 0:s.parentNode;c.value.open(r),a.editingInfo.key=t;const{url:d,remark:l}=n.value[t];a.editingInfo.url=d,a.editingInfo.remark=l,setTimeout((()=>{a.editingActive=!0,o.value=!0}),200)},editState:a,clearEidtInfo:()=>{if(a.editingInfo.url&&a.editingInfo.remark&&confirm("确定清除该按键绑定的网页吗?")){a.editingInfo.url="",a.editingInfo.remark="";const e=m(n);delete e[a.editingInfo.key],C(e),f(),c.value.close()}},handleImgError:e=>{const t=e.currentTarget;t.style.visibility="hidden",t.nextElementSibling.style.visibility="visible"},handleUserKeySave:async()=>{if(a.editingInfo.url&&a.editingInfo.remark)if(/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(a.editingInfo.url)){/https?:\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(a.editingInfo.url)||(a.editingInfo.url="http://"+a.editingInfo.url),h.value=!0;let[e,t]=await d(U(a.editingInfo.url));e&&(t=`http://favicon.cccyun.cc/${a.editingInfo.url}`);const i=JSON.parse(JSON.stringify(n.value));i[a.editingInfo.key]={url:a.editingInfo.url,remark:a.editingInfo.remark,icon:t},C(i),setTimeout((()=>{f(),h.value=!1,c.value.close()}),400)}else window.alert("URL地址不正确")},saveLoading:h,dialog:c,positionCSS:i,dialogFooterVisible:o}}});const z=D();f("data-v-584af2aa");const R={class:"keys"},V={class:"keys-name"},q=I("svg",{class:"icon",viewBox:"0 0 1024 1024",width:"14",height:"14"},[I("path",{d:"M231.08266667 509.49688889c-0.11377778 51.76888889-41.87022222 93.52533333-93.75288889 93.41155556-51.65511111-0.11377778-93.63911111-42.09777778-93.52533333-93.86666667 0-51.54133333 42.21155555-93.52533333 93.98044444-93.41155556 51.65511111 0.11377778 93.29777778 41.984 93.29777778 93.86666667z m656.49777778-93.75288889c51.76888889 0 93.86666667 41.87022222 93.86666666 93.52533333 0.11377778 51.65511111-41.87022222 93.75288889-93.63911111 93.75288889-51.88266667 0-93.75288889-41.64266667-93.75288889-93.52533333s41.64266667-93.75288889 93.52533334-93.75288889zM512.45511111 603.02222222c-51.65511111 0-93.98044445-42.43911111-93.75288889-93.75288889 0.34133333-51.76888889 42.21155555-93.52533333 93.98044445-93.52533333 51.65511111 0 93.86666667 42.21155555 93.63911111 93.75288889-0.11377778 51.65511111-42.09777778 93.52533333-93.86666667 93.52533333z"})],-1),N={key:1,class:"plus-box"},_=I("svg",{class:"icon",viewBox:"0 0 1024 1024",width:"20",height:"20"},[I("path",{d:"M896 469.333333H554.666667V128a42.666667 42.666667 0 0 0-85.333334 0v341.333333H128a42.666667 42.666667 0 0 0 0 85.333334h341.333333v341.333333a42.666667 42.666667 0 0 0 85.333334 0V554.666667h341.333333a42.666667 42.666667 0 0 0 0-85.333334z"})],-1),B={key:2,class:"icon-box"},P={class:"no-icon",style:{visibility:"hidden"}},F={key:3,class:"mark-text"},J=I("div",{class:"keys-wrapper",style:{width:"9.08%"}},[I("div",{class:"keys-box"},[I("div",{class:"keys"})])],-1),Z={class:"editing-key"},H=I("div",{class:"label"},"URL",-1),$=I("div",{class:"line"},null,-1),G=I("div",{class:"label"},"Remark",-1),W=I("div",{class:"line"},null,-1),X={key:0,class:"footer",style:{"text-align":"right",padding:"12px"}};h();const Q=z(((e,t,n,i,a,s)=>{const r=C("animation-dialog");return b(),S("div",{class:"wrapper",style:o({},e.positionCSS)},[I("div",{class:"keyboard-mode",style:{maxWidth:e.componentSetting.keyboardMaxWidth+"px"}},[(b(!0),S(w,null,x(e.keyboardMap,((n,i)=>(b(),S("div",{class:["keys-wrapper",{hidden:n.span}],key:i,style:{width:(n.span?4.5*n.span:9)+"%",padding:`${e.componentSetting.keyGutter}px`}},[I("div",{class:"keys-box",onClick:t=>e.handleKeyClick(t,i),style:{background:e.componentSetting.keyBackground,borderRadius:e.componentSetting.keyBorderRadius}},[I("div",R,[I("div",V,K(i),1),e.userSettingKeyMap[i]?(b(),S("div",{key:0,class:"edit-icon-box",onClick:M((t=>e.showDialog(t,i)),["stop"])},[q],8,["onClick"])):E("",!0),e.userSettingKeyMap[i]?E("",!0):(b(),S("div",N,[_])),e.userSettingKeyMap[i]?(b(),S("div",B,[I("img",{class:"icon",src:e.userSettingKeyMap[i].icon||`http://favicon.cccyun.cc/${e.userSettingKeyMap[i].url}`,alt:"link",onError:t[1]||(t[1]=(...t)=>e.handleImgError&&e.handleImgError(...t))},null,40,["src"]),I("div",P,K(e.userSettingKeyMap[i].remark.slice(0,1)),1)])):E("",!0),e.userSettingKeyMap[i]&&e.userSettingKeyMap[i].remark?(b(),S("div",F,K(e.userSettingKeyMap[i].remark),1)):E("",!0)])],12,["onClick"])],6)))),128)),J],4),I(r,{ref:"dialog",width:"300px",height:"330px",onBeforeClose:t[7]||(t[7]=t=>e.dialogFooterVisible=!1),onClose:e.handleDialogClose},{footer:z((()=>[e.dialogFooterVisible?(b(),S("div",X,[I("button",{class:"btn",disabled:!e.editState.editingInfo.url&&!e.editState.editingInfo.remark,onClick:t[5]||(t[5]=(...t)=>e.clearEidtInfo&&e.clearEidtInfo(...t))},"清空",8,["disabled"]),I("button",{class:"btn btn-primary",loading:e.saveLoading,onClick:t[6]||(t[6]=(...t)=>e.handleUserKeySave&&e.handleUserKeySave(...t))},"确认",8,["loading"])])):E("",!0)])),default:z((()=>[A(I("div",{class:"edit-content",onKeydown:t[4]||(t[4]=M((()=>{}),["stop"]))},[I("div",Z,K(e.editState.editingInfo.key),1),I("div",{class:["row-input",{active:e.editState.editingInfo.url.length>0}]},[A(I("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=t=>e.editState.editingInfo.url=t)},null,512),[[j,e.editState.editingInfo.url]]),H,$],2),I("div",{class:["row-input",{active:e.editState.editingInfo.remark.length>0}]},[A(I("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=t=>e.editState.editingInfo.remark=t)},null,512),[[j,e.editState.editingInfo.remark]]),G,W],2)],544),[[O,e.editState.editingActive]])])),_:1},8,["onClose"])],4)}));T.render=Q,T.__scopeId="data-v-584af2aa";export default T;
