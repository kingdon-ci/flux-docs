"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[36488],{21408:(e,t,r)=>{r.d(t,{Z:()=>a});var o=r(67294),n=r(88746);r(52426);const i={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function a(e){let{tiers:t}=e;return o.createElement(n.Z,{title:`This feature is a available on ${t}.`,style:i},t)}},51684:(e,t,r)=>{r.d(t,{ZP:()=>a});var o=r(87462),n=(r(67294),r(3905));const i={toc:[]};function a(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"This feature is in alpha and certain aspects will change")),(0,n.kt)("p",{parentName:"admonition"},"We're very excited for people to use this feature.\nHowever, please note that changes in the API, behaviour and security will evolve.\nThe feature is suitable to use in controlled testing environments.")))}a.isMDXComponent=!0},37518:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var o=r(87462),n=(r(67294),r(3905)),i=r(21408),a=r(51684);const l={title:"Introduction",hide_title:!0},s='Explorer <TierLabel tiers="Enterprise" />',p={unversionedId:"explorer/intro",id:"version-0.38.0/explorer/intro",title:"Introduction",description:"As platform engineer or as developer, your applications and platform services will likely span multiple kubernetes clusters",source:"@site/versioned_docs/version-0.38.0/explorer/intro.mdx",sourceDirName:"explorer",slug:"/explorer/intro",permalink:"/docs/explorer/intro",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.38.0/explorer/intro.mdx",tags:[],version:"0.38.0",frontMatter:{title:"Introduction",hide_title:!0},sidebar:"docs",previous:{title:"How to Inject Credentials Into Your Template",permalink:"/docs/cluster-management/advanced-cluster-management-topics/howto-inject-credentials-into-template"},next:{title:"Getting started",permalink:"/docs/explorer/getting-started"}},c={},u=[{value:"FAQ",id:"faq",level:2},{value:"Which journeys would be able to use explorer for?",id:"which-journeys-would-be-able-to-use-explorer-for",level:3},{value:"Which journeys would be better using other weave gitops capabilities for?",id:"which-journeys-would-be-better-using-other-weave-gitops-capabilities-for",level:3},{value:"Which Kinds does explorer support?",id:"which-kinds-does-explorer-support",level:3},{value:"Next Steps",id:"next-steps",level:2}],d={toc:u};function f(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"explorer-"},"Explorer ",(0,n.kt)(i.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,n.kt)(a.ZP,{mdxType:"AlphaWarning"}),(0,n.kt)("p",null,"As platform engineer or as developer, your applications and platform services will likely span multiple kubernetes clusters\nor infrastructure components.  In order to manage and operate them you require a platform capability that\nallows you to discover the resources from a single place."),(0,n.kt)("p",null,"Explorer is that capability that allows any platform user to discover platform resources from a single place\nacross all your kubernetes clusters."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"explorer",src:r(8543).Z,width:"1854",height:"647"})),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("h3",{id:"which-journeys-would-be-able-to-use-explorer-for"},"Which journeys would be able to use explorer for?"),(0,n.kt)("p",null,"Explorer is better suited for journeys matching the discovery of resources across the platform resources inventory."),(0,n.kt)("h3",{id:"which-journeys-would-be-better-using-other-weave-gitops-capabilities-for"},"Which journeys would be better using other weave gitops capabilities for?"),(0,n.kt)("p",null,"If you have a particular resources you want to manage, weave gitops offers single resource experience\nfor almost every resource."),(0,n.kt)("h3",{id:"which-kinds-does-explorer-support"},"Which Kinds does explorer support?"),(0,n.kt)("p",null,"Explorer support all Flux Applications and Sources CRDs"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"../configuration#kinds"},"Supported Kinds")," for more details."),(0,n.kt)("h2",{id:"next-steps"},"Next Steps"),(0,n.kt)("p",null,"Now that you know what Explorer is, follow ",(0,n.kt)("a",{parentName:"p",href:"../getting-started"},"getting started")," to quickly have a feeling\nof what Explorer can do for you."))}f.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return r?o.createElement(m,a(a({ref:t},c),{},{components:r})):o.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8543:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/explorer-ui-629d128995035eb3711f31fba7072348.png"}}]);