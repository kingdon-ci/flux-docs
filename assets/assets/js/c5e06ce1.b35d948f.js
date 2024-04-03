"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[16651],{72503:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),o=n(88746);n(52426);const r={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function i(e){let{tiers:t}=e;return a.createElement(o.Z,{title:`This feature is a available on ${t}.`,style:r},t)}},91003:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),o=(n(67294),n(3905)),r=n(72503);const i={title:"Annotations",hide_title:!0},s='Annotations <TierLabel tiers="Enterprise" />',l={unversionedId:"gitops-templates/annotations",id:"version-0.22.0/gitops-templates/annotations",title:"Annotations",description:"The add-common-bases annotation",source:"@site/versioned_docs/version-0.22.0/gitops-templates/annotations.mdx",sourceDirName:"gitops-templates",slug:"/gitops-templates/annotations",permalink:"/docs/0.22.0/gitops-templates/annotations",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.22.0/gitops-templates/annotations.mdx",tags:[],version:"0.22.0",frontMatter:{title:"Annotations",hide_title:!0},sidebar:"docs",previous:{title:"Profiles",permalink:"/docs/0.22.0/gitops-templates/profiles"},next:{title:"Parameters",permalink:"/docs/0.22.0/gitops-templates/params"}},p={},c=[{value:"The <code>add-common-bases</code> annotation",id:"the-add-common-bases-annotation",level:2},{value:"The <code>inject-prune-annotation</code> annotation",id:"the-inject-prune-annotation-annotation",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"annotations-"},"Annotations ",(0,o.kt)(r.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,o.kt)("h2",{id:"the-add-common-bases-annotation"},"The ",(0,o.kt)("inlineCode",{parentName:"h2"},"add-common-bases")," annotation"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},'templates.weave.works/add-common-bases: "true"'),' annotation can be used to\nenable and disable the addition of a "common bases" ',(0,o.kt)("inlineCode",{parentName:"p"},"Kustomization")," to the\nlist of rendered files.\nThis kustomization will sync a path that is common to all clusters (",(0,o.kt)("inlineCode",{parentName:"p"},"clusters/bases"),")."),(0,o.kt)("p",null,"An example usecase would be to ensure that certain RBAC or policies are applied\nto all clusters using this template."),(0,o.kt)("h2",{id:"the-inject-prune-annotation-annotation"},"The ",(0,o.kt)("inlineCode",{parentName:"h2"},"inject-prune-annotation")," annotation"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},'templates.weave.works/inject-prune-annotation: "true"')," annotation can be used to\nenable and disable the injection of Flux's ",(0,o.kt)("inlineCode",{parentName:"p"},"prune")," annotation into certain resources."),(0,o.kt)("p",null,"When enabled, GitOps automatically injects a ",(0,o.kt)("inlineCode",{parentName:"p"},"kustomize.toolkit.fluxcd.io/prune: disabled"),"\nannotation into every resource in the ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.resourcetemplates")," that is ",(0,o.kt)("strong",{parentName:"p"},"not")," a\n",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.x-k8s.io.Cluster")," and ",(0,o.kt)("strong",{parentName:"p"},"not")," a ",(0,o.kt)("inlineCode",{parentName:"p"},"gitops.weave.works.GitopsCluster"),"."),(0,o.kt)("p",null,"The intention here is stop Flux from explicitly deleting subresources of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Cluster")," like\n",(0,o.kt)("inlineCode",{parentName:"p"},"AWSCluster"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"KubeadmControlPlane"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"AWSMachineTemplate")," etc and let the CAPI\ncontrollers handle their removal."),(0,o.kt)("p",null,"This is the pattern recommended in the capi-quickstart guide ",(0,o.kt)("a",{parentName:"p",href:"https://cluster-api.sigs.k8s.io/user/quick-start.html#clean-up"},"https://cluster-api.sigs.k8s.io/user/quick-start.html#clean-up"),"."))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);