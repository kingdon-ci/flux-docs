"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[18218],{12316:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(67294),a=r(88746);r(52426);const l={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function p(e){let{tiers:t}=e;return n.createElement(a.Z,{title:`This feature is a available on ${t}.`,style:l},t)}},11429:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),l=r(12316);const p={title:"Example: Template to Create a CAPI Cluster",hide_title:!0},s='CAPI Cluster Template Example <TierLabel tiers="Enterprise" />',o={unversionedId:"gitops-templates/create-cluster-example",id:"version-0.29.0/gitops-templates/create-cluster-example",title:"Example: Template to Create a CAPI Cluster",description:"GitOps template objects need to be wrapped with the GitOpsTemplate custom",source:"@site/versioned_docs/version-0.29.0/gitops-templates/create-cluster-example.mdx",sourceDirName:"gitops-templates",slug:"/gitops-templates/create-cluster-example",permalink:"/docs/0.29.0/gitops-templates/create-cluster-example",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.29.0/gitops-templates/create-cluster-example.mdx",tags:[],version:"0.29.0",frontMatter:{title:"Example: Template to Create a CAPI Cluster",hide_title:!0},sidebar:"docs",previous:{title:"Supported Templating Languages",permalink:"/docs/0.29.0/gitops-templates/supported-langs"},next:{title:"CLI",permalink:"/docs/0.29.0/gitops-templates/cli"}},i={},c=[],m={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"capi-cluster-template-example-"},"CAPI Cluster Template Example ",(0,a.kt)(l.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,a.kt)("p",null,"GitOps template objects need to be wrapped with the ",(0,a.kt)("inlineCode",{parentName:"p"},"GitOpsTemplate")," custom\nresource and then loaded into the management cluster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.weave.works/v1alpha2\nkind: GitOpsTemplate\nmetadata:\n  name: cluster-template-development\n  labels:\n    weave.works/template-type: cluster\nspec:\n  description: This is the std. CAPD template\n  renderType: templating\n  params:\n    - name: CLUSTER_NAME\n      description: This is used for the cluster naming.\n  resourcetemplates:\n    - apiVersion: cluster.x-k8s.io/v1alpha3\n      kind: Cluster\n      metadata:\n        name: "{{ .params.CLUSTER_NAME }}"\n')))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),i=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=i(r),d=a,f=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return r?n.createElement(f,p(p({ref:t},c),{},{components:r})):n.createElement(f,p({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,p=new Array(l);p[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:a,p[1]=s;for(var i=2;i<l;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);