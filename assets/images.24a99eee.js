import{R as d}from"./index.95097993.js";function h(o,s="image/png",n,a){return new Promise((c,l)=>{const e=new XMLHttpRequest;e.open("GET",o,!0),e.responseType="arraybuffer",a&&(e.timeout=a),e.onload=()=>{if(e.status===200){const t=new Uint8Array(e.response);let r=t.length;const p=new Array(r);for(;r--;)p[r]=String.fromCharCode(t[r]);const i=p.join(""),u=window.btoa(i),g="data:"+(s||"image/png")+";base64,"+u;c(g)}},e.onerror=t=>{l(t)},e.onprogress=t=>{n&&n(t)},a&&(e.ontimeout=t=>{e.abort(),l(t)}),e.send()})}function m(o,s="redirect",n=!1){let a=`${d}/api/icon?url=${encodeURIComponent(o.replace(/http(s)?:\/\//,""))}`;return s==="source"&&(a+="&type=source"),n&&(a+="&disabledCache=1"),a}async function b(o,s=!1){let n=`${d}/api/icon?url=${encodeURIComponent(o.replace(/http(s)?:\/\//,""))}`;return s&&(n+="&disabledCache=1"),n+="&type=link",await(await fetch(n)).text()}function w(o){return`${d}/api/icon/v2?url=${encodeURIComponent(o.replace(/http(s)?:\/\//,""))}`}function y(o,s,n=1){return new Promise((a,c)=>{const l=URL.createObjectURL(o),e=new Image;e.src=l,e.onload=()=>{let t=e.width,r=e.height;const p=t/r;t=s||t,r=t/p;const i=document.createElement("canvas"),u=i.getContext("2d");i.setAttribute("width",t+"px"),i.setAttribute("height",r+"px"),u.drawImage(e,0,0,t,r);const g=i.toDataURL("image/png",n);a(g)},e.onerror=t=>{c(t)}})}export{w as a,h as b,b as c,y as d,m as g};
