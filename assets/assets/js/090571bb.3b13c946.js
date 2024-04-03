"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[44994],{37536:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(88746);n(52426);const o={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function i(e){let{tiers:t}=e;return r.createElement(a.Z,{title:`This feature is a available on ${t}.`,style:o},t)}},2129:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),o=n(37536);const i={title:"Resource Templates",hide_title:!0},s='Resource templates <TierLabel tiers="Enterprise" />',l={unversionedId:"gitops-templates/resource-templates",id:"gitops-templates/resource-templates",title:"Resource Templates",description:"Resource templates are used to create Kubernetes resources. They are defined in the spec.resourcetemplates section of the template.",source:"@site/docs/gitops-templates/resource-templates.mdx",sourceDirName:"gitops-templates",slug:"/gitops-templates/resource-templates",permalink:"/docs/next/gitops-templates/resource-templates",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/docs/gitops-templates/resource-templates.mdx",tags:[],version:"current",frontMatter:{title:"Resource Templates",hide_title:!0},sidebar:"docs",previous:{title:"Creating Templates",permalink:"/docs/next/gitops-templates/creating-templates"},next:{title:"Rendered Template Paths",permalink:"/docs/next/gitops-templates/repo-rendered-paths"}},p={},c=[{value:"The <code>content</code> key",id:"the-content-key",level:3},{value:"The <code>raw</code> key",id:"the-raw-key",level:3}],m={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"resource-templates-"},"Resource templates ",(0,a.kt)(o.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,a.kt)("p",null,"Resource templates are used to create Kubernetes resources. They are defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.resourcetemplates")," section of the template."),(0,a.kt)("h3",{id:"the-content-key"},"The ",(0,a.kt)("inlineCode",{parentName:"h3"},"content")," key"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"content")," key is used to define a list of resources:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  resourcetemplates:\n    - content:\n        - apiVersion: v1\n          kind: Namespace\n          metadata:\n            name: nginx\n        - apiVersion: v1\n          kind: Namespace\n          metadata:\n            name: cert-manager\n")),(0,a.kt)("h3",{id:"the-raw-key"},"The ",(0,a.kt)("inlineCode",{parentName:"h3"},"raw")," key"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"raw")," key is used to define a raw string that will written to the specified path."),(0,a.kt)("p",null,"This can be useful to preserve comments or formatting in the rendered resource."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'spec:\n  resourcetemplates:\n    - path: "helm-release.yaml"\n      raw: |\n        apiVersion: helm.toolkit.fluxcd.io/v2beta1\n        kind: HelmRelease\n        metadata:\n          name: podinfo\n          namespace: prod-github\n        spec:\n          interval: 1m\n          chart:\n            spec:\n              chart: podinfo\n              version: "6.0.0" # {"$promotion": "flux-system:podinfo-github:prod"}\n              sourceRef:\n                kind: HelmRepository\n                name: podinfo\n              interval: 1m\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"raw")," key is not compatible with the ",(0,a.kt)("inlineCode",{parentName:"li"},"content")," key. Only one of the two can be used."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"raw")," key data must still be a valid kubernetes unstructured object."))))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);