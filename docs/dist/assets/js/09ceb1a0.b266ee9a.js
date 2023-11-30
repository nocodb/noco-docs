"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[4936],{50038:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=t(85893),o=t(11151);const s={title:"Development Setup",description:"How to set-up your development environment"},r=void 0,c={id:"engineering/development-setup",title:"Development Setup",description:"How to set-up your development environment",source:"@site/versioned_docs/version-0.109.7/050.engineering/030.development-setup.md",sourceDirName:"050.engineering",slug:"/engineering/development-setup",permalink:"/0.109.7/engineering/development-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/versioned_docs/version-0.109.7/050.engineering/030.development-setup.md",tags:[],version:"0.109.7",sidebarPosition:30,frontMatter:{title:"Development Setup",description:"How to set-up your development environment"},sidebar:"tutorialSidebar",previous:{title:"Repository structure",permalink:"/0.109.7/engineering/repository-structure"},next:{title:"Writing Unit Tests",permalink:"/0.109.7/engineering/unit-testing"}},d={},l=[{value:"Clone the repo",id:"clone-the-repo",level:2},{value:"Build SDK",id:"build-sdk",level:2},{value:"Build Backend",id:"build-backend",level:2},{value:"Build Frontend",id:"build-frontend",level:2},{value:"Enabling CI-CD for Draft PR",id:"enabling-ci-cd-for-draft-pr",level:2},{value:"Accessing CI-CD Failure Screenshots",id:"accessing-ci-cd-failure-screenshots",level:2},{value:"Accessing &#39;Easter egg&#39; menu",id:"accessing-easter-egg-menu",level:2}];function a(e){const n={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"clone-the-repo",children:"Clone the repo"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"git clone https://github.com/nocodb/nocodb\ncd nocodb/packages\n"})}),"\n",(0,i.jsx)(n.h2,{id:"build-sdk",children:"Build SDK"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# build nocodb-sdk\ncd nocodb-sdk\nnpm install\nnpm run build\n"})}),"\n",(0,i.jsx)(n.h2,{id:"build-backend",children:"Build Backend"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# build backend - runs on port 8080\ncd ../nocodb\nnpm install\nnpm run watch:run\n"})}),"\n",(0,i.jsx)(n.h2,{id:"build-frontend",children:"Build Frontend"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# build frontend - runs on port 3000\ncd ../nc-gui\nnpm install\nnpm run dev \n"})}),"\n",(0,i.jsx)(n.p,{children:"Any changes made to frontend and backend will be automatically reflected in the browser."}),"\n",(0,i.jsx)(n.h2,{id:"enabling-ci-cd-for-draft-pr",children:"Enabling CI-CD for Draft PR"}),"\n",(0,i.jsxs)(n.p,{children:["CI-CD will be triggered on moving a PR from draft state to ",(0,i.jsx)(n.code,{children:"Ready for review"})," state & on pushing changes to ",(0,i.jsx)(n.code,{children:"Develop"}),". To verify CI-CD before requesting for review, add label ",(0,i.jsx)(n.code,{children:"trigger-CI"})," on Draft PR."]}),"\n",(0,i.jsx)(n.h2,{id:"accessing-ci-cd-failure-screenshots",children:"Accessing CI-CD Failure Screenshots"}),"\n",(0,i.jsxs)(n.p,{children:["For Playwright tests, screenshots are captured on the tests. These will provide vital clues for debugging possible issues observed in CI-CD. To access screenshots, Open link associated with CI-CD run & click on ",(0,i.jsx)(n.code,{children:"Artifacts"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/86527202/192965070-dc04b952-70fb-4197-b4bd-ca7eda066e60.png",alt:"Screenshot 2022-09-29 at 12 43 37 PM"})}),"\n",(0,i.jsx)(n.h2,{id:"accessing-easter-egg-menu",children:"Accessing 'Easter egg' menu"}),"\n",(0,i.jsxs)(n.p,{children:["Double click twice on empty space between ",(0,i.jsx)(n.code,{children:"View list"})," & ",(0,i.jsx)(n.code,{children:"Share"})," button to the left top of Grid view; following options become accessible"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Export Cache"}),"\n",(0,i.jsx)(n.li,{children:"Delete Cache"}),"\n",(0,i.jsx)(n.li,{children:"Debug Meta"}),"\n",(0,i.jsx)(n.li,{children:"Toggle Beta Features"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/nocodb/nocodb/assets/86527202/fe2765fa-5796-4d26-8c12-e71b8226872e",alt:"Screenshot 2023-05-23 at 8 35 14 PM"})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var i=t(67294);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);