"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[36206],{65116:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=t(87462),n=(t(67294),t(3905));const a={title:"OCI Artifact",hide_title:!0},i="Using OCI Artifacts as a Source for Terraform Objects",l={unversionedId:"terraform/oci-artifact",id:"version-0.22.0/terraform/oci-artifact",title:"OCI Artifact",description:"To use OCI artifacts as the source for Terraform objects, you'll need to have Flux 2 version v0.32.0 or higher.",source:"@site/versioned_docs/version-0.22.0/terraform/oci-artifact.mdx",sourceDirName:"terraform",slug:"/terraform/oci-artifact",permalink:"/docs/0.22.0/terraform/oci-artifact",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.22.0/terraform/oci-artifact.mdx",tags:[],version:"0.22.0",frontMatter:{title:"OCI Artifact",hide_title:!0},sidebar:"docs",previous:{title:"Backup and Restore State",permalink:"/docs/0.22.0/terraform/backup-and-restore"},next:{title:"Configure IRSA for AWS EKS",permalink:"/docs/0.22.0/terraform/aws-eks"}},c={},s=[],u={toc:s};function p(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"using-oci-artifacts-as-a-source-for-terraform-objects"},"Using OCI Artifacts as a Source for Terraform Objects"),(0,n.kt)("p",null,"To use OCI artifacts as the source for ",(0,n.kt)("inlineCode",{parentName:"p"},"Terraform")," objects, you'll need to have Flux 2 version ",(0,n.kt)("strong",{parentName:"p"},"v0.32.0")," or higher."),(0,n.kt)("p",null,"To create an OCI artifact for your Terraform modules, you can use the Flux CLI by running the following commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'flux push artifact oci://ghcr.io/tf-controller/helloworld:$(git rev-parse --short HEAD) \\\n    --path="./modules" \\\n    --source="$(git config --get remote.origin.url)" \\\n    --revision="$(git branch --show-current)/$(git rev-parse HEAD)"\n\nflux tag artifact oci://ghcr.io/tf-controller/helloworld:$(git rev-parse --short HEAD) \\\n    --tag main\n')),(0,n.kt)("p",null,"To use the OCI artifact as the source for your ",(0,n.kt)("inlineCode",{parentName:"p"},"Terraform")," object,\nyou'll need to define an ",(0,n.kt)("inlineCode",{parentName:"p"},"OCIRepository")," and use it as the ",(0,n.kt)("inlineCode",{parentName:"p"},"spec.sourceRef")," of your ",(0,n.kt)("inlineCode",{parentName:"p"},"Terraform")," object:"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Expand to view"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{5,20-22}","{5,20-22}":!0},"---\napiVersion: source.toolkit.fluxcd.io/v1beta2\nkind: OCIRepository\nmetadata:\n  name: helloworld-oci\nspec:\n  interval: 1m\n  url: oci://ghcr.io/tf-controller/helloworld\n  ref:\n    tag: main\n---\napiVersion: infra.contrib.fluxcd.io/v1alpha1\nkind: Terraform\nmetadata:\n  name: helloworld-tf-oci\nspec:\n  path: ./\n  approvePlan: auto\n  interval: 1m\n  sourceRef:\n    kind: OCIRepository\n    name: helloworld-oci\n  writeOutputsToSecret:\n    name: helloworld-outputs\n"))),(0,n.kt)("p",null,"This configuration will use the OCI artifact at ",(0,n.kt)("inlineCode",{parentName:"p"},"oci://ghcr.io/tf-controller/helloworld")," with the ",(0,n.kt)("inlineCode",{parentName:"p"},"main")," tag as the\nsource for your ",(0,n.kt)("inlineCode",{parentName:"p"},"Terraform"),' object. The object will be reconciled every 1 minute, and will use the "auto-apply" mode to\napply any changes to your resources. The outputs of the Terraform run will be written to a ',(0,n.kt)("inlineCode",{parentName:"p"},"Secret")," called ",(0,n.kt)("inlineCode",{parentName:"p"},"helloworld-outputs"),"."))}p.isMDXComponent=!0},3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),s=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return o.createElement(c.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=n,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||a;return t?o.createElement(d,i(i({ref:r},u),{},{components:t})):o.createElement(d,i({ref:r},u))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);