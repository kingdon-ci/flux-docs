"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[93568],{21408:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),i=a(88746);a(52426);const r={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function s(e){let{tiers:t}=e;return n.createElement(i.Z,{title:`This feature is a available on ${t}.`,style:r},t)}},5011:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=a(87462),i=(a(67294),a(3905)),r=(a(88746),a(21408));const s={title:"Quickstart",hide_title:!0},o='Quickstart GitOps Templates <TierLabel tiers="Enterprise" />',p={unversionedId:"gitops-templates/quickstart-templates",id:"version-0.38.0/gitops-templates/quickstart-templates",title:"Quickstart",description:"Quickstart templates are GitOpsTemplates",source:"@site/versioned_docs/version-0.38.0/gitops-templates/quickstart-templates.mdx",sourceDirName:"gitops-templates",slug:"/gitops-templates/quickstart-templates",permalink:"/docs/gitops-templates/quickstart-templates",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.38.0/gitops-templates/quickstart-templates.mdx",tags:[],version:"0.38.0",frontMatter:{title:"Quickstart",hide_title:!0},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/gitops-templates/intro"},next:{title:"Creating Templates",permalink:"/docs/gitops-templates/creating-templates"}},l={},c=[{value:"Getting Started",id:"getting-started",level:2},{value:"Available Templates",id:"available-templates",level:2},{value:"Using <code>GitOpsTemplate</code>s as a Platform Engineer",id:"using-gitopstemplates-as-a-platform-engineer",level:2},{value:"Using <code>GitOpsTemplate</code>s as an Application Developer",id:"using-gitopstemplates-as-an-application-developer",level:2}],m={toc:c};function u(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quickstart-gitops-templates-"},"Quickstart GitOps Templates ",(0,i.kt)(r.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Quickstart")," templates are ",(0,i.kt)("a",{parentName:"p",href:"https://docs.gitops.weave.works/docs/gitops-templates/templates/"},(0,i.kt)("inlineCode",{parentName:"a"},"GitOpsTemplate"),"s"),"\nthat you could use when getting started with ",(0,i.kt)("a",{parentName:"p",href:"/docs/enterprise/getting-started/intro-enterprise"},"Weave Gitops Enterprise"),"\nIt aims to provide a simplified basic experience."),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"The templates exist as a Helm Chart in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/weaveworks/weave-gitops-quickstart"},"weave-gitops-quickstart"),"\ngithub repo."),(0,i.kt)("p",null,"To get started, add the following ",(0,i.kt)("inlineCode",{parentName:"p"},"HelmRelease")," object to your Weave GitOps Enterprise\nconfiguration repo for your management cluster."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Expand to view"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'---\napiVersion: source.toolkit.fluxcd.io/v1beta2\nkind: GitRepository\nmetadata:\n  name: weave-gitops-quickstart\n  namespace: flux-system\nspec:\n  interval: 10m0s\n  ref:\n    branch: main\n  url: https://github.com/weaveworks/weave-gitops-quickstart\n---\napiVersion: helm.toolkit.fluxcd.io/v2beta1\nkind: HelmRelease\nmetadata:\n  name: quickstart-templates\n  namespace: flux-system\nspec:\n  chart:\n    spec:\n      chart: "quickstart-templates"\n      version: ">=0.1.0"\n      sourceRef:\n        kind: GitRepository\n        name: weave-gitops-quickstart\n        namespace: flux-system\n  interval: 10m0s\n'))),(0,i.kt)("p",null,"Commit and merge the above file. Once the ",(0,i.kt)("inlineCode",{parentName:"p"},"HelmRelease")," has been successfully\ndeployed to your cluster, navigate to your Weave GitOps UI Dashboard. You will\nsee that the ",(0,i.kt)("inlineCode",{parentName:"p"},"templates")," Chart is now deployed to your cluster."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"quickstart templates deployed",src:a(36503).Z,width:"2922",height:"1122"})),(0,i.kt)("p",null,"If you click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Templates")," tab in the sidebar, you will see the Quickstart\ntemplates are now available for use:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"quickstart templates view",src:a(48616).Z,width:"2818",height:"1506"})),(0,i.kt)("h2",{id:"available-templates"},"Available Templates"),(0,i.kt)("p",null,"The following ",(0,i.kt)("a",{parentName:"p",href:"/docs/pipelines/pipelines-templates"},"pipeline")," templates have\nbeen made available on your Weave GitOps Enterprise instance:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pipeline-view"),": A template to create a sample pipeline to visualize a\n",(0,i.kt)("inlineCode",{parentName:"li"},"HelmRelease")," application delivered to dev, test and prod environments."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pipeline-promotion-resources"),": A template to create the Flux Notification\nController resources required for promoting applications via pipelines."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pipeline-view-promote-by-cluster"),": A template to create pipelines for hard\ntenancy when applications are isolated by cluster."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pipeline-view-promote-by-namespace"),": A template to create pipelines for soft\ntenancy when applications are isolated by namespace.")),(0,i.kt)("h2",{id:"using-gitopstemplates-as-a-platform-engineer"},"Using ",(0,i.kt)("inlineCode",{parentName:"h2"},"GitOpsTemplate"),"s as a Platform Engineer"),(0,i.kt)("p",null,"The above Quickstart templates are designed to provide a practical getting started\nexperience. We encourage Platform Operators to start off with these templates\nwithin their team to ramp up on using Weave GitOps."),(0,i.kt)("p",null,"If the need arises later, operators can always expand on these templates to\ndevelop their own set of self-service capabilities."),(0,i.kt)("h2",{id:"using-gitopstemplates-as-an-application-developer"},"Using ",(0,i.kt)("inlineCode",{parentName:"h2"},"GitOpsTemplate"),"s as an Application Developer"),(0,i.kt)("p",null,"As a developer using Weave GitOps Enterprise, use the templates to explore\nGitOps's capabilities. For example, to create a pipeline for your application:\nuse the above template provided by your Operations team to create required\nresources. Once they have been added to your GitOps repository, you can adapt\nthe rendered resources to meet your needs."),(0,i.kt)("admonition",{title:"Want to contribute?",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The Quickstart templates are maintained by the Weave Gitops team. If you would\nlike to make alterations, suggest fixes, or even contribute a new template which\nyou find cool, just head to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/weaveworks/weave-gitops-quickstart"},"repo"),"\nand open a new issue or PR!")))}u.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(a),d=i,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(g,s(s({ref:t},c),{},{components:a})):n.createElement(g,s({ref:t},c))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<r;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},36503:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/quickstart-templates-deployed-a4e6314d16d9618c3952bb2f2fef3310.png"},48616:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/quickstart-templates-view-18b7b56ccfd872b0dbdc6602820071b0.png"}}]);