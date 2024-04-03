"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[26163],{85747:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={title:"Getting Started",hide_title:!0},a="Getting Started with Weave GitOps",s={unversionedId:"getting-started/intro",id:"version-0.19.0/getting-started/intro",title:"Getting Started",description:"This hands-on guide will introduce you to the basics of the GitOps Dashboard web UI, to help you understand the state of your system, before deploying a new application to your cluster. It is adapted from this guide - Flux - Getting Started.",source:"@site/versioned_docs/version-0.19.0/getting-started/intro.mdx",sourceDirName:"getting-started",slug:"/getting-started/intro",permalink:"/docs/0.19.0/getting-started/intro",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.19.0/getting-started/intro.mdx",tags:[],version:"0.19.0",frontMatter:{title:"Getting Started",hide_title:!0},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/0.19.0/intro"},next:{title:"Installation",permalink:"/docs/0.19.0/installation/"}},l={},c=[{value:"TL;DR: Highlights",id:"tldr-highlights",level:2}],d={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started-with-weave-gitops"},"Getting Started with Weave GitOps"),(0,o.kt)("p",null,"This hands-on guide will introduce you to the basics of the GitOps Dashboard web UI, to help you understand the state of your system, before deploying a new application to your cluster. It is adapted from this guide - ",(0,o.kt)("a",{parentName:"p",href:"https://fluxcd.io/docs/get-started/"},"Flux - Getting Started"),"."),(0,o.kt)("p",null,"If you haven't already, be sure to check out our ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.19.0/intro"},"introduction")," to Weave GitOps and our ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.19.0/installation/"},"installation docs"),"."),(0,o.kt)("h2",{id:"tldr-highlights"},"TL;DR: Highlights"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Applications view")," - allows you to quickly understand the state of your deployments across a cluster at a glance. It shows summary information from ",(0,o.kt)("inlineCode",{parentName:"li"},"kustomization")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"helmrelease")," objects."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Sources view")," - shows the status of resources which are synchronizing content from where you have declared the desired state of your system, for example Git repositories. This shows summary information from ",(0,o.kt)("inlineCode",{parentName:"li"},"gitrepository"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"helmrepository")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"bucket")," objects."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Flux Runtime view")," - provides status on the GitOps engine continuously reconciling your desired and live state. It shows your installed GitOps Toolkit Controllers and their version.")))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return r?n.createElement(g,a(a({ref:t},d),{},{components:r})):n.createElement(g,a({ref:t},d))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);