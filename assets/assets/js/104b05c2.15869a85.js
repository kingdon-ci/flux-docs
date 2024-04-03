"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[4719],{3635:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={title:"Securing access to the dashboard"},i=void 0,c={unversionedId:"configuration/securing-access-to-the-dashboard",id:"version-0.29.0/configuration/securing-access-to-the-dashboard",title:"Securing access to the dashboard",description:"Dashboard Login",source:"@site/versioned_docs/version-0.29.0/configuration/securing-access-to-the-dashboard.mdx",sourceDirName:"configuration",slug:"/configuration/securing-access-to-the-dashboard",permalink:"/docs/0.29.0/configuration/securing-access-to-the-dashboard",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.29.0/configuration/securing-access-to-the-dashboard.mdx",tags:[],version:"0.29.0",frontMatter:{title:"Securing access to the dashboard"},sidebar:"docs",previous:{title:"Recommended RBAC Configuration",permalink:"/docs/0.29.0/configuration/recommended-rbac-configuration"},next:{title:"OIDC Provider",permalink:"/docs/0.29.0/configuration/oidc-access"}},s={},u=[{value:"Dashboard Login",id:"dashboard-login",level:2}],d={toc:u};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"dashboard-login"},"Dashboard Login"),(0,o.kt)("p",null,"There are 2 supported methods for logging in to the dashboard:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../oidc-access"},"Login via an OIDC provider")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../emergency-user"},"Login via a cluster user account")," (not recommended)")),(0,o.kt)("p",null,"The recommended method is to integrate with an OIDC provider,\nas this will let you control permissions for existing users and groups that have\nalready been configured to use OIDC. However, it is also possible to use the Emergency Cluster\nUser Account to login, if an OIDC provider is not available to use.\nBoth methods work with standard Kubernetes RBAC."))}l.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=u(r),f=o,g=l["".concat(s,".").concat(f)]||l[f]||p[f]||a;return r?n.createElement(g,i(i({ref:t},d),{},{components:r})):n.createElement(g,i({ref:t},d))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);