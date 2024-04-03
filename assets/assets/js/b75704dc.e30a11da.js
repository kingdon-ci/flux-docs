"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[17338],{85391:(t,e,a)=>{a.d(e,{Z:()=>i});var n=a(67294),r=a(88746);a(52426);const l={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function i(t){let{tiers:e}=t;return n.createElement(r.Z,{title:`This feature is a available on ${e}.`,style:l},e)}},82939:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>k,frontMatter:()=>i,metadata:()=>m,toc:()=>o});var n=a(87462),r=(a(67294),a(3905)),l=a(85391);const i={title:"Supported Templating Languages",hide_title:!0},p='Supported Templating Languages <TierLabel tiers="Enterprise" />',m={unversionedId:"gitops-templates/supported-langs",id:"version-0.23.0/gitops-templates/supported-langs",title:"Supported Templating Languages",description:"The following templating languages are supported:",source:"@site/versioned_docs/version-0.23.0/gitops-templates/supported-langs.mdx",sourceDirName:"gitops-templates",slug:"/gitops-templates/supported-langs",permalink:"/docs/0.23.0/gitops-templates/supported-langs",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.23.0/gitops-templates/supported-langs.mdx",tags:[],version:"0.23.0",frontMatter:{title:"Supported Templating Languages",hide_title:!0},sidebar:"docs",previous:{title:"Parameters",permalink:"/docs/0.23.0/gitops-templates/params"},next:{title:"Example: Template to Create a CAPI Cluster",permalink:"/docs/0.23.0/gitops-templates/create-cluster-example"}},d={},o=[{value:"Envsubst",id:"envsubst",level:2},{value:"Supported Functions",id:"supported-functions",level:3},{value:"Templating",id:"templating",level:2},{value:"Supported Functions",id:"supported-functions-1",level:3},{value:"Custom Delimiters",id:"custom-delimiters",level:3}],s={toc:o};function k(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"supported-templating-languages-"},"Supported Templating Languages ",(0,r.kt)(l.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,r.kt)("p",null,"The following templating languages are supported:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"envsubst (default)"),(0,r.kt)("li",{parentName:"ul"},"templating")),(0,r.kt)("p",null,"Declare the templating language to be used to render the template by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.renderType"),"."),(0,r.kt)("h2",{id:"envsubst"},"Envsubst"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"envsubst"),", which is short for 'environment substitution', uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/a8m/envsubst"},"envsubst"),"\nfor rendering.\nThis templating format is used by ",(0,r.kt)("a",{parentName:"p",href:"https://cluster-api.sigs.k8s.io/clusterctl/overview.html"},"clusterctl"),"."),(0,r.kt)("p",null,"Variables can be set for rendering into the template in the ",(0,r.kt)("inlineCode",{parentName:"p"},"${VAR_NAME}"),"\nsyntax."),(0,r.kt)("h3",{id:"supported-functions"},"Supported Functions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Expression")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Meaning")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${var}")),(0,r.kt)("td",{parentName:"tr",align:null},"Value of ",(0,r.kt)("inlineCode",{parentName:"td"},"$var"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${#var}")),(0,r.kt)("td",{parentName:"tr",align:null},"String length of ",(0,r.kt)("inlineCode",{parentName:"td"},"$var"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${var^}")),(0,r.kt)("td",{parentName:"tr",align:null},"Uppercase first character of ",(0,r.kt)("inlineCode",{parentName:"td"},"$var"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${var^^}")),(0,r.kt)("td",{parentName:"tr",align:null},"Uppercase all characters in ",(0,r.kt)("inlineCode",{parentName:"td"},"$var"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${var,}")),(0,r.kt)("td",{parentName:"tr",align:null},"Lowercase first character of ",(0,r.kt)("inlineCode",{parentName:"td"},"$var"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${var,,}")),(0,r.kt)("td",{parentName:"tr",align:null},"Lowercase all characters in ",(0,r.kt)("inlineCode",{parentName:"td"},"$var"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${var:n}")),(0,r.kt)("td",{parentName:"tr",align:null},"Offset ",(0,r.kt)("inlineCode",{parentName:"td"},"$var")," ",(0,r.kt)("inlineCode",{parentName:"td"},"n")," characters from start")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${var:n:len}")),(0,r.kt)("td",{parentName:"tr",align:null},"Offset ",(0,r.kt)("inlineCode",{parentName:"td"},"$var")," ",(0,r.kt)("inlineCode",{parentName:"td"},"n")," characters with max length of ",(0,r.kt)("inlineCode",{parentName:"td"},"len"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${var#pattern}")),(0,r.kt)("td",{parentName:"tr",align:null},"Strip shortest ",(0,r.kt)("inlineCode",{parentName:"td"},"pattern")," match from start")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${var##pattern}")),(0,r.kt)("td",{parentName:"tr",align:null},"Strip longest ",(0,r.kt)("inlineCode",{parentName:"td"},"pattern")," match from start")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${var%pattern}")),(0,r.kt)("td",{parentName:"tr",align:null},"Strip shortest ",(0,r.kt)("inlineCode",{parentName:"td"},"pattern")," match from end")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${var%%pattern}")),(0,r.kt)("td",{parentName:"tr",align:null},"Strip longest ",(0,r.kt)("inlineCode",{parentName:"td"},"pattern")," match from end")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${var-default}")),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"$var")," is not set, evaluate expression as ",(0,r.kt)("inlineCode",{parentName:"td"},"$default"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${var:-default}")),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"$var")," is not set or is empty, evaluate expression as ",(0,r.kt)("inlineCode",{parentName:"td"},"$default"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${var=default}")),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"$var")," is not set, evaluate expression as ",(0,r.kt)("inlineCode",{parentName:"td"},"$default"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${var:=default}")),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"$var")," is not set or is empty, evaluate expression as ",(0,r.kt)("inlineCode",{parentName:"td"},"$default"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${var/pattern/replacement}")),(0,r.kt)("td",{parentName:"tr",align:null},"Replace as few ",(0,r.kt)("inlineCode",{parentName:"td"},"pattern")," matches as possible with ",(0,r.kt)("inlineCode",{parentName:"td"},"replacement"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${var//pattern/replacement}")),(0,r.kt)("td",{parentName:"tr",align:null},"Replace as many ",(0,r.kt)("inlineCode",{parentName:"td"},"pattern")," matches as possible with ",(0,r.kt)("inlineCode",{parentName:"td"},"replacement"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${var/#pattern/replacement}")),(0,r.kt)("td",{parentName:"tr",align:null},"Replace ",(0,r.kt)("inlineCode",{parentName:"td"},"pattern")," match with ",(0,r.kt)("inlineCode",{parentName:"td"},"replacement")," from ",(0,r.kt)("inlineCode",{parentName:"td"},"$var")," start")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${var/%pattern/replacement}")),(0,r.kt)("td",{parentName:"tr",align:null},"Replace ",(0,r.kt)("inlineCode",{parentName:"td"},"pattern")," match with ",(0,r.kt)("inlineCode",{parentName:"td"},"replacement")," from ",(0,r.kt)("inlineCode",{parentName:"td"},"$var")," end")))),(0,r.kt)("h2",{id:"templating"},"Templating"),(0,r.kt)("p",null,"Templating uses text/templating for rendering, using go-templating style syntax ",(0,r.kt)("inlineCode",{parentName:"p"},"{{ .params.CLUSTER_NAME }}"),"\nwhere params are provided by the ",(0,r.kt)("inlineCode",{parentName:"p"},".params")," variable.\nTemplate functions can also be used with the syntax ",(0,r.kt)("inlineCode",{parentName:"p"},"{{ .params.CLUSTER_NAME | FUNCTION }}"),"."),(0,r.kt)("h3",{id:"supported-functions-1"},"Supported Functions"),(0,r.kt)("p",null,"As taken (from the ",(0,r.kt)("a",{parentName:"p",href:"http://masterminds.github.io/sprig/"},"Sprig library"),")"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Function Type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Functions")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"String Functions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"trim"),", ",(0,r.kt)("em",{parentName:"td"},"wrap"),", ",(0,r.kt)("em",{parentName:"td"},"randAlpha"),", ",(0,r.kt)("em",{parentName:"td"},"plural"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"String List Functions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"splitList"),", ",(0,r.kt)("em",{parentName:"td"},"sortAlpha"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Integer Math Functions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"add"),", ",(0,r.kt)("em",{parentName:"td"},"max"),", ",(0,r.kt)("em",{parentName:"td"},"mul"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Integer Slice Functions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"until"),", untilStep")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Float Math Functions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"addf"),", ",(0,r.kt)("em",{parentName:"td"},"maxf"),", ",(0,r.kt)("em",{parentName:"td"},"mulf"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Date Functions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"now"),", ",(0,r.kt)("em",{parentName:"td"},"date"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Defaults Functions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"default"),", ",(0,r.kt)("em",{parentName:"td"},"empty"),", ",(0,r.kt)("em",{parentName:"td"},"coalesce"),", ",(0,r.kt)("em",{parentName:"td"},"fromJson"),", ",(0,r.kt)("em",{parentName:"td"},"toJson"),", ",(0,r.kt)("em",{parentName:"td"},"toPrettyJson"),", ",(0,r.kt)("em",{parentName:"td"},"toRawJson"),", ternary")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Encoding Functions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"b64enc"),", ",(0,r.kt)("em",{parentName:"td"},"b64dec"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lists and List Functions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"list"),", ",(0,r.kt)("em",{parentName:"td"},"first"),", ",(0,r.kt)("em",{parentName:"td"},"uniq"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dictionaries and Dict Functions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"get"),", ",(0,r.kt)("em",{parentName:"td"},"set"),", ",(0,r.kt)("em",{parentName:"td"},"dict"),", ",(0,r.kt)("em",{parentName:"td"},"hasKey"),", ",(0,r.kt)("em",{parentName:"td"},"pluck"),", ",(0,r.kt)("em",{parentName:"td"},"dig"),", ",(0,r.kt)("em",{parentName:"td"},"deepCopy"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Type Conversion Functions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"atoi"),", ",(0,r.kt)("em",{parentName:"td"},"int64"),", ",(0,r.kt)("em",{parentName:"td"},"toString"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Flow Control Functions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"fail"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UUID Functions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"uuidv4"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Version Comparison Functions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"semver"),", semverCompare")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Reflection"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"typeOf"),", ",(0,r.kt)("em",{parentName:"td"},"kindIs"),", ",(0,r.kt)("em",{parentName:"td"},"typeIsLike"))))),(0,r.kt)("h3",{id:"custom-delimiters"},"Custom Delimiters"),(0,r.kt)("p",null,"The default delimiters for ",(0,r.kt)("inlineCode",{parentName:"p"},"renderType: templating")," are ",(0,r.kt)("inlineCode",{parentName:"p"},"{{")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"}}"),".\nThese can be changed by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"templates.weave.works/delimiters")," annotation\non the template. For example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'templates.weave.works/delimiters: "{{,}}"')," - default"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'templates.weave.works/delimiters: "${{,}}"'),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"${{")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"}}"),", for example ",(0,r.kt)("inlineCode",{parentName:"li"},'"${{ .params.CLUSTER_NAME }}"')),(0,r.kt)("li",{parentName:"ul"},"Useful as ",(0,r.kt)("inlineCode",{parentName:"li"},"{{")," in yaml is invalid syntax and needs to be quoted. If you need to provide a un-quoted number value like ",(0,r.kt)("inlineCode",{parentName:"li"},"replicas: 3")," you should use these delimiters.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u274c ",(0,r.kt)("inlineCode",{parentName:"li"},"replicas: {{ .params.REPLICAS }}")," Invalid yaml"),(0,r.kt)("li",{parentName:"ul"},"\u274c ",(0,r.kt)("inlineCode",{parentName:"li"},'replicas: "{{ .params.REPLICAS }}"')," Valid yaml, incorrect type. The type is a ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," not a ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," and will fail validation."),(0,r.kt)("li",{parentName:"ul"},"\u2705 ",(0,r.kt)("inlineCode",{parentName:"li"},"replicas: ${{ .params.REPLICAS }}")," Valid yaml and correct ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," type."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'templates.weave.works/delimiters: "<<,>>" '),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"<<")," and ",(0,r.kt)("inlineCode",{parentName:"li"},">>"),", for example ",(0,r.kt)("inlineCode",{parentName:"li"},"<< .params.CLUSTER_NAME >>")),(0,r.kt)("li",{parentName:"ul"},"Useful if you are nesting templates and need to differentiate between the delimiters used in the inner and outer templates.")))))}k.isMDXComponent=!0},3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>N});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),d=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=d(t.components);return n.createElement(m.Provider,{value:e},t.children)},s="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),s=d(a),u=r,N=s["".concat(m,".").concat(u)]||s[u]||k[u]||l;return a?n.createElement(N,i(i({ref:e},o),{},{components:a})):n.createElement(N,i({ref:e},o))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p[s]="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);