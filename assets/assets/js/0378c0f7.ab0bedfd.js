"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[35791],{74526:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),i=n(88746);n(52426);const o={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function a(e){let{tiers:t}=e;return r.createElement(i.Z,{title:`This feature is a available on ${t}.`,style:o},t)}},47303:(e,t,n)=>{n.d(t,{ZP:()=>a});var r=n(87462),i=(n(67294),n(3905));const o={toc:[]};function a(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"This feature is in alpha and certain aspects will change")),(0,i.kt)("p",{parentName:"admonition"},"We're very excited for people to use this feature.\nHowever, please note that changes in the API, behaviour and security will evolve.\nThe feature is suitable to use in controlled testing environments.")))}a.isMDXComponent=!0},29396:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(87462),i=(n(67294),n(3905)),o=n(74526),a=n(47303);const l={title:"Introduction",hide_title:!0},p='Pipelines <TierLabel tiers="Enterprise" />',s={unversionedId:"pipelines/intro",id:"version-0.18.0/pipelines/intro",title:"Introduction",description:"As wikipedia defines, Continuous delivery is",source:"@site/versioned_docs/version-0.18.0/pipelines/intro.mdx",sourceDirName:"pipelines",slug:"/pipelines/intro",permalink:"/docs/0.18.0/pipelines/intro",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.18.0/pipelines/intro.mdx",tags:[],version:"0.18.0",frontMatter:{title:"Introduction",hide_title:!0},sidebar:"docs",previous:{title:"Logging Env Variables",permalink:"/docs/0.18.0/terraform/environment-variables"},next:{title:"Getting started",permalink:"/docs/0.18.0/pipelines/getting-started"}},c={},u=[],d={toc:u};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pipelines-"},"Pipelines ",(0,i.kt)(o.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,i.kt)(a.ZP,{mdxType:"AlphaWarning"}),(0,i.kt)("p",null,"As ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Continuous_delivery"},"wikipedia defines"),", Continuous delivery is"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"a software engineering approach in which teams produce software in short cycles,\nensuring that the software can be reliably released at any time and, when releasing the software, without doing so manually.\nIt aims at building, testing, and releasing software with greater speed and frequency.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Continuous delivery is enabled through the deployment pipeline.\nThe purpose of the deployment pipeline has three components: visibility, feedback, and continually deploy.","[12]")),(0,i.kt)("p",null,"Weave Gitops Enterprise Pipelines allows you to define your deployment pipelines to enable continuous delivery for\nyour gitops applications."),(0,i.kt)("p",null,"As part of Weave GitOps Enterprise, you can"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../getting-started/#define-a-pipeline"},"Define a delivery pipeline")," that you want you application to follow"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../getting-started/#view-pipeline-list"},"View a pipeline")," and check the status of your deployments.")),(0,i.kt)("p",null,"Now that you know what delivery pipelines can do for you, follow the ",(0,i.kt)("a",{parentName:"p",href:"../getting-started"},"guide to get started"),"."))}f.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=i,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);