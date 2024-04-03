"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[57123],{80129:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(88746);n(52426);const o={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function l(e){let{tiers:t}=e;return a.createElement(r.Z,{title:`This feature is a available on ${t}.`,style:o},t)}},12700:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),o=n(80129);const l={title:"Profiles",hide_title:!0},i='Profiles <TierLabel tiers="Enterprise" />',s={unversionedId:"cluster-management/profiles",id:"version-0.35.0/cluster-management/profiles",title:"Profiles",description:"The following instructions require you to make minor changes to the content of your own hosted Helm repository.",source:"@site/versioned_docs/version-0.35.0/cluster-management/profiles.mdx",sourceDirName:"cluster-management",slug:"/cluster-management/profiles",permalink:"/docs/0.35.0/cluster-management/profiles",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.35.0/cluster-management/profiles.mdx",tags:[],version:"0.35.0",frontMatter:{title:"Profiles",hide_title:!0},sidebar:"docs",previous:{title:"Deploying CAPA with EKS",permalink:"/docs/0.35.0/cluster-management/deploying-capa-eks"},next:{title:"Cluster Management Troubleshooting",permalink:"/docs/0.35.0/cluster-management/cluster-management-troubleshooting"}},p={},c=[{value:"Mark a HelmRepository as Containing Profiles",id:"mark-a-helmrepository-as-containing-profiles",level:2},{value:"Add Layers to Define Dependencies Between Your Profiles",id:"add-layers-to-define-dependencies-between-your-profiles",level:2},{value:"(Optional) Use a Helm Chart from a Remote Public/Private Repository",id:"optional-use-a-helm-chart-from-a-remote-publicprivate-repository",level:2},{value:"Select the Profiles You Want Installed at Cluster Creation",id:"select-the-profiles-you-want-installed-at-cluster-creation",level:3}],m={toc:c};function d(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"profiles-"},"Profiles ",(0,r.kt)(o.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,r.kt)("admonition",{title:"BEFORE YOU START",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The following instructions require you to make minor changes to the content of your own hosted Helm repository.")),(0,r.kt)("p",null,"To put it simply, Profiles are ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/topics/charts/"},"Helm charts"),". To create a Profile, you need to add an ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/topics/charts/#the-chartyaml-file"},"annotation")," to a Helm chart."),(0,r.kt)("p",null,"A very simple Helm chart marked up as a Profile looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'name: demo-profile\nversion: 0.0.1\nannotations:\n  weave.works/profile: "A Demo Profile"\n')),(0,r.kt)("p",null,"The chart can use either ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/chart_template_guide/subcharts_and_globals/"},"subcharts")," or ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/chart_best_practices/dependencies/#helm"},"dependencies")," to include other charts. These other charts do not need the annotation, and they will not show up as Profiles."),(0,r.kt)("h2",{id:"mark-a-helmrepository-as-containing-profiles"},"Mark a HelmRepository as Containing Profiles"),(0,r.kt)("p",null,"Alternatively, you can annotate a Flux ",(0,r.kt)("inlineCode",{parentName:"p"},"HelmRepository")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: source.toolkit.fluxcd.io/v1beta2\nkind: HelmRepository\nmetadata:\n  name: podinfo\n  namespace: default\n  annotations:\n    weave.works/profiles: "true" # this identifies all charts as profiles\nspec:\n  interval: 5m0s\n  url: https://stefanprodan.github.io/podinfo\n')),(0,r.kt)("p",null,"This will ensure that all charts in the ",(0,r.kt)("inlineCode",{parentName:"p"},"HelmRepository")," are identified as Profiles."),(0,r.kt)("h2",{id:"add-layers-to-define-dependencies-between-your-profiles"},"Add Layers to Define Dependencies Between Your Profiles"),(0,r.kt)("p",null,"Profile layers are a mechanism for loosely defining dependencies between Profiles."),(0,r.kt)("p",null,"To add a layer to a Profile chart:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'name: demo-profile\nversion: 0.0.1\nannotations:\n  weave.works/profile: "A Demo Profile"\n  weave.works/layer: "demo"\n')),(0,r.kt)("p",null,"When multiple Profiles are specified in an API call, with layers in the API request then the set of layers is sorted, reversed, and configured as dependencies using Flux's ",(0,r.kt)("a",{parentName:"p",href:"https://fluxcd.io/docs/components/helm/helmreleases/#helmrelease-dependencies"},"dependsOn")," mechanism."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510      \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510      \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502         \u2502      \u2502         \u2502      \u2502         \u2502\n\u2502 layer-3 \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u25ba layer-2 \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u25ba layer-1 \u2502\n\u2502         \u2502      \u2502         \u2502      \u2502         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518      \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518      \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n dependsOn        dependsOn\n")),(0,r.kt)("p",null,"The scope of the ",(0,r.kt)("inlineCode",{parentName:"p"},"dependsOn")," calculation is limited to the set of Profiles in the API call."),(0,r.kt)("p",null,"If only one chart is being installed, no ",(0,r.kt)("inlineCode",{parentName:"p"},"dependsOn")," is configured."),(0,r.kt)("p",null,"If several charts are installed in the same layer, then the preceeding layer charts will be configured to depend on ",(0,r.kt)("em",{parentName:"p"},"all")," the charts in the succeeding layer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510     \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510      \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502          \u2502     \u2502         \u2502      \u2502         \u2502\n\u2502 layer-3  \u251c\u2500\u2500\u2500\u2500\u2500\u25ba layer-2 \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u25ba layer-1 \u2502\n\u2502          \u2502     \u2502         \u2502      \u2502         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524     \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518      \u2514\u2500\u25b2\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n dependsOn \u2502      dependsOn         \u2502\n           \u2502                        \u2502\n           \u2502     \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510        \u2502\n           \u2502     \u2502         \u2502        \u2502\n           \u2514\u2500\u2500\u2500\u2500\u2500\u25ba layer-2 \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                 \u2502         \u2502\n                 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                  dependsOn\n")),(0,r.kt)("p",null,"If a chart with no layer specified is installed with a chart that has a layer specified, the service will configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"dependsOn")," for the chart without a layer to depend on the chart with layer."),(0,r.kt)("h2",{id:"optional-use-a-helm-chart-from-a-remote-publicprivate-repository"},"(Optional) Use a Helm Chart from a Remote Public/Private Repository"),(0,r.kt)("p",null,"You can add your Profiles to a remote repository that can be referenced using a HelmRepository resource. The repository can be either public or private. Using a private repo requires a few extra steps."),(0,r.kt)("p",null,"In this example, a public repo and branch is referenced directly where the Helm releases are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="HelmRepository.yaml"',title:'"HelmRepository.yaml"'},"apiVersion: source.toolkit.fluxcd.io/v1beta1\nkind: HelmRepository\nmetadata:\n  name: weaveworks-charts\n  namespace: flux-system\nspec:\n  interval: 1m\n  url: https://weaveworks.github.io/weave-gitops-profile-examples/\n")),(0,r.kt)("p",null,"To use private repositories with restricted access, you can use a ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.35.0/secrets/bootstrapping-secrets"},"secret synced")," to the target leaf cluster. SecretSync references the secret as ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.secretRef"),". The labels of your target leaf cluster are added for the syncer to match clusters against those labels using ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.clusterSelector.matchLabels"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="SecretSync.yaml"',title:'"SecretSync.yaml"'},"apiVersion: capi.weave.works/v1alpha1\nkind: SecretSync\nmetadata:\n  name: my-dev-secret-syncer\n  namespace: flux-system\nspec:\n  clusterSelector:\n    matchLabels:\n      weave.works/capi: bootstrap\n  secretRef:\n    name: weave-gitops-enterprise-credentials\n  targetNamespace: flux-system\n")),(0,r.kt)("p",null,"Once the SecretSync and Secret are available, the secret can be directly referenced in the HelmRepository object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="PrivateHelmRepository.yaml"',title:'"PrivateHelmRepository.yaml"'},"apiVersion: source.toolkit.fluxcd.io/v1beta2\nkind: HelmRepository\nmetadata:\n  name: weaveworks-charts\n  namespace: flux-system\nspec:\n  interval: 60m\n  secretRef:\n    name: weave-gitops-enterprise-credentials\n  url: https://charts.dev.wkp.weave.works/releases/charts-v3\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": The ",(0,r.kt)("inlineCode",{parentName:"p"},"HelmRepoSecret"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"SecretSync"),", and the ",(0,r.kt)("inlineCode",{parentName:"p"},"GitopsCluster")," should all be in the same namespace."),(0,r.kt)("h3",{id:"select-the-profiles-you-want-installed-at-cluster-creation"},"Select the Profiles You Want Installed at Cluster Creation"),(0,r.kt)("p",null,"WGE inspects the namespace in the management cluster where it is deployed, and looks for a ",(0,r.kt)("inlineCode",{parentName:"p"},"HelmRepository")," object named ",(0,r.kt)("inlineCode",{parentName:"p"},"weaveworks-charts"),". This Kubernetes object should point to a Helm chart repository that includes the Profiles available for installation."),(0,r.kt)("p",null,"When creating a cluster from the UI using a CAPI template, these Profiles are available for selection in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Profiles")," section of the template. For example:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Profiles Selection",src:n(73110).Z,width:"2138",height:"398"})),(0,r.kt)("p",null,"As shown above, some Profiles are optional, while others are required. This is determined when the template is authored and allows for operations teams to control which Helm packages should be installed on new clusters by default."),(0,r.kt)("p",null,"To enable editing of the yaml values for required Profiles, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"editable")," flag in the annotation and describe the required Profile in the template. For example: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'apiVersion: templates.weave.works/v1alpha2\nkind: GitOpsTemplate\nmetadata:\n  name: connect-a-cluster-with-policies\n  namespace: default\n  annotations:\n    capi.weave.works/profile-0: \'{"name": "weave-policy-agent", "editable": true, "version": "0.2.8", "values": "accountId: weaveworks\\nclusterId: ${CLUSTER_NAME}" }\'\n')))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73110:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/profile-selection-3ce8ebaeefc4815b9ac5b66e93f1a6fe.png"}}]);