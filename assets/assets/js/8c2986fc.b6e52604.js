"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[61547],{48783:(e,t,i)=>{i.d(t,{Z:()=>r});var n=i(67294),o=i(88746);i(52426);const a={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function r(e){let{tiers:t}=e;return n.createElement(o.Z,{title:`This feature is a available on ${t}.`,style:a},t)}},2068:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=i(87462),o=(i(67294),i(3905)),a=i(48783);const r={title:"PolicySet",hide_title:!0},l='PolicySet <TierLabel tiers="Enterprise" />',s={unversionedId:"policy/policy-set",id:"version-0.37.0/policy/policy-set",title:"PolicySet",description:"This is an optional custom resource that is used to select a group of policies to work in specific modes.",source:"@site/versioned_docs/version-0.37.0/policy/policy-set.mdx",sourceDirName:"policy",slug:"/policy/policy-set",permalink:"/docs/0.37.0/policy/policy-set",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.37.0/policy/policy-set.mdx",tags:[],version:"0.37.0",frontMatter:{title:"PolicySet",hide_title:!0},sidebar:"docs",previous:{title:"Policy Profile",permalink:"/docs/0.37.0/policy/weave-policy-profile"},next:{title:"PolicyConfig",permalink:"/docs/0.37.0/policy/policy-configuration"}},c={},p=[{value:"Grouping Policies",id:"grouping-policies",level:2},{value:"Migration from v2beta1 to v2beta2",id:"migration-from-v2beta1-to-v2beta2",level:2},{value:"New fields",id:"new-fields",level:3},{value:"Example of the agent configuration in versions older than v2.0.0",id:"example-of-the-agent-configuration-in-versions-older-than-v200",level:4},{value:"Example of current PolicySet with mode field",id:"example-of-current-policyset-with-mode-field",level:4},{value:"Updated fields",id:"updated-fields",level:3},{value:"Deprecate fields",id:"deprecate-fields",level:3}],d={toc:p};function m(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"policyset-"},"PolicySet ",(0,o.kt)(a.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,o.kt)("p",null,"This is an optional custom resource that is used to select a group of policies to work in specific ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.37.0/policy/weave-policy-profile#agent-modes"},"modes"),"."),(0,o.kt)("p",null,"In each mode, the agent will list all the PolicySets of this mode and check which policies match any of those policysets, then validate the resources against them."),(0,o.kt)("p",null,"If there are no PolicySets found for a certain mode, all policies will be applied during this mode."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.37.0/policy/#tenant-policy"},"Tenant Policies")," is always active in the ",(0,o.kt)("a",{parentName:"p",href:"#admission"},"Admission")," mode, event if it is not selected in the ",(0,o.kt)("inlineCode",{parentName:"p"},"admission")," policysets")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: pac.weave.works/v2beta2\nkind: PolicySet\nmetadata:\n  name: my-policy-set\nspec:\n  mode: admission\n  filters:\n    ids:\n      - weave.policies.containers-minimum-replica-count\n    categories:\n      - security\n    severities:\n      - high\n      - medium\n    standards:\n      - pci-dss\n    tags:\n      - tag-1\n")),(0,o.kt)("p",null,"PolicySets can be created for any of the three modes supported by the agent: ",(0,o.kt)("inlineCode",{parentName:"p"},"admission"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"audit"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"tfAdmission"),"."),(0,o.kt)("h2",{id:"grouping-policies"},"Grouping Policies"),(0,o.kt)("p",null,"Policies can be grouped by their ids, categories, severities, standards and tags"),(0,o.kt)("p",null,"The policy will be applied if any of the filters are matched."),(0,o.kt)("h2",{id:"migration-from-v2beta1-to-v2beta2"},"Migration from v2beta1 to v2beta2"),(0,o.kt)("h3",{id:"new-fields"},"New fields"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"New required field ",(0,o.kt)("inlineCode",{parentName:"li"},"spec.mode")," is added. PolicySets should be updated to set the mode")),(0,o.kt)("p",null,"Previously the agent was configured with which policysets to use in each mode. Now we removed this argument from the agent's configuration and add the mode to the Policyset itself."),(0,o.kt)("h4",{id:"example-of-the-agent-configuration-in-versions-older-than-v200"},"Example of the agent configuration in versions older than v2.0.0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# config.yaml\nadmission:\n   enabled: true\n   policySet: admission-policy-set\n   sinks:\n      filesystemSink:\n         fileName: admission.txt\n")),(0,o.kt)("h4",{id:"example-of-current-policyset-with-mode-field"},"Example of current PolicySet with mode field"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: pac.weave.works/v2beta2\nkind: PolicySet\nmetadata:\n  name: admission-policy-set\nspec:\n  mode: admission\n  filters:\n    ids:\n      - weave.policies.containers-minimum-replica-count\n")),(0,o.kt)("h3",{id:"updated-fields"},"Updated fields"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Field ",(0,o.kt)("inlineCode",{parentName:"li"},"spec.name")," became optional.")),(0,o.kt)("h3",{id:"deprecate-fields"},"Deprecate fields"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Field ",(0,o.kt)("inlineCode",{parentName:"li"},"spec.id")," is deprecated.")))}m.isMDXComponent=!0},3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>f});var n=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(i),u=o,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return i?n.createElement(f,r(r({ref:t},p),{},{components:i})):n.createElement(f,r({ref:t},p))}));function f(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,r=new Array(a);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<a;c++)r[c]=i[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"}}]);