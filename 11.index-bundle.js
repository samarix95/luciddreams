(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{482:function(e,t,a){"use strict";var n=a(1),r=a(0),c=a.n(r),i=(a(4),a(6)),o=a(271),s=c.a.forwardRef((function(e,t){return c.a.createElement(o.a,Object(n.a)({component:"p",variant:"body1",color:"textSecondary",ref:t},e))}));t.a=Object(i.a)({root:{marginBottom:12}},{name:"MuiDialogContentText"})(s)},743:function(e,t,a){"use strict";var n=a(1),r=a(3),c=a(0),i=a.n(c),o=(a(4),a(10)),s=a.n(o),l=a(55),u=a(214),m=a(11),d=a(29),f=a(46),g=a(53);function p(e,t){var a=function(e,t){var a,n=t.getBoundingClientRect();if(t.fakeTransform)a=t.fakeTransform;else{var r=window.getComputedStyle(t);a=r.getPropertyValue("-webkit-transform")||r.getPropertyValue("transform")}var c=0,i=0;if(a&&"none"!==a&&"string"==typeof a){var o=a.split("(")[1].split(")")[0].split(",");c=parseInt(o[4],10),i=parseInt(o[5],10)}return"left"===e?"translateX(".concat(window.innerWidth,"px) translateX(-").concat(n.left-c,"px)"):"right"===e?"translateX(-".concat(n.left+n.width-c,"px)"):"up"===e?"translateY(".concat(window.innerHeight,"px) translateY(-").concat(n.top-i,"px)"):"translateY(-".concat(n.top+n.height-i,"px)")}(e,t);a&&(t.style.webkitTransform=a,t.style.transform=a)}var b={enter:f.b.enteringScreen,exit:f.b.leavingScreen},h=i.a.forwardRef((function(e,t){var a=e.children,c=e.direction,o=void 0===c?"down":c,f=e.in,h=e.onEnter,E=e.onEntering,y=e.onExit,v=e.onExited,O=e.style,j=e.timeout,k=void 0===j?b:j,w=Object(r.a)(e,["children","direction","in","onEnter","onEntering","onExit","onExited","style","timeout"]),A=Object(d.a)(),N=i.a.useRef(null),B=i.a.useCallback((function(e){N.current=s.a.findDOMNode(e)}),[]),C=Object(m.a)(a.ref,B),D=Object(m.a)(C,t),L=i.a.useCallback((function(){N.current&&p(o,N.current)}),[o]);return i.a.useEffect((function(){if(!f&&"down"!==o&&"right"!==o){var e=Object(l.a)((function(){N.current&&p(o,N.current)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}}),[o,f]),i.a.useEffect((function(){f||L()}),[f,L]),i.a.createElement(u.a,Object(n.a)({onEnter:function(e,t){var a=N.current;p(o,a),Object(g.b)(a),h&&h(a,t)},onEntering:function(e,t){var a=N.current,r=Object(g.a)({timeout:k,style:O},{mode:"enter"});a.style.webkitTransition=A.transitions.create("-webkit-transform",Object(n.a)({},r,{easing:A.transitions.easing.easeOut})),a.style.transition=A.transitions.create("transform",Object(n.a)({},r,{easing:A.transitions.easing.easeOut})),a.style.webkitTransform="none",a.style.transform="none",E&&E(a,t)},onExit:function(){var e=N.current,t=Object(g.a)({timeout:k,style:O},{mode:"exit"});e.style.webkitTransition=A.transitions.create("-webkit-transform",Object(n.a)({},t,{easing:A.transitions.easing.sharp})),e.style.transition=A.transitions.create("transform",Object(n.a)({},t,{easing:A.transitions.easing.sharp})),p(o,e),y&&y(e)},onExited:function(){var e=N.current;e.style.webkitTransition="",e.style.transition="",v&&v(e)},appear:!0,in:f,timeout:k},w),(function(e,t){return i.a.cloneElement(a,Object(n.a)({ref:D,style:Object(n.a)({visibility:"exited"!==e||f?void 0:"hidden"},O,{},a.props.style)},t))}))}));t.a=h},897:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),i=a(23),o=a(4),s=a.n(o),l=a(482),u=a(224),m=a(351),d=a(398),f=a(350),g=a(151),p=a(272),b=a(271),h=a(274),E=a(347),y=a(269),v=a(380),O=a(743),j=a(265),k=a(2),w=a(7),A=a(39),N=a(40),B=a(42),C=a(98),D=a(54),L=(a(74),a(100)),x=a(263),S=a(264),U=a(124),R=a.n(U),I=a(430),T=a.n(I),M=a(99),P=a(57);function q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw c}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function z(e){return r.a.createElement(O.a,Y({},e,{direction:"down"}))}function G(e){var t=e.lang,a=e.themeMode,n=(e.auth,e.history),c=e.setCurrLangAction,i=e.setTheme,o=e.setSnackbar,s=e.userData,O=e.userDataPending,w=e.updateUserData,N=e.updateUserDataError,B=e.fetchUpdateUserData,C=e.resetUpdateUserDataError,U=e.resetUpdateUserData,I=Object(A.b)(),Y=Object(L.a)(a),G=q(r.a.useState(void 0),2),H=G[0],J=G[1],X=q(r.a.useState(!1),2),Q=X[0],V=X[1],W=q(r.a.useState(""),2),F=W[0],Z=W[1],_=q(r.a.useState(void 0),2),K=_[0],$=_[1],ee=q(r.a.useState(!1),2),te=ee[0],ae=ee[1],ne=function(){ae(!1)},re=function(e){e!==t.currLang.current&&("Ru"===e&&(J(t.currLang.current),c(M.a),Z(e),$((function(){return z})),V(!0)),"En"!==t.currLang.current&&(J(t.currLang.current),c(P.a),Z(e),$((function(){return z})),V(!0)))},ce=function(){switch(H){case"En":c(P.a);break;case"Ru":c(M.a);break;default:c(P.a)}V(!1)};return Object.keys(w).length>0&&"success"===w.result&&(o({type:k.O,snackbar:{open:!0,variant:"success",message:t.currLang.texts.success}}),Q&&V(!1),U()),N&&(o({type:k.O,snackbar:{open:!0,variant:"error",message:N}}),Q&&ce(),C()),r.a.createElement(x.a,{theme:Y},r.a.createElement(S.a,null),r.a.createElement(h.a,{key:"top, center",open:Q,anchorOrigin:{vertical:"top",horizontal:"center"},TransitionComponent:K},r.a.createElement(u.a,{"aria-describedby":"lang-snackbar",message:r.a.createElement(b.a,{id:"lang-snackbar",className:"".concat(I.height12),align:"center",variant:"body2"},t.currLang.texts.changleLanguage+F+" ?"),action:[r.a.createElement("div",{key:"lang-snackbar-buttons"},r.a.createElement(p.a,{key:"save","aria-label":"save",color:"inherit",onClick:function(){var e;switch(t.currLang.current){case"En":e=0;break;case"Ru":e=1;break;default:e=0}B(s.id,{language:e},Object(D.b)())}},r.a.createElement(T.a,null)),r.a.createElement(p.a,{key:"close","aria-label":"close",color:"inherit",onClick:ce},r.a.createElement(R.a,null)))]})),r.a.createElement(E.a,{open:te,onClose:ne,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(f.a,{id:"alert-dialog-title"},t.currLang.buttons.signOut),r.a.createElement(m.a,null,r.a.createElement(l.a,{id:"alert-dialog-description"},t.currLang.texts.LogOutQuestion)),r.a.createElement(d.a,null,r.a.createElement(y.a,{color:"secondary",onClick:ne},t.currLang.texts.cancel),r.a.createElement(y.a,{color:"primary",onClick:function(){Object(D.c)(),n.push("/signin")},autoFocus:!0},t.currLang.buttons.signOut))),r.a.createElement("div",{className:I.root},r.a.createElement(j.a,{container:!0,className:"".concat(I.height12),direction:"column",justify:"center",alignItems:"stretch"},r.a.createElement(j.a,{item:!0,className:"".concat(I.mainGridBodyItem," ").concat(I.height4)},r.a.createElement(j.a,{container:!0,className:I.mainGridContainer,direction:"row",justify:"space-around",alignItems:"stretch"},r.a.createElement(j.a,{item:!0,xs:4},r.a.createElement(g.a,{className:I.AstronautButton,onClick:function(){Object(D.a)()?n.push("/aeronauts"):n.push("/")}},r.a.createElement("div",{className:I.AstronautDiv},r.a.createElement("div",{className:I.AstronautImg,style:"light"===a.palette.type?{filter:"invert(0)"}:{filter:"invert(1)"}})))),r.a.createElement(j.a,{item:!0,xs:4},r.a.createElement(j.a,{className:"".concat(I.height8," ").concat(I.relativePosition)},r.a.createElement(g.a,{className:I.image,onClick:function(){var e="light"===a.palette.type?"dark":"light",t="light"===a.palette.type?"#f9a825":"#3f51b5",n=(a.palette.type,"#f50057");i({type:k.P,palette:{type:e,primary:{main:t},secondary:{main:n}}})}},r.a.createElement("div",{className:I.SkyDiv},r.a.createElement("div",{className:I.SunSrc,style:"dark"===a.palette.type?{transform:"translateY(36vw)"}:{transform:"translateY(0)"}}),r.a.createElement("div",{className:I.MoonSrc,style:"dark"===a.palette.type?{transform:"translateY(0)"}:{transform:"translateY(-36vw)"}})))),r.a.createElement(j.a,{className:"".concat(I.height4," ").concat(I.relativePosition," ").concat(I.horizontalCenter," ").concat(I.inlineBlock)},r.a.createElement("img",{className:"".concat(I.fullHeight),src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}),r.a.createElement(v.a,{className:"".concat(I.absolutePosition," ").concat(I.fullHeight," ").concat(I.fullWidth," ").concat(I.absoluteZero),src:O?"":s.avatar_url}))),r.a.createElement(j.a,{item:!0,xs:4},r.a.createElement(g.a,{className:I.MapButton,onClick:function(){Object(D.a)()?n.push("/dreammap"):n.push("/")}},r.a.createElement("div",{className:I.MapDiv},r.a.createElement("div",{className:I.MapImg,style:"light"===a.palette.type?{filter:"invert(0)"}:{filter:"invert(1)"}})))))),r.a.createElement(j.a,{item:!0,className:"".concat(I.mainGridBodyItem," ").concat(I.height6)},r.a.createElement(j.a,{container:!0,className:"".concat(I.menuButtonContainer," ").concat(I.height12),direction:"column",justify:"center",alignItems:"stretch"},r.a.createElement(j.a,{item:!0,className:"".concat(I.menuDivButton," ").concat(I.height2),align:"center"},r.a.createElement(y.a,{variant:"contained",color:"primary",className:"".concat(I.menuButton," ").concat(I.centerButton),onClick:function(){Object(D.a)()?n.push("/dreams"):n.push("/")}},t.currLang.buttons.dreamJoirnal)),r.a.createElement(j.a,{item:!0,className:"".concat(I.menuDivButton," ").concat(I.height2),align:"center"},r.a.createElement(y.a,{variant:"contained",color:"primary",className:"".concat(I.menuButton," ").concat(I.centerButton),onClick:function(){Object(D.a)()?n.push("/addregulardream"):n.push("/")}},t.currLang.buttons.addDream)),r.a.createElement(j.a,{item:!0,className:"".concat(I.menuDivButton," ").concat(I.height2),align:"center"},r.a.createElement(y.a,{variant:"contained",color:"primary",className:"".concat(I.menuButton," ").concat(I.centerButton),onClick:function(){Object(D.a)()?n.push("/addcdream"):n.push("/")}},t.currLang.buttons.addCDream)),r.a.createElement(j.a,{item:!0,className:"".concat(I.menuDivButton," ").concat(I.height2),align:"center"},r.a.createElement(y.a,{variant:"contained",color:"primary",className:"".concat(I.menuButton," ").concat(I.centerButton),onClick:function(){Object(D.a)()?n.push("/technics"):n.push("/")}},t.currLang.buttons.techniques)),r.a.createElement(j.a,{item:!0,className:"".concat(I.menuDivButton," ").concat(I.height2),align:"center"},r.a.createElement(y.a,{variant:"contained",color:"primary",className:"".concat(I.menuButton," ").concat(I.centerButton)},t.currLang.buttons.adventures)),r.a.createElement(j.a,{item:!0,className:"".concat(I.menuDivButton," ").concat(I.height2),align:"center"},r.a.createElement(y.a,{variant:"contained",color:"primary",className:"".concat(I.menuButton," ").concat(I.centerButton),onClick:function(){ae(!0)}},t.currLang.buttons.signOut)))),r.a.createElement(j.a,{item:!0,className:"".concat(I.mainGridBodyItem," ").concat(I.height1)}),r.a.createElement(j.a,{item:!0,className:"".concat(I.mainGridBodyItem," ").concat(I.height1)},r.a.createElement(j.a,{container:!0,className:"".concat(I.menuButtonContainer),direction:"row",justify:"center",alignItems:"center",spacing:1},r.a.createElement(j.a,{item:!0},r.a.createElement(y.a,{onClick:function(){re("Ru")},size:"small"},"RU")),r.a.createElement(j.a,{item:!0},r.a.createElement(y.a,{onClick:function(){re("En")},size:"small"},"EN")))))))}G.propTypes={setCurrLangAction:s.a.func.isRequired,setTheme:s.a.func.isRequired,setSnackbar:s.a.func.isRequired,setUserState:s.a.func.isRequired,lang:s.a.object.isRequired,themeMode:s.a.object.isRequired,auth:s.a.object.isRequired};t.default=Object(c.b)((function(e){return{lang:e.lang,themeMode:e.themeMode,auth:e.auth,userDataPending:Object(B.c)(e),userData:Object(B.a)(e),updateUserData:Object(C.a)(e),updateUserDataError:Object(C.b)(e)}}),(function(e){return Object(i.bindActionCreators)({setCurrLangAction:function(t){return e(Object(w.L)(t))},setTheme:function(t){return e(Object(w.N)(t))},setSnackbar:function(t){return e(Object(w.M)(t))},setUserState:function(t){return e(Object(w.O)(t))},fetchUpdateUserData:N.h,resetUpdateUserDataError:N.q,resetUpdateUserData:N.p},e)}))(G)}}]);
//# sourceMappingURL=11.index-bundle.js.map