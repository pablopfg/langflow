"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[1035],{33401:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var s=i(74848),n=i(28453);const r={},a="Save Store Api Key",l={type:"api",id:"save-store-api-key",title:"Save Store Api Key",description:"",slug:"/save-store-api-key",frontMatter:{},api:{tags:["APIKey"],operationId:"save_store_api_key_api_v1_api_key_store_post",requestBody:{content:{"application/json":{schema:{properties:{api_key:{type:"string",title:"Api Key"}},type:"object",required:["api_key"],title:"ApiKeyCreateRequest"}}},required:!0},responses:{200:{description:"Successful Response",content:{"application/json":{schema:{}}}},422:{description:"Validation Error",content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},type:"array",title:"Location"},msg:{type:"string",title:"Message"},type:{type:"string",title:"Error Type"}},type:"object",required:["loc","msg","type"],title:"ValidationError"},type:"array",title:"Detail"}},type:"object",title:"HTTPValidationError"}}}}},security:[{OAuth2PasswordBearer:[]},{"API key query":[]},{"API key header":[]}],description:"Save Store Api Key",method:"post",path:"/api/v1/api_key/store",parameters:[],securitySchemes:{OAuth2PasswordBearer:{type:"oauth2",flows:{password:{scopes:{},tokenUrl:"api/v1/login"}}},"API key query":{type:"apiKey",in:"query",name:"x-api-key"},"API key header":{type:"apiKey",in:"header",name:"x-api-key"}},jsonRequestBodyExample:{api_key:"string"},info:{title:"Langflow",version:"1.1.0"},postman:{name:"Save Store Api Key",description:{type:"text/plain"},url:{path:["api","v1","api_key","store"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'{\n    "api_key": "<string>"\n}'},auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/openapi.json",sourceDirName:".",permalink:"/api/save-store-api-key",previous:{title:"Delete Api Key Route",permalink:"/api/delete-api-key-route"},next:{title:"Login To Get Access Token",permalink:"/api/login-to-get-access-token"}},o=[];function d(e){const t={h1:"h1",header:"header",p:"p",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"save-store-api-key",children:"Save Store Api Key"})}),"\n",(0,s.jsx)(t.p,{children:"Save Store Api Key"}),"\n",(0,s.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("th",{style:{textAlign:"left"},children:[(0,s.jsx)("span",{children:"Request Body "}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,s.jsx)("div",{})]})})}),(0,s.jsx)("tbody",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"api_key"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Api Key"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"})]})})})]}),"\n",(0,s.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)("code",{children:"200"})}),(0,s.jsx)("div",{children:(0,s.jsx)(t.p,{children:"Successful Response"})})]}),(0,s.jsx)("div",{children:(0,s.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("th",{style:{textAlign:"left"},children:[(0,s.jsx)("span",{children:"Schema "}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{})]})})}),(0,s.jsx)("tbody",{children:(0,s.jsx)("tr",{children:(0,s.jsx)("td",{children:(0,s.jsx)("span",{style:{opacity:"0.6"},children:" undefined"})})})})]})})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)("code",{children:"422"})}),(0,s.jsx)("div",{children:(0,s.jsx)(t.p,{children:"Validation Error"})})]}),(0,s.jsx)("div",{children:(0,s.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("th",{style:{textAlign:"left"},children:[(0,s.jsx)("span",{children:"Schema "}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{})]})})}),(0,s.jsx)("tbody",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"detail"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"loc"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" undefined[]"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"msg"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Message"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"type"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Error Type"})]})})]})})]})})})]})})]})})]})]})]})}function c(e){void 0===e&&(e={});const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>l});var s=i(96540);const n={},r=s.createContext(n);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);