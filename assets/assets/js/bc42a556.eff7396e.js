"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[33733],{41168:(e,t,r)=>{r.d(t,{Z:()=>o});var s=r(67294),n=r(88746);r(52426);const a={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function o(e){let{tiers:t}=e;return s.createElement(n.Z,{title:`This feature is a available on ${t}.`,style:a},t)}},88586:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>w,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var s=r(87462),n=(r(67294),r(3905)),a=r(41168);const o={title:"Workspaces View",hide_title:!0},i=void 0,c={unversionedId:"workspaces/view-workspaces",id:"version-0.21.2/workspaces/view-workspaces",title:"Workspaces View",description:"{frontMatter.title}",source:"@site/versioned_docs/version-0.21.2/workspaces/view-workspaces.mdx",sourceDirName:"workspaces",slug:"/workspaces/view-workspaces",permalink:"/docs/0.21.2/workspaces/view-workspaces",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.21.2/workspaces/view-workspaces.mdx",tags:[],version:"0.21.2",frontMatter:{title:"Workspaces View",hide_title:!0},sidebar:"docs",previous:{title:"Multi Tenancy",permalink:"/docs/0.21.2/workspaces/multi-tenancy"},next:{title:"Introduction",permalink:"/docs/0.21.2/policy/intro"}},l={},p=[{value:"Workspaces List View",id:"workspaces-list-view",level:2},{value:"Workspace Details View",id:"workspace-details-view",level:2}],u={toc:p};function w(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,s.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",null,o.title," ",(0,n.kt)(a.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,n.kt)("h2",{id:"workspaces-list-view"},"Workspaces List View"),(0,n.kt)("p",null,"From the side menu, you can click on the ",(0,n.kt)("strong",{parentName:"p"},"Workspaces")," tab to go to the workspaces list view."),(0,n.kt)("p",null,"This view lists workspaces across all clusters. You can filter workspaces by their clusters or their names."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Workspaces List View",src:r(75480).Z,width:"1855",height:"917"})),(0,n.kt)("h2",{id:"workspace-details-view"},"Workspace Details View"),(0,n.kt)("p",null,"You can go to this view by clicking on the name of the workspace in the ",(0,n.kt)("a",{parentName:"p",href:"#Workspaces-list-view"},"Workspaces List View"),"."),(0,n.kt)("p",null,"In this view you can see all details of the workspace such as its name, namespace, and all resources related to this workspace."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Workspaces Details View",src:r(32772).Z,width:"1855",height:"936"})))}w.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var s=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=s.createContext({}),l=function(e){var t=s.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return s.createElement(c.Provider,{value:t},e.children)},u="mdxType",w={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},k=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),k=n,d=u["".concat(c,".").concat(k)]||u[k]||w[k]||a;return r?s.createElement(d,o(o({ref:t},p),{},{components:r})):s.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var l=2;l<a;l++)o[l]=r[l];return s.createElement.apply(null,o)}return s.createElement.apply(null,r)}k.displayName="MDXCreateElement"},75480:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/list-workspaces-view-2158ce58a7960aac1ee962af35b3e5de.png"},32772:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/workspace-details-view-bfabb5aaae4624c1c70554b052e6e121.png"}}]);