"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[96383,96894,74566,95206,96822,74955,96360,36466,97806,36679,24222,43526,30965,36119,24946,43319,30755,35951,29031,81303,75306,96183,28848,83632,74520,91116],{19666:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(5730);function s(e){let{children:t,fallback:n}=e;return(0,r.Z)()?a.createElement(a.Fragment,null,t?.()):n??null}},65719:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(21351);const s="tableOfContentsInline_prmo";function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return a.createElement("div",{className:s},a.createElement(r.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:o,className:"table-of-contents",linkClassName:null}))}},21351:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(87462),r=n(67294),s=n(96793);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):a.push(r)})),a}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function u(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>l(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,s.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,r.useRef)(void 0),n=c();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:r,minHeadingLevel:s,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let r=t;r<=n;r+=1)a.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:s,maxHeadingLevel:o}),l=u(i,{anchorTopOffset:n.current}),c=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===c)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function p(e){let{toc:t,className:n,linkClassName:a,isChild:s}=e;return t.length?r.createElement("ul",{className:s?void 0:n},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(p,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const d=r.memo(p);function g(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:u,minHeadingLevel:c,maxHeadingLevel:p,...g}=e;const h=(0,s.L)(),k=c??h.tableOfContents.minHeadingLevel,f=p??h.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,r.useMemo)((()=>i({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:k,maxHeadingLevel:f});return m((0,r.useMemo)((()=>{if(l&&u)return{linkClassName:l,linkActiveClassName:u,minHeadingLevel:k,maxHeadingLevel:f}}),[l,u,k,f])),r.createElement(d,(0,a.Z)({toc:b,className:n,linkClassName:l},g))}},32342:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const s="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,o),hidden:n},t)}},71125:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(87462),r=n(67294),s=n(86010),o=n(63735),i=n(16550),l=n(34423),u=n(20636),c=n(99200);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=p(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[l,u]=g({queryString:n,groupId:a}),[m,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),k=(()=>{const e=l??m;return d({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,s]),tabValues:s}}var k=n(5730);const f="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(m(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:p},o,{className:(0,s.Z)("tabs__item",b,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function C(e){const t=h(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",f)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(N,(0,a.Z)({},e,t)))}function y(e){const t=(0,k.Z)();return r.createElement(C,(0,a.Z)({key:String(t)},e))}},48783:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(88746);n(52426);const s={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function o(e){let{tiers:t}=e;return a.createElement(r.Z,{title:`This feature is a available on ${t}.`,style:s},t)}},8932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>g,default:()=>v,frontMatter:()=>d,metadata:()=>h,toc:()=>f});var a=n(87462),r=(n(67294),n(3905)),s=n(71125),o=n(32342),i=n(48783),l=n(77823),u=n(19666),c=n(65719),m=n(52552),p=n(67785);const d={title:"Managing Clusters Without Cluster API",hide_title:!0},g='Managing Clusters Without Cluster API <TierLabel tiers="Enterprise" />',h={unversionedId:"cluster-management/managing-clusters-without-capi",id:"version-0.37.0/cluster-management/managing-clusters-without-capi",title:"Managing Clusters Without Cluster API",description:"You do not need Cluster API to add your Kubernetes cluster to Weave GitOps Enterprise. The only thing you need is a secret containing a valid kubeconfig.",source:"@site/versioned_docs/version-0.37.0/cluster-management/managing-clusters-without-capi.mdx",sourceDirName:"cluster-management",slug:"/cluster-management/managing-clusters-without-capi",permalink:"/docs/0.37.0/cluster-management/managing-clusters-without-capi",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.37.0/cluster-management/managing-clusters-without-capi.mdx",tags:[],version:"0.37.0",frontMatter:{title:"Managing Clusters Without Cluster API",hide_title:!0},sidebar:"docs",previous:{title:"Cluster Management - Introduction",permalink:"/docs/0.37.0/cluster-management/cluster-management-intro"},next:{title:"Deploying CAPA with EKS",permalink:"/docs/0.37.0/cluster-management/deploying-capa-eks"}},k={};(0,r.kt)(c.Z,null);const f=[{value:"Adding kubeconfig to Your Management Cluster",id:"adding-kubeconfig-to-your-management-cluster",level:2},{value:"Add a Cluster Bootstrap Config",id:"add-a-cluster-bootstrap-config",level:2},{value:"Connect a Cluster",id:"connect-a-cluster",level:2},{value:"Create a <code>GitopsCluster</code>",id:"create-a-gitopscluster",level:2},{value:"Debugging Tip: Checking that Your kubeconfig Secret Is in Your Cluster",id:"debugging-tip-checking-that-your-kubeconfig-secret-is-in-your-cluster",level:2},{value:"Additional Resources",id:"additional-resources",level:2}],b={toc:f};function v(e){let{components:t,...c}=e;return(0,r.kt)("wrapper",(0,a.Z)({},b,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"managing-clusters-without-cluster-api-"},"Managing Clusters Without Cluster API ",(0,r.kt)(i.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,r.kt)("p",null,"You do ",(0,r.kt)("strong",{parentName:"p"},"not")," need Cluster API to add your Kubernetes cluster to Weave GitOps Enterprise. The only thing you need is a secret containing a valid ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeconfig"),"."),(0,r.kt)(s.Z,{groupId:"have-a-secret",default:!0,mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"existing-kubeconfig-secret",label:"Existing kubeconfig",mdxType:"TabItem"},(0,r.kt)("h2",{id:"adding-kubeconfig-to-your-management-cluster"},"Adding kubeconfig to Your Management Cluster"),(0,r.kt)("p",null,"If you already have a ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeconfig"),' stored in a secret in your management cluster, continue with the "Create a ',(0,r.kt)("inlineCode",{parentName:"p"},"GitopsCluster"),'" step below.'),(0,r.kt)("p",null,"If you have a kubeconfig, but it is not yet stored in your management cluster, load it into the cluster using this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl create secret generic demo-01-kubeconfig \\\n--from-file=value=./demo-01-kubeconfig\n"))),(0,r.kt)(o.Z,{value:"service-account-secret",label:"How to create a kubeconfig for a ServiceAccount",mdxType:"TabItem"},(0,r.kt)("p",null,"Here's how to create a kubeconfig secret."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new service account on the remote cluster:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n    name: demo-01\n    namespace: default\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add RBAC permissions for the service account:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see role manifests"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n    name: impersonate-user-groups\nsubjects:\n    - kind: ServiceAccount\n        name: wgesa\n        namespace: default\nroleRef:\n    kind: ClusterRole\n    name: user-groups-impersonator\n    apiGroup: rbac.authorization.k8s.io\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n    name: user-groups-impersonator\nrules:\n    - apiGroups: [""]\n        resources: ["users", "groups"]\n        verbs: ["impersonate"]\n    - apiGroups: [""]\n        resources: ["namespaces"]\n        verbs: ["get", "list"]\n'))),(0,r.kt)("p",{parentName:"li"},"This will allow WGE to introspect the cluster for available namespaces."),(0,r.kt)("p",{parentName:"li"},"Once we know what namespaces are available we can test whether the logged in user can access them via impersonation.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Retrieve the token from the service account. First, run this command to get the list of secrets of the service accounts:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get secrets --field-selector type=kubernetes.io/service-account-token\nNAME                      TYPE                                  DATA   AGE\ndefault-token-lsjz4       kubernetes.io/service-account-token   3      13d\ndemo-01-token-gqz7p       kubernetes.io/service-account-token   3      99m\n")),(0,r.kt)("p",{parentName:"li"},"(",(0,r.kt)("inlineCode",{parentName:"p"},"demo-01-token-gqz7p")," is the secret that holds the token for ",(0,r.kt)("inlineCode",{parentName:"p"},"demo-01")," service account.)"),(0,r.kt)("p",{parentName:"li"},"Then, run the following command to get the service account token:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"TOKEN=$(kubectl get secret demo-01-token-gqz7p -o jsonpath={.data.token} | base64 -d)\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a kubeconfig secret. We'll use a helper script to generate the kubeconfig, and then save it into ",(0,r.kt)("inlineCode",{parentName:"p"},"static-kubeconfig.sh"),":"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see script"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="static-kubeconfig.sh"',title:'"static-kubeconfig.sh"'},'#!/bin/bash\n\nif [[ -z "$CLUSTER_NAME" ]]; then\n        echo "Ensure CLUSTER_NAME has been set"\n        exit 1\nfi\n\nif [[ -z "$CA_CERTIFICATE" ]]; then\n        echo "Ensure CA_CERTIFICATE has been set to the path of the CA certificate"\n        exit 1\nfi\n\nif [[ -z "$ENDPOINT" ]]; then\n        echo "Ensure ENDPOINT has been set"\n        exit 1\nfi\n\nif [[ -z "$TOKEN" ]]; then\n        echo "Ensure TOKEN has been set"\n        exit 1\nfi\n\nexport CLUSTER_CA_CERTIFICATE=$(cat "$CA_CERTIFICATE" | base64)\n\nenvsubst <<EOF\napiVersion: v1\nkind: Config\nclusters:\n- name: $CLUSTER_NAME\n    cluster:\n        server: https://$ENDPOINT\n        certificate-authority-data: $CLUSTER_CA_CERTIFICATE\nusers:\n- name: $CLUSTER_NAME\n    user:\n        token: $TOKEN\ncontexts:\n- name: $CLUSTER_NAME\n    context:\n        cluster: $CLUSTER_NAME\n        user: $CLUSTER_NAME\ncurrent-context: $CLUSTER_NAME\n\nEOF\n')))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Obtain the cluster certificate (CA). How you do this depends on your cluster."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"AKS"),": Visit the ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/aks/certificate-rotation"},"Azure user docs")," for more information."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"EKS"),": Visit the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/cert-signing.html"},"EKS docs")," for more information."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"GKE"),": You can view the CA on the GCP Console: Cluster->Details->Endpoint->\u201dShow cluster certificate\u201d.")),(0,r.kt)("p",null,"You'll need to copy the contents of the certificate into the ",(0,r.kt)("inlineCode",{parentName:"p"},"ca.crt")," file used below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```bash\nCLUSTER_NAME=demo-01 \\\nCA_CERTIFICATE=ca.crt \\\nENDPOINT=<control-plane-ip-address> \\\nTOKEN=<token> ./static-kubeconfig.sh > demo-01-kubeconfig\n```\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update the following fields:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CLUSTER_NAME: insert the name of your cluster\u2014i.e., ",(0,r.kt)("inlineCode",{parentName:"li"},"demo-01")),(0,r.kt)("li",{parentName:"ul"},"ENDPOINT: add the API server endpoint i.e. ",(0,r.kt)("inlineCode",{parentName:"li"},"34.218.72.31")),(0,r.kt)("li",{parentName:"ul"},"CA_CERTIFICATE: include the path to the CA certificate file of the cluster"),(0,r.kt)("li",{parentName:"ul"},"TOKEN: add the token of the service account retrieved in the previous step"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Finally, create a secret for the generated kubeconfig in the WGE management cluster:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create secret generic demo-01-kubeconfig \\\n--from-file=value=./demo-01-kubeconfig\n")))))),(0,r.kt)("h2",{id:"add-a-cluster-bootstrap-config"},"Add a Cluster Bootstrap Config"),(0,r.kt)("p",null,"This step ensures that Flux gets installed into your cluster.\xa0Create a cluster bootstrap config as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," kubectl create secret generic my-pat --from-literal GITHUB_TOKEN=$GITHUB_TOKEN\n")),(0,r.kt)("p",null,"Download the config with:"),(0,r.kt)(u.Z,{mdxType:"BrowserOnly"},(()=>(0,r.kt)(l.Z,{className:"language-bash",mdxType:"CodeBlock"},"curl -o clusters/management/capi/bootstrap/capi-gitops-cluster-bootstrap-config.yaml"," ",window.location.protocol,"//",window.location.host,n(41674).Z))),(0,r.kt)("p",null,"Then update the ",(0,r.kt)("inlineCode",{parentName:"p"},"GITHUB_USER")," variable to point to your repository"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see full yaml"),(0,r.kt)(l.Z,{title:"clusters/management/capi/boostrap/capi-gitops-cluster-bootstrap-config.yaml",className:"language-yaml",mdxType:"CodeBlock"},m.Z)),(0,r.kt)("h2",{id:"connect-a-cluster"},"Connect a Cluster"),(0,r.kt)("p",null,"To connect your cluster, you need to add some common RBAC rules into the ",(0,r.kt)("inlineCode",{parentName:"p"},"clusters/bases")," folder. When a cluster is provisioned, by default it will reconcile all the manifests in ",(0,r.kt)("inlineCode",{parentName:"p"},"./clusters/<cluster-namespace>/<cluster-name>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"./clusters/bases"),"."),(0,r.kt)("p",null,"To display Applications and Sources in the UI, we need to give the logged-in user the permission to inspect the new cluster. Adding common RBAC rules to ",(0,r.kt)("inlineCode",{parentName:"p"},"./clusters/bases/rbac")," is an easy way to configure this."),(0,r.kt)(u.Z,{mdxType:"BrowserOnly"},(()=>(0,r.kt)(l.Z,{className:"language-bash",mdxType:"CodeBlock"},"curl -o clusters/bases/rbac/wego-admin.yaml ",window.location.protocol,"//",window.location.host,n(73184).Z))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see full template yaml"),(0,r.kt)(l.Z,{title:"clusters/bases/rbac/wego-admin.yaml",className:"language-yaml",mdxType:"CodeBlock"},p.Z)),(0,r.kt)("h2",{id:"create-a-gitopscluster"},"Create a ",(0,r.kt)("inlineCode",{parentName:"h2"},"GitopsCluster")),(0,r.kt)("p",null,"When a ",(0,r.kt)("inlineCode",{parentName:"p"},"GitopsCluster")," appears in the cluster, the Cluster Bootstrap Controller will install Flux on it and by default start reconciling the ",(0,r.kt)("inlineCode",{parentName:"p"},"./clusters/demo-01")," path in your management cluster's Git repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="./clusters/management/clusters/demo-01.yaml"',title:'"./clusters/management/clusters/demo-01.yaml"'},"apiVersion: gitops.weave.works/v1alpha1\nkind: GitopsCluster\nmetadata:\n  name: demo-01\n  namespace: default\n  # Signals that this cluster should be bootstrapped.\n  labels:\n    weave.works/capi: bootstrap\nspec:\n  secretRef:\n    name: demo-01-kubeconfig\n")),(0,r.kt)("p",null,"To use the Weave GitOps Enterprise user interface (UI) to inspect the Applications and Sources running on the new cluster, you'll need permissions. We took care of this above when we stored your RBAC rules in ",(0,r.kt)("inlineCode",{parentName:"p"},"./clusters/bases"),". In the following step, we'll create a kustomization to add these common resources onto our new cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="./clusters/demo-01/clusters-bases-kustomization.yaml"',title:'"./clusters/demo-01/clusters-bases-kustomization.yaml"'},"apiVersion: kustomize.toolkit.fluxcd.io/v1beta2\nkind: Kustomization\nmetadata:\n  creationTimestamp: null\n  name: clusters-bases-kustomization\n  namespace: flux-system\nspec:\n  interval: 10m0s\n  path: clusters/bases\n  prune: true\n  sourceRef:\n    kind: GitRepository\n    name: flux-system\n")),(0,r.kt)("p",null,"Save these two files in your Git repository, then commit and push."),(0,r.kt)("p",null,"Once Flux has reconciled the cluster, you can inspect your Flux resources via the UI!"),(0,r.kt)("h2",{id:"debugging-tip-checking-that-your-kubeconfig-secret-is-in-your-cluster"},"Debugging Tip: Checking that Your kubeconfig Secret Is in Your Cluster"),(0,r.kt)("p",null,"To test that your kubeconfig secret is correctly set up, apply the following manifest and check the logs after the job completes:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see manifest"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'---\napiVersion: batch/v1\nkind: Job\nmetadata:\n  name: kubectl\nspec:\n  ttlSecondsAfterFinished: 30\n  template:\n    spec:\n      containers:\n        - name: kubectl\n          image: bitnami/kubectl\n          args:\n            [\n              "get",\n              "pods",\n              "-n",\n              "kube-system",\n              "--kubeconfig",\n              "/etc/kubeconfig/value",\n            ]\n          volumeMounts:\n            - name: kubeconfig\n              mountPath: "/etc/kubeconfig"\n              readOnly: true\n      restartPolicy: Never\n      volumes:\n        - name: kubeconfig\n          secret:\n            secretName: demo-01-kubeconfig\n            optional: false\n'))),(0,r.kt)("p",null,"In the manifest above, ",(0,r.kt)("inlineCode",{parentName:"p"},"demo-01-kubeconfig")," is the name of the secret that contains the kubeconfig for the remote cluster."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,r.kt)("p",null,"Other documentation that you might find useful:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/access-authn-authz/authentication/#authentication-strategies"},"Authentication strategies"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/access-authn-authz/authentication/#x509-client-certs"},"X509 client certificates"),": can be used across different namespaces"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/access-authn-authz/authentication/#service-account-tokens"},"Service account tokens"),": limited to a single namespace"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.cncf.io/blog/2020/07/31/kubernetes-rbac-101-authentication/"},"Kubernetes authentication 101 (CNCF blog post)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.magalix.com/blog/kubernetes-authentication"},"Kubernetes authentication (Magalix blog post)"))))}v.isMDXComponent=!0},41674:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/capi-gitops-cluster-bootstrap-config-d9934a1e6872a5b7ee5559d2d97a3d83.yaml"},73184:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/wego-admin-c80945c1acf9908fe6e61139ef65c62e.yaml"},52552:(e,t,n)=>{n.d(t,{Z:()=>a});const a='apiVersion: capi.weave.works/v1alpha1\nkind: ClusterBootstrapConfig\nmetadata:\n  name: capi-gitops\n  namespace: default\nspec:\n  clusterSelector:\n    matchLabels:\n      weave.works/capi: bootstrap\n  jobTemplate:\n    generateName: "run-gitops-{{ .ObjectMeta.Name }}"\n    spec:\n      containers:\n        - image: ghcr.io/fluxcd/flux-cli:v0.41.0\n          name: flux-bootstrap\n          resources: {}\n          volumeMounts:\n            - name: kubeconfig\n              mountPath: "/etc/gitops"\n              readOnly: true\n          args:\n            [\n              "bootstrap",\n              "github",\n              "--kubeconfig=/etc/gitops/value",\n              "--owner=$GITHUB_USER",\n              "--repository=fleet-infra",\n              "--path=./clusters/{{ .ObjectMeta.Namespace }}/{{ .ObjectMeta.Name }}",\n            ]\n          envFrom:\n            - secretRef:\n                name: my-pat\n      restartPolicy: Never\n      volumes:\n        - name: kubeconfig\n          secret:\n            secretName: "{{ .ObjectMeta.Name }}-kubeconfig"\n'},67785:(e,t,n)=>{n.d(t,{Z:()=>a});const a='---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: wego-admin-cluster-role-binding\nsubjects:\n  - kind: User\n    name: wego-admin\n    apiGroup: rbac.authorization.k8s.io\nroleRef:\n  kind: ClusterRole\n  name: wego-admin-cluster-role\n  apiGroup: rbac.authorization.k8s.io\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: wego-admin-cluster-role\nrules:\n  - apiGroups: [""]\n    resources: ["secrets", "pods"]\n    verbs: ["get", "list"]\n  - apiGroups: ["apps"]\n    resources: ["deployments", "replicasets"]\n    verbs: ["get", "list"]\n  - apiGroups: ["kustomize.toolkit.fluxcd.io"]\n    resources: ["kustomizations"]\n    verbs: ["get", "list", "patch"]\n  - apiGroups: ["helm.toolkit.fluxcd.io"]\n    resources: ["helmreleases"]\n    verbs: ["get", "list", "patch"]\n  - apiGroups: ["source.toolkit.fluxcd.io"]\n    resources: [ "buckets", "helmcharts", "gitrepositories", "helmrepositories", "ocirepositories" ]\n    verbs: ["get", "list", "patch"]\n  - apiGroups: [""]\n    resources: ["events"]\n    verbs: ["get", "watch", "list"]\n  - apiGroups: ["pac.weave.works"]\n    resources: ["policies"]\n    verbs: ["get", "list"]\n'}}]);