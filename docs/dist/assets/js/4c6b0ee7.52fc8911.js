"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[3409],{22264:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>n,metadata:()=>c,toc:()=>o});var d=t(74848),i=t(28453);const n={title:"Environment variables",description:"Environment Variables for NocoDB!",hide_table_of_contents:!0,tags:["Open Source"],keywords:["NocoDB environment variables","NocoDB env variables","NocoDB envs","NocoDB env"]},r=void 0,c={id:"getting-started/self-hosted/environment-variables",title:"Environment variables",description:"Environment Variables for NocoDB!",source:"@site/docs/020.getting-started/050.self-hosted/020.environment-variables.md",sourceDirName:"020.getting-started/050.self-hosted",slug:"/getting-started/self-hosted/environment-variables",permalink:"/getting-started/self-hosted/environment-variables",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/020.getting-started/050.self-hosted/020.environment-variables.md",tags:[{label:"Open Source",permalink:"/tags/open-source"}],version:"current",sidebarPosition:20,frontMatter:{title:"Environment variables",description:"Environment Variables for NocoDB!",hide_table_of_contents:!0,tags:["Open Source"],keywords:["NocoDB environment variables","NocoDB env variables","NocoDB envs","NocoDB env"]},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/getting-started/self-hosted/installation"},next:{title:"Upgrading",permalink:"/getting-started/self-hosted/upgrading"}},l={},o=[];function h(e){const s={a:"a",code:"code",em:"em",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.p,{children:["For ",(0,d.jsx)(s.strong,{children:"production"})," use cases, it is recommended to set at least the following environment variables:"]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"NC_DB"}),": Specifies the connection string for your database. See our example database URLs ",(0,d.jsx)(s.a,{href:"https://github.com/nocodb/nocodb#docker",children:"here"}),"."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"NC_AUTH_JWT_SECRET"}),": Defines the secret key used for signing JSON Web Tokens (JWTs). This is crucial for ensuring the security and integrity of authentication tokens."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"NC_PUBLIC_URL"}),": Sets the base URL used for constructing URLs in email templates, generating the Swagger documentation URL, and handling backend URL needs. By default, it infers the URL from the incoming request on the backend. If the server is behind a proxy, this may result in incorrect URLs. Setting this explicitly ensures consistency across the application."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"NC_REDIS_URL"}),": Provides the connection string for your Redis server. Redis is used for caching and improving performance, so setting this variable ensures NocoDB can connect to your Redis instance."]}),"\n"]}),"\n",(0,d.jsx)(s.p,{children:"The following table lists all the environment variables that can be set to configure NocoDB:"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Variable"}),(0,d.jsx)(s.th,{children:"Description"}),(0,d.jsx)(s.th,{children:"If absent"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_DB"})}),(0,d.jsxs)(s.td,{children:["See our example database URLs ",(0,d.jsx)(s.a,{href:"https://github.com/nocodb/nocodb#docker",children:"here"}),"."]}),(0,d.jsxs)(s.td,{children:["A local SQLite database is created in root folder if ",(0,d.jsx)(s.code,{children:"NC_DB"})," is not set."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_DB_JSON"})}),(0,d.jsxs)(s.td,{children:["Can be used instead of ",(0,d.jsx)(s.code,{children:"NC_DB"})," and value should be valid knex connection JSON string."]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_DB_JSON_FILE"})}),(0,d.jsxs)(s.td,{children:["Can be used instead of ",(0,d.jsx)(s.code,{children:"NC_DB"})," and value should be a valid path to knex connection JSON file."]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"DATABASE_URL"})}),(0,d.jsxs)(s.td,{children:["Can be used instead of ",(0,d.jsx)(s.code,{children:"NC_DB"})," and value should be a JDBC URL string."]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"DATABASE_URL_FILE"})}),(0,d.jsxs)(s.td,{children:["Can be used instead of ",(0,d.jsx)(s.code,{children:"NC_DB"})," and value should be a valid path to a JDBC URL file."]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_AUTH_JWT_SECRET"})}),(0,d.jsx)(s.td,{children:"JWT secret used for auth and storing other secrets."}),(0,d.jsx)(s.td,{children:"A random secret is generated."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_PUBLIC_URL"})}),(0,d.jsx)(s.td,{children:"is the base URL for constructing URLs in email templates, generating the Swagger documentation URL, and handling backend URL requirements. Set it to your public-facing NocoDB URL for consistency across the application."}),(0,d.jsx)(s.td,{children:"By default, it infers the URL from the incoming request on the backend. If the server is behind a proxy, this may result in incorrect URLs."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_ADMIN_EMAIL"})}),(0,d.jsx)(s.td,{children:"Super admin e-mail address."}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_ADMIN_PASSWORD"})}),(0,d.jsxs)(s.td,{children:["Super admin password. The password should have at least 8 letters with one uppercase, one number and one special letter. Allowed special characters include ",(0,d.jsx)(s.code,{children:"$&+,:;=?@#|'.^*()%!_-\""}),"."]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"PORT"})}),(0,d.jsx)(s.td,{children:"Network port NocoDB runs on."}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"8080"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"DB_QUERY_LIMIT_DEFAULT"})}),(0,d.jsx)(s.td,{children:"Pagination limit."}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"25"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"DB_QUERY_LIMIT_GROUP_BY_GROUP"})}),(0,d.jsx)(s.td,{children:"Group per page limit."}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"10"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"DB_QUERY_LIMIT_GROUP_BY_RECORD"})}),(0,d.jsx)(s.td,{children:"Record per group limit."}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"10"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"DB_QUERY_LIMIT_MAX"})}),(0,d.jsx)(s.td,{children:"Maximum allowed pagination limit."}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"1000"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"DB_QUERY_LIMIT_MIN"})}),(0,d.jsx)(s.td,{children:"Minimum allowed pagination limit."}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"1"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_TOOL_DIR"})}),(0,d.jsx)(s.td,{children:"App directory to keep metadata and app related files in."}),(0,d.jsxs)(s.td,{children:["Defaults to the current working directory. In docker, maps to ",(0,d.jsx)(s.code,{children:"/usr/app/data/"})," for mounting volume."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_JWT_EXPIRES_IN"})}),(0,d.jsx)(s.td,{children:"JWT token expiry time"}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"10h"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_CONNECT_TO_EXTERNAL_DB_DISABLED"})}),(0,d.jsx)(s.td,{children:"Disable base creation on external databases."}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_MINIMAL_DBS"})}),(0,d.jsxs)(s.td,{children:["Create a new SQLite file for each base. All the SQLite database files are stored in the ",(0,d.jsx)(s.code,{children:"nc_minimal_dbs"})," folder in the current working directory. Enabling this option automatically sets ",(0,d.jsx)(s.code,{children:"NC_CONNECT_TO_EXTERNAL_DB_DISABLED"}),", i.e. disables base creation on external databases."]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_INVITE_ONLY_SIGNUP"})}),(0,d.jsxs)(s.td,{children:["Removed since version 0.99.0, and now it's recommended to use the ",(0,d.jsx)(s.a,{href:"/account-settings/oss-specific-details#enable--disable-signup",children:"super admin settings menu"}),". Disable public signup and allow signup only via invitations."]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NUXT_PUBLIC_NC_BACKEND_URL"})}),(0,d.jsx)(s.td,{children:"Custom backend URL."}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"http://localhost:8080"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_REQUEST_BODY_SIZE"})}),(0,d.jsxs)(s.td,{children:["Request body size ",(0,d.jsx)(s.a,{href:"https://expressjs.com/en/resources/middleware/body-parser.html#limit",children:"limit"})]}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"1048576"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_EXPORT_MAX_TIMEOUT"})}),(0,d.jsxs)(s.td,{children:["After ",(0,d.jsx)(s.code,{children:"NC_EXPORT_MAX_TIMEOUT"})," (in milliseconds), CSV gets downloaded in batches."]}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"5000"})," (5 seconds)."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_DASHBOARD_URL"})}),(0,d.jsx)(s.td,{children:"Custom dashboard URL path"}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"/dashboard"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_GOOGLE_CLIENT_ID"})}),(0,d.jsx)(s.td,{children:"Google client ID to enable Google authentication."}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_GOOGLE_CLIENT_SECRET"})}),(0,d.jsx)(s.td,{children:"Google client secret to enable Google authentication."}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_MIGRATIONS_DISABLED"})}),(0,d.jsx)(s.td,{children:"Disable NocoDB migrations."}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_MIN"})}),(0,d.jsx)(s.td,{children:"Disable default splash screen (initial welcome animation) and matrix screensaver."}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_SENTRY_DSN"})}),(0,d.jsx)(s.td,{children:"Data Source Name (DSN) for Sentry monitoring."}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_REDIS_URL"})}),(0,d.jsxs)(s.td,{children:["Redis URL. Example: ",(0,d.jsx)(s.code,{children:"redis://:authpassword@127.0.0.1:6380/4"})]}),(0,d.jsx)(s.td,{children:"Meta data is stored in memory."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_DISABLE_CACHE"})}),(0,d.jsxs)(s.td,{children:["Disable cache. To be used only while debugging. If ",(0,d.jsx)(s.code,{children:"true"}),", meta data is fetched from database instead of redis/cache."]}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"false"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_DISABLE_ERR_REPORT"})}),(0,d.jsx)(s.td,{children:"Disable error reporting."}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_DISABLE_TELE"})}),(0,d.jsx)(s.td,{children:"Disable telemetry."}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_DISABLE_EMAIL_AUTH"})}),(0,d.jsx)(s.td,{children:"Disable authentication via e-mail and password."}),(0,d.jsx)(s.td,{children:"Authentication via e-mail and password is enabled."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_DISABLE_AUDIT"})}),(0,d.jsx)(s.td,{children:"Disable audit log."}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"false"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_SMTP_FROM"})}),(0,d.jsx)(s.td,{children:"E-mail sender address for SMTP plugin."}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.em,{children:"SMTP plugin is disabled if this variable is not set."})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_SMTP_HOST"})}),(0,d.jsx)(s.td,{children:"E-mail server hostname for SMTP plugin."}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.em,{children:"SMTP plugin is disabled if this variable is not set."})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_SMTP_PORT"})}),(0,d.jsx)(s.td,{children:"E-mail server network for SMTP plugin."}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.em,{children:"SMTP plugin is disabled if this variable is not set."})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_SMTP_USERNAME"})}),(0,d.jsx)(s.td,{children:"Username for authentication in SMTP plugin."}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_SMTP_PASSWORD"})}),(0,d.jsx)(s.td,{children:"Password for authentication in SMTP plugin."}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_SMTP_SECURE"})}),(0,d.jsxs)(s.td,{children:["Enable secure authentication in SMTP plugin. Set to ",(0,d.jsx)(s.code,{children:"true"})," to enable, any other value is treated as ",(0,d.jsx)(s.code,{children:"false"}),"."]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_SMTP_IGNORE_TLS"})}),(0,d.jsxs)(s.td,{children:["Ignore TLS in SMTP plugin. Set to ",(0,d.jsx)(s.code,{children:"true"})," to ignore TLS, any other value is treated as ",(0,d.jsx)(s.code,{children:"false"}),". For more information, visit ",(0,d.jsx)(s.a,{href:"https://nodemailer.com/smtp/",children:"Nodemailer's SMTP documentation"}),"."]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_S3_BUCKET_NAME"})}),(0,d.jsx)(s.td,{children:"AWS S3 bucket name for S3 storage plugin."}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_S3_REGION"})}),(0,d.jsx)(s.td,{children:"AWS S3 region for S3 storage plugin."}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_S3_ACCESS_KEY"})}),(0,d.jsx)(s.td,{children:"AWS access key ID for S3 storage plugin."}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_S3_ACCESS_SECRET"})}),(0,d.jsx)(s.td,{children:"AWS access secret for S3 storage plugin."}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_ATTACHMENT_FIELD_SIZE"})}),(0,d.jsxs)(s.td,{children:["Maximum file size for ",(0,d.jsx)(s.a,{href:"/fields/field-types/custom-types/attachment/",children:"attachments"})," in bytes."]}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"20971520"})," (20 MiB)."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_MAX_ATTACHMENTS_ALLOWED"})}),(0,d.jsx)(s.td,{children:"Maximum number of attachments per cell."}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"10"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_SECURE_ATTACHMENTS"})}),(0,d.jsxs)(s.td,{children:["Allow accessing attachments only through pre-signed URLs. Set to ",(0,d.jsx)(s.code,{children:"true"})," to enable, any other value is treated as ",(0,d.jsx)(s.code,{children:"false"}),". (\u26a0 this will make existing links inaccessible \u26a0)"]}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"false"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_ATTACHMENT_EXPIRE_SECONDS"})}),(0,d.jsxs)(s.td,{children:["Number of seconds after which pre-signed attachment URLs will begin to expire. The URLs will expire after ",(0,d.jsx)(s.code,{children:"NC_ATTACHMENT_EXPIRE_SECONDS"})," plus 10 minutes at the very latest."]}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"7200"})," (2 hours)."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_AUTOMATION_LOG_LEVEL"})}),(0,d.jsxs)(s.td,{children:["Possible Values: ",(0,d.jsx)(s.code,{children:"OFF"}),", ",(0,d.jsx)(s.code,{children:"ERROR"}),", ",(0,d.jsx)(s.code,{children:"ALL"}),". See ",(0,d.jsx)(s.a,{href:"/automation/webhook/create-webhook#call-log",children:"Webhooks"})," for details."]}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"OFF"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_ALLOW_LOCAL_HOOKS"})}),(0,d.jsxs)(s.td,{children:["\u26a0 Allow webhooks to call local links, which can raise security issues. \u26a0 Set to ",(0,d.jsx)(s.code,{children:"true"})," to enable, any other value is treated as ",(0,d.jsx)(s.code,{children:"false"})]}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"false"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_SANITIZE_COLUMN_NAME"})}),(0,d.jsxs)(s.td,{children:["Sanitize the column name during column creation. Set to ",(0,d.jsx)(s.code,{children:"true"})," to enable, any other value is treated as ",(0,d.jsx)(s.code,{children:"false"})]}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"true"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NODE_OPTIONS"})}),(0,d.jsxs)(s.td,{children:["Node.js ",(0,d.jsx)(s.a,{href:"https://nodejs.org/api/cli.html#node_optionsoptions",children:"options"})," to pass to instance."]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"LITESTREAM_S3_ENDPOINT"})}),(0,d.jsxs)(s.td,{children:["URL of an S3-compatible object storage service endpoint for ",(0,d.jsx)(s.a,{href:"https://litestream.io/",children:"Litestream"})," replication of NocoDB's default SQLite database. Example: ",(0,d.jsx)(s.code,{children:"s3.eu-central-1.amazonaws.com"})]}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.a,{href:"https://aws.amazon.com/s3/",children:"AWS S3"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"LITESTREAM_S3_REGION"})}),(0,d.jsxs)(s.td,{children:["AWS region of the Litestream replication object storage bucket. Note that ",(0,d.jsx)(s.code,{children:"LITESTREAM_S3_ENDPOINT"})," takes precedence if configured (the endpoint URL includes the region)."]}),(0,d.jsxs)(s.td,{children:["Defaults to the ",(0,d.jsx)(s.a,{href:"https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-region.html",children:"default region configured in AWS"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"LITESTREAM_S3_BUCKET"})}),(0,d.jsx)(s.td,{children:"Name of the object storage bucket to store the Litestream replication in."}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.em,{children:"Litestream replication is disabled if this variable is not set."})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"LITESTREAM_S3_PATH"})}),(0,d.jsx)(s.td,{children:"Directory path to use within the Litestream replication object storage bucket."}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"nocodb"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"LITESTREAM_S3_ACCESS_KEY_ID"})}),(0,d.jsx)(s.td,{children:"Authentication key ID for the Litestream replication object storage bucket."}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.em,{children:"Litestream replication is disabled if this variable is not set."})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"LITESTREAM_S3_SECRET_ACCESS_KEY"})}),(0,d.jsx)(s.td,{children:"Authentication secret for the Litestream replication object storage bucket."}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.em,{children:"Litestream replication is disabled if this variable is not set."})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"LITESTREAM_S3_SKIP_VERIFY"})}),(0,d.jsx)(s.td,{children:"Whether to disable TLS verification for the Litestream replication object storage service. This is useful when testing against a local node such as MinIO and you are using self-signed certificates."}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"false"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"LITESTREAM_RETENTION"})}),(0,d.jsx)(s.td,{children:"Amount of time Litestream snapshot and WAL files are kept. After the retention period, a new snapshot is created and the old one is removed. WAL files that exist before the oldest snapshot will also be removed."}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"1440h"})," (60 days)."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"LITESTREAM_RETENTION_CHECK_INTERVAL"})}),(0,d.jsx)(s.td,{children:"Frequency in which Litestream will check if retention needs to be enforced."}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"72h"})," (3 days)."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"LITESTREAM_SNAPSHOT_INTERVAL"})}),(0,d.jsx)(s.td,{children:"Frequency in which new Litestream snapshots are created. A higher frequency reduces the time to restore since newer snapshots will have fewer WAL frames to apply. Retention still applies to these snapshots."}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"24h"})," (1 day)."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"LITESTREAM_SYNC_INTERVAL"})}),(0,d.jsx)(s.td,{children:"Frequency in which frames are pushed to the Litestream replica. Increasing this frequency can increase object storage costs significantly."}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"60s"})," (1 minute)."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"LITESTREAM_AGE_PUBLIC_KEY"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.a,{href:"https://age-encryption.org/",children:"age"})," public key generated by ",(0,d.jsx)(s.code,{children:"age-keygen"})," (",(0,d.jsx)(s.code,{children:"age1..."}),") or SSH public key (",(0,d.jsx)(s.code,{children:"ssh-ed25519 AAAA..."}),", ",(0,d.jsx)(s.code,{children:"ssh-rsa AAAA..."}),") used to encrypt the Litestream replication for. Refer to the relevant ",(0,d.jsx)(s.a,{href:"https://litestream.io/reference/config/#encryption",children:"Litestream documentation"})," for details."]}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.em,{children:"Litestream replication is unencrypted if this variable is not set."})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"LITESTREAM_AGE_SECRET_KEY"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.a,{href:"https://age-encryption.org/",children:"age"})," secret key (",(0,d.jsx)(s.code,{children:"AGE-SECRET-KEY-1..."}),") used to encrypt the Litestream replication with. Refer to the relevant ",(0,d.jsx)(s.a,{href:"https://litestream.io/reference/config/#encryption",children:"Litestream documentation"})," for details."]}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.em,{children:"Litestream replication is unencrypted if this variable is not set."})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"AWS_ACCESS_KEY_ID"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.em,{children:(0,d.jsx)(s.strong,{children:"Deprecated"})}),". Please use ",(0,d.jsx)(s.code,{children:"LITESTREAM_S3_ACCESS_KEY_ID"})," instead."]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"AWS_SECRET_ACCESS_KEY"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.em,{children:(0,d.jsx)(s.strong,{children:"Deprecated"})}),". Please use ",(0,d.jsx)(s.code,{children:"LITESTREAM_S3_SECRET_ACCESS_KEY"})," instead."]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"AWS_BUCKET"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.em,{children:(0,d.jsx)(s.strong,{children:"Deprecated"})}),". Please use ",(0,d.jsx)(s.code,{children:"LITESTREAM_S3_BUCKET"})," instead."]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"AWS_BUCKET_PATH"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.em,{children:(0,d.jsx)(s.strong,{children:"Deprecated"})}),". Please use ",(0,d.jsx)(s.code,{children:"LITESTREAM_S3_PATH"})," instead."]}),(0,d.jsx)(s.td,{})]})]})]})]})}function a(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>c});var d=t(96540);const i={},n=d.createContext(i);function r(e){const s=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),d.createElement(n.Provider,{value:s},e.children)}}}]);