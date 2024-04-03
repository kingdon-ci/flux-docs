"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[47166],{26236:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const i={},s=void 0,a={unversionedId:"references/cli-reference/gitops_completion_bash",id:"version-0.34.0/references/cli-reference/gitops_completion_bash",title:"gitops_completion_bash",description:"gitops completion bash",source:"@site/versioned_docs/version-0.34.0/references/cli-reference/gitops_completion_bash.md",sourceDirName:"references/cli-reference",slug:"/references/cli-reference/gitops_completion_bash",permalink:"/docs/0.34.0/references/cli-reference/gitops_completion_bash",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.34.0/references/cli-reference/gitops_completion_bash.md",tags:[],version:"0.34.0",frontMatter:{},sidebar:"ref",previous:{title:"gitops_completion",permalink:"/docs/0.34.0/references/cli-reference/gitops_completion"},next:{title:"gitops_completion_fish",permalink:"/docs/0.34.0/references/cli-reference/gitops_completion_fish"}},c={},p=[{value:"gitops completion bash",id:"gitops-completion-bash",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Linux:",id:"linux",level:4},{value:"macOS:",id:"macos",level:4},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 11-Oct-2023",id:"auto-generated-by-spf13cobra-on-11-oct-2023",level:6}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"gitops-completion-bash"},"gitops completion bash"),(0,r.kt)("p",null,"Generate the autocompletion script for bash"),(0,r.kt)("h3",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Generate the autocompletion script for the bash shell."),(0,r.kt)("p",null,"This script depends on the 'bash-completion' package.\nIf it is not installed already, you can install it via your OS's package manager."),(0,r.kt)("p",null,"To load completions in your current shell session:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"source <(gitops completion bash)\n")),(0,r.kt)("p",null,"To load completions for every new session, execute once:"),(0,r.kt)("h4",{id:"linux"},"Linux:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"gitops completion bash > /etc/bash_completion.d/gitops\n")),(0,r.kt)("h4",{id:"macos"},"macOS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"gitops completion bash > $(brew --prefix)/etc/bash_completion.d/gitops\n")),(0,r.kt)("p",null,"You will need to start a new shell for this setup to take effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"gitops completion bash\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  -h, --help              help for bash\n      --no-descriptions   disable completion descriptions\n")),(0,r.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  -e, --endpoint WEAVE_GITOPS_ENTERPRISE_API_URL   The Weave GitOps Enterprise HTTP API endpoint can be set with WEAVE_GITOPS_ENTERPRISE_API_URL environment variable\n      --insecure-skip-tls-verify                   If true, the server\'s certificate will not be checked for validity. This will make your HTTPS connections insecure\n      --kubeconfig string                          Paths to a kubeconfig. Only required if out-of-cluster.\n  -n, --namespace string                           The namespace scope for this operation (default "flux-system")\n  -p, --password WEAVE_GITOPS_PASSWORD             The Weave GitOps Enterprise password for authentication can be set with WEAVE_GITOPS_PASSWORD environment variable\n  -u, --username WEAVE_GITOPS_USERNAME             The Weave GitOps Enterprise username for authentication can be set with WEAVE_GITOPS_USERNAME environment variable\n')),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/0.34.0/references/cli-reference/gitops_completion"},"gitops completion"),"\t - Generate the autocompletion script for the specified shell")),(0,r.kt)("h6",{id:"auto-generated-by-spf13cobra-on-11-oct-2023"},"Auto generated by spf13/cobra on 11-Oct-2023"))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||i;return n?o.createElement(d,s(s({ref:t},l),{},{components:n})):o.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:r,s[1]=a;for(var p=2;p<i;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);