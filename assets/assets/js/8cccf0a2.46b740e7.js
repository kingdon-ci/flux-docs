"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[96218],{32342:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:n},t)}},71125:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(87462),a=n(67294),i=n(86010),o=n(63735),l=n(16550),s=n(34423),c=n(20636),u=n(99200);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=d(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[s,c]=y({queryString:n,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),h=(()=>{const e=s??p;return m({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),f(e)}),[c,f,i]),tabValues:i}}var h=n(5730);const v="tabList__CuJ",b="tabItem_LNqP";function g(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==l&&(p(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},o,{className:(0,i.Z)("tabs__item",b,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=f(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",v)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function E(e){const t=(0,h.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},1664:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(88746);n(52426);const i={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function o(e){let{tiers:t}=e;return r.createElement(a.Z,{title:`This feature is a available on ${t}.`,style:i},t)}},90880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),i=(n(71125),n(32342),n(1664));const o={title:"Policy",hide_title:!0},l='Policy <TierLabel tiers="Enterprise" />',s={unversionedId:"policy/policy",id:"version-0.34.0/policy/policy",title:"Policy",description:"Policy CRD",source:"@site/versioned_docs/version-0.34.0/policy/policy.mdx",sourceDirName:"policy",slug:"/policy/",permalink:"/docs/0.34.0/policy/",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.34.0/policy/policy.mdx",tags:[],version:"0.34.0",frontMatter:{title:"Policy",hide_title:!0},sidebar:"docs",previous:{title:"Authorization",permalink:"/docs/0.34.0/policy/authorization"},next:{title:"Policy Profile",permalink:"/docs/0.34.0/policy/weave-policy-profile"}},c={},u=[{value:"Policy CRD",id:"policy-crd",level:2},{value:"Policy Library",id:"policy-library",level:2},{value:"Tenant Policy",id:"tenant-policy",level:2},{value:"Mutating Resources",id:"mutating-resources",level:2},{value:"Policy Validation",id:"policy-validation",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"policy-"},"Policy ",(0,a.kt)(i.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,a.kt)("h2",{id:"policy-crd"},"Policy CRD"),(0,a.kt)("p",null,"The Policy CRD is used to define policies which are then consumed and used by the agent to validate entities."),(0,a.kt)("p",null,"It uses ",(0,a.kt)("a",{parentName:"p",href:"https://www.openpolicyagent.org/docs/latest/policy-language"},"OPA Rego Language")," to evaluate the entities."),(0,a.kt)("h2",{id:"policy-library"},"Policy Library"),(0,a.kt)("p",null,"You should have a policy library repo set up which includes your policies resources as CRDs."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Enterprise customers should have access to fork policy library repo into their local repositories.")),(0,a.kt)("h2",{id:"tenant-policy"},"Tenant Policy"),(0,a.kt)("p",null,"Tenant policies are special policies that are used by the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.gitops.weave.works/docs/enterprise/multi-tenancy/"},"Multi Tenancy")," feature in ",(0,a.kt)("a",{parentName:"p",href:"https://docs.gitops.weave.works/docs/intro-ee/"},"Weave GitOps Enterprise")),(0,a.kt)("p",null,"Tenant policies have a special tag ",(0,a.kt)("inlineCode",{parentName:"p"},"tenancy"),"."),(0,a.kt)("h2",{id:"mutating-resources"},"Mutating Resources"),(0,a.kt)("p",null,"Starting from version ",(0,a.kt)("inlineCode",{parentName:"p"},"v2.2.0"),", the policy agent will support mutating resources."),(0,a.kt)("p",null,"To enable mutating resources, policies must have field ",(0,a.kt)("inlineCode",{parentName:"p"},"mutate")," set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," and the rego code should return the ",(0,a.kt)("inlineCode",{parentName:"p"},"violating_key")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"recommended_value")," in the violation response. The mutation webhook will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"violating_key")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"recommended_value")," to mutate the resource and return the new mutated resource."),(0,a.kt)("p",null,"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'result = {\n    "issue_detected": true,\n    "msg": sprintf("Replica count must be greater than or equal to \'%v\'; found \'%v\'.", [min_replica_count, replicas]),\n    "violating_key": "spec.replicas",\n    "recommended_value": min_replica_count\n}\n')),(0,a.kt)("h2",{id:"policy-validation"},"Policy Validation"),(0,a.kt)("p",null,"The policy validation object is the result of validating an entity against a policy. It contains all the necessary information to give the user a clear idea on what caused this violation or compliance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"id: string # identifier for the violation\naccount_id: string # organization identifier\ncluster_id: string # cluster identifier\npolicy: object # contains related policy data\nentity: object # contains related resource data\nstatus: string # Violation or Compliance\nmessage: string # message that summarizes the policy validation\ntype: string # the mode that produced this object. one of: Admission, Audit, TFAdmission\ntrigger: string # what triggered the validation, create request or initial audit,..\ncreated_at: string # time that the validation occurred in\n")))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);