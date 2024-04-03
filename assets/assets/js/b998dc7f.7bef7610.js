"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[28180],{54557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const s={},i=void 0,a={unversionedId:"references/cli-reference/gitops_run",id:"version-0.29.0/references/cli-reference/gitops_run",title:"gitops_run",description:"gitops run",source:"@site/versioned_docs/version-0.29.0/references/cli-reference/gitops_run.md",sourceDirName:"references/cli-reference",slug:"/references/cli-reference/gitops_run",permalink:"/docs/0.29.0/references/cli-reference/gitops_run",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.29.0/references/cli-reference/gitops_run.md",tags:[],version:"0.29.0",frontMatter:{},sidebar:"ref",previous:{title:"gitops_resume_terraform",permalink:"/docs/0.29.0/references/cli-reference/gitops_resume_terraform"},next:{title:"gitops_set",permalink:"/docs/0.29.0/references/cli-reference/gitops_set"}},l={},c=[{value:"gitops run",id:"gitops-run",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"gitops-run"},"gitops run"),(0,o.kt)("p",null,"Set up an interactive sync between your cluster and your local file system"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"This will set up a sync between the cluster in your kubeconfig and the path that you specify on your local filesystem.  If you do not have Flux installed on the cluster then this will add it to the cluster automatically.  This is a requirement so we can sync the files successfully from your local system onto the cluster.  Flux will take care of producing the objects for you."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gitops run [flags]\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\n# Run the sync on the current working directory\ngitops beta run . [flags]\n\n# Run the sync against the dev overlay path\ngitops beta run ./deploy/overlays/dev\n\n# Run the sync on the dev directory and forward the port.\n# Listen on port 8080 on localhost, forwarding to 5000 in a pod of the service app.\ngitops beta run ./dev --port-forward port=8080:5000,resource=svc/app\n\n# Run the sync on the dev directory with a specified root dir.\ngitops beta run ./clusters/default/dev --root-dir ./clusters/default\n\n# Run the sync on the podinfo demo.\ngit clone https://github.com/stefanprodan/podinfo\ncd podinfo\ngitops beta run ./deploy/overlays/dev --no-session --timeout 3m --port-forward namespace=dev,resource=svc/backend,port=9898:9898\n\n# Run the sync on the podinfo demo in the session mode.\ngit clone https://github.com/stefanprodan/podinfo\ncd podinfo\ngitops beta run ./deploy/overlays/dev --timeout 3m --port-forward namespace=dev,resource=svc/backend,port=9898:9898\n\n# Run the sync on the podinfo Helm chart, in the session mode. Please note that file Chart.yaml must exist in the directory.\ngit clone https://github.com/stefanprodan/podinfo\ncd podinfo\ngitops beta run ./charts/podinfo --timeout 3m --port-forward namespace=flux-system,resource=svc/run-dev-helm-podinfo,port=9898:9898\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --allow-k8s-context strings          The name of the KubeConfig context to explicitly allow.\n      --components strings                 The Flux components to install. (default [source-controller,kustomize-controller,helm-controller,notification-controller])\n      --components-extra strings           Additional Flux components to install, allowed values are image-reflector-controller,image-automation-controller.\n      --context string                     The name of the kubeconfig context to use\n      --dashboard-hashed-password string   GitOps Dashboard password in BCrypt hash format\n      --dashboard-port string              GitOps Dashboard port (default "9001")\n      --decryption-key-file string         Path to an age key file used for decrypting Secrets using SOPS.\n      --disable-compression                If true, opt-out of response compression for all requests to the server\n      --flux-version string                The version of Flux to install. (default "2.0.1")\n  -h, --help                               help for run\n      --no-bootstrap                       Disable bootstrapping at shutdown.\n      --no-session                         Disable session management. If not specified, the session will be enabled by default.\n      --port-forward string                Forward the port from a cluster\'s resource to your local machine i.e. \'port=8080:8080,resource=svc/app\'.\n      --root-dir string                    Specify the root directory to watch for changes. If not specified, the root of Git repository will be used.\n      --session-name string                Specify the name of the session. If not specified, the name of the current branch and the last commit id will be used. (default "run-main-3dd7cb6e-dirty")\n      --session-namespace string           Specify the namespace of the session. (default "default")\n      --skip-dashboard-install             Skip installation of the Dashboard. This also disables the prompt asking whether the Dashboard should be installed.\n      --skip-resource-cleanup              Skip resource cleanup. If not specified, the GitOps Run resources will be deleted by default.\n      --timeout duration                   The timeout for operations during GitOps Run. (default 5m0s)\n')),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -e, --endpoint WEAVE_GITOPS_ENTERPRISE_API_URL   The Weave GitOps Enterprise HTTP API endpoint can be set with WEAVE_GITOPS_ENTERPRISE_API_URL environment variable\n      --insecure-skip-tls-verify                   If true, the server\'s certificate will not be checked for validity. This will make your HTTPS connections insecure\n      --kubeconfig string                          Paths to a kubeconfig. Only required if out-of-cluster.\n  -n, --namespace string                           The namespace scope for this operation (default "flux-system")\n  -p, --password WEAVE_GITOPS_PASSWORD             The Weave GitOps Enterprise password for authentication can be set with WEAVE_GITOPS_PASSWORD environment variable\n  -u, --username WEAVE_GITOPS_USERNAME             The Weave GitOps Enterprise username for authentication can be set with WEAVE_GITOPS_USERNAME environment variable\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.29.0/references/cli-reference/gitops"},"gitops"),"\t - Weave GitOps")))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,h=u["".concat(l,".").concat(f)]||u[f]||d[f]||s;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);