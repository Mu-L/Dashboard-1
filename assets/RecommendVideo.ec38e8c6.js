import{_,d as b,r as p,o as a,j as o,g as s,t as l,h as x,b as w,F as d,f as y,l as c,i as m,m as k}from"./index.e665cea8.js";const V={class:"tips"},C={key:0,class:"video-wrapper"},j=["onClick"],A={class:"img-wrapper"},$=["src"],B=b({__name:"RecommendVideo",emits:["submit"],setup(D,{emit:v}){const r=p(!1),i=p(!1),u=()=>{i.value=!0,r.value||(r.value=!0)},g=e=>{v("submit",e.video),i.value=!1},f=[4,5,6,10,11,14,15,16,17,18,19,21,22,23,24,25,26,27,28,30,31,32,33,34,35,37,39,41,42,43,44,47,49].map(e=>({img:`https://cdn.jsdelivr.net/gh/dsource/static/assets/${e}-test.jpg`,video:`https://cdn.jsdelivr.net/gh/dsource/static/assets/${e}-test.webm`}));return(e,n)=>{const h=y("easy-dialog");return a(),o(d,null,[s("button",{type:"button",class:"btn btn-small btn-primary",style:{margin:"0","margin-right":"5px"},onClick:u},l(e.$t("\u52A8\u6001\u58C1\u7EB8\u63A8\u8350")),1),x(h,{modelValue:i.value,"onUpdate:modelValue":n[0]||(n[0]=t=>i.value=t),title:e.$t("\u52A8\u6001\u58C1\u7EB8\u63A8\u8350"),width:"min(760px, 94vw)",height:"min(480px, 80vh)"},{default:w(()=>[s("div",V,l(e.$t("recommendVideoTips")),1),r.value?(a(),o("div",C,[(a(!0),o(d,null,c(k(f),t=>(a(),o("div",{class:"video",key:t.img,onClick:N=>g(t)},[s("div",A,[t.img?(a(),o("img",{key:0,src:t.img,loading:"lazy"},null,8,$)):m("",!0)])],8,j))),128)),(a(),o(d,null,c(4,t=>s("div",{class:"video-fake",key:t})),64))])):m("",!0)]),_:1},8,["modelValue","title"])],64)}}});var I=_(B,[["__scopeId","data-v-22fc42b3"]]);export{I as default};
