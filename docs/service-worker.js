if(!self.define){let e,s={};const c=(c,t)=>(c=new URL(c+".js",t).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(t,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let n={};const o=e=>c(e,r),l={module:{uri:r},exports:n,require:o};s[r]=Promise.all(t.map((e=>l[e]||o(e)))).then((e=>(i(...e),n)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"pacct"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/pacct/css/app.2d2b63a2.css",revision:null},{url:"/pacct/img/16.fb897ce4.jpg",revision:null},{url:"/pacct/index.html",revision:"5f212147090a9c3e613d3e31b67d028e"},{url:"/pacct/js/app.2fbf188b.js",revision:null},{url:"/pacct/js/chunk-vendors.9166d070.js",revision:null},{url:"/pacct/manifest.json",revision:"b34b8e64a2e511bae2b391ff8f171883"},{url:"/pacct/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
