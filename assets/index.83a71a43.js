import{U as p}from"./Unset.32b51697.js";import{_ as i,d as l,G as s,u as m,o as t,h as u,C as a,c as d,p as _}from"./index.7cf31232.js";const f=l({name:"Iframe",components:{Unset:p},props:{element:{type:Object,required:!0},componentSetting:{type:Object,required:!0}},setup(e){const n=s(()=>/https?:\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(e.componentSetting.url)?e.componentSetting.url:"http://"+e.componentSetting.url),o=m(),r=s(()=>o.isLock);return{url:n,isLock:r}}}),y=["src"];function F(e,n,o,r,h,k){const c=_("Unset");return t(),u("div",{class:"wrapper",style:a({borderRadius:e.element.borderRadius+"px"})},[e.componentSetting.url?(t(),u("iframe",{key:0,src:e.url,style:a({width:"100%",height:"100%",pointerEvents:e.isLock?"all":"none"}),frameborder:"0"},null,12,y)):(t(),d(c,{key:1,tips:`\u{1F4AB}${e.$t("IFrame\u8DEF\u5F84\u4E22\u5931\uFF0C\u8BF7\u8FDB\u884C\u914D\u7F6E")}`},null,8,["tips"]))],4)}var S=i(f,[["render",F],["__scopeId","data-v-9f855f76"]]);export{S as default};
