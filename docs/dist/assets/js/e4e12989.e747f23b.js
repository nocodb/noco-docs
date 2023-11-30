"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[8e3],{42024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=n(85893),i=n(11151);const r={title:"Writing Unit Tests",description:"Overview to Unit Testing"},c=void 0,a={id:"engineering/unit-testing",title:"Writing Unit Tests",description:"Overview to Unit Testing",source:"@site/versioned_docs/version-0.109.7/050.engineering/040.unit-testing.md",sourceDirName:"050.engineering",slug:"/engineering/unit-testing",permalink:"/0.109.7/engineering/unit-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/versioned_docs/version-0.109.7/050.engineering/040.unit-testing.md",tags:[],version:"0.109.7",sidebarPosition:40,frontMatter:{title:"Writing Unit Tests",description:"Overview to Unit Testing"},sidebar:"tutorialSidebar",previous:{title:"Development Setup",permalink:"/0.109.7/engineering/development-setup"},next:{title:"Playwright E2E Testing",permalink:"/0.109.7/engineering/playwright"}},o={},l=[{value:"Unit Tests",id:"unit-tests",level:2},{value:"Pre-requisites",id:"pre-requisites",level:3},{value:"Setup",id:"setup",level:3},{value:"Run Tests",id:"run-tests",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Factory Pattern",id:"factory-pattern",level:3},{value:"Walk through of writing a Unit Test",id:"walk-through-of-writing-a-unit-test",level:3},{value:"Configure test",id:"configure-test",level:4},{value:"Test case",id:"test-case",level:4},{value:"Integrating the New Test Suite",id:"integrating-the-new-test-suite",level:4},{value:"Seeding Sample DB (Sakila)",id:"seeding-sample-db-sakila",level:3}];function d(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"unit-tests",children:"Unit Tests"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"All individual unit tests are independent of each other. We don't use any shared state between tests."}),"\n",(0,s.jsxs)(t.li,{children:["Test environment includes ",(0,s.jsx)(t.code,{children:"sakila"})," sample database and any change to it by a test is reverted before running other tests."]}),"\n",(0,s.jsxs)(t.li,{children:["While running unit tests, it tries to connect to mysql server running on ",(0,s.jsx)(t.code,{children:"localhost:3306"})," with username ",(0,s.jsx)(t.code,{children:"root"})," and password ",(0,s.jsx)(t.code,{children:"password"})," (which can be configured) and if not found, it will use ",(0,s.jsx)(t.code,{children:"sqlite"})," as a fallback, hence no requirement of any sql server to run tests."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"MySQL is preferred - however tests can fallback on SQLite too"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"setup",children:"Setup"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"cd packages/nocodb\n\nnpm install\n\n# add a .env file\ncp tests/unit/.env.sample tests/unit/.env\n\n# open .env file\nopen tests/unit/.env\n"})}),"\n",(0,s.jsx)(t.p,{children:"Configure the following variables"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"DB_HOST : host\nDB_PORT : port\nDB_USER : username\nDB_PASSWORD : password"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"run-tests",children:"Run Tests"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm run test:unit\n"})}),"\n",(0,s.jsx)(t.h3,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,s.jsxs)(t.p,{children:["The root folder for unit tests is ",(0,s.jsx)(t.code,{children:"packages/nocodb/tests/unit"})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"rest"})," folder contains all the test suites for rest apis."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"model"})," folder contains all the test suites for models."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"factory"})," folder contains all the helper functions to create test data."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"init"})," folder contains helper functions to configure test environment."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"index.test.ts"})," is the root test suite file which imports all the test suites."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"TestDbMngr.ts"})," is a helper class to manage test databases (i.e. creating, dropping, etc.)."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"factory-pattern",children:"Factory Pattern"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Use factories for create/update/delete data. No data should be directly create/updated/deleted in the test."}),"\n",(0,s.jsx)(t.li,{children:"While writing a factory make sure that it can be used with as less parameters as possible and use default values for other parameters."}),"\n",(0,s.jsxs)(t.li,{children:["Use named parameters for factories.","\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"createUser({ email, password})\n"})}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"Use one file per factory."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"walk-through-of-writing-a-unit-test",children:"Walk through of writing a Unit Test"}),"\n",(0,s.jsxs)(t.p,{children:["We will create an ",(0,s.jsx)(t.code,{children:"Table"})," test suite as an example."]}),"\n",(0,s.jsx)(t.h4,{id:"configure-test",children:"Configure test"}),"\n",(0,s.jsxs)(t.p,{children:["We will configure ",(0,s.jsx)(t.code,{children:"beforeEach"})," which is called before each test is executed. We will use ",(0,s.jsx)(t.code,{children:"init"})," function from ",(0,s.jsx)(t.code,{children:"nocodb/packages/nocodb/tests/unit/init/index.ts"}),", which is a helper function which configures the test environment(i.e resetting state, etc.)."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"init"})," does the following things -"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["It initializes a ",(0,s.jsx)(t.code,{children:"Noco"})," instance(reused in all tests)."]}),"\n",(0,s.jsxs)(t.li,{children:["Restores ",(0,s.jsx)(t.code,{children:"meta"})," and ",(0,s.jsx)(t.code,{children:"sakila"})," database to its initial state."]}),"\n",(0,s.jsx)(t.li,{children:"Creates the root user."}),"\n",(0,s.jsxs)(t.li,{children:["Returns ",(0,s.jsx)(t.code,{children:"context"})," which has ",(0,s.jsx)(t.code,{children:"auth token"})," for the created user, node server instance(",(0,s.jsx)(t.code,{children:"app"}),"), and ",(0,s.jsx)(t.code,{children:"dbConfig"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["We will use ",(0,s.jsx)(t.code,{children:"createProject"})," and ",(0,s.jsx)(t.code,{children:"createProject"})," factories to create a project and a table."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"let context;\n\nbeforeEach(async function () {\n  context = await init();\n\n  project = await createProject(context);\n  table = await createTable(context, project);\n});\n"})}),"\n",(0,s.jsx)(t.h4,{id:"test-case",children:"Test case"}),"\n",(0,s.jsxs)(t.p,{children:["We will use ",(0,s.jsx)(t.code,{children:"it"})," function to create a test case. We will use ",(0,s.jsx)(t.code,{children:"supertest"})," to make a request to the server. We use ",(0,s.jsx)(t.code,{children:"expect"}),"(",(0,s.jsx)(t.code,{children:"chai"}),") to assert the response."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"it('Get table list', async function () {\n  const response = await request(context.app)\n    .get(`/api/v1/db/meta/projects/${project.id}/tables`)\n    .set('xc-auth', context.token)\n    .send({})\n    .expect(200);\n\n  expect(response.body.list).to.be.an('array').not.empty;\n});\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["We can also run individual test by using ",(0,s.jsx)(t.code,{children:".only"})," in ",(0,s.jsx)(t.code,{children:"describe"})," or ",(0,s.jsx)(t.code,{children:"it"})," function and the running the test command."]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"it.only('Get table list', async () => {\n"})}),"\n",(0,s.jsx)(t.h4,{id:"integrating-the-new-test-suite",children:"Integrating the New Test Suite"}),"\n",(0,s.jsxs)(t.p,{children:["We create a new file ",(0,s.jsx)(t.code,{children:"table.test.ts"})," in ",(0,s.jsx)(t.code,{children:"packages/nocodb/tests/unit/rest/tests"})," directory."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"import 'mocha';\nimport request from 'supertest';\nimport init from '../../init';\nimport { createTable, getAllTables } from '../../factory/table';\nimport { createProject } from '../../factory/project';\nimport { defaultColumns } from '../../factory/column';\nimport Model from '../../../../src/lib/models/Model';\nimport { expect } from 'chai';\n\nfunction tableTest() {\n  let context;\n  let project;\n  let table;\n\n  beforeEach(async function () {\n    context = await init();\n\n    project = await createProject(context);\n    table = await createTable(context, project);\n  });\n\n  it('Get table list', async function () {\n    const response = await request(context.app)\n      .get(`/api/v1/db/meta/projects/${project.id}/tables`)\n      .set('xc-auth', context.token)\n      .send({})\n      .expect(200);\n\n    expect(response.body.list).to.be.an('array').not.empty;\n  });\n}\n\nexport default function () {\n  describe('Table', tableTests);\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["We can then import the ",(0,s.jsx)(t.code,{children:"Table"})," test suite to ",(0,s.jsx)(t.code,{children:"Rest"})," test suite in ",(0,s.jsx)(t.code,{children:"packages/nocodb/tests/unit/rest/index.test.ts"})," file(",(0,s.jsx)(t.code,{children:"Rest"})," test suite is imported in the root test suite file which is ",(0,s.jsx)(t.code,{children:"packages/nocodb/tests/unit/index.test.ts"}),")."]}),"\n",(0,s.jsx)(t.h3,{id:"seeding-sample-db-sakila",children:"Seeding Sample DB (Sakila)"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"\nfunction tableTest() {\n  let context;\n  let sakilaProject: Project;\n  let customerTable: Model;\n\n  beforeEach(async function () {\n    context = await init();\n    \n    /******* Start : Seeding sample database **********/\n    sakilaProject = await createSakilaProject(context);\n    /******* End : Seeding sample database **********/\n    \n    customerTable = await getTable({project: sakilaProject, name: 'customer'})\n  });\n\n  it('Get table data list', async function () {\n    const response = await request(context.app)\n      .get(`/api/v1/db/data/noco/${sakilaProject.id}/${customerTable.id}`)\n      .set('xc-auth', context.token)\n      .send({})\n      .expect(200);\n\n    expect(response.body.list[0]['FirstName']).to.equal('MARY');\n  });\n}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>c});var s=n(67294);const i={},r=s.createContext(i);function c(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);