"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[83245],{985:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const s={},i=void 0,a={unversionedId:"references/cli-reference/gitops_suspend_terraform",id:"version-0.23.0/references/cli-reference/gitops_suspend_terraform",title:"gitops_suspend_terraform",description:"gitops suspend terraform",source:"@site/versioned_docs/version-0.23.0/references/cli-reference/gitops_suspend_terraform.md",sourceDirName:"references/cli-reference",slug:"/references/cli-reference/gitops_suspend_terraform",permalink:"/docs/0.23.0/references/cli-reference/gitops_suspend_terraform",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.23.0/references/cli-reference/gitops_suspend_terraform.md",tags:[],version:"0.23.0",frontMatter:{},sidebar:"ref",previous:{title:"gitops_suspend",permalink:"/docs/0.23.0/references/cli-reference/gitops_suspend"},next:{title:"gitops_version",permalink:"/docs/0.23.0/references/cli-reference/gitops_version"}},p={},c=[{value:"gitops suspend terraform",id:"gitops-suspend-terraform",level:2},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 11-May-2023",id:"auto-generated-by-spf13cobra-on-11-may-2023",level:6}],l={toc:c};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"gitops-suspend-terraform"},"gitops suspend terraform"),(0,o.kt)("p",null,"Suspend a Terraform object"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gitops suspend terraform [flags]\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\n# Suspend a Terraform object in the "flux-system" namespace\ngitops suspend terraform --namespace flux-system my-resource\n\n')),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --context string        The name of the kubeconfig context to use\n      --disable-compression   If true, opt-out of response compression for all requests to the server\n  -h, --help                  help for terraform\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -e, --endpoint WEAVE_GITOPS_ENTERPRISE_API_URL   The Weave GitOps Enterprise HTTP API endpoint can be set with WEAVE_GITOPS_ENTERPRISE_API_URL environment variable\n      --insecure-skip-tls-verify                   If true, the server\'s certificate will not be checked for validity. This will make your HTTPS connections insecure\n      --kubeconfig string                          Paths to a kubeconfig. Only required if out-of-cluster.\n  -n, --namespace string                           The namespace scope for this operation (default "flux-system")\n  -p, --password WEAVE_GITOPS_PASSWORD             The Weave GitOps Enterprise password for authentication can be set with WEAVE_GITOPS_PASSWORD environment variable\n  -u, --username WEAVE_GITOPS_USERNAME             The Weave GitOps Enterprise username for authentication can be set with WEAVE_GITOPS_USERNAME environment variable\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.23.0/references/cli-reference/gitops_suspend"},"gitops suspend"),"\t - Suspend a resource")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-11-may-2023"},"Auto generated by spf13/cobra on 11-May-2023"))}u.isMDXComponent=!0},3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,m=u["".concat(p,".").concat(d)]||u[d]||f[d]||s;return t?n.createElement(m,i(i({ref:r},l),{},{components:t})):n.createElement(m,i({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=d;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);