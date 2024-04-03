"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[21813],{32342:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),o=n(86010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},71125:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),o=n(67294),r=n(86010),i=n(63735),l=n(16550),s=n(34423),u=n(20636),p=n(99200);function d(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function c(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=c(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,u]=h({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,p.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),k=(()=>{const e=s??d;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var k=n(5730);const y="tabList__CuJ",g="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==l&&(d(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:c},i,{className:(0,r.Z)("tabs__item",g,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=f(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",y)},o.createElement(b,(0,a.Z)({},e,t)),o.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return o.createElement(w,(0,a.Z)({key:String(t)},e))}},45609:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=n(87462),o=(n(67294),n(3905)),r=n(71125),i=n(32342);const l={title:"Getting Started",hide_title:!0},s="Get Started with GitOps Run",u={unversionedId:"gitops-run/gitops-run-get-started",id:"version-0.31.2/gitops-run/gitops-run-get-started",title:"Getting Started",description:"GitOps Run supports two different modes of operation - directly on a",source:"@site/versioned_docs/version-0.31.2/gitops-run/gitops-run-get-started.mdx",sourceDirName:"gitops-run",slug:"/gitops-run/gitops-run-get-started",permalink:"/docs/0.31.2/gitops-run/gitops-run-get-started",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.31.2/gitops-run/gitops-run-get-started.mdx",tags:[],version:"0.31.2",frontMatter:{title:"Getting Started",hide_title:!0},sidebar:"docs",previous:{title:"GitOps Run Overview",permalink:"/docs/0.31.2/gitops-run/gitops-run-overview"},next:{title:"Introduction",permalink:"/docs/0.31.2/gitopssets/gitopssets-intro"}},p={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Required",id:"required",level:3},{value:"Optional",id:"optional",level:3},{value:"Create a Local Kubernetes Cluster",id:"create-a-local-kubernetes-cluster",level:2},{value:"Create a GitOps Repository",id:"create-a-gitops-repository",level:2},{value:"Set up GitOps Run",id:"set-up-gitops-run",level:2},{value:"Start Modifying Your Deployment",id:"start-modifying-your-deployment",level:2},{value:"Update Your App",id:"update-your-app",level:2},{value:"Next Steps: GitOps Mode",id:"next-steps-gitops-mode",level:2}],c={toc:d};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-started-with-gitops-run"},"Get Started with GitOps Run"),(0,o.kt)("p",null,"GitOps Run supports two different modes of operation - directly on a\ncluster or as sandboxed sessions. The sandboxed sessions are intended\nfor shared environments where multiple users are running their own\nsessions, whereas the direct mode is intended for a local cluster."),(0,o.kt)("p",null,"In this tutorial we are going to use 'direct mode' to run GitOps on a local\ncluster."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("h3",{id:"required"},"Required"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install the GitOps CLI. See ",(0,o.kt)("a",{parentName:"li",href:"/docs/0.31.2/open-source/getting-started/install-OSS#install-the-gitops-cli"},"the installation"),".")),(0,o.kt)("h3",{id:"optional"},"Optional"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This guide uses ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"kubectl")," for demonstrations, but it is not required to use GitOps Run"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://fluxcd.io/flux/installation/"},"Flux CLI")," is the quickest way to generate resource definitions, but the files can also be created manually")),(0,o.kt)("h2",{id:"create-a-local-kubernetes-cluster"},"Create a Local Kubernetes Cluster"),(0,o.kt)("p",null,"To get started with GitOps Run, you need a Kubernetes cluster. There\nare many tools to set up a local cluster for test and development\npurposes."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This tutorial assumes you have full control of your cluster - we\nrecommend a local cluster, but you can also use a remote cluster where\nyou have full ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster-admin")," privileges.")),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"kind",mdxType:"TabItem"},(0,o.kt)("p",null,"Install ",(0,o.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"kind")," and run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kind create cluster\n"))),(0,o.kt)(i.Z,{value:"k3d",mdxType:"TabItem"},(0,o.kt)("p",null,"Install ",(0,o.kt)("a",{parentName:"p",href:"https://k3d.io/"},"k3d")," and run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"k3d cluster create mycluster\n"))),(0,o.kt)(i.Z,{value:"minikube",mdxType:"TabItem"},(0,o.kt)("p",null,"Install ",(0,o.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"minikube")," and run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"minikube start\n"))),(0,o.kt)(i.Z,{value:"docker desktop",mdxType:"TabItem"},(0,o.kt)("p",null,"Install ",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop/"},"Docker Desktop")," and enable Kubernetes. Then run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl config set-context docker-desktop\n"))),(0,o.kt)(i.Z,{value:"other",mdxType:"TabItem"},(0,o.kt)("p",null,"GitOps Run works on any Kubernetes platform, but to avoid accidents\nyou have to explicitly white-list the context name."),(0,o.kt)("p",null,"First, find the name of the context where you want to run ",(0,o.kt)("inlineCode",{parentName:"p"},"gitops beta run"),' - in this example, there\'s a cluster with the name "dev":'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl config get-contexts\nCURRENT   NAME                      CLUSTER                   AUTHINFO                  NAMESPACE\n*         dev                       dev                       dev\n")),(0,o.kt)("p",null,"Then, for any ",(0,o.kt)("inlineCode",{parentName:"p"},"gitops beta run")," command in this guide, you'll have to add the flag ",(0,o.kt)("inlineCode",{parentName:"p"},"--allow-k8s-context=dev")))),(0,o.kt)("p",null,"Before you continue, make sure ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get nodes")," returns a node which is ",(0,o.kt)("inlineCode",{parentName:"p"},"Ready"),"."),(0,o.kt)("h2",{id:"create-a-gitops-repository"},"Create a GitOps Repository"),(0,o.kt)("p",null,"You need to set up a Git repository to put your GitOps manifests\nin. Any Git repository will do, for example create a new\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/new"},"github")," repository and clone that."),(0,o.kt)("p",null,"You may alternatively fork an existing repository, as we have done for this guide. Head\nto ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stefanprodan/podinfo"},"podinfo")," and create a fork with the\nname ",(0,o.kt)("inlineCode",{parentName:"p"},"podinfo-gitops-run"),"."),(0,o.kt)("h2",{id:"set-up-gitops-run"},"Set up GitOps Run"),(0,o.kt)("p",null,"To start GitOps Run, clone your newly created repository or fork and change into\nit."),(0,o.kt)("p",null,"We will run the command with ",(0,o.kt)("inlineCode",{parentName:"p"},"--no-session")," as it's a single user\ncluster which we want to use in direct mode. The port-forward points\nat the ",(0,o.kt)("inlineCode",{parentName:"p"},"podinfo")," pod we will create later on."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export GITHUB_USER=<your github username>\n\n# you can ignore these two commands if you already created and cloned your repository\ngit clone git@github.com:$GITHUB_USER/podinfo-gitops-run.git\n\ncd podinfo-gitops-run\ngitops beta run ./podinfo --no-session --port-forward namespace=dev,resource=svc/dev-podinfo,port=9898:9898\n")),(0,o.kt)("p",null,"You will now be asked if you want to install Flux and the GitOps\n",(0,o.kt)("a",{parentName:"p",href:"/docs/0.31.2/intro-weave-gitops"},"dashboard"),". Answer ",(0,o.kt)("inlineCode",{parentName:"p"},"yes")," and ",(0,o.kt)("strong",{parentName:"p"},"set a password"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you do not set a password, you won't be able to login to the GitOps UI\n\ud83d\ude31.")),(0,o.kt)("p",null,"Shortly after you should be able to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:9001"},"open the dashboard"),".\nThe username is ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," and the password will be the one you set above."),(0,o.kt)("p",null,"In your dashboard you will be able to see what is in your cluster, including\nthe resources that GitOps Run is operating."),(0,o.kt)("h2",{id:"start-modifying-your-deployment"},"Start Modifying Your Deployment"),(0,o.kt)("p",null,"In your local GitOps repo, you will see that GitOps Run has created a new\ndirectory called ",(0,o.kt)("inlineCode",{parentName:"p"},"podinfo"),". Inside there is a single, mostly empty, ",(0,o.kt)("inlineCode",{parentName:"p"},"kustomization.yaml"),"."),(0,o.kt)("p",null,"To create the automation for the ",(0,o.kt)("inlineCode",{parentName:"p"},"podinfo")," app, we first have to add the resources to\nrun it - we'll create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Namespace"),", a ",(0,o.kt)("inlineCode",{parentName:"p"},"HelmRepository")," that\nreferences the Helm repository where the manifests are stored, and a\n",(0,o.kt)("inlineCode",{parentName:"p"},"HelmRelease")," that references the chart and version. We can use the\n",(0,o.kt)("inlineCode",{parentName:"p"},"flux")," CLI to generate the resource definition, or we can just create\nthe yaml files ourselves."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"flux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat <<EOF > ./podinfo/namespace.yaml\n---\napiVersion: v1\nkind: Namespace\nmetadata:\n  name: dev\nEOF\nflux create source helm podinfo --url=https://stefanprodan.github.io/podinfo --namespace=dev --export > ./podinfo/podinfo-source.yaml\nflux create helmrelease podinfo --source=HelmRepository/podinfo --chart=podinfo --export --namespace=dev --target-namespace=dev > ./podinfo/podinfo-helmrelease.yaml\n")),(0,o.kt)("p",null,"You should see three files now exist in your ",(0,o.kt)("inlineCode",{parentName:"p"},"./podinfo")," directory.")),(0,o.kt)(i.Z,{value:"yaml",mdxType:"TabItem"},(0,o.kt)("p",null,"Save the contents of the following files to the ",(0,o.kt)("inlineCode",{parentName:"p"},"./podinfo")," directory."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"./podinfo/namespace.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: v1\nkind: Namespace\nmetadata:\n  name: dev\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"./podinfo/podinfo-source.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: source.toolkit.fluxcd.io/v1beta2\nkind: HelmRepository\nmetadata:\n  name: podinfo\n  namespace: dev\nspec:\n  interval: 1m0s\n  url: https://stefanprodan.github.io/podinfo\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"./podinfo/podinfo-helmrelease.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: helm.toolkit.fluxcd.io/v2beta1\nkind: HelmRelease\nmetadata:\n  name: podinfo\n  namespace: dev\nspec:\n  chart:\n    spec:\n      chart: podinfo\n      reconcileStrategy: ChartVersion\n      sourceRef:\n        kind: HelmRepository\n        name: podinfo\n  interval: 1m0s\n  targetNamespace: dev\n"))))),(0,o.kt)("p",null,"The only remaining step is to import these files in the auto-generated\n",(0,o.kt)("inlineCode",{parentName:"p"},"kustomization.yaml"),". Open it up, and you should see the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="./podinfo/kustomization.yaml"',title:'"./podinfo/kustomization.yaml"'},"---\napiVersion: kustomize.config.k8s.io/v1beta1\nkind: Kustomization\nresources: [] # \ud83d\udc4b Start adding the resources you want to sync here\n")),(0,o.kt)("p",null,"Change the last line so it instead looks like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="./podinfo/kustomization.yaml"',title:'"./podinfo/kustomization.yaml"'},"---\napiVersion: kustomize.config.k8s.io/v1beta1\nkind: Kustomization\n// highlight-start\nresources:\n  - namespace.yaml\n  - podinfo-source.yaml\n  - podinfo-helmrelease.yaml\n// highlight-end\n")),(0,o.kt)("p",null,"GitOps Run should now automatically upload these manifests and install\nthem. The dashboard should show you how the resources are being\nreconciled, and when they're Ready you will be able to see podinfo\n",(0,o.kt)("a",{parentName:"p",href:"http://localhost:9898"},"here"),"."),(0,o.kt)("h2",{id:"update-your-app"},"Update Your App"),(0,o.kt)("p",null,"Now that GitOps Run is continuously watching and reconciling your\nlocal files onto your cluster, we can start modifying the resources."),(0,o.kt)("p",null,"We're going to be modifying the ",(0,o.kt)("inlineCode",{parentName:"p"},"podinfo")," we set up in the previous\nstep. Open the current ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:9898"},"podinfo")," and pay\nattention to the background color."),(0,o.kt)("p",null,"Now, open your HelmRelease file and add the values at the bottom, as\nindicated:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="./podinfo/podinfo-helmrelease.yaml"',title:'"./podinfo/podinfo-helmrelease.yaml"'},'---\napiVersion: helm.toolkit.fluxcd.io/v2beta1\nkind: HelmRelease\nmetadata:\n  name: podinfo\n  namespace: dev\nspec:\n  chart:\n    spec:\n      chart: podinfo\n      reconcileStrategy: ChartVersion\n      sourceRef:\n        kind: HelmRepository\n        name: podinfo\n  interval: 1m0s\n  targetNamespace: dev\n// highlight-start\n  values:\n    ui:\n      color: "#C32148"\n// highlight-end\n')),(0,o.kt)("p",null,"When you hit save, you'll see GitOps Run upload new files, and once\nit's reconciled the ",(0,o.kt)("inlineCode",{parentName:"p"},"podinfo")," background will have been changed to a bright red."),(0,o.kt)("h2",{id:"next-steps-gitops-mode"},"Next Steps: GitOps Mode"),(0,o.kt)("p",null,"Now that we've used this interactive environment to set up the\nresources we want, we can switch over to full GitOps mode, where Flux\nis permanently pulling from your remote Git repository."),(0,o.kt)("p",null,"Hit ",(0,o.kt)("inlineCode",{parentName:"p"},"ctrl-c")," to stop GitOps Run. It will ask you whether you want to bootstrap\nyour cluster into full GitOps mode. If you answer yes, it\nwill take you through a wizard to help you set this up. You'll need information\nsuch as the remote repository, the branch name, etc."),(0,o.kt)("p",null,"When you hit submit, it will set up the repository and branch, add\nFlux manifests, as well as the files you were just working on. From\nthis point on, you can make persistent changes by pushing them to this\nrepository."))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);