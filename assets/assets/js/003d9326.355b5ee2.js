"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[38654],{72503:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(88746);n(52426);const l={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function i(e){let{tiers:t}=e;return a.createElement(r.Z,{title:`This feature is a available on ${t}.`,style:l},t)}},74452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),l=n(72503);const i={title:"Rendered Template Paths",hide_title:!0},o='Rendered Template Paths <TierLabel tiers="Enterprise" />',p={unversionedId:"gitops-templates/repo-rendered-paths",id:"version-0.22.0/gitops-templates/repo-rendered-paths",title:"Rendered Template Paths",description:"Template authors can configure the eventual locatation of the rendered template",source:"@site/versioned_docs/version-0.22.0/gitops-templates/repo-rendered-paths.mdx",sourceDirName:"gitops-templates",slug:"/gitops-templates/repo-rendered-paths",permalink:"/docs/0.22.0/gitops-templates/repo-rendered-paths",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.22.0/gitops-templates/repo-rendered-paths.mdx",tags:[],version:"0.22.0",frontMatter:{title:"Rendered Template Paths",hide_title:!0},sidebar:"docs",previous:{title:"Resource Templates",permalink:"/docs/0.22.0/gitops-templates/resource-templates"},next:{title:"Profiles",permalink:"/docs/0.22.0/gitops-templates/profiles"}},s={},m=[{value:"Configuring Paths",id:"configuring-paths",level:2},{value:"Configuring paths for <code>charts</code>",id:"configuring-paths-for-charts",level:3},{value:"Default Paths",id:"default-paths",level:2}],u={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rendered-template-paths-"},"Rendered Template Paths ",(0,r.kt)(l.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,r.kt)("p",null,"Template authors can configure the eventual locatation of the rendered template\nin the user's GitOps repository."),(0,r.kt)("p",null,"This allows for more control over where different resources in the template are rendered."),(0,r.kt)("h2",{id:"configuring-paths"},"Configuring Paths"),(0,r.kt)("p",null,"The path for rendered resources is configured via the\n",(0,r.kt)("inlineCode",{parentName:"p"},"spec.resourcetemplates[].path")," field."),(0,r.kt)("admonition",{title:"Important to note:",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"The path is relative to the repository root"),(0,r.kt)("li",{parentName:"ul"},"The path can be templated using params"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  resourcetemplates:\n    // highlight-next-line\n    - path: clusters/${CLUSTER_NAME}/definition/cluster.yaml\n      content:\n        - apiVersion: cluster.x-k8s.io/v1alpha4\n          kind: Cluster\n          metadata:\n            name: ${CLUSTER_NAME}\n          ...\n        - apiVersion: infrastructure.cluster.x-k8s.io/v1alpha4\n          kind: AWSCluster\n          metadata:\n            name: ${CLUSTER_NAME}\n          ...\n    // highlight-next-line\n    - path: clusters/${CLUSTER_NAME}/workloads/helmreleases.yaml\n      content:\n        - apiVersion: helm.toolkit.fluxcd.io/v2beta1\n          kind: HelmRelease\n          metadata:\n            name: ${CLUSTER_NAME}-nginx\n          ...\n        - apiVersion: helm.toolkit.fluxcd.io/v2beta1\n          kind: HelmRelease\n          metadata:\n            name: ${CLUSTER_NAME}-cert-manager\n          ...\n"))),(0,r.kt)("h3",{id:"configuring-paths-for-charts"},"Configuring paths for ",(0,r.kt)("inlineCode",{parentName:"h3"},"charts")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.charts.helmRepositoryTemplate.path")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.charts.items[].template.path")," fields can be used to specify the paths of these resources:"),(0,r.kt)("p",null,"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  charts:\n    helmRepositoryTemplate:\n      // highlight-next-line\n      path: clusters/${CLUSTER_NAME}/workloads/helm-repo.yaml\n    items:\n      - chart: cert-manager\n        version: 0.0.8\n        template:\n          // highlight-next-line\n          path: clusters/${CLUSTER_NAME}/workloads/cert-manager.yaml\n")),(0,r.kt)("h2",{id:"default-paths"},"Default Paths"),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.resourcetemplates[].path")," is omitted, a default path for the\nrendered template is calculated."),(0,r.kt)("p",null,"In this case some of the submitted params are used. Users ",(0,r.kt)("strong",{parentName:"p"},"must")," provide one of the following parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CLUSTER_NAME")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RESOURCE_NAME"))),(0,r.kt)("p",null,"To ensure users supply these values, set the parameters to ",(0,r.kt)("inlineCode",{parentName:"p"},"required")," in the the\ntemplate definition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  params:\n    - name: RESOURCE_NAME\n      required: true\n    # or\n    - name: CLUSTER_NAME\n      required: true\n")),(0,r.kt)("admonition",{title:"Important",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("strong",{parentName:"p"},"kustomization")," feature and the ",(0,r.kt)("inlineCode",{parentName:"p"},"add-common-bases")," annotation feature ",(0,r.kt)("strong",{parentName:"p"},"always")," use a calculated default path.\nIf you are using these features one of ",(0,r.kt)("inlineCode",{parentName:"p"},"CLUSTER_NAME")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"RESOURCE_NAME"),"\n",(0,r.kt)("strong",{parentName:"p"},"must")," be provided, even if you specify a ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," for all the other resources in the template.")),(0,r.kt)("p",null,"The default path for a template has a few components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"From the params: ",(0,r.kt)("inlineCode",{parentName:"li"},"CLUSTER_NAME")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"RESOURCE_NAME"),", ",(0,r.kt)("strong",{parentName:"li"},"required"),"."),(0,r.kt)("li",{parentName:"ul"},"From the params: ",(0,r.kt)("inlineCode",{parentName:"li"},"NAMESPACE"),", default: ",(0,r.kt)("inlineCode",{parentName:"li"},"default")),(0,r.kt)("li",{parentName:"ul"},"From ",(0,r.kt)("inlineCode",{parentName:"li"},"values.yaml")," for the Weave GitOps Enterprise ",(0,r.kt)("inlineCode",{parentName:"li"},"mccp")," chart: ",(0,r.kt)("inlineCode",{parentName:"li"},"values.config.capi.repositoryPath"),", default: ",(0,r.kt)("inlineCode",{parentName:"li"},"clusters/management/clusters"))),(0,r.kt)("p",null,"These are composed to create the path:\n",(0,r.kt)("inlineCode",{parentName:"p"},"${repositoryPath}/${NAMESPACE}/${CLUSTER_OR_RESOURCE_NAME}.yaml")),(0,r.kt)("p",null,"Using the default values and supplying ",(0,r.kt)("inlineCode",{parentName:"p"},"CLUSTER_NAME")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"my-cluster")," will result in the path:\n",(0,r.kt)("inlineCode",{parentName:"p"},"clusters/management/clusters/default/my-cluster.yaml")))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,h=u["".concat(p,".").concat(c)]||u[c]||d[c]||l;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);