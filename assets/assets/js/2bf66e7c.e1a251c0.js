"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[77329],{25192:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"Installation",hide_title:!0},l="Part 0: Installing Weave GitOps",o={unversionedId:"installation/index",id:"version-0.23.0/installation/index",title:"Installation",description:"Check your Cluster's Kubernetes Version",source:"@site/versioned_docs/version-0.23.0/installation/index.mdx",sourceDirName:"installation",slug:"/installation/",permalink:"/docs/0.23.0/installation/",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.23.0/installation/index.mdx",tags:[],version:"0.23.0",frontMatter:{title:"Installation",hide_title:!0},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/0.23.0/getting-started/intro"},next:{title:"Weave GitOps OSS",permalink:"/docs/0.23.0/installation/weave-gitops"}},s={},p=[{value:"Check your Cluster&#39;s Kubernetes Version",id:"check-your-clusters-kubernetes-version",level:2},{value:"Deploy Weave GitOps to your Cluster",id:"deploy-weave-gitops-to-your-cluster",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"part-0-installing-weave-gitops"},"Part 0: Installing Weave GitOps"),(0,a.kt)("h2",{id:"check-your-clusters-kubernetes-version"},"Check your Cluster's Kubernetes Version"),(0,a.kt)("p",null,"No matter which version of Weave GitOps you install, having a Kubernetes cluster up\nand running is required. This version of Weave GitOps is tested against the following\n",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/releases/"},"Kubernetes releases"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Kubernetes Release"),(0,a.kt)("th",{parentName:"tr",align:null},"End of Life"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1.25"),(0,a.kt)("td",{parentName:"tr",align:null},"2023-10-27")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1.24"),(0,a.kt)("td",{parentName:"tr",align:null},"2023-07-28")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1.23"),(0,a.kt)("td",{parentName:"tr",align:null},"2023-02-28")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1.22"),(0,a.kt)("td",{parentName:"tr",align:null},"2022-10-28")))),(0,a.kt)("p",null,"Note that the version of ",(0,a.kt)("a",{parentName:"p",href:"https://fluxcd.io/docs/installation/#prerequisites"},"Flux")," that you use might impose further minimum version requirements."),(0,a.kt)("h2",{id:"deploy-weave-gitops-to-your-cluster"},"Deploy Weave GitOps to your Cluster"),(0,a.kt)("p",null,"Depending on your setup and requirement you have the following choice"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Installation"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/0.23.0/installation/weave-gitops"},"Weave GitOps OSS"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"weave-gitops-enterprise"},"Weave GitOps Enterprise"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"weave-gitops-enterprise/airgap"},"Weave GitOps Enterprise - Airgap Environments"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/0.23.0/installation/aws-marketplace"},"AWS Marketplace"))))))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);