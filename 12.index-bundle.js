(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{361:function(e,t,a){"use strict";var n=a(21);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(0)),r=(0,n(a(43)).default)(c.default.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=r},859:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(23),l=a(3),o=a.n(l),i=a(733),u=a(260),s=a(732),d=a(468),m=a(470),f=a(734),p=a(467),v=a(259),h=a(258),b=a(136),g=a(396),E=a(421),y=a(256),k=a(464),C=a(134),S=a(252),w=a(209),j=a(13),L=a(70),x=a(5),A=a(11),O=a(553),_=a.n(O),N=a(361),P=a.n(N),M=a(860),q=a.n(M);function z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,c=!1,r=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(e){c=!0,r=e}finally{try{n||null==o.return||o.return()}finally{if(c)throw r}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function R(e){var t=e.lang,a=e.user_id,n=e.open,r=e.closeConnect,l=e.setSnackbar,o=Object(j.d)(),A=z(c.a.useState({}),2),O=A[0],N=A[1],M=z(c.a.useState(!0),2),R=M[0],T=M[1],W=z(c.a.useState(""),2),H=W[0],J=W[1],B=c.a.useCallback((function(){L.g.post("/actions/users/getusers",{id:a}).then((function(e){N(e.data),T(!1)})).catch((function(e){alert("Cant load users "+e),T(!1),r()}))}),[]);return c.a.useEffect((function(){B()}),[]),c.a.createElement(k.a,{open:n,scroll:"paper",fullWidth:!0,maxWidth:"md","aria-labelledby":"add-connections-dialog-title","aria-describedby":"add-connections-dialog-description"},c.a.createElement(p.a,{id:"add-connections-dialog-title"},t.currLang.texts.AddConnections),c.a.createElement(d.a,{dividers:!0},c.a.createElement(S.a,{container:!0,className:"".concat(o.height12," ").concat(o.minHeight100px),id:"add-connections-dialog-description"},R?c.a.createElement("div",{className:"".concat(o.formControl," ").concat(o.centerTextAlign)},c.a.createElement("div",{className:"".concat(o.inlineBlock," ").concat(o.relativePosition)},c.a.createElement(u.a,null)),c.a.createElement(h.a,{className:"".concat(o.relativePosition),component:"div"},t.currLang.texts.Loading)):c.a.createElement(c.a.Fragment,null,c.a.createElement(C.a,{component:"form",className:"".concat(o.SearchPaper)},c.a.createElement(q.a,null),c.a.createElement(b.a,{placeholder:t.currLang.texts.nickname,onChange:function(e){J(e.target.value)}})),c.a.createElement(w.a,{className:"".concat(o.fullWidth),component:"nav","aria-label":"main"},O.filter((function(e){return!!e.nickname.toLowerCase().includes(H.toLowerCase())})).map((function(e,n){return c.a.createElement(g.a,{key:n},c.a.createElement(s.a,null,c.a.createElement(E.a,null,c.a.createElement(_.a,null))),c.a.createElement(f.a,{primary:e.nickname}),c.a.createElement(i.a,null,c.a.createElement(v.a,{edge:"end","aria-label":"add",onClick:function(){var n;n=e.id,T(!0),L.g.post("/actions/users/edituserconnects",{action:"add",user:a,connect:n}).then((function(e){B(),l({type:x.v,snackbar:{open:!0,variant:"success",message:t.currLang.texts.AddedConnections}})})).catch((function(e){alert("Cant add user connections "+e),T(!1),r()}))}},c.a.createElement(P.a,null))))})))))),c.a.createElement(m.a,null,c.a.createElement(y.a,{onClick:r,color:"secondary"},t.currLang.buttons.close)))}R.propTypes={lang:o.a.object.isRequired,user_id:o.a.number.isRequired,setSnackbar:o.a.func.isRequired};t.default=Object(r.b)((function(e){return{lang:e.lang,user_id:e.auth.user.id}}),(function(e){return{setSnackbar:function(t){return e(Object(A.t)(t))}}}))(R)},860:function(e,t,a){"use strict";var n=a(21);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(0)),r=(0,n(a(43)).default)(c.default.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.default=r}}]);
//# sourceMappingURL=12.index-bundle.js.map