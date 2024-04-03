"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[54106],{48717:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(88746);n(52426);const l={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function o(e){let{tiers:t}=e;return a.createElement(r.Z,{title:`This feature is a available on ${t}.`,style:l},t)}},94291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),l=n(48717);const o={title:"Profiles",hide_title:!0},i='Profiles <TierLabel tiers="Enterprise" />',s={unversionedId:"cluster-management/profiles",id:"version-0.17.0/cluster-management/profiles",title:"Profiles",description:"The following instructions require you to make minor changes to the content of your own hosted Helm repository.",source:"@site/versioned_docs/version-0.17.0/cluster-management/profiles.mdx",sourceDirName:"cluster-management",slug:"/cluster-management/profiles",permalink:"/docs/0.17.0/cluster-management/profiles",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.17.0/cluster-management/profiles.mdx",tags:[],version:"0.17.0",frontMatter:{title:"Profiles",hide_title:!0},sidebar:"docs",previous:{title:"Deleting a Cluster",permalink:"/docs/0.17.0/cluster-management/deleting-a-cluster"},next:{title:"Add Applications",permalink:"/docs/0.17.0/cluster-management/add-applications"}},p={},c=[{value:"1. Annotate a Helm chart to make it available for installation",id:"1-annotate-a-helm-chart-to-make-it-available-for-installation",level:3},{value:"2. Select which profiles you want installed when creating a cluster",id:"2-select-which-profiles-you-want-installed-when-creating-a-cluster",level:3}],m={toc:c};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"profiles-"},"Profiles ",(0,r.kt)(l.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,r.kt)("admonition",{title:"BEFORE YOU START",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The following instructions require you to make minor changes to the content of your own hosted Helm repository.")),(0,r.kt)("p",null,"When provisioning new clusters it is often useful to install selected software packages to them as part of their bootstrap process. Weave GitOps Enterprise enables this by installing standard Helm charts to the newly provisioned clusters. This feature lowers the ongoing operational overhead and allows for the clusters to be immediately usable after being provisioned. To set this up you need to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Annotate a Helm chart to make it available for installation"),(0,r.kt)("li",{parentName:"ol"},"Select which profiles you want installed when creating a cluster")),(0,r.kt)("h3",{id:"1-annotate-a-helm-chart-to-make-it-available-for-installation"},"1. Annotate a Helm chart to make it available for installation"),(0,r.kt)("p",null,"In order for a chart to become available for installation, it needs to include a ",(0,r.kt)("inlineCode",{parentName:"p"},"weave.works/profile")," annotation. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Chart.yaml"',title:'"Chart.yaml"'},'annotations:\n  weave.works/profile: observability-profile\napiVersion: v1\nappVersion: 1.0.0\ndescription: Observability Helm chart for Kubernetes\nhome: https://github.com/weaveworks/observability-profile\nkubeVersion: ">=1.19.0-0"\nname: observability\nsources:\n  - https://github.com/weaveworks/observability-profile\nversion: 1.0.0\n')),(0,r.kt)("p",null,"The annotation value is not important and can be left blank i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},'""'),". Helm charts with the ",(0,r.kt)("inlineCode",{parentName:"p"},"weave.works/profile")," annotation are called ",(0,r.kt)("em",{parentName:"p"},"Profiles"),"."),(0,r.kt)("p",null,"Annotations can also be used to determine the order in which profiles will be installed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"annotations:\n  weave.works/profile: observability-profile\n  weave.works/layer: layer-0\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"annotations:\n  weave.works/profile: podinfo-profile\n  weave.works/layer: layer-1\n")),(0,r.kt)("p",null,"The profiles will be sorted lexicographically by their layer and those at a higher layer will only be installed after lower layers have been successfully installed and started."),(0,r.kt)("p",null,"In this example, ",(0,r.kt)("inlineCode",{parentName:"p"},"observability-profile")," will be installed prior to ",(0,r.kt)("inlineCode",{parentName:"p"},"podinfo-profile"),". In the corresponding HelmReleases, the dependencies can be observed under the ",(0,r.kt)("inlineCode",{parentName:"p"},"dependsOn")," field."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apiVersion: helm.toolkit.fluxcd.io/v2beta1\nkind: HelmRelease\nmetadata:\n  labels:\n    weave.works/applied-layer: layer-0\n  name: cluster-name-observability\n  namespace: wego-system\n...\n---\napiVersion: helm.toolkit.fluxcd.io/v2beta1\nkind: HelmRelease\nmetadata:\n  labels:\n    weave.works/applied-layer: layer-1\n  name: cluster-name-podinfo\n  namespace: wego-system\nspec:\n...\n  dependsOn:\n  - name: cluster-name-observability\n...\n")),(0,r.kt)("h3",{id:"2-select-which-profiles-you-want-installed-when-creating-a-cluster"},"2. Select which profiles you want installed when creating a cluster"),(0,r.kt)("p",null,"Currently WGE inspects the current namespace that it is deployed in (in the management cluster) for a ",(0,r.kt)("inlineCode",{parentName:"p"},"HelmRepository")," object named ",(0,r.kt)("inlineCode",{parentName:"p"},"weaveworks-charts"),". This Kubernetes object should be pointing to a Helm chart repository that includes the profiles that are available for installation."),(0,r.kt)("p",null,"When creating a cluster from the UI using a CAPI template, these profiles should be available for selection in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Profiles")," section of the template. For example:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Profiles Selection",src:n(94056).Z,width:"2138",height:"398"})),(0,r.kt)("p",null,"As shown above, some profiles will be optional whereas some profiles will be required. This is determined when the template is authored and allows for operation teams to control which Helm packages should be installed on new clusters by default."),(0,r.kt)("p",null,"To allow editing of the yaml values for required profiles, the ",(0,r.kt)("inlineCode",{parentName:"p"},"editable")," flag can be added in the annotation describing the required profile in the template. For example: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'apiVersion: templates.weave.works/v1alpha2\nkind: GitOpsTemplate\nmetadata:\n  name: connect-a-cluster-with-policies\n  namespace: default\n  annotations:\n    capi.weave.works/profile-0: \'{"name": "weave-policy-agent", "editable": true, "version": "0.2.8", "values": "accountId: weaveworks\\nclusterId: ${CLUSTER_NAME}" }\'\n')))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||l;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94056:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/profile-selection-3ce8ebaeefc4815b9ac5b66e93f1a6fe.png"}}]);