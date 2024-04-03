"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[41254],{34688:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(88746);r(52426);const s={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function i(e){let{tiers:t}=e;return n.createElement(a.Z,{title:`This feature is a available on ${t}.`,style:s},t)}},52717:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),s=r(34688);const i={title:"Cluster API Providers",hide_title:!0},o=void 0,l={unversionedId:"cluster-management/cluster-api-providers",id:"version-0.21.1/cluster-management/cluster-api-providers",title:"Cluster API Providers",description:"{frontMatter.title}",source:"@site/versioned_docs/version-0.21.1/cluster-management/cluster-api-providers.mdx",sourceDirName:"cluster-management",slug:"/cluster-management/cluster-api-providers",permalink:"/docs/0.21.1/cluster-management/cluster-api-providers",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.21.1/cluster-management/cluster-api-providers.mdx",tags:[],version:"0.21.1",frontMatter:{title:"Cluster API Providers",hide_title:!0},sidebar:"docs",previous:{title:"Getting started",permalink:"/docs/0.21.1/cluster-management/getting-started"},next:{title:"Managing existing clusters",permalink:"/docs/0.21.1/cluster-management/managing-existing-clusters"}},c={},p=[{value:"Creating leaf clusters",id:"creating-leaf-clusters",level:2},{value:"Configure and deploy the CAPI providers",id:"configure-and-deploy-the-capi-providers",level:2},{value:"AWS provider (CAPA)",id:"aws-provider-capa",level:2},{value:"Docker provider (CAPD)",id:"docker-provider-capd",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,i.title," ",(0,a.kt)(s.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,a.kt)("h2",{id:"creating-leaf-clusters"},"Creating leaf clusters"),(0,a.kt)("p",null,"To enable leaf cluster creation, Weave GitOps leverages the Cluster-API (CAPI) providers for ",(0,a.kt)("a",{parentName:"p",href:"https://cluster-api-aws.sigs.k8s.io/getting-started.html"},"AWS")," or ",(0,a.kt)("a",{parentName:"p",href:"https://cluster-api.sigs.k8s.io/user/quick-start.html"},"Docker"),".\nIn this section we cover the steps to deploy the providers on a Kubernetes cluster that is running the Weave GitOps."),(0,a.kt)("p",null,"CAPI provides declarative APIs, controllers, and tooling to manage the lifecycle of Kubernetes clusters, across\na large number of ",(0,a.kt)("a",{parentName:"p",href:"https://cluster-api.sigs.k8s.io/reference/providers.html#infrastructure"},"infrastructure providers"),".\nThe CAPI custom resource definitions are platform independent as each provider implementation handles the creation of VMs,\nVPCs, networks and other required infrastructure parts, enabling consistent and repeatable cluster deployments.\nFor more information on the CAPI project, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://cluster-api.sigs.k8s.io/introduction.html"},"CAPI book"),"."),(0,a.kt)("h2",{id:"configure-and-deploy-the-capi-providers"},"Configure and deploy the CAPI providers"),(0,a.kt)("p",null,"In all cases, CAPI requires kubectl access to an existing Kubernetes cluster, so in our case we configure ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," to use the management cluster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export KUBECONFIG=/path/to/kubeconfig\n")),(0,a.kt)("h2",{id:"aws-provider-capa"},"AWS provider (CAPA)"),(0,a.kt)("p",null,"After having configured ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl"),", to deploy the CAPA components, follow the steps at ",(0,a.kt)("a",{parentName:"p",href:"https://cluster-api-aws.sigs.k8s.io/getting-started.html#install-clusterctl"},"https://cluster-api-aws.sigs.k8s.io/getting-started.html#install-clusterctl")),(0,a.kt)("h2",{id:"docker-provider-capd"},"Docker provider (CAPD)"),(0,a.kt)("p",null,"The Docker infrastructure provider is a reference implementation and is a practical way of testing the Weave GitOps cluster creation feature. It is not intended for production clusters. As CAPD will start docker containers in the host nodes of the management cluster, note that if you are using it with a ",(0,a.kt)("inlineCode",{parentName:"p"},"kind")," cluster you'll need to mount the docker socket as described in the ",(0,a.kt)("a",{parentName:"p",href:"https://cluster-api-aws.sigs.k8s.io/getting-started.html#install-andor-configure-a-kubernetes-cluster"},"Install and/or configure a kubernetes cluster")," kind section."),(0,a.kt)("p",null,"Similar to the AWS provider case, configure ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," to use the management cluster, and to deploy the CAPD components follow the steps at ",(0,a.kt)("a",{parentName:"p",href:"https://cluster-api-aws.sigs.k8s.io/getting-started.html#install-clusterctl"},"https://cluster-api-aws.sigs.k8s.io/getting-started.html#install-clusterctl"),"."))}d.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);