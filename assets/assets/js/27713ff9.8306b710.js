"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[75252],{72692:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=r(87462),o=(r(67294),r(3905));const s={},i=void 0,a={unversionedId:"references/cli-reference/gitops_remove_run",id:"version-0.33.0/references/cli-reference/gitops_remove_run",title:"gitops_remove_run",description:"gitops remove run",source:"@site/versioned_docs/version-0.33.0/references/cli-reference/gitops_remove_run.md",sourceDirName:"references/cli-reference",slug:"/references/cli-reference/gitops_remove_run",permalink:"/docs/0.33.0/references/cli-reference/gitops_remove_run",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.33.0/references/cli-reference/gitops_remove_run.md",tags:[],version:"0.33.0",frontMatter:{},sidebar:"ref",previous:{title:"gitops_remove",permalink:"/docs/0.33.0/references/cli-reference/gitops_remove"},next:{title:"gitops_replan",permalink:"/docs/0.33.0/references/cli-reference/gitops_replan"}},p={},l=[{value:"gitops remove run",id:"gitops-remove-run",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],c={toc:l};function u(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"gitops-remove-run"},"gitops remove run"),(0,o.kt)("p",null,"Remove GitOps Run sessions"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Remove GitOps Run sessions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gitops remove run [flags]\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\n# Remove the GitOps Run session "dev-1234" from the "flux-system" namespace\ngitops remove run --namespace flux-system dev-1234\n\n# Remove all GitOps Run sessions from the default namespace\ngitops remove run --all-sessions\n\n# Remove all GitOps Run sessions from the dev namespace\ngitops remove run -n dev --all-sessions\n\n# Clean up resources from a failed GitOps Run in no session mode\ngitops remove run --no-session\n\n')),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --all-sessions          Remove all GitOps Run sessions\n      --context string        The name of the kubeconfig context to use\n      --disable-compression   If true, opt-out of response compression for all requests to the server\n  -h, --help                  help for run\n      --no-session            Remove all GitOps Run components in the non-session mode\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -e, --endpoint WEAVE_GITOPS_ENTERPRISE_API_URL   The Weave GitOps Enterprise HTTP API endpoint can be set with WEAVE_GITOPS_ENTERPRISE_API_URL environment variable\n      --insecure-skip-tls-verify                   If true, the server\'s certificate will not be checked for validity. This will make your HTTPS connections insecure\n      --kubeconfig string                          Paths to a kubeconfig. Only required if out-of-cluster.\n  -n, --namespace string                           The namespace scope for this operation (default "flux-system")\n  -p, --password WEAVE_GITOPS_PASSWORD             The Weave GitOps Enterprise password for authentication can be set with WEAVE_GITOPS_PASSWORD environment variable\n  -u, --username WEAVE_GITOPS_USERNAME             The Weave GitOps Enterprise username for authentication can be set with WEAVE_GITOPS_USERNAME environment variable\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.33.0/references/cli-reference/gitops_remove"},"gitops remove"),"\t - Remove various components of Weave GitOps")))}u.isMDXComponent=!0},3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>v});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=t.createContext({}),l=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,v=u["".concat(p,".").concat(f)]||u[f]||m[f]||s;return r?t.createElement(v,i(i({ref:n},c),{},{components:r})):t.createElement(v,i({ref:n},c))}));function v(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=f;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);