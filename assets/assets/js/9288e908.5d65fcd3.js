"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[2685],{1664:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),c=n(88746);n(52426);const s={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function a(e){let{tiers:t}=e;return r.createElement(c.Z,{title:`This feature is a available on ${t}.`,style:s},t)}},40233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),c=(n(67294),n(3905)),s=n(1664);const a={title:"SecretSync",hide_title:!0},o='SecretSync <TierLabel tiers="Enterprise" />',i={unversionedId:"secrets/spec/v1alpha1/secretSync",id:"version-0.34.0/secrets/spec/v1alpha1/secretSync",title:"SecretSync",description:"It provides semantics to sync Kuberentes Secrets from management cluster to leaf clusters.",source:"@site/versioned_docs/version-0.34.0/secrets/spec/v1alpha1/secretSync.mdx",sourceDirName:"secrets/spec/v1alpha1",slug:"/secrets/spec/v1alpha1/secretSync",permalink:"/docs/0.34.0/secrets/spec/v1alpha1/secretSync",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.34.0/secrets/spec/v1alpha1/secretSync.mdx",tags:[],version:"0.34.0",frontMatter:{title:"SecretSync",hide_title:!0},sidebar:"docs",previous:{title:"Manage Secrets UI",permalink:"/docs/0.34.0/secrets/manage-secrets-ui"},next:{title:"Introduction",permalink:"/docs/0.34.0/gitops-templates/intro"}},l={},p=[{value:"Specification",id:"specification",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,c.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"secretsync-"},"SecretSync ",(0,c.kt)(s.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,c.kt)("p",null,"It provides semantics to sync ",(0,c.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/"},"Kuberentes Secrets")," from management cluster to leaf clusters."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: capi.weave.works/v1alpha1\nkind: SecretSync\nmetadata:\n  name: my-dev-secret-syncer\n  namespace: default\nspec:\n  clusterSelector:\n    matchLabels:\n      environment: dev\n  secretRef:\n    name: my-dev-secret\n  targetNamespace: my-namespace\n")),(0,c.kt)("h2",{id:"specification"},"Specification"),(0,c.kt)("p",null,"The documentation for the api version ",(0,c.kt)("inlineCode",{parentName:"p"},"capi.weave.works/v1alpha1")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},'type SecretSync struct {\n    metav1.TypeMeta   `json:",inline"`\n    metav1.ObjectMeta `json:"metadata,omitempty"`\n    Spec              SecretSyncSpec   `json:"spec,omitempty"`\n    Status            SecretSyncStatus `json:"status,omitempty"`\n}\n\n// SecretSyncSpec\ntype SecretSyncSpec struct {\n    // Label selector for Clusters. The Clusters that are\n    // selected by this will be the ones affected by this SecretSync.\n    // It must match the Cluster labels. This field is immutable.\n    // Label selector cannot be empty.\n    ClusterSelector metav1.LabelSelector `json:"clusterSelector"`\n    // SecretRef specifies the Secret to be bootstrapped to the matched clusters\n    // Secret must be in the same namespace of the SecretSync object\n    SecretRef v1.LocalObjectReference `json:"secretRef"`\n    // TargetNamespace specifies the namespace which the secret should be bootstrapped in\n    // The default value is the namespace of the referenced secret\n    //+optional\n    TargetNamespace string `json:"targetNamespace,omitempty"`\n}\n\n// SecretSyncStatus secretsync object status\ntype SecretSyncStatus struct {\n    // SecretVersions a map contains the ResourceVersion of the secret of each cluster\n    // Cluster name is the key and secret\'s ResourceVersion is the value\n    SecretVersions map[string]string `json:"versions"`\n}\n\n')))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(n),f=c,y=u["".concat(i,".").concat(f)]||u[f]||m[f]||s;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function y(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var s=n.length,a=new Array(s);a[0]=f;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:c,a[1]=o;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);