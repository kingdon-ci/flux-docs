"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[94142],{40063:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294),o=r(88746);r(52426);const i={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function a(e){let{tiers:t}=e;return n.createElement(o.Z,{title:`This feature is a available on ${t}.`,style:i},t)}},74743:(e,t,r)=>{r.d(t,{ZP:()=>a});var n=r(87462),o=(r(67294),r(3905));const i={toc:[]};function a(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"This feature is in alpha and certain aspects will change")),(0,o.kt)("p",{parentName:"admonition"},"We're very excited for people to use this feature.\nHowever, please note that changes in the API, behaviour and security will evolve.\nThe feature is suitable to use in controlled testing environments.")))}a.isMDXComponent=!0},22103:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=r(87462),o=(r(67294),r(3905)),i=r(40063),a=r(74743);const l={title:"Getting started",hide_title:!0},s='Getting started  <TierLabel tiers="Enterprise" />',p={unversionedId:"explorer/getting-started",id:"version-0.28.0/explorer/getting-started",title:"Getting started",description:"This guide shows you the basics steps to start using Explorer.",source:"@site/versioned_docs/version-0.28.0/explorer/getting-started.mdx",sourceDirName:"explorer",slug:"/explorer/getting-started",permalink:"/docs/0.28.0/explorer/getting-started",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.28.0/explorer/getting-started.mdx",tags:[],version:"0.28.0",frontMatter:{title:"Getting started",hide_title:!0},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/0.28.0/explorer/intro"},next:{title:"Configuration",permalink:"/docs/0.28.0/explorer/configuration"}},u={},c=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Explorer UI",id:"explorer-ui",level:2}],d={toc:c};function m(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started--"},"Getting started  ",(0,o.kt)(i.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,o.kt)(a.ZP,{mdxType:"AlphaWarning"}),(0,o.kt)("p",null,"This guide shows you the basics steps to start using Explorer."),(0,o.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,o.kt)("p",null,"Before using Explorer, please ensure that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You have Weave Gitops Enterprise ",(0,o.kt)("a",{parentName:"li",href:"/docs/0.28.0/enterprise/getting-started/releases-enterprise"},"v0.23.0 or later version")),(0,o.kt)("li",{parentName:"ul"},"You have deployed an application.")),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"Explorer is enabled via configuration through the feature flag  ",(0,o.kt)("inlineCode",{parentName:"p"},"enableExplorer")," that you could\nconfigure in your Weave Gitops Enterprise HelmRelease values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: helm.toolkit.fluxcd.io/v2beta1\nkind: HelmRelease\nmetadata:\n  name: weave-gitops-enterprise\n  namespace: flux-system\nspec:\n  # ... other spec components\n  values:\n    enableExplorer: true\n")),(0,o.kt)("p",null,"For a complete overview on the configuration you could see ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.28.0/explorer/configuration"},"configuration"),"."),(0,o.kt)("h2",{id:"explorer-ui"},"Explorer UI"),(0,o.kt)("p",null,"Login to Weave Gitops and Explorer will be shown in the navigation menu ",(0,o.kt)("inlineCode",{parentName:"p"},"Explorer"),"."),(0,o.kt)("p",null,"Explorer UI looks as follows:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explorer",src:r(80047).Z,width:"1473",height:"724"})),(0,o.kt)("p",null,"It has two main components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A search dialog with filter to querying the platform resources"),(0,o.kt)("li",{parentName:"ul"},"A table with the filtered resources.")),(0,o.kt)("p",null,"For a more detailed view on the UI you could see ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.28.0/explorer/querying"},"querying"),"."))}m.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},80047:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/explorer-open-new-c0b099904d7ac99fec6cedfc7f189f3c.png"}}]);