__NUXT_JSONP__("/developer-resources/webhooks", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J){return {data:[{document:{slug:"webhooks",description:n,title:n,position:400,category:"Developer Resources",menuTitle:n,toc:[{id:t,depth:o,text:u},{id:v,depth:o,text:w},{id:x,depth:o,text:y},{id:z,depth:3,text:A}],body:{type:"root",children:[{type:a,tag:p,props:{id:t},children:[{type:a,tag:f,props:{href:"#triggers-available",ariaHidden:h,tabIndex:i},children:[{type:a,tag:j,props:{className:[k,l]},children:[]}]},{type:b,value:u}]},{type:b,value:d},{type:a,tag:m,props:{},children:[{type:b,value:"Webhooks allows user to trigger on certain operations on following database operations"}]},{type:b,value:d},{type:a,tag:"ul",props:{},children:[{type:b,value:d},{type:a,tag:q,props:{},children:[{type:b,value:"AFTER INSERT"}]},{type:b,value:d},{type:a,tag:q,props:{},children:[{type:b,value:"AFTER UPDATE"}]},{type:b,value:d},{type:a,tag:q,props:{},children:[{type:b,value:"AFTER DELETE"}]},{type:b,value:d}]},{type:b,value:d},{type:a,tag:m,props:{},children:[{type:b,value:"The triggers will trigger asynchronously without blocking the actual operation."}]},{type:b,value:d},{type:a,tag:p,props:{id:v},children:[{type:a,tag:f,props:{href:"#trigger-to-following-applicationsservices",ariaHidden:h,tabIndex:i},children:[{type:a,tag:j,props:{className:[k,l]},children:[]}]},{type:b,value:w}]},{type:b,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:a,tag:B,props:{},children:[{type:a,tag:C,props:{},children:[{type:a,tag:e,props:{},children:[{type:a,tag:g,props:{},children:[{type:b,value:"Trigger"}]},{type:a,tag:g,props:{},children:[{type:b,value:D}]}]}]},{type:a,tag:E,props:{},children:[{type:a,tag:e,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"Email"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Send email to certain email addresses"}]}]},{type:a,tag:e,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"Slack"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Notify via Slack channel"}]}]},{type:a,tag:e,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"Microsoft Teams"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Notify via Microsoft Teams channel"}]}]},{type:a,tag:e,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"Discord"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Notify via Discord channel"}]}]},{type:a,tag:e,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"Mattermost"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Notify via Mattermost channel"}]}]},{type:a,tag:e,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"Twilio"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Send SMS to certain mobile numbers"}]}]},{type:a,tag:e,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"Whatsapp Twilio"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Send Whatsapp messages to numbers using Twilio"}]}]},{type:a,tag:e,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"URL"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Invoke an HTTP API"}]}]}]}]},{type:b,value:d},{type:a,tag:p,props:{id:x},children:[{type:a,tag:f,props:{href:"#accessing-data",ariaHidden:h,tabIndex:i},children:[{type:a,tag:j,props:{className:[k,l]},children:[]}]},{type:b,value:y}]},{type:b,value:d},{type:a,tag:m,props:{},children:[{type:b,value:"The current row data and other details will be available in the hooks payload so the user can use "},{type:a,tag:f,props:{href:"https:\u002F\u002Fhandlebarsjs.com\u002Fguide\u002F#simple-expressions",rel:[F,G,H],target:I},children:[{type:b,value:"handlebar syntax"}]},{type:b,value:" to use data."}]},{type:b,value:d},{type:a,tag:"blockquote",props:{},children:[{type:b,value:d},{type:a,tag:m,props:{},children:[{type:b,value:"We are using "},{type:a,tag:f,props:{href:"https:\u002F\u002Fhandlebarsjs.com\u002F",rel:[F,G,H],target:I},children:[{type:b,value:"Handlebars"}]},{type:b,value:" library to parse the payload internally."}]},{type:b,value:d}]},{type:b,value:d},{type:a,tag:"h3",props:{id:z},children:[{type:a,tag:f,props:{href:"#available-values-in-context",ariaHidden:h,tabIndex:i},children:[{type:a,tag:j,props:{className:[k,l]},children:[]}]},{type:b,value:A}]},{type:b,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:a,tag:B,props:{},children:[{type:a,tag:C,props:{},children:[{type:a,tag:e,props:{},children:[{type:a,tag:g,props:{},children:[{type:b,value:"Name"}]},{type:a,tag:g,props:{},children:[{type:b,value:D}]},{type:a,tag:g,props:{},children:[{type:b,value:"Example"}]}]}]},{type:a,tag:E,props:{},children:[{type:a,tag:e,props:{},children:[{type:a,tag:c,props:{},children:[{type:a,tag:r,props:{},children:[{type:b,value:"data"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Contains row data"}]},{type:a,tag:c,props:{},children:[{type:a,tag:s,props:{},children:[{type:b,value:"{{ data.Title }}"}]}]}]},{type:a,tag:e,props:{},children:[{type:a,tag:c,props:{},children:[{type:a,tag:r,props:{},children:[{type:b,value:"user"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Logginned user object"}]},{type:a,tag:c,props:{},children:[{type:a,tag:s,props:{},children:[{type:b,value:"{{ user.id }}"}]}]}]},{type:a,tag:e,props:{},children:[{type:a,tag:c,props:{},children:[{type:a,tag:r,props:{},children:[{type:b,value:"env"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Environment values"}]},{type:a,tag:c,props:{},children:[{type:a,tag:s,props:{},children:[{type:b,value:"{{ env.SITE_URL }}"}]}]}]}]}]}]},dir:"\u002Fen\u002Fdeveloper-resources",path:"\u002Fen\u002Fdeveloper-resources\u002Fwebhooks",extension:".md",createdAt:J,updatedAt:J,to:"\u002Fdeveloper-resources\u002Fwebhooks"},prev:{slug:"graphql-apis",title:"GraphQL APIs",to:"\u002Fdeveloper-resources\u002Fgraphql-apis"},next:{slug:"api-tokens",title:"API Tokens",to:"\u002Fdeveloper-resources\u002Fapi-tokens"}}],fetch:{},mutations:[]}}("element","text","td","\n","tr","a","th","true",-1,"span","icon","icon-link","p","Webhooks",2,"h2","li","strong","code","triggers-available","Triggers available","trigger-to-following-applicationsservices","Trigger to following applications\u002Fservices","accessing-data","Accessing Data","available-values-in-context","Available values in context","table","thead","Details","tbody","nofollow","noopener","noreferrer","_blank","2021-12-02T05:05:53.199Z")));