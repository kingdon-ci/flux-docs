"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[90410],{85391:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),s=n(88746);n(52426);const a={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function i(e){let{tiers:t}=e;return r.createElement(s.Z,{title:`This feature is a available on ${t}.`,style:a},t)}},1308:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),s=(n(67294),n(3905)),a=n(85391);const i={title:"Installation",hide_title:!0},l='Installation <TierLabel tiers="enterprise" />',o={unversionedId:"gitopssets/installation",id:"version-0.23.0/gitopssets/installation",title:"Installation",description:"The gitopssets-controller can be installed in two ways:",source:"@site/versioned_docs/version-0.23.0/gitopssets/installation.mdx",sourceDirName:"gitopssets",slug:"/gitopssets/installation",permalink:"/docs/0.23.0/gitopssets/installation",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.23.0/gitopssets/installation.mdx",tags:[],version:"0.23.0",frontMatter:{title:"Installation",hide_title:!0},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/0.23.0/gitopssets/intro"},next:{title:"Guide",permalink:"/docs/0.23.0/gitopssets/guide"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installing the gitopssets-controller",id:"installing-the-gitopssets-controller",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"installation-"},"Installation ",(0,s.kt)(a.Z,{tiers:"enterprise",mdxType:"TierLabel"})),(0,s.kt)("p",null,"The gitopssets-controller can be installed in two ways:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"As part of the Weave Gitops Enterprise installation. (installed by default)"),(0,s.kt)("li",{parentName:"ul"},"As a standalone installation using a Helm chart.")),(0,s.kt)("p",null,"The standalone installation can be useful for leaf clusters that don't have Weave Gitops Enterprise installed."),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("p",null,"Before installing the gitopssets-controller, ensure that the following is installed:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"flux")),(0,s.kt)("h2",{id:"installing-the-gitopssets-controller"},"Installing the gitopssets-controller"),(0,s.kt)("p",null,"To install the gitopssets-controller using a Helm chart, use the following HelmRelease:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Namespace\nmetadata:\n  name: gitopssets-system\n---\napiVersion: source.toolkit.fluxcd.io/v1beta1\nkind: HelmRepository\nmetadata:\n  name: weaveworks-artifacts-charts\n  namespace: gitopssets-system\nspec:\n  interval: 1m\n  url: https://artifacts.wge.dev.weave.works/dev/charts\n---\napiVersion: helm.toolkit.fluxcd.io/v2beta1\nkind: HelmRelease\nmetadata:\n  name: gitopssets-controller\n  namespace: gitopssets-system\nspec:\n  interval: 10m\n  chart:\n    spec:\n      chart: gitopssets-controller\n      sourceRef:\n        kind: HelmRepository\n        name: weaveworks-artifacts-charts\n        namespace: gitopssets-system\n      version: 0.6.1\n  install:\n    crds: CreateReplace\n  upgrade:\n    crds: CreateReplace\n")),(0,s.kt)("p",null,"After adding the Namespace, HelmRepository and HelmRelease to a git repository synced by flux, commit the changes to complete the installation process."))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=s,f=u["".concat(o,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:s,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);