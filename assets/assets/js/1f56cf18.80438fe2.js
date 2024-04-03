"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[77973],{20338:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const a={},i=void 0,s={unversionedId:"references/cli-reference/gitops_replan_terraform",id:"version-0.28.0/references/cli-reference/gitops_replan_terraform",title:"gitops_replan_terraform",description:"gitops replan terraform",source:"@site/versioned_docs/version-0.28.0/references/cli-reference/gitops_replan_terraform.md",sourceDirName:"references/cli-reference",slug:"/references/cli-reference/gitops_replan_terraform",permalink:"/docs/0.28.0/references/cli-reference/gitops_replan_terraform",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.28.0/references/cli-reference/gitops_replan_terraform.md",tags:[],version:"0.28.0",frontMatter:{},sidebar:"ref",previous:{title:"gitops_replan",permalink:"/docs/0.28.0/references/cli-reference/gitops_replan"},next:{title:"gitops_resume",permalink:"/docs/0.28.0/references/cli-reference/gitops_resume"}},p={},l=[{value:"gitops replan terraform",id:"gitops-replan-terraform",level:2},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 19-Jul-2023",id:"auto-generated-by-spf13cobra-on-19-jul-2023",level:6}],c={toc:l};function f(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"gitops-replan-terraform"},"gitops replan terraform"),(0,o.kt)("p",null,"Trigger replan for a Terraform object"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gitops replan terraform [flags]\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\n# Replan the Terraform plan of a Terraform object from the "flux-system" namespace\ngitops replan terraform --namespace flux-system my-resource\n\n')),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --context string        The name of the kubeconfig context to use\n      --disable-compression   If true, opt-out of response compression for all requests to the server\n  -h, --help                  help for terraform\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -e, --endpoint WEAVE_GITOPS_ENTERPRISE_API_URL   The Weave GitOps Enterprise HTTP API endpoint can be set with WEAVE_GITOPS_ENTERPRISE_API_URL environment variable\n      --insecure-skip-tls-verify                   If true, the server\'s certificate will not be checked for validity. This will make your HTTPS connections insecure\n      --kubeconfig string                          Paths to a kubeconfig. Only required if out-of-cluster.\n  -n, --namespace string                           The namespace scope for this operation (default "flux-system")\n  -p, --password WEAVE_GITOPS_PASSWORD             The Weave GitOps Enterprise password for authentication can be set with WEAVE_GITOPS_PASSWORD environment variable\n  -u, --username WEAVE_GITOPS_USERNAME             The Weave GitOps Enterprise username for authentication can be set with WEAVE_GITOPS_USERNAME environment variable\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.28.0/references/cli-reference/gitops_replan"},"gitops replan"),"\t - Replan a resource")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-19-jul-2023"},"Auto generated by spf13/cobra on 19-Jul-2023"))}f.isMDXComponent=!0},3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=l(t),m=o,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||a;return t?n.createElement(d,i(i({ref:r},c),{},{components:t})):n.createElement(d,i({ref:r},c))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[f]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);