"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[24733],{75216:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(88746);n(52426);const o={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function i(e){let{tiers:t}=e;return r.createElement(a.Z,{title:`This feature is a available on ${t}.`,style:o},t)}},68905:(e,t,n)=>{n.d(t,{ZP:()=>i});var r=n(87462),a=(n(67294),n(3905));const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"This feature is in alpha and certain aspects will change")),(0,a.kt)("p",{parentName:"admonition"},"We're very excited for people to use this feature.\nHowever, please note that changes in the API, behaviour and security will evolve.\nThe feature is suitable to use in controlled testing environments.")))}i.isMDXComponent=!0},49378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(75216),i=n(68905);const l={title:"Configuration",hide_title:!0},s='Configuration <TierLabel tiers="Enterprise" />',c={unversionedId:"explorer/configuration",id:"version-0.27.0/explorer/configuration",title:"Configuration",description:"This page helps you to understand the options available to configure Explorer",source:"@site/versioned_docs/version-0.27.0/explorer/configuration.mdx",sourceDirName:"explorer",slug:"/explorer/configuration",permalink:"/docs/0.27.0/explorer/configuration",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.27.0/explorer/configuration.mdx",tags:[],version:"0.27.0",frontMatter:{title:"Configuration",hide_title:!0},sidebar:"docs",previous:{title:"Getting started",permalink:"/docs/0.27.0/explorer/getting-started"},next:{title:"Querying",permalink:"/docs/0.27.0/explorer/querying"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Clusters",id:"clusters",level:3},{value:"Kinds",id:"kinds",level:3},{value:"Data Layer",id:"data-layer",level:2},{value:"Authentication and Authorization",id:"authentication-and-authorization",level:2},{value:"Authentication and Authorization for querying",id:"authentication-and-authorization-for-querying",level:2},{value:"Authentication and Authorization for collecting",id:"authentication-and-authorization-for-collecting",level:2},{value:"Next Steps",id:"next-steps",level:2}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuration-"},"Configuration ",(0,a.kt)(o.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,a.kt)(i.ZP,{mdxType:"AlphaWarning"}),(0,a.kt)("p",null,"This page helps you to understand the options available to configure Explorer"),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Before using Explorer, please ensure that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You have Weave Gitops Enterprise ",(0,a.kt)("a",{parentName:"li",href:"/docs/0.27.0/enterprise/getting-started/releases-enterprise"},"v0.23.0"))),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"The following configuration options are available for you to setup Explorer."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".spec.values.enableExplorer"),": feature flag to control whether Explorer is enabled."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".spec.values.useQueryServiceBackend"),": feature flag to control whether you want to leverage Explorer backend capabilities for\nother UI experiences like ",(0,a.kt)("a",{parentName:"li",href:"/docs/0.27.0/open-source/getting-started/ui-OSS#the-applications-view"},"Applications")," or ",(0,a.kt)("a",{parentName:"li",href:"/docs/0.27.0/open-source/getting-started/ui-OSS#the-sources-view"},"Sources")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".spec.values.explorer.collector.serviceAccount"),": ServiceAccount ",(0,a.kt)("inlineCode",{parentName:"li"},"name")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"namespace")," that explorer collector will use to impersonate\nin leaf clusters. Make sure you read ",(0,a.kt)("a",{parentName:"li",href:"#Authentication_and_Authorization_for_collecting"},"authz for collector")," before setting it. Default\nvalues are ",(0,a.kt)("inlineCode",{parentName:"li"},"name: collector"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"namespace: flux-system"),".")),(0,a.kt)("p",null,"You should specify them in your HelmRelease values:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: helm.toolkit.fluxcd.io/v2beta1\nkind: HelmRelease\nmetadata:\n  name: weave-gitops-enterprise\n  namespace: flux-system\nspec:\n  # ... other spec components\n  values:\n    enableExplorer: true # feature flag to enable explorer\n    useQueryServiceBackend: true # uses explorer query backend in collection UIs\n    explorer:\n      collector:\n        serviceAccount: # service account that collector will impersonate in leaf clusters\n          name: collector\n          namespace: flux-system\n")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"clusters"},"Clusters"),(0,a.kt)("p",null,"Explorer watches the ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.27.0/cluster-management/managing-clusters-without-capi/#connect-a-cluster"},"GitopsClusters"),"\nthat you have connected to Weave Gitops Enterprise, as well as your Management cluster."),(0,a.kt)("h3",{id:"kinds"},"Kinds"),(0,a.kt)("p",null,"Explorer watches for the following kind resources out of the box:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://fluxcd.io/flux/components/"},"Flux GitOps Toolkit")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://fluxcd.io/flux/components/helm/helmreleases/"},"HelmRelease")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://fluxcd.io/flux/components/kustomize/kustomization/"},"Kustomizations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://fluxcd.io/flux/components/source/"},"Sources"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://fluxcd.io/flux/components/source/gitrepositories/"},"GitRepostiories")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://fluxcd.io/flux/components/source/ocirepositories/"},"OciRepositories")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://fluxcd.io/flux/components/source/helmrepositories/"},"HelmRepositories")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://fluxcd.io/flux/components/source/helmcharts/"},"HelmCharts")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://fluxcd.io/flux/components/source/buckets/"},"Buckets"))))),(0,a.kt)("h2",{id:"data-layer"},"Data Layer"),(0,a.kt)("p",null,"Explorer take a simple approach to manage resource views. It leverages a Data Store for caching the views and query them.\nThe storage lifecycle is bounded to Weave Gitops Enterprise app and does not provide persistence guarantees.\nInstead, it requests data as required to the leaf clusters. In its simplest form, the data store used is ",(0,a.kt)("a",{parentName:"p",href:"https://sqlite.org/index.html"},"SQLite"),"."),(0,a.kt)("h2",{id:"authentication-and-authorization"},"Authentication and Authorization"),(0,a.kt)("p",null,"There are two main paths to consider within Explorer in the context of authentication and authorization (authN/authZ):"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The read or querying path is exercised when a weave gitops user queries the data."),(0,a.kt)("li",{parentName:"ol"},"The write or collecting path is exercised to gather the resources from the leaf clusters.")),(0,a.kt)("p",null,"We look into them separately."),(0,a.kt)("h2",{id:"authentication-and-authorization-for-querying"},"Authentication and Authorization for querying"),(0,a.kt)("p",null,"Explorer leverages existing authentication and authorization built-in the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.gitops.weave.works/docs/configuration/securing-access-to-the-dashboard/"},"application"),".\nIt identifies for a user logged in the application: its identity and the access permissions via Kuberentes RBAC.\nQuery results are filtered honouring the access determined via RBAC."),(0,a.kt)("h2",{id:"authentication-and-authorization-for-collecting"},"Authentication and Authorization for collecting"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/0.27.0/cluster-management/managing-clusters-without-capi/#connect-a-cluster"},"GitopsClusters"),"\ndefine the connection and security context that Explorer leverages to collect data from leaf clusters. Given that you have followed the indications\nin ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.27.0/configuration/service-account-permissions"},"setup RBAC"),", the GitopsCluster service account is able to impersonate any user or group."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Collector RBAC resources are part of your leaf clusters common RBAC configuration. It is commonly\nlocated in your  ",(0,a.kt)("inlineCode",{parentName:"p"},"clusters/bases")," folder, as described in ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.27.0/explorer/getting-started"},"Getting started"),".")),(0,a.kt)("p",null,"To configure collection, you would need to extend this configuration with the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a ServiceAccount for the one that you specified in your ",(0,a.kt)("a",{parentName:"li",href:"#setup"},"setup")," ",(0,a.kt)("inlineCode",{parentName:"li"},".spec.values.explorer.collector.serviceAccount"),".")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Expand to see an example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: collector # should match .spec.values.explorer.collector.serviceAccount.name\n  namespace: flux-system # should match .spec.values.explorer.collector.serviceAccount.namespace\n"))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Create a ClusterRole with the permissions to watch the supported resources.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Expand to see an example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: collector # could be .spec.values.explorer.collector.serviceAccount.name\nrules:\n  - apiGroups: [ "rbac.authorization.k8s.io" ]\n    resources: [ "roles", "clusterroles", "rolebindings", "clusterrolebindings" ]\n    verbs: [ "list", "watch" ]\n  - apiGroups: [ "kustomize.toolkit.fluxcd.io" ]\n    resources: [ "kustomizations" ]\n    verbs: [ "list", "watch" ]\n  - apiGroups: [ "helm.toolkit.fluxcd.io" ]\n    resources: [ "helmreleases" ]\n    verbs: [ "list", "watch" ]\n  - apiGroups: [ "source.toolkit.fluxcd.io" ]\n    resources: [ "buckets", "helmcharts", "gitrepositories", "helmrepositories", "ocirepositories" ]\n    verbs: [ "list", "watch" ]\n'))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Create a ClusterRolebinding to assign previous ClusterRole to the created collector ",(0,a.kt)("inlineCode",{parentName:"li"},"ServiceAccount"),".")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Expand to see an example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: collector # could be .spec.values.explorer.collector.serviceAccount.name\nsubjects:\n  - kind: ServiceAccount\n    name: collector # should match .spec.values.explorer.collector.serviceAccount.name\n    namespace: flux-system # should match .spec.values.explorer.collector.serviceAccount.namespace\nroleRef:\n  kind: ClusterRole\n  name: collector # name of the cluster role created earlier\n  apiGroup: rbac.authorization.k8s.io\n"))),(0,a.kt)("p",null,"If you want the collector to watch a particular namespace use a RoleBinding instead."),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Extend impersonation rules to allow service account impersonation for ServiceAccount ",(0,a.kt)("inlineCode",{parentName:"li"},"collector"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Expand to see an example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: clusters-service-impersonator-role\nrules:\n  - apiGroups: [""]\n    resources: ["users", "groups"]\n    verbs: ["impersonate"]\n  - apiGroups: [ "" ]\n    resources: [ "serviceaccounts" ]\n    verbs: [ "impersonate" ]\n    resourceNames:\n      - "collector" # should match .spec.values.explorer.collector.serviceAccount.name\n'))),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"See ",(0,a.kt)("a",{parentName:"li",href:"/docs/0.27.0/explorer/querying"},"querying")," to deep dive in how to query."),(0,a.kt)("li",{parentName:"ul"},"See ",(0,a.kt)("a",{parentName:"li",href:"/docs/0.27.0/explorer/operations"},"operations")," for day troubleshooting and operations.")))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);