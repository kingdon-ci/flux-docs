"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[85490],{8971:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(67294),r=t(88746);t(52426);const i={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function l(e){let{tiers:n}=e;return a.createElement(r.Z,{title:`This feature is a available on ${n}.`,style:i},n)}},99087:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=t(87462),r=(t(67294),t(3905)),i=t(8971);const l={title:"Progressive Delivery using Flagger",hide_title:!0},s=void 0,o={unversionedId:"guides/delivery",id:"version-0.26.0/guides/delivery",title:"Progressive Delivery using Flagger",description:"{frontMatter.title}",source:"@site/versioned_docs/version-0.26.0/guides/delivery.mdx",sourceDirName:"guides",slug:"/guides/delivery",permalink:"/docs/0.26.0/guides/delivery",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.26.0/guides/delivery.mdx",tags:[],version:"0.26.0",frontMatter:{title:"Progressive Delivery using Flagger",hide_title:!0},sidebar:"docs",previous:{title:"Using Terraform templates",permalink:"/docs/0.26.0/guides/using-terraform-templates"},next:{title:"Manual Approval for Progressive Delivery Deployments",permalink:"/docs/0.26.0/guides/flagger-manual-gating"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installing Linkerd using Flux",id:"installing-linkerd-using-flux",level:2},{value:"Installing Flagger using Flux",id:"installing-flagger-using-flux",level:2},{value:"Deploy a canary release",id:"deploy-a-canary-release",level:2},{value:"Summary",id:"summary",level:2}],d={toc:p};function u(e){let{components:n,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",null,l.title," ",(0,r.kt)(i.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.flagger.app/"},"Flagger")," is a progressive delivery operator for Kubernetes. It is\ndesigned to reduce risks when introducing new software versions and to improve time to delivery\nthrough automating production releases. Weave GitOps Enterprise's UI allows you to view the state of\nthese progressive delivery rollouts, and how they are configured using Flagger's\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.flagger.app/usage/how-it-works#canary-resource"},"canary")," object, through the\nApplications > Delivery view."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Applications Delivery view",src:t(2611).Z,width:"3496",height:"1324"})),(0,r.kt)("p",null,"This guide uses Flux manifests to install Flagger and Linkerd. Flagger can work with a number of\nservice meshes and ingress controllers, to support various progressive delivery ",(0,r.kt)("a",{parentName:"p",href:"https://docs.flagger.app/usage/deployment-strategies"},"deployment\nstrategies"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"canary release icon",src:t(22962).Z,width:"21",height:"17"}),"  ",(0,r.kt)("strong",{parentName:"p"},"Canary Release")," - where traffic is gradually shifted to\nthe new version and its performance is assessed. Based on this analysis of KPIs a release is either\npromoted or the update abandoned.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"a b testing icon",src:t(58035).Z,width:"18",height:"22"}),"  ",(0,r.kt)("strong",{parentName:"p"},"A/B Testing")," - uses HTTP headers or cookies to ensure users\nstay on the same version of an application during the canary analysis.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"blue green testing icon",src:t(78812).Z,width:"22",height:"12"}),"  ",(0,r.kt)("strong",{parentName:"p"},"Blue/Green")," - where tests are run against the\nnew version, and if successful, traffic is then switched from the current service.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"blue green mirroring icon",src:t(19326).Z,width:"22",height:"12"}),"  ",(0,r.kt)("strong",{parentName:"p"},"Blue/Green with Traffic Mirroring")," - sends\ncopies of incoming requests to the new version. The user receives the response from the current\nservice and the other is discarded. The new version is promoted only if metrics are healthy."),(0,r.kt)("p",null,"Using Flux allows us to manage our cluster applications in a declarative way through changes in a\nGit repository."),(0,r.kt)("p",null,"In this guide, we will walk you through a full end-to-end scenario where you will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#installing-linkerd-using-flux"},"Install the Linkerd service mesh")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#installing-flagger-using-flux"},"Install Flagger")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#deploy-a-canary-release"},"Deploy a sample application using a canary release strategy based on metrics provided through\nLinkerd's in-built Prometheus instance"))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This guide assumes you already have a Kubernetes cluster running and have bootstrapped Flux. To\napply the manifests listed in this guide, you will need to commit them to a repository being\nreconciled with Flux. For help installing Flux, you can follow their ",(0,r.kt)("a",{parentName:"li",href:"https://fluxcd.io/docs/get-started/"},"getting\nstarted")," documentation."),(0,r.kt)("li",{parentName:"ul"},"Flagger requires the ",(0,r.kt)("inlineCode",{parentName:"li"},"autoscaling/v2")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"autoscaling/v2beta2")," API to be installed on the cluster, you can use ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl\napi-resources")," to check which API versions are supported."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://smallstep.com/cli/"},"step")," CLI installed to generate certificates in order to support\nmTLS connections.")),(0,r.kt)("h2",{id:"installing-linkerd-using-flux"},"Installing Linkerd using Flux"),(0,r.kt)("p",null,"For the Linkerd installation, a Kustomization file will be used. This will allow us to specify the\ninstallation order and the default namespace for the installed resources but also to easily generate\nSecrets from certificate files via the use of a ",(0,r.kt)("inlineCode",{parentName:"p"},"secretGenerator"),"."),(0,r.kt)("p",null,"In order to support mTLS connections between meshed pods, Linkerd requires a trust anchor\ncertificate and an issuer certificate with its corresponding key. These certificates are\nautomatically created when the ",(0,r.kt)("inlineCode",{parentName:"p"},"linkerd install")," command is used but when using a Helm chart to\ninstall Linkerd, these certificates need to be provided. The ",(0,r.kt)("inlineCode",{parentName:"p"},"step")," CLI allows us to generate these\ncertificates."),(0,r.kt)("p",null,"To generate the trust anchor certificate run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"step certificate create root.linkerd.cluster.local ca.crt ca.key \\\n--profile root-ca --no-password --insecure\n")),(0,r.kt)("p",null,"To generate the issuer certificate run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"step certificate create identity.linkerd.cluster.local issuer.crt issuer.key \\\n--profile intermediate-ca --not-after 8760h --no-password --insecure \\\n--ca ca.crt --ca-key ca.key\n")),(0,r.kt)("p",null,"Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"ca.crt"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"issuer.crt")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"issuer.key")," files to the cluster repository under a ",(0,r.kt)("inlineCode",{parentName:"p"},"linkerd"),"\ndirectory."),(0,r.kt)("p",null,"To control where the Linkerd components get installed, we need to add a Namespace resource:"),(0,r.kt)("p",null,"Now let's add the resources for Linkerd components under the ",(0,r.kt)("inlineCode",{parentName:"p"},"./linkerd"),"\ndirectory. These are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"Namespace")," resource to control where the components are installed"),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"HelmRepository")," resource to make the Linkerd helm repo available on the\ncluster"),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"HelmRelease")," resource to install the latest version of Linkerd from that\n",(0,r.kt)("inlineCode",{parentName:"li"},"HelmRepository"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see the Linkerd manifests"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="linkerd/namespace.yaml"',title:'"linkerd/namespace.yaml"'},"---\napiVersion: v1\nkind: Namespace\nmetadata:\n  name: linkerd\n  labels:\n    config.linkerd.io/admission-webhooks: disabled\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="linkerd/source.yaml"',title:'"linkerd/source.yaml"'},"---\napiVersion: source.toolkit.fluxcd.io/v1beta2\nkind: HelmRepository\nmetadata:\n  name: linkerd\nspec:\n  interval: 1h\n  url: https://helm.linkerd.io/stable\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The value for the ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.values.identity.issuer.crtExpiry")," field below depends on the parameter value\nused during the creation of the issuer certificate previously. In this example, it should be set to\n1 year from the certificate creation.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="linkerd/releases.yaml" {35}',title:'"linkerd/releases.yaml"',"{35}":!0},'---\napiVersion: helm.toolkit.fluxcd.io/v2beta1\nkind: HelmRelease\nmetadata:\n  name: linkerd\nspec:\n  interval: 10m\n  chart:\n    spec:\n      chart: linkerd2\n      reconcileStrategy: ChartVersion\n      sourceRef:\n        kind: HelmRepository\n        name: linkerd\n  install:\n    crds: Create\n  upgrade:\n    crds: CreateReplace\n  valuesFrom:\n    - kind: Secret\n      name: linkerd-certs\n      valuesKey: ca.crt\n      targetPath: identityTrustAnchorsPEM\n    - kind: Secret\n      name: linkerd-certs\n      valuesKey: issuer.crt\n      targetPath: identity.issuer.tls.crtPEM\n    - kind: Secret\n      name: linkerd-certs\n      valuesKey: issuer.key\n      targetPath: identity.issuer.tls.keyPEM\n  values:\n    installNamespace: false\n    identity:\n      issuer:\n        crtExpiry: "2023-07-18T20:00:00Z" # Change this to match generated certificate expiry date\n---\napiVersion: helm.toolkit.fluxcd.io/v2beta1\nkind: HelmRelease\nmetadata:\n  name: linkerd-viz\nspec:\n  interval: 10m\n  dependsOn:\n    - name: linkerd\n  chart:\n    spec:\n      chart: linkerd-viz\n      reconcileStrategy: ChartVersion\n      sourceRef:\n        kind: HelmRepository\n        name: linkerd\n'))),(0,r.kt)("p",null,"Next, add the following file to instruct Kustomize to patch any ",(0,r.kt)("inlineCode",{parentName:"p"},"Secrets")," that are referenced in\n",(0,r.kt)("inlineCode",{parentName:"p"},"HelmRelease")," manifests, and add a ",(0,r.kt)("inlineCode",{parentName:"p"},"Kustomization")," which references all the\nother ",(0,r.kt)("inlineCode",{parentName:"p"},"linkerd")," resource files."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see the linkerd Kustomization manifests"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="linkerd/kustomizeconfig.yaml"',title:'"linkerd/kustomizeconfig.yaml"'},"nameReference:\n  - kind: Secret\n    version: v1\n    fieldSpecs:\n      - path: spec/valuesFrom/name\n        kind: HelmRelease\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="linkerd/kustomization.yaml"',title:'"linkerd/kustomization.yaml"'},"---\napiVersion: kustomize.config.k8s.io/v1beta1\nkind: Kustomization\nnamespace: linkerd\nconfigurations:\n- kustomizeconfig.yaml\nresources:\n- namespace.yaml\n- source.yaml\n- releases.yaml\nsecretGenerator:\n  - name: linkerd-certs\n    files:\n      - ca.crt\n      - issuer.crt\n      - issuer.key\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"secretGenerator")," is used to generate Secrets from the generated files."))),(0,r.kt)("p",null,"At this point ",(0,r.kt)("inlineCode",{parentName:"p"},"linkerd")," directory in the cluster repository should look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"> tree linkerd\nlinkerd\n\u251c\u2500\u2500 ca.crt\n\u251c\u2500\u2500 issuer.crt\n\u251c\u2500\u2500 issuer.key\n\u251c\u2500\u2500 kustomization.yaml\n\u251c\u2500\u2500 kustomizeconfig.yaml\n\u251c\u2500\u2500 namespace.yaml\n\u251c\u2500\u2500 releases.yaml\n\u2514\u2500\u2500 source.yaml\n")),(0,r.kt)("p",null,"Once Flux reconciles this directory to the cluster, Linkerd should be installed."),(0,r.kt)("p",null,"Before proceeding to the next step, check that all the Linkerd pods have started successfully:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"> kubectl get pods -n linkerd \nNAME                                      READY   STATUS    RESTARTS   AGE\nlinkerd-destination-66d5668b-4mw49        4/4     Running   0          10m\nlinkerd-identity-6b4658c74b-6nc97         2/2     Running   0          10m\nlinkerd-proxy-injector-6b76789cb4-8vqj4   2/2     Running   0          10m\n\n> kubectl get pods -n linkerd-viz \nNAME                            READY   STATUS    RESTARTS   AGE\ngrafana-db56d7cb4-xlnn4         2/2     Running   0          10m\nmetrics-api-595c7b564-724ps     2/2     Running   0          10m\nprometheus-5d4dffff55-8fscd     2/2     Running   0          10m\ntap-6dcb89d487-5ns8n            2/2     Running   0          10m\ntap-injector-54895654bb-9xn7k   2/2     Running   0          10m\nweb-6b6f65dbc7-wltdg            2/2     Running   0          10m\n")),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Make sure that any new directories that you add to the cluster repository as part of this guide,\nare included in a path that Flux reconciles.")),(0,r.kt)("h2",{id:"installing-flagger-using-flux"},"Installing Flagger using Flux"),(0,r.kt)("p",null,"For the Flagger installation, a Kustomization file will be used to define the installation order and\nprovide a default namespace for the installed resources."),(0,r.kt)("p",null,"Create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"flagger")," directory and make sure it is under a repository path that Flux reconciles. "),(0,r.kt)("p",null,"We'll add the resources for Flagger under this directory.\nThese are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"Namespace")," resource to control where the components are installed"),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"HelmRepository")," resource to make the Flagger helm repo available on the\ncluster"),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"HelmRelease")," resource to install the latest version of Flagger and the load\ntester app, which is used to generate from that synthetic traffic during the\nanalysis phase, from that ",(0,r.kt)("inlineCode",{parentName:"li"},"HelmRepository"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see the Flagger resource manifests"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="flagger/namespace.yaml"',title:'"flagger/namespace.yaml"'},"---\napiVersion: v1\nkind: Namespace\nmetadata:\n  name: flagger\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="flagger/source.yaml"',title:'"flagger/source.yaml"'},"---\napiVersion: source.toolkit.fluxcd.io/v1beta2\nkind: HelmRepository\nmetadata:\n  name: flagger\nspec:\n  interval: 1h\n  url: https://flagger.app\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="flagger/releases.yaml"',title:'"flagger/releases.yaml"'},"---\napiVersion: helm.toolkit.fluxcd.io/v2beta1\nkind: HelmRelease\nmetadata:\n  name: flagger\nspec:\n  releaseName: flagger\n  install:\n    crds: Create\n  upgrade:\n    crds: CreateReplace\n  interval: 10m\n  chart:\n    spec:\n      chart: flagger\n      reconcileStrategy: ChartVersion\n      sourceRef:\n        kind: HelmRepository\n        name: flagger\n  values:\n    metricsServer: http://prometheus.linkerd-viz:9090\n    meshProvider: linkerd\n---\napiVersion: helm.toolkit.fluxcd.io/v2beta1\nkind: HelmRelease\nmetadata:\n  name: loadtester\nspec:\n  interval: 10m\n  chart:\n    spec:\n      chart: loadtester\n      reconcileStrategy: ChartVersion\n      sourceRef:\n        kind: HelmRepository\n        name: flagger\n"))),(0,r.kt)("p",null,"Finally,  add the following Kustomization file that references all the previous files that were\nadded:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see the Flagger Kustomization manifest"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="flagger/kustomization.yaml"',title:'"flagger/kustomization.yaml"'},"---\napiVersion: kustomize.config.k8s.io/v1beta1\nkind: Kustomization\nnamespace: flagger\nresources:\n- namespace.yaml\n- source.yaml\n- releases.yaml\n"))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"flagger")," directory in the cluster repository should look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"> tree flagger\nflagger\n\u251c\u2500\u2500 kustomization.yaml\n\u251c\u2500\u2500 namespace.yaml\n\u251c\u2500\u2500 releases.yaml\n\u2514\u2500\u2500 source.yaml\n")),(0,r.kt)("p",null,"Once Flux reconciles this directory to the cluster, Flagger and the load tester app should get\ninstalled."),(0,r.kt)("p",null,"Before proceeding to the next step, check that all the Flagger pods have started successfully:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"> kubectl get pods -n flagger\nNAME                          READY   STATUS    RESTARTS   AGE\nflagger-7d456d4fc7-knf2g      1/1     Running   0          4m\nloadtester-855b4d77f6-scl6r   1/1     Running   0          4m\n")),(0,r.kt)("h2",{id:"deploy-a-canary-release"},"Deploy a canary release"),(0,r.kt)("p",null,"To demonstrate the progressive rollout of an application,\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stefanprodan/podinfo"},"podinfo")," will be used."),(0,r.kt)("p",null,"We will configure a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.flagger.app/usage/deployment-strategies#canary-release"},"Canary release\nstrategy"),", where Flagger will\nscale up a new version of the application (the canary), alongside the existing version (the\nprimary), and gradually increase traffic to the new version in increments of 5%, up to a maximum of\n50%. It will continuously monitor the new version for an acceptable request response rate and\naverage request duration. Based on this analysis, Flagger will either update the primary to the new\nversion, or abandon the promotion; then scale the canary back down to zero."),(0,r.kt)("p",null,"Create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," directory and add the following Canary resources under it:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"Namespace")," resource to control where the components are installed"),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"Deployment")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"HorizontalPodAutoscaler")," for the ",(0,r.kt)("inlineCode",{parentName:"li"},"podinfo")," application"),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"Canary")," resource which references the ",(0,r.kt)("inlineCode",{parentName:"li"},"Deployment")," and\n",(0,r.kt)("inlineCode",{parentName:"li"},"HorizontalPodAutoscaler")," resources (note that we do not need to define a\nservice resource, instead this is specified within the Canary definition and\ncreated by Flagger)")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see the Canary resource manifests"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="test/namespace.yaml"',title:'"test/namespace.yaml"'},"---\napiVersion: v1\nkind: Namespace\nmetadata:\n  name: test\n  annotations:\n    linkerd.io/inject: enabled\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="test/deployment.yaml"',title:'"test/deployment.yaml"'},'---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: podinfo\n  labels:\n    app: podinfo\nspec:\n  minReadySeconds: 5\n  revisionHistoryLimit: 5\n  progressDeadlineSeconds: 60\n  strategy:\n    rollingUpdate:\n      maxUnavailable: 1\n    type: RollingUpdate\n  selector:\n    matchLabels:\n      app: podinfo\n  template:\n    metadata:\n      annotations:\n        prometheus.io/scrape: "true"\n        prometheus.io/port: "9797"\n      labels:\n        app: podinfo\n    spec:\n      containers:\n      - name: podinfod\n        image: ghcr.io/stefanprodan/podinfo:6.1.8\n        imagePullPolicy: IfNotPresent\n        ports:\n        - name: http\n          containerPort: 9898\n          protocol: TCP\n        - name: http-metrics\n          containerPort: 9797\n          protocol: TCP\n        - name: grpc\n          containerPort: 9999\n          protocol: TCP\n        command:\n        - ./podinfo\n        - --port=9898\n        - --port-metrics=9797\n        - --grpc-port=9999\n        - --grpc-service-name=podinfo\n        - --level=info\n        - --random-delay=false\n        - --random-error=false\n        env:\n        - name: PODINFO_UI_COLOR\n          value: "#34577c"\n        livenessProbe:\n          exec:\n            command:\n            - podcli\n            - check\n            - http\n            - localhost:9898/healthz\n          initialDelaySeconds: 5\n          timeoutSeconds: 5\n        readinessProbe:\n          exec:\n            command:\n            - podcli\n            - check\n            - http\n            - localhost:9898/readyz\n          initialDelaySeconds: 5\n          timeoutSeconds: 5\n        resources:\n          limits:\n            cpu: 2000m\n            memory: 512Mi\n          requests:\n            cpu: 100m\n            memory: 64Mi\n\n---\napiVersion: autoscaling/v2beta2\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: podinfo\nspec:\n  scaleTargetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: podinfo\n  minReplicas: 2\n  maxReplicas: 4\n  metrics:\n    - type: Resource\n      resource:\n        name: cpu\n        target:\n          type: Utilization\n          # scale up if usage is above\n          # 99% of the requested CPU (100m)\n          averageUtilization: 99\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="test/canary.yaml"',title:'"test/canary.yaml"'},'---\napiVersion: flagger.app/v1beta1\nkind: Canary\nmetadata:\n  name: podinfo\nspec:\n  # deployment reference\n  targetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: podinfo\n  # HPA reference (optional)\n  autoscalerRef:\n    apiVersion: autoscaling/v2beta2\n    kind: HorizontalPodAutoscaler\n    name: podinfo\n  # the maximum time in seconds for the canary deployment\n  # to make progress before it is rollback (default 600s)\n  progressDeadlineSeconds: 60\n  service:\n    # ClusterIP port number\n    port: 9898\n    # container port number or name (optional)\n    targetPort: 9898\n  analysis:\n    # schedule interval (default 60s)\n    interval: 30s\n    # max number of failed metric checks before rollback\n    threshold: 5\n    # max traffic percentage routed to canary\n    # percentage (0-100)\n    maxWeight: 50\n    # canary increment step\n    # percentage (0-100)\n    stepWeight: 5\n    # Linkerd Prometheus checks\n    metrics:\n    - name: request-success-rate\n      # minimum req success rate (non 5xx responses)\n      # percentage (0-100)\n      thresholdRange:\n        min: 99\n      interval: 1m\n    - name: request-duration\n      # maximum req duration P99\n      # milliseconds\n      thresholdRange:\n        max: 500\n      interval: 30s\n    # testing (optional)\n    webhooks:\n      - name: acceptance-test\n        type: pre-rollout\n        url: http://loadtester.flagger/\n        timeout: 30s\n        metadata:\n          type: bash\n          cmd: "curl -sd \'test\' http://podinfo-canary.test:9898/token | grep token"\n      - name: load-test\n        type: rollout\n        url: http://loadtester.flagger/\n        metadata:\n          cmd: "hey -z 2m -q 10 -c 2 http://podinfo-canary.test:9898/"\n'))),(0,r.kt)("p",null,"Finally, add a Kustomization file to apply all resources to the ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," namespace:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see the Canary Kustomization manifest"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="test/kustomization.yaml"',title:'"test/kustomization.yaml"'},"---\napiVersion: kustomize.config.k8s.io/v1beta1\nkind: Kustomization\nnamespace: test\nresources:\n- namespace.yaml\n- deployment.yaml\n- canary.yaml\n"))),(0,r.kt)("p",null,"At this point ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," directory in the cluster repository should look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"> tree test\ntest\n\u251c\u2500\u2500 canary.yaml\n\u251c\u2500\u2500 deployment.yaml\n\u251c\u2500\u2500 kustomization.yaml\n\u2514\u2500\u2500 namespace.yaml\n")),(0,r.kt)("p",null,"After a short time, the status of the canary object should be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"Initialized"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Canary rollout initialized",src:t(90839).Z,width:"3574",height:"1740"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"> kubectl get canary podinfo -n test\nNAME      STATUS        WEIGHT   LASTTRANSITIONTIME\npodinfo   Initialized   0        2022-07-22T12:37:58Z\n")),(0,r.kt)("p",null,"Now trigger a new rollout by bumping the version of ",(0,r.kt)("inlineCode",{parentName:"p"},"podinfo"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"> kubectl set image deployment/podinfo podinfod=ghcr.io/stefanprodan/podinfo:6.0.1 -n test\n")),(0,r.kt)("p",null,"During the progressive rollout, the canary object reports on its current status:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Canary rollout progressing",src:t(48212).Z,width:"3574",height:"1740"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"> kubectl get canary podinfo -n test\nNAME      STATUS        WEIGHT   LASTTRANSITIONTIME\npodinfo   Progressing   5       2022-07-22T12:41:57Z\n")),(0,r.kt)("p",null,"After a short time the rollout is completed and the status of the canary object is set to\n",(0,r.kt)("inlineCode",{parentName:"p"},"Succeeded"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Canary rollout succeeded",src:t(56461).Z,width:"3574",height:"1740"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"> kubectl get canary podinfo -n test\nNAME      STATUS      WEIGHT   LASTTRANSITIONTIME\npodinfo   Succeeded   0        2022-07-22T12:47:58Z\n")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Congratulations, you have now completed a progressive delivery rollout with Flagger and Linkerd\n\ud83c\udf89"),(0,r.kt)("p",null,"Next steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Explore more of what ",(0,r.kt)("a",{parentName:"li",href:"https://flagger.app/"},"Flagger")," can offer"),(0,r.kt)("li",{parentName:"ul"},"Configure ",(0,r.kt)("a",{parentName:"li",href:"/docs/0.26.0/guides/flagger-manual-gating"},"manual approving")," for progressive delivery deployments")))}u.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,g=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return t?a.createElement(g,l(l({ref:n},p),{},{components:t})):a.createElement(g,l({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},58035:(e,n,t)=>{t.d(n,{Z:()=>a});const a="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAxOCAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMTYgMkgxMVY0SDE2VjE3TDExIDExVjIwSDE2QzE2LjUzMDQgMjAgMTcuMDM5MSAxOS43ODkzIDE3LjQxNDIgMTkuNDE0MkMxNy43ODkzIDE5LjAzOTEgMTggMTguNTMwNCAxOCAxOFY0QzE4IDMuNDY5NTcgMTcuNzg5MyAyLjk2MDg2IDE3LjQxNDIgMi41ODU3OUMxNy4wMzkxIDIuMjEwNzEgMTYuNTMwNCAyIDE2IDJaTTcgMTdIMkw3IDExVjE3Wk03IDJIMkMwLjg5IDIgMCAyLjg5IDAgNFYxOEMwIDE4LjUzMDQgMC4yMTA3MTQgMTkuMDM5MSAwLjU4NTc4NiAxOS40MTQyQzAuOTYwODU5IDE5Ljc4OTMgMS40Njk1NyAyMCAyIDIwSDdWMjJIOVYwSDdWMloiCiAgICAgZmlsbD0iIzlFOUU5RSIvPgo8L3N2Zz4K"},78812:(e,n,t)=>{t.d(n,{Z:()=>a});const a="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAyMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDBDMTIuNjkgMCAxMCAyLjY5IDEwIDZDMTAgOS4zMSAxMi42OSAxMiAxNiAxMkMxOS4zMSAxMiAyMiA5LjMxIDIyIDZDMjIgMi42OSAxOS4zMSAwIDE2IDBaTTQgMkMxLjc5IDIgMCAzLjc5IDAgNkMwIDguMjEgMS43OSAxMCA0IDEwQzYuMjEgMTAgOCA4LjIxIDggNkM4IDMuNzkgNi4yMSAyIDQgMlpNNCA4QzIuOSA4IDIgNy4xIDIgNkMyIDQuOSAyLjkgNCA0IDRDNS4xIDQgNiA0LjkgNiA2QzYgNy4xIDUuMSA4IDQgOFoiIGZpbGw9IiM5RTlFOUUiLz4KPC9zdmc+Cg=="},22962:(e,n,t)=>{t.d(n,{Z:()=>a});const a="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAyMSAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIxIDguNUwxNy45NSA3LjM3QzE3LjY5IDYuMjIgMTcuMDQgNS41NiAxNy4wNCA1LjU2QzE2LjY1MDkgNS4xNzAxNCAxNi4xODg3IDQuODYwODQgMTUuNjggNC42NDk4QzE1LjE3MTIgNC40Mzg3NiAxNC42MjU4IDQuMzMwMTQgMTQuMDc1IDQuMzMwMTRDMTMuNTI0MiA0LjMzMDE0IDEyLjk3ODggNC40Mzg3NiAxMi40NyA0LjY0OThDMTEuOTYxMyA0Ljg2MDg0IDExLjQ5OTEgNS4xNzAxNCAxMS4xMSA1LjU2TDkuNjMgNy4wNEwzIDBDMiA0IDMgOCA1LjQ1IDExLjIyTDAgMTYuNUMwIDE2LjUgOC44OSAxOC41IDE0LjA3IDE0LjQ1QzE2LjgzIDEyLjI5IDE3LjQ1IDExLjAzIDE3Ljg0IDkuN0wyMSA4LjVaTTE1LjcxIDguNzJDMTUuMzIgOS4xMSAxNC42OCA5LjExIDE0LjI5IDguNzJDMTQuMTk3MyA4LjYyNzQ5IDE0LjEyMzcgOC41MTc2IDE0LjA3MzYgOC4zOTY2MkMxNC4wMjM0IDguMjc1NjUgMTMuOTk3NiA4LjE0NTk3IDEzLjk5NzYgOC4wMTVDMTMuOTk3NiA3Ljg4NDAzIDE0LjAyMzQgNy43NTQzNSAxNC4wNzM2IDcuNjMzMzhDMTQuMTIzNyA3LjUxMjQgMTQuMTk3MyA3LjQwMjUxIDE0LjI5IDcuMzFDMTQuNjggNi45MiAxNS4zMiA2LjkyIDE1LjcxIDcuMzFDMTYuMSA3LjcgMTYuMSA4LjMzIDE1LjcxIDguNzJaIiBmaWxsPSIjOUU5RTlFIi8+Cjwvc3ZnPgo="},2611:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/dashboard-applications-delivery-1f2b76b04fcb610201000ae0f950b2a8.png"},19326:(e,n,t)=>{t.d(n,{Z:()=>a});const a="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAyMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQgMkMxLjc5IDIgMCAzLjc5IDAgNkMwIDguMjEgMS43OSAxMCA0IDEwQzYuMjEgMTAgOCA4LjIxIDggNkM4IDMuNzkgNi4yMSAyIDQgMlpNMTYgMEMxMi42OSAwIDEwIDIuNjkgMTAgNkMxMCA5LjMxIDEyLjY5IDEyIDE2IDEyQzE5LjMxIDEyIDIyIDkuMzEgMjIgNkMyMiAyLjY5IDE5LjMxIDAgMTYgMFpNMTYgMTBDMTMuNzkgMTAgMTIgOC4yMSAxMiA2QzEyIDMuNzkgMTMuNzkgMiAxNiAyQzE4LjIxIDIgMjAgMy43OSAyMCA2QzIwIDguMjEgMTguMjEgMTAgMTYgMTBaIiBmaWxsPSIjOUU5RTlFIi8+Cjwvc3ZnPgo="},90839:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/pd-details-initialized-fb414d22b81a298a015aba0a77499c81.png"},48212:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/pd-details-progressing-9ac4ad95f4d714fecf290268e70b5aa6.png"},56461:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/pd-details-succeeded-ae13625475b6e477f0534846ff0d18eb.png"}}]);