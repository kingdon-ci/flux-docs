"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[45410],{45866:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=r(87462),o=(r(67294),r(3905));const i={title:"Primitive Modules",hide_title:!0},a="Primitive Modules",l={unversionedId:"terraform/using-terraform-cr/modules",id:"version-0.21.1/terraform/using-terraform-cr/modules",title:"Primitive Modules",description:"This document describes how to use the Weave TF-controller with a primitive module.",source:"@site/versioned_docs/version-0.21.1/terraform/using-terraform-cr/modules.mdx",sourceDirName:"terraform/using-terraform-cr",slug:"/terraform/using-terraform-cr/modules",permalink:"/docs/0.21.1/terraform/using-terraform-cr/modules",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.21.1/terraform/using-terraform-cr/modules.mdx",tags:[],version:"0.21.1",frontMatter:{title:"Primitive Modules",hide_title:!0},sidebar:"docs",previous:{title:"Dependency Management",permalink:"/docs/0.21.1/terraform/using-terraform-cr/depends-on"},next:{title:"Customize Runner Pods",permalink:"/docs/0.21.1/terraform/using-terraform-cr/customize-runner"}},s={},m=[{value:"What is a primitive module?",id:"what-is-a-primitive-module",level:2},{value:"Hello World Primitive Module",id:"hello-world-primitive-module",level:2}],p={toc:m};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"primitive-modules"},"Primitive Modules"),(0,o.kt)("p",null,"This document describes how to use the Weave TF-controller with a primitive module.\nIt requires TF-controller v0.13+ to run the example."),(0,o.kt)("h2",{id:"what-is-a-primitive-module"},"What is a primitive module?"),(0,o.kt)("p",null,"It's a Terraform module that contains only a single resource."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'A Terraform primitive module must contains the "values" variable.'),(0,o.kt)("li",{parentName:"ul"},'The "values" variable must be an object with fields of optional types.'),(0,o.kt)("li",{parentName:"ul"},"The module must be placed under a directory, which is named after the resource."),(0,o.kt)("li",{parentName:"ul"},"The directory can optionally contain other files, for example the .terraform.lock.hcl."),(0,o.kt)("li",{parentName:"ul"},"We call a set of primitive modules bundled into an OCI image, a package.")),(0,o.kt)("h2",{id:"hello-world-primitive-module"},"Hello World Primitive Module"),(0,o.kt)("p",null,"Here is an example of how a primitive module can be defined in YAML.\nAssume that we have a ready-to-use OCI image with a primitive module for the imaginary resource ",(0,o.kt)("inlineCode",{parentName:"p"},"aws_hello_world"),",\nand the image is tagged as ",(0,o.kt)("inlineCode",{parentName:"p"},"ghcr.io/tf-controller/hello-primitive-modules/v4.32.0:v1"),"."),(0,o.kt)("p",null,"We'll use the following Terraform object definition to provision the resource."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"We need to create a Terraform object with the ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.sourceRef.kind")," field\nset to ",(0,o.kt)("inlineCode",{parentName:"p"},"OCIRepository")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.sourceRef.name")," field set to the name of the OCIRepository object.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"We need to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.path")," field to the name of the resource, in this case ",(0,o.kt)("inlineCode",{parentName:"p"},"aws_hello_world"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"We need to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.values")," field to the values of the resource. This is a YAML object that\nwill be converted to an HCL variable, and passed to the Terraform module.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"We need to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.approvePlan")," field to ",(0,o.kt)("inlineCode",{parentName:"p"},"auto")," to automatically approve the plan."))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand to view"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{19-26}","{19-26}":!0},"---\napiVersion: source.toolkit.fluxcd.io/v1beta2\nkind: OCIRepository\nmetadata:\n  name: hello-package-v4.32.0\n  namespace: flux-system\nspec:\n  interval: 30s\n  url: oci://ghcr.io/tf-controller/hello-primitive-modules/v4.32.0\n  ref:\n    tag: v1\n---\napiVersion: infra.contrib.fluxcd.io/v1alpha1\nkind: Terraform\nmetadata:\n  name: hello-world\n  namespace: flux-system\nspec:\n  path: aws_hello_world\n  values:\n    greeting: Hi\n    subject: my world\n  sourceRef:\n    kind: OCIRepository\n    name: hello-package-v4.32.0\n  approvePlan: auto\n  interval: 1h0m\n"))))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(r),d=o,f=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var m=2;m<i;m++)a[m]=r[m];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);