"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[70639],{21167:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const i={},a=void 0,s={unversionedId:"references/cli-reference/gitops_delete_terraform",id:"version-0.38.0/references/cli-reference/gitops_delete_terraform",title:"gitops_delete_terraform",description:"gitops delete terraform",source:"@site/versioned_docs/version-0.38.0/references/cli-reference/gitops_delete_terraform.md",sourceDirName:"references/cli-reference",slug:"/references/cli-reference/gitops_delete_terraform",permalink:"/docs/references/cli-reference/gitops_delete_terraform",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.38.0/references/cli-reference/gitops_delete_terraform.md",tags:[],version:"0.38.0",frontMatter:{},sidebar:"ref",previous:{title:"gitops_delete",permalink:"/docs/references/cli-reference/gitops_delete"},next:{title:"gitops_get",permalink:"/docs/references/cli-reference/gitops_get"}},c={},l=[{value:"gitops delete terraform",id:"gitops-delete-terraform",level:2},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 6-Dec-2023",id:"auto-generated-by-spf13cobra-on-6-dec-2023",level:6}],p={toc:l};function f(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"gitops-delete-terraform"},"gitops delete terraform"),(0,o.kt)("p",null,"Delete a Terraform object"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gitops delete terraform [flags]\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\n# Delete a Terraform resource in the default namespace\ngitops delete terraform -n default my-resource\n\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --context string        The name of the kubeconfig context to use\n      --disable-compression   If true, opt-out of response compression for all requests to the server\n  -h, --help                  help for terraform\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -e, --endpoint WEAVE_GITOPS_ENTERPRISE_API_URL   The Weave GitOps Enterprise HTTP API endpoint can be set with WEAVE_GITOPS_ENTERPRISE_API_URL environment variable\n      --insecure-skip-tls-verify                   If true, the server\'s certificate will not be checked for validity. This will make your HTTPS connections insecure\n      --kubeconfig string                          Paths to a kubeconfig. Only required if out-of-cluster.\n  -n, --namespace string                           The namespace scope for this operation (default "flux-system")\n  -p, --password WEAVE_GITOPS_PASSWORD             The Weave GitOps Enterprise password for authentication can be set with WEAVE_GITOPS_PASSWORD environment variable\n  -u, --username WEAVE_GITOPS_USERNAME             The Weave GitOps Enterprise username for authentication can be set with WEAVE_GITOPS_USERNAME environment variable\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/references/cli-reference/gitops_delete"},"gitops delete"),"\t - Delete a resource")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-6-dec-2023"},"Auto generated by spf13/cobra on 6-Dec-2023"))}f.isMDXComponent=!0},3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(t),u=o,m=f["".concat(c,".").concat(u)]||f[u]||d[u]||i;return t?n.createElement(m,a(a({ref:r},p),{},{components:t})):n.createElement(m,a({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[f]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);