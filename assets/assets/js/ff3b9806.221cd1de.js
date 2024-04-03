"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[98616],{83306:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(88746);a(52426);const l={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function i(e){let{tiers:t}=e;return n.createElement(r.Z,{title:`This feature is a available on ${t}.`,style:l},t)}},56066:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),l=a(83306);const i={title:"Profiles",hide_title:!0},o='Adding Profiles to Templates <TierLabel tiers="Enterprise" />',p={unversionedId:"gitops-templates/profiles",id:"version-0.33.0/gitops-templates/profiles",title:"Profiles",description:"Profiles are enhanched Helm Charts which allow operators to make additional",source:"@site/versioned_docs/version-0.33.0/gitops-templates/profiles.mdx",sourceDirName:"gitops-templates",slug:"/gitops-templates/profiles",permalink:"/docs/0.33.0/gitops-templates/profiles",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.33.0/gitops-templates/profiles.mdx",tags:[],version:"0.33.0",frontMatter:{title:"Profiles",hide_title:!0},sidebar:"docs",previous:{title:"Rendered Template Paths",permalink:"/docs/0.33.0/gitops-templates/repo-rendered-paths"},next:{title:"Annotations",permalink:"/docs/0.33.0/gitops-templates/annotations"}},s={},m=[{value:"Profile Operator Settings",id:"profile-operator-settings",level:2},{value:"Declaring Profiles with Annotations",id:"declaring-profiles-with-annotations",level:2}],d={toc:m};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"adding-profiles-to-templates-"},"Adding Profiles to Templates ",(0,r.kt)(l.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,r.kt)("p",null,"Profiles are enhanched Helm Charts which allow operators to make additional\ncomponents either optional or required to developers using self-service\ntemplates."),(0,r.kt)("p",null,"Default and required profiles can be added via the template ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.charts")," section."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  charts:\n    items:\n      - name: nginx\n        version: 1.0.0\n        targetNamespace: nginx\n      - name: cert-manager\n        targetNamespace: cert-manager\n")),(0,r.kt)("p",null,"A template with the above profiles would offer Application Developers the option\nto add ",(0,r.kt)("inlineCode",{parentName:"p"},"nginx")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"cert-manager")," resources to their templated resources, ready\nfor deployment to their cluster."),(0,r.kt)("h2",{id:"profile-operator-settings"},"Profile Operator Settings"),(0,r.kt)("p",null,"Keys available in the ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.charts")," section and the template variables available to them."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Key")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Template vars")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"helmRepositoryTemplate.path")),(0,r.kt)("td",{parentName:"tr",align:null},"Path the ",(0,r.kt)("inlineCode",{parentName:"td"},"HelmRepository")," will be written to"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"params"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"items")),(0,r.kt)("td",{parentName:"tr",align:null},"list of charts to configure, see below"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"Keys available in the ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.charts.items")," entries and the template variables available to them."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Key")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Template vars")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"template.content")),(0,r.kt)("td",{parentName:"tr",align:null},"Full or partial ",(0,r.kt)("inlineCode",{parentName:"td"},"HelmRelease")," CR template"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"params"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"template.path")),(0,r.kt)("td",{parentName:"tr",align:null},"Path the HelmRelease will be written to"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"params"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"chart")),(0,r.kt)("td",{parentName:"tr",align:null},"Shortcut to ",(0,r.kt)("inlineCode",{parentName:"td"},"HelmRelease.spec.chart.spec.chart")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"version")),(0,r.kt)("td",{parentName:"tr",align:null},"Shortcut to ",(0,r.kt)("inlineCode",{parentName:"td"},"HelmRelease.spec.chart.spec.version")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"targetNamespace")),(0,r.kt)("td",{parentName:"tr",align:null},"Shortcut to ",(0,r.kt)("inlineCode",{parentName:"td"},"HelmRelease.spec.targetNamespace")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"values")),(0,r.kt)("td",{parentName:"tr",align:null},"Shortcut to ",(0,r.kt)("inlineCode",{parentName:"td"},"HelmRelease.spec.values")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"params"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"layer")),(0,r.kt)("td",{parentName:"tr",align:null},"Layer to install as"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"required")),(0,r.kt)("td",{parentName:"tr",align:null},"(default=false) Allow the user to de-select this profile"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"editable")),(0,r.kt)("td",{parentName:"tr",align:null},"(default=false) Allow the user to edit the values.yaml of this profile"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand for a complete yaml example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  charts:\n    helmRepositoryTemplate:\n      path: clusters/${CLUSTER_NAME}/helm-repositories.yaml\n    items:\n      - chart: cert-manager\n        version: v1.5.3\n        editable: false\n        required: true\n        values:\n          installCRDs: ${CERT_MANAGER_INSTALL_CRDS}\n        targetNamespace: cert-manager\n        layer: layer-1\n        template:\n          path: clusters/${CLUSTER_NAME}/cert-manager.yaml\n          content:\n            metadata:\n              labels:\n                app.kubernetes.io/name: cert-manager\n            spec:\n              retries: ${CERT_MANAGER_RETRY_COUNT}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"template.content")," will be merged over the top of a default ",(0,r.kt)("inlineCode",{parentName:"p"},"HelmRelease")," CR so it does not need to be complete."))),(0,r.kt)("h2",{id:"declaring-profiles-with-annotations"},"Declaring Profiles with Annotations"),(0,r.kt)("admonition",{title:"Deprecated feature",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Where possible please use the ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.charts")," section as detailed above to declare profiles.")),(0,r.kt)("p",null,"Profiles can also be included within templates by the\n",(0,r.kt)("inlineCode",{parentName:"p"},"capi.weave.works/profile-INDEX")," annotation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'annotations:\n  capi.weave.works/profile-0: \'{"name": "NAME", "version": "VERSION", "editable": EDITABLE, "namespace": "NAMESPACE"}\'\n')),(0,r.kt)("p",null,"Where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," - is the name of the profile in the default profiles repository"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"version")," - (optional) will choose the default version"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"namespace")," - (optional) is the default target namespace for the profile"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"editable")," - (optional, default=",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"), allow the user to de-select this profile, making it a default instead of a requirement.")))}c.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(a),u=r,k=d["".concat(p,".").concat(u)]||d[u]||c[u]||l;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);