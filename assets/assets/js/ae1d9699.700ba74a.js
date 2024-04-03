"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[49198],{32342:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},71125:(e,t,n)=>{n.d(t,{Z:()=>O});var r=n(87462),a=n(67294),o=n(86010),i=n(63735),l=n(16550),s=n(34423),u=n(20636),c=n(99200);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=m({queryString:n,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),v=(()=>{const e=s??d;return h({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var v=n(5730);const g="tabList__CuJ",y="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==l&&(d(t),s(r))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:p},i,{className:(0,o.Z)("tabs__item",y,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g)},a.createElement(b,(0,r.Z)({},e,t)),a.createElement(w,(0,r.Z)({},e,t)))}function O(e){const t=(0,v.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},34703:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));n(71125),n(32342);const o={title:"Overview",hide_title:!0},i="GitOps Run Overview",l={unversionedId:"gitops-run/overview",id:"version-0.21.1/gitops-run/overview",title:"Overview",description:"Introduction",source:"@site/versioned_docs/version-0.21.1/gitops-run/overview.mdx",sourceDirName:"gitops-run",slug:"/gitops-run/overview",permalink:"/docs/0.21.1/gitops-run/overview",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.21.1/gitops-run/overview.mdx",tags:[],version:"0.21.1",frontMatter:{title:"Overview",hide_title:!0},sidebar:"docs",previous:{title:"Manual Approval for Progressive Delivery Deployments",permalink:"/docs/0.21.1/guides/flagger-manual-gating"},next:{title:"Tutorial",permalink:"/docs/0.21.1/gitops-run/get-started"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Additional Benefits",id:"additional-benefits",level:3},{value:"Terminology",id:"terminology",level:2},{value:"Modes",id:"modes",level:3},{value:"GitOps:",id:"gitops",level:4},{value:"Run:",id:"run",level:4},{value:"Snowflake:",id:"snowflake",level:4},{value:"Sessions",id:"sessions",level:3},{value:"Sandboxed",id:"sandboxed",level:4},{value:"Cluster",id:"cluster",level:4}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gitops-run-overview"},"GitOps Run Overview"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"GitOps is a powerful mechanism for creating consistent environments and having\nmultiple clusters stay in sync. If you build out your infrastructure correctly\nyou get predictable behaviours for your teams and you can have new environments\nup and running quickly."),(0,a.kt)("p",null,"However, GitOps can be challenging for the everyday developer\nto work with and it can create some friction, especially for developers who are\nless familiar with Kubernetes or Flux."),(0,a.kt)("p",null,"The purpose of GitOps Run is to remove the complexity for developers so that\nplatform operators can create developer environments easily, and application developers\ncan benefit from GitOps and focus on writing code."),(0,a.kt)("p",null,"Watch this video to learn more about how GitOps Run can help your team\nget started with GitOps:"),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/2TJz7RhDtAc",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("h3",{id:"additional-benefits"},"Additional Benefits"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"No need to run ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"helm"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"kustomize"),", or ",(0,a.kt)("inlineCode",{parentName:"li"},"flux")," CLI commands.  Just create the manifests and we'll put them on the cluster for you."),(0,a.kt)("li",{parentName:"ul"},"Reduces the cycle time when configuring your cluster.  With normal GitOps\nthere is a lot of commit/push/reconcile workflows that can be frustrating.\nThis skips that and you can test your changes directly before committing and\npushing code to your Git repository."),(0,a.kt)("li",{parentName:"ul"},"Multiple options for debugging Flux such as using the Dashboard that comes with Weave GitOps or getting live feedback by leveraging the ",(0,a.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=Weaveworks.vscode-gitops-tools"},"GitOps Tools for Flux")," VSCode extension.")),(0,a.kt)("h2",{id:"terminology"},"Terminology"),(0,a.kt)("h3",{id:"modes"},"Modes"),(0,a.kt)("h4",{id:"gitops"},"GitOps:"),(0,a.kt)("p",null,"This is the default mode we are always aiming for when using Weave GitOps. Whenever GitOps Run\nis not active we want users to be in this mode. This means that the cluster is being driven by\nsome mechanism reading from Git, ideally Flux, and that system is applying those changes\nto the cluster."),(0,a.kt)("h4",{id:"run"},"Run:"),(0,a.kt)("p",null,"This is when the cluster has GitOps Run running on the cluster. There is a live reload session\nthat is occurring and the cluster is no longer in a pure GitOps or Snowflake mode. Ideally, when\nGitOps Run stops running that the cluster enters into the GitOps mode that is defined above."),(0,a.kt)("h4",{id:"snowflake"},"Snowflake:"),(0,a.kt)("p",null,"We are referring to a cluster that is driven by some other mechanism outside of GitOps or Run.\nFor example, a platform operator could have run various kubectl apply commands and installed\na few helm charts using helm. The only way for this cluster to reach this state again is to\nrerun those commands or to transition to GitOps mode."),(0,a.kt)("h3",{id:"sessions"},"Sessions"),(0,a.kt)("p",null,"Weave GitOps Run can has two different ways of interacting with your cluster."),(0,a.kt)("h4",{id:"sandboxed"},"Sandboxed"),(0,a.kt)("p",null,"This means we spin up a virtual cluster on your cluster creating a sandbox environment for your applications.\nWhat this means is that you are running this application in an isolated environment and it will not impact the\nrest of your cluster.  When you are done and turn off GitOps Run we will then clean up the virtual cluster and\neverything that was installed on it.  You can push your changes to Git and then our system will take care of\npulling those changes onto the cluster."),(0,a.kt)("h4",{id:"cluster"},"Cluster"),(0,a.kt)("p",null,"When you pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"--no-session")," flag when starting up GitOps Run this means we do not put those payloads in\ntheir own sandboxed environment.  We will load them up directly into the cluster just as you would any other app."))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);