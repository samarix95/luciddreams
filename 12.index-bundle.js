(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{380:function(e,t,a){"use strict";var n=a(21);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(0)),r=(0,n(a(47)).default)(c.default.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=r},867:function(e,t,a){"use strict";var n=a(21);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(0)),r=(0,n(a(47)).default)(c.default.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.default=r},868:function(e,t,a){"use strict";var n=a(21);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(0)),r=(0,n(a(47)).default)(c.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");t.default=r},902:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(23),o=a(25),i=a(4),l=a.n(i),s=a(275),u=a(266),d=a(273),m=a(151),f=a(271),h=a(342),g=a(880),v=a(146),b=a(267),E=a(100),p=a(265),y=a(13),j=a(42),k=a(44),C=a(105),N=a(74),w=a(887),P=a(885),O=a(353),S=a(330),L=a(888),A=a(329),_=a(274),x=a(517),R=a(328),q=a(221),U=a(148),D=a(2),W=a(7),M=a(380),B=a.n(M),H=a(867),I=a.n(H);function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,c=!1,r=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){c=!0,r=e}finally{try{n||null==i.return||i.return()}finally{if(c)throw r}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function F(e){var t=e.lang,a=e.user_id,n=e.open,r=e.closeConnect,o=e.setSnackbar,i=Object(y.d)(),l=T(c.a.useState({}),2),u=l[0],m=l[1],g=T(c.a.useState(!0),2),E=g[0],p=g[1],k=T(c.a.useState(""),2),C=k[0],N=k[1],W=c.a.useCallback((function(){j.k.post("/actions/users/getusers",{id:a}).then((function(e){m(e.data),p(!1)})).catch((function(e){alert("Cant load users "+e),p(!1),r()}))}),[]);return c.a.useEffect((function(){W()}),[]),c.a.createElement(R.a,{open:n,scroll:"paper",fullWidth:!0,maxWidth:"md","aria-labelledby":"add-connections-dialog-title","aria-describedby":"add-connections-dialog-description"},c.a.createElement(A.a,{id:"add-connections-dialog-title"},t.currLang.texts.AddConnections),c.a.createElement(S.a,{dividers:!0},c.a.createElement(b.a,{container:!0,className:"".concat(i.height12," ").concat(i.minHeight100px),id:"add-connections-dialog-description"},E?c.a.createElement("div",{className:"".concat(i.formControl," ").concat(i.centerTextAlign)},c.a.createElement("div",{className:"".concat(i.inlineBlock," ").concat(i.relativePosition)},c.a.createElement(s.a,null)),c.a.createElement(d.a,{className:"".concat(i.relativePosition),component:"div"},t.currLang.texts.Loading)):c.a.createElement(c.a.Fragment,null,c.a.createElement(v.a,{component:"form",className:"".concat(i.SearchPaper)},c.a.createElement(I.a,null),c.a.createElement(U.a,{placeholder:t.currLang.texts.nickname,onChange:function(e){N(e.target.value)}})),c.a.createElement(q.a,{className:"".concat(i.fullWidth),component:"nav","aria-label":"main"},u.filter((function(e){return!!e.nickname.toLowerCase().includes(C.toLowerCase())})).map((function(e,n){return c.a.createElement(x.a,{key:n},c.a.createElement(P.a,null,c.a.createElement(h.a,{src:e.avatar_url})),c.a.createElement(L.a,{primary:e.nickname}),c.a.createElement(w.a,null,c.a.createElement(_.a,{edge:"end","aria-label":"add",onClick:function(){var n;n=e.id,p(!0),j.k.post("/actions/users/edituserconnects",{action:"add",user:a,connect:n}).then((function(e){W(),o({type:D.K,snackbar:{open:!0,variant:"success",message:t.currLang.texts.AddedConnections}})})).catch((function(e){alert("Cant add user connections "+e),p(!1),r()}))}},c.a.createElement(B.a,null))))})))))),c.a.createElement(O.a,null,c.a.createElement(f.a,{onClick:r,color:"secondary"},t.currLang.buttons.close)))}F.propTypes={lang:l.a.object.isRequired,user_id:l.a.number.isRequired,setSnackbar:l.a.func.isRequired};var z=Object(r.b)((function(e){return{lang:e.lang,user_id:e.auth.user.id}}),(function(e){return{setSnackbar:function(t){return e(Object(W.I)(t))}}}))(F),G=a(868),J=a.n(G);function K(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,c=!1,r=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){c=!0,r=e}finally{try{n||null==i.return||i.return()}finally{if(c)throw r}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function V(e){var t=e.lang,a=e.history,n=e.open,r=e.closeAction,o=e.user_id,i=e.setSnackbar,l=Object(y.d)(),u=K(c.a.useState(!1),2),m=u[0],g=u[1],v=K(c.a.useState({}),2),E=v[0],p=v[1],k=K(c.a.useState(!0),2),C=k[0],N=k[1],U=c.a.useCallback((function(e){j.k.post("/actions/users/getuserconnects",{id:e}).then((function(e){p(e.data),N(!1)})).catch((function(e){alert("Cant load user connections "+e),N(!1),r()}))}),[o]);return c.a.useEffect((function(){U(o)}),[o]),c.a.createElement(c.a.Fragment,null,m?c.a.createElement(z,{open:m,closeConnect:function(){g(!1),N(!0),U(o)}}):c.a.createElement(c.a.Fragment,null),c.a.createElement(R.a,{open:n,scroll:"paper",fullWidth:!0,maxWidth:"md","aria-labelledby":"connections-dialog-title","aria-describedby":"connections-dialog-description"},c.a.createElement(A.a,{id:"connections-dialog-title"},t.currLang.buttons.Connections),c.a.createElement(S.a,{dividers:!0},c.a.createElement(b.a,{container:!0,className:"".concat(l.height12," ").concat(l.minHeight100px),id:"connections-dialog-description"},C?c.a.createElement("div",{className:"".concat(l.formControl," ").concat(l.centerTextAlign)},c.a.createElement("div",{className:"".concat(l.inlineBlock," ").concat(l.relativePosition)},c.a.createElement(s.a,null)),c.a.createElement(d.a,{className:"".concat(l.relativePosition),component:"div"},t.currLang.texts.Loading)):c.a.createElement(q.a,{className:"".concat(l.fullWidth),component:"nav","aria-label":"main"},E.map((function(e,n){return c.a.createElement(x.a,{button:!0,key:n,onClick:function(){!function(e){a.push({pathname:"/profile",defaultData:{friend_id:e,prevUrl:"/aeronauts"}}),r()}(e.id)}},c.a.createElement(P.a,null,c.a.createElement(h.a,{src:e.avatar_url})),c.a.createElement(L.a,{primary:e.nickname}),c.a.createElement(w.a,null,c.a.createElement(_.a,{edge:"end","aria-label":"delete",onClick:function(){var a;a=e.id,N(!0),j.k.post("/actions/users/edituserconnects",{action:"delete",user:o,connect:a}).then((function(e){U(o),i({type:D.K,snackbar:{open:!0,variant:"success",message:t.currLang.texts.DeletedConnections}})})).catch((function(e){alert("Cant delete user connections "+e),N(!1),r()}))}},c.a.createElement(J.a,null))))}))))),c.a.createElement(O.a,null,c.a.createElement(f.a,{onClick:r,color:"secondary"},t.currLang.buttons.close),c.a.createElement(f.a,{onClick:function(){g(!0)},color:"primary"},t.currLang.buttons.add))))}V.propTypes={lang:l.a.object.isRequired,setSnackbar:l.a.func.isRequired};var X=Object(r.b)((function(e){return{lang:e.lang}}),(function(e){return{setSnackbar:function(t){return e(Object(W.I)(t))}}}))(V);function Y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,c=!1,r=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){c=!0,r=e}finally{try{n||null==i.return||i.return()}finally{if(c)throw r}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Q(e){var t=e.lang,a=e.themeMode,n=e.history,r=e.user_id,o=e.userData,i=e.userDataError,l=e.userDataPending,j=e.fetchUserData,k=e.randomUsersError,C=e.randomUsers,w=e.randomUsersPending,P=e.fetchRandomUsers;i&&(console.log("Aeronauts"),console.log(i),alert("Error")),k&&(console.log("Aeronauts"),console.log(k),alert("Error"));var O=Object(y.d)(),S=Object(E.a)(a),L=Y(c.a.useState(!1),2),A=L[0],_=L[1];return c.a.useEffect((function(){var e=Object(N.b)();j(r,e),P(r,2,e)}),[]),c.a.createElement(p.a,{theme:S},c.a.createElement(u.a,null),A?c.a.createElement(X,{open:A,user_id:r,closeAction:function(){_(!1)},history:n}):c.a.createElement(c.a.Fragment,null),c.a.createElement("div",{className:O.root},c.a.createElement(b.a,{className:"".concat(O.height12),container:!0,direction:"column",justify:"center",alignItems:"stretch"},c.a.createElement(b.a,{item:!0,className:"".concat(O.mainGridBodyItem," ").concat(O.height11)},c.a.createElement(b.a,{className:"".concat(O.height3," ").concat(O.relativePosition),container:!0},c.a.createElement(b.a,{item:!0,xs:4,className:"".concat(O.height12," ").concat(O.relativePosition," ").concat(O.padding10)},c.a.createElement("div",{className:"".concat(O.relativePosition," ").concat(O.fullWidth," ").concat(O.equalHeight," ").concat(O.centerButton)},c.a.createElement(m.a,{onClick:function(){Object(N.a)()?n.push("/profile"):n.push("/")},className:"".concat(O.absolutePosition," ").concat(O.fullWidth," ").concat(O.fullHeight," ").concat(O.topLeft," ").concat(O.borderRadius50)},c.a.createElement(h.a,{src:l?"":o.avatar_url,className:"".concat(O.absolutePosition," ").concat(O.fullWidth," ").concat(O.fullHeight)})))),c.a.createElement(b.a,{item:!0,xs:8,className:"".concat(O.height12," ").concat(O.relativePosition)},c.a.createElement(v.a,{className:"".concat(O.centerButton," ").concat(O.width10)},l?c.a.createElement("div",{className:"".concat(O.formControl," ").concat(O.centerTextAlign)},c.a.createElement("div",{className:"".concat(O.inlineBlock," ").concat(O.relativePosition)},c.a.createElement(s.a,null)),c.a.createElement(d.a,{className:"".concat(O.relativePosition),component:"div"},t.currLang.texts.Loading)):c.a.createElement(d.a,{variant:"h6",align:"center"},o.nickname)))),c.a.createElement(b.a,{className:"".concat(O.height5," ").concat(O.relativePosition)},c.a.createElement(f.a,{className:"".concat(O.formControl," ").concat(O.width6),variant:"contained",color:"primary",onClick:function(){_(!0)}},t.currLang.buttons.Connections)),c.a.createElement(b.a,{className:"".concat(O.height4," ").concat(O.relativePosition)},w?c.a.createElement(c.a.Fragment,null):c.a.createElement("div",{className:"".concat(O.height12," ").concat(O.relativePosition),style:{overflowY:"visible"}},c.a.createElement("div",{className:"".concat(O.height12," ").concat(O.relativePosition),style:{overflowX:"scroll"}},c.a.createElement("div",{className:"".concat(O.height12," ").concat(O.relativePosition),style:window.innerHeight/100*((C.length+1)/2)*.1273148148148148*110<window.innerWidth?{left:"50%",transform:"translate(-50%)",width:(C.length+1)/2*.1273148148148148*110+"vh"}:{width:(C.length+1)/2*.1273148148148148*110+"vh"}},C.map((function(e,t){return c.a.createElement(m.a,{key:t,onClick:function(){return t=e.id,void n.push({pathname:"/profile",defaultData:{friend_id:t,prevUrl:"/aeronauts"}});var t},style:t+1&1?{position:"absolute",top:"50%",left:.1273148148148148*t*55+"vh",height:"12.73148148148148vh",width:"12.73148148148148vh",borderRadius:"50%"}:{position:"absolute",top:"8.4%",left:.1273148148148148*t*55+"vh",height:"12.73148148148148vh",width:"12.73148148148148vh",borderRadius:"50%"}},c.a.createElement(g.a,{className:"".concat(O.absolutePosition," ").concat(O.fullWidth," ").concat(O.fullHeight),overlap:"circle",anchorOrigin:{vertical:"top",horizontal:"right"},badgeContent:"0"!==e.count?c.a.createElement(h.a,null,"+"+e.count):c.a.createElement(c.a.Fragment,null)},c.a.createElement(h.a,{className:"".concat(O.absolutePosition," ").concat(O.fullWidth," ").concat(O.fullHeight),src:e.avatar_url})))}))))))),c.a.createElement(b.a,{item:!0,className:"".concat(O.mainGridBodyItem," ").concat(O.height1)},c.a.createElement(b.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"center"},c.a.createElement(b.a,{item:!0},c.a.createElement(f.a,{className:O.actionButton,variant:"contained",color:"secondary",onClick:function(){n.push("/luciddreams")}},t.currLang.buttons.Back)))))))}Q.propTypes={themeMode:l.a.object.isRequired,lang:l.a.object.isRequired,user_id:l.a.number.isRequired,userDataError:l.a.object.isRequired,userData:l.a.object.isRequired,userDataPending:l.a.object.isRequired,randomUsersError:l.a.object.isRequired,randomUsers:l.a.object.isRequired,randomUsersPending:l.a.object.isRequired};t.default=Object(r.b)((function(e){return{themeMode:e.themeMode,lang:e.lang,user_id:e.auth.user.id,userDataError:Object(k.b)(e),userData:Object(k.a)(e),userDataPending:Object(k.c)(e),randomUsersError:Object(C.b)(e),randomUsers:Object(C.a)(e),randomUsersPending:Object(C.c)(e)}}),(function(e){return Object(o.bindActionCreators)({fetchUserData:j.h,fetchRandomUsers:j.d},e)}))(Q)}}]);
//# sourceMappingURL=12.index-bundle.js.map