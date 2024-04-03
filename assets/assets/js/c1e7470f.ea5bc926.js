"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[21106],{85391:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(88746);n(52426);const i={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function l(e){let{tiers:t}=e;return a.createElement(r.Z,{title:`This feature is a available on ${t}.`,style:i},t)}},36051:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),i=n(85391);const l={title:"Creating Templates",hide_title:!0},o='Creating GitOpsTemplates <TierLabel tiers="Enterprise" />',p={unversionedId:"gitops-templates/creating-templates",id:"version-0.23.0/gitops-templates/creating-templates",title:"Creating Templates",description:"For complete examples of widely-used templates, see the [Quickstart",source:"@site/versioned_docs/version-0.23.0/gitops-templates/creating-templates.mdx",sourceDirName:"gitops-templates",slug:"/gitops-templates/creating-templates",permalink:"/docs/0.23.0/gitops-templates/creating-templates",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.23.0/gitops-templates/creating-templates.mdx",tags:[],version:"0.23.0",frontMatter:{title:"Creating Templates",hide_title:!0},sidebar:"docs",previous:{title:"Quickstart",permalink:"/docs/0.23.0/gitops-templates/quickstart-templates"},next:{title:"Resource Templates",permalink:"/docs/0.23.0/gitops-templates/resource-templates"}},s={},m=[{value:"Template Type",id:"template-type",level:2},{value:"Template Components",id:"template-components",level:2},{value:"In-UI Template Editing",id:"in-ui-template-editing",level:2}],c={toc:m};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-gitopstemplates-"},"Creating GitOpsTemplates ",(0,r.kt)(i.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For complete examples of widely-used templates, see the ",(0,r.kt)("a",{parentName:"p",href:"../quickstart-templates"},"Quickstart\nguide"),".")),(0,r.kt)("p",null,"GitOps Templates were originally introduced to enable self-service operations\nfor the the cluster creation workflow."),(0,r.kt)("p",null,"We have since extended this capability to cover Terraform, Crossplane and\ngeneral Kubernetes resources."),(0,r.kt)("p",null,"An example template could, upon merging to a GitOps repository and reconciling in\na cluster, provide a running developer environment consisting of\nan EKS cluster, an RDS database, and a branch and revision of the current\napplication through single template."),(0,r.kt)("p",null,"Templates can be loaded into the cluster by Platform Operator by adding them to\nthe Flux-manage GitOps repository for the target cluster. Alternatively, they\ncan be applied directly to the cluster with ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Weave GitOps will search for templates in the ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," namespace.\nThis can be changed by configuring the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.capi.namespace")," value in the\nWeave GitOps Enterprise Helm Chart.")),(0,r.kt)("h2",{id:"template-type"},"Template Type"),(0,r.kt)("p",null,"Template types are used by Weave GitOps to group the templates nicely in the\nDashboard UI."),(0,r.kt)("p",null,"There are 4 recommended template types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"application")," - for application templates"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cluster")," - for cluster templates"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"terraform")," - for Terraform templates"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pipeline")," - for Pipeline templates")),(0,r.kt)("p",null,"Declare this in the object manifest by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"weave.works/template-type"),"\nlabel and setting the value as the name of the type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{7-8}","{7-8}":!0},"---\napiVersion: templates.weave.works/v1alpha2\nkind: GitOpsTemplate\nmetadata:\n  name: example-template\n  namespace: default\n  labels:\n    weave.works/template-type: pipeline\nspec:\n# ...\n")),(0,r.kt)("h2",{id:"template-components"},"Template Components"),(0,r.kt)("p",null,"The rendering of certain component sections in a template can be enabled or\ndisabled with annotations. The annotation keys are of the form\n",(0,r.kt)("inlineCode",{parentName:"p"},"templates.weave.works/COMPONENT-enabled")," and have ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," values."),(0,r.kt)("p",null,"Supported components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"profiles")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kustomizations")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"credentials"))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'annotations:\n  templates.weave.works/profiles-enabled: "true"\n  templates.weave.works/kustomizations-enabled: "false"\n  templates.weave.works/credentials-enabled: "true"\n')),(0,r.kt)("h2",{id:"in-ui-template-editing"},"In-UI Template Editing"),(0,r.kt)("p",null,"When rendering a template, a ",(0,r.kt)("inlineCode",{parentName:"p"},"templates.weave.works/create-request")," annotation\nis added by default to the first resource in the ",(0,r.kt)("inlineCode",{parentName:"p"},"resourcetemplates"),"."),(0,r.kt)("p",null,"It can be added to any other resource by simply adding the annotation in empty form.\nThis annotation holds information about which template generated the resource\nand the parameter values used as a json string."),(0,r.kt)("p",null,"If the resource type is one of the following and has this annotation, an\n",(0,r.kt)("inlineCode",{parentName:"p"},"Edit resource")," button will appear in the GitOps UI which allows the editing of\nthe resource by users, after which it will be re-rendered:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Applications:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HelmRelease")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Kustomization")))),(0,r.kt)("li",{parentName:"ul"},"Sources:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HelmRepository")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GitRepository")))),(0,r.kt)("li",{parentName:"ul"},"Clusters:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GitopsCluster"))))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{10,14}","{10,14}":!0},"spec:\n  resourcetemplates:\n  - apiVersion: v1\n    kind: ConfigMap\n    metadata:\n      name: my-configmap\n    data:\n      my-key: my-value\n  - apiVersion: source.toolkit.fluxcd.io/v1beta1\n    kind: HelmRepository\n    metadata:\n      # This annotation will add an `Edit resource` button in the UI for this resource\n      annotations:\n        templates.weave.works/create-request: ''\n      name: nginx\n      namespace: default\n")))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);