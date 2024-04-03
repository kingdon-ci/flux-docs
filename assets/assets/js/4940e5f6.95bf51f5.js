"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[45656],{37536:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),o=r(88746);r(52426);const a={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function i(e){let{tiers:t}=e;return n.createElement(o.Z,{title:`This feature is a available on ${t}.`,style:a},t)}},15620:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905)),a=r(37536);const i={title:"Introduction",hide_title:!0},s=void 0,c={unversionedId:"workspaces/intro",id:"workspaces/intro",title:"Introduction",description:"{frontMatter.title}",source:"@site/docs/workspaces/intro.mdx",sourceDirName:"workspaces",slug:"/workspaces/intro",permalink:"/docs/next/workspaces/intro",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/docs/workspaces/intro.mdx",tags:[],version:"current",frontMatter:{title:"Introduction",hide_title:!0},sidebar:"docs",previous:{title:"Using Terraform Templates",permalink:"/docs/next/terraform/using-terraform-templates"},next:{title:"Multi Tenancy",permalink:"/docs/next/workspaces/multi-tenancy"}},l={},p=[{value:"Workspaces",id:"workspaces",level:2}],u={toc:p};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",null,i.title," ",(0,o.kt)(a.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,o.kt)("h2",{id:"workspaces"},"Workspaces"),(0,o.kt)("p",null,"Organizations working with Kubernetes have a tremendous need to manage tenancy for numerous software delivery teams. Weave GitOps Workspaces offers tenancy management for Kubernetes clusters at scale. It\u2019s built on top of Flux's powerful approach to managing tenancy, and adds policies that will help you to define finer-grain rules on your tenants. "),(0,o.kt)("p",null,"With WGE Workspaces, all it takes for platform operators to create workspaces is a single CLI command that generates:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"all the necessary YAML configuration files necessary for tenant setup"),(0,o.kt)("li",{parentName:"ul"},"a list of policies that apply to each workspace"),(0,o.kt)("li",{parentName:"ul"},"the list of repositories to which each workspace has access.")))}f.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);