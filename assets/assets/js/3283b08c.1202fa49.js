"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[90607],{40063:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),i=n(88746);n(52426);const o={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function l(e){let{tiers:t}=e;return r.createElement(i.Z,{title:`This feature is a available on ${t}.`,style:o},t)}},99158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(87462),i=(n(67294),n(3905)),o=n(40063);const l={title:"Introduction",hide_title:!0},a='Introduction <TierLabel tiers="Enterprise" />',c={unversionedId:"policy/intro",id:"version-0.28.0/policy/intro",title:"Introduction",description:"Policy",source:"@site/versioned_docs/version-0.28.0/policy/intro.mdx",sourceDirName:"policy",slug:"/policy/intro",permalink:"/docs/0.28.0/policy/intro",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.28.0/policy/intro.mdx",tags:[],version:"0.28.0",frontMatter:{title:"Introduction",hide_title:!0},sidebar:"docs",previous:{title:"Pipeline",permalink:"/docs/0.28.0/pipelines/spec/v1alpha1/pipeline"},next:{title:"Getting Started",permalink:"/docs/0.28.0/policy/getting-started"}},s={},p=[{value:"Policy",id:"policy",level:2},{value:"Admission Controller",id:"admission-controller",level:3},{value:"Audit",id:"audit",level:3},{value:"Commit/Build Time Checks",id:"commitbuild-time-checks",level:3}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction-"},"Introduction ",(0,i.kt)(o.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,i.kt)("h2",{id:"policy"},"Policy"),(0,i.kt)("p",null,"Weave Policy Engine helps users have continuous security and compliance checks across their software delivery pipeline. The engine utilizes policy-as-code to guarantee security, resilience, and coding standards across applications and infrastructure. The engine comes with 100+ policies covering numerous security and compliance benchmarks like SOC2, GDPR, PCI-DSS, HIPAA, Mitre Attack and more."),(0,i.kt)("p",null,"The policy engine provides the following functionality:"),(0,i.kt)("h3",{id:"admission-controller"},"Admission Controller"),(0,i.kt)("p",null,"An out-of-the-box admission controller that monitors any changes happening to the clusters' deployments and resources, and prevents violating changes at deployment time from being deployed to clusters."),(0,i.kt)("h3",{id:"audit"},"Audit"),(0,i.kt)("p",null,"Daily scans of your clusters' deployments and resources, then report back any policy violations. The audit results can be published to different data analytics tools to provide compliance posture analysis of your clusters runtime."),(0,i.kt)("h3",{id:"commitbuild-time-checks"},"Commit/Build Time Checks"),(0,i.kt)("p",null,"Early feedback on policy violations at the commit or build time, by reporting policy violations right inside git or other CI tools. This helps developers and operators detect policy violations and fix them before they deploy their changes to the clusters."))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(y,l(l({ref:t},p),{},{components:n})):r.createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);