import{_ as u,d,r as p,o as c,h as m,e as t,Q as b,t as o,f as g,b as l,F as f,ae as v,af as w,ag as h,p as C}from"./index.95097993.js";const _=d({name:"CleanCache",setup(){const e=p(!1);return{dialogVisible:e,show:()=>{e.value=!0},close:()=>{e.value=!1},submit:async()=>{localStorage.removeItem("config"),localStorage.removeItem("global"),v&&(await w.clear(),await h.clear()),window.location.reload()}}}}),$={class:"wrapper"},y={class:"tips"},V={class:"button-wrapper"},D={class:"warn-text"},I={class:"footer",style:{"text-align":"right",padding:"12px"}};function k(e,a,n,i,B,T){const r=C("easy-dialog");return c(),m(f,null,[t("div",$,[t("p",y,[b(o(e.$t("clearDataTips1")),1),t("b",null,o(e.$t("clearDataTips2")),1)]),t("div",V,[t("button",{class:"btn btn-danger",onClick:a[0]||(a[0]=(...s)=>e.show&&e.show(...s))},o(e.$t("\u5220\u9664\u6240\u6709\u6570\u636E")),1)])]),g(r,{modelValue:e.dialogVisible,"onUpdate:modelValue":a[3]||(a[3]=s=>e.dialogVisible=s),title:e.$t("\u63D0\u793A"),width:"300px",height:"200px"},{footer:l(()=>[t("div",I,[t("button",{type:"button",class:"btn",onClick:a[1]||(a[1]=(...s)=>e.close&&e.close(...s))},o(e.$t("\u53D6\u6D88")),1),t("button",{type:"button",class:"btn btn-primary",onClick:a[2]||(a[2]=(...s)=>e.submit&&e.submit(...s))},o(e.$t("\u786E\u8BA4")),1)])]),default:l(()=>[t("p",D,"\u2757 "+o(e.$t("clearDataTips")),1)]),_:1},8,["modelValue","title"])],64)}var E=u(_,[["render",k],["__scopeId","data-v-d1d83822"]]);export{E as default};
