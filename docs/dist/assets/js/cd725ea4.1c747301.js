"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[7708],{29585:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var o=l(74848),t=l(28453);const i={title:"Rollup",description:"Understanding Rollup Column!"},s=void 0,c={id:"setup-and-usages/rollup",title:"Rollup",description:"Understanding Rollup Column!",source:"@site/versioned_docs/version-0.109.7/030.setup-and-usages/080.rollup.md",sourceDirName:"030.setup-and-usages",slug:"/setup-and-usages/rollup",permalink:"/0.109.7/setup-and-usages/rollup",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/versioned_docs/version-0.109.7/030.setup-and-usages/080.rollup.md",tags:[],version:"0.109.7",sidebarPosition:80,frontMatter:{title:"Rollup",description:"Understanding Rollup Column!"},sidebar:"tutorialSidebar",previous:{title:"Lookup",permalink:"/0.109.7/setup-and-usages/lookup"},next:{title:"Formulas",permalink:"/0.109.7/setup-and-usages/formulas"}},r={},a=[{value:"Rollup",id:"rollup",level:2},{value:"RollUp AGGREGATION functions supported",id:"rollup-aggregation-functions-supported",level:3},{value:"Adding a rollup column",id:"adding-a-rollup-column",level:2},{value:"1. Add new column",id:"1-add-new-column",level:4},{value:"2. Feed column name",id:"2-feed-column-name",level:4},{value:"3. Select Column type as &#39;Rollup&#39;",id:"3-select-column-type-as-rollup",level:4},{value:"4. Choose Child Table",id:"4-choose-child-table",level:4},{value:"5. Choose on \u200bChild column",id:"5-choose-on-child-column",level:4},{value:"6. Select \u200bAggregate function",id:"6-select-aggregate-function",level:4},{value:"7. Click on Save",id:"7-click-on-save",level:4}];function d(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"rollup",children:"Rollup"}),"\n",(0,o.jsx)(n.p,{children:"Sample Organization structure:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"5 Departments, each department has a team name & associated team code"}),"\n",(0,o.jsx)(n.li,{children:"5 employees working at different Departments"}),"\n",(0,o.jsxs)(n.li,{children:["Teams ",(0,o.jsx)(n.strong,{children:"has many"})," Employees : relationship has been defined"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://user-images.githubusercontent.com/86527202/189296162-536185f1-31ed-40df-b668-deed7ad630aa.png",alt:"Screenshot 2022-09-09 at 12 57 32 PM"})}),"\n",(0,o.jsx)(n.h3,{id:"rollup-aggregation-functions-supported",children:"RollUp AGGREGATION functions supported"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Count"}),"\n",(0,o.jsx)(n.li,{children:"Minimum"}),"\n",(0,o.jsx)(n.li,{children:"Maximum"}),"\n",(0,o.jsx)(n.li,{children:"Average"}),"\n",(0,o.jsx)(n.li,{children:"Sum"}),"\n",(0,o.jsx)(n.li,{children:"Count Distinct"}),"\n",(0,o.jsx)(n.li,{children:"Sum Distinct"}),"\n",(0,o.jsx)(n.li,{children:"Average Distinct"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Now, we can explore how to extract employee count information per team using ",(0,o.jsx)(n.strong,{children:'"ROLLUP"'})," columns"]}),"\n",(0,o.jsx)(n.h2,{id:"adding-a-rollup-column",children:"Adding a rollup column"}),"\n",(0,o.jsx)(n.h4,{id:"1-add-new-column",children:"1. Add new column"}),"\n",(0,o.jsx)(n.p,{children:"Click on '+' icon to the left of column headers in Departments table"}),"\n",(0,o.jsx)(n.h4,{id:"2-feed-column-name",children:"2. Feed column name"}),"\n",(0,o.jsx)(n.h4,{id:"3-select-column-type-as-rollup",children:"3. Select Column type as 'Rollup'"}),"\n",(0,o.jsx)(n.h4,{id:"4-choose-child-table",children:"4. Choose Child Table"}),"\n",(0,o.jsx)(n.p,{children:"Table Employee in our example"}),"\n",(0,o.jsx)(n.h4,{id:"5-choose-on-child-column",children:"5. Choose on \u200bChild column"}),"\n",(0,o.jsx)(n.p,{children:"Pick appropriate column for aggreagation"}),"\n",(0,o.jsx)(n.h4,{id:"6-select-aggregate-function",children:"6. Select \u200bAggregate function"}),"\n",(0,o.jsx)(n.p,{children:'Aggregate function will be "count" in our case'}),"\n",(0,o.jsx)(n.h4,{id:"7-click-on-save",children:"7. Click on Save"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://user-images.githubusercontent.com/86527202/189297619-4d5c815b-6c97-41fa-978e-9b645448e508.png",alt:"Screenshot 2022-09-09 at 1 03 49 PM"})}),"\n",(0,o.jsxs)(n.p,{children:["Column ",(0,o.jsx)(n.code,{children:"Employee Count"})," is populated with appropriate information"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://user-images.githubusercontent.com/35857179/194856842-e35a6424-fb95-4805-8efa-a559563e4b71.png",alt:"image"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>s,x:()=>c});var o=l(96540);const t={},i=o.createContext(t);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);