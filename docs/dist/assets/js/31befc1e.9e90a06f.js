"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[6223],{81285:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var i=a(74848),t=a(28453);const l={title:"Date functions",description:"This article explains various date functions that can be used in formula fields.",tags:["Fields","Field types","Formula","Date & Time"],keywords:["Fields","Field types","Formula","Date & Time","Create formula field","Date functions"]},s=void 0,r={id:"fields/field-types/formula/date-functions",title:"Date functions",description:"This article explains various date functions that can be used in formula fields.",source:"@site/docs/070.fields/040.field-types/060.formula/040.date-functions.md",sourceDirName:"070.fields/040.field-types/060.formula",slug:"/fields/field-types/formula/date-functions",permalink:"/fields/field-types/formula/date-functions",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/070.fields/040.field-types/060.formula/040.date-functions.md",tags:[{label:"Fields",permalink:"/tags/fields"},{label:"Field types",permalink:"/tags/field-types"},{label:"Formula",permalink:"/tags/formula"},{label:"Date & Time",permalink:"/tags/date-time"}],version:"current",sidebarPosition:40,frontMatter:{title:"Date functions",description:"This article explains various date functions that can be used in formula fields.",tags:["Fields","Field types","Formula","Date & Time"],keywords:["Fields","Field types","Formula","Date & Time","Create formula field","Date functions"]},sidebar:"tutorialSidebar",previous:{title:"String functions",permalink:"/fields/field-types/formula/string-functions"},next:{title:"Conditional Expressions",permalink:"/fields/field-types/formula/conditional-expressions"}},d={},o=[{value:"DATETIME_DIFF",id:"datetime_diff",level:2},{value:"Syntax",id:"syntax",level:4},{value:"Sample",id:"sample",level:4},{value:"Remark",id:"remark",level:4},{value:"DATEADD",id:"dateadd",level:2},{value:"Syntax",id:"syntax-1",level:4},{value:"Sample",id:"sample-1",level:4},{value:"Conditional Example",id:"conditional-example",level:4},{value:"Remark",id:"remark-1",level:4},{value:"NOW",id:"now",level:2},{value:"Syntax",id:"syntax-2",level:4},{value:"Sample",id:"sample-2",level:4},{value:"Conditional Example",id:"conditional-example-1",level:4},{value:"Remark",id:"remark-2",level:4},{value:"WEEKDAY",id:"weekday",level:2},{value:"Syntax",id:"syntax-3",level:4},{value:"Sample",id:"sample-3",level:4},{value:"Remark",id:"remark-3",level:4},{value:"DATESTR",id:"datestr",level:2},{value:"Syntax",id:"syntax-4",level:4},{value:"Sample",id:"sample-4",level:4},{value:"Remark",id:"remark-4",level:4},{value:"DAY",id:"day",level:2},{value:"Syntax",id:"syntax-5",level:4},{value:"Sample",id:"sample-5",level:4},{value:"Remark",id:"remark-5",level:4},{value:"YEAR",id:"year",level:2},{value:"Syntax",id:"syntax-6",level:4},{value:"Sample",id:"sample-6",level:4},{value:"Remark",id:"remark-6",level:4},{value:"MONTH",id:"month",level:2},{value:"Syntax",id:"syntax-7",level:4},{value:"Sample",id:"sample-7",level:4},{value:"Remark",id:"remark-7",level:4},{value:"HOUR",id:"hour",level:2},{value:"Syntax",id:"syntax-8",level:4},{value:"Sample",id:"sample-8",level:4},{value:"Remark",id:"remark-8",level:4},{value:"Related Articles",id:"related-articles",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This cheat sheet provides a quick reference guide for various date functions commonly used in data analysis and programming. Each function is accompanied by its syntax, a sample usage, and a brief description."}),"\n",(0,i.jsx)(n.h2,{id:"datetime_diff",children:"DATETIME_DIFF"}),"\n",(0,i.jsx)(n.p,{children:"The DATETIME_DIFF function calculates the difference between two dates in various units."}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:'DATETIME_DIFF(date1, date2, ["milliseconds" | "ms" | "seconds" | "s" | "minutes" | "m" | "hours" | "h" | "days" | "d" | "weeks" | "w" | "months" | "M" | "quarters" | "Q" | "years" | "y"])\n'})}),"\n",(0,i.jsx)(n.h4,{id:"sample",children:"Sample"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:'DATETIME_DIFF("2022/10/14", "2022/10/15", "seconds") => -86400\n'})}),"\n",(0,i.jsx)(n.h4,{id:"remark",children:"Remark"}),"\n",(0,i.jsx)(n.p,{children:"This function compares two dates and returns the difference in the specified unit. Positive integers indicate that the second date is in the past compared to the first, and vice versa for negative values."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"dateadd",children:"DATEADD"}),"\n",(0,i.jsx)(n.p,{children:"The DATEADD function adds a specified value to a date or datetime."}),"\n",(0,i.jsx)(n.h4,{id:"syntax-1",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:'DATEADD(date | datetime, value, ["day" | "week" | "month" | "year"])\n'})}),"\n",(0,i.jsx)(n.h4,{id:"sample-1",children:"Sample"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:"DATEADD('2022-03-14', 1, 'day')     => 2022-03-15\nDATEADD('2022-03-14', 1, 'week')    => 2022-03-21\nDATEADD('2022-03-14', 1, 'month')   => 2022-04-14\nDATEADD('2022-03-14', 1, 'year')    => 2023-03-14\n"})}),"\n",(0,i.jsx)(n.h4,{id:"conditional-example",children:"Conditional Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:'IF(NOW() < DATEADD(date, 10, \'day\'), "true", "false") => If the current date is less than the specified date plus 10 days, it returns true. Otherwise, it returns false.\n'})}),"\n",(0,i.jsx)(n.h4,{id:"remark-1",children:"Remark"}),"\n",(0,i.jsx)(n.p,{children:"This function supports date and datetime fields and can handle negative values."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"now",children:"NOW"}),"\n",(0,i.jsx)(n.p,{children:"The NOW function returns the current time and day."}),"\n",(0,i.jsx)(n.h4,{id:"syntax-2",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:"NOW()\n"})}),"\n",(0,i.jsx)(n.h4,{id:"sample-2",children:"Sample"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:"NOW() => 2022-05-19 17:20:43 (current date & time)\n"})}),"\n",(0,i.jsx)(n.h4,{id:"conditional-example-1",children:"Conditional Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:'IF(NOW() < date, "true", "false") => If the current date is less than the specified date, it returns true. Otherwise, it returns false.\n'})}),"\n",(0,i.jsx)(n.h4,{id:"remark-2",children:"Remark"}),"\n",(0,i.jsx)(n.p,{children:"This function provides the current time and day, supporting datetime fields and negative values."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"weekday",children:"WEEKDAY"}),"\n",(0,i.jsx)(n.p,{children:"The WEEKDAY function returns the day of the week as an integer."}),"\n",(0,i.jsx)(n.h4,{id:"syntax-3",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:"WEEKDAY(date, [startDayOfWeek])\n"})}),"\n",(0,i.jsx)(n.h4,{id:"sample-3",children:"Sample"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:'WEEKDAY(NOW()) => If today is Monday, it returns 0.\nWEEKDAY(NOW(), "sunday") => If today is Monday, it returns 1.\n'})}),"\n",(0,i.jsx)(n.h4,{id:"remark-3",children:"Remark"}),"\n",(0,i.jsx)(n.p,{children:"Returns the day of the week as an integer between 0 and 6 (inclusive), with Monday as the default start day. The start day of the week can be optionally changed by specifying it as the second argument."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"datestr",children:"DATESTR"}),"\n",(0,i.jsx)(n.p,{children:'The DATESTR function converts a date or datetime field into a string in "YYYY-MM-DD" format.'}),"\n",(0,i.jsx)(n.h4,{id:"syntax-4",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:"DATESTR(date | datetime)\n"})}),"\n",(0,i.jsx)(n.h4,{id:"sample-4",children:"Sample"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:"DATESTR('2022-03-14') => 2022-03-14\nDATESTR('2022-03-14 12:00:00') => 2022-03-14\n"})}),"\n",(0,i.jsx)(n.h4,{id:"remark-4",children:"Remark"}),"\n",(0,i.jsx)(n.p,{children:'This function converts a date or datetime field into a string in "YYYY-MM-DD" format, ignoring the time part.'}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"day",children:"DAY"}),"\n",(0,i.jsx)(n.p,{children:"The DAY function returns the day of the month as an integer."}),"\n",(0,i.jsx)(n.h4,{id:"syntax-5",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:"DAY(date | datetime)\n"})}),"\n",(0,i.jsx)(n.h4,{id:"sample-5",children:"Sample"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:"DAY('2022-03-14') => 14\nDAY('2022-03-14 12:00:00') => 14\n"})}),"\n",(0,i.jsx)(n.h4,{id:"remark-5",children:"Remark"}),"\n",(0,i.jsx)(n.p,{children:"This function returns the day of the month as an integer between 1 and 31 (inclusive). Note that the day information retrieved is based on the timezone of the server (GMT by default). If the browser timezone is different from the server timezone, the day value may differ."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"year",children:"YEAR"}),"\n",(0,i.jsx)(n.p,{children:"The YEAR function returns the year as an integer."}),"\n",(0,i.jsx)(n.h4,{id:"syntax-6",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:"YEAR(date | datetime)\n"})}),"\n",(0,i.jsx)(n.h4,{id:"sample-6",children:"Sample"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:"YEAR('2022-03-14') => 2022\nYEAR('2022-03-14 12:00:00') => 2022\n"})}),"\n",(0,i.jsx)(n.h4,{id:"remark-6",children:"Remark"}),"\n",(0,i.jsx)(n.p,{children:"This function returns the year as an integer. The year information retrieved is based on the timezone of the server (GMT by default). If the browser timezone is different from the server timezone, the year value may differ."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"month",children:"MONTH"}),"\n",(0,i.jsx)(n.p,{children:"The MONTH function returns the month of the year as an integer."}),"\n",(0,i.jsx)(n.h4,{id:"syntax-7",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:"MONTH(date | datetime)\n"})}),"\n",(0,i.jsx)(n.h4,{id:"sample-7",children:"Sample"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:"MONTH('2022-03-14') => 3\nMONTH('2022-03-14 12:00:00') => 3\n"})}),"\n",(0,i.jsx)(n.h4,{id:"remark-7",children:"Remark"}),"\n",(0,i.jsx)(n.p,{children:"This function returns the month of the year as an integer between 1 and 12 (inclusive). Note that the month information retrieved is based on the timezone of the server (GMT by default). If the browser timezone is different from the server timezone, the month value may differ."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"hour",children:"HOUR"}),"\n",(0,i.jsx)(n.p,{children:"The HOUR function returns the hour of the day as an integer."}),"\n",(0,i.jsx)(n.h4,{id:"syntax-8",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:"HOUR(datetime)\n"})}),"\n",(0,i.jsx)(n.h4,{id:"sample-8",children:"Sample"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:"HOUR('2022-03-14 12:00:00') => 12\n"})}),"\n",(0,i.jsx)(n.h4,{id:"remark-8",children:"Remark"}),"\n",(0,i.jsx)(n.p,{children:"This function returns the hour of the day as an integer between 0 and 23 (inclusive). Hour information retrieved is based on a 24-hour clock & will be based on the timezone of the server (GMT by default). Note that, if browser timezone is different from the server timezone, the hour value may differ."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/fields/field-types/formula/operators",children:"Numeric and Logical Operators"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/fields/field-types/formula/numeric-functions",children:"Numeric Functions"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/fields/field-types/formula/string-functions",children:"String Functions"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/fields/field-types/formula/conditional-expressions",children:"Conditional Expressions"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>r});var i=a(96540);const t={},l=i.createContext(t);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);