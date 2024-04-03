"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[35211],{32342:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},71125:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),o=n(86010),l=n(63735),i=n(16550),s=n(34423),u=n(20636),p=n(99200);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:n,groupId:a}),[c,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),k=(()=>{const e=s??c;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var k=n(5730);const g="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==i&&(c(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",b,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},37610:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),o=n(71125),l=n(32342);const i={title:"Weave GitOps OSS",hide_title:!0,pagination_next:"getting-started/ui"},s=void 0,u={unversionedId:"installation/weave-gitops",id:"version-0.22.0/installation/weave-gitops",title:"Weave GitOps OSS",description:"Installing Weave GitOps on your Cluster",source:"@site/versioned_docs/version-0.22.0/installation/weave-gitops.mdx",sourceDirName:"installation",slug:"/installation/weave-gitops",permalink:"/docs/0.22.0/installation/weave-gitops",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.22.0/installation/weave-gitops.mdx",tags:[],version:"0.22.0",frontMatter:{title:"Weave GitOps OSS",hide_title:!0,pagination_next:"getting-started/ui"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/0.22.0/installation/"},next:{title:"1. Explore the GitOps UI",permalink:"/docs/0.22.0/getting-started/ui"}},p={},c=[{value:"Installing Weave GitOps on your Cluster",id:"installing-weave-gitops-on-your-cluster",level:2},{value:"Before you begin",id:"before-you-begin",level:3},{value:"Install Flux",id:"install-flux",level:3},{value:"Install the <code>gitops</code> CLI",id:"install-the-gitops-cli",level:3},{value:"Deploy Weave GitOps",id:"deploy-weave-gitops",level:3},{value:"Next steps",id:"next-steps",level:2}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"installing-weave-gitops-on-your-cluster"},"Installing Weave GitOps on your Cluster"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"These are the instructions to install the OSS tier Weave GitOps. To install Enterprise\nWeave GitOps, follow the instructions ",(0,r.kt)("a",{parentName:"p",href:"../weave-gitops-enterprise"},"here"),".")),(0,r.kt)("h3",{id:"before-you-begin"},"Before you begin"),(0,r.kt)("p",null,"To follow along, you will need the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Kubernetes cluster - such as ",(0,r.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"Kind")),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"https://github.com"},"GitHub")," account and ",(0,r.kt)("a",{parentName:"li",href:"https://help.github.com/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line"},"personal access token with repo permissions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"kubectl"))),(0,r.kt)("h3",{id:"install-flux"},"Install Flux"),(0,r.kt)("p",null,"Weave GitOps is an extension to Flux and therefore requires that Flux 0.32 or\nlater has already been installed on your Kubernetes cluster. Full documentation\nis available ",(0,r.kt)("a",{parentName:"p",href:"https://fluxcd.io/docs/installation/"},"here"),"."),(0,r.kt)("p",null,"This version of Weave GitOps is tested against the following Flux releases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"0.36"),(0,r.kt)("li",{parentName:"ul"},"0.35"),(0,r.kt)("li",{parentName:"ul"},"0.34"),(0,r.kt)("li",{parentName:"ul"},"0.33"),(0,r.kt)("li",{parentName:"ul"},"0.32")),(0,r.kt)("p",null,"In this section we are going to do the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a git repository ",(0,r.kt)("inlineCode",{parentName:"li"},"fleet-infra")," in your Git account"),(0,r.kt)("li",{parentName:"ul"},"Add Flux component manifests to the repository"),(0,r.kt)("li",{parentName:"ul"},"Deploy Flux Components to your Kubernetes Cluster"),(0,r.kt)("li",{parentName:"ul"},"Configure Flux components to track the path ",(0,r.kt)("inlineCode",{parentName:"li"},"./clusters/my-cluster/")," in the repository")),(0,r.kt)("p",null,"Let's get into it... \u2728"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the flux CLI"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"brew install fluxcd/tap/flux\n")),(0,r.kt)("p",{parentName:"li"},"For other installation methods, see the relevant ",(0,r.kt)("a",{parentName:"p",href:"https://fluxcd.io/docs/installation/"},"Flux documentation"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Export your credentials (ensure your PAT has ",(0,r.kt)("inlineCode",{parentName:"p"},"repo")," scope)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"export GITHUB_TOKEN=<your-token>\nexport GITHUB_USER=<your-username>\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check your Kubernetes cluster"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"flux check --pre\n")),(0,r.kt)("p",{parentName:"li"},"The output is similar to:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\u25ba checking prerequisites\n\u2714 kubernetes 1.22.2 >=1.20.6\n\u2714 prerequisites checks passed\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install Flux onto your cluster with the ",(0,r.kt)("inlineCode",{parentName:"p"},"flux bootstrap")," command. The command\nbelow assumes the Git provider to be ",(0,r.kt)("inlineCode",{parentName:"p"},"github"),", alter this if you would rather use\n",(0,r.kt)("inlineCode",{parentName:"p"},"gitlab"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"flux bootstrap github \\\n  --owner=$GITHUB_USER \\\n  --repository=fleet-infra \\\n  --branch=main \\\n  --path=./clusters/my-cluster \\\n  --personal\n")),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Full installation documentation including how to work with other Git providers is available ",(0,r.kt)("a",{parentName:"p",href:"https://fluxcd.io/docs/installation/"},"here"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you navigate to your Git provider, you will see that the ",(0,r.kt)("inlineCode",{parentName:"p"},"fleet-infra"),"\nrepository has been created."))),(0,r.kt)("h3",{id:"install-the-gitops-cli"},"Install the ",(0,r.kt)("inlineCode",{parentName:"h3"},"gitops")," CLI"),(0,r.kt)("p",null,"Weave GitOps includes a command-line interface to help users create and manage resources."),(0,r.kt)("admonition",{title:"Installation options",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"gitops")," CLI is currently supported on Mac (x86 and Arm), and Linux - including Windows Subsystem for Linux (WSL)."),(0,r.kt)("p",{parentName:"admonition"},"Windows support is a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/weaveworks/weave-gitops/issues/663"},"planned enhancement"),".")),(0,r.kt)("p",null,"There are multiple ways to install the ",(0,r.kt)("inlineCode",{parentName:"p"},"gitops")," CLI:"),(0,r.kt)(o.Z,{groupId:"installation",default:!0,mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"curl",label:"curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --silent --location "https://github.com/weaveworks/weave-gitops/releases/download/v0.22.0/gitops-$(uname)-$(uname -m).tar.gz" | tar xz -C /tmp\nsudo mv /tmp/gitops /usr/local/bin\ngitops version\n'))),(0,r.kt)(l.Z,{value:"homebrew",label:"Homebrew",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"brew tap weaveworks/tap\nbrew install weaveworks/tap/gitops\n")))),(0,r.kt)("h3",{id:"deploy-weave-gitops"},"Deploy Weave GitOps"),(0,r.kt)("p",null,"In this section we will do the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use the GitOps CLI tool to generate ",(0,r.kt)("a",{parentName:"li",href:"https://fluxcd.io/flux/components/helm/helmreleases/"},(0,r.kt)("inlineCode",{parentName:"a"},"HelmRelease"))," and ",(0,r.kt)("a",{parentName:"li",href:"https://fluxcd.io/flux/components/source/helmrepositories/#writing-a-helmrepository-spec"},(0,r.kt)("inlineCode",{parentName:"a"},"HelmRepository"))," objects."),(0,r.kt)("li",{parentName:"ul"},"Create some login credentials to access the dashboard. This is a simple but ",(0,r.kt)("strong",{parentName:"li"},"insecure"),"\nmethod of protecting and accessing your GitOps dashboard."),(0,r.kt)("li",{parentName:"ul"},"Commit the generated yamls to our ",(0,r.kt)("inlineCode",{parentName:"li"},"fleet-infra")," repo."),(0,r.kt)("li",{parentName:"ul"},"Observe as they are synced to the cluster.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone your git repository where Flux has been bootstrapped."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/$GITHUB_USER/fleet-infra\ncd fleet-infra\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following command which will create a ",(0,r.kt)("inlineCode",{parentName:"p"},"HelmRepository")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"HelmRelease")," to deploy Weave GitOps"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'PASSWORD="<your password>"\ngitops create dashboard ww-gitops \\\n  --password=$PASSWORD \\\n  --export > ./clusters/my-cluster/weave-gitops-dashboard.yaml\n')),(0,r.kt)("admonition",{parentName:"li",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"This command stores a hash of a password.  While this is relatively safe for demo\nand testing purposes it is recommended that you look at more secure methods of storing secrets\n(such as ",(0,r.kt)("a",{parentName:"p",href:"https://fluxcd.io/docs/guides/mozilla-sops/"},"Flux's SOPS integration"),") for production systems."),(0,r.kt)("p",{parentName:"admonition"},"More guidance and alternative login methods can be found in ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.22.0/configuration/securing-access-to-the-dashboard"},"Securing access to the dashboard"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Commit and push the ",(0,r.kt)("inlineCode",{parentName:"p"},"weave-gitops-dashboard.yaml")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"fleet-infra")," repository"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'git add -A && git commit -m "Add Weave GitOps Dashboard"\ngit push\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Validate that Weave GitOps and Flux are installed. ",(0,r.kt)("em",{parentName:"p"},"Note: this wont be instantaneous,\ngive the Flux controllers a couple of minutes to pull the latest commit.")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kubectl get pods -n flux-system\n")),(0,r.kt)("p",{parentName:"li"},"You should see something similar to:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"NAME                                       READY   STATUS    RESTARTS   AGE\nhelm-controller-5bfd65cd5f-gj5sz           1/1     Running   0          10m\nkustomize-controller-6f44c8d499-s425n      1/1     Running   0          10m\nnotification-controller-844df5f694-2pfcs   1/1     Running   0          10m\nsource-controller-6b6c7bc4bb-ng96p         1/1     Running   0          10m\nww-gitops-weave-gitops-86b645c9c6-k9ftg    1/1     Running   0          5m\n")),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"There are many other things you can configure in the Weave GitOps Helm Chart.\nThe full Chart reference can be found ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.22.0/references/helm-reference"},"here"),".")))),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"In the following ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.22.0/getting-started/ui"},"Get Started document"),", we will walk you\nthrough logging into the GitOps Dashboard and deploying an application."))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);