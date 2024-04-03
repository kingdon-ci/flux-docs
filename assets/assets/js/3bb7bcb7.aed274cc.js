"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[30104],{52927:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(88746);n(52426);const i={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function l(e){let{tiers:t}=e;return r.createElement(a.Z,{title:`This feature is a available on ${t}.`,style:i},t)}},55845:(e,t,n)=>{n.d(t,{ZP:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={toc:[]};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"This feature is in alpha and certain aspects will change")),(0,a.kt)("p",{parentName:"admonition"},"We're very excited for people to use this feature.\nHowever, please note that changes in the API, behaviour and security will evolve.\nThe feature is suitable to use in controlled testing environments.")))}l.isMDXComponent=!0},52754:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),i=n(52927),l=n(55845);const o={title:"Querying",hide_title:!0},s='Querying <TierLabel tiers="Enterprise" />',p={unversionedId:"explorer/querying",id:"version-0.36.0/explorer/querying",title:"Querying",description:"Explorer recommended way to discover resources is via its search dialog. This guide provides the background to understand",source:"@site/versioned_docs/version-0.36.0/explorer/querying.mdx",sourceDirName:"explorer",slug:"/explorer/querying",permalink:"/docs/0.36.0/explorer/querying",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.36.0/explorer/querying.mdx",tags:[],version:"0.36.0",frontMatter:{title:"Querying",hide_title:!0},sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/0.36.0/explorer/configuration"},next:{title:"Operations",permalink:"/docs/0.36.0/explorer/operations"}},c={},d=[{value:"Schema",id:"schema",level:2},{value:"Filtering and Searching",id:"filtering-and-searching",level:2}],m={toc:d};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"querying-"},"Querying ",(0,a.kt)(i.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,a.kt)(l.ZP,{mdxType:"AlphaWarning"}),(0,a.kt)("p",null,"Explorer recommended way to discover resources is via its search dialog. This guide provides the background to understand\nit and set how to use it."),(0,a.kt)("h2",{id:"schema"},"Schema"),(0,a.kt)("p",null,"Every resource is normalised to the following common schema:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Key")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Cluster"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of cluster where the resource exists. As gitops cluster ",(0,a.kt)("inlineCode",{parentName:"td"},"<GitopsClusterNamespace,GitopsClusterName>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Namespace"),(0,a.kt)("td",{parentName:"tr",align:null},"Namespace name where the resource exists.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Kind"),(0,a.kt)("td",{parentName:"tr",align:null},"Resource kubernetes type or ",(0,a.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/reference/using-api/api-concepts/#standard-api-terminology"},"kind"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Name"),(0,a.kt)("td",{parentName:"tr",align:null},"Resource name as specified in its manifest.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Status"),(0,a.kt)("td",{parentName:"tr",align:null},"Resource health status. Indicates the status of its reconciliation.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Message"),(0,a.kt)("td",{parentName:"tr",align:null},"Resource health status message. It extends status field with information about the status.")))),(0,a.kt)("p",null,"For a ",(0,a.kt)("inlineCode",{parentName:"p"},"podinfo")," helm release from a cluster ",(0,a.kt)("inlineCode",{parentName:"p"},"default/progress-delivery-demo2-32")," like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: helm.toolkit.fluxcd.io/v2beta1\nkind: HelmRelease\nmetadata:\n  name: podinfo\n  namespace: flux-system\nspec:\n  chart:\n    spec:\n      chart: podinfo\n      interval: 1m\n      reconcileStrategy: ChartVersion\n      sourceRef:\n        kind: HelmRepository\n        name: podinfo\n      version: 6.0.0\n  interval: 1m\nstatus:\n  conditions:\n  - message: Release reconciliation succeeded\n    reason: ReconciliationSucceeded\n    status: "True"\n    type: Ready\n')),(0,a.kt)("p",null,"The schema looks like"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Cluster"),(0,a.kt)("th",{parentName:"tr",align:null},"Namespace"),(0,a.kt)("th",{parentName:"tr",align:null},"Kind"),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Status"),(0,a.kt)("th",{parentName:"tr",align:null},"Message"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"default/progress-delivery-demo2-32")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"flux-system")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HelmRelease")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"podinfo")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Success")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Release reconciliation succeeded"))))),(0,a.kt)("p",null,"You can open the query filter settings by clicking on the filter button:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"explorer",src:n(81949).Z,width:"1473",height:"724"})),(0,a.kt)("h2",{id:"filtering-and-searching"},"Filtering and Searching"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Search"),' field allows for free-form text entry to query objects across all fields. For example, if we enter the term "podinfo", we will get matches for not only object names, but also strings from the ',(0,a.kt)("inlineCode",{parentName:"p"},"Message")," field:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"explorer-match",src:n(24953).Z,width:"1661",height:"850"})),(0,a.kt)("p",null,"To filter the results by cluster, kind, namespace, enable the checkbox filters:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"explorer match with filters",src:n(32217).Z,width:"1658",height:"706"})),(0,a.kt)("p",null,'Note that the free-form terms only apply to the filtered results from the kind filter. In this case, we only match the "podinfo" string on results that are ',(0,a.kt)("inlineCode",{parentName:"p"},"Kustomizations"),"."),(0,a.kt)("p",null,"We can also \"OR\" filters together. Note that filters within a category are OR'd together, but terms are AND'd across categories. For example, selecting the ",(0,a.kt)("inlineCode",{parentName:"p"},"Kind=Kustomization")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Kind=HelmRelease")," filters will show both ",(0,a.kt)("inlineCode",{parentName:"p"},"Kustomizations")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"HelmReleases"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"explorer with multiple filters",src:n(44475).Z,width:"1659",height:"815"})))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32217:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/explorer-filter-terms-bad43d3009cfc8e381b5e355e74f7bd4.png"},24953:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/explorer-match-b75488b4bf0d99445e09efdb48303b6f.png"},44475:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/explorer-multi-terms-f6d2bcbb140573cff95e94fff8b1bd0a.png"},81949:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/explorer-open-new-c0b099904d7ac99fec6cedfc7f189f3c.png"}}]);