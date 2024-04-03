"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[29435],{20204:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={title:"Backup and Restore State",hide_title:!0},s="Backup and restore Terraform state",c={unversionedId:"terraform/backup-and-restore",id:"version-0.23.0/terraform/backup-and-restore",title:"Backup and Restore State",description:"Backup the tfstate",source:"@site/versioned_docs/version-0.23.0/terraform/backup-and-restore.mdx",sourceDirName:"terraform",slug:"/terraform/backup-and-restore",permalink:"/docs/0.23.0/terraform/backup-and-restore",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.23.0/terraform/backup-and-restore.mdx",tags:[],version:"0.23.0",frontMatter:{title:"Backup and Restore State",hide_title:!0},sidebar:"docs",previous:{title:"Customize Runner Pods",permalink:"/docs/0.23.0/terraform/using-terraform-cr/customize-runner"},next:{title:"OCI Artifact",permalink:"/docs/0.23.0/terraform/oci-artifact"}},i={},l=[{value:"Backup the tfstate",id:"backup-the-tfstate",level:2},{value:"Restore the tfstate",id:"restore-the-tfstate",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"backup-and-restore-terraform-state"},"Backup and restore Terraform state"),(0,n.kt)("h2",{id:"backup-the-tfstate"},"Backup the tfstate"),(0,n.kt)("p",null,"Assume that we have the ",(0,n.kt)("inlineCode",{parentName:"p"},"my-stack")," Terraform object with its ",(0,n.kt)("inlineCode",{parentName:"p"},".spec.workspace"),' set to "default".'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get terraform\n\nNAME       READY     STATUS         AGE\nmy-stack   Unknown   Initializing   28s\n")),(0,n.kt)("p",null,"We can backup its tfstate out of the cluster, like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"WORKSPACE=default\nNAME=my-stack\n\nkubectl get secret tfstate-${WORKSPACE}-${NAME} \\\n  -ojsonpath='{.data.tfstate}' \\\n  | base64 -d | gzip -d > terraform.tfstate\n")),(0,n.kt)("h2",{id:"restore-the-tfstate"},"Restore the tfstate"),(0,n.kt)("p",null,"To restore the tfstate file or import an existing tfstate file to the cluster, we can use the following operation:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'gzip terraform.tfstate\n\nWORKSPACE=default\nNAME=my-stack\n\nkubectl create secret \\\n  generic tfstate-${WORKSPACE}-${NAME} \\\n  --from-file=tfstate=terraform.tfstate.gz \\\n  --dry-run=client -o=yaml \\\n  | yq e \'.metadata.annotations["encoding"]="gzip"\' - \\\n  > tfstate-${WORKSPACE}-${NAME}.yaml\n\nkubectl apply -f tfstate-${WORKSPACE}-${NAME}.yaml\n')))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),l=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,d=u["".concat(i,".").concat(m)]||u[m]||f[m]||o;return r?a.createElement(d,s(s({ref:t},p),{},{components:r})):a.createElement(d,s({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:n,s[1]=c;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);