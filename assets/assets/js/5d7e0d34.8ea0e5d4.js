"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[36520],{12316:(e,t,a)=>{a.d(t,{Z:()=>n});var i=a(67294),r=a(88746);a(52426);const l={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function n(e){let{tiers:t}=e;return i.createElement(r.Z,{title:`This feature is a available on ${t}.`,style:l},t)}},31100:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var i=a(87462),r=(a(67294),a(3905)),l=a(12316);const n={title:"Commit/Build Time Checks",hide_title:!0},o='Commit/Build Time Checks  <TierLabel tiers="Enterprise" />',s={unversionedId:"policy/commit-time-checks",id:"version-0.29.0/policy/commit-time-checks",title:"Commit/Build Time Checks",description:"Overview",source:"@site/versioned_docs/version-0.29.0/policy/commit-time-checks.mdx",sourceDirName:"policy",slug:"/policy/commit-time-checks",permalink:"/docs/0.29.0/policy/commit-time-checks",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.29.0/policy/commit-time-checks.mdx",tags:[],version:"0.29.0",frontMatter:{title:"Commit/Build Time Checks",hide_title:!0},sidebar:"docs",previous:{title:"Profile Releases",permalink:"/docs/0.29.0/policy/releases"},next:{title:"Progressive Delivery Using Flagger",permalink:"/docs/0.29.0/progressive-delivery/progressive-delivery-flagger-install"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Setup policies",id:"setup-policies",level:2},{value:"Supported CI/CD",id:"supported-cicd",level:2},{value:"Auto-Remediation",id:"auto-remediation",level:2},{value:"UseCase: Github",id:"usecase-github",level:2},{value:"UseCase: Gitlab",id:"usecase-gitlab",level:2},{value:"Enable Auto Remediation",id:"enable-auto-remediation",level:4},{value:"Enable Static Application Security Testing",id:"enable-static-application-security-testing",level:4},{value:"UseCase: Bitbucket",id:"usecase-bitbucket",level:2},{value:"Enable Auto Remediation",id:"enable-auto-remediation-1",level:4},{value:"Create Pipeline Report",id:"create-pipeline-report",level:4},{value:"UseCase: CircleCI",id:"usecase-circleci",level:2},{value:"Enable Auto Remediation",id:"enable-auto-remediation-2",level:4},{value:"UseCase: Azure DevOps",id:"usecase-azure-devops",level:2},{value:"Enable Auto Remediation",id:"enable-auto-remediation-3",level:4}],u={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"commitbuild-time-checks--"},"Commit/Build Time Checks  ",(0,r.kt)(l.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Weave GitOps Enterprise enables developers and operators to check policy violations early in their software development life cycle, specifically at commit and build time. Developers and operators can have Weave Policy Validator integrated in their CI tools to validate whether their code changes are violating any policies or not."),(0,r.kt)("p",null,"Weave GitOps Enterprise offer a policy engine image that can be used to perform commit/build time checks.The image can be found on Docker Hub under the name: ",(0,r.kt)("inlineCode",{parentName:"p"},"weaveworks/weave-iac-validator:v1.1"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to view of the usage options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"USAGE:\n app [global options] command [command options] [arguments...]\n\nVERSION:\n 0.0.1\n\nCOMMANDS:\n help, h  Shows a list of commands or help for one command\n\nGLOBAL OPTIONS:\n --path value                       path to scan resources from\n --helm-values-file value           path to resources helm values file\n --policies-path value              path to policies kustomization directory\n --policies-helm-values-file value  path to policies helm values file\n --git-repo-provider value          git repository provider\n --git-repo-host value              git repository host\n --git-repo-url value               git repository url\n --git-repo-branch value            git repository branch\n --git-repo-sha value               git repository commit sha\n --git-repo-token value             git repository toke\n --azure-project value              azure project name\n --sast value                       save result as gitlab sast format\n --sarif value                      save result as sarif format\n --json value                       save result as json format\n --generate-git-report              generate git report if supported (default: false)\n --remediate                        auto remediate resources if possible (default: false)\n --no-exit-error                    exit with no error (default: false)\n --help, -h                         show help (default: false)\n --version, -v                      print the version (default: false)\n"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"setup-policies"},"Setup policies"),(0,r.kt)("p",null,"Policies can be a helm chart, kustomize directory or just plain kubernetes yaml files."),(0,r.kt)("p",null,"Example of policies kustomize directory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u2514\u2500\u2500 policies\n    \u251c\u2500\u2500 kustomization.yaml\n    \u251c\u2500\u2500 minimum-replica-count.yaml\n    \u251c\u2500\u2500 privileged-mode.yaml\n    \u2514\u2500\u2500 privilege-escalation.yaml\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# kustomization.yaml\nkind: Kustomization\napiVersion: kustomize.config.k8s.io/v1beta1\nresources:\n- minimum-replica-count.yaml\n- privilege-escalation.yaml\n- privileged-mode.yaml\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"supported-cicd"},"Supported CI/CD"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"#github"},"Github")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"#github"},"Github Enterprise")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"#gitlab"},"Gitlab")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"#bitbucket"},"Bitbucket")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"#circle-ci"},"Circle CI")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"#azure-devops"},"Azure Devops"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"auto-remediation"},"Auto-Remediation"),(0,r.kt)("p",null,"Weave validator supports auto-remediation functionality which creates a pull request with suggested fixes to remediate the reported violations."),(0,r.kt)("p",null,"Supported in:"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Helm"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Kustomize"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Plain kubernetes files")),(0,r.kt)("p",null,"To enable it you need to provide ",(0,r.kt)("inlineCode",{parentName:"p"},"--remediate")," flag and ",(0,r.kt)("inlineCode",{parentName:"p"},"--git-repo-token"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"}," The token must have the permission to create a pull request.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"usecase-github"},"UseCase: Github"),(0,r.kt)("p",null,"See how to setup the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/weaveworks/weave-action"},"Github Action")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"usecase-gitlab"},"UseCase: Gitlab"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"weave:\n  image:\n    name: weaveworks/weave-iac-validator:v1.1\n  script:\n  - weave-validator --path <path to resources> --policies-path <path to policies>\n")),(0,r.kt)("h4",{id:"enable-auto-remediation"},"Enable Auto Remediation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  script:\n  - weave-validator --path <path to resources> --policies-path <path to policies> --git-repo-token $GITLAB_TOKEN --remediate\n")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"enable-static-application-security-testing"},"Enable Static Application Security Testing"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'stages:\n  - weave\n  - sast\n\nweave:\n  stage: weave\n  image:\n    name: weaveworks/weave-iac-validator:v1.1\n  script:\n  - weave-validator <path to resources> --policies-path <path to policies> --sast sast.json\n  artifacts:\n    when: on_failure\n    paths:\n    - sast.json\n\nupload_sast:\n  stage: sast\n  when: always\n  script:\n  - echo "creating sast report"\n  artifacts:\n    reports:\n      sast: sast.json\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"usecase-bitbucket"},"UseCase: Bitbucket"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"pipelines:\n  default:\n    - step:\n        name: 'Weaveworks'\n        image: weaveworks/weave-iac-validator:v1.1\n        script:\n          - weave-validator --path <path to resources> --policies-path <path to policies>\n")),(0,r.kt)("h4",{id:"enable-auto-remediation-1"},"Enable Auto Remediation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  script:\n    - weave-validator --path <path to resources> --policies-path <path to policies> --git-repo-token $TOKEN --remediate\n")),(0,r.kt)("h4",{id:"create-pipeline-report"},"Create Pipeline Report"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  script:\n    - weave-validator --path <path to resources> --policies-path <path to policies> --git-repo-token $TOKEN -generate-git-report\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"usecase-circleci"},"UseCase: CircleCI"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n  weave:\n    docker:\n    - image: weaveworks/weave-iac-validator:v1.1\n    steps:\n    - checkout\n    - run:\n        command: weave-validator --path <path to resources> --policies-path <path to policies>\n")),(0,r.kt)("h4",{id:"enable-auto-remediation-2"},"Enable Auto Remediation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"    - run:\n        command: weave-validator --path <path to resources> --policies-path <path to policies> --git-repo-token ${GITHUB_TOKEN} --remediate\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"usecase-azure-devops"},"UseCase: Azure DevOps"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"trigger:\n- <list of branches to trigger the pipeline on>\n\npool:\n  vmImage: ubuntu-latest\n\ncontainer:\n  image: weaveworks/weave-iac-validator:v1.1-azure\n\nsteps:\n- script: weave-validator --path <path to resources> --policies-path <path to policies> --git-repo-token $(TOKEN)\n")),(0,r.kt)("h4",{id:"enable-auto-remediation-3"},"Enable Auto Remediation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"steps:\n- script: weave-validator --path <path to resources> --policies-path <path to policies> --git-repo-token $(TOKEN) --remediate\n")))}m.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var i=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return a?i.createElement(h,n(n({ref:t},c),{},{components:a})):i.createElement(h,n({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,n=new Array(l);n[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,n[1]=o;for(var p=2;p<l;p++)n[p]=a[p];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);