"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[95205],{40063:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),o=a(88746);a(52426);const r={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function i(e){let{tiers:t}=e;return n.createElement(o.Z,{title:`This feature is a available on ${t}.`,style:r},t)}},69334:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),o=(a(67294),a(3905)),r=a(40063);const i={title:"Manual Approval for Progressive Delivery Deployments",hide_title:!0},l=void 0,s={unversionedId:"progressive-delivery/flagger-manual-gating",id:"version-0.28.0/progressive-delivery/flagger-manual-gating",title:"Manual Approval for Progressive Delivery Deployments",description:"{frontMatter.title}",source:"@site/versioned_docs/version-0.28.0/progressive-delivery/flagger-manual-gating.mdx",sourceDirName:"progressive-delivery",slug:"/progressive-delivery/flagger-manual-gating",permalink:"/docs/0.28.0/progressive-delivery/flagger-manual-gating",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.28.0/progressive-delivery/flagger-manual-gating.mdx",tags:[],version:"0.28.0",frontMatter:{title:"Manual Approval for Progressive Delivery Deployments",hide_title:!0},sidebar:"docs",previous:{title:"Progressive Delivery Using Flagger",permalink:"/docs/0.28.0/progressive-delivery/progressive-delivery-flagger-install"},next:{title:"Overview",permalink:"/docs/0.28.0/secrets/intro"}},p={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Basic Introduction to Webhooks and Gating",id:"basic-introduction-to-webhooks-and-gating",level:2},{value:"Use Flagger&#39;s Load Tester to Manually Gate a Promotion",id:"use-flaggers-load-tester-to-manually-gate-a-promotion",level:2},{value:"Configure the <code>confirm-promotion</code> Webhook",id:"configure-the-confirm-promotion-webhook",level:3},{value:"Deploy a New Version of Your Application",id:"deploy-a-new-version-of-your-application",level:3},{value:"Wait for the Canary Analysis to Complete",id:"wait-for-the-canary-analysis-to-complete",level:3},{value:"Open the Gate",id:"open-the-gate",level:3}],g={toc:c};function d(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,n.Z)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",null,i.title," ",(0,o.kt)(r.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,o.kt)("p",null,"To help you understand the state of progressive delivery updates to your applications, Weave GitOps Enterprise uses ",(0,o.kt)("a",{parentName:"p",href:"https://flagger.app"},"Flagger"),"\u2014part of the Flux family of open source projects. WGE's Delivery view shows all of your deployed ",(0,o.kt)("inlineCode",{parentName:"p"},"Canary")," objects and rollout progress."),(0,o.kt)("p",null,"By default, Flagger automatically promotes a new version of an application whenever it passes the defined checks of an analysis phase. However, you can also configure ",(0,o.kt)("a",{parentName:"p",href:"https://docs.flagger.app/usage/webhooks"},"webhooks")," to enable manual approvals of rollout stages."),(0,o.kt)("p",null,"This guide shows you how to manually gate a progressive delivery promotion with Flagger by using the in-built load tester."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Basic knowledge of ",(0,o.kt)("a",{parentName:"li",href:"https://flagger.app"},"Flagger")),(0,o.kt)("li",{parentName:"ul"},"An existing ",(0,o.kt)("inlineCode",{parentName:"li"},"Canary")," object and target deployment"),(0,o.kt)("li",{parentName:"ul"},"Flagger's load tester ",(0,o.kt)("a",{parentName:"li",href:"https://docs.flagger.app/usage/webhooks#load-testing"},"installed"))),(0,o.kt)("h2",{id:"basic-introduction-to-webhooks-and-gating"},"Basic Introduction to Webhooks and Gating"),(0,o.kt)("p",null,"You can configure Flagger to work with several types of hooks that will be called at\ngiven stages during a progressive delivery rollout. Some of these hooks allow you to manually\ngate whether a rollout proceeds at certain points:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Before scaling up a new deployment and canary analysis begins with ",(0,o.kt)("inlineCode",{parentName:"li"},"confirm-rollout"),". "),(0,o.kt)("li",{parentName:"ul"},"Before increasing traffic weight with ",(0,o.kt)("inlineCode",{parentName:"li"},"confirm-traffic-increase"),"."),(0,o.kt)("li",{parentName:"ul"},"Before promoting a new version after successful canary analysis with ",(0,o.kt)("inlineCode",{parentName:"li"},"confirm-promotion"),".")),(0,o.kt)("p",null,"Any URL can serve as a webhook target. It will approve if a ",(0,o.kt)("inlineCode",{parentName:"p"},"200 OK")," status code is returned, and halt if ",(0,o.kt)("inlineCode",{parentName:"p"},"403 Forbidden"),"."),(0,o.kt)("p",null,"The webhook will receive a JSON payload that can be unmarshaled as\n",(0,o.kt)("inlineCode",{parentName:"p"},"CanaryWebhookPayload"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type CanaryWebhookPayload struct {\n    // Name of the canary\n    Name string `json:"name"`\n\n\f   // Namespace of the canary\n    Namespace string `json:"namespace"`\n\n    // Phase of the canary analysis\n    Phase CanaryPhase `json:"phase"`\n\n    // Metadata (key-value pairs) for this webhook\n    Metadata map[string]string `json:"metadata,omitempty"`\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.flagger.app/usage/webhooks"},"Flagger documentation")," provides more information about webhooks."),(0,o.kt)("h2",{id:"use-flaggers-load-tester-to-manually-gate-a-promotion"},"Use Flagger's Load Tester to Manually Gate a Promotion"),(0,o.kt)("p",null,"To enable manual approval of a promotion, configure the\n",(0,o.kt)("inlineCode",{parentName:"p"},"confirm-promotion")," webhook. This will call a particular gate provided through\nFlagger's load tester, and is an easy way to experiment using Flagger's included components. "),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"We strongly recommend that you DO NOT USE the load tester for manual gating in a production environment. It lacks auth, so anyone with cluster access could open and close it. It also lacks storage, so all gates would close upon a restart. Instead, configure these webhooks for appropriate integration with a tool of your choice, such Jira, Slack, Jenkins, etc.")),(0,o.kt)("h3",{id:"configure-the-confirm-promotion-webhook"},"Configure the ",(0,o.kt)("inlineCode",{parentName:"h3"},"confirm-promotion")," Webhook"),(0,o.kt)("p",null,"In your canary object, add the following in the ",(0,o.kt)("inlineCode",{parentName:"p"},"analysis")," section:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'  analysis:\n    webhooks:\n      - name: "ask for confirmation"\n        type: confirm-promotion\n        url: http://flagger-loadtester.test/gate/check\n')),(0,o.kt)("p",null,"This gate is closed by default."),(0,o.kt)("h3",{id:"deploy-a-new-version-of-your-application"},"Deploy a New Version of Your Application"),(0,o.kt)("p",null,"Trigger a Canary rollout by updating your target deployment/daemonset\u2014for\nexample, by bumping the container image tag. A full list of ways to trigger\na rollout is available ",(0,o.kt)("a",{parentName:"p",href:"https://docs.flagger.app/faq#how-to-retry-a-failed-release"},"here"),"."),(0,o.kt)("p",null,"Weave GitOps Enterprise (WGE)'s Applications > Delivery view enables you to watch the progression of a canary:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Podinfo Canary progressing",src:a(24526).Z,width:"4030",height:"1200"})),(0,o.kt)("h3",{id:"wait-for-the-canary-analysis-to-complete"},"Wait for the Canary Analysis to Complete"),(0,o.kt)("p",null,"Once the canary analysis has successfully completed, Flagger will call the\n",(0,o.kt)("inlineCode",{parentName:"p"},"confirm-promotion")," webhook and change status to ",(0,o.kt)("inlineCode",{parentName:"p"},"WaitingPromotion"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Podinfo Canary showing Waiting Promotion - table view",src:a(52899).Z,width:"3324",height:"1226"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Podinfo Canary showing Waiting Promotion - details view",src:a(45601).Z,width:"3324",height:"1998"})),(0,o.kt)("h3",{id:"open-the-gate"},"Open the Gate"),(0,o.kt)("p",null,"To open the gate and confirm that you approve promotion of the new\nversion of your application, exec into the load tester\ncontainer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ kubectl -n test exec -it flagger-loadtester-xxxx-xxxx sh\n\n# to open\n> curl -d \'{"name": "app","namespace":"test"}\' http://localhost:8080/gate/open\n')),(0,o.kt)("p",null,"Flagger will now promote the canary version to the primary and\ncomplete the progressive delivery rollout. \ud83c\udf89"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Podinfo Canary succeeded - full events history",src:a(55107).Z,width:"3444",height:"2614"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Podinfo Canary succeeded - promoting",src:a(65968).Z,width:"3436",height:"1204"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Podinfo Canary succeeded - promoted",src:a(76895).Z,width:"3702",height:"1204"})),(0,o.kt)("p",null,"To manually close the gate again, issue this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'> curl -d \'{"name": "app","namespace":"test"}\' http://localhost:8080/gate/close\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"References:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://docs.flagger.app/usage/webhooks#manual-gating"},"Official Flagger documentation")," informs this guide.")))}d.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(a),u=o,m=g["".concat(s,".").concat(u)]||g[u]||d[u]||r;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},45601:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pd-details-waiting-659c32f7d7d65b8d3867c93e1b178514.png"},55107:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pd-events-gate-passed-7c38c83f2dce819ad26892b37a8c94d5.png"},24526:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pd-table-progressing-5eddde7c294e1f239ee1b1e910a9b042.png"},65968:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pd-table-promoting-707e1f794204cdcbcd09c725b9676fc9.png"},76895:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pd-table-succeeded-5898669476fdfe4ec7a68d8c09e5d0d7.png"},52899:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pd-table-waiting-0165200f4b228d8f5fa2d57449724fd0.png"}}]);