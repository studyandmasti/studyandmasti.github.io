import{a as n,r as m}from"./chunks/chunk.94152c08.js";var r={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=n.exports,_=Symbol.for("react.element"),j=Symbol.for("react.fragment"),k=Object.prototype.hasOwnProperty,v=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S={key:!0,ref:!0,__self:!0,__source:!0};function x(t,e,l){var s,o={},a=null,c=null;l!==void 0&&(a=""+l),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(c=e.ref);for(s in e)k.call(e,s)&&!S.hasOwnProperty(s)&&(o[s]=e[s]);if(t&&t.defaultProps)for(s in e=t.defaultProps,e)o[s]===void 0&&(o[s]=e[s]);return{$$typeof:_,type:t,key:a,ref:c,props:o,_owner:v.current}}i.Fragment=j;i.jsx=x;i.jsxs=x;r.exports=i;const{DocSearchModal:b,useDocSearchKeyboardEvents:O}=void 0;function w(){const[t,e]=n.exports.useState(!1),l=n.exports.useRef(),[s,o]=n.exports.useState(null),a=n.exports.useCallback(()=>{e(!0)},[e]),c=n.exports.useCallback(()=>{e(!1)},[e]),h=n.exports.useCallback(u=>{e(!0),o(u.key)},[e,o]);return O({isOpen:t,onOpen:a,onClose:c,onInput:h,searchButtonRef:l}),r.exports.jsxs(r.exports.Fragment,{children:[r.exports.jsxs("button",{type:"button",ref:l,onClick:a,className:"search-input",children:[r.exports.jsx("svg",{width:"24",height:"24",fill:"none",children:r.exports.jsx("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),r.exports.jsx("span",{children:"Search"}),r.exports.jsxs("span",{className:"search-hint",children:[r.exports.jsx("span",{className:"sr-only",children:"Press "}),r.exports.jsx("kbd",{children:"/"}),r.exports.jsx("span",{className:"sr-only",children:" to search"})]})]}),t&&m.exports.createPortal(r.exports.jsx(b,{initialQuery:s,initialScrollY:window.scrollY,onClose:c,indexName:void 0,appId:void 0,apiKey:void 0,transformItems:u=>u.map(d=>{const p=document.createElement("a");p.href=d.url;const f=p.hash==="#overview"?"":p.hash;return{...d,url:`${p.pathname}${f}`}})}),document.body)]})}export{w as default};
