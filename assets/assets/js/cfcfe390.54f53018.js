"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[43914],{65729:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var n=o(87462),a=(o(67294),o(3905));const i={title:"Step 3 - Deploy an Application",hide_title:!0},p="Step 3: Deploy an Application",r={unversionedId:"open-source/getting-started/deploy-OSS",id:"version-0.38.0/open-source/getting-started/deploy-OSS",title:"Step 3 - Deploy an Application",description:"Now that you have a feel for how to navigate the dashboard, let's deploy a new",source:"@site/versioned_docs/version-0.38.0/open-source/getting-started/deploy-OSS.mdx",sourceDirName:"open-source/getting-started",slug:"/open-source/getting-started/deploy-OSS",permalink:"/docs/open-source/getting-started/deploy-OSS",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.38.0/open-source/getting-started/deploy-OSS.mdx",tags:[],version:"0.38.0",frontMatter:{title:"Step 3 - Deploy an Application",hide_title:!0},sidebar:"docs",previous:{title:"Step 2 - Explore the Open Source UI",permalink:"/docs/open-source/getting-started/ui-OSS"},next:{title:"AWS Marketplace",permalink:"/docs/open-source/getting-started/aws-marketplace"}},l={},s=[{value:"Deploying podinfo",id:"deploying-podinfo",level:2},{value:"View the Application in Weave GitOps",id:"view-the-application-in-weave-gitops",level:2},{value:"Customize podinfo",id:"customize-podinfo",level:2},{value:"Suspend updates",id:"suspend-updates",level:2},{value:"Delete Podinfo",id:"delete-podinfo",level:2},{value:"Complete!",id:"complete",level:2}],d={toc:s};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"step-3-deploy-an-application"},"Step 3: Deploy an Application"),(0,a.kt)("p",null,"Now that you have a feel for how to navigate the dashboard, let's deploy a new\napplication. In this section we will use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stefanprodan/podinfo"},"podinfo")," as our sample web application."),(0,a.kt)("h2",{id:"deploying-podinfo"},"Deploying podinfo"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Clone or navigate back to your Git repository where you have bootstrapped Flux. For example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/$GITHUB_USER/fleet-infra\ncd fleet-infra\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"GitRepository")," Source for podinfo. This will allow you to use different authentication methods for different repositories."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"flux create source git podinfo \\\n  --url=https://github.com/stefanprodan/podinfo \\\n  --branch=master \\\n  --interval=30s \\\n  --export > ./clusters/management/podinfo-source.yaml\n")))),(0,a.kt)("p",null,"More information about ",(0,a.kt)("inlineCode",{parentName:"p"},"GitRepository")," is available ",(0,a.kt)("a",{parentName:"p",href:"https://fluxcd.io/flux/components/source/gitrepositories/"},"here"),". "),(0,a.kt)("p",null,"If you get stuck here, try the ",(0,a.kt)("inlineCode",{parentName:"p"},"ls")," command to list your files and directories. If that doesn\u2019t work, try ",(0,a.kt)("inlineCode",{parentName:"p"},"ls -l ./clusters"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Commit and push the ",(0,a.kt)("inlineCode",{parentName:"p"},"podinfo-source")," to your ",(0,a.kt)("inlineCode",{parentName:"p"},"fleet-infra")," repository"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'git add -A && git commit -m "Add podinfo source"\ngit push\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"kustomization")," to build and apply the podinfo manifest"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'flux create kustomization podinfo \\\n  --target-namespace=flux-system \\\n  --source=podinfo \\\n  --path="./kustomize" \\\n  --prune=true \\\n  --interval=5m \\\n  --export > ./clusters/management/podinfo-kustomization.yaml\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Commit and push the ",(0,a.kt)("inlineCode",{parentName:"p"},"podinfo-kustomization")," to your ",(0,a.kt)("inlineCode",{parentName:"p"},"fleet-infra")," repository"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'git add -A && git commit -m "Add podinfo kustomization"\ngit push\n')))),(0,a.kt)("h2",{id:"view-the-application-in-weave-gitops"},"View the Application in Weave GitOps"),(0,a.kt)("p",null,"Flux will detect the updated ",(0,a.kt)("inlineCode",{parentName:"p"},"fleet-infra")," and add podinfo. Navigate back to the ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:9001/"},"dashboard")," to make sure that the podinfo application appears."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Applications summary view showing Flux System, Weave GitOps and Podinfo",src:o(10836).Z,width:"3520",height:"1036"})),(0,a.kt)("p",null,"Click on podinfo to find details about the deployment. There should be two pods available."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Applications details view for podinfo showing 2 pods",src:o(21589).Z,width:"3506",height:"1574"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Podinfo comes with a HorizontalPodAutoscaler, which uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"metrics-server"),".\nWe don't use the ",(0,a.kt)("inlineCode",{parentName:"p"},"metrics-server")," in this tutorial, but note that it's the reason why HorizontalPodAutoscaler will report as ",(0,a.kt)("inlineCode",{parentName:"p"},"Not ready")," in your dashboard. We recommend ignoring the warning.")),(0,a.kt)("h2",{id:"customize-podinfo"},"Customize podinfo"),(0,a.kt)("p",null,"To customize a deployment from a repository you don\u2019t control, you can use Flux in-line patches. The following example shows how to use in-line patches to change the podinfo deployment."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the ",(0,a.kt)("inlineCode",{parentName:"p"},"patches")," section as shown below to the field spec of your ",(0,a.kt)("inlineCode",{parentName:"p"},"podinfo-kustomization.yaml")," file so it looks like this:"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Expand to see Kustomization patches"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="./clusters/management/podinfo-kustomization.yaml"',title:'"./clusters/management/podinfo-kustomization.yaml"'},"---\napiVersion: kustomize.toolkit.fluxcd.io/v1beta2\nkind: Kustomization\nmetadata:\n  name: podinfo\n  namespace: flux-system\nspec:\n  interval: 60m0s\n  path: ./kustomize\n  prune: true\n  sourceRef:\n    kind: GitRepository\n    name: podinfo\n  targetNamespace: flux-system\n// highlight-start\n  patches:\n    - patch: |-\n        apiVersion: autoscaling/v2beta2\n        kind: HorizontalPodAutoscaler\n        metadata:\n          name: podinfo\n        spec:\n          minReplicas: 3\n      target:\n        name: podinfo\n        kind: HorizontalPodAutoscaler\n// highlight-end\n")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Commit and push the ",(0,a.kt)("inlineCode",{parentName:"p"},"podinfo-kustomization.yaml")," changes:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'git add -A && git commit -m "Increase podinfo minimum replicas"\ngit push\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate back to the dashboard. You should see a newly created pod:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Applications details view for podinfo showing 3 pods",src:o(78826).Z,width:"1914",height:"940"})))),(0,a.kt)("h2",{id:"suspend-updates"},"Suspend updates"),(0,a.kt)("p",null,"Suspending updates to a kustomization allows you to directly edit objects applied from a kustomization, without your changes being reverted by the state in Git."),(0,a.kt)("p",null,"To suspend updates for a kustomization, from the details page, click on the suspend button at the top, and you should see it be suspended:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Podinfo details showing Podinfo suspended",src:o(12778).Z,width:"1914",height:"940"})),(0,a.kt)("p",null,"This shows in the applications view with a yellow warning status indicating it is now suspended"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Applications summary view showing Podinfo suspended",src:o(68160).Z,width:"1914",height:"940"})),(0,a.kt)("p",null,"To resume updates, go back to the details page, click the resume button, and after a few seconds reconsolidation will continue."),(0,a.kt)("h2",{id:"delete-podinfo"},"Delete Podinfo"),(0,a.kt)("p",null,"To delete Podinfo in the GitOps way, run this command from the root of your working directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  rm ./clusters/management/podinfo-kustomization.yaml\n  rm ./clusters/management/podinfo-source.yaml\n  git add -A && git commit -m "Remove podinfo kustomization and source"\n  git push\n')),(0,a.kt)("h2",{id:"complete"},"Complete!"),(0,a.kt)("p",null,"Congratulations \ud83c\udf89\ud83c\udf89\ud83c\udf89"),(0,a.kt)("p",null,"You've now completed the getting started guide. We welcome any and all ",(0,a.kt)("a",{parentName:"p",href:"/feedback-and-telemetry"},"feedback"),", so please let us know how we could have made your experience better."))}u.isMDXComponent=!0},3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>f});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):p(p({},t),e)),o},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=s(o),c=a,f=u["".concat(l,".").concat(c)]||u[c]||m[c]||i;return o?n.createElement(f,p(p({ref:t},d),{},{components:o})):n.createElement(f,p({ref:t},d))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,p=new Array(i);p[0]=c;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[u]="string"==typeof e?e:a,p[1]=r;for(var s=2;s<i;s++)p[s]=o[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},10836:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/dashboard-applications-with-podinfo-027e81e3a869d1fd48ea7c361f7a537f.png"},12778:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/dashboard-podinfo-details-suspended-b086c7637a91c728c44907a8b8e123a5.png"},21589:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/dashboard-podinfo-details-a17376bc5882bb8e4d13920e97936d4a.png"},68160:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/dashboard-podinfo-suspended-7073bf28d1bb80b86797302a87983e8b.png"},78826:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/dashboard-podinfo-updated-425cb3e9f3d5f3a52479e0e5e8f7763c.png"}}]);