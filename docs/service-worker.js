if(!self.define){let e,c={};const s=(s,t)=>(s=new URL(s+".js",t).href,c[s]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=c,document.head.appendChild(e)}else e=s,importScripts(s),c()})).then((()=>{let e=c[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(t,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(c[r])return;let n={};const o=e=>s(e,r),l={module:{uri:r},exports:n,require:o};c[r]=Promise.all(t.map((e=>l[e]||o(e)))).then((e=>(i(...e),n)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"pacct"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/pacct/css/app.91c03603.css",revision:null},{url:"/pacct/img/16.fb897ce4.jpg",revision:null},{url:"/pacct/index.html",revision:"f54c97d7a6cf0817d313e3cc6a9443f0"},{url:"/pacct/js/app.5b99bccb.js",revision:null},{url:"/pacct/js/chunk-vendors.0b79e621.js",revision:null},{url:"/pacct/manifest.json",revision:"b34b8e64a2e511bae2b391ff8f171883"},{url:"/pacct/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
