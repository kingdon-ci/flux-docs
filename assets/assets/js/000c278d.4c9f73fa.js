"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[33573],{21408:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(67294),a=n(88746);n(52426);const r={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function o(e){let{tiers:t}=e;return i.createElement(a.Z,{title:`This feature is a available on ${t}.`,style:r},t)}},51684:(e,t,n)=>{n.d(t,{ZP:()=>o});var i=n(87462),a=(n(67294),n(3905));const r={toc:[]};function o(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"This feature is in alpha and certain aspects will change")),(0,a.kt)("p",{parentName:"admonition"},"We're very excited for people to use this feature.\nHowever, please note that changes in the API, behaviour and security will evolve.\nThe feature is suitable to use in controlled testing environments.")))}o.isMDXComponent=!0},32359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>c});var i=n(87462),a=(n(67294),n(3905)),r=n(21408),o=n(51684);const p={title:"Getting Started",hide_title:!0},s='Getting Started with Pipelines <TierLabel tiers="Enterprise" />',l={unversionedId:"pipelines/pipelines-getting-started",id:"version-0.38.0/pipelines/pipelines-getting-started",title:"Getting Started",description:"Prerequisites",source:"@site/versioned_docs/version-0.38.0/pipelines/pipelines-getting-started.mdx",sourceDirName:"pipelines",slug:"/pipelines/pipelines-getting-started",permalink:"/docs/pipelines/pipelines-getting-started",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.38.0/pipelines/pipelines-getting-started.mdx",tags:[],version:"0.38.0",frontMatter:{title:"Getting Started",hide_title:!0},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/pipelines/pipelines-intro"},next:{title:"Authorization",permalink:"/docs/pipelines/authorization"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Define a Pipeline",id:"define-a-pipeline",level:2},{value:"View Your List of Pipelines",id:"view-your-list-of-pipelines",level:2},{value:"View Pipeline Details",id:"view-pipeline-details",level:2}],u={toc:c};function m(e){let{components:t,...p}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started-with-pipelines-"},"Getting Started with Pipelines ",(0,a.kt)(r.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,a.kt)(o.ZP,{mdxType:"AlphaWarning"}),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Before using Pipelines, please ensure that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You have Weave GitOps Enterprise installed on a cluster."),(0,a.kt)("li",{parentName:"ul"},"You have configured Weave GitOps Enterprise ",(0,a.kt)("a",{parentName:"li",href:"../authorization"},"RBAC for Pipelines"),"."),(0,a.kt)("li",{parentName:"ul"},"The Pipelines feature flag ",(0,a.kt)("inlineCode",{parentName:"li"},"enablePipelines")," has been enabled. This flag is part of the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.gitops.weave.works/docs/references/helm-reference/"},"Weave GitOps Enterprise Helm chart values")," and is enabled by default."),(0,a.kt)("li",{parentName:"ul"},"Any leaf clusters running workloads that you need to visualise using Pipelines have been added to Weave GitOps Enterprise."),(0,a.kt)("li",{parentName:"ul"},"You have ",(0,a.kt)("a",{parentName:"li",href:"../promoting-applications/#expose-the-promotion-webhook"},"exposed the promotion webhook ")," on the management cluster and leaf clusters can reach that webhook endpoint over the network.")),(0,a.kt)("h2",{id:"define-a-pipeline"},"Define a Pipeline"),(0,a.kt)("p",null,"A pipeline allows you to define the route your application is taking, so that you can get it to production. Three main concepts are at play:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"application")," to deliver"),(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"environments")," that your app will go through on its way to production (general). An environment describes the different stages of a pipeline and consists of one or more deployment targets."),(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"deployment targets"),", the clusters that each environment has. A deployment target consists of a namespace and a ",(0,a.kt)("a",{parentName:"li",href:"/docs/cluster-management/managing-clusters-without-capi"},(0,a.kt)("inlineCode",{parentName:"a"},"GitOpsCluster")," reference")," and is used to specify where the application is running in your fleet. ")),(0,a.kt)("p",null,"You can define a delivery pipeline using a ",(0,a.kt)("inlineCode",{parentName:"p"},"Pipeline")," custom resource. An example of such a CR is shown here:"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Expand to view"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: pipelines.weave.works/v1alpha1\nkind: Pipeline\nmetadata:\n  name: podinfo-02\n  namespace: flux-system\nspec:\n  appRef:\n    apiVersion: helm.toolkit.fluxcd.io/v2beta1\n    kind: HelmRelease\n    name: podinfo\n  environments:\n    - name: dev\n      targets:\n        - namespace: podinfo-02-dev\n          clusterRef:\n            kind: GitopsCluster\n            name: dev\n            namespace: flux-system\n    - name: test\n      targets:\n        - namespace: podinfo-02-qa\n          clusterRef:\n            kind: GitopsCluster\n            name: dev\n            namespace: flux-system\n        - namespace: podinfo-02-perf\n          clusterRef:\n            kind: GitopsCluster\n            name: dev\n            namespace: flux-system\n    - name: prod\n      targets:\n        - namespace: podinfo-02-prod\n          clusterRef:\n            kind: GitopsCluster\n            name: prod\n            namespace: flux-system\n"))),(0,a.kt)("p",null,"In the example above, the ",(0,a.kt)("inlineCode",{parentName:"p"},"podinfo")," application is delivered to a traditional pipeline composed of ",(0,a.kt)("inlineCode",{parentName:"p"},"dev"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"test"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"prod")," environments. In this case, the ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," environment consists of two deployment targets, ",(0,a.kt)("inlineCode",{parentName:"p"},"qa")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"perf"),". This is to indicate that, although both targets are part of the same stage (testing), they can evolve separately and may run different versions of the application. Note that two clusters, ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"prod"),", are used for the environments; both\nare defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"flux-system")," namespace."),(0,a.kt)("p",null,"For more details about the spec of a pipeline, ",(0,a.kt)("a",{parentName:"p",href:"/docs/pipelines/spec/v1alpha1/pipeline"},"go here"),"."),(0,a.kt)("h2",{id:"view-your-list-of-pipelines"},"View Your List of Pipelines"),(0,a.kt)("p",null,"Once Flux has reconciled your pipeline, you can navigate to the Pipelines view in the WGE UI to see the list of pipelines to which you have access."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"view pipelines",src:n(87711).Z,width:"2388",height:"994"})),(0,a.kt)("p",null,"For each pipeline, the WGE UI shows a simplified view with the application ",(0,a.kt)("inlineCode",{parentName:"p"},"Type")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Environments")," it goes through."),(0,a.kt)("h2",{id:"view-pipeline-details"},"View Pipeline Details"),(0,a.kt)("p",null,"Once you have selected a pipeline from the list, navigate to its details view where you can see the current status of your application by environment and deployment target."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"view pipeline details",src:n(46141).Z,width:"2388",height:"1718"})))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46141:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/view-pipeline-details-87181f6093023e92b93c493b299ad6d3.png"},87711:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/view-pipelines-13c1e8dcfe52031c151fbed092b6b66e.png"}}]);