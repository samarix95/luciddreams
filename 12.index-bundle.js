(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{308:function(e,t,a){"use strict";var n=a(1),c=a(3),r=a(0),o=a.n(r),i=(a(4),a(5)),l=a(6),s=a(265),m=o.a.forwardRef((function(e,t){var a=e.children,r=e.classes,l=e.className,m=e.disableTypography,u=void 0!==m&&m,d=Object(c.a)(e,["children","classes","className","disableTypography"]);return o.a.createElement("div",Object(n.a)({className:Object(i.a)(r.root,l),ref:t},d),u?a:o.a.createElement(s.a,{component:"h2",variant:"h6"},a))}));t.a=Object(l.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(m)},314:function(e,t,a){"use strict";var n=a(21);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(0)),r=(0,n(a(45)).default)(c.default.createElement("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save");t.default=r},315:function(e,t,a){"use strict";var n=a(21);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(0)),r=(0,n(a(45)).default)(c.default.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.default=r},331:function(e,t,a){"use strict";var n=a(1),c=a(3),r=a(0),o=a.n(r),i=(a(4),a(5)),l=a(6),s=o.a.forwardRef((function(e,t){var a=e.disableSpacing,r=void 0!==a&&a,l=e.classes,s=e.className,m=Object(c.a)(e,["disableSpacing","classes","className"]);return o.a.createElement("div",Object(n.a)({className:Object(i.a)(l.root,s,!r&&l.spacing),ref:t},m))}));t.a=Object(l.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiDialogActions"})(s)},651:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(23),o=a(24),i=a(4),l=a.n(i),s=a(267),m=a(331),u=a(367),d=a(308),f=a(258),g=a(265),E=a(145),b=a(266),h=a(142),v=a(364),p=a(263),P=a(483),j=a(140),y=a(259),O=a(652),N=a(99),x=a(257),w=a(19),D=a(41),C=a(95),k=a(32),L=a(91),_=a(96),R=a(54),q=a(107),S=a.n(q),I=a(315),M=a.n(I),F=a(314),A=a.n(F);function H(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function U(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?H(Object(a),!0).forEach((function(t){T(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):H(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function T(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function W(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,c=!1,r=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){c=!0,r=e}finally{try{n||null==i.return||i.return()}finally{if(c)throw r}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var z=!0,B={regular:0,cdream:0,is_public:0};function G(e){var t=e.lang,a=e.themeMode,n=e.history,r=e.user_id,o=e.avatars,i=e.avatarsPending,l=e.avatarsError,D=e.fetchAvatars,C=e.userData,k=e.userDataError,L=e.userDataPending,_=e.fetchUserData,q=e.userPosts,I=e.userPostsError,F=e.userPostsPending,H=e.fetchUserPosts,T=e.connectPosts,G=e.connectPostsError,J=e.connectPostsPending,V=e.fetchConnectPosts,X=e.fetchUpdateUserData;k&&(console.log("Profile"),console.log(k),alert("Error")),I&&(console.log("Profile"),console.log(I),alert("Error")),G&&(console.log("Profile"),console.log(G),alert("Error")),l&&(console.log("Profile"),console.log(l),alert("Error"));var K=Object(w.c)(),Q=Object(N.a)(a),Y=W(c.a.useState(),2),Z=Y[0],$=Y[1],ee=W(c.a.useState(!1),2),te=ee[0],ae=ee[1],ne=c.a.useRef(null),ce=W(c.a.useState(!1),2),re=ce[0],oe=ce[1],ie=W(c.a.useState(B),2),le=ie[0],se=ie[1],me=W(c.a.useState(!1),2),ue=me[0],de=me[1],fe=W(c.a.useState(C.about),2),ge=fe[0],Ee=fe[1],be=W(c.a.useState(C.avatar_id),2),he=be[0],ve=be[1];if(!F&&null==I&&!z&&!re){z=!0;var pe=le;pe=U({},pe,{regular:Object.keys(q.filter((function(e){return 0===e.post_type&&e}))).length}),pe=U({},pe,{cdream:Object.keys(q.filter((function(e){return 1===e.post_type&&e}))).length}),pe=U({},pe,{is_public:Object.keys(q.filter((function(e){return 1===e.is_public&&e}))).length}),se(pe)}if(!J&&null==G&&!z&&re){z=!0;var Pe=le;Pe=U({},Pe,{is_public:Object.keys(T.filter((function(e){return 1===e.is_public&&e}))).length}),se(Pe)}var je=c.a.useCallback((function(e){z=!1,se(U({},B));var t=Object(R.b)();_(e,t),r===e?H(e,t):V(e,t)}),[Z]);return c.a.useEffect((function(){if(void 0!==e.location.defaultData?(je(e.location.defaultData.friend_id),$(e.location.defaultData.friend_id),oe(!0)):(je(r),$(r)),te){D();var t=ne.current;null!==t&&t.focus()}}),[te]),c.a.createElement(x.a,{theme:Q},c.a.createElement(f.a,null),c.a.createElement(v.a,{open:te,scroll:"paper",fullWidth:!0,maxWidth:"md","aria-labelledby":"avatar-dialog-title","aria-describedby":"avatar-dialog-description"},c.a.createElement(d.a,{id:"avatar-dialog-title"},t.currLang.texts.Avatar),c.a.createElement(u.a,{dividers:!0},c.a.createElement(y.a,{container:!0,className:"".concat(K.height12," ").concat(K.minHeight100px),id:"avatar-dialog-description",spacing:2},i?c.a.createElement("div",{className:"".concat(K.formControl," ").concat(K.centerTextAlign)},c.a.createElement("div",{className:"".concat(K.inlineBlock," ").concat(K.relativePosition)},c.a.createElement(s.a,null)),c.a.createElement(g.a,{className:"".concat(K.relativePosition),component:"div"},t.currLang.texts.Loading)):o.map((function(e,t){return c.a.createElement(y.a,{item:!0,xs:4,sm:3,key:t},c.a.createElement("div",{className:"".concat(K.relativePosition," ").concat(K.fullWidth," ").concat(K.equalHeight)},c.a.createElement(E.a,{onClick:function(){return t=e.id,void ve(t);var t},className:"".concat(K.absolutePosition," ").concat(K.fullWidth," ").concat(K.fullHeight," ").concat(K.topLeft," ").concat(K.borderRadius50)},c.a.createElement(P.a,{src:e.url,className:"".concat(K.absolutePosition," ").concat(K.fullWidth," ").concat(K.fullHeight)})),he===e.id?c.a.createElement(S.a,{className:"".concat(K.absolutePosition," ").concat(K.topRight)}):c.a.createElement(c.a.Fragment,null)))})))),c.a.createElement(m.a,null,c.a.createElement(p.a,{onClick:function(){ve(C.avatar_id),ae(!1)},color:"secondary"},t.currLang.buttons.cancel),c.a.createElement(p.a,{onClick:function(){he!==C.avatar_id&&X(Z,{avatar_id:he},Object(R.b)()),ae(!1)},color:"primary"},t.currLang.buttons.Save))),c.a.createElement("div",{className:K.root},c.a.createElement(y.a,{className:"".concat(K.height12),container:!0,direction:"column",justify:"center",alignItems:"stretch"},c.a.createElement(y.a,{item:!0,className:"".concat(K.mainGridBodyItem," ").concat(K.height11)},c.a.createElement(y.a,{className:"".concat(K.height5," ").concat(K.relativePosition),container:!0},c.a.createElement(y.a,{item:!0,xs:12,sm:6,className:"".concat(K.relativePosition)},c.a.createElement(b.a,{disabled:!!re,className:"".concat(K.formControl),onClick:function(){ae(!0)}},c.a.createElement(P.a,{src:C.avatar_url,className:"".concat(K.mediumAvatar)}))),c.a.createElement(y.a,{item:!0,xs:12,sm:6,className:"".concat(K.relativePosition)},L?c.a.createElement("div",{className:"".concat(K.width5," ").concat(K.height5," ").concat(K.centerButton)},c.a.createElement(O.a,{variant:"text"}),c.a.createElement(O.a,{variant:"text"})):c.a.createElement("div",{className:"".concat(K.formControl)},c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,{variant:"h5",align:"center",color:"textPrimary"},C.nickname),c.a.createElement(g.a,{variant:"body2",align:"center",color:"textPrimary"},0===C.roles?t.currLang.texts.Admin:1===C.roles?t.currLang.texts.Moderator:t.currLang.texts.User))))),c.a.createElement(y.a,{className:"".concat(K.height3," ").concat(K.relativePosition),container:!0,direction:"row",justify:"center",alignItems:"stretch"},c.a.createElement(y.a,{item:!0,xs:7},c.a.createElement(y.a,{className:"".concat(K.height3)},c.a.createElement(g.a,{align:"center"},t.currLang.texts.InfoDreams,":")),c.a.createElement(y.a,{className:"".concat(K.height9),container:!0,direction:"column",justify:"center",alignItems:"stretch"},c.a.createElement(y.a,{className:"".concat(K.height4),container:!0,direction:"row",justify:"center",alignItems:"stretch"},c.a.createElement(y.a,{item:!0,xs:6},c.a.createElement(g.a,null,t.currLang.texts.Public,":")),c.a.createElement(y.a,{item:!0,xs:1}),c.a.createElement(y.a,{item:!0,xs:2},c.a.createElement(g.a,{align:"center"},le.is_public))),re?c.a.createElement(c.a.Fragment,null):c.a.createElement(c.a.Fragment,null,c.a.createElement(y.a,{className:"".concat(K.height4),container:!0,direction:"row",justify:"center",alignItems:"stretch"},c.a.createElement(y.a,{item:!0,xs:6},c.a.createElement(g.a,null,t.currLang.texts.Regular,":")),c.a.createElement(y.a,{item:!0,xs:1}),c.a.createElement(y.a,{item:!0,xs:2},c.a.createElement(g.a,{align:"center"},le.regular))),c.a.createElement(y.a,{className:"".concat(K.height4),container:!0,direction:"row",justify:"center",alignItems:"stretch"},c.a.createElement(y.a,{item:!0,xs:6},c.a.createElement(g.a,null,t.currLang.texts.Cdream,":")),c.a.createElement(y.a,{item:!0,xs:1}),c.a.createElement(y.a,{item:!0,xs:2},c.a.createElement(g.a,{align:"center"},le.cdream)))))),c.a.createElement(y.a,{item:!0,xs:5,className:"".concat(K.relativePosition)},c.a.createElement(y.a,{className:"".concat(K.height12),container:!0,direction:"column",justify:"center",alignItems:"stretch"},re?c.a.createElement(c.a.Fragment,null,c.a.createElement(y.a,{className:"".concat(K.height6)},c.a.createElement("div",{className:"".concat(K.relativePosition," ").concat(K.fullHeight)},c.a.createElement(p.a,{className:"".concat(K.formControl," ").concat(K.width10),variant:"outlined",color:"primary",onClick:function(){n.push({pathname:"/dreams",defaultData:{mode:"fromFriend",friend_id:Z,prevUrl:"/profile"}})}},t.currLang.buttons.dreamJoirnal))),c.a.createElement(y.a,{className:"".concat(K.height6)},c.a.createElement("div",{className:"".concat(K.relativePosition," ").concat(K.fullHeight)},c.a.createElement(p.a,{className:"".concat(K.formControl," ").concat(K.width10),variant:"outlined",color:"primary",onClick:function(){n.push({pathname:"/dreammap",defaultData:{mode:"fromFriend",nickName:C.nickname,friend_id:Z,prevUrl:"/profile"}})}},t.currLang.texts.DreamsMap)))):c.a.createElement(c.a.Fragment,null)))),c.a.createElement(y.a,{className:"".concat(K.height2," ").concat(K.relativePosition)},c.a.createElement(j.a,{className:"".concat(K.mainGridDreamsContainer," ").concat(K.mainGridDreamsBodyItemContainerPaper)},L?c.a.createElement("div",{className:"".concat(K.absolutePosition," ").concat(K.hiddenOverflowX," ").concat(K.fullWidth," ").concat(K.fullHeight," ").concat(K.topLeft)},c.a.createElement(O.a,{variant:"text"}),c.a.createElement(O.a,{variant:"text"}),c.a.createElement(O.a,{variant:"text"}),c.a.createElement(O.a,{variant:"text"}),c.a.createElement(O.a,{variant:"text"}),c.a.createElement(O.a,{variant:"text"})):ue?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"".concat(K.absolutePosition," ").concat(K.hiddenOverflowX," ").concat(K.fullWidth," ").concat(K.fullHeight," ").concat(K.topLeft)},c.a.createElement(h.a,{className:"".concat(K.absolutePosition," ").concat(K.centerText),value:ge,onChange:function(e){Ee(e.target.value)},multiline:!0})),re?c.a.createElement(c.a.Fragment,null):c.a.createElement(b.a,{size:"small",className:"".concat(K.topLeftCorner),onClick:function(){C.about!==ge&&X(Z,{about:ge},Object(R.b)()),de(!1)}},c.a.createElement(P.a,null,c.a.createElement(A.a,null)))):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"".concat(K.absolutePosition," ").concat(K.hiddenOverflowX," ").concat(K.fullWidth," ").concat(K.fullHeight," ").concat(K.topLeft)},c.a.createElement(g.a,{className:"".concat(K.absolutePosition," ").concat(K.centerText),component:"div"},C.about)),re?c.a.createElement(c.a.Fragment,null):c.a.createElement(b.a,{size:"small",className:"".concat(K.topLeftCorner),onClick:function(){de(!0)}},c.a.createElement(P.a,null,c.a.createElement(M.a,null)))))),c.a.createElement(y.a,{className:"".concat(K.height2," ").concat(K.relativePosition)})),c.a.createElement(y.a,{item:!0,className:"".concat(K.mainGridBodyItem," ").concat(K.height1)},c.a.createElement(y.a,{className:"".concat(K.relativePosition," ").concat(K.verticalCenter),container:!0,direction:"row",justify:"space-evenly",alignItems:"center"},c.a.createElement(y.a,{item:!0},c.a.createElement(p.a,{className:K.actionButton,variant:"outlined",color:"primary",onClick:function(){n.push("/aeronauts")}},t.currLang.buttons.Back)))))))}G.propTypes={themeMode:l.a.object.isRequired,lang:l.a.object.isRequired,user_id:l.a.number.isRequired,userDataError:l.a.object.isRequired,userData:l.a.object.isRequired,userDataPending:l.a.object.isRequired,avatarsError:l.a.object.isRequired,avatars:l.a.object.isRequired,avatarsPending:l.a.object.isRequired,userPostsError:l.a.object.isRequired,userPosts:l.a.object.isRequired,userPostsPending:l.a.object.isRequired,connectPostsError:l.a.object.isRequired,connectPosts:l.a.object.isRequired,connectPostsPending:l.a.object.isRequired};t.default=Object(r.b)((function(e){return{themeMode:e.themeMode,lang:e.lang,user_id:e.auth.user.id,avatarsError:Object(C.c)(e),avatars:Object(C.b)(e),avatarsPending:Object(C.d)(e),userDataError:Object(k.b)(e),userData:Object(k.a)(e),userDataPending:Object(k.c)(e),userPostsError:Object(L.b)(e),userPosts:Object(L.a)(e),userPostsPending:Object(L.c)(e),connectPostsError:Object(_.c)(e),connectPosts:Object(_.b)(e),connectPostsPending:Object(_.d)(e)}}),(function(e){return Object(o.bindActionCreators)({fetchAvatars:D.a,fetchUserData:D.i,fetchUserPosts:D.k,fetchConnectPosts:D.b,fetchUpdateUserData:D.h},e)}))(G)}}]);
//# sourceMappingURL=12.index-bundle.js.map