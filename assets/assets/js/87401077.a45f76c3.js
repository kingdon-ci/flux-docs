"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[42205],{6133:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={title:"Provision resources and write output data",hide_title:!0},i="Output Data",s={unversionedId:"terraform/using-terraform-cr/provision-resources-and-write-output-data",id:"version-0.22.0/terraform/using-terraform-cr/provision-resources-and-write-output-data",title:"Provision resources and write output data",description:"Output data is data produced by Terraform as a result of running a configuration.",source:"@site/versioned_docs/version-0.22.0/terraform/using-terraform-cr/provision-resources-and-write-output-data.mdx",sourceDirName:"terraform/using-terraform-cr",slug:"/terraform/using-terraform-cr/provision-resources-and-write-output-data",permalink:"/docs/0.22.0/terraform/using-terraform-cr/provision-resources-and-write-output-data",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.22.0/terraform/using-terraform-cr/provision-resources-and-write-output-data.mdx",tags:[],version:"0.22.0",frontMatter:{title:"Provision resources and write output data",hide_title:!0},sidebar:"docs",previous:{title:"Plan and manually apply Terraform resources",permalink:"/docs/0.22.0/terraform/using-terraform-cr/plan-and-manually-apply-terraform-resources"},next:{title:"Detect drifts only without planning or applying",permalink:"/docs/0.22.0/terraform/using-terraform-cr/detect-drifts-only-without-plan-or-apply"}},l={},u=[{value:"Write all outputs",id:"write-all-outputs",level:2},{value:"Selectively Writing Outputs",id:"selectively-writing-outputs",level:2},{value:"Renaming outputs",id:"renaming-outputs",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"output-data"},"Output Data"),(0,o.kt)("p",null,"Output data is data produced by Terraform as a result of running a configuration.\nOutput data can include values such as resource IDs, IP addresses, and other information about the resources that have been created."),(0,o.kt)("p",null,"With TF-controller, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},".spec.writeOutputsToSecret")," field to write the outputs created by Terraform to a secret.\nA secret is a Kubernetes resource that stores sensitive data, such as passwords, API keys, and other confidential information."),(0,o.kt)("h2",{id:"write-all-outputs"},"Write all outputs"),(0,o.kt)("p",null,"To write all outputs created by Terraform to a secret using TF-controller, you will need to create a Terraform object and specify the .spec.writeOutputsToSecret.name field."),(0,o.kt)("p",null,'Here is an example of a Terraform object that writes all outputs to a secret named "helloworld-output":'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{14-15}","{14-15}":!0},"apiVersion: infra.contrib.fluxcd.io/v1alpha1\nkind: Terraform\nmetadata:\n  name: helloworld\n  namespace: flux-system\nspec:\n  approvePlan: auto\n  interval: 1m\n  path: ./\n  sourceRef:\n    kind: GitRepository\n    name: helloworld\n    namespace: flux-system\n  writeOutputsToSecret:\n    name: helloworld-output\n")),(0,o.kt)("p",null,"In this example, the ",(0,o.kt)("inlineCode",{parentName:"p"},".spec.writeOutputsToSecret.name"),' field is set to "helloworld-output",\nwhich specifies the name of the secret that the outputs will be written to.\nBy default, the controller will write all outputs to the secret.'),(0,o.kt)("p",null,"To use this ",(0,o.kt)("inlineCode",{parentName:"p"},"Terraform")," object, you will also need to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"GitRepository")," object to specify\nthe location of the Terraform configuration files. In this example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"GitRepository"),' object has the name "helloworld"\nand is located in the "flux-system" namespace.'),(0,o.kt)("p",null,"Once the ",(0,o.kt)("inlineCode",{parentName:"p"},"Terraform")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"GitRepository")," objects are created, the controller will automatically write all outputs\ncreated by Terraform to the specified secret. This can be useful in situations where you want to store the outputs\nin a secure location or use them in other parts of your infrastructure."),(0,o.kt)("h2",{id:"selectively-writing-outputs"},"Selectively Writing Outputs"),(0,o.kt)("p",null,"In addition to writing all outputs created by Terraform to a secret,\nyou can also choose to write only a subset of outputs by specifying the output names you want to write in the ",(0,o.kt)("inlineCode",{parentName:"p"},".spec.writeOutputsToSecret.outputs")," array."),(0,o.kt)("p",null,"To do this, you will need to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Terraform")," object and specify the ",(0,o.kt)("inlineCode",{parentName:"p"},".spec.writeOutputsToSecret.name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".spec.writeOutputsToSecret.outputs")," fields."),(0,o.kt)("p",null,"Here is an example of a ",(0,o.kt)("inlineCode",{parentName:"p"},"Terraform"),' object that writes only the outputs with the names "hello_world" and "my_sensitive_data" to a secret named "helloworld-output":'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{16-18}","{16-18}":!0},"apiVersion: infra.contrib.fluxcd.io/v1alpha1\nkind: Terraform\nmetadata:\n  name: helloworld\n  namespace: flux-system\nspec:\n  approvePlan: auto\n  interval: 1m\n  path: ./\n  sourceRef:\n    kind: GitRepository\n    name: helloworld\n    namespace: flux-system\n  writeOutputsToSecret:\n    name: helloworld-output\n    outputs:\n    - hello_world\n    - my_sensitive_data\n")),(0,o.kt)("p",null,"In this example, the ",(0,o.kt)("inlineCode",{parentName:"p"},".spec.writeOutputsToSecret.name"),' field is set to "helloworld-output",\nwhich specifies the name of the secret that the outputs will be written to.\nThe ',(0,o.kt)("inlineCode",{parentName:"p"},".spec.writeOutputsToSecret.outputs")," field is an array containing the names of the outputs to be written to the secret."),(0,o.kt)("h2",{id:"renaming-outputs"},"Renaming outputs"),(0,o.kt)("p",null,"Sometimes you may want to rename an output in order to use it with other components in your GitOps pipeline.\nFor example, you may have a key in a secret manager that must be named a certain way in order to be used by other controllers."),(0,o.kt)("p",null,"TF-controller provides support for renaming outputs by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"old_name:new_name")," format in the ",(0,o.kt)("inlineCode",{parentName:"p"},".spec.writeOutputsToSecret.outputs")," field."),(0,o.kt)("p",null,"To rename an output with TF-controller, you will need to create a Terraform object and specify\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},".spec.writeOutputsToSecret.name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".spec.writeOutputsToSecret.outputs")," fields."),(0,o.kt)("p",null,'Here is an example of a Terraform object that renames the "age_key" output to "age.agekey" and writes it to a secret named "helloworld-output":'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{16-17}","{16-17}":!0},"apiVersion: infra.contrib.fluxcd.io/v1alpha1\nkind: Terraform\nmetadata:\n  name: helloworld\n  namespace: flux-system\nspec:\n  approvePlan: auto\n  interval: 1m\n  path: ./\n  sourceRef:\n    kind: GitRepository\n    name: helloworld\n    namespace: flux-system\n  writeOutputsToSecret:\n    name: helloworld-output\n    outputs:\n    - age_key:age.agekey\n")),(0,o.kt)("p",null,'In this example, the name field is still set to "helloworld-output",\nbut the outputs field now contains the ',(0,o.kt)("inlineCode",{parentName:"p"},"old_name:new_name"),' mapping,\nwhich renames the "age_key" output to "age.agekey" as it is written to the secret.'))}c.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),d=o,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);