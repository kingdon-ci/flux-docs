"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[15401],{48783:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),o=n(88746);n(52426);const i={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function a(e){let{tiers:t}=e;return r.createElement(o.Z,{title:`This feature is a available on ${t}.`,style:i},t)}},90387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>m});var r=n(87462),o=(n(67294),n(3905)),i=n(48783);const a={title:"Monitoring",hide_title:!0,toc_max_heading_level:5},s='Monitoring <TierLabel tiers="Enterprise" />',p={unversionedId:"operations/monitoring",id:"version-0.37.0/operations/monitoring",title:"Monitoring",description:"Weave GitOps Enterprise provides monitoring telemetry and tooling for metrics and profiling. WGE generates Prometheus metrics for monitoring both performance and business operations.",source:"@site/versioned_docs/version-0.37.0/operations/monitoring.mdx",sourceDirName:"operations",slug:"/operations/monitoring",permalink:"/docs/0.37.0/operations/monitoring",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.37.0/operations/monitoring.mdx",tags:[],version:"0.37.0",frontMatter:{title:"Monitoring",hide_title:!0,toc_max_heading_level:5},sidebar:"docs",previous:{title:"Running the UI on a Subpath",permalink:"/docs/0.37.0/guides/run-ui-subpath"},next:{title:"Introduction",permalink:"/docs/0.37.0/pipelines/pipelines-intro"}},l={},m=[{value:"Setup",id:"setup",level:2},{value:"Get Started with Monitoring",id:"get-started-with-monitoring",level:3},{value:"Dashboards",id:"dashboards",level:3},{value:"Profiling",id:"profiling",level:2},{value:"Get Started with Profiling",id:"get-started-with-profiling",level:3}],u={toc:m};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"monitoring-"},"Monitoring ",(0,o.kt)(i.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,o.kt)("p",null,"Weave GitOps Enterprise provides monitoring telemetry and tooling for ",(0,o.kt)("a",{parentName:"p",href:"#metrics"},"metrics")," and ",(0,o.kt)("a",{parentName:"p",href:"#profiling"},"profiling"),". WGE generates ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus")," metrics for monitoring both performance and business operations."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"The following configuration options are available for you to configure ",(0,o.kt)("inlineCode",{parentName:"p"},"monitoring"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: helm.toolkit.fluxcd.io/v2beta1\nkind: HelmRelease\nmetadata:\n  name: weave-gitops-enterprise\n  namespace: flux-system\nspec:\n  values:\n    monitoring:\n      enabled: true # enable it if you want to expose a monitoring server\n      service:\n        name: monitoring\n        port: 8080 # port to expose the monitoring server\n      metrics:\n        enabled: true # enable it to expose a prometheus metrics endpoint in `/metrics`\n      profiling:\n        enabled: false # enable it to expose a pprof debug endpoint  `/debug/pprof`\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The monitoring server holds private services, so you probably won't need to expose anything beyond your cluster. If you must, ensure that it is properly secured.")),(0,o.kt)("h3",{id:"get-started-with-monitoring"},"Get Started with Monitoring"),(0,o.kt)("p",null,"This setup follows the same ",(0,o.kt)("a",{parentName:"p",href:"https://fluxcd.io/flux/monitoring/metrics/"},"monitoring approach as Flux")," and is based on ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus-operator.dev/"},"Prometheus Operator"),". Adapt it to your context as needed."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#setup"},"Enable")," the monitoring server with the metrics endpoint."),(0,o.kt)("li",{parentName:"ol"},"Install ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack"},"Kube Prometheus Stack"),".")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand to see manifest contents"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: source.toolkit.fluxcd.io/v1\nkind: GitRepository\nmetadata:\n  name: weave-gitops-quickstart\n  namespace: flux-system\nspec:\n  interval: 10m0s\n  ref:\n    branch: main\n  url: https://github.com/weaveworks/weave-gitops-quickstart\n---\napiVersion: v1\nkind: Namespace\nmetadata:\n  name: monitoring\n---\napiVersion: kustomize.toolkit.fluxcd.io/v1\nkind: Kustomization\nmetadata:\n  name: kube-prometheus-stack\n  namespace: flux-system\nspec:\n  interval: 10m0s\n  sourceRef:\n    kind: GitRepository\n    name: weave-gitops-quickstart\n  path: ./monitoring/kube-prometheus-stack\n  prune: true\n  targetNamespace: monitoring\n  wait: true\n"))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Deploy Weave GitOps Monitoring Config")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand to see manifest contents"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: kustomize.toolkit.fluxcd.io/v1\nkind: Kustomization\nmetadata:\n  name: monitoring-config\n  namespace: flux-system\nspec:\n  interval: 10m0s\n  sourceRef:\n    kind: GitRepository\n    name: weave-gitops-quickstart\n  path: ./monitoring/weave-gitops\n  dependsOn:\n    - name: kube-prometheus-stack\n  prune: true\n  targetNamespace: monitoring\n"))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"See the dashboards in Grafana. You can filter by tags ",(0,o.kt)("inlineCode",{parentName:"li"},"flux")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"weave-gitops"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"weave gitops dashboard list",src:n(80529).Z,width:"2148",height:"784"})),(0,o.kt)("h3",{id:"dashboards"},"Dashboards"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Weave GitOps Overview")),(0,o.kt)("p",null,"Monitor Weave GitOps golden signals for API server and controllers:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"weave gitops dashboard list",src:n(37575).Z,width:"3482",height:"2224"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Weave GitOps Runtime")),(0,o.kt)("p",null,"Monitor Weave GitOps Go runtime metrics like memory usage, memory heap, and Goroutines, among others."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"weave gitops dashboard list",src:n(87995).Z,width:"3000",height:"1512"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Explorer")),(0,o.kt)("p",null,"You can also monitor ",(0,o.kt)("a",{parentName:"p",href:"../../explorer/operations#monitoring"},"Explorer golden signals"),"."),(0,o.kt)("h2",{id:"profiling"},"Profiling"),(0,o.kt)("p",null,"During operations, profiling is useful for gaining a deeper understanding of how Weave GitOps runtime behaves.\nGiven that Weave GitOps is written in Go, profiling happens through ",(0,o.kt)("a",{parentName:"p",href:"https://pkg.go.dev/runtime/pprof"},"pprof"),". It is\nexposed as a web endpoint by ",(0,o.kt)("a",{parentName:"p",href:"https://pkg.go.dev/net/http/pprof"},"pprof http"),"."),(0,o.kt)("h3",{id:"get-started-with-profiling"},"Get Started with Profiling"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#setup"},"Enable")," the monitoring server with the profiling endpoint."),(0,o.kt)("li",{parentName:"ol"},"Navigate to your monitoring server URL to the ",(0,o.kt)("inlineCode",{parentName:"li"},"/debug/pprof")," path where the pprof web interface is exposed.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"profiling web ui",src:n(79446).Z,width:"1232",height:"804"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/google/pprof/blob/main/doc/README.md"},"Go here")," for more info on using ",(0,o.kt)("inlineCode",{parentName:"p"},"pprof"),"."))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(n),c=o,g=u["".concat(p,".").concat(c)]||u[c]||d[c]||i;return n?r.createElement(g,a(a({ref:t},m),{},{components:n})):r.createElement(g,a({ref:t},m))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},80529:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/monitoring-dashboard-list-09b9a8c449173fa649bf9c940842db19.png"},37575:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/monitoring-dashboard-overview-316e919b5499754a0d5caae084e12f5b.png"},87995:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/monitoring-dashboard-runtime-f82655abe8975a445d95043d192ce117.png"},79446:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/profiling-pprof-web-ui-87e994c71576580c5f7897c70e9658ba.png"}}]);