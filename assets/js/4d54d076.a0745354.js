"use strict";(self.webpackChunkuhe_docs=self.webpackChunkuhe_docs||[]).push([[80],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),g=i,h=d["".concat(l,".").concat(g)]||d[g]||p[g]||a;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},11933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const a={},s="Contributing",o={unversionedId:"contributing",id:"contributing",title:"Contributing",description:"This document outlines the general guidelines that should be followed when contributing to the open source assets.",source:"@site/docs/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/uhi-documentation-site/docs/contributing",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/contributing.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"API Endpoints",permalink:"/uhi-documentation-site/docs/Architecture/backend-api-endpoints"}},l={},u=[{value:"Conventions",id:"conventions",level:2},{value:"Branching strategy",id:"branching-strategy",level:3},{value:"Commit conventions",id:"commit-conventions",level:3},{value:"Description of commit prefixes",id:"description-of-commit-prefixes",level:4},{value:"Linting",id:"linting",level:3},{value:"Development Cycle",id:"development-cycle",level:2},{value:"Frontend",id:"frontend",level:3},{value:"Backend",id:"backend",level:3},{value:"Raising Issues",id:"raising-issues",level:2},{value:"To request a new feature",id:"to-request-a-new-feature",level:4},{value:"To raise an issue about a bug/enhancement",id:"to-raise-an-issue-about-a-bugenhancement",level:4},{value:"Raising Pull Requests (PRs)",id:"raising-pull-requests-prs",level:2},{value:"Title and description of PRs",id:"title-and-description-of-prs",level:3}],c={toc:u};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contributing"},"Contributing"),(0,i.kt)("p",null,"This document outlines the general guidelines that should be followed when contributing to the open source assets.\nPlease note that you can contribute by identifying issues and creating issues for them on GitHub, by contributing code and/or tests or by contributing to the documentation."),(0,i.kt)("h2",{id:"conventions"},"Conventions"),(0,i.kt)("h3",{id:"branching-strategy"},"Branching strategy"),(0,i.kt)("p",null,"We follow a trunk-based development strategy. This means that branches are short-lived (for small chunks of work and ideally lasting for no more than a few hours to a day or two), and are merged to the main branch as soon as the changes are approved and are ready to be merged."),(0,i.kt)("p",null,"Any new branches are branched from the main branch which is continuously kept updated."),(0,i.kt)("h3",{id:"commit-conventions"},"Commit conventions"),(0,i.kt)("p",null,"Commits should be of complete, preferably working code (if not, they should be squashed to reflect a clean commit history with working code)."),(0,i.kt)("p",null,"Commit messages follow the following convention:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"feat/chore/fix: <descriptive message in present imperative, should start with lowercase characters if possible>\n")),(0,i.kt)("p",null,"For example, these are valid/acceptable commit messages that follow the convention:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"fix: align patient login button to the center\nfeat: add close button in accept cookies popup on homepage\n")),(0,i.kt)("p",null,"In contrast, these commit messages ",(0,i.kt)("strong",{parentName:"p"},"do not")," follow the convention, and do not have descriptive messages:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Aligned the patient login button\nAdded close button\n")),(0,i.kt)("h4",{id:"description-of-commit-prefixes"},"Description of commit prefixes"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"feat"),": This indicates a commit that contributes to development of a new feature. It indicates that there's some new capability (or a new UI feature, new backend feature etc.) that is being added to the project.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"fix"),": This indicates a commit that intends to fix a part, appearance or functionality of an existing feature or capability of the asset.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"chore"),": Any commit that does not fall under the ",(0,i.kt)("strong",{parentName:"p"},"fix")," and ",(0,i.kt)("strong",{parentName:"p"},"feat")," categories falls under this category. This includes writing tests, infrastructure scripts/setups, refactoring, etc."))),(0,i.kt)("h3",{id:"linting"},"Linting"),(0,i.kt)("p",null,"We use ",(0,i.kt)("a",{parentName:"p",href:"https://eslint.org/"},(0,i.kt)("em",{parentName:"a"},"eslint"))," as our linter. Linting configurations already exist in the ",(0,i.kt)("em",{parentName:"p"},".eslintrc.json")," files in the repositories."),(0,i.kt)("p",null,"The configurations use the ",(0,i.kt)("a",{parentName:"p",href:"https://standardjs.com/"},"standard")," JS style for linting, both on the frontend and the backend. The frontend has JSX code, so there is an extra eslint rule (",(0,i.kt)("inlineCode",{parentName:"p"},"jsx-quotes"),") that enforces uniform quotes on the frontend inside JSX."),(0,i.kt)("p",null,"Please ensure you run the linter before committing and opening pull requests."),(0,i.kt)("h2",{id:"development-cycle"},"Development Cycle"),(0,i.kt)("h3",{id:"frontend"},"Frontend"),(0,i.kt)("p",null,"For UI features/pages, the process is to first create a design (preferably in Figma), and then start with its implementation."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Frontend Development Cycle",src:n(90203).Z,width:"364",height:"538"})),(0,i.kt)("h3",{id:"backend"},"Backend"),(0,i.kt)("p",null,"For APIs and API endpoints, the process is to first create an API specification using the OpenAPI specification (and a swagger page also whenever possible). After the API specification is approved, we proceed to the implementation.\nPlease add tests whenever any changes are made to the backend implementations and ensure that existing tests run properly before opening a PR."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Backend Development Cycle",src:n(53894).Z,width:"490",height:"960"})),(0,i.kt)("h2",{id:"raising-issues"},"Raising Issues"),(0,i.kt)("p",null,"Raising issues that report bugs, or suggest additional features/functionality is a great way to contribute as well. Please format your issue content to include the parts mentioned below in a clear manner, along with a descriptive title."),(0,i.kt)("h4",{id:"to-request-a-new-feature"},"To request a new feature"),(0,i.kt)("p",null,"Please include the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Purpose"),": Do mention why you think this new feature/functionality is important/is required, or how it will contribute to a better experience.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Description of the new feature"),": Please include a comprehensive decription of the new feature including what exactly is the expected output/outcome and the behaviour that is expected from the feature implementation.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Importance"),': Rate on a scale of 1 to 5 on the importance of the feature existing, 5 being that this feature is a "must-have" and 0 being "just a shower thought".'))),(0,i.kt)("h4",{id:"to-raise-an-issue-about-a-bugenhancement"},"To raise an issue about a bug/enhancement"),(0,i.kt)("p",null,"Please include the following when raising an issue about a bug:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Bug Description"),": Please include a description of the bug, how you encountered the bug (screenshots are appreciated), which steps led to that bug happening, and the browser/environment under which you were using the software. Being as specific as possible about the events that led to the bug happening and providing any other possible diagnostic information will make it easier to reproduce, debug and fix the bug.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Output received (current output)"),": What is the result/output that you are currently receiving (as a result of the bug)?")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Expected output"),": What is the expected output (the output that one should receive if the bug is fixed)?"))),(0,i.kt)("h2",{id:"raising-pull-requests-prs"},"Raising Pull Requests (PRs)"),(0,i.kt)("p",null,"After working on a feature, chore, or fix, please open a pull request with your changes from your branch to the main branch of the repository you are contributing to."),(0,i.kt)("p",null,"The PR requires approval by two maintainers, after which it can be merged. The merge will be made by the maintainers with the squash and merge strategy."),(0,i.kt)("p",null,"If there are any issues with the PR, the maintainers will leave comments while reviewing. Please feel free to tag the maintainers for any help/clarification required, or if your PR is getting stale (open for too many days without a review)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Before opening a PR, please ensure that you have run the linter and fixed any linting issues, and that all tests are working."),(0,i.kt)("h3",{id:"title-and-description-of-prs"},"Title and description of PRs"),(0,i.kt)("p",null,"The title convention for the PRs is same as that for commit messages (see above). Please also include a brief description of what the PR does and include a link to the issue(s) if there is/are any corresponding or relevant GitHub issue(s) for the changes made by the PR."),(0,i.kt)("p",null,"Your contributions are welcome!"))}d.isMDXComponent=!0},53894:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/be_sdlc-82ffaefd4401732fbd9456fa34df43d2.png"},90203:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);