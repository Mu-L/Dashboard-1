import{_ as F,d as v,u as g,x as S,G as w,r as B,o as a,j as n,h as c,b as u,ac as b,D as L,i as k,f as l,F as x,l as C,c as E,g as f,t as i,E as z,m as H}from"./index.7b0c689e.js";const I={class:"wrapper"},N={style:{float:"left","font-weight":"bold"}},O={style:{float:"right",color:"#8492a6","font-size":"13px","margin-left":"36px"}},R=v({name:"FontSelector",props:{showRefresh:{type:Boolean,default:!1},showHarmonyFont:{type:Boolean,default:!1}},setup(r){const p=r,e=g();S(()=>{(!e.fontFamilyList||e.fontFamilyList.length===0)&&e.updateFontFamilyList()});const _=w(()=>{const o=[];return(p.showHarmonyFont||e.global.loadHarmonyOSFont)&&o.push({cn:"\u9E3F\u8499OS(\u5916\u90E8)",en:"HarmonyOS_Regular"}),[...o,...e.fontFamilyList]}),s=B(!1),d=()=>{e.updateFontFamilyList(),s.value=!0,setTimeout(()=>{s.value=!1},500)};return(o,V)=>{const m=l("el-option"),y=l("el-select"),h=l("Icon");return a(),n("div",I,[c(y,b({placeholder:o.$t("\u8BF7\u9009\u62E9\u76F8\u5173\u5B57\u4F53\u5E93"),clearable:"",filterable:"","allow-create":"","default-first-option":""},o.$attrs),{default:u(()=>[(a(!0),n(x,null,C(H(_),t=>(a(),E(m,{key:t.cn,value:t.en,label:t.cn,style:z({fontFamily:t.en})},{default:u(()=>[f("span",N,i(t.cn),1),f("span",O,i(t.en),1)]),_:2},1032,["value","label","style"]))),128))]),_:1},16,["placeholder"]),r.showRefresh?(a(),n("div",{key:0,class:L(["icon-refresh",s.value&&"rotate"]),onClick:d},[c(h,{name:"refresh",size:"1em"})],2)):k("",!0)])}}});var $=F(R,[["__scopeId","data-v-636f402d"]]);export{$ as default};