"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[53413],{7305:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={title:"Optional: Running the UI on a Subpath"},i=void 0,s={unversionedId:"open-source/getting-started/run-ui-subpath",id:"version-0.32.0/open-source/getting-started/run-ui-subpath",title:"Optional: Running the UI on a Subpath",description:"Running the UI on a subpath",source:"@site/versioned_docs/version-0.32.0/open-source/getting-started/run-ui-subpath.mdx",sourceDirName:"open-source/getting-started",slug:"/open-source/getting-started/run-ui-subpath",permalink:"/docs/0.32.0/open-source/getting-started/run-ui-subpath",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.32.0/open-source/getting-started/run-ui-subpath.mdx",tags:[],version:"0.32.0",frontMatter:{title:"Optional: Running the UI on a Subpath"},sidebar:"docs",previous:{title:"AWS Marketplace",permalink:"/docs/0.32.0/open-source/getting-started/aws-marketplace"},next:{title:"Introduction to Weave GitOps Enterprise",permalink:"/docs/0.32.0/enterprise/getting-started/intro-enterprise"}},p={},u=[{value:"Running the UI on a subpath",id:"running-the-ui-on-a-subpath",level:2},{value:"Ingress",id:"ingress",level:2}],l={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"running-the-ui-on-a-subpath"},"Running the UI on a subpath"),(0,o.kt)("p",null,"By default, the UI is served on the root path ",(0,o.kt)("inlineCode",{parentName:"p"},"/"),". It is possible to run the UI on a subpath, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"/weave-gitops"),".\nThis is useful if you want to run weave-gitops alongside other applications on the same domain."),(0,o.kt)("p",null,"To run the UI on a subpath, you need to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"--route-prefix")," flag on the weave-gitops server.\nFor example, if you want to run the UI on ",(0,o.kt)("inlineCode",{parentName:"p"},"/weave-gitops"),", you can set the flag to ",(0,o.kt)("inlineCode",{parentName:"p"},"--route-prefix=/weave-gitops"),"."),(0,o.kt)("p",null,"To set the flag we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"additionalArgs")," field in the ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.values")," section of the weave-gitops ",(0,o.kt)("inlineCode",{parentName:"p"},"HelmRelease"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  values:\n    additionalArgs:\n      - --route-prefix=/weave-gitops\n")),(0,o.kt)("h2",{id:"ingress"},"Ingress"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Ingress")," is a Kubernetes resource that allows you to expose your application to the internet.\nPlease refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"Kubernetes documentation"),"\nfor more information about a complete ",(0,o.kt)("inlineCode",{parentName:"p"},"Ingress")," configuration. It often depends on the Kubernetes provider you are\nusing and your particular setup."),(0,o.kt)("p",null,"The Weave GitOps Helm chart can generate an ",(0,o.kt)("inlineCode",{parentName:"p"},"Ingress")," resource to integrate with the ingress controller you have configured for your cluster.\nTo enable ingress generation set the ",(0,o.kt)("inlineCode",{parentName:"p"},"ingress.enabled")," field to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you are running the UI on a subpath, you need to set the ",(0,o.kt)("inlineCode",{parentName:"li"},"path")," field to the same subpath specified in the ",(0,o.kt)("inlineCode",{parentName:"li"},"--route-prefix")," flag."),(0,o.kt)("li",{parentName:"ul"},"If you have not set a subpath on the weave-gitops server, set the path in the ingress configration to ",(0,o.kt)("inlineCode",{parentName:"li"},"/"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'spec:\n  values:\n    ingress:\n      enabled: true\n      hosts:\n      - host: ""\n        paths:\n        - path: /wego # set the path to `/` if you have not set the `--route-prefix` flag \n          pathType: Prefix\n')),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.32.0/references/helm-reference"},"Helm chart reference")," for a list of all supported ingress options."))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=u(n),g=o,h=c["".concat(p,".").concat(g)]||c[g]||d[g]||a;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);