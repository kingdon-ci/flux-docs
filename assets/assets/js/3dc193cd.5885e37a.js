"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[81558],{47889:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const i={title:"2. Deploy an Application",hide_title:!0},r="Part 2: Deploy an Application",p={unversionedId:"open-source/getting-started/deploy-OSS",id:"version-0.24.0/open-source/getting-started/deploy-OSS",title:"2. Deploy an Application",description:"Now that you have a feel for how to navigate the dashboard, let's deploy a new",source:"@site/versioned_docs/version-0.24.0/open-source/getting-started/deploy-OSS.mdx",sourceDirName:"open-source/getting-started",slug:"/open-source/getting-started/deploy-OSS",permalink:"/docs/0.24.0/open-source/getting-started/deploy-OSS",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.24.0/open-source/getting-started/deploy-OSS.mdx",tags:[],version:"0.24.0",frontMatter:{title:"2. Deploy an Application",hide_title:!0},sidebar:"docs",previous:{title:"1. Explore the GitOps UI",permalink:"/docs/0.24.0/open-source/getting-started/ui-OSS"},next:{title:"Enterprise Edition",permalink:"/docs/0.24.0/enterprise/getting-started/intro-enterprise"}},s={},l=[{value:"Deploying podinfo",id:"deploying-podinfo",level:2},{value:"View the application in Weave GitOps",id:"view-the-application-in-weave-gitops",level:2},{value:"Customize podinfo",id:"customize-podinfo",level:2},{value:"Suspend updates",id:"suspend-updates",level:2},{value:"Complete!",id:"complete",level:2}],d={toc:l};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"part-2-deploy-an-application"},"Part 2: Deploy an Application"),(0,a.kt)("p",null,"Now that you have a feel for how to navigate the dashboard, let's deploy a new\napplication to explore further. In this section we will use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stefanprodan/podinfo"},"podinfo")," sample web application."),(0,a.kt)("h2",{id:"deploying-podinfo"},"Deploying podinfo"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Clone or navigate back to your git repository where you have bootstrapped Flux, for example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/$GITHUB_USER/fleet-infra\ncd fleet-infra\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"GitRepository")," Source for podinfo"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"flux create source git podinfo \\\n  --url=https://github.com/stefanprodan/podinfo \\\n  --branch=master \\\n  --interval=30s \\\n  --export > ./clusters/my-cluster/podinfo-source.yaml\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Commit and push the ",(0,a.kt)("inlineCode",{parentName:"p"},"podinfo-source")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"fleet-infra")," repository"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'git add -A && git commit -m "Add podinfo source"\ngit push\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"kustomization")," to build and apply the podinfo manifest"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'flux create kustomization podinfo \\\n  --target-namespace=flux-system \\\n  --source=podinfo \\\n  --path="./kustomize" \\\n  --prune=true \\\n  --interval=5m \\\n  --export > ./clusters/my-cluster/podinfo-kustomization.yaml\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Commit and push the ",(0,a.kt)("inlineCode",{parentName:"p"},"podinfo-kustomization")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"fleet-infra")," repository"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'git add -A && git commit -m "Add podinfo kustomization"\ngit push\n')))),(0,a.kt)("h2",{id:"view-the-application-in-weave-gitops"},"View the application in Weave GitOps"),(0,a.kt)("p",null,"Flux will detect the updated ",(0,a.kt)("inlineCode",{parentName:"p"},"fleet-infra")," and add podinfo. If we navigate back to the ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:9001/"},"dashboard")," you should see the podinfo application appear."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Applications summary view showing Flux System, Weave GitOps and Podinfo",src:n(10836).Z,width:"3520",height:"1036"})),(0,a.kt)("p",null,"Click on podinfo and you will see details about the deployment, including that there are 2 pods available."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Applications details view for podinfo showing 2 pods",src:n(21589).Z,width:"3506",height:"1574"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Podinfo will come with the HorizontalPodAutoscaler, which uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"metrics-server"),".\nFor the purposes of this tutorial, we don't need the ",(0,a.kt)("inlineCode",{parentName:"p"},"metrics-server"),", but it will mean\nthat the HorizontalPodAutoscaler will report as ",(0,a.kt)("inlineCode",{parentName:"p"},"Not ready")," in your Dashboard."),(0,a.kt)("p",{parentName:"admonition"},"To remove this warning, install the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/metrics-server"},(0,a.kt)("inlineCode",{parentName:"a"},"metrics-server")),"\n(if you are using a ",(0,a.kt)("inlineCode",{parentName:"p"},"kind")," cluster you may need to do more to get this working),\nbut you can ingore the warning if you prefer.")),(0,a.kt)("h2",{id:"customize-podinfo"},"Customize podinfo"),(0,a.kt)("p",null,"To customize a deployment from a repository you don\u2019t control, you can use Flux in-line patches. The following example shows how to use in-line patches to change the podinfo deployment."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the ",(0,a.kt)("inlineCode",{parentName:"p"},"patches")," section as shown below to the field spec of your ",(0,a.kt)("inlineCode",{parentName:"p"},"podinfo-kustomization.yaml")," file so it looks like this:"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Expand to see Kustomization patches"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="./clusters/my-cluster/podinfo-kustomization.yaml"',title:'"./clusters/my-cluster/podinfo-kustomization.yaml"'},"---\napiVersion: kustomize.toolkit.fluxcd.io/v1beta2\nkind: Kustomization\nmetadata:\n  name: podinfo\n  namespace: flux-system\nspec:\n  interval: 60m0s\n  path: ./kustomize\n  prune: true\n  sourceRef:\n    kind: GitRepository\n    name: podinfo\n  targetNamespace: flux-system\n// highlight-start\n  patches:\n    - patch: |-\n        apiVersion: autoscaling/v2beta2\n        kind: HorizontalPodAutoscaler\n        metadata:\n          name: podinfo\n        spec:\n          minReplicas: 3\n      target:\n        name: podinfo\n        kind: HorizontalPodAutoscaler\n// highlight-end\n")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Commit and push the ",(0,a.kt)("inlineCode",{parentName:"p"},"podinfo-kustomization.yaml")," changes:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'git add -A && git commit -m "Increase podinfo minimum replicas"\ngit push\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate back to the dashboard and you will now see a newly created pod"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Applications details view for podinfo showing 3 pods",src:n(78826).Z,width:"1914",height:"940"})))),(0,a.kt)("h2",{id:"suspend-updates"},"Suspend updates"),(0,a.kt)("p",null,"Suspending updates to a kustomization allows you to directly edit objects applied from a kustomization, without your changes being reverted by the state in Git."),(0,a.kt)("p",null,"To suspend updates for a kustomization, from the details page, click on the suspend button at the top, and you should see it be suspended:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Podinfo details showing Podinfo suspended",src:n(12778).Z,width:"1914",height:"940"})),(0,a.kt)("p",null,"This shows in the applications view with a yellow warning status indicating it is now suspended"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Applications summary view showing Podinfo suspended",src:n(68160).Z,width:"1914",height:"940"})),(0,a.kt)("p",null,"To resume updates, go back to the details page, click the resume button, and after a few seconds reconsolidation will continue."),(0,a.kt)("h2",{id:"complete"},"Complete!"),(0,a.kt)("p",null,"Congratulations \ud83c\udf89\ud83c\udf89\ud83c\udf89"),(0,a.kt)("p",null,"You've now completed the getting started guide. We would welcome any and all ",(0,a.kt)("a",{parentName:"p",href:"/feedback-and-telemetry"},"feedback")," on your experience."))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?o.createElement(h,r(r({ref:t},d),{},{components:n})):o.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,r[1]=p;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10836:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/dashboard-applications-with-podinfo-027e81e3a869d1fd48ea7c361f7a537f.png"},12778:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/dashboard-podinfo-details-suspended-b086c7637a91c728c44907a8b8e123a5.png"},21589:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/dashboard-podinfo-details-a17376bc5882bb8e4d13920e97936d4a.png"},68160:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/dashboard-podinfo-suspended-7073bf28d1bb80b86797302a87983e8b.png"},78826:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/dashboard-podinfo-updated-425cb3e9f3d5f3a52479e0e5e8f7763c.png"}}]);