"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[90750],{31200:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={title:"Disable drift detection",hide_title:!0},a="Use TF-controller with drift detection disabled",l={unversionedId:"terraform/using-terraform-cr/drift-detection-disabled",id:"version-0.16.0/terraform/using-terraform-cr/drift-detection-disabled",title:"Disable drift detection",description:"To disable drift detection in a Terraform object reconciled by the TF-controller, you can add the following configuration to your Terraform object:",source:"@site/versioned_docs/version-0.16.0/terraform/using-terraform-cr/drift-detection-disabled.mdx",sourceDirName:"terraform/using-terraform-cr",slug:"/terraform/using-terraform-cr/drift-detection-disabled",permalink:"/docs/0.16.0/terraform/using-terraform-cr/drift-detection-disabled",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.16.0/terraform/using-terraform-cr/drift-detection-disabled.mdx",tags:[],version:"0.16.0",frontMatter:{title:"Disable drift detection",hide_title:!0},sidebar:"docs",previous:{title:"Detect drifts only without planning or applying",permalink:"/docs/0.16.0/terraform/using-terraform-cr/detect-drifts-only-without-plan-or-apply"},next:{title:"Set variables for Terraform resources",permalink:"/docs/0.16.0/terraform/using-terraform-cr/set-variables-for-trraform-resources"}},c={},s=[],d={toc:s};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-tf-controller-with-drift-detection-disabled"},"Use TF-controller with drift detection disabled"),(0,o.kt)("p",null,"To disable drift detection in a ",(0,o.kt)("inlineCode",{parentName:"p"},"Terraform")," object reconciled by the TF-controller, you can add the following configuration to your ",(0,o.kt)("inlineCode",{parentName:"p"},"Terraform")," object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{8}","{8}":!0},"apiVersion: infra.contrib.fluxcd.io/v1alpha1\nkind: Terraform\nmetadata:\n  name: helloworld\n  namespace: flux-system\nspec:\n  approvePlan: auto\n  disableDriftDetection: true\n  interval: 1m\n  path: ./\n  sourceRef:\n    kind: GitRepository\n    name: helloworld\n    namespace: flux-system\n")),(0,o.kt)("p",null,"This configuration will tell the TF-controller to run the specified Terraform configuration\nlocated at ",(0,o.kt)("inlineCode",{parentName:"p"},"./")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"flux-system")," namespace, with a polling ",(0,o.kt)("inlineCode",{parentName:"p"},"interval")," of 1 minute.\nIt will also automatically approve any plans that are created,\nand it will not perform drift detection."),(0,o.kt)("p",null,"Drift detection is a feature that compares the current state of the resources\nmanaged by Terraform with the desired state defined in the configuration files.\nIf there are any differences, the TF-controller will create a plan to bring\nthe resources back in line with the configuration.\nBy setting ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.disableDriftDetection: true"),", you are telling the TF-controller\nto skip this check and not create any plans to correct for any detected drift."))}f.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),f=s(r),u=o,m=f["".concat(c,".").concat(u)]||f[u]||p[u]||i;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[f]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);