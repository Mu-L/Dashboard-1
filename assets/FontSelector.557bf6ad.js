import{_ as e,u as a}from"./index.25a52ed2.js";import{z as t,Z as s,D as l,C as o,X as n,a1 as r,S as i,$ as f,a0 as c,ac as p,J as u,M as m,H as d,I as y,G as h,a6 as F,U as v,a2 as L}from"./element-plus.bd20adc7.js";const b=t({name:"FontSelector",props:{showRefresh:{type:Boolean,default:!1}},setup(){const e=a();s((()=>{e.state.fontFamilyList&&0!==e.state.fontFamilyList.length||e.commit("updateFontFamilyList")}));const t=l((()=>e.state.fontFamilyList)),n=o(!1);return{fontList:t,rotate:n,refresh:()=>{e.commit("updateFontFamilyList"),n.value=!0,setTimeout((()=>{n.value=!1}),500)}}}}),_={class:"wrapper"},g={style:{float:"left","font-weight":"bold"}},w={style:{float:"right",color:"#8492a6","font-size":"13px","margin-left":"36px"}};var x=e(b,[["render",function(e,a,t,s,l,o){const b=n("el-option"),x=n("el-select");return m(),r("div",_,[i(x,c({placeholder:"请选择相关字体库",clearable:""},e.$attrs),{default:f((()=>[(m(!0),r(d,null,y(e.fontList,(e=>(m(),h(b,{key:e.cn,value:e.en,label:e.cn,style:L({fontFamily:e.en})},{default:f((()=>[F("span",g,v(e.cn),1),F("span",w,v(e.en),1)])),_:2},1032,["value","label","style"])))),128))])),_:1},16),e.showRefresh?(m(),r("i",{key:0,class:p(["el-icon-refresh",{rotate:e.rotate}]),onClick:a[0]||(a[0]=(...a)=>e.refresh&&e.refresh(...a))},null,2)):u("",!0)])}],["__scopeId","data-v-7f535d1e"]]);export{x as default};