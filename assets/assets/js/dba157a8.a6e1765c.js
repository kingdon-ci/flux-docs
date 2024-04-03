"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[11484],{43962:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),o=r(88746);r(52426);const i={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function l(e){let{tiers:t}=e;return n.createElement(o.Z,{title:`This feature is a available on ${t}.`,style:i},t)}},99857:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905)),i=r(43962);const l={title:"Introduction",hide_title:!0},a='Introduction <TierLabel tiers="Enterprise" />',c={unversionedId:"policy/intro",id:"version-0.24.0/policy/intro",title:"Introduction",description:"Policy",source:"@site/versioned_docs/version-0.24.0/policy/intro.mdx",sourceDirName:"policy",slug:"/policy/intro",permalink:"/docs/0.24.0/policy/intro",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.24.0/policy/intro.mdx",tags:[],version:"0.24.0",frontMatter:{title:"Introduction",hide_title:!0},sidebar:"docs",previous:{title:"Workspaces View",permalink:"/docs/0.24.0/workspaces/view-workspaces"},next:{title:"Getting Started",permalink:"/docs/0.24.0/policy/getting-started"}},s={},p=[{value:"Policy",id:"policy",level:2},{value:"Admission Controller",id:"admission-controller",level:3},{value:"Audit",id:"audit",level:3},{value:"Commit/Build Time Checks",id:"commitbuild-time-checks",level:3}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction-"},"Introduction ",(0,o.kt)(i.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,o.kt)("h2",{id:"policy"},"Policy"),(0,o.kt)("p",null,"Weave Policy Engine helps users have continuous security and compliance checks across their software delivery pipeline. The engine utilizes policy-as-code to guarantee security, resilience, and coding standards across applications and infrastructure. The engine comes with 100+ policies covering numerous security and compliance benchmarks like SOC2, GDPR, PCI-DSS, HIPAA, Mitre Attack and more."),(0,o.kt)("p",null,"The policy engine provides the following functionality:"),(0,o.kt)("h3",{id:"admission-controller"},"Admission Controller"),(0,o.kt)("p",null,"An out-of-the-box admission controller that monitors any changes happening to the clusters' deployments and resources, and prevents violating changes at deployment time from being deployed to clusters."),(0,o.kt)("h3",{id:"audit"},"Audit"),(0,o.kt)("p",null,"Daily scans of your clusters' deployments and resources, then report back any policy violations. The audit results can be published to different data analytics tools to provide compliance posture analysis of your clusters runtime."),(0,o.kt)("h3",{id:"commitbuild-time-checks"},"Commit/Build Time Checks"),(0,o.kt)("p",null,"Early feedback on policy violations at the commit or build time, by reporting policy violations right inside git or other CI tools. This helps developers and operators detect policy violations and fix them before they deploy their changes to the clusters."))}d.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(y,l(l({ref:t},p),{},{components:r})):n.createElement(y,l({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);