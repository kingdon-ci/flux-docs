"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[2719],{60838:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=t(87462),o=(t(67294),t(3905));const a={},i=void 0,s={unversionedId:"references/cli-reference/gitops_create",id:"version-0.20.0/references/cli-reference/gitops_create",title:"gitops_create",description:"gitops create",source:"@site/versioned_docs/version-0.20.0/references/cli-reference/gitops_create.md",sourceDirName:"references/cli-reference",slug:"/references/cli-reference/gitops_create",permalink:"/docs/0.20.0/references/cli-reference/gitops_create",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.20.0/references/cli-reference/gitops_create.md",tags:[],version:"0.20.0",frontMatter:{},sidebar:"ref",previous:{title:"gitops_completion_zsh",permalink:"/docs/0.20.0/references/cli-reference/gitops_completion_zsh"},next:{title:"gitops_create_dashboard",permalink:"/docs/0.20.0/references/cli-reference/gitops_create_dashboard"}},c={},p=[{value:"gitops create",id:"gitops-create",level:2},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 29-Mar-2023",id:"auto-generated-by-spf13cobra-on-29-mar-2023",level:6}],l={toc:p};function f(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"gitops-create"},"gitops create"),(0,o.kt)("p",null,"Creates a resource"),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\n# Create a HelmRepository and HelmRelease to deploy Weave GitOps\ngitops create dashboard ww-gitops \\\n  --password=$PASSWORD \\\n  --export > ./clusters/my-cluster/weave-gitops-dashboard.yaml\n\n# Create a Terraform object\ngitops create terraform my-resource \\\n  -n my-namespace \\\n  --source GitRepository/my-project \\\n  --path ./terraform \\\n  --interval 1m \\\n  --export > ./clusters/my-cluster/infra/terraform-my-resource.yaml\n        \n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --export             Export in YAML format to stdout.\n  -h, --help               help for create\n      --timeout duration   The timeout for operations during resource creation. (default 3m0s)\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -e, --endpoint WEAVE_GITOPS_ENTERPRISE_API_URL   The Weave GitOps Enterprise HTTP API endpoint can be set with WEAVE_GITOPS_ENTERPRISE_API_URL environment variable\n      --insecure-skip-tls-verify                   If true, the server\'s certificate will not be checked for validity. This will make your HTTPS connections insecure\n      --kubeconfig string                          Paths to a kubeconfig. Only required if out-of-cluster.\n  -n, --namespace string                           The namespace scope for this operation (default "flux-system")\n  -p, --password WEAVE_GITOPS_PASSWORD             The Weave GitOps Enterprise password for authentication can be set with WEAVE_GITOPS_PASSWORD environment variable\n  -u, --username WEAVE_GITOPS_USERNAME             The Weave GitOps Enterprise username for authentication can be set with WEAVE_GITOPS_USERNAME environment variable\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.20.0/references/cli-reference/gitops"},"gitops"),"\t - Weave GitOps"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.20.0/references/cli-reference/gitops_create_dashboard"},"gitops create dashboard"),"\t - Create a HelmRepository and HelmRelease to deploy Weave GitOps"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.20.0/references/cli-reference/gitops_create_terraform"},"gitops create terraform"),"\t - Create a Terraform object")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-29-mar-2023"},"Auto generated by spf13/cobra on 29-Mar-2023"))}f.isMDXComponent=!0},3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(t),m=o,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||a;return t?n.createElement(d,i(i({ref:r},l),{},{components:t})):n.createElement(d,i({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[f]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);