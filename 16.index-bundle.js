(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{903:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),o=a(23),i=a(4),l=a.n(i),s=a(263),u=a(270),m=a(150),d=a(268),h=a(380),f=a(742),b=a(145),E=a(264),g=a(564),v=a(99),p=a(262),y=a(39),j=a(40),w=a(42),k=a(104),C=a(54),O=a(746),N=a(745),S=a(398),P=a(351),R=a(747),x=a(350),A=a(271),q=a(417),U=a(347),D=a(221),W=a(147),_=a(2),L=a(7),H=a(378),F=a.n(H),I=a(873),B=a.n(I);function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw c}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function T(e){var t=e.lang,a=e.user_id,n=e.open,c=e.closeConnect,o=e.setSnackbar,i=Object(y.b)(),l=M(r.a.useState({}),2),s=l[0],u=l[1],m=M(r.a.useState(!0),2),f=m[0],v=m[1],p=M(r.a.useState(""),2),w=p[0],k=p[1],C=r.a.useCallback((function(){j.l.post("/actions/users/getusers",{id:a}).then((function(e){u(e.data),v(!1)})).catch((function(e){alert("Cant load users "+e),v(!1),c()}))}),[]);return r.a.useEffect((function(){C()}),[]),r.a.createElement(U.a,{open:n,scroll:"paper",fullWidth:!0,maxWidth:"md","aria-labelledby":"add-connections-dialog-title","aria-describedby":"add-connections-dialog-description"},r.a.createElement(x.a,{id:"add-connections-dialog-title"},t.currLang.texts.AddConnections),r.a.createElement(P.a,{dividers:!0},r.a.createElement(E.a,{container:!0,className:"".concat(i.height12," ").concat(i.minHeight100px),id:"add-connections-dialog-description"},r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{component:"form",className:"".concat(i.SearchPaper)},r.a.createElement(B.a,null),r.a.createElement(W.a,{placeholder:t.currLang.texts.nickname,onChange:function(e){k(e.target.value)}})),r.a.createElement(D.a,{className:"".concat(i.fullWidth),component:"nav","aria-label":"main"},f?r.a.createElement(r.a.Fragment,null,r.a.createElement(q.a,null,r.a.createElement(R.a,null,r.a.createElement(g.a,{variant:"text"}))),r.a.createElement(q.a,null,r.a.createElement(R.a,null,r.a.createElement(g.a,{variant:"text"}))),r.a.createElement(q.a,null,r.a.createElement(R.a,null,r.a.createElement(g.a,{variant:"text"})))):s.filter((function(e){return!!e.nickname.toLowerCase().includes(w.toLowerCase())})).map((function(e,n){return r.a.createElement(q.a,{key:n},r.a.createElement(N.a,null,r.a.createElement(h.a,{src:e.avatar_url})),r.a.createElement(R.a,{primary:e.nickname}),r.a.createElement(O.a,null,r.a.createElement(A.a,{edge:"end","aria-label":"add",onClick:function(){var n;n=e.id,v(!0),j.l.post("/actions/users/edituserconnects",{action:"add",user:a,connect:n}).then((function(e){C(),o({type:_.O,snackbar:{open:!0,variant:"success",message:t.currLang.texts.AddedConnections}})})).catch((function(e){alert("Cant add user connections "+e),v(!1),c()}))}},r.a.createElement(F.a,null))))})))))),r.a.createElement(S.a,null,r.a.createElement(d.a,{onClick:c,color:"secondary"},t.currLang.buttons.close)))}T.propTypes={lang:l.a.object.isRequired,user_id:l.a.number.isRequired,setSnackbar:l.a.func.isRequired};var G=Object(c.b)((function(e){return{lang:e.lang,user_id:e.auth.user.id}}),(function(e){return{setSnackbar:function(t){return e(Object(L.M)(t))}}}))(T),J=a(874),z=a.n(J);function X(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw c}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Y(e){var t=e.lang,a=e.history,n=e.open,c=e.closeAction,o=e.user_id,i=e.setSnackbar,l=Object(y.b)(),s=X(r.a.useState(!1),2),u=s[0],m=s[1],f=X(r.a.useState({}),2),b=f[0],v=f[1],p=X(r.a.useState(!0),2),w=p[0],k=p[1],C=r.a.useCallback((function(e){j.l.post("/actions/users/getuserconnects",{id:e}).then((function(e){v(e.data),k(!1)})).catch((function(e){alert("Cant load user connections "+e),k(!1),c()}))}),[o]);return r.a.useEffect((function(){C(o)}),[o]),r.a.createElement(r.a.Fragment,null,u?r.a.createElement(G,{open:u,closeConnect:function(){m(!1),k(!0),C(o)}}):r.a.createElement(r.a.Fragment,null),r.a.createElement(U.a,{open:n,scroll:"paper",fullWidth:!0,maxWidth:"md","aria-labelledby":"connections-dialog-title","aria-describedby":"connections-dialog-description"},r.a.createElement(x.a,{id:"connections-dialog-title"},t.currLang.buttons.Connections),r.a.createElement(P.a,{dividers:!0},r.a.createElement(E.a,{container:!0,className:"".concat(l.height12," ").concat(l.minHeight100px),id:"connections-dialog-description"},r.a.createElement(D.a,{className:"".concat(l.fullWidth),component:"nav","aria-label":"main"},w?r.a.createElement(r.a.Fragment,null,r.a.createElement(q.a,null,r.a.createElement(R.a,null,r.a.createElement(g.a,{variant:"text"}))),r.a.createElement(q.a,null,r.a.createElement(R.a,null,r.a.createElement(g.a,{variant:"text"}))),r.a.createElement(q.a,null,r.a.createElement(R.a,null,r.a.createElement(g.a,{variant:"text"})))):b.map((function(e,n){return r.a.createElement(q.a,{button:!0,key:n,onClick:function(){!function(e){a.push({pathname:"/profile",defaultData:{friend_id:e,prevUrl:"/aeronauts"}}),c()}(e.id)}},r.a.createElement(N.a,null,r.a.createElement(h.a,{src:e.avatar_url})),r.a.createElement(R.a,{primary:e.nickname}),r.a.createElement(O.a,null,r.a.createElement(A.a,{edge:"end","aria-label":"delete",onClick:function(){var a;a=e.id,k(!0),j.l.post("/actions/users/edituserconnects",{action:"delete",user:o,connect:a}).then((function(e){C(o),i({type:_.O,snackbar:{open:!0,variant:"success",message:t.currLang.texts.DeletedConnections}})})).catch((function(e){alert("Cant delete user connections "+e),k(!1),c()}))}},r.a.createElement(z.a,null))))}))))),r.a.createElement(S.a,null,r.a.createElement(d.a,{onClick:c,color:"secondary"},t.currLang.buttons.close),r.a.createElement(d.a,{onClick:function(){m(!0)},color:"primary"},t.currLang.buttons.add))))}Y.propTypes={lang:l.a.object.isRequired,setSnackbar:l.a.func.isRequired};var K=Object(c.b)((function(e){return{lang:e.lang}}),(function(e){return{setSnackbar:function(t){return e(Object(L.M)(t))}}}))(Y);function Q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw c}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var V=.1273148148148148,Z=12.73148148148148;function $(e){var t=e.lang,a=e.themeMode,n=e.history,c=e.user_id,o=e.userData,i=e.userDataError,l=e.userDataPending,j=e.fetchUserData,w=e.randomUsersError,k=e.randomUsers,O=e.randomUsersPending,N=e.fetchRandomUsers;i&&(console.log("Aeronauts"),console.log(i),alert("Error")),w&&(console.log("Aeronauts"),console.log(w),alert("Error"));var S=Object(y.b)(),P=Object(v.a)(a),R=Q(r.a.useState(!1),2),x=R[0],A=R[1];return r.a.useEffect((function(){var e=Object(C.b)();j(c,e),N(c,3,e)}),[]),r.a.createElement(p.a,{theme:P},r.a.createElement(s.a,null),x?r.a.createElement(K,{open:x,user_id:c,closeAction:function(){A(!1)},history:n}):r.a.createElement(r.a.Fragment,null),r.a.createElement("div",{className:S.root},r.a.createElement(E.a,{className:"".concat(S.height12),container:!0,direction:"column",justify:"center",alignItems:"stretch"},r.a.createElement(E.a,{item:!0,className:"".concat(S.mainGridBodyItem," ").concat(S.height11)},r.a.createElement(E.a,{className:"".concat(S.height3," ").concat(S.relativePosition),container:!0},r.a.createElement(E.a,{item:!0,xs:4,className:"".concat(S.height12," ").concat(S.relativePosition," ").concat(S.padding10)},r.a.createElement("div",{className:"".concat(S.relativePosition," ").concat(S.fullWidth," ").concat(S.equalHeight," ").concat(S.centerButton)},r.a.createElement(m.a,{onClick:function(){Object(C.a)()?n.push("/profile"):n.push("/")},className:"".concat(S.absolutePosition," ").concat(S.fullWidth," ").concat(S.fullHeight," ").concat(S.topLeft," ").concat(S.borderRadius50)},l?r.a.createElement(g.a,{variant:"circle",className:"".concat(S.absolutePosition," ").concat(S.fullWidth," ").concat(S.fullHeight)}):r.a.createElement(h.a,{src:o.avatar_url,className:"".concat(S.absolutePosition," ").concat(S.fullWidth," ").concat(S.fullHeight)})))),r.a.createElement(E.a,{item:!0,xs:8,className:"".concat(S.height12," ").concat(S.relativePosition)},r.a.createElement(b.a,{className:"".concat(S.centerButton," ").concat(S.width10)},l?r.a.createElement(g.a,{variant:"text",className:"".concat(S.margin)}):r.a.createElement(u.a,{variant:"h6",align:"center"},o.nickname)))),r.a.createElement(E.a,{className:"".concat(S.height5," ").concat(S.relativePosition)},r.a.createElement(d.a,{className:"".concat(S.formControl," ").concat(S.width6),variant:"contained",color:"primary",onClick:function(){A(!0)}},t.currLang.buttons.Connections)),r.a.createElement(E.a,{className:"".concat(S.height4," ").concat(S.relativePosition)},r.a.createElement("div",{className:"".concat(S.height12," ").concat(S.relativePosition," ").concat(S.visibleOverflowY)},r.a.createElement("div",{className:"".concat(S.height12," ").concat(S.relativePosition," ").concat(S.scrollOverflowX)},O?r.a.createElement("div",{className:"".concat(S.height12," ").concat(S.relativePosition),style:window.innerHeight/100*2*V*110<window.innerWidth?{left:"50%",transform:"translate(-50%)",width:"28.009259259259256vh"}:{width:"28.009259259259256vh"}},r.a.createElement(g.a,{variant:"circle",style:{position:"absolute",top:"50%",left:"0vh",height:Z+"vh",width:Z+"vh",borderRadius:"50%"}}),r.a.createElement(g.a,{variant:"circle",style:{position:"absolute",top:"8.4%",left:"7.002314814814814vh",height:Z+"vh",width:Z+"vh",borderRadius:"50%"}}),r.a.createElement(g.a,{variant:"circle",style:{position:"absolute",top:"50%",left:"14.004629629629628vh",height:Z+"vh",width:Z+"vh",borderRadius:"50%"}})):r.a.createElement("div",{className:"".concat(S.height12," ").concat(S.relativePosition),style:window.innerHeight/100*((k.length+1)/2)*V*110<window.innerWidth?{left:"50%",transform:"translate(-50%)",width:(k.length+1)/2*V*110+"vh"}:{width:(k.length+1)/2*V*110+"vh"}},k.map((function(e,t){return r.a.createElement(m.a,{key:t,onClick:function(){return t=e.id,void n.push({pathname:"/profile",defaultData:{friend_id:t,prevUrl:"/aeronauts"}});var t},style:t+1&1?{position:"absolute",top:"50%",left:t*V*55+"vh",height:Z+"vh",width:Z+"vh",borderRadius:"50%"}:{position:"absolute",top:"8.4%",left:t*V*55+"vh",height:Z+"vh",width:Z+"vh",borderRadius:"50%"}},r.a.createElement(f.a,{className:"".concat(S.absolutePosition," ").concat(S.fullWidth," ").concat(S.fullHeight),overlap:"circle",anchorOrigin:{vertical:"top",horizontal:"right"},badgeContent:"0"!==e.count?r.a.createElement(h.a,null,"+"+e.count):r.a.createElement(r.a.Fragment,null)},r.a.createElement(h.a,{className:"".concat(S.absolutePosition," ").concat(S.fullWidth," ").concat(S.fullHeight),src:e.avatar_url})))}))))))),r.a.createElement(E.a,{item:!0,className:"".concat(S.mainGridBodyItem," ").concat(S.height1)},r.a.createElement(E.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"center"},r.a.createElement(E.a,{item:!0},r.a.createElement(d.a,{className:S.actionButton,variant:"contained",color:"secondary",onClick:function(){n.push("/")}},t.currLang.buttons.Back)))))))}$.propTypes={themeMode:l.a.object.isRequired,lang:l.a.object.isRequired,user_id:l.a.number.isRequired,userDataError:l.a.object.isRequired,userData:l.a.object.isRequired,userDataPending:l.a.object.isRequired,randomUsersError:l.a.object.isRequired,randomUsers:l.a.object.isRequired,randomUsersPending:l.a.object.isRequired};t.default=Object(c.b)((function(e){return{themeMode:e.themeMode,lang:e.lang,user_id:e.auth.user.id,userDataError:Object(w.b)(e),userData:Object(w.a)(e),userDataPending:Object(w.c)(e),randomUsersError:Object(k.b)(e),randomUsers:Object(k.a)(e),randomUsersPending:Object(k.c)(e)}}),(function(e){return Object(o.bindActionCreators)({fetchUserData:j.i,fetchRandomUsers:j.e},e)}))($)}}]);
//# sourceMappingURL=16.index-bundle.js.map