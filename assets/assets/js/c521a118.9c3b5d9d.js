"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[809],{65719:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(21351);const i="tableOfContentsInline_prmo";function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return a.createElement("div",{className:i},a.createElement(r.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:o,className:"table-of-contents",linkClassName:null}))}},21351:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(87462),r=n(67294),i=n(96793);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):a.push(r)})),a}function s(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>l(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function u(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,r.useRef)(void 0),n=u();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:r,minHeadingLevel:i,maxHeadingLevel:o}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let r=t;r<=n;r+=1)a.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:o}),l=c(s,{anchorTopOffset:n.current}),u=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===u)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])}function p(e){let{toc:t,className:n,linkClassName:a,isChild:i}=e;return t.length?r.createElement("ul",{className:i?void 0:n},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(p,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const d=r.memo(p);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:u,maxHeadingLevel:p,...f}=e;const g=(0,i.L)(),h=u??g.tableOfContents.minHeadingLevel,k=p??g.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,r.useMemo)((()=>s({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:h,maxHeadingLevel:k});return m((0,r.useMemo)((()=>{if(l&&c)return{linkClassName:l,linkActiveClassName:c,minHeadingLevel:h,maxHeadingLevel:k}}),[l,c,h,k])),r.createElement(d,(0,a.Z)({toc:b,className:n,linkClassName:l},f))}},32342:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},71125:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(87462),r=n(67294),i=n(86010),o=n(63735),s=n(16550),l=n(34423),c=n(20636),u=n(99200);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=p(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[l,c]=f({queryString:n,groupId:a}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),h=(()=>{const e=l??m;return d({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),g(e)}),[c,g,i]),tabValues:i}}var h=n(5730);const k="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==s&&(m(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:p},o,{className:(0,i.Z)("tabs__item",b,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",k)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(N,(0,a.Z)({},e,t)))}function E(e){const t=(0,h.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},72503:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(88746);n(52426);const i={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function o(e){let{tiers:t}=e;return a.createElement(r.Z,{title:`This feature is a available on ${t}.`,style:i},t)}},31330:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>m,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),i=n(71125),o=n(32342),s=n(72503),l=n(65719);const c={title:"Managing existing clusters",hide_title:!0},u='Managing existing clusters <TierLabel tiers="Enterprise" />',m={unversionedId:"cluster-management/managing-existing-clusters",id:"version-0.22.0/cluster-management/managing-existing-clusters",title:"Managing existing clusters",description:"Managing non-capi clusters",source:"@site/versioned_docs/version-0.22.0/cluster-management/managing-existing-clusters.mdx",sourceDirName:"cluster-management",slug:"/cluster-management/managing-existing-clusters",permalink:"/docs/0.22.0/cluster-management/managing-existing-clusters",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.22.0/cluster-management/managing-existing-clusters.mdx",tags:[],version:"0.22.0",frontMatter:{title:"Managing existing clusters",hide_title:!0},sidebar:"docs",previous:{title:"Cluster API Providers",permalink:"/docs/0.22.0/cluster-management/cluster-api-providers"},next:{title:"CAPI Provider Identities",permalink:"/docs/0.22.0/cluster-management/provider-identities"}},p={};(0,r.kt)(l.Z,null);const d=[{value:"Managing non-capi clusters",id:"how-to-connect-a-cluster",level:3},{value:"How to create a kubeconfig secret using a service account",id:"how-to-create-a-kubeconfig-secret-using-a-service-account",level:3},{value:"Connect a cluster",id:"connect-a-cluster",level:3},{value:"Debugging",id:"debugging",level:2},{value:"How to test a kubeconfig secret in a cluster",id:"how-to-test-a-kubeconfig-secret-in-a-cluster",level:3}],f={toc:d};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"managing-existing-clusters-"},"Managing existing clusters ",(0,r.kt)(s.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,r.kt)("h3",{id:"how-to-connect-a-cluster"},"Managing non-capi clusters"),(0,r.kt)("p",null,"Any kubernetes cluster whether capi or not can be added to Weave Gitops Enterprise. The only thing we need is a secret containing a valid ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeconfig"),"."),(0,r.kt)(i.Z,{groupId:"have-a-secret",default:!0,mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"existing-kubeconfig-secret",label:"Existing kubeconfig",mdxType:"TabItem"},(0,r.kt)("p",null,"If you already have a ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeconfig")," stored in a secret in your management cluster, continue below to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"GitopsCluster"),"."),(0,r.kt)("p",null,"If you have a kubeconfig, you can load in into the cluster like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl create secret generic demo-01-kubeconfig \\\n--from-file=value=./demo-01-kubeconfig\n"))),(0,r.kt)(o.Z,{value:"service-account-secret",label:"Create a kubeconfig for a ServiceAccount",mdxType:"TabItem"},(0,r.kt)("h3",{id:"how-to-create-a-kubeconfig-secret-using-a-service-account"},"How to create a kubeconfig secret using a service account"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new service account on the remote cluster:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n    name: demo-01\n    namespace: default\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add RBAC permissions for the service account"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see role manifests"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n    name: impersonate-user-groups\nsubjects:\n    - kind: ServiceAccount\n        name: demo-01\n        namespace: default\nroleRef:\n    kind: ClusterRole\n    name: user-groups-impersonator\n    apiGroup: rbac.authorization.k8s.io\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n    name: user-groups-impersonator\nrules:\n    - apiGroups: [""]\n        resources: ["users", "groups"]\n        verbs: ["impersonate"]\n    - apiGroups: [""]\n        resources: ["namespaces"]\n        verbs: ["get", "list"]\n'))),(0,r.kt)("p",{parentName:"li"},"This will allow WGE to introspect the cluster for available namespaces."),(0,r.kt)("p",{parentName:"li"},"Once we know what namespaces are available we can test whether the logged in user can access them via impersonation.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get the token of the service account"),(0,r.kt)("p",{parentName:"li"},"First get the list of secrets of the service accounts by running the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get secrets --field-selector type=kubernetes.io/service-account-token\nNAME                      TYPE                                  DATA   AGE\ndefault-token-lsjz4       kubernetes.io/service-account-token   3      13d\ndemo-01-token-gqz7p       kubernetes.io/service-account-token   3      99m\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"demo-01-token-gqz7p")," is the secret that holds the token for ",(0,r.kt)("inlineCode",{parentName:"p"},"demo-01")," service account"),(0,r.kt)("p",{parentName:"li"},"To get the token of the service account run the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"TOKEN=$(kubectl get secret demo-01-token-gqz7p -o jsonpath={.data.token} | base64 -d)\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a kubeconfig secret"),(0,r.kt)("p",{parentName:"li"},"We'll use a helper script to generate the kubeconfig, save this into ",(0,r.kt)("inlineCode",{parentName:"p"},"static-kubeconfig.sh"),":"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see script"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="static-kubeconfig.sh"',title:'"static-kubeconfig.sh"'},'#!/bin/bash\n\nif [[ -z "$CLUSTER_NAME" ]]; then\n        echo "Ensure CLUSTER_NAME has been set"\n        exit 1\nfi\n\nif [[ -z "$CA_CERTIFICATE" ]]; then\n        echo "Ensure CA_CERTIFICATE has been set to the path of the CA certificate"\n        exit 1\nfi\n\nif [[ -z "$ENDPOINT" ]]; then\n        echo "Ensure ENDPOINT has been set"\n        exit 1\nfi\n\nif [[ -z "$TOKEN" ]]; then\n        echo "Ensure TOKEN has been set"\n        exit 1\nfi\n\nexport CLUSTER_CA_CERTIFICATE=$(cat "$CA_CERTIFICATE" | base64)\n\nenvsubst <<EOF\napiVersion: v1\nkind: Config\nclusters:\n- name: $CLUSTER_NAME\n    cluster:\n        server: https://$ENDPOINT\n        certificate-authority-data: $CLUSTER_CA_CERTIFICATE\nusers:\n- name: $CLUSTER_NAME\n    user:\n        token: $TOKEN\ncontexts:\n- name: $CLUSTER_NAME\n    context:\n        cluster: $CLUSTER_NAME\n        user: $CLUSTER_NAME\ncurrent-context: $CLUSTER_NAME\n\nEOF\n'))),(0,r.kt)("p",{parentName:"li"},"For the next step, the cluster certificate (CA) is needed. How you get hold of the certificate depends on the cluster. For GKE you can view it on the GCP Console: Cluster->Details->Endpoint->\u201dShow cluster certificate\u201d. You will need to copy the contents of the certificate into the ",(0,r.kt)("inlineCode",{parentName:"p"},"ca.crt")," file used below."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"CLUSTER_NAME=demo-01 \\\nCA_CERTIFICATE=ca.crt \\\nENDPOINT=<control-plane-ip-address> \\\nTOKEN=<token> ./static-kubeconfig.sh > demo-01-kubeconfig\n")),(0,r.kt)("p",{parentName:"li"},"Replace the following:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CLUSTER_NAME: the name of your cluster i.e. ",(0,r.kt)("inlineCode",{parentName:"li"},"demo-01")),(0,r.kt)("li",{parentName:"ul"},"ENDPOINT: the API server endpoint i.e. ",(0,r.kt)("inlineCode",{parentName:"li"},"34.218.72.31")),(0,r.kt)("li",{parentName:"ul"},"CA_CERTIFICATE: path to the CA certificate file of the cluster"),(0,r.kt)("li",{parentName:"ul"},"TOKEN: the token of the service account retrieved in the previous step")),(0,r.kt)("p",{parentName:"li"},"Finally create a secret for the generated kubeconfig:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl create secret generic demo-01-kubeconfig \\\n--from-file=value=./demo-01-kubeconfig\n")))))),(0,r.kt)("h3",{id:"connect-a-cluster"},"Connect a cluster"),(0,r.kt)("admonition",{title:"Before you start!",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Make sure you've"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Added some common RBAC rules into the ",(0,r.kt)("inlineCode",{parentName:"li"},"clusters/bases")," folder, as described in ",(0,r.kt)("a",{parentName:"li",href:"/docs/0.22.0/cluster-management/getting-started"},"Getting started"),"."),(0,r.kt)("li",{parentName:"ol"},"Configured the cluster bootstrap controller as described in ",(0,r.kt)("a",{parentName:"li",href:"/docs/0.22.0/cluster-management/getting-started"},"Getting started"),"."))),(0,r.kt)("p",null,"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"GitopsCluster")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="./clusters/management/clusters/demo-01.yaml"',title:'"./clusters/management/clusters/demo-01.yaml"'},"apiVersion: gitops.weave.works/v1alpha1\nkind: GitopsCluster\nmetadata:\n  name: demo-01\n  namespace: default\n  # Signals that this cluster should be bootstrapped.\n  labels:\n    weave.works/capi: bootstrap\nspec:\n  secretRef:\n    name: demo-01-kubeconfig\n")),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"GitopsCluster")," appears in the cluster, the Cluster Bootstrap Controller will install flux on it and by default start reconciling the ",(0,r.kt)("inlineCode",{parentName:"p"},"./clusters/demo-01")," path in your management cluster's git repository. To inspect the Applications and Sources running on the new cluster we need to give permissions to the user accessing the UI. Common RBAC rules like this should be stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"./clusters/bases"),". Here we create a kustomziation to add these common resources onto our new cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="./clusters/demo-01/clusters-bases-kustomization.yaml"',title:'"./clusters/demo-01/clusters-bases-kustomization.yaml"'},"apiVersion: kustomize.toolkit.fluxcd.io/v1beta2\nkind: Kustomization\nmetadata:\n  creationTimestamp: null\n  name: clusters-bases-kustomization\n  namespace: flux-system\nspec:\n  interval: 10m0s\n  path: clusters/bases\n  prune: true\n  sourceRef:\n    kind: GitRepository\n    name: flux-system\n")),(0,r.kt)("p",null,"Save these 2 files into your git repository. Commit and push."),(0,r.kt)("p",null,"Once flux has reconciled the cluster you can inspect your flux resources via the UI!"),(0,r.kt)("h2",{id:"debugging"},"Debugging"),(0,r.kt)("h3",{id:"how-to-test-a-kubeconfig-secret-in-a-cluster"},"How to test a kubeconfig secret in a cluster"),(0,r.kt)("p",null,"To test a kubeconfig secret has been correctly setup apply the following manifest and check the logs after the job completes:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see manifest"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'---\napiVersion: batch/v1\nkind: Job\nmetadata:\n  name: kubectl\nspec:\n  ttlSecondsAfterFinished: 30\n  template:\n    spec:\n      containers:\n        - name: kubectl\n          image: bitnami/kubectl\n          args:\n            [\n              "get",\n              "pods",\n              "-n",\n              "kube-system",\n              "--kubeconfig",\n              "/etc/kubeconfig/value",\n            ]\n          volumeMounts:\n            - name: kubeconfig\n              mountPath: "/etc/kubeconfig"\n              readOnly: true\n      restartPolicy: Never\n      volumes:\n        - name: kubeconfig\n          secret:\n            secretName: demo-01-kubeconfig\n            optional: false\n'))),(0,r.kt)("p",null,"In the manifest above ",(0,r.kt)("inlineCode",{parentName:"p"},"demo-01-kubeconfig")," is the name of the secret that contains the kubeconfig for the remote cluster."),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"background"},"Background"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/access-authn-authz/authentication/#authentication-strategies"},"Authentication strategies"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/access-authn-authz/authentication/#x509-client-certs"},"X509 client certificates"),": can be used across different namespaces"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/access-authn-authz/authentication/#service-account-tokens"},"Service account tokens"),": limited to a single namespace"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.cncf.io/blog/2020/07/31/kubernetes-rbac-101-authentication/"},"Kubernetes authentication 101 (CNCF blog post)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.magalix.com/blog/kubernetes-authentication"},"Kubernetes authentication (Magalix blog post)"))))}g.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);