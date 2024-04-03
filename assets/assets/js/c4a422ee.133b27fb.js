"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[19324],{37536:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294),o=r(88746);r(52426);const i={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function a(e){let{tiers:t}=e;return n.createElement(o.Z,{title:`This feature is a available on ${t}.`,style:i},t)}},90832:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905)),i=r(37536);const a={title:"Authorization",hide_title:!0},s='Authorization <TierLabel tiers="Enterprise" />',c={unversionedId:"policy/authorization",id:"policy/authorization",title:"Authorization",description:"This section provides a recommended way to configure RBAC in the context of policies. It is oriented to the journey",source:"@site/docs/policy/authorization.mdx",sourceDirName:"policy",slug:"/policy/authorization",permalink:"/docs/next/policy/authorization",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/docs/policy/authorization.mdx",tags:[],version:"current",frontMatter:{title:"Authorization",hide_title:!0},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/next/policy/getting-started"},next:{title:"Policy",permalink:"/docs/next/policy/"}},l={},p=[{value:"View Resources",id:"view-resources",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"authorization-"},"Authorization ",(0,o.kt)(i.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,o.kt)("p",null,"This section provides a recommended way to configure RBAC in the context of policies. It is oriented to the journey\nthat you expect your users to have."),(0,o.kt)("h2",{id:"view-resources"},"View Resources"),(0,o.kt)("p",null,"The policy journey in the UI involves several resources. We have the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/policy/"},"Policies")," that are used by the agent, the resulting ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/policy/getting-started"},"Violations")," when the agent enforces those policies, and the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/policy/policy-configuration"},"PolicyConfigs")," that the user can configure to override policy parameters.\nThe violations are essentially kubernetes events that contain the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/policy/#policy-validation"},"Validation")," object."),(0,o.kt)("p",null,"In order to view those resources, users would need to have read access to the ",(0,o.kt)("inlineCode",{parentName:"p"},"policies"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"policysconfigs"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"events")," resource."),(0,o.kt)("p",null,"An example of a configuration to achieve this purpose could be seen below with ",(0,o.kt)("inlineCode",{parentName:"p"},"policies-reader")," role and ",(0,o.kt)("inlineCode",{parentName:"p"},"developer-policies-reader"),"\ncluster role binding, to allow a group ",(0,o.kt)("inlineCode",{parentName:"p"},"developer")," to access all the policy-related resources."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: policies-reader\nrules:\n  - apiGroups: ["pac.weave.works"]\n    resources: ["policies", "policyconfigs"]\n    verbs: ["get", "list", "watch"]\n  - apiGroups: [""]\n    resources: ["events"]\n    verbs: ["get", "watch", "list"]\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: developer-policies-reader\nsubjects:\n  - kind: Group\n    name: developer\n    apiGroup: rbac.authorization.k8s.io\nroleRef:\n  kind: ClusterRole\n  name: policies-reader\n  apiGroup: rbac.authorization.k8s.io\n')))}d.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),h=o,y=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return r?n.createElement(y,a(a({ref:t},p),{},{components:r})):n.createElement(y,a({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);