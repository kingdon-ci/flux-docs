"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[18248],{25704:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={title:"Terraform Controller CLI",hide_title:!0},i="Terraform Controller CLI",l={unversionedId:"terraform/tfctl",id:"version-0.21.2/terraform/tfctl",title:"Terraform Controller CLI",description:"tfctl is a command-line utility to help with tf-controller operations.",source:"@site/versioned_docs/version-0.21.2/terraform/tfctl.mdx",sourceDirName:"terraform",slug:"/terraform/tfctl",permalink:"/docs/0.21.2/terraform/tfctl",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.21.2/terraform/tfctl.mdx",tags:[],version:"0.21.2",frontMatter:{title:"Terraform Controller CLI",hide_title:!0},sidebar:"docs",previous:{title:"Terraform Enterprise",permalink:"/docs/0.21.2/terraform/terraform-enterprise"},next:{title:"Logging Env Variables",permalink:"/docs/0.21.2/terraform/environment-variables"}},c={},s=[{value:"Installation",id:"installation",level:2}],f={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"terraform-controller-cli"},"Terraform Controller CLI"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"tfctl")," is a command-line utility to help with tf-controller operations."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"We are planning on migrating these features into the Weave GitOps CLI.")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"You can download the ",(0,o.kt)("inlineCode",{parentName:"p"},"tfctl")," binary via the GitHub releases page: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/weaveworks/tf-controller/releases"},"https://github.com/weaveworks/tf-controller/releases")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Usage:\n  tfctl [command]\n\nAvailable Commands:\n  completion  Generate the autocompletion script for the specified shell\n  create      Create a Terraform resource\n  delete      Delete a Terraform resource\n  get         Get Terraform resources\n  help        Help about any command\n  install     Install the tf-controller\n  plan        Plan a Terraform configuration\n  reconcile   Trigger a reconcile of the provided resource\n  resume      Resume reconciliation for the provided resource\n  suspend     Suspend reconciliation for the provided resource\n  uninstall   Uninstall the tf-controller\n  version     Prints tf-controller and tfctl version information\n\nFlags:\n  -h, --help                help for tfctl\n      --kubeconfig string   Path to the kubeconfig file to use for CLI requests.\n  -n, --namespace string    The kubernetes namespace to use for CLI requests. (default "flux-system")\n      --terraform string    The location of the terraform binary. (default "/usr/bin/terraform")\n\nUse "tfctl [command] --help" for more information about a command.\n')))}p.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),p=s(r),u=o,d=p["".concat(c,".").concat(u)]||p[u]||m[u]||a;return r?n.createElement(d,i(i({ref:t},f),{},{components:r})):n.createElement(d,i({ref:t},f))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);