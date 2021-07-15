(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[210],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4450:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],l={title:"Emails"},s=void 0,c={unversionedId:"emails",id:"emails",isDocsHomePage:!1,title:"Emails",description:"Hasura Backend Plus can send transactional emails based that are normally used for authentication.",source:"@site/docs/emails.md",sourceDirName:".",slug:"/emails",permalink:"/hasura-backend-plus/docs/emails",editUrl:"https://github.com/nhost/hasura-backend-plus/edit/master/docs/docs/emails.md",version:"current",frontMatter:{title:"Emails"},sidebar:"tutorialSidebar",previous:{title:"Storage Rules",permalink:"/hasura-backend-plus/docs/storage-rules"},next:{title:"Environment Variables",permalink:"/hasura-backend-plus/docs/environment-variables"}},p=[{value:"Activate Account",id:"activate-account",children:[{value:"Change Email",id:"change-email",children:[]},{value:"Lost Password",id:"lost-password",children:[]},{value:"Magic Link",id:"magic-link",children:[]},{value:"Notify Email Change",id:"notify-email-change",children:[]}]},{value:"SMTP Settings",id:"smtp-settings",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Hasura Backend Plus can send transactional emails based that are normally used for authentication."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/environment-variables#emails_enabled"},(0,i.kt)("inlineCode",{parentName:"a"},"EMAILS_ENABLED"))," must be ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," for emails to work."),(0,i.kt)("h2",{id:"activate-account"},"Activate Account"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Activate Account")," email is sent to newly registered users if ",(0,i.kt)("a",{parentName:"p",href:"/docs/environment-variables#auto_activate_new_users"},(0,i.kt)("inlineCode",{parentName:"a"},"AUTO_ACTIVATE_NEW_USERS"))," is ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,"Folder: ",(0,i.kt)("inlineCode",{parentName:"p"},"/custom/emails/activate-account/")),(0,i.kt)("h3",{id:"change-email"},"Change Email"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Change Email")," email is sent to a user requesting to change email if ",(0,i.kt)("a",{parentName:"p",href:"/docs/environment-variables#verify_emails"},(0,i.kt)("inlineCode",{parentName:"a"},"VERIFY_EMAILS"))," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("p",null,"Folder: ",(0,i.kt)("inlineCode",{parentName:"p"},"/custom/emails/change-email/")),(0,i.kt)("h3",{id:"lost-password"},"Lost Password"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Lost Password")," email is sent to a user requesting to set a new password if ",(0,i.kt)("a",{parentName:"p",href:"/docs/environment-variables#lost_password_enabled"},(0,i.kt)("inlineCode",{parentName:"a"},"LOST_PASSWORD_ENABLED"))," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("p",null,"Folder: ",(0,i.kt)("inlineCode",{parentName:"p"},"/custom/emails/lost-password/")),(0,i.kt)("h3",{id:"magic-link"},"Magic Link"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Magic Link")," email is sent to a user who register or login using the Magic Link login method if ",(0,i.kt)("a",{parentName:"p",href:"/docs/environment-variables#magic_link_enabled"},(0,i.kt)("inlineCode",{parentName:"a"},"MAGIC_LINK_ENABLED"))," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("p",null,"Folder: ",(0,i.kt)("inlineCode",{parentName:"p"},"/custom/emails/magic-link/")),(0,i.kt)("h3",{id:"notify-email-change"},"Notify Email Change"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Notify Email Change")," email is sent if a user change their email if ",(0,i.kt)("a",{parentName:"p",href:"/docs/environment-variables#notify_email_change"},(0,i.kt)("inlineCode",{parentName:"a"},"NOTIFY_EMAIL_CHANGE"))," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("p",null,"Folder: ",(0,i.kt)("inlineCode",{parentName:"p"},"/custom/emails/notify-email-change/")),(0,i.kt)("h2",{id:"smtp-settings"},"SMTP Settings"),(0,i.kt)("p",null,"Sett all SMTP settings via ",(0,i.kt)("a",{parentName:"p",href:"/docs/environment-variables#email"},"environment variables"),"."))}m.isMDXComponent=!0}}]);