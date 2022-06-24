import{_ as O,d as I,S as u,u as R,r as x,a as L,w as M,o as r,c,b as i,e as T,f,g as l,t as p,h as n,i as k,j as $,k as D,T as P,F as Z,l as W,m as A,n as X,p as j,q,s as B,M as G,B as H,v as K}from"./index.87588bc9.js";import{d as Q}from"./direction.8b21c0ae.js";const b=C=>(j("data-v-07764e50"),C=C(),q(),C),Y={key:0,class:"action-component-setting"},tt={class:"title"},ot={class:"flex-center-y"},et={class:"form-row-control"},at=b(()=>l("div",{class:"label"},"Width",-1)),lt={class:"content"},nt=b(()=>l("span",{class:"unit"},"PX",-1)),it={class:"form-row-control"},st=b(()=>l("div",{class:"label"},"Height",-1)),rt={class:"content"},ut=b(()=>l("span",{class:"unit"},"PX",-1)),ct={class:"form-row-control"},mt={class:"label"},dt={class:"content"},ft={class:"form-row-control"},pt={class:"label"},gt={class:"content"},bt={class:"form-row-control"},Ct={class:"label"},_t={class:"content"},kt=b(()=>l("span",{class:"font-control"},"px",-1)),Dt={class:"component-detail-setting"},vt={class:"label"},Vt={class:"content"},ht={class:"footer",style:{"text-align":"right",padding:"12px"}},yt=I({__name:"ActionConfig",setup(C,{expose:N}){const F={actionType:0,actionClickType:1,actionClickValue:{url:"",material:"Empty",w:375,h:400,background:"rgba(255, 255, 255, 0.95)",backgroundFilter:"brightness(0.8)",direction:0,boxShadow:"0 0 4px #89909c",borderRadius:4,componentSetting:JSON.parse(JSON.stringify(u.Empty.formData))}},v=R(),_=x(!1),w=x(),t=L({formData:JSON.parse(JSON.stringify(F)),actionClickFormConf:{}});let m,V=!1;const U=o=>{m=o,o.actionSetting&&o.actionSetting.actionType?t.formData=JSON.parse(JSON.stringify(o.actionSetting)):t.formData=JSON.parse(JSON.stringify(F));const e=t.formData.actionClickValue.material;t.actionClickFormConf=T(typeof u[e].formConf=="function"?u[e].formConf(t.formData.actionClickValue.componentSetting):u[e].formConf),_.value=!0,setTimeout(()=>{V=!0})},g=()=>{_.value=!1,V=!1};M(()=>t.formData.actionClickValue.material,()=>{var o,e;if(V){if(((e=(o=m==null?void 0:m.actionSetting)==null?void 0:o.actionClickValue)==null?void 0:e.material)===t.formData.actionClickValue.material)return;const s=t.formData.actionClickValue.material;t.formData.actionClickValue.componentSetting=JSON.parse(JSON.stringify(u[s].formData)),t.actionClickFormConf=T(typeof u[s].formConf=="function"?u[s].formConf(t.formData.actionClickValue.componentSetting):u[s].formConf)}});const J=()=>{if(t.formData.actionType){if(t.formData.actionClickType===1)w.value.validate(o=>{if(o){const e={...m,actionSetting:B(t.formData)};v.editComponent(e),g()}else return!1});else if(t.formData.actionClickType===2)if(/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(t.formData.actionClickValue.url)){/https?:\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(t.formData.actionClickValue.url)||(t.formData.actionClickValue.url="https://"+t.formData.actionClickValue.url);const o={...m,actionSetting:B(t.formData)};v.editComponent(o),g()}else alert("\u8DF3\u8F6C\u76EE\u6807URL\u4E0D\u5408\u6CD5")}else{const o={...m,actionSetting:null};v.editComponent(o),g()}};return N({open:U,close:g}),(o,e)=>{const s=f("el-option"),h=f("el-select"),d=f("el-form-item"),S=f("el-input"),E=f("el-form"),y=f("el-input-number"),z=f("easy-dialog");return r(),c(z,{modelValue:_.value,"onUpdate:modelValue":e[11]||(e[11]=a=>_.value=a),title:o.$t("\u7EC4\u4EF6\u4EA4\u4E92\u914D\u7F6E"),width:"min(480px, 98vw)",height:"min(520px, 90vh)"},{footer:i(()=>[l("div",ht,[l("button",{type:"button",class:"btn",onClick:g},p(o.$t("\u53D6\u6D88")),1),l("button",{type:"button",class:"btn btn-primary",onClick:J},p(o.$t("\u786E\u8BA4")),1)])]),default:i(()=>[l("div",null,[n(E,{"label-width":"90px"},{default:i(()=>[n(d,{label:o.$t("\u4EA4\u4E92\u884C\u4E3A")},{default:i(()=>[n(h,{modelValue:t.formData.actionType,"onUpdate:modelValue":e[0]||(e[0]=a=>t.formData.actionType=a)},{default:i(()=>[n(s,{label:o.$t("\u65E0"),value:0},null,8,["label"]),n(s,{label:o.$t("\u9F20\u6807\u70B9\u51FB"),value:1},null,8,["label"])]),_:1},8,["modelValue"])]),_:1},8,["label"]),t.formData.actionType===1?(r(),c(d,{key:0,label:o.$t("\u9F20\u6807\u70B9\u51FB")},{default:i(()=>[n(h,{modelValue:t.formData.actionClickType,"onUpdate:modelValue":e[1]||(e[1]=a=>t.formData.actionClickType=a)},{default:i(()=>[n(s,{label:o.$t("\u663E\u793A\u65B0\u7EC4\u4EF6(Toggle)"),value:1},null,8,["label"]),n(s,{label:o.$t("\u8DF3\u8F6C\u94FE\u63A5"),value:2},null,8,["label"]),n(s,{label:o.$t("\u8FD0\u884CJavascript\u811A\u672C"),value:3,disabled:""},null,8,["label"])]),_:1},8,["modelValue"])]),_:1},8,["label"])):k("",!0),t.formData.actionType===1&&t.formData.actionClickType===2?(r(),c(d,{key:1},{default:i(()=>[n(S,{modelValue:t.formData.actionClickValue.url,"onUpdate:modelValue":e[2]||(e[2]=a=>t.formData.actionClickValue.url=a),placeholder:o.$t("\u8BF7\u8F93\u5165\u4E00\u4E2A\u53EF\u7528\u7684\u8DF3\u8F6C\u94FE\u63A5")},null,8,["modelValue","placeholder"])]),_:1})):k("",!0)]),_:1}),t.formData.actionType===1&&t.formData.actionClickType===1?(r(),$("div",Y,[l("div",tt,p(o.$t("Toggle\u7EC4\u4EF6\u914D\u7F6E")),1),n(E,{ref:"componentSettingForm",class:"setting-form1","label-position":"top"},{default:i(()=>[n(d,{label:o.$t("\u7269\u6599\u7EC4\u4EF6")},{default:i(()=>[l("div",ot,[(r(),c(D(G),{modelValue:t.formData.actionClickValue.material,"onUpdate:modelValue":e[3]||(e[3]=a=>t.formData.actionClickValue.material=a)},null,8,["modelValue"])),n(P,{content:o.$t("actionMaterialTips")},null,8,["content"])])]),_:1},8,["label"]),n(d,{label:o.$t("\u5C3A\u5BF8")},{default:i(()=>[l("div",et,[at,l("div",lt,[n(y,{modelValue:t.formData.actionClickValue.w,"onUpdate:modelValue":e[4]||(e[4]=a=>t.formData.actionClickValue.w=a),"controls-position":"right",min:40,max:1920,style:{width:"100px"}},null,8,["modelValue"]),nt])]),l("div",it,[st,l("div",rt,[n(y,{modelValue:t.formData.actionClickValue.h,"onUpdate:modelValue":e[5]||(e[5]=a=>t.formData.actionClickValue.h=a),"controls-position":"right",min:40,max:1920,style:{width:"100px"}},null,8,["modelValue"]),ut])])]),_:1},8,["label"]),n(d,{label:o.$t("Popover\u914D\u7F6E")},{default:i(()=>[l("div",ct,[l("div",mt,p(o.$t("\u65B9\u5411")),1),l("div",dt,[n(h,{modelValue:t.formData.actionClickValue.direction,"onUpdate:modelValue":e[6]||(e[6]=a=>t.formData.actionClickValue.direction=a)},{default:i(()=>[(r(!0),$(Z,null,W(A(Q),a=>(r(),c(s,{label:a.label,value:a.value,key:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])]),l("div",ft,[l("div",pt,p(o.$t("\u9634\u5F71")),1),l("div",gt,[n(S,{style:{width:"100%"},modelValue:t.formData.actionClickValue.boxShadow,"onUpdate:modelValue":e[7]||(e[7]=a=>t.formData.actionClickValue.boxShadow=a),clearable:"",placeholder:o.$t("shadowPlaceholder")},null,8,["modelValue","placeholder"])])]),l("div",bt,[l("div",Ct,p(o.$t("\u5706\u89D2")),1),l("div",_t,[n(y,{modelValue:t.formData.actionClickValue.borderRadius,"onUpdate:modelValue":e[8]||(e[8]=a=>t.formData.actionClickValue.borderRadius=a),"controls-position":"right",min:0,max:100,style:{width:"100px"}},null,8,["modelValue"]),kt])])]),_:1},8,["label"]),n(d,{label:o.$t("\u80CC\u666F")},{default:i(()=>[(r(),c(D(H),{background:t.formData.actionClickValue.background,"onUpdate:background":e[9]||(e[9]=a=>t.formData.actionClickValue.background=a),w:t.formData.actionClickValue.w,h:t.formData.actionClickValue.h,positionMode:2},null,40,["background","w","h"])),t.formData.actionClickValue.background.includes("url")?(r(),c(D(K),{key:0,filter:t.formData.actionClickValue.backgroundFilter,"onUpdate:filter":e[10]||(e[10]=a=>t.formData.actionClickValue.backgroundFilter=a)},null,40,["filter"])):k("",!0)]),_:1},8,["label"])]),_:1},512),l("div",Dt,[l("div",vt,p(o.$t("\u7EC4\u4EF6\u914D\u7F6E")),1),l("div",Vt,[(r(),c(D(A(X)),{formData:t.formData.actionClickValue.componentSetting,formConf:t.actionClickFormConf,ref_key:"componentDetailForm",ref:w,"label-width":"100px"},null,8,["formData","formConf"]))])])])):k("",!0)])]),_:1},8,["modelValue","title"])}}});var St=O(yt,[["__scopeId","data-v-07764e50"]]);export{St as default};
