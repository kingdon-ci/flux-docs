"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[17631],{33869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={},s=void 0,a={unversionedId:"references/cli-reference/gitops_completion_bash",id:"version-0.21.1/references/cli-reference/gitops_completion_bash",title:"gitops_completion_bash",description:"gitops completion bash",source:"@site/versioned_docs/version-0.21.1/references/cli-reference/gitops_completion_bash.md",sourceDirName:"references/cli-reference",slug:"/references/cli-reference/gitops_completion_bash",permalink:"/docs/0.21.1/references/cli-reference/gitops_completion_bash",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.21.1/references/cli-reference/gitops_completion_bash.md",tags:[],version:"0.21.1",frontMatter:{},sidebar:"ref",previous:{title:"gitops_completion",permalink:"/docs/0.21.1/references/cli-reference/gitops_completion"},next:{title:"gitops_completion_fish",permalink:"/docs/0.21.1/references/cli-reference/gitops_completion_fish"}},p={},c=[{value:"gitops completion bash",id:"gitops-completion-bash",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Linux:",id:"linux",level:4},{value:"macOS:",id:"macos",level:4},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 12-Apr-2023",id:"auto-generated-by-spf13cobra-on-12-apr-2023",level:6}],l={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"gitops-completion-bash"},"gitops completion bash"),(0,o.kt)("p",null,"Generate the autocompletion script for bash"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Generate the autocompletion script for the bash shell."),(0,o.kt)("p",null,"This script depends on the 'bash-completion' package.\nIf it is not installed already, you can install it via your OS's package manager."),(0,o.kt)("p",null,"To load completions in your current shell session:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"source <(gitops completion bash)\n")),(0,o.kt)("p",null,"To load completions for every new session, execute once:"),(0,o.kt)("h4",{id:"linux"},"Linux:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gitops completion bash > /etc/bash_completion.d/gitops\n")),(0,o.kt)("h4",{id:"macos"},"macOS:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gitops completion bash > $(brew --prefix)/etc/bash_completion.d/gitops\n")),(0,o.kt)("p",null,"You will need to start a new shell for this setup to take effect."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gitops completion bash\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help              help for bash\n      --no-descriptions   disable completion descriptions\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -e, --endpoint WEAVE_GITOPS_ENTERPRISE_API_URL   The Weave GitOps Enterprise HTTP API endpoint can be set with WEAVE_GITOPS_ENTERPRISE_API_URL environment variable\n      --insecure-skip-tls-verify                   If true, the server\'s certificate will not be checked for validity. This will make your HTTPS connections insecure\n      --kubeconfig string                          Paths to a kubeconfig. Only required if out-of-cluster.\n  -n, --namespace string                           The namespace scope for this operation (default "flux-system")\n  -p, --password WEAVE_GITOPS_PASSWORD             The Weave GitOps Enterprise password for authentication can be set with WEAVE_GITOPS_PASSWORD environment variable\n  -u, --username WEAVE_GITOPS_USERNAME             The Weave GitOps Enterprise username for authentication can be set with WEAVE_GITOPS_USERNAME environment variable\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.21.1/references/cli-reference/gitops_completion"},"gitops completion"),"\t - Generate the autocompletion script for the specified shell")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-12-apr-2023"},"Auto generated by spf13/cobra on 12-Apr-2023"))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||i;return n?r.createElement(d,s(s({ref:t},l),{},{components:n})):r.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);