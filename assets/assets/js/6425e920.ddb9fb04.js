"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[63171],{37536:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(88746);n(52426);const l={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function i(e){let{tiers:t}=e;return a.createElement(r.Z,{title:`This feature is a available on ${t}.`,style:l},t)}},97483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),l=n(37536);const i={title:"How to Inject Credentials Into Your Template",hide_title:!0},o='How to Inject Credentials Into Your Template <TierLabel tiers="Enterprise" />',s={unversionedId:"cluster-management/advanced-cluster-management-topics/howto-inject-credentials-into-template",id:"cluster-management/advanced-cluster-management-topics/howto-inject-credentials-into-template",title:"How to Inject Credentials Into Your Template",description:"Weave GitOps templates describe the properties of your cluster\u2014how many nodes, what version of Kubernetes, etc. The identity refers to which account will be used to create the cluster. When you render a template, you may want to set the credentials to be used for this cluster\u2014for example, if the cost is allocated to a specific team.",source:"@site/docs/cluster-management/advanced-cluster-management-topics/howto-inject-credentials-into-template.mdx",sourceDirName:"cluster-management/advanced-cluster-management-topics",slug:"/cluster-management/advanced-cluster-management-topics/howto-inject-credentials-into-template",permalink:"/docs/next/cluster-management/advanced-cluster-management-topics/howto-inject-credentials-into-template",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/docs/cluster-management/advanced-cluster-management-topics/howto-inject-credentials-into-template.mdx",tags:[],version:"current",frontMatter:{title:"How to Inject Credentials Into Your Template",hide_title:!0},sidebar:"docs",previous:{title:"Cluster Management Troubleshooting",permalink:"/docs/next/cluster-management/cluster-management-troubleshooting"},next:{title:"Introduction",permalink:"/docs/next/explorer/intro"}},c={},p=[{value:"<code>identityRef</code>s",id:"identityrefs",level:3}],u={toc:p};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-inject-credentials-into-your-template-"},"How to Inject Credentials Into Your Template ",(0,r.kt)(l.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,r.kt)("p",null,"Weave GitOps ",(0,r.kt)("em",{parentName:"p"},"templates")," describe the properties of your cluster\u2014how many nodes, what version of Kubernetes, etc. The ",(0,r.kt)("em",{parentName:"p"},"identity")," refers to which account will be used to create the cluster. When you render a template, you may want to set the credentials to be used for this cluster\u2014for example, if the cost is allocated to a specific team."),(0,r.kt)("p",null,"The rendered resource can be automatically configured with the selected credentials."),(0,r.kt)("p",null,"Credentials are injected into the following resources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AWSCluster, AWSManagedControlPlane"),(0,r.kt)("li",{parentName:"ul"},"AzureCluster, AzureManagedCluster"),(0,r.kt)("li",{parentName:"ul"},"VSphereCluster")),(0,r.kt)("p",null,"If no credentials are selected, no changes will be applied, and the credentials used by your CAPI controller will be used as the default."),(0,r.kt)("p",null,"In our cluster we have the template:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.weave.works/v1alpha2\nkind: GitOpsTemplate\nmetadata:\n  name: capa-cluster-template\nspec:\n  resourcetemplates:\n    - contents:\n      - apiVersion: infrastructure.cluster.x-k8s.io/v1alpha4\n        kind: AWSCluster\n        metadata:\n          name: "${CLUSTER_NAME}"\n        spec:\n          region: "${AWS_REGION}"\n')),(0,r.kt)("p",null,"and the identity"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: infrastructure.cluster.x-k8s.io/v1alpha3\nkind: AWSClusterStaticIdentity\nmetadata:\n  name: "test-account"\nspec:\n  secretRef:\n    name: test-account-creds\n    namespace: capa-system\n  allowedNamespaces:\n    selector:\n      matchLabels:\n        cluster.x-k8s.io/ns: "testlabel"\n')),(0,r.kt)("p",null,"We can select Weave GitOps to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"test-account")," when creating the cluster by using the ",(0,r.kt)("em",{parentName:"p"},"Infrastructure provider credentials")," dropdown on the ",(0,r.kt)("em",{parentName:"p"},"Create new cluster with template")," page:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Identity Selection",src:n(15607).Z,width:"1554",height:"240"})),(0,r.kt)("p",null,"The resulting definition will have the identity injected into the appropriate place in the template, for this example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: infrastructure.cluster.x-k8s.io/v1alpha4\nkind: AWSCluster\nmetadata:\n  name: example-cluster\nspec:\n  region: eu-north-1\n  identityRef:\n    kind: AWSClusterStaticIdentity\n    name: test-account\n")),(0,r.kt)("h3",{id:"identityrefs"},(0,r.kt)("inlineCode",{parentName:"h3"},"identityRef"),"s"),(0,r.kt)("p",null,"The supported providers implement multi-tenancy by setting an ",(0,r.kt)("inlineCode",{parentName:"p"},"identityRef")," on the the provider cluster object, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"AWSCluster"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"AzureCluster")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"VSphereCluster"),"."),(0,r.kt)("p",null,"Weave GitOps will search ",(0,r.kt)("em",{parentName:"p"},"all namespaces")," in the cluster for potential identities that can be used to create a cluster. The following identity ",(0,r.kt)("inlineCode",{parentName:"p"},"kind"),"s are currently supported and their corresponding Cluster kinds:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AWSClusterStaticIdentity"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"AWSCluster")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AWSClusterRoleIdentity"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"AWSCluster")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AzureClusterIdentity"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"AzureCluster")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"VSphereClusterIdentity"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"VSphereCluster"))))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15607:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/identity-selection-f7ade1f26e327412eb49a32b71403f1e.png"}}]);