"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[68110],{68619:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"TLS and Certificates"},o=void 0,s={unversionedId:"configuration/tls",id:"version-0.22.0/configuration/tls",title:"TLS and Certificates",description:"TLS configuration",source:"@site/versioned_docs/version-0.22.0/configuration/tls.md",sourceDirName:"configuration",slug:"/configuration/tls",permalink:"/docs/0.22.0/configuration/tls",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.22.0/configuration/tls.md",tags:[],version:"0.22.0",frontMatter:{title:"TLS and Certificates"},sidebar:"docs",previous:{title:"User Permissions",permalink:"/docs/0.22.0/configuration/user-permissions"},next:{title:"Configuring OIDC with Dex and GitHub",permalink:"/docs/0.22.0/guides/setting-up-dex"}},l={},c=[{value:"TLS configuration",id:"tls-configuration",level:2},{value:"cert-manager",id:"cert-manager",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"tls-configuration"},"TLS configuration"),(0,a.kt)("p",null,"By default the dashboard will listen on 0.0.0.0:9001 with TLS disabled and\nwithout exposing any external connection."),(0,a.kt)("p",null,"Exposing services without TLS if not recommended. Without a certificate, a user\ncan't be sure they are using the right service, and the traffic will be easily\nmonitored, or even tampered with. All communication between the user and an endpoint\nwith TLS will be encrypted."),(0,a.kt)("p",null,"To expose an external connection, you must first configure TLS. TLS termination\ncan be provided via an ingress controller or directly by the dashboard. In\neither case, the Helm Release must be updated. To have the dashboard itself\nhandle TLS, you must create a ",(0,a.kt)("inlineCode",{parentName:"p"},"tls")," secret containing the cert and key:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cli"},"kubectl create secret tls my-tls-secret \\\n  --cert=path/to/cert/file \\\n  --key=path/to/key/file\n")),(0,a.kt)("p",null,"and reference it from the helm release:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'  values:\n    serverTLS:\n      enabled: true\n      secretName: "my-tls-secret"\n')),(0,a.kt)("p",null,"If you prefer to delegate TLS handling to the ingress controller instead, your\nhelm release should look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  values:\n    ingress:\n      enabled: true\n      ... other parameters specific to the ingress type ...\n")),(0,a.kt)("h2",{id:"cert-manager"},"cert-manager"),(0,a.kt)("p",null,"Install ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.22.0/guides/cert-manager"},"cert-manager")," and request a ",(0,a.kt)("inlineCode",{parentName:"p"},"Certificate")," in\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"flux-system")," namespace. Provide the name of secret associated with the\ncertificate to the weave-gitops-enterprise HelmRelease as described above."))}p.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);