(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{898:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(23),o=t(24),s=t(4),i=t.n(s),l=t(96),m=t.n(l),u=t(743),d=t(263),h=t(268),g=t(872),p=t.n(g),b=t(871),v=t.n(b),f=t(2),E=t(7),j=t(56),y=t(40),N=t(105),A=t(104),k=t(74),P=t(270),O=t(146),S=t(144),U=t(264),w=t(98),C=t(262),L=t(13),x=t(868),R=t.n(x),_=t(869),D=t.n(_);function M(e){var a=e.lang,t=e.themeMode,n=e.setUserLogin,c=e.setUserPass,o=e.setUserPassRepeat,s=Object(L.d)(),i=Object(w.a)(t),l=function(e){e.preventDefault()};return r.a.createElement(C.a,{theme:i},r.a.createElement(d.a,null),r.a.createElement(U.a,{item:!0,className:"".concat(s.mainGridBodyItem," ").concat(s.height12)},r.a.createElement(U.a,{className:"".concat(s.height1," ").concat(s.relativePosition)}),r.a.createElement(U.a,{className:"".concat(s.height1," ").concat(s.relativePosition)},r.a.createElement(P.a,{variant:"h5",component:"div",className:"".concat(s.centerButton)},a.currLang.buttons.signUp)),r.a.createElement(U.a,{className:"".concat(s.height1," ").concat(s.relativePosition)}),r.a.createElement(S.a,{className:"".concat(s.height1," ").concat(s.width10," ").concat(s.SearchPaper," ").concat(s.relativePosition," ").concat(s.horizontalCenter),component:"form",onSubmit:l},r.a.createElement(R.a,{className:"".concat(s.margin)}),r.a.createElement(O.a,{placeholder:"Email",type:"email",onChange:function(e){n(e.target.value)}})),r.a.createElement(U.a,{className:"".concat(s.height2," ").concat(s.relativePosition)}),r.a.createElement(S.a,{className:"".concat(s.height1," ").concat(s.width10," ").concat(s.SearchPaper," ").concat(s.relativePosition," ").concat(s.horizontalCenter),component:"form",onSubmit:l},r.a.createElement(D.a,{className:"".concat(s.margin)}),r.a.createElement(O.a,{placeholder:a.currLang.texts.password,type:"password",onChange:function(e){c(e.target.value)}})),r.a.createElement(U.a,{className:"".concat(s.height1," ").concat(s.relativePosition)}),r.a.createElement(S.a,{className:"".concat(s.height1," ").concat(s.width10," ").concat(s.SearchPaper," ").concat(s.relativePosition," ").concat(s.horizontalCenter),component:"form",onSubmit:l},r.a.createElement(D.a,{className:"".concat(s.margin)}),r.a.createElement(O.a,{placeholder:a.currLang.texts.passwordAgain,type:"password",onChange:function(e){o(e.target.value)}})),r.a.createElement(U.a,{className:"".concat(s.height3," ").concat(s.relativePosition)})))}M.propTypes={themeMode:i.a.object.isRequired,lang:i.a.object.isRequired};var q=Object(c.b)((function(e){return{themeMode:e.themeMode,lang:e.lang}}),(function(e){return Object(o.bindActionCreators)({},e)}))(M),B=t(870),J=t.n(B);function I(e){var a=e.lang,t=e.themeMode,n=e.setUserNickName,c=Object(L.d)(),o=Object(w.a)(t);return r.a.createElement(C.a,{theme:o},r.a.createElement(d.a,null),r.a.createElement(U.a,{item:!0,className:"".concat(c.mainGridBodyItem," ").concat(c.height12)},r.a.createElement(U.a,{className:"".concat(c.height1," ").concat(c.relativePosition)}),r.a.createElement(U.a,{className:"".concat(c.height1," ").concat(c.relativePosition)},r.a.createElement(P.a,{variant:"h5",component:"div",className:"".concat(c.centerButton)},a.currLang.texts.ChangeNickname)),r.a.createElement(U.a,{className:"".concat(c.height3," ").concat(c.relativePosition)}),r.a.createElement(S.a,{className:"".concat(c.height1," ").concat(c.width10," ").concat(c.SearchPaper," ").concat(c.relativePosition," ").concat(c.horizontalCenter),component:"form",onSubmit:function(e){e.preventDefault()}},r.a.createElement(J.a,{className:"".concat(c.margin)}),r.a.createElement(O.a,{placeholder:a.currLang.texts.nickname,type:"text",onChange:function(e){n(e.target.value)}})),r.a.createElement(U.a,{className:"".concat(c.height6," ").concat(c.relativePosition)})))}I.propTypes={themeMode:i.a.object.isRequired,lang:i.a.object.isRequired};var H=Object(c.b)((function(e){return{themeMode:e.themeMode,lang:e.lang}}),(function(e){return Object(o.bindActionCreators)({},e)}))(I),T=t(272),W=t(352),z=t(351),G=t(149),F=t(271),Z=t(348),Q=t(337),K=t(94);function V(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],n=!0,r=!1,c=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(t.push(o.value),!a||t.length!==a);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw c}}return t}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function X(e){var a=e.lang,t=e.themeMode,n=e.setUserAvatar,c=e.avatars,o=e.avatarsPending,s=e.avatarsError,i=e.fetchAvatars,l=e.setSnackbar,m=Object(L.d)(),u=Object(w.a)(t),h=V(r.a.useState(!1),2),g=h[0],p=h[1],b=V(r.a.useState(""),2),v=b[0],E=b[1];s&&l({type:f.J,snackbar:{open:!0,variant:"error",message:a.currLang.errors.AvatarsLoadError}});return r.a.useEffect((function(){i()}),[]),r.a.createElement(C.a,{theme:u},r.a.createElement(d.a,null),r.a.createElement(Z.a,{open:g,onClose:function(){p(!1)},scroll:"paper",fullWidth:!0,maxWidth:"md","aria-labelledby":"avatar-dialog-title","aria-describedby":"avatar-dialog-description"},r.a.createElement(z.a,{id:"avatar-dialog-title"},a.currLang.texts.ChangeAvatar),r.a.createElement(W.a,{dividers:!0},r.a.createElement(U.a,{container:!0,className:"".concat(m.height12," ").concat(m.relativePosition," ").concat(m.minHeight100px),id:"avatar-dialog-description",spacing:2},o?r.a.createElement("div",{className:"".concat(m.formControl," ").concat(m.centerTextAlign)},r.a.createElement("div",{className:"".concat(m.inlineBlock," ").concat(m.relativePosition)},r.a.createElement(T.a,null)),r.a.createElement(P.a,{className:"".concat(m.relativePosition),component:"div"},a.currLang.texts.Loading)):c.map((function(e,a){return r.a.createElement(U.a,{item:!0,xs:4,sm:3,key:a},r.a.createElement("div",{className:"".concat(m.relativePosition," ").concat(m.fullWidth," ").concat(m.equalHeight)},r.a.createElement(G.a,{onClick:function(){return a=e.id,t=e.url,E(t),n(a),void p(!1);var a,t},className:"".concat(m.absolutePosition," ").concat(m.fullWidth," ").concat(m.fullHeight," ").concat(m.topLeft," ").concat(m.borderRadius50)},r.a.createElement(Q.a,{src:e.url,className:"".concat(m.absolutePosition," ").concat(m.fullWidth," ").concat(m.fullHeight)}))))}))))),r.a.createElement(U.a,{item:!0,className:"".concat(m.mainGridBodyItem," ").concat(m.height12)},r.a.createElement(U.a,{className:"".concat(m.height1," ").concat(m.relativePosition)}),r.a.createElement(U.a,{className:"".concat(m.height1," ").concat(m.relativePosition)},r.a.createElement(P.a,{variant:"h5",component:"div",className:"".concat(m.centerButton)},a.currLang.texts.ChangeAvatar)),r.a.createElement(U.a,{className:"".concat(m.height1," ").concat(m.relativePosition)},r.a.createElement(P.a,{variant:"h6",component:"div",className:"".concat(m.centerButton)},"(",a.currLang.texts.orSkipStep,")")),r.a.createElement(U.a,{className:"".concat(m.height1," ").concat(m.relativePosition)}),r.a.createElement(U.a,{className:"".concat(m.height3," ").concat(m.relativePosition," ").concat(m.horizontalCenter," ").concat(m.inlineBlock)},r.a.createElement("img",{className:"".concat(m.fullHeight),src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}),r.a.createElement(F.a,{className:"".concat(m.absolutePosition," ").concat(m.fullHeight," ").concat(m.fullWidth," ").concat(m.absoluteZero),onClick:function(){p(!0)}},r.a.createElement(Q.a,{className:"".concat(m.absolutePosition," ").concat(m.fullHeight," ").concat(m.fullWidth," ").concat(m.absoluteZero),src:v}))),r.a.createElement(U.a,{className:"".concat(m.height5," ").concat(m.relativePosition)})))}X.propTypes={themeMode:i.a.object.isRequired,lang:i.a.object.isRequired,avatarsError:i.a.object.isRequired,avatars:i.a.object.isRequired,avatarsPending:i.a.object.isRequired,setSnackbar:i.a.func.isRequired};var Y=Object(c.b)((function(e){return{themeMode:e.themeMode,lang:e.lang,avatarsPending:Object(K.d)(e),avatars:Object(K.b)(e),avatarsError:Object(K.c)(e)}}),(function(e){return Object(o.bindActionCreators)({fetchAvatars:y.a,setSnackbar:function(a){return e(Object(E.H)(a))}},e)}))(X);function $(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],n=!0,r=!1,c=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(t.push(o.value),!a||t.length!==a);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw c}}return t}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function ee(e){var a=e.lang,t=e.themeMode,n=e.history,c=e.setSnackbar,o=e.setUserState,s=e.createdUser,i=e.createUserError,l=e.fetchCreateUser,g=e.resetCreateUserError,b=e.updateUserData,E=e.updateUserDataError,N=e.fetchUpdateUserData,A=e.resetUpdateUserDataError,P=Object(L.d)(),O=Object(w.a)(t),S=$(r.a.useState(!1),2),U=S[0],x=S[1],R=$(r.a.useState(0),2),_=R[0],D=R[1],M=$(r.a.useState(""),2),B=M[0],J=M[1],I=$(r.a.useState(""),2),T=I[0],W=I[1],z=$(r.a.useState(""),2),G=z[0],F=z[1],Z=$(r.a.useState(""),2),Q=Z[0],K=Z[1],V=$(r.a.useState(1),2),X=V[0],ee=V[1];if(i&&(i.email?c({type:f.J,snackbar:{open:!0,variant:"error",message:i.email}}):i.password?c({type:f.J,snackbar:{open:!0,variant:"error",message:i.password}}):c({type:f.J,snackbar:{open:!0,variant:"error",message:i}}),g(),U&&x(!1)),E&&(c({type:f.J,snackbar:{open:!0,variant:"error",message:E}}),A(),U&&x(!1)),Object.keys(s).length>0&&_===s.next_signup_step-1&&(U&&x(!1),D(s.next_signup_step),null===localStorage.getItem("jwtToken"))){localStorage.setItem("jwtToken",s.token),Object(j.a)(s.token);var ae=m()(s.token);o({type:f.H,payload:ae})}Object.keys(b).length>0&&_===b.next_signup_step-1&&(U&&x(!1),D(b.next_signup_step)),Object.keys(b).length>0&&_===y.l&&(c({type:f.J,snackbar:{open:!0,variant:"success",message:a.currLang.texts.sucessRegistration}}),n.push("/luciddreams"));var te=[r.a.createElement(q,{setUserLogin:J,setUserPass:W,setUserPassRepeat:F},null),r.a.createElement(H,{setUserNickName:K},null),r.a.createElement(Y,{setUserAvatar:ee},null)];return r.a.useEffect((function(){void 0!==e.location.defaultData&&(console.log(e.location.defaultData.signup_step),console.log(e.location.defaultData.id),D(e.location.defaultData.signup_step),s.newId=e.location.defaultData.id)}),[]),r.a.createElement(C.a,{theme:O},r.a.createElement(d.a,null),r.a.createElement("div",{className:P.root},r.a.createElement(u.a,{position:"bottom",variant:"dots",steps:y.l,activeStep:_,nextButton:r.a.createElement(h.a,{className:"".concat(P.minWidth100px),size:"small",onClick:_===te.length-1?function(){x(!0),N(s.newId,{avatar_id:X,curr_signup_step:_},Object(k.b)())}:function(){switch(_){case 0:if(0===B.length){c({type:f.J,snackbar:{open:!0,variant:"error",message:a.currLang.errors.emailLenght}});break}if(G!==T){c({type:f.J,snackbar:{open:!0,variant:"error",message:a.currLang.errors.passwordsCompare}});break}if(0===T.length||0===G.length){c({type:f.J,snackbar:{open:!0,variant:"error",message:a.currLang.errors.passwordLenght}});break}x(!0),l({email:B,password:T,password2:G,curr_signup_step:0});break;case 1:if(0===Q.length){c({type:f.J,snackbar:{open:!0,variant:"error",message:a.currLang.errors.nicknameLenght}});break}x(!0),N(s.newId,{nickname:Q,curr_signup_step:_},Object(k.b)())}},disabled:U},U?r.a.createElement(r.a.Fragment,null,_===te.length-1?r.a.createElement(v.a,null):r.a.createElement(p.a,null)):r.a.createElement(r.a.Fragment,null,_===te.length-1?a.currLang.buttons.Finish:a.currLang.buttons.Next,_===te.length-1?r.a.createElement(v.a,null):r.a.createElement(p.a,null))),backButton:r.a.createElement(h.a,{className:"".concat(P.minWidth100px),size:"small",disabled:!0})}),te[_]))}ee.propTypes={themeMode:i.a.object.isRequired,lang:i.a.object.isRequired,setSnackbar:i.a.func.isRequired,setUserState:i.a.func.isRequired};a.default=Object(c.b)((function(e){return{themeMode:e.themeMode,lang:e.lang,createdUser:Object(N.b)(e),createUserPending:Object(N.d)(e),createUserError:Object(N.c)(e),updateUserData:Object(A.a)(e),updateUserDataError:Object(A.b)(e)}}),(function(e){return Object(o.bindActionCreators)({setSnackbar:function(a){return e(Object(E.H)(a))},setUserState:function(a){return e(Object(E.J)(a))},fetchCreateUser:y.c,resetCreateUserError:y.m,fetchUpdateUserData:y.g,resetUpdateUserDataError:y.n},e)}))(ee)}}]);
//# sourceMappingURL=19.index-bundle.js.map