(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{316:function(e,t,a){"use strict";var n=a(21);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),c=(0,n(a(45)).default)(r.default.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.default=c},481:function(e,t,a){"use strict";var n=a(1),r=a(3),c=a(0),o=a.n(c),i=a(5),l=(a(4),a(6)),s=o.a.forwardRef((function(e,t){var a=e.animation,c=void 0===a?"pulse":a,l=e.classes,s=e.className,m=e.component,u=void 0===m?"div":m,d=e.height,f=e.variant,g=void 0===f?"text":f,h=e.width,b=Object(r.a)(e,["animation","classes","className","component","height","variant","width"]);return o.a.createElement(u,Object(n.a)({ref:t,className:Object(i.a)(l.root,l[g],s,!1!==c&&l[c])},b,{style:Object(n.a)({width:h,height:d},b.style)}))}));t.a=Object(l.a)((function(e){return{root:{display:"block",backgroundColor:e.palette.action.hover,height:"1.2em"},text:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 60%",transform:"scale(1, 0.60)",borderRadius:e.shape.borderRadius,"&:empty:before":{content:'"\\00a0"'}},rect:{},circle:{borderRadius:"50%"},pulse:{animation:"$pulse 1.5s ease-in-out 0.5s infinite"},"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}},wave:{position:"relative",overflow:"hidden","&::after":{animation:"$wave 1.5s linear 0.5s infinite",background:"linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",content:'""',position:"absolute",bottom:0,left:0,right:0,top:0,zIndex:1}},"@keyframes wave":{"0%":{transform:"translateX(-100%)"},"100%":{transform:"translateX(100%)"}}}}),{name:"MuiSkeleton"})(s)},655:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),o=a(24),i=a(4),l=a.n(i),s=a(267),m=a(368),u=a(310),d=a(331),f=a(258),g=a(265),h=a(145),b=a(266),E=a(142),v=a(307),p=a(263),P=a(349),j=a(140),y=a(259),O=a(481),N=a(99),x=a(257),w=a(19),k=a(40),D=a(95),C=a(42),L=a(91),R=a(96),_=a(54),q=a(107),I=a.n(q),S=a(316),F=a.n(S),U=a(383),A=a.n(U);function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function H(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(Object(a),!0).forEach((function(t){B(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function B(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function W(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw c}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var T=!0,z={regular:0,cdream:0,is_public:0};function X(e){var t=e.lang,a=e.themeMode,n=e.history,c=e.user_id,o=e.avatars,i=e.avatarsPending,l=e.avatarsError,k=e.fetchAvatars,D=e.userData,C=e.userDataError,L=e.userDataPending,R=e.fetchUserData,q=e.userPosts,S=e.userPostsError,U=e.userPostsPending,M=e.fetchUserPosts,B=e.connectPosts,X=e.connectPostsError,G=e.connectPostsPending,J=e.fetchConnectPosts,$=e.fetchUpdateUserData;C&&(console.log("Profile"),console.log(C),alert("Error")),S&&(console.log("Profile"),console.log(S),alert("Error")),X&&(console.log("Profile"),console.log(X),alert("Error")),l&&(console.log("Profile"),console.log(l),alert("Error"));var V=Object(w.c)(),K=Object(N.a)(a),Q=W(r.a.useState(),2),Y=Q[0],Z=Q[1],ee=W(r.a.useState(!1),2),te=ee[0],ae=ee[1],ne=r.a.useRef(null),re=W(r.a.useState(!1),2),ce=re[0],oe=re[1],ie=W(r.a.useState(z),2),le=ie[0],se=ie[1],me=W(r.a.useState(!1),2),ue=me[0],de=me[1],fe=W(r.a.useState(D.about),2),ge=fe[0],he=fe[1],be=W(r.a.useState(D.avatar_id),2),Ee=be[0],ve=be[1];if(!U&&null==S&&!T&&!ce){T=!0;var pe=le;pe=H({},pe,{regular:Object.keys(q.filter((function(e){return 0===e.post_type&&e}))).length}),pe=H({},pe,{cdream:Object.keys(q.filter((function(e){return 1===e.post_type&&e}))).length}),pe=H({},pe,{is_public:Object.keys(q.filter((function(e){return 1===e.is_public&&e}))).length}),se(pe)}if(!G&&null==X&&!T&&ce){T=!0;var Pe=le;Pe=H({},Pe,{is_public:Object.keys(B.filter((function(e){return 1===e.is_public&&e}))).length}),se(Pe)}var je=r.a.useCallback((function(e){T=!1,se(H({},z));var t=Object(_.b)();R(e,t),c===e?M(e,t):J(e,t)}),[Y]);return r.a.useEffect((function(){if(void 0!==e.location.defaultData?(je(e.location.defaultData.friend_id),Z(e.location.defaultData.friend_id),oe(!0)):(je(c),Z(c)),te){k();var t=ne.current;null!==t&&t.focus()}}),[te]),r.a.createElement(x.a,{theme:K},r.a.createElement(f.a,null),r.a.createElement(v.a,{open:te,scroll:"paper",fullWidth:!0,maxWidth:"md","aria-labelledby":"avatar-dialog-title","aria-describedby":"avatar-dialog-description"},r.a.createElement(d.a,{id:"avatar-dialog-title"},t.currLang.texts.Avatar),r.a.createElement(u.a,{dividers:!0},r.a.createElement(y.a,{container:!0,className:"".concat(V.height12," ").concat(V.minHeight100px),id:"avatar-dialog-description",spacing:2},i?r.a.createElement("div",{className:"".concat(V.formControl," ").concat(V.centerTextAlign)},r.a.createElement("div",{className:"".concat(V.inlineBlock," ").concat(V.relativePosition)},r.a.createElement(s.a,null)),r.a.createElement(g.a,{className:"".concat(V.relativePosition),component:"div"},t.currLang.texts.Loading)):o.map((function(e,t){return r.a.createElement(y.a,{item:!0,xs:4,sm:3,key:t},r.a.createElement("div",{className:"".concat(V.relativePosition," ").concat(V.fullWidth," ").concat(V.equalHeight)},r.a.createElement(h.a,{onClick:function(){return t=e.id,void ve(t);var t},className:"".concat(V.absolutePosition," ").concat(V.fullWidth," ").concat(V.fullHeight," ").concat(V.topLeft," ").concat(V.borderRadius50)},r.a.createElement(P.a,{src:e.url,className:"".concat(V.absolutePosition," ").concat(V.fullWidth," ").concat(V.fullHeight)})),Ee===e.id?r.a.createElement(I.a,{className:"".concat(V.absolutePosition," ").concat(V.topRight)}):r.a.createElement(r.a.Fragment,null)))})))),r.a.createElement(m.a,null,r.a.createElement(p.a,{onClick:function(){ve(D.avatar_id),ae(!1)},color:"secondary"},t.currLang.buttons.cancel),r.a.createElement(p.a,{onClick:function(){Ee!==D.avatar_id&&$(Y,{avatar_id:Ee},Object(_.b)()),ae(!1)},color:"primary"},t.currLang.buttons.Save))),r.a.createElement("div",{className:V.root},r.a.createElement(y.a,{className:"".concat(V.height12),container:!0,direction:"column",justify:"center",alignItems:"stretch"},r.a.createElement(y.a,{item:!0,className:"".concat(V.mainGridBodyItem," ").concat(V.height11)},r.a.createElement(y.a,{className:"".concat(V.height5," ").concat(V.relativePosition),container:!0},r.a.createElement(y.a,{item:!0,xs:12,sm:6,className:"".concat(V.relativePosition)},r.a.createElement(b.a,{disabled:!!ce,className:"".concat(V.formControl),onClick:function(){ae(!0)}},r.a.createElement(P.a,{src:D.avatar_url,className:"".concat(V.mediumAvatar)}))),r.a.createElement(y.a,{item:!0,xs:12,sm:6,className:"".concat(V.relativePosition)},L?r.a.createElement("div",{className:"".concat(V.width5," ").concat(V.height5," ").concat(V.centerButton)},r.a.createElement(O.a,{variant:"text"}),r.a.createElement(O.a,{variant:"text"})):r.a.createElement("div",{className:"".concat(V.formControl)},r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{variant:"h5",align:"center",color:"textPrimary"},D.nickname),r.a.createElement(g.a,{variant:"body2",align:"center",color:"textPrimary"},0===D.roles?t.currLang.texts.Admin:1===D.roles?t.currLang.texts.Moderator:t.currLang.texts.User))))),r.a.createElement(y.a,{className:"".concat(V.height3," ").concat(V.relativePosition),container:!0,direction:"row",justify:"center",alignItems:"stretch"},r.a.createElement(y.a,{item:!0,xs:7},r.a.createElement(y.a,{className:"".concat(V.height3)},r.a.createElement(g.a,{align:"center"},t.currLang.texts.InfoDreams,":")),r.a.createElement(y.a,{className:"".concat(V.height9),container:!0,direction:"column",justify:"center",alignItems:"stretch"},r.a.createElement(y.a,{className:"".concat(V.height4),container:!0,direction:"row",justify:"center",alignItems:"stretch"},r.a.createElement(y.a,{item:!0,xs:6},r.a.createElement(g.a,null,t.currLang.texts.Public,":")),r.a.createElement(y.a,{item:!0,xs:1}),r.a.createElement(y.a,{item:!0,xs:2},r.a.createElement(g.a,{align:"center"},le.is_public))),ce?r.a.createElement(r.a.Fragment,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{className:"".concat(V.height4),container:!0,direction:"row",justify:"center",alignItems:"stretch"},r.a.createElement(y.a,{item:!0,xs:6},r.a.createElement(g.a,null,t.currLang.texts.Regular,":")),r.a.createElement(y.a,{item:!0,xs:1}),r.a.createElement(y.a,{item:!0,xs:2},r.a.createElement(g.a,{align:"center"},le.regular))),r.a.createElement(y.a,{className:"".concat(V.height4),container:!0,direction:"row",justify:"center",alignItems:"stretch"},r.a.createElement(y.a,{item:!0,xs:6},r.a.createElement(g.a,null,t.currLang.texts.Cdream,":")),r.a.createElement(y.a,{item:!0,xs:1}),r.a.createElement(y.a,{item:!0,xs:2},r.a.createElement(g.a,{align:"center"},le.cdream)))))),r.a.createElement(y.a,{item:!0,xs:5,className:"".concat(V.relativePosition)},r.a.createElement(y.a,{className:"".concat(V.height12),container:!0,direction:"column",justify:"center",alignItems:"stretch"},ce?r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{className:"".concat(V.height6)},r.a.createElement("div",{className:"".concat(V.relativePosition," ").concat(V.fullHeight)},r.a.createElement(p.a,{className:"".concat(V.formControl," ").concat(V.width10),variant:"contained",color:"primary",onClick:function(){n.push({pathname:"/dreams",defaultData:{mode:"fromFriend",friend_id:Y,prevUrl:"/profile"}})}},t.currLang.buttons.dreamJoirnal))),r.a.createElement(y.a,{className:"".concat(V.height6)},r.a.createElement("div",{className:"".concat(V.relativePosition," ").concat(V.fullHeight)},r.a.createElement(p.a,{className:"".concat(V.formControl," ").concat(V.width10),variant:"contained",color:"primary",onClick:function(){n.push({pathname:"/dreammap",defaultData:{mode:"fromFriend",nickName:D.nickname,friend_id:Y,prevUrl:"/profile"}})}},t.currLang.texts.DreamsMap)))):r.a.createElement(r.a.Fragment,null)))),r.a.createElement(y.a,{className:"".concat(V.height2," ").concat(V.relativePosition)},r.a.createElement(j.a,{className:"".concat(V.mainGridDreamsContainer," ").concat(V.mainGridDreamsBodyItemContainerPaper)},L?r.a.createElement("div",{className:"".concat(V.absolutePosition," ").concat(V.hiddenOverflowX," ").concat(V.fullWidth," ").concat(V.fullHeight," ").concat(V.topLeft)},r.a.createElement(O.a,{variant:"text"}),r.a.createElement(O.a,{variant:"text"}),r.a.createElement(O.a,{variant:"text"}),r.a.createElement(O.a,{variant:"text"}),r.a.createElement(O.a,{variant:"text"}),r.a.createElement(O.a,{variant:"text"})):ue?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"".concat(V.absolutePosition," ").concat(V.hiddenOverflowX," ").concat(V.fullWidth," ").concat(V.fullHeight," ").concat(V.topLeft)},r.a.createElement(E.a,{className:"".concat(V.absolutePosition," ").concat(V.centerText),value:ge,onChange:function(e){he(e.target.value)},multiline:!0})),ce?r.a.createElement(r.a.Fragment,null):r.a.createElement(b.a,{size:"small",className:"".concat(V.topLeftCorner),onClick:function(){D.about!==ge&&$(Y,{about:ge},Object(_.b)()),de(!1)}},r.a.createElement(P.a,null,r.a.createElement(A.a,null)))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"".concat(V.absolutePosition," ").concat(V.hiddenOverflowX," ").concat(V.fullWidth," ").concat(V.fullHeight," ").concat(V.topLeft)},r.a.createElement(g.a,{className:"".concat(V.absolutePosition," ").concat(V.centerText),component:"div"},D.about)),ce?r.a.createElement(r.a.Fragment,null):r.a.createElement(b.a,{size:"small",className:"".concat(V.topLeftCorner),onClick:function(){de(!0)}},r.a.createElement(P.a,null,r.a.createElement(F.a,null)))))),r.a.createElement(y.a,{className:"".concat(V.height2," ").concat(V.relativePosition)})),r.a.createElement(y.a,{item:!0,className:"".concat(V.mainGridBodyItem," ").concat(V.height1)},r.a.createElement(y.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"center"},r.a.createElement(y.a,{item:!0},r.a.createElement(p.a,{className:V.actionButton,variant:"contained",color:"secondary",onClick:function(){n.push("/aeronauts")}},t.currLang.buttons.Back)))))))}X.propTypes={themeMode:l.a.object.isRequired,lang:l.a.object.isRequired,user_id:l.a.number.isRequired,userDataError:l.a.object.isRequired,userData:l.a.object.isRequired,userDataPending:l.a.object.isRequired,avatarsError:l.a.object.isRequired,avatars:l.a.object.isRequired,avatarsPending:l.a.object.isRequired,userPostsError:l.a.object.isRequired,userPosts:l.a.object.isRequired,userPostsPending:l.a.object.isRequired,connectPostsError:l.a.object.isRequired,connectPosts:l.a.object.isRequired,connectPostsPending:l.a.object.isRequired};t.default=Object(c.b)((function(e){return{themeMode:e.themeMode,lang:e.lang,user_id:e.auth.user.id,avatarsError:Object(D.c)(e),avatars:Object(D.b)(e),avatarsPending:Object(D.d)(e),userDataError:Object(C.b)(e),userData:Object(C.a)(e),userDataPending:Object(C.c)(e),userPostsError:Object(L.b)(e),userPosts:Object(L.a)(e),userPostsPending:Object(L.c)(e),connectPostsError:Object(R.c)(e),connectPosts:Object(R.b)(e),connectPostsPending:Object(R.d)(e)}}),(function(e){return Object(o.bindActionCreators)({fetchAvatars:k.a,fetchUserData:k.i,fetchUserPosts:k.k,fetchConnectPosts:k.b,fetchUpdateUserData:k.h},e)}))(X)}}]);
//# sourceMappingURL=13.index-bundle.js.map