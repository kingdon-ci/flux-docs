"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[61482],{81759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const o={title:"Displaying Custom Metadata"},r=void 0,s={unversionedId:"guides/displaying-custom-metadata",id:"version-0.20.0/guides/displaying-custom-metadata",title:"Displaying Custom Metadata",description:"Weave Gitops lets you add annotations with custom metadata to your",source:"@site/versioned_docs/version-0.20.0/guides/displaying-custom-metadata.mdx",sourceDirName:"guides",slug:"/guides/displaying-custom-metadata",permalink:"/docs/0.20.0/guides/displaying-custom-metadata",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.20.0/guides/displaying-custom-metadata.mdx",tags:[],version:"0.20.0",frontMatter:{title:"Displaying Custom Metadata"},sidebar:"docs",previous:{title:"Generating TLS certificates with cert-manager and Let's Encrypt",permalink:"/docs/0.20.0/guides/cert-manager"},next:{title:"Deploying CAPA with EKS",permalink:"/docs/0.20.0/guides/deploying-capa"}},l={},d=[],p={toc:d};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Weave Gitops lets you add annotations with custom metadata to your\nflux automations and sources, and they will be displayed in the main UI."),(0,i.kt)("p",null,"For example, you might use this to add links to dashboards, issue\nsystems, or documentation and comments that you wish to be directly visible in\nthe GitOps UI."),(0,i.kt)("p",null,"We will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"podinfo")," application that we installed in the ",(0,i.kt)("a",{parentName:"p",href:"../../getting-started/deploy"},"getting\nstarted guide")," as an example. Open up the\npodinfo kustomization and add annotations to it so it looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="./clusters/my-cluster/podinfo-kustomization.yaml"',title:'"./clusters/my-cluster/podinfo-kustomization.yaml"'},"---\napiVersion: kustomize.toolkit.fluxcd.io/v1beta2\nkind: Kustomization\nmetadata:\n  name: podinfo\n  namespace: flux-system\n// highlight-start\n  annotations:\n    metadata.weave.works/description: |\n      Podinfo is a tiny web application made with Go that showcases best practices of running microservices in Kubernetes.\n      Podinfo is used by CNCF projects like Flux and Flagger for end-to-end testing and workshops.\n    metadata.weave.works/grafana-dashboard: https://grafana.my-org.example.com/d/podinfo-dashboard\n// highlight-end\nspec:\n  interval: 5m0s\n  path: ./kustomize\n  prune: true\n  sourceRef:\n    kind: GitRepository\n    name: podinfo\n  targetNamespace: flux-system\n")),(0,i.kt)("p",null,"Close the file, and commit and push your changes."),(0,i.kt)("p",null,"Back in your GitOps dashboard, navigate to the 'Applications' tab and select the\n",(0,i.kt)("inlineCode",{parentName:"p"},"podinfo")," kustomization. At the bottom of the 'Details' section you will see the\nnew 'Metadata' entries:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Application detail view showing custom metadata",src:n(52988).Z,width:"1917",height:"857"})),(0,i.kt)("admonition",{title:"Restrictions",type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"The annotation key ",(0,i.kt)("strong",{parentName:"li"},"must")," start with the domain\n",(0,i.kt)("inlineCode",{parentName:"li"},"metadata.weave.works"),". Any other annotations will be ignored."),(0,i.kt)("li",{parentName:"ul"},"The key that will be displayed is whatever you put after the\ndomain, title cased, and with dashes replaced with spaces. Above,\n",(0,i.kt)("inlineCode",{parentName:"li"},"metadata.weave.works/grafana-dashboard"),' was displayed as "Grafana Dashboard".'),(0,i.kt)("li",{parentName:"ul"},"The value can either be a link, or can be plain text. Newlines in\nplain text will be respected."),(0,i.kt)("li",{parentName:"ul"},"The key is subject to certain limitations that kubernetes imposes on\nannotations, including:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"it must be shorter than 63 characters (not including\nthe domain)"),(0,i.kt)("li",{parentName:"ul"},"it must be an English alphanumeric character, or one of ",(0,i.kt)("inlineCode",{parentName:"li"},"-._"),"."),(0,i.kt)("li",{parentName:"ul"},"See the ",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set"},"kubernetes documentation"),"\nfor the full list of restrictions."))))))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52988:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/metadata-display-806d62512b4e42186e8b86de8fe6a843.png"}}]);