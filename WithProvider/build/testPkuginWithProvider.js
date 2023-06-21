/*! For license information please see testPkuginWithProvider.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("antd"),require("react")):"function"==typeof define&&define.amd?define([,],t):"object"==typeof exports?exports.testPkuginWithProvider=t(require("antd"),require("react")):e.testPkuginWithProvider=t(e.Antd,e.React)}(self,((e,t)=>(()=>{"use strict";var r={251:(e,t,r)=>{var n=r(868),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,i={},l=null,c=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,n)&&!u.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:c,props:i,_owner:s.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},893:(e,t,r)=>{e.exports=r(251)},529:function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)},o=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.TestContext=void 0;var i=r(893),a=r(868);t.TestContext=a.createContext(null),t.default=function(e){var r=e.children,s=a.useState([]),u=s[0],l=s[1],c={missionData:u,handleDeleteMissionData:function(e){var t=o([],u,!0);t.splice(e,1),l(t)},handleAddMissionData:function(e){l(o(o([],u,!0),[e],!1))}};return(0,i.jsx)(t.TestContext.Provider,n({value:c},{children:r}))}},707:function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.getAttributes=void 0;var o=r(893),i=r(505),a=r(529),s=r(868),u=r(147);t.getAttributes=function(){return{name:u.name,libraryName:u.libraryName,version:u.version,service:{name:u.libraryName,provider:a.default,contextApi:a.TestContext,defaultValue:{}}}},t.default=function(e){e.useAuth;var t=e.getContextApi,r=s.useContext(t("testPlugin")),a=r.missionData,u=r.handleAddMissionData,l=s.useState(""),c=l[0],p=l[1];return(0,o.jsxs)(i.Row,{children:[(0,o.jsx)(i.Input,{value:c,onChange:function(e){p(e.target.value)}}),(0,o.jsx)(i.Button,n({onClick:function(){u(c)}},{children:"Add Mission"})),a.length]})}},505:t=>{t.exports=e},868:e=>{e.exports=t},147:e=>{e.exports=JSON.parse('{"name":"testPkuginWithProvider","libraryName":"testPkuginWithProvider","version":"0.1.0","scripts":{"build":"npx webpack  --mode production --env ENV=production ","local-build":"npx webpack  --mode development   --env  ENV=local"},"dependencies":{"antd":"5.4.6","querystring-es3":"^0.2.1","react":"18.2.0","react-dom":"18.2.0","style-loader":"^3.3.1"},"devDependencies":{"@types/jest":"^28.1.1","css-loader":"^6.7.1","dotenv-webpack":"^7.1.1","ts-jest":"^28.0.4","ts-loader":"^9.3.0","typescript":"^4.7.3","webpack":"^5.73.0","webpack-cli":"^4.9.2"}}')}},n={};return function e(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={exports:{}};return r[t].call(i.exports,i,i.exports,e),i.exports}(707)})()));