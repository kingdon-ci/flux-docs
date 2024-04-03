"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[43706],{59220:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"TLS and Certificates"},i=void 0,l={unversionedId:"configuration/tls",id:"version-0.29.0/configuration/tls",title:"TLS and Certificates",description:"TLS configuration",source:"@site/versioned_docs/version-0.29.0/configuration/tls.md",sourceDirName:"configuration",slug:"/configuration/tls",permalink:"/docs/0.29.0/configuration/tls",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.29.0/configuration/tls.md",tags:[],version:"0.29.0",frontMatter:{title:"TLS and Certificates"},sidebar:"docs",previous:{title:"User Permissions",permalink:"/docs/0.29.0/configuration/user-permissions"},next:{title:"Cluster Management - Introduction",permalink:"/docs/0.29.0/cluster-management/cluster-management-intro"}},s={},c=[{value:"TLS configuration",id:"tls-configuration",level:2},{value:"cert-manager",id:"cert-manager",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"tls-configuration"},"TLS configuration"),(0,a.kt)("p",null,"By default the dashboard will listen on 0.0.0.0:9001 with TLS disabled and\nwithout exposing any external connection."),(0,a.kt)("p",null,"Exposing services without TLS if not recommended. Without a certificate, a user\ncan't be sure they are using the right service, and the traffic will be easily\nmonitored, or even tampered with. All communication between the user and an endpoint\nwith TLS will be encrypted."),(0,a.kt)("p",null,"To expose an external connection, you must first configure TLS. TLS termination\ncan be provided via an ingress controller or directly by the dashboard. In\neither case, the Helm Release must be updated. To have the dashboard itself\nhandle TLS, you must create a ",(0,a.kt)("inlineCode",{parentName:"p"},"tls")," secret containing the cert and key:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cli"},"kubectl create secret tls my-tls-secret \\\n  --cert=path/to/cert/file \\\n  --key=path/to/key/file\n")),(0,a.kt)("p",null,"and reference it from the helm release:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'  values:\n    serverTLS:\n      enabled: true\n      secretName: "my-tls-secret"\n')),(0,a.kt)("p",null,"If you prefer to delegate TLS handling to the ingress controller instead, your\nhelm release should look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  values:\n    ingress:\n      enabled: true\n      ... other parameters specific to the ingress type ...\n")),(0,a.kt)("h2",{id:"cert-manager"},"cert-manager"),(0,a.kt)("p",null,"Install ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.29.0/guides/cert-manager"},"cert-manager")," and request a ",(0,a.kt)("inlineCode",{parentName:"p"},"Certificate")," in\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"flux-system")," namespace. Provide the name of secret associated with the\ncertificate to the weave-gitops-enterprise HelmRelease as described above."))}p.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);