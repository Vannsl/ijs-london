import{d as _,u as d,a as p,c as m,b as h,e as n,f as t,t as o,g as a,F as u,r as f,n as g,h as v,o as r,i as x,j as y,k as b,l as k,m as N,_ as P}from"./index-c55d2f7d.js";import{N as w}from"./NoteDisplay-94d0aa3f.js";const T={class:"m-4"},V={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},S={class:"opacity-50"},B={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},j=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},C=_({__name:"PresenterPrint",setup(F){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const i=h(()=>v.map(s=>{var l;return(l=s.meta)==null?void 0:l.slide}).filter(s=>s!==void 0&&s.noteHTML!==""));return(s,l)=>(r(),n("div",{id:"page-root",style:g(a(N))},[t("div",T,[t("div",V,[t("h1",L,o(a(m).title),1),t("div",S,o(new Date().toLocaleString()),1)]),(r(!0),n(u,null,f(a(i),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",D,[t("div",H,o(e==null?void 0:e.no)+"/"+o(a(x)),1),y(" "+o(e==null?void 0:e.title)+" ",1),j])]),b(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(i).length-1?(r(),n("hr",z)):k("v-if",!0)]))),128))])],4))}}),E=P(C,[["__file","/Users/vanessaotto/Talks/vue-tiptap-ai/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
