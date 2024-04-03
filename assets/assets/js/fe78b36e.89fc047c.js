"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[12805],{60877:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const a={title:"Logging Env Variables",hide_title:!0},i="Logging Env Variables",l={unversionedId:"terraform/environment-variables",id:"version-0.17.0/terraform/environment-variables",title:"Logging Env Variables",description:"A Terraform Runner uses two environment variables, DISABLETFLOGS and ENABLESENSITIVETF_LOGS, to control the logging behavior of the Terraform execution.",source:"@site/versioned_docs/version-0.17.0/terraform/environment-variables.mdx",sourceDirName:"terraform",slug:"/terraform/environment-variables",permalink:"/docs/0.17.0/terraform/environment-variables",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.17.0/terraform/environment-variables.mdx",tags:[],version:"0.17.0",frontMatter:{title:"Logging Env Variables",hide_title:!0},sidebar:"docs",previous:{title:"Terraform Controller CLI",permalink:"/docs/0.17.0/terraform/tfctl"},next:{title:"Introduction",permalink:"/docs/0.17.0/pipelines/intro"}},s={},c=[],m={toc:c};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"logging-env-variables"},"Logging Env Variables"),(0,o.kt)("p",null,"A Terraform Runner uses two environment variables, ",(0,o.kt)("inlineCode",{parentName:"p"},"DISABLE_TF_LOGS")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ENABLE_SENSITIVE_TF_LOGS"),", to control the logging behavior of the Terraform execution."),(0,o.kt)("p",null,"To use these environment variables, they need to be set on each Terraform Runner pod where the Terraform code is being executed.\nThis can typically be done by adding them to the pod's environment variables in the Terraform Runner deployment configuration."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"DISABLE_TF_LOGS"),' variable, when set to "1", will disable all Terraform output logs to stdout and stderr.'),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"ENABLE_SENSITIVE_TF_LOGS"),' variable, when set to "1", will enable logging of sensitive Terraform data,\nsuch as secret variables, to the local log. However, it is important to note that for the ',(0,o.kt)("inlineCode",{parentName:"li"},"ENABLE_SENSITIVE_TF_LOGS")," to take effect,\nthe ",(0,o.kt)("inlineCode",{parentName:"li"},"DISABLE_TF_LOGS"),' variable must also be set to "1".')),(0,o.kt)("p",null,"For more information on configuring the Terraform Runner and its environment variables,\nplease consult the documentation on ",(0,o.kt)("a",{parentName:"p",href:"../using-terraform-cr/customize-runner"},"customizing runners")," within the Weave TF-controller."))}p.isMDXComponent=!0},3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>v});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,v=p["".concat(s,".").concat(f)]||p[f]||u[f]||a;return t?n.createElement(v,i(i({ref:r},m),{},{components:t})):n.createElement(v,i({ref:r},m))}));function v(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);