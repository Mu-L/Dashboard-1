import{_ as f,d as y,r,o as s,h as a,e as n,t as u,f as V,b,F as l,j as c,g as m,k,p as C}from"./index.7cf31232.js";const w={class:"tips"},A={key:0,class:"video-wrapper"},$=["onClick"],x={class:"img-wrapper"},B=["src"],D=y({__name:"RecommendVideo",emits:["submit"],setup(E,{emit:_}){const i=r(!1),o=r(!1),p=()=>{o.value=!0,i.value||(i.value=!0)},v=e=>{_("submit",e.video),o.value=!1},g=[4,5,6,10,11,14,15,16,17,18,19,21,22,23,24,25,26,27,28,30,31,32,33,34,35,37,39,41,42,43,44,47,49].map(e=>({img:`https://fastly.jsdelivr.net/gh/dsource/static/assets/${e}-test.jpg`,video:`https://fastly.jsdelivr.net/gh/dsource/static/assets/${e}-test.webm`}));return(e,d)=>{const h=C("easy-dialog");return s(),a(l,null,[n("button",{type:"button",class:"btn btn-small btn-primary",style:{margin:"0","margin-right":"5px"},onClick:p},u(e.$t("\u52A8\u6001\u58C1\u7EB8\u63A8\u8350")),1),V(h,{modelValue:o.value,"onUpdate:modelValue":d[0]||(d[0]=t=>o.value=t),title:e.$t("\u52A8\u6001\u58C1\u7EB8\u63A8\u8350"),width:"min(760px, 94vw)",height:"min(480px, 80vh)"},{default:b(()=>[n("div",w,u(e.$t("recommendVideoTips")),1),i.value?(s(),a("div",A,[(s(!0),a(l,null,c(k(g),t=>(s(),a("div",{class:"video",key:t.img,onClick:j=>v(t)},[n("div",x,[t.img?(s(),a("img",{key:0,src:t.img,loading:"lazy"},null,8,B)):m("",!0)])],8,$))),128)),(s(),a(l,null,c(4,t=>n("div",{class:"video-fake",key:t})),64))])):m("",!0)]),_:1},8,["modelValue","title"])],64)}}});var L=f(D,[["__scopeId","data-v-7a651e17"]]);export{L as default};
