"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[9618],{86660:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var t=i(74848),o=i(28453);const s={title:"Okta",description:"Learn how to configure Okta as an identity provider for NocoDB.",tags:["SSO","Okta","SAML"],keywords:["SSO","Okta","SAML","Authentication","Identity Provider"]},c=void 0,r={id:"account-settings/authentication/SAML-SSO/okta",title:"Okta",description:"Learn how to configure Okta as an identity provider for NocoDB.",source:"@site/docs/140.account-settings/030.authentication/030.SAML-SSO/010.okta.md",sourceDirName:"140.account-settings/030.authentication/030.SAML-SSO",slug:"/account-settings/authentication/SAML-SSO/okta",permalink:"/account-settings/authentication/SAML-SSO/okta",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/140.account-settings/030.authentication/030.SAML-SSO/010.okta.md",tags:[{label:"SSO",permalink:"/tags/sso"},{label:"Okta",permalink:"/tags/okta"},{label:"SAML",permalink:"/tags/saml"}],version:"current",sidebarPosition:10,frontMatter:{title:"Okta",description:"Learn how to configure Okta as an identity provider for NocoDB.",tags:["SSO","Okta","SAML"],keywords:["SSO","Okta","SAML","Authentication","Identity Provider"]},sidebar:"tutorialSidebar",previous:{title:"SAML",permalink:"/category/saml"},next:{title:"Auth0",permalink:"/account-settings/authentication/SAML-SSO/auth0"}},a={},d=[{value:"NocoDB, Retrieve <code>SAML SSO</code> Configuration details",id:"nocodb-retrieve-saml-sso-configuration-details",level:3},{value:"Okta, Configure NocoDB as an Application",id:"okta-configure-nocodb-as-an-application",level:3},{value:"NocoDB, Configure Okta as an Identity Provider",id:"nocodb-configure-okta-as-an-identity-provider",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["For SSO Access - please reach ",(0,t.jsx)(n.a,{href:"https://calendly.com/nocodb",children:(0,t.jsx)(n.strong,{children:"out to sales team"})}),"."]})}),"\n",(0,t.jsx)(n.p,{children:"This article briefs about the steps to configure Okta as Identity service provider for NocoDB"}),"\n",(0,t.jsxs)(n.h3,{id:"nocodb-retrieve-saml-sso-configuration-details",children:["NocoDB, Retrieve ",(0,t.jsx)(n.code,{children:"SAML SSO"})," Configuration details"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsx)(n.code,{children:"Account Settings"})]}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.code,{children:"Authentication (SSO)"})]}),"\n",(0,t.jsxs)(n.li,{children:["Click on ",(0,t.jsx)(n.code,{children:"New Provider"})," button"]}),"\n",(0,t.jsxs)(n.li,{children:["On the Popup modal, Specify a ",(0,t.jsx)(n.code,{children:"Display name"})," for the provider; note that, this name will be used to display the provider on the login page"]}),"\n",(0,t.jsxs)(n.li,{children:["Retrieve ",(0,t.jsx)(n.code,{children:"Redirect URL"})," & ",(0,t.jsx)(n.code,{children:"Audience / Entity ID"}),"; these information will be required to be configured later with the Identity Provider"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"SAML SSO Configuration",src:i(21861).A+"",width:"2420",height:"1306"}),"\n",(0,t.jsx)(n.img,{alt:"SAML SSO Configuration",src:i(88546).A+"",width:"2162",height:"1446"}),"\n",(0,t.jsx)(n.img,{alt:"SAML SSO Configuration",src:i(79051).A+"",width:"1366",height:"1614"})]}),"\n",(0,t.jsx)(n.h3,{id:"okta-configure-nocodb-as-an-application",children:"Okta, Configure NocoDB as an Application"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Sign in to your ",(0,t.jsx)(n.a,{href:"https://www.okta.com/",children:"Okta account"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Navigate to ",(0,t.jsx)(n.code,{children:"Applications"})," > ",(0,t.jsx)(n.code,{children:"Applications"})]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.code,{children:"Create App Integration"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["In the pop-up with title ",(0,t.jsx)(n.code,{children:"Create a new app integration"})," choose ",(0,t.jsx)(n.code,{children:"SAML 2.0"})," as the Sign-in method"]}),"\n",(0,t.jsxs)(n.li,{children:["On the ",(0,t.jsx)(n.code,{children:"Create SAML Integration"})," page, in the General settings - provide a name for your app; click ",(0,t.jsx)(n.code,{children:"Next"})]}),"\n",(0,t.jsxs)(n.li,{children:["In the ",(0,t.jsx)(n.code,{children:"Configure SAML"})," section:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Enter the ",(0,t.jsx)(n.code,{children:"Redirect URL"})," copied from NocoDB in the ",(0,t.jsx)(n.code,{children:"Single sign-on URL"})," field."]}),"\n",(0,t.jsxs)(n.li,{children:["Add the ",(0,t.jsx)(n.code,{children:"Audience URI"})," copied from NocoDB in the ",(0,t.jsx)(n.code,{children:"Audience URI (SP Entity ID)"})," field."]}),"\n",(0,t.jsxs)(n.li,{children:["Choose ",(0,t.jsx)(n.code,{children:"Email Address"})," from the ",(0,t.jsx)(n.code,{children:"Name ID format"})," options."]}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.code,{children:"Email"})," from the ",(0,t.jsx)(n.code,{children:"Application user-name"})," options."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.code,{children:"Next"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Complete any additional information in the final step and click ",(0,t.jsx)(n.code,{children:"Finish"})]}),"\n",(0,t.jsxs)(n.li,{children:["On your application's homepage,","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Navigate to the ",(0,t.jsx)(n.code,{children:"Sign-on"})," tab"]}),"\n",(0,t.jsxs)(n.li,{children:["Copy the ",(0,t.jsx)(n.code,{children:"Metadata URL"})," from the ",(0,t.jsx)(n.code,{children:"SAML 2.0"})," section"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Go to the ",(0,t.jsx)(n.code,{children:"Assignments"})," tab and click ",(0,t.jsx)(n.code,{children:"Assign"})," to assign people or groups to this application."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"nocodb-configure-okta-as-an-identity-provider",children:"NocoDB, Configure Okta as an Identity Provider"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsx)(n.code,{children:"Account Settings"})," > ",(0,t.jsx)(n.code,{children:"Authentication (SSO)"})," > ",(0,t.jsx)(n.code,{children:"SAML"})]}),"\n",(0,t.jsxs)(n.li,{children:['On the "Register SAML Identity Provider" modal, insert ',(0,t.jsx)(n.code,{children:"Metadata URL"})," retrieved in step above; alternatively you can configure XML directly as well"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Save"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"SAML SSO Configuration",src:i(12788).A+"",width:"1366",height:"1614"})}),"\n",(0,t.jsxs)(n.p,{children:["For Sign-in's, user should be able to now see ",(0,t.jsx)(n.code,{children:"Sign in with <SSO>"})," option."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"SAML SSO Configuration",src:i(95652).A+"",width:"1712",height:"1442"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Post sign-out, refresh page (for the first time) if you do not see ",(0,t.jsx)(n.code,{children:"Sign in with <SSO>"})," option"]})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},88546:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SAML-2-9ad2e18f3eb498cd699d0f627fb2bb65.png"},79051:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SAML-3-3f208fb861d8e91cb30ecba18c9d7ae8.png"},12788:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SAML-4-f2e6f8c1cb091f01fbc7c0901bf1fc84.png"},21861:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SSO-1-aa9135167c7a7cfb680e4fa5e50c86a4.png"},95652:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SSO-SignIn-1221ec860763be25257e0e80e24891ec.png"},28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>r});var t=i(96540);const o={},s=t.createContext(o);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);