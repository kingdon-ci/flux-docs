"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[46894],{1664:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),s=r(88746);r(52426);const a={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function o(e){let{tiers:t}=e;return n.createElement(s.Z,{title:`This feature is a available on ${t}.`,style:a},t)}},33874:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(87462),s=(r(67294),r(3905)),a=r(1664);const o={title:"Overview",hide_title:!0},i=void 0,c={unversionedId:"secrets/intro",id:"version-0.34.0/secrets/intro",title:"Overview",description:"{frontMatter.title}",source:"@site/versioned_docs/version-0.34.0/secrets/intro.mdx",sourceDirName:"secrets",slug:"/secrets/intro",permalink:"/docs/0.34.0/secrets/intro",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.34.0/secrets/intro.mdx",tags:[],version:"0.34.0",frontMatter:{title:"Overview",hide_title:!0},sidebar:"docs",previous:{title:"Manual Approval for Progressive Delivery Deployments",permalink:"/docs/0.34.0/progressive-delivery/flagger-manual-gating"},next:{title:"Overview",permalink:"/docs/0.34.0/secrets/intro"}},l={},p=[{value:"Secrets Management",id:"secrets-management",level:2},{value:"Weave Gitops Secrets Management",id:"weave-gitops-secrets-management",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",null,o.title," ",(0,s.kt)(a.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,s.kt)("h2",{id:"secrets-management"},"Secrets Management"),(0,s.kt)("p",null,"Secrets are sensitive information such as passwords, access keys, and other credentials that should not be exposed publicly. In cloud-native applications, secrets are often used to authenticate and authorize access to various resources, such as databases, APIs, and other services."),(0,s.kt)("p",null,"In a GitOps environment, secrets are typically stored either encrypted in Git, or using Custom Resources that reference the secret in an external secret store. Secrets are then synced into the clusters and securely passed to the application containers or workloads."),(0,s.kt)("p",null,"Effective secrets management in cloud-native applications and GitOps environments is critical for maintaining the security and compliance of the overall system. Best practices include regularly rotating secrets, using strong encryption and access controls, and implementing robust auditing and monitoring processes."),(0,s.kt)("h2",{id:"weave-gitops-secrets-management"},"Weave Gitops Secrets Management"),(0,s.kt)("p",null,"Weave GitOps Secrets Management is a set of features that makes it easier for teams to manage secrets in a GitOps environment across multiple clusers. These features provide an automated way to manage secrets effectively, and make it easier for different personas to work with secrets."),(0,s.kt)("p",null,"For Developers, they can use Weave GitOps Secrets Management to securely create and track application secrets such as API keys, passwords, and other credentials. They can do that using Weave GitOps UI in a self-serve manner."),(0,s.kt)("p",null,"For Operation Teams, they can use Weave GitOps Secrets Management to help set up secure and reliable flows for developers to create and consume secrets for their applications."),(0,s.kt)("p",null,"Weave GitOps Secrets Management supports integrations with SOPS and External Secrets Operator (ESO) to provide a secure and automated way to manage secrets in a GitOps environment, while giving the option for customers to choose any of these secrets operators or working with both of them."),(0,s.kt)("p",null,"For SOPS and ESO operators, Weave GitOps is providing different ways to do the following:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Setup Secrets Operators (",(0,s.kt)("a",{parentName:"li",href:"/docs/0.34.0/secrets/setup-sops"},"SOPS")," | ",(0,s.kt)("a",{parentName:"li",href:"/docs/0.34.0/secrets/setup-eso"},"ESO"),")"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/0.34.0/secrets/bootstrapping-secrets"},"Bootstrap Secrets into clusters")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/0.34.0/secrets/manage-secrets-ui"},"Manage Secrets through Weave GitOps UI"))),(0,s.kt)("p",null,"In order to get started with WeaveGitOps Secrets Management, please follow this guide ",(0,s.kt)("a",{parentName:"p",href:"/docs/0.34.0/secrets/getting-started"},"here"),"."))}d.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=s,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:s,o[1]=i;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);