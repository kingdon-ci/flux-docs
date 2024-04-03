"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[48282],{85391:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),i=n(88746);n(52426);const a={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function l(e){let{tiers:t}=e;return r.createElement(i.Z,{title:`This feature is a available on ${t}.`,style:a},t)}},54630:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),i=(n(67294),n(3905)),a=n(85391);const l={title:"CAPI Provider Identities",hide_title:!0},s='CAPI Provider Identities <TierLabel tiers="Enterprise" />',o={unversionedId:"cluster-management/provider-identities",id:"version-0.23.0/cluster-management/provider-identities",title:"CAPI Provider Identities",description:"Multi-tenancy",source:"@site/versioned_docs/version-0.23.0/cluster-management/provider-identities.mdx",sourceDirName:"cluster-management",slug:"/cluster-management/provider-identities",permalink:"/docs/0.23.0/cluster-management/provider-identities",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.23.0/cluster-management/provider-identities.mdx",tags:[],version:"0.23.0",frontMatter:{title:"CAPI Provider Identities",hide_title:!0},sidebar:"docs",previous:{title:"Managing existing clusters",permalink:"/docs/0.23.0/cluster-management/managing-existing-clusters"},next:{title:"Deleting a Cluster",permalink:"/docs/0.23.0/cluster-management/deleting-a-cluster"}},p={},c=[{value:"Multi-tenancy",id:"multi-tenancy",level:2},{value:"Identities and templates",id:"identities-and-templates",level:3},{value:"<code>identityRef</code>s",id:"identityrefs",level:3}],u={toc:c};function d(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"capi-provider-identities-"},"CAPI Provider Identities ",(0,i.kt)(a.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,i.kt)("h2",{id:"multi-tenancy"},"Multi-tenancy"),(0,i.kt)("p",null,"Some Cluster API providers allow you to choose the account or identity that the new cluster will be created with. This is often referred to as ",(0,i.kt)("em",{parentName:"p"},"Multi-tenancy")," in the CAPI world. Weave GitOps currently supports:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cluster-api-aws.sigs.k8s.io/topics/multitenancy.html"},(0,i.kt)("strong",{parentName:"a"},"AWS")," multi-tenancy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://capz.sigs.k8s.io/topics/multitenancy.html"},(0,i.kt)("strong",{parentName:"a"},"Azure")," multi-tenancy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/cluster-api-provider-vsphere/blob/master/docs/identity_management.md"},(0,i.kt)("strong",{parentName:"a"},"vSphere")," multi-tenancy"))),(0,i.kt)("h3",{id:"identities-and-templates"},"Identities and templates"),(0,i.kt)("p",null,"Our ",(0,i.kt)("em",{parentName:"p"},"templates")," describe the properties of the cluster, how many nodes, what version of Kubernetes etc, while the ",(0,i.kt)("em",{parentName:"p"},"identity")," is which account will be used to create the cluster. So given in our cluster we have the template:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.weave.works/v1alpha2\nkind: GitOpsTemplate\nmetadata:\n  name: capa-cluster-template\nspec:\n  resourcetemplates:\n    - contents:\n      - apiVersion: infrastructure.cluster.x-k8s.io/v1alpha4\n        kind: AWSCluster\n        metadata:\n          name: "${CLUSTER_NAME}"\n        spec:\n          region: "${AWS_REGION}"\n')),(0,i.kt)("p",null,"and the identity"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: infrastructure.cluster.x-k8s.io/v1alpha3\nkind: AWSClusterStaticIdentity\nmetadata:\n  name: "test-account"\nspec:\n  secretRef:\n    name: test-account-creds\n    namespace: capa-system\n  allowedNamespaces:\n    selector:\n      matchLabels:\n        cluster.x-k8s.io/ns: "testlabel"\n')),(0,i.kt)("p",null,"We can select ask Weave GitOps to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"test-account")," when creating the cluster by using the ",(0,i.kt)("em",{parentName:"p"},"Infrastructure provider credentials")," dropdown on the ",(0,i.kt)("em",{parentName:"p"},"Create new cluster with template")," page:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Identity Selection",src:n(7509).Z,width:"1554",height:"240"})),(0,i.kt)("p",null,"The resulting definition will have the identity injected into the appropriate place in the template, for this example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: infrastructure.cluster.x-k8s.io/v1alpha4\nkind: AWSCluster\nmetadata:\n  name: example-cluster\nspec:\n  region: eu-north-1\n  identityRef:\n    kind: AWSClusterStaticIdentity\n    name: test-account\n")),(0,i.kt)("h3",{id:"identityrefs"},(0,i.kt)("inlineCode",{parentName:"h3"},"identityRef"),"s"),(0,i.kt)("p",null,"The supported providers implement multi-tenancy by setting an ",(0,i.kt)("inlineCode",{parentName:"p"},"identityRef")," on the the provider cluster object, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"AWSCluster"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"AzureCluster")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"VSphereCluster"),"."),(0,i.kt)("p",null,"Weave GitOps will search ",(0,i.kt)("em",{parentName:"p"},"all namespaces")," in the cluster for potential identities that can be used to create a cluster. The following identity ",(0,i.kt)("inlineCode",{parentName:"p"},"kind"),"s are currently supported and their corresponding Cluster kinds:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AWSClusterStaticIdentity"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"AWSCluster")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AWSClusterRoleIdentity"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"AWSCluster")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AzureClusterIdentity"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"AzureCluster")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"VSphereClusterIdentity"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"VSphereCluster"))))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(o,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:i,l[1]=s;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7509:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/identity-selection-f7ade1f26e327412eb49a32b71403f1e.png"}}]);