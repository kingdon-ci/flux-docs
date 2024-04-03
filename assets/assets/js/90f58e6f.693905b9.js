"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[7042],{87411:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var t=r(87462),o=(r(67294),r(3905));const a={title:"Customize Runner Pods",hide_title:!0},i="Customize Runner Pod's Metadata",s={unversionedId:"terraform/using-terraform-cr/customize-runner",id:"version-0.21.1/terraform/using-terraform-cr/customize-runner",title:"Customize Runner Pods",description:"In some situations, it is needed to add custom labels and annotations to the runner pod used to reconcile Terraform.",source:"@site/versioned_docs/version-0.21.1/terraform/using-terraform-cr/customize-runner.mdx",sourceDirName:"terraform/using-terraform-cr",slug:"/terraform/using-terraform-cr/customize-runner",permalink:"/docs/0.21.1/terraform/using-terraform-cr/customize-runner",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.21.1/terraform/using-terraform-cr/customize-runner.mdx",tags:[],version:"0.21.1",frontMatter:{title:"Customize Runner Pods",hide_title:!0},sidebar:"docs",previous:{title:"Primitive Modules",permalink:"/docs/0.21.1/terraform/using-terraform-cr/modules"},next:{title:"Backup and Restore State",permalink:"/docs/0.21.1/terraform/backup-and-restore"}},u={},l=[{value:"Customize Runner Pod Image",id:"customize-runner-pod-image",level:2},{value:"Customize Runner Pod Specifications",id:"customize-runner-pod-specifications",level:2}],c={toc:l};function m(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"customize-runner-pods-metadata"},"Customize Runner Pod's Metadata"),(0,o.kt)("p",null,"In some situations, it is needed to add custom labels and annotations to the runner pod used to reconcile Terraform.\nFor example, for Azure AKS to grant pod active directory permissions using Azure Active Directory (AAD) Pod Identity,\na label like ",(0,o.kt)("inlineCode",{parentName:"p"},"aadpodidbinding: myIdentity")," on the pod is required."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand to view"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: infra.contrib.fluxcd.io/v1alpha1\nkind: Terraform\nmetadata:\n  name: helloworld\n  namespace: flux-system\nspec:\n  approvePlan: auto\n  interval: 1m\n  path: ./\n  sourceRef:\n    kind: GitRepository\n    name: helloworld\n    namespace: flux-system\n  runnerPodTemplate:\n    metadata:\n      labels:\n        aadpodidbinding: myIdentity\n      annotations:\n        company.com/abc: xyz\n"))),(0,o.kt)("h2",{id:"customize-runner-pod-image"},"Customize Runner Pod Image"),(0,o.kt)("p",null,"By default, the Terraform controller uses ",(0,o.kt)("inlineCode",{parentName:"p"},"RUNNER_POD_IMAGE")," environment variable to identify the Runner Pod's image to use. You can customize the image on the global level by updating the value of the environment variable or, you can specify an image to use per Terraform object for its reconciliation."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand to view"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: infra.contrib.fluxcd.io/v1alpha1\nkind: Terraform\nmetadata:\n  name: helloworld\n  namespace: flux-system\nspec:\n  approvePlan: auto\n  interval: 1m\n  path: ./\n  sourceRef:\n    kind: GitRepository\n    name: helloworld\n    namespace: flux-system\n  runnerPodTemplate:\n    spec:\n      image: registry.io/tf-runner:xyz\n"))),(0,o.kt)("p",null,"You can use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/weaveworks/tf-controller/blob/main/runner.Dockerfile"},(0,o.kt)("inlineCode",{parentName:"a"},"runner.Dockerfile"))," as a basis of customizing runner pod image."),(0,o.kt)("h2",{id:"customize-runner-pod-specifications"},"Customize Runner Pod Specifications"),(0,o.kt)("p",null,"You can also customize various Runner Pod ",(0,o.kt)("inlineCode",{parentName:"p"},"spec")," fields to control and configure how the Runner Pod runs.\nFor example, you can configure Runner Pod ",(0,o.kt)("inlineCode",{parentName:"p"},"spec")," affinity and tolerations if you need to run in on a specific set of nodes. Please see ",(0,o.kt)("a",{parentName:"p",href:"https://weaveworks.github.io/tf-controller/References/terraform/#infra.contrib.fluxcd.io/v1alpha1.RunnerPodSpec"},"RunnerPodSpec")," for a list of the configurable Runner Pod ",(0,o.kt)("inlineCode",{parentName:"p"},"spec")," fields."))}m.isMDXComponent=!0},3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>f});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),l=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=l(e.components);return t.createElement(u.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return r?t.createElement(f,i(i({ref:n},c),{},{components:r})):t.createElement(f,i({ref:n},c))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);