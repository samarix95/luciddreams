(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{347:function(e,t,a){"use strict";var n=a(21);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),c=(0,n(a(45)).default)(r.default.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=c},368:function(e,t,a){"use strict";var n=a(21);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),c=(0,n(a(45)).default)(r.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");t.default=c},369:function(e,t,a){"use strict";var n=a(21);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),c=(0,n(a(45)).default)(r.default.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.default=c},660:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),o=a(24),l=a(4),i=a.n(l),s=a(258),u=a(265),d=a(145),m=a(263),h=a(483),f=a(635),v=a(140),E=a(259),b=a(652),g=a(99),p=a(257),y=a(19),j=a(41),w=a(32),C=a(104),O=a(54),k=a(643),N=a(641),P=a(331),S=a(367),R=a(644),x=a(308),_=a(266),A=a(434),q=a(364),L=a(216),U=a(142),D=a(2),W=a(7),M=a(347),H=a.n(M),F=a(369),I=a.n(F);function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function z(e){var t=e.lang,a=e.user_id,n=e.open,c=e.closeConnect,o=e.setSnackbar,l=Object(y.c)(),i=T(r.a.useState({}),2),s=i[0],u=i[1],d=T(r.a.useState(!0),2),f=d[0],g=d[1],p=T(r.a.useState(""),2),w=p[0],C=p[1],O=r.a.useCallback((function(){j.l.post("/actions/users/getusers",{id:a}).then((function(e){u(e.data),g(!1)})).catch((function(e){alert("Cant load users "+e),g(!1),c()}))}),[]);return r.a.useEffect((function(){O()}),[]),r.a.createElement(q.a,{open:n,scroll:"paper",fullWidth:!0,maxWidth:"md","aria-labelledby":"add-connections-dialog-title","aria-describedby":"add-connections-dialog-description"},r.a.createElement(x.a,{id:"add-connections-dialog-title"},t.currLang.texts.AddConnections),r.a.createElement(S.a,{dividers:!0},r.a.createElement(E.a,{container:!0,className:"".concat(l.height12," ").concat(l.minHeight100px),id:"add-connections-dialog-description"},r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{component:"form",className:"".concat(l.SearchPaper)},r.a.createElement(I.a,null),r.a.createElement(U.a,{placeholder:t.currLang.texts.nickname,onChange:function(e){C(e.target.value)}})),r.a.createElement(L.a,{className:"".concat(l.fullWidth),component:"nav","aria-label":"main"},f?r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,null,r.a.createElement(R.a,null,r.a.createElement(b.a,{variant:"text"}))),r.a.createElement(A.a,null,r.a.createElement(R.a,null,r.a.createElement(b.a,{variant:"text"}))),r.a.createElement(A.a,null,r.a.createElement(R.a,null,r.a.createElement(b.a,{variant:"text"})))):s.filter((function(e){return!!e.nickname.toLowerCase().includes(w.toLowerCase())})).map((function(e,n){return r.a.createElement(A.a,{key:n},r.a.createElement(N.a,null,r.a.createElement(h.a,{src:e.avatar_url})),r.a.createElement(R.a,{primary:e.nickname}),r.a.createElement(k.a,null,r.a.createElement(_.a,{edge:"end","aria-label":"add",onClick:function(){var n;n=e.id,g(!0),j.l.post("/actions/users/edituserconnects",{action:"add",user:a,connect:n}).then((function(e){O(),o({type:D.O,snackbar:{open:!0,variant:"success",message:t.currLang.texts.AddedConnections}})})).catch((function(e){alert("Cant add user connections "+e),g(!1),c()}))}},r.a.createElement(H.a,null))))})))))),r.a.createElement(P.a,null,r.a.createElement(m.a,{onClick:c,color:"secondary"},t.currLang.buttons.close)))}z.propTypes={lang:i.a.object.isRequired,user_id:i.a.number.isRequired,setSnackbar:i.a.func.isRequired};var B=Object(c.b)((function(e){return{lang:e.lang,user_id:e.auth.user.id}}),(function(e){return{setSnackbar:function(t){return e(Object(W.M)(t))}}}))(z),G=a(368),J=a.n(G);function V(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function X(e){var t=e.lang,a=e.history,n=e.open,c=e.closeAction,o=e.user_id,l=e.setSnackbar,i=Object(y.c)(),s=V(r.a.useState(!1),2),u=s[0],d=s[1],f=V(r.a.useState({}),2),v=f[0],g=f[1],p=V(r.a.useState(!0),2),w=p[0],C=p[1],O=r.a.useCallback((function(e){j.l.post("/actions/users/getuserconnects",{id:e}).then((function(e){g(e.data),C(!1)})).catch((function(e){alert("Cant load user connections "+e),C(!1),c()}))}),[o]);return r.a.useEffect((function(){O(o)}),[o]),r.a.createElement(r.a.Fragment,null,u?r.a.createElement(B,{open:u,closeConnect:function(){d(!1),C(!0),O(o)}}):r.a.createElement(r.a.Fragment,null),r.a.createElement(q.a,{open:n,scroll:"paper",fullWidth:!0,maxWidth:"md","aria-labelledby":"connections-dialog-title","aria-describedby":"connections-dialog-description"},r.a.createElement(x.a,{id:"connections-dialog-title"},t.currLang.buttons.Connections),r.a.createElement(S.a,{dividers:!0},r.a.createElement(E.a,{container:!0,className:"".concat(i.height12," ").concat(i.minHeight100px),id:"connections-dialog-description"},r.a.createElement(L.a,{className:"".concat(i.fullWidth),component:"nav","aria-label":"main"},w?r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,null,r.a.createElement(R.a,null,r.a.createElement(b.a,{variant:"text"}))),r.a.createElement(A.a,null,r.a.createElement(R.a,null,r.a.createElement(b.a,{variant:"text"}))),r.a.createElement(A.a,null,r.a.createElement(R.a,null,r.a.createElement(b.a,{variant:"text"})))):v.map((function(e,n){return r.a.createElement(A.a,{button:!0,key:n,onClick:function(){!function(e){a.push({pathname:"/profile",defaultData:{friend_id:e,prevUrl:"/aeronauts"}}),c()}(e.id)}},r.a.createElement(N.a,null,r.a.createElement(h.a,{src:e.avatar_url})),r.a.createElement(R.a,{primary:e.nickname}),r.a.createElement(k.a,null,r.a.createElement(_.a,{edge:"end","aria-label":"delete",onClick:function(){var a;a=e.id,C(!0),j.l.post("/actions/users/edituserconnects",{action:"delete",user:o,connect:a}).then((function(e){O(o),l({type:D.O,snackbar:{open:!0,variant:"success",message:t.currLang.texts.DeletedConnections}})})).catch((function(e){alert("Cant delete user connections "+e),C(!1),c()}))}},r.a.createElement(J.a,null))))}))))),r.a.createElement(P.a,null,r.a.createElement(m.a,{onClick:c,color:"secondary"},t.currLang.buttons.close),r.a.createElement(m.a,{onClick:function(){d(!0)},color:"primary"},t.currLang.buttons.add))))}X.propTypes={lang:i.a.object.isRequired,setSnackbar:i.a.func.isRequired};var Y=Object(c.b)((function(e){return{lang:e.lang}}),(function(e){return{setSnackbar:function(t){return e(Object(W.M)(t))}}}))(X);function K(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Q=.1273148148148148,Z=12.73148148148148;function $(e){var t=e.lang,a=e.themeMode,n=e.history,c=e.user_id,o=e.userData,l=e.userDataError,i=e.userDataPending,j=e.fetchUserData,w=e.randomUsersError,C=e.randomUsers,k=e.randomUsersPending,N=e.fetchRandomUsers;l&&(console.log("Aeronauts"),console.log(l),alert("Error")),w&&(console.log("Aeronauts"),console.log(w),alert("Error"));var P=Object(y.c)(),S=Object(g.a)(a),R=K(r.a.useState(!1),2),x=R[0],_=R[1];return r.a.useEffect((function(){var e=Object(O.b)();j(c,e),N(c,3,e)}),[]),r.a.createElement(p.a,{theme:S},r.a.createElement(s.a,null),x?r.a.createElement(Y,{open:x,user_id:c,closeAction:function(){_(!1)},history:n}):r.a.createElement(r.a.Fragment,null),r.a.createElement("div",{className:P.root},r.a.createElement(E.a,{className:"".concat(P.height12),container:!0,direction:"column",justify:"center",alignItems:"stretch"},r.a.createElement(E.a,{item:!0,className:"".concat(P.mainGridBodyItem," ").concat(P.height11)},r.a.createElement(E.a,{className:"".concat(P.height3," ").concat(P.relativePosition),container:!0},r.a.createElement(E.a,{item:!0,xs:4,className:"".concat(P.height12," ").concat(P.relativePosition," ").concat(P.padding10)},r.a.createElement("div",{className:"".concat(P.relativePosition," ").concat(P.fullWidth," ").concat(P.equalHeight," ").concat(P.centerButton)},r.a.createElement(d.a,{onClick:function(){Object(O.a)()?n.push("/profile"):n.push("/")},className:"".concat(P.absolutePosition," ").concat(P.fullWidth," ").concat(P.fullHeight," ").concat(P.topLeft," ").concat(P.borderRadius50)},i?r.a.createElement(b.a,{variant:"circle",className:"".concat(P.absolutePosition," ").concat(P.fullWidth," ").concat(P.fullHeight)}):r.a.createElement(h.a,{src:o.avatar_url,className:"".concat(P.absolutePosition," ").concat(P.fullWidth," ").concat(P.fullHeight)})))),r.a.createElement(E.a,{item:!0,xs:8,className:"".concat(P.height12," ").concat(P.relativePosition)},r.a.createElement(v.a,{className:"".concat(P.centerButton," ").concat(P.width10)},i?r.a.createElement(b.a,{variant:"text",className:"".concat(P.margin)}):r.a.createElement(u.a,{variant:"h6",align:"center"},o.nickname)))),r.a.createElement(E.a,{className:"".concat(P.height5," ").concat(P.relativePosition)},r.a.createElement(m.a,{className:"".concat(P.formControl," ").concat(P.width6),variant:"outlined",color:"primary",onClick:function(){_(!0)}},t.currLang.buttons.Connections)),r.a.createElement(E.a,{className:"".concat(P.height4," ").concat(P.relativePosition)},r.a.createElement("div",{className:"".concat(P.height12," ").concat(P.relativePosition," ").concat(P.visibleOverflowY)},r.a.createElement("div",{className:"".concat(P.height12," ").concat(P.relativePosition," ").concat(P.scrollOverflowX)},k?r.a.createElement("div",{className:"".concat(P.height12," ").concat(P.relativePosition),style:window.innerHeight/100*2*Q*110<window.innerWidth?{left:"50%",transform:"translate(-50%)",width:"28.009259259259256vh"}:{width:"28.009259259259256vh"}},r.a.createElement(b.a,{variant:"circle",style:{position:"absolute",top:"50%",left:"0vh",height:Z+"vh",width:Z+"vh",borderRadius:"50%"}}),r.a.createElement(b.a,{variant:"circle",style:{position:"absolute",top:"8.4%",left:"7.002314814814814vh",height:Z+"vh",width:Z+"vh",borderRadius:"50%"}}),r.a.createElement(b.a,{variant:"circle",style:{position:"absolute",top:"50%",left:"14.004629629629628vh",height:Z+"vh",width:Z+"vh",borderRadius:"50%"}})):r.a.createElement("div",{className:"".concat(P.height12," ").concat(P.relativePosition),style:window.innerHeight/100*((C.length+1)/2)*Q*110<window.innerWidth?{left:"50%",transform:"translate(-50%)",width:(C.length+1)/2*Q*110+"vh"}:{width:(C.length+1)/2*Q*110+"vh"}},C.map((function(e,t){return r.a.createElement(d.a,{key:t,onClick:function(){return t=e.id,void n.push({pathname:"/profile",defaultData:{friend_id:t,prevUrl:"/aeronauts"}});var t},style:t+1&1?{position:"absolute",top:"50%",left:t*Q*55+"vh",height:Z+"vh",width:Z+"vh",borderRadius:"50%"}:{position:"absolute",top:"8.4%",left:t*Q*55+"vh",height:Z+"vh",width:Z+"vh",borderRadius:"50%"}},r.a.createElement(f.a,{className:"".concat(P.absolutePosition," ").concat(P.fullWidth," ").concat(P.fullHeight),overlap:"circle",anchorOrigin:{vertical:"top",horizontal:"right"},badgeContent:"0"!==e.count?r.a.createElement(h.a,null,"+"+e.count):r.a.createElement(r.a.Fragment,null)},r.a.createElement(h.a,{className:"".concat(P.absolutePosition," ").concat(P.fullWidth," ").concat(P.fullHeight),src:e.avatar_url})))}))))))),r.a.createElement(E.a,{item:!0,className:"".concat(P.mainGridBodyItem," ").concat(P.height1)},r.a.createElement(E.a,{className:"".concat(P.relativePosition," ").concat(P.verticalCenter),container:!0,direction:"row",justify:"space-evenly",alignItems:"center"},r.a.createElement(E.a,{item:!0},r.a.createElement(m.a,{className:P.actionButton,variant:"outlined",color:"primary",onClick:function(){n.push("/")}},t.currLang.buttons.close)))))))}$.propTypes={themeMode:i.a.object.isRequired,lang:i.a.object.isRequired,user_id:i.a.number.isRequired,userDataError:i.a.object.isRequired,userData:i.a.object.isRequired,userDataPending:i.a.object.isRequired,randomUsersError:i.a.object.isRequired,randomUsers:i.a.object.isRequired,randomUsersPending:i.a.object.isRequired};t.default=Object(c.b)((function(e){return{themeMode:e.themeMode,lang:e.lang,user_id:e.auth.user.id,userDataError:Object(w.b)(e),userData:Object(w.a)(e),userDataPending:Object(w.c)(e),randomUsersError:Object(C.b)(e),randomUsers:Object(C.a)(e),randomUsersPending:Object(C.c)(e)}}),(function(e){return Object(o.bindActionCreators)({fetchUserData:j.i,fetchRandomUsers:j.e},e)}))($)}}]);
//# sourceMappingURL=14.index-bundle.js.map