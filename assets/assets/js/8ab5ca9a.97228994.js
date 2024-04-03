"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[78258],{26748:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=t(87462),o=(t(67294),t(3905));const a={title:"Terraform Enterprise",hide_title:!0},i="Terraform Enterprise",l={unversionedId:"terraform/terraform-enterprise",id:"version-0.25.0/terraform/terraform-enterprise",title:"Terraform Enterprise",description:"Terraform Enterprise Integration",source:"@site/versioned_docs/version-0.25.0/terraform/terraform-enterprise.mdx",sourceDirName:"terraform",slug:"/terraform/terraform-enterprise",permalink:"/docs/0.25.0/terraform/terraform-enterprise",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.25.0/terraform/terraform-enterprise.mdx",tags:[],version:"0.25.0",frontMatter:{title:"Terraform Enterprise",hide_title:!0},sidebar:"docs",previous:{title:"Configure IRSA for AWS EKS",permalink:"/docs/0.25.0/terraform/aws-eks"},next:{title:"Terraform Controller CLI",permalink:"/docs/0.25.0/terraform/tfctl"}},p={},s=[{value:"Terraform Enterprise Integration",id:"terraform-enterprise-integration",level:2},{value:"Terraform Login",id:"terraform-login",level:3},{value:"Prepare an TFRC file",id:"prepare-an-tfrc-file",level:3}],f={toc:s};function c(e){let{components:r,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"terraform-enterprise"},"Terraform Enterprise"),(0,o.kt)("h2",{id:"terraform-enterprise-integration"},"Terraform Enterprise Integration"),(0,o.kt)("p",null,"Starting from v0.9.5, Weave GitOps tf-controller officially supports integration to ",(0,o.kt)("strong",{parentName:"p"},"Terraform Cloud (TFC)")," and\n",(0,o.kt)("strong",{parentName:"p"},"Terraform Enterprise (TFE)"),". Here are the steps to set up tf-controller for your TFE instance."),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(73749).Z,width:"1874",height:"1053"})),(0,o.kt)("h3",{id:"terraform-login"},"Terraform Login"),(0,o.kt)("p",null,"First, you need to obtain an API token from your TFE. You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform login")," command to do so."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"terraform login tfe.dev.example.com\n")),(0,o.kt)("p",null,"Then you can find your API token inside ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.terraform.d/credentials.tfrc.json"),".\nContent of the file will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "credentials": {\n    "tfe.dev.example.com": {\n      "token": "mXXXXXXXXX.atlasv1.ixXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"prepare-an-tfrc-file"},"Prepare an TFRC file"),(0,o.kt)("p",null,"TF-controller accepts an TFRC file in the HCL format. So you have to prepare ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform.tfrc")," file using contents from above."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hcl"},'credentials "tfe.dev.example.com" {\n  token = "mXXXXXXXXX.atlasv1.ixXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"\n}\n')))}c.isMDXComponent=!0},3905:(e,r,t)=>{t.d(r,{Zo:()=>f,kt:()=>u});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},f=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},X=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),c=s(t),X=o,u=c["".concat(p,".").concat(X)]||c[X]||m[X]||a;return t?n.createElement(u,i(i({ref:r},f),{},{components:t})):n.createElement(u,i({ref:r},f))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=X;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}X.displayName="MDXCreateElement"},73749:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/tfe_integration_01-b2c78639a2d3f4db80bec7e029f9ac77.png"}}]);