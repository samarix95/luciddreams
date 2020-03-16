(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{308:function(e,a,t){"use strict";var n=t(1),r=t(3),i=t(0),o=t.n(i),c=(t(4),t(5)),l=t(6),s=t(265),d=o.a.forwardRef((function(e,a){var t=e.children,i=e.classes,l=e.className,d=e.disableTypography,m=void 0!==d&&d,u=Object(r.a)(e,["children","classes","className","disableTypography"]);return o.a.createElement("div",Object(n.a)({className:Object(c.a)(i.root,l),ref:a},u),m?t:o.a.createElement(s.a,{component:"h2",variant:"h6"},t))}));a.a=Object(l.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(d)},331:function(e,a,t){"use strict";var n=t(1),r=t(3),i=t(0),o=t.n(i),c=(t(4),t(5)),l=t(6),s=o.a.forwardRef((function(e,a){var t=e.disableSpacing,i=void 0!==t&&t,l=e.classes,s=e.className,d=Object(r.a)(e,["disableSpacing","classes","className"]);return o.a.createElement("div",Object(n.a)({className:Object(c.a)(l.root,s,!i&&l.spacing),ref:a},d))}));a.a=Object(l.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiDialogActions"})(s)},364:function(e,a,t){"use strict";var n=t(1),r=t(3),i=t(13),o=t(0),c=t.n(o),l=(t(4),t(5)),s=t(6),d=t(8),m=t(154),u=t(366),p=t(365),b=t(46),h=t(140),g={enter:b.b.enteringScreen,exit:b.b.leavingScreen},f=c.a.forwardRef((function(e,a){var t=e.BackdropProps,i=e.children,o=e.classes,s=e.className,b=e.disableBackdropClick,f=void 0!==b&&b,v=e.disableEscapeKeyDown,E=void 0!==v&&v,y=e.fullScreen,x=void 0!==y&&y,j=e.fullWidth,O=void 0!==j&&j,k=e.maxWidth,w=void 0===k?"sm":k,N=e.onBackdropClick,C=e.onClose,S=e.onEnter,B=e.onEntered,W=e.onEntering,P=e.onEscapeKeyDown,D=e.onExit,L=e.onExited,M=e.onExiting,R=e.open,U=e.PaperComponent,T=void 0===U?h.a:U,I=e.PaperProps,A=void 0===I?{}:I,q=e.scroll,z=void 0===q?"paper":q,F=e.TransitionComponent,K=void 0===F?p.a:F,H=e.transitionDuration,$=void 0===H?g:H,G=e.TransitionProps,Y=e["aria-describedby"],_=e["aria-labelledby"],V=Object(r.a)(e,["BackdropProps","children","classes","className","disableBackdropClick","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","onEnter","onEntered","onEntering","onEscapeKeyDown","onExit","onExited","onExiting","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps","aria-describedby","aria-labelledby"]),X=c.a.useRef();return c.a.createElement(m.a,Object(n.a)({className:Object(l.a)(o.root,s),BackdropComponent:u.a,BackdropProps:Object(n.a)({transitionDuration:$},t),closeAfterTransition:!0,disableBackdropClick:f,disableEscapeKeyDown:E,onEscapeKeyDown:P,onClose:C,open:R,ref:a},V),c.a.createElement(K,Object(n.a)({appear:!0,in:R,timeout:$,onEnter:S,onEntering:W,onEntered:B,onExit:D,onExiting:M,onExited:L,role:"none presentation"},G),c.a.createElement("div",{className:Object(l.a)(o.container,o["scroll".concat(Object(d.a)(z))]),onClick:function(e){e.target===e.currentTarget&&e.target===X.current&&(X.current=null,N&&N(e),!f&&C&&C(e,"backdropClick"))},onMouseDown:function(e){X.current=e.target}},c.a.createElement(T,Object(n.a)({elevation:24,role:"dialog","aria-describedby":Y,"aria-labelledby":_},A,{className:Object(l.a)(o.paper,o["paperScroll".concat(Object(d.a)(z))],o["paperWidth".concat(Object(d.a)(String(w)))],A.className,x&&o.paperFullScreen,O&&o.paperFullWidth)}),i))))}));a.a=Object(s.a)((function(e){return{root:{"@media print":{position:"absolute !important"}},scrollPaper:{display:"flex",justifyContent:"center",alignItems:"center"},scrollBody:{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}},container:{height:"100%","@media print":{height:"auto"},outline:0},paper:{margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},paperScrollPaper:{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},paperScrollBody:{display:"inline-block",verticalAlign:"middle",textAlign:"left"},paperWidthFalse:{maxWidth:"calc(100% - 64px)"},paperWidthXs:{maxWidth:Math.max(e.breakpoints.values.xs,444),"&$paperScrollBody":Object(i.a)({},e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64),{maxWidth:"calc(100% - 64px)"})},paperWidthSm:{maxWidth:e.breakpoints.values.sm,"&$paperScrollBody":Object(i.a)({},e.breakpoints.down(e.breakpoints.values.sm+64),{maxWidth:"calc(100% - 64px)"})},paperWidthMd:{maxWidth:e.breakpoints.values.md,"&$paperScrollBody":Object(i.a)({},e.breakpoints.down(e.breakpoints.values.md+64),{maxWidth:"calc(100% - 64px)"})},paperWidthLg:{maxWidth:e.breakpoints.values.lg,"&$paperScrollBody":Object(i.a)({},e.breakpoints.down(e.breakpoints.values.lg+64),{maxWidth:"calc(100% - 64px)"})},paperWidthXl:{maxWidth:e.breakpoints.values.xl,"&$paperScrollBody":Object(i.a)({},e.breakpoints.down(e.breakpoints.values.xl+64),{maxWidth:"calc(100% - 64px)"})},paperFullWidth:{width:"calc(100% - 64px)"},paperFullScreen:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,"&$paperScrollBody":{margin:0,maxWidth:"100%"}}}}),{name:"MuiDialog"})(f)},365:function(e,a,t){"use strict";var n=t(1),r=t(3),i=t(0),o=t.n(i),c=(t(4),t(208)),l=t(46),s=t(30),d=t(53),m=t(11),u={entering:{opacity:1},entered:{opacity:1}},p={enter:l.b.enteringScreen,exit:l.b.leavingScreen},b=o.a.forwardRef((function(e,a){var t=e.children,i=e.in,l=e.onEnter,b=e.onExit,h=e.style,g=e.timeout,f=void 0===g?p:g,v=Object(r.a)(e,["children","in","onEnter","onExit","style","timeout"]),E=Object(s.a)(),y=Object(m.a)(t.ref,a);return o.a.createElement(c.a,Object(n.a)({appear:!0,in:i,onEnter:function(e,a){Object(d.b)(e);var t=Object(d.a)({style:h,timeout:f},{mode:"enter"});e.style.webkitTransition=E.transitions.create("opacity",t),e.style.transition=E.transitions.create("opacity",t),l&&l(e,a)},onExit:function(e){var a=Object(d.a)({style:h,timeout:f},{mode:"exit"});e.style.webkitTransition=E.transitions.create("opacity",a),e.style.transition=E.transitions.create("opacity",a),b&&b(e)},timeout:f},v),(function(e,a){return o.a.cloneElement(t,Object(n.a)({style:Object(n.a)({opacity:0,visibility:"exited"!==e||i?void 0:"hidden"},u[e],{},h,{},t.props.style),ref:y},a))}))}));a.a=b},366:function(e,a,t){"use strict";var n=t(1),r=t(3),i=t(0),o=t.n(i),c=(t(4),t(5)),l=t(6),s=t(365),d=o.a.forwardRef((function(e,a){var t=e.children,i=e.classes,l=e.className,d=e.invisible,m=void 0!==d&&d,u=e.open,p=e.transitionDuration,b=Object(r.a)(e,["children","classes","className","invisible","open","transitionDuration"]);return o.a.createElement(s.a,Object(n.a)({in:u,timeout:p},b),o.a.createElement("div",{className:Object(c.a)(i.root,l,m&&i.invisible),"aria-hidden":!0,ref:a},t))}));a.a=Object(l.a)({root:{zIndex:-1,position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent",touchAction:"none"},invisible:{backgroundColor:"transparent"}},{name:"MuiBackdrop"})(d)},367:function(e,a,t){"use strict";var n=t(1),r=t(3),i=t(0),o=t.n(i),c=(t(4),t(5)),l=t(6),s=o.a.forwardRef((function(e,a){var t=e.classes,i=e.className,l=e.dividers,s=void 0!==l&&l,d=Object(r.a)(e,["classes","className","dividers"]);return o.a.createElement("div",Object(n.a)({className:Object(c.a)(t.root,i,s&&t.dividers),ref:a},d))}));a.a=Object(l.a)((function(e){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}}}),{name:"MuiDialogContent"})(s)},389:function(e,a,t){"use strict";var n=t(21);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),i=(0,n(t(45)).default)(r.default.createElement("path",{fillOpacity:".9",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"}),"AlternateEmail");a.default=i},390:function(e,a,t){"use strict";var n=t(21);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),i=(0,n(t(45)).default)(r.default.createElement("path",{d:"M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"}),"VpnKey");a.default=i},654:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(23),o=t(24),c=t(4),l=t.n(c),s=t(262),d=t(331),m=t(367),u=t(308),p=t(260),b=t(263),h=t(364),g=t(259),f=t(389),v=t.n(f),E=t(390),y=t.n(E),x=t(99),j=t(257),O=t(258),k=t(2),w=t(7),N=t(19),C=t(40),S=t(106),B=t(54),W=t(98),P=t(57);function D(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],n=!0,r=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done)&&(t.push(o.value),!a||t.length!==a);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw i}}return t}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function L(e){var a=Object(N.c)(),t=e.history,n=e.themeMode,i=e.lang,o=e.setSnackbar,c=e.setCurrLang,l=e.fetchUserData,f=e.fetchLoginUser,E=e.resetLoginUserError,w=e.loginUser,C=e.loginUserPending,S=e.loginUserError,L=Object(x.a)(n),M=D(r.a.useState(""),2),R=M[0],U=M[1],T=D(r.a.useState(""),2),I=T[0],A=T[1],q=D(r.a.useState(!1),2),z=q[0],F=q[1],K=D(r.a.useState(!1),2),H=K[0],$=K[1];(S&&(S.email?o({type:k.O,snackbar:{open:!0,variant:"error",message:i.currLang.errors[S.email]}}):S.password?o({type:k.O,snackbar:{open:!0,variant:"error",message:i.currLang.errors[S.password]}}):o({type:k.O,snackbar:{open:!0,variant:"error",message:i.currLang.errors[S]}}),E(),z&&F(!1)),Object.keys(w).length>0&&!C)&&(l(Object(B.d)(w.token),Object(B.b)()),t.push("/"));var G=function(){$(!1)},Y=function(e){c("Ru"===e?W.a:P.a)};return r.a.createElement(j.a,{theme:L},r.a.createElement(O.a,null),r.a.createElement(h.a,{open:H,onClose:G},r.a.createElement(u.a,null,i.currLang.buttons.signIn),r.a.createElement(m.a,{dividers:!0,className:"".concat(a.minHeight100px)},r.a.createElement(g.a,{item:!0,className:"".concat(a.mainGridBodyItem," ").concat(a.height12)},r.a.createElement("div",{className:"".concat(a.height1," ").concat(a.width12," ").concat(a.SearchPaper," ").concat(a.relativePosition," ").concat(a.horizontalCenter)},r.a.createElement(v.a,{className:"".concat(a.margin)}),r.a.createElement(p.a,{className:"".concat(a.height12),placeholder:"Email",type:"email",onChange:function(e){U(e.target.value)}})),r.a.createElement("div",{className:"".concat(a.height1," ").concat(a.width12," ").concat(a.SearchPaper," ").concat(a.relativePosition," ").concat(a.horizontalCenter)}),r.a.createElement("div",{className:"".concat(a.height1," ").concat(a.width12," ").concat(a.SearchPaper," ").concat(a.relativePosition," ").concat(a.horizontalCenter)},r.a.createElement(y.a,{className:"".concat(a.margin)}),r.a.createElement(p.a,{className:"".concat(a.height12),placeholder:i.currLang.texts.password,type:"password",onChange:function(e){A(e.target.value)}})))),r.a.createElement(d.a,null,z?r.a.createElement(s.a,{className:"".concat(a.margin," ").concat(a.textField)}):r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{onClick:G,color:"secondary",disabled:z},i.currLang.buttons.close),r.a.createElement(b.a,{onClick:function(){F(!0),f({email:R,password:I})},color:"primary",disabled:z},i.currLang.buttons.signIn)))),r.a.createElement("div",{className:a.root},r.a.createElement(g.a,{container:!0,className:"".concat(a.height12),direction:"column",justify:"center",alignItems:"stretch"},r.a.createElement(g.a,{item:!0,className:"".concat(a.mainGridBodyItem," ").concat(a.height11)},r.a.createElement(g.a,{container:!0,className:"".concat(a.height12),direction:"column",justify:"center",alignItems:"stretch"},r.a.createElement(g.a,{item:!0,className:"".concat(a.height3)}),r.a.createElement(g.a,{item:!0,className:"".concat(a.height6," ").concat(a.mainGridBodyItem)},r.a.createElement(g.a,{item:!0,className:"".concat(a.height2)}),r.a.createElement(g.a,{item:!0,className:"".concat(a.menuDivButton," ").concat(a.height2)},r.a.createElement(b.a,{className:"".concat(a.menuButton," ").concat(a.centerButton),variant:"outlined",color:"primary",onClick:function(){$(!0)}},i.currLang.buttons.signIn)),r.a.createElement(g.a,{item:!0,className:"".concat(a.menuDivButton," ").concat(a.height2)},r.a.createElement(b.a,{className:"".concat(a.menuButton," ").concat(a.centerButton),variant:"outlined",color:"primary",onClick:function(){t.push("/signup")}},i.currLang.buttons.signUp)),r.a.createElement(g.a,{item:!0,className:"".concat(a.height2)}),r.a.createElement(g.a,{item:!0,className:"".concat(a.menuDivButton," ").concat(a.height2)},r.a.createElement(b.a,{className:"".concat(a.menuButton," ").concat(a.centerButton),variant:"outlined",color:"primary",onClick:function(){alert("Open about page")}},i.currLang.buttons.about)),r.a.createElement(g.a,{item:!0,className:"".concat(a.height2)})),r.a.createElement(g.a,{item:!0,className:"".concat(a.height3)}))),r.a.createElement(g.a,{item:!0,className:"".concat(a.mainGridBodyItem," ").concat(a.height1)},r.a.createElement(g.a,{className:"".concat(a.menuButtonContainer),container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(g.a,{item:!0},r.a.createElement(b.a,{onClick:function(){Y("Ru")}},"RU")),r.a.createElement(g.a,{item:!0},r.a.createElement(b.a,{onClick:function(){Y("En")}},"EN")))))))}L.propTypes={setCurrLang:l.a.func.isRequired,setSnackbar:l.a.func.isRequired,themeMode:l.a.object.isRequired,fetchLoginUser:l.a.func.isRequired,resetLoginUserError:l.a.func.isRequired,loginUser:l.a.object.isRequired,loginUserPending:l.a.object.isRequired,loginUserError:l.a.object.isRequired};a.default=Object(i.b)((function(e){return{themeMode:e.themeMode,lang:e.lang,loginUser:Object(S.a)(e),loginUserPending:Object(S.c)(e),loginUserError:Object(S.b)(e)}}),(function(e){return Object(o.bindActionCreators)({setCurrLang:function(a){return e(Object(w.L)(a))},setSnackbar:function(a){return e(Object(w.M)(a))},fetchLoginUser:C.d,resetLoginUserError:C.o,fetchUserData:C.i},e)}))(L)}}]);
//# sourceMappingURL=8.index-bundle.js.map