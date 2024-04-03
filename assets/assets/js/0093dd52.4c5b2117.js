"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[89700],{48466:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const i={title:"Generating TLS certificates with cert-manager and Let's Encrypt"},s=void 0,o={unversionedId:"guides/cert-manager",id:"version-0.29.0/guides/cert-manager",title:"Generating TLS certificates with cert-manager and Let's Encrypt",description:"This guide shows you how to add cert-manager to a cluster bootstrapped with Weave GitOps, and how",source:"@site/versioned_docs/version-0.29.0/guides/cert-manager.md",sourceDirName:"guides",slug:"/guides/cert-manager",permalink:"/docs/0.29.0/guides/cert-manager",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.29.0/guides/cert-manager.md",tags:[],version:"0.29.0",frontMatter:{title:"Generating TLS certificates with cert-manager and Let's Encrypt"},sidebar:"docs",previous:{title:"Configuring OIDC with Dex and GitHub",permalink:"/docs/0.29.0/guides/setting-up-dex"},next:{title:"Displaying Custom Metadata",permalink:"/docs/0.29.0/guides/displaying-custom-metadata"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"What Is cert-manager?",id:"what-is-cert-manager",level:2},{value:"Install cert-manager",id:"install-cert-manager",level:2}],p={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide shows you how to add cert-manager to a cluster bootstrapped with Weave GitOps, and how\nto configure the use of ",(0,r.kt)("a",{parentName:"p",href:"https://letsencrypt.org/"},"Let's Encrypt")," to issue TLS certificates."),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Kubernetes cluster such as ",(0,r.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"Kind"),", running a\n",(0,r.kt)("a",{parentName:"li",href:"https://fluxcd.io/docs/installation/#prerequisites"},"Flux-supported version of Kubernetes")),(0,r.kt)("li",{parentName:"ul"},"Weave GitOps is ",(0,r.kt)("a",{parentName:"li",href:"/docs/0.29.0/open-source/getting-started/install-OSS"},"installed"),".")),(0,r.kt)("h2",{id:"what-is-cert-manager"},"What Is cert-manager?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cert-manager.io/"},"cert-manager"),', a CNCF project, provides a way to automatically manage certificates\nin Kubernetes and OpenShift clusters. "It will obtain certificates from a variety of Issuers, both popular public\nIssuers as well as private Issuers, and ensure the certificates are valid and up-to-date, and will attempt to\nrenew certificates at a configured time before expiry."'),(0,r.kt)("h2",{id:"install-cert-manager"},"Install cert-manager"),(0,r.kt)("p",null,"As cert-manager can be installed using a ",(0,r.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/helm/"},"Helm Chart"),", we can\nsimply create a ",(0,r.kt)("inlineCode",{parentName:"p"},"HelmRepository")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"HelmRelease")," to have Flux install everything."),(0,r.kt)("p",null,"Commit the following to a location being reconciled by Flux."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see manifest contents"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: v1\nkind: Namespace\nmetadata:\n  name: cert-manager\n---\napiVersion: source.toolkit.fluxcd.io/v1beta1\nkind: HelmRepository\nmetadata:\n  name: cert-manager\n  namespace: cert-manager\nspec:\n  interval: 1h\n  url: https://charts.jetstack.io\n---\napiVersion: helm.toolkit.fluxcd.io/v2beta1\nkind: HelmRelease\nmetadata:\n  name: cert-manager\n  namespace: cert-manager\nspec:\n  interval: 5m\n  chart:\n    spec:\n      chart: cert-manager\n      version: 1.8.0\n      sourceRef:\n        kind: HelmRepository\n        name: cert-manager\n        namespace: cert-manager\n      interval: 1m\n  values:\n    installCRDs: true\n"))),(0,r.kt)("admonition",{title:"cert-manager version",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"At time of writing, cert manager v1.8.0 was the latest available release and a newer version may exist, please\nensure to check ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cert-manager/cert-manager/tags"},"https://github.com/cert-manager/cert-manager/tags")," for updates.")),(0,r.kt)("p",null,"Now that ",(0,r.kt)("inlineCode",{parentName:"p"},"cert-manager")," is running, we can create a ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterIssuer")," to represent the certificate authority\nfrom which we will obtain signed certificates, in this example we are using Let's Encrypt. After changing\nthe email address, commit this to the same location as above."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see manifest contents"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: cert-manager.io/v1\nkind: ClusterIssuer\nmetadata:\n  name: letsencrypt-prod\nspec:\n  acme:\n    # You must replace this email address with your own.\n    # Let's Encrypt will use this to contact you about expiring\n    # certificates, and issues related to your account.\n    email: weave-gitops@example.tld\n    server: https://acme-v02.api.letsencrypt.org/directory\n    privateKeySecretRef:\n      # Secret resource that will be used to store the account's private key.\n      name: letsencrypt-prod-account-key\n    solvers:\n    # Add a single challenge solver, HTTP01 using nginx\n    - http01:\n       ingress:\n         class: nginx\n"))),(0,r.kt)("p",null,"Once this ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterIssuer")," resource is installed, the cluster is now configured to request and use certificates generated by cert-manager."),(0,r.kt)("p",null,"This could be manually requested through the creation of a ",(0,r.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/usage/certificate/#creating-certificate-resources"},"Certificate resource")," or configured to be automatic, as shown in our ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.29.0/enterprise/getting-started/install-enterprise#securing-access-to-the-dashboard"},"WGE installation")," guide."))}u.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(a),d=r,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(g,s(s({ref:t},p),{},{components:a})):n.createElement(g,s({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);