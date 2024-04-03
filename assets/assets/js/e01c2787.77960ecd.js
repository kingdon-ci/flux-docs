"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[46531],{34595:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"Introduction to Terraform Controller",hide_title:!0},i="Overview",l={unversionedId:"terraform/terraform-intro",id:"version-0.31.2/terraform/terraform-intro",title:"Introduction to Terraform Controller",description:"Terraform Controller (TF-Controller) is a reliable tool for managing your infrastructure and application resources using the GitOps approach, all at your own pace. An open source project created by Weaveworks, the makers of Flux, TF-Controller follows patterns established by Flux and integrates with Weave GitOps.",source:"@site/versioned_docs/version-0.31.2/terraform/terraform-intro.mdx",sourceDirName:"terraform",slug:"/terraform/terraform-intro",permalink:"/docs/0.31.2/terraform/terraform-intro",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.31.2/terraform/terraform-intro.mdx",tags:[],version:"0.31.2",frontMatter:{title:"Introduction to Terraform Controller",hide_title:!0},sidebar:"docs",previous:{title:"Version Information",permalink:"/docs/0.31.2/gitops-templates/versions"},next:{title:"Get Started",permalink:"/docs/0.31.2/terraform/get-started-terraform"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Dependencies",id:"dependencies",level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/weaveworks/tf-controller"},"Terraform Controller")," (TF-Controller) is a reliable tool for managing your infrastructure and application resources using the GitOps approach, all at your own pace. An open source project created by Weaveworks, the makers of ",(0,a.kt)("a",{parentName:"p",href:"https://fluxcd.io"},"Flux"),", TF-Controller follows patterns established by Flux and integrates with Weave GitOps. "),(0,a.kt)("p",null,"TF-Controller makes the following GitOps models available to suit your specific needs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Drift Detection:")," Use GitOps for drift detection so that you can decide which actions to take when drift occurs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"GitOps Automation:")," Fully automate the GitOps process, including provisioning and enforcement, for all of your Terraform resources."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Hybrid GitOps Automation:")," GitOps-ify certain parts of your existing infrastructure resources, such as a nodegroup or security group in an existing EKS cluster."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"State Enforcement:")," Use GitOps to enforce an existing ",(0,a.kt)("inlineCode",{parentName:"li"},"tfstate")," without making any other changes.")),(0,a.kt)("p",null,"To get started with TF-controller, simply follow the provided ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.31.2/terraform/get-started-terraform"},"getting started")," guide. You can also find ",(0,a.kt)("a",{parentName:"p",href:"https://weaveworks.github.io/tf-controller/"},"extensive documentation here"),"\u2014it covers API references, CLI references, and ",(0,a.kt)("a",{parentName:"p",href:"https://weaveworks.github.io/tf-controller/use_tf_controller/"},"how-to's")," for common situations."),(0,a.kt)("p",null,"With Weave GitOps Enterprise, you can manage ",(0,a.kt)("inlineCode",{parentName:"p"},"Terraform")," objects the same way you can with ",(0,a.kt)("inlineCode",{parentName:"p"},"Kustomization")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"HelmReleases"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"WGE Enterprise dashboard showing Terraform view",src:r(65568).Z,width:"3012",height:"1702"})),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Multi-Tenancy"),": TF-controller supports multi-tenancy by running Terraform ",(0,a.kt)("inlineCode",{parentName:"li"},"plan")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"apply")," inside Runner Pods.\nWhen specifying ",(0,a.kt)("inlineCode",{parentName:"li"},".metadata.namespace")," and ",(0,a.kt)("inlineCode",{parentName:"li"},".spec.serviceAccountName"),", the Runner Pod uses the specified ServiceAccount\nand runs inside the specified Namespace. These settings enable the soft multi-tenancy model, usable within\nthe Flux multi-tenancy setup."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"GitOps Automation for Terraform"),": Setting ",(0,a.kt)("inlineCode",{parentName:"li"},".spec.approvePlan=auto")," allows a ",(0,a.kt)("inlineCode",{parentName:"li"},"Terraform")," object\nto be reconciled and act as the representation of your Terraform resources. TF-controller uses the spec of\nthe ",(0,a.kt)("inlineCode",{parentName:"li"},"Terraform")," object to ",(0,a.kt)("inlineCode",{parentName:"li"},"plan")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"apply")," its associated Terraform resources. It then stores\nthe ",(0,a.kt)("inlineCode",{parentName:"li"},"TFSTATE")," of the applied resources as a ",(0,a.kt)("inlineCode",{parentName:"li"},"Secret")," inside the Kubernetes cluster. After ",(0,a.kt)("inlineCode",{parentName:"li"},".spec.interval")," passes,\nTF-Controller checks for drift between your live system and your Terraform resources and, if affirmative, automatically generates and applies a plan to correct it."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Drift detection"),": Enabled by default, and part of the GitOps automation feature, the controller detects and fixes infrastructure drift based on the Terraform resources and their ",(0,a.kt)("inlineCode",{parentName:"li"},"TFSTATE"),". You can use the field ",(0,a.kt)("inlineCode",{parentName:"li"},".spec.disableDriftDetection")," to disable this behaviour. Drift detection-only mode, without ",(0,a.kt)("inlineCode",{parentName:"li"},"plan")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"apply")," steps, allows you to perform read-only drift detection."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Plan and Manual Approve"),": Separate the ",(0,a.kt)("inlineCode",{parentName:"li"},"plan")," from the ",(0,a.kt)("inlineCode",{parentName:"li"},"apply")," step, just like in the Terraform workflow you are familiar with\u2014but in a GitOps way. When a plan is generated, the controller shows you a message asking if you want to apply it. Optionally create and push the change to a new branch for your team members to review and approve too."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"YAML-based Terraform"),": The ",(0,a.kt)("inlineCode",{parentName:"li"},"Terraform")," object in v0.13.0+ allows you to better configure your\nTerraform resources via YAMLs, but without introducing any extra CRDs to your cluster."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"First-class Terraform Cloud Support:")," Use ",(0,a.kt)("inlineCode",{parentName:"li"},"spec.cloud")," to configure ",(0,a.kt)("inlineCode",{parentName:"li"},"Terraform")," objects to use Terraform Cloud as the backend\nfor storing the state.")),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("p",null,"TF-controller has its own versioning system that is separate from the versioning system used by Weave GitOps.\nThis means that you can install and use TF-controller independently of Weave GitOps\u2014it will not be affected\nby the version of Weave GitOps that you are using."),(0,a.kt)("p",null,"Here is the dependency matrix:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Version"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Terraform"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Source Controller"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Flux v2"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"v0.14.0")),(0,a.kt)("td",{parentName:"tr",align:"center"},"v1.3.9"),(0,a.kt)("td",{parentName:"tr",align:"center"},"v0.35.1"),(0,a.kt)("td",{parentName:"tr",align:"center"},"v0.40.x")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"v0.13.1"),(0,a.kt)("td",{parentName:"tr",align:"center"},"v1.3.1"),(0,a.kt)("td",{parentName:"tr",align:"center"},"v0.31.0"),(0,a.kt)("td",{parentName:"tr",align:"center"},"v0.38.x")))))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},65568:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dashboard-terraform-f3c98a43f68a506e23a93099caf2f1e8.png"}}]);