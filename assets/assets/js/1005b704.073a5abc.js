"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[49568],{64812:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"Plan and manually apply Terraform resources",hide_title:!0},l="Use TF-controller to plan and manually apply Terraform resources",i={unversionedId:"terraform/using-terraform-cr/plan-and-manually-apply-terraform-resources",id:"version-0.19.0/terraform/using-terraform-cr/plan-and-manually-apply-terraform-resources",title:"Plan and manually apply Terraform resources",description:"TF-controller is a tool that allows you to manage infrastructure as code",source:"@site/versioned_docs/version-0.19.0/terraform/using-terraform-cr/plan-and-manually-apply-terraform-resources.mdx",sourceDirName:"terraform/using-terraform-cr",slug:"/terraform/using-terraform-cr/plan-and-manually-apply-terraform-resources",permalink:"/docs/0.19.0/terraform/using-terraform-cr/plan-and-manually-apply-terraform-resources",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.19.0/terraform/using-terraform-cr/plan-and-manually-apply-terraform-resources.mdx",tags:[],version:"0.19.0",frontMatter:{title:"Plan and manually apply Terraform resources",hide_title:!0},sidebar:"docs",previous:{title:"Provision resources and auto approve",permalink:"/docs/0.19.0/terraform/using-terraform-cr/provision-resources-and-auto-approve"},next:{title:"Provision resources and write output data",permalink:"/docs/0.19.0/terraform/using-terraform-cr/provision-resources-and-write-output-data"}},p={},s=[{value:"Define the Terraform object",id:"define-the-terraform-object",level:2},{value:"View the approval message",id:"view-the-approval-message",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"use-tf-controller-to-plan-and-manually-apply-terraform-resources"},"Use TF-controller to plan and manually apply Terraform resources"),(0,a.kt)("p",null,"TF-controller is a tool that allows you to manage infrastructure as code\nusing Terraform within a Kubernetes cluster. With TF-controller, you can\ndefine your infrastructure in a declarative way and have it automatically managed and updated."),(0,a.kt)("p",null,"In this guide, we will walk through the steps of using TF-controller to plan and\nmanually apply Terraform resources.\nThis involves creating a ",(0,a.kt)("inlineCode",{parentName:"p"},"Terraform")," object and a ",(0,a.kt)("inlineCode",{parentName:"p"},"GitRepository")," object,\nand then using kubectl to view the plan before applying it."),(0,a.kt)("p",null,"We will start by creating the ",(0,a.kt)("inlineCode",{parentName:"p"},"Terraform")," object and specifying the necessary fields,\nincluding the ",(0,a.kt)("inlineCode",{parentName:"p"},"approvePlan")," field.\nWe will then create the ",(0,a.kt)("inlineCode",{parentName:"p"},"GitRepository")," object,\nwhich points to the Git repository containing the Terraform configuration."),(0,a.kt)("p",null,"Once these objects are created, we will use kubectl to obtain the ",(0,a.kt)("inlineCode",{parentName:"p"},"approvePlan")," value\nand set it in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Terraform")," object. After making our changes and pushing them to the Git repository,\nTF-controller will apply the plan and create the real resources."),(0,a.kt)("h2",{id:"define-the-terraform-object"},"Define the Terraform object"),(0,a.kt)("p",null,"To use the plan & manual approval workflow with TF-controller,\nyou will need to start by either setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.approvePlan")," field in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Terraform")," object\nto be the blank value, or omitting it entirely.\nThis will tell TF-controller to use the plan & manual approval workflow, rather than the auto-apply workflow.\nIf you want to use the auto-apply workflow, you will need to set the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.approvePlan"),' field to "auto".'),(0,a.kt)("p",null,"To set the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.approvePlan")," field to be the blank value,\nyou can include it in the spec field and set it to an empty string.\nAlternatively, you can omit the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.approvePlan")," field entirely and let it default to the blank value."),(0,a.kt)("p",null,"In addition to setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.approvePlan")," field, you will also need to specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"interval"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"path"),",\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"sourceRef")," fields in the spec field.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"interval")," field determines how often TF-controller will run the Terraform configuration,\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," field specifies the location of the configuration files,\nand the ",(0,a.kt)("inlineCode",{parentName:"p"},"sourceRef")," field points to the GitRepository object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{7}","{7}":!0},'apiVersion: infra.contrib.fluxcd.io/v1alpha1\nkind: Terraform\nmetadata:\n  name: helloworld\n  namespace: flux-system\nspec:\n  approvePlan: "" # or you can omit this field\n  interval: 1m\n  path: ./\n  sourceRef:\n    kind: GitRepository\n    name: helloworld\n    namespace: flux-system\n')),(0,a.kt)("h2",{id:"view-the-approval-message"},"View the approval message"),(0,a.kt)("p",null,"After setting the approvePlan field in the Terraform object and creating any necessary objects, the controller will generate a plan and output a message about how to use the approvePlan field to approve the plan."),(0,a.kt)("p",null,"To obtain this message, you can run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n flux-system get tf/helloworld\n")),(0,a.kt)("p",null,"This command will output the message containing the approvePlan value\nthat you will need to use to approve the plan.\nOnce you have this value, you can edit the Terraform object file, and set the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.approvePlan")," field\nto the value obtained from the message."),(0,a.kt)("p",null,"After making your changes and pushing them to the Git repository,\nTF-controller will apply the plan and create the real resources.\nThis process is known as the plan & manual approval workflow,\nas it involves generating a plan and requiring manual approval before the changes are applied."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{7}","{7}":!0},"apiVersion: infra.contrib.fluxcd.io/v1alpha1\nkind: Terraform\nmetadata:\n  name: hello-world\n  namespace: flux-system\nspec:\n  approvePlan: plan-main-b8e362c206 # first 8 digits of a commit hash is enough\n  interval: 1m\n  path: ./\n  sourceRef:\n    kind: GitRepository\n    name: helloworld\n    namespace: flux-system\n")))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);