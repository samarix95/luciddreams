(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{900:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(22),o=t(23),s=t(4),i=t.n(s),l=t(748),u=t(263),m=t(268),h=t(878),g=t.n(h),d=t(877),p=t.n(d),b=t(2),v=t(7),E=t(40),f=t(105),A=t(97),N=t(54),O=t(270),j=t(147),y=t(145),k=t(264),P=t(99),S=t(262),U=t(39),L=t(437),w=t.n(L),C=t(438),x=t.n(C);function R(e){var a=e.lang,t=e.themeMode,n=e.setUserLogin,c=e.setUserPass,o=e.setUserPassRepeat,s=Object(U.b)(),i=Object(P.a)(t),l=function(e){e.preventDefault()};return r.a.createElement(S.a,{theme:i},r.a.createElement(u.a,null),r.a.createElement(k.a,{item:!0,className:"".concat(s.mainGridBodyItem," ").concat(s.height12)},r.a.createElement(k.a,{className:"".concat(s.height1," ").concat(s.relativePosition)}),r.a.createElement(k.a,{className:"".concat(s.height1," ").concat(s.relativePosition)},r.a.createElement(O.a,{variant:"h5",component:"div",className:"".concat(s.centerButton)},a.currLang.buttons.signUp)),r.a.createElement(k.a,{className:"".concat(s.height1," ").concat(s.relativePosition)}),r.a.createElement(y.a,{className:"".concat(s.height1," ").concat(s.width10," ").concat(s.SearchPaper," ").concat(s.relativePosition," ").concat(s.horizontalCenter),component:"form",onSubmit:l},r.a.createElement(w.a,{className:"".concat(s.margin)}),r.a.createElement(j.a,{className:"".concat(s.height12),placeholder:"Email",type:"email",onChange:function(e){n(e.target.value)}})),r.a.createElement(k.a,{className:"".concat(s.height2," ").concat(s.relativePosition)}),r.a.createElement(y.a,{className:"".concat(s.height1," ").concat(s.width10," ").concat(s.SearchPaper," ").concat(s.relativePosition," ").concat(s.horizontalCenter),component:"form",onSubmit:l},r.a.createElement(x.a,{className:"".concat(s.margin)}),r.a.createElement(j.a,{placeholder:a.currLang.texts.password,type:"password",onChange:function(e){c(e.target.value)}})),r.a.createElement(k.a,{className:"".concat(s.height1," ").concat(s.relativePosition)}),r.a.createElement(y.a,{className:"".concat(s.height1," ").concat(s.width10," ").concat(s.SearchPaper," ").concat(s.relativePosition," ").concat(s.horizontalCenter),component:"form",onSubmit:l},r.a.createElement(x.a,{className:"".concat(s.margin)}),r.a.createElement(j.a,{placeholder:a.currLang.texts.passwordAgain,type:"password",onChange:function(e){o(e.target.value)}})),r.a.createElement(k.a,{className:"".concat(s.height3," ").concat(s.relativePosition)})))}R.propTypes={themeMode:i.a.object.isRequired,lang:i.a.object.isRequired};var M=Object(c.b)((function(e){return{themeMode:e.themeMode,lang:e.lang}}),(function(e){return Object(o.bindActionCreators)({},e)}))(R),_=t(876),q=t.n(_);function D(e){var a=e.lang,t=e.themeMode,n=e.setUserNickName,c=Object(U.b)(),o=Object(P.a)(t);return r.a.createElement(S.a,{theme:o},r.a.createElement(u.a,null),r.a.createElement(k.a,{item:!0,className:"".concat(c.mainGridBodyItem," ").concat(c.height12)},r.a.createElement(k.a,{className:"".concat(c.height1," ").concat(c.relativePosition)}),r.a.createElement(k.a,{className:"".concat(c.height1," ").concat(c.relativePosition)},r.a.createElement(O.a,{variant:"h5",component:"div",className:"".concat(c.centerButton)},a.currLang.texts.ChangeNickname)),r.a.createElement(k.a,{className:"".concat(c.height3," ").concat(c.relativePosition)}),r.a.createElement(y.a,{className:"".concat(c.height1," ").concat(c.width10," ").concat(c.SearchPaper," ").concat(c.relativePosition," ").concat(c.horizontalCenter),component:"form",onSubmit:function(e){e.preventDefault()}},r.a.createElement(q.a,{className:"".concat(c.margin)}),r.a.createElement(j.a,{placeholder:a.currLang.texts.nickname,type:"text",onChange:function(e){n(e.target.value)}})),r.a.createElement(k.a,{className:"".concat(c.height6," ").concat(c.relativePosition)})))}D.propTypes={themeMode:i.a.object.isRequired,lang:i.a.object.isRequired};var B=Object(c.b)((function(e){return{themeMode:e.themeMode,lang:e.lang}}),(function(e){return Object(o.bindActionCreators)({},e)}))(D),I=t(272),T=t(350),W=t(349),H=t(150),z=t(271),G=t(346),F=t(379),J=t(95);function Q(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],n=!0,r=!1,c=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(t.push(o.value),!a||t.length!==a);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw c}}return t}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Y(e){var a=e.lang,t=e.themeMode,n=e.setUserAvatar,c=e.avatars,o=e.avatarsPending,s=e.avatarsError,i=e.fetchAvatars,l=e.setSnackbar,m=Object(U.b)(),h=Object(P.a)(t),g=Q(r.a.useState(!1),2),d=g[0],p=g[1],v=Q(r.a.useState(""),2),E=v[0],f=v[1];s&&l({type:b.O,snackbar:{open:!0,variant:"error",message:a.currLang.errors.AvatarsLoadError}});return r.a.useEffect((function(){i()}),[]),r.a.createElement(S.a,{theme:h},r.a.createElement(u.a,null),r.a.createElement(G.a,{open:d,onClose:function(){p(!1)},scroll:"paper",fullWidth:!0,maxWidth:"md","aria-labelledby":"avatar-dialog-title","aria-describedby":"avatar-dialog-description"},r.a.createElement(W.a,{id:"avatar-dialog-title"},a.currLang.texts.ChangeAvatar),r.a.createElement(T.a,{dividers:!0},r.a.createElement(k.a,{container:!0,className:"".concat(m.height12," ").concat(m.relativePosition," ").concat(m.minHeight100px),id:"avatar-dialog-description",spacing:2},o?r.a.createElement("div",{className:"".concat(m.formControl," ").concat(m.centerTextAlign)},r.a.createElement("div",{className:"".concat(m.inlineBlock," ").concat(m.relativePosition)},r.a.createElement(I.a,null)),r.a.createElement(O.a,{className:"".concat(m.relativePosition),component:"div"},a.currLang.texts.Loading)):c.map((function(e,a){return r.a.createElement(k.a,{item:!0,xs:4,sm:3,key:a},r.a.createElement("div",{className:"".concat(m.relativePosition," ").concat(m.fullWidth," ").concat(m.equalHeight)},r.a.createElement(H.a,{onClick:function(){return a=e.id,t=e.url,f(t),n(a),void p(!1);var a,t},className:"".concat(m.absolutePosition," ").concat(m.fullWidth," ").concat(m.fullHeight," ").concat(m.topLeft," ").concat(m.borderRadius50)},r.a.createElement(F.a,{src:e.url,className:"".concat(m.absolutePosition," ").concat(m.fullWidth," ").concat(m.fullHeight)}))))}))))),r.a.createElement(k.a,{item:!0,className:"".concat(m.mainGridBodyItem," ").concat(m.height12)},r.a.createElement(k.a,{className:"".concat(m.height1," ").concat(m.relativePosition)}),r.a.createElement(k.a,{className:"".concat(m.height1," ").concat(m.relativePosition)},r.a.createElement(O.a,{variant:"h6",component:"div",className:"".concat(m.centerButton)},a.currLang.texts.ChangeAvatar)),r.a.createElement(k.a,{className:"".concat(m.height1," ").concat(m.relativePosition)},r.a.createElement(O.a,{variant:"body",component:"div",className:"".concat(m.centerButton)},"(",a.currLang.texts.orSkipStep,")")),r.a.createElement(k.a,{className:"".concat(m.height1," ").concat(m.relativePosition)}),r.a.createElement(k.a,{className:"".concat(m.height3," ").concat(m.relativePosition," ").concat(m.horizontalCenter," ").concat(m.inlineBlock)},r.a.createElement("img",{className:"".concat(m.fullHeight),src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}),r.a.createElement(z.a,{className:"".concat(m.absolutePosition," ").concat(m.fullHeight," ").concat(m.fullWidth," ").concat(m.absoluteZero),onClick:function(){p(!0)}},r.a.createElement(F.a,{className:"".concat(m.absolutePosition," ").concat(m.fullHeight," ").concat(m.fullWidth," ").concat(m.absoluteZero),src:E}))),r.a.createElement(k.a,{className:"".concat(m.height5," ").concat(m.relativePosition)})))}Y.propTypes={themeMode:i.a.object.isRequired,lang:i.a.object.isRequired,avatarsError:i.a.object.isRequired,avatars:i.a.object.isRequired,avatarsPending:i.a.object.isRequired,setSnackbar:i.a.func.isRequired};var Z=Object(c.b)((function(e){return{themeMode:e.themeMode,lang:e.lang,avatarsPending:Object(J.d)(e),avatars:Object(J.b)(e),avatarsError:Object(J.c)(e)}}),(function(e){return Object(o.bindActionCreators)({fetchAvatars:E.a,setSnackbar:function(a){return e(Object(v.M)(a))}},e)}))(Y);function K(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],n=!0,r=!1,c=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(t.push(o.value),!a||t.length!==a);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw c}}return t}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function V(e){var a=e.lang,t=e.themeMode,n=e.history,c=e.setSnackbar,o=(e.setUserState,e.createdUser),s=e.createUserError,i=e.fetchCreateUser,h=e.resetCreateUserError,d=e.updateUserData,v=e.updateUserDataError,f=e.fetchUpdateUserData,A=e.resetUpdateUserDataError,O=Object(U.b)(),j=Object(P.a)(t),y=K(r.a.useState(!1),2),k=y[0],L=y[1],w=K(r.a.useState(0),2),C=w[0],x=w[1],R=K(r.a.useState(""),2),_=R[0],q=R[1],D=K(r.a.useState(""),2),I=D[0],T=D[1],W=K(r.a.useState(""),2),H=W[0],z=W[1],G=K(r.a.useState(""),2),F=G[0],J=G[1],Q=K(r.a.useState(1),2),Y=Q[0],V=Q[1];s&&(s.email?c({type:b.O,snackbar:{open:!0,variant:"error",message:a.currLang.errors[s.email]}}):s.password?c({type:b.O,snackbar:{open:!0,variant:"error",message:a.currLang.errors[s.password]}}):c({type:b.O,snackbar:{open:!0,variant:"error",message:a.currLang.errors[s]}}),h(),k&&L(!1)),v&&(c({type:b.O,snackbar:{open:!0,variant:"error",message:v}}),A(),k&&L(!1)),Object.keys(o).length>0&&C===o.next_signup_step-1&&(k&&L(!1),x(o.next_signup_step),null===localStorage.getItem("jwtToken")&&Object(N.d)(o.token)),Object.keys(d).length>0&&C===d.next_signup_step-1&&(k&&L(!1),x(d.next_signup_step)),Object.keys(d).length>0&&C===E.m&&(c({type:b.O,snackbar:{open:!0,variant:"success",message:a.currLang.texts.sucessRegistration}}),n.push("/"));var X=[r.a.createElement(M,{setUserLogin:q,setUserPass:T,setUserPassRepeat:z},null),r.a.createElement(B,{setUserNickName:J},null),r.a.createElement(Z,{setUserAvatar:V},null)];return r.a.useEffect((function(){void 0!==e.location.defaultData&&(x(e.location.defaultData.signup_step),o.newId=e.location.defaultData.id)}),[]),r.a.createElement(S.a,{theme:j},r.a.createElement(u.a,null),r.a.createElement("div",{className:O.root},r.a.createElement(l.a,{position:"bottom",variant:"dots",steps:E.m,activeStep:C,nextButton:r.a.createElement(m.a,{className:"".concat(O.minWidth100px),size:"small",onClick:C===X.length-1?function(){L(!0),f(o.newId,{avatar_id:Y,curr_signup_step:C},Object(N.b)())}:function(){switch(C){case 0:if(0===_.length){c({type:b.O,snackbar:{open:!0,variant:"error",message:a.currLang.errors.EMPTY_EMAIL}});break}if(H!==I){c({type:b.O,snackbar:{open:!0,variant:"error",message:a.currLang.errors.PASSWORDS_NOT_EQUAL}});break}if(0===I.length||0===H.length){c({type:b.O,snackbar:{open:!0,variant:"error",message:a.currLang.errors.EMPTY_PASSWORD}});break}var e;switch(L(!0),a.currLang.current){case"En":e=0;break;case"Ru":e=1;break;default:e=0}i({email:_,password:I,password2:H,language:e,curr_signup_step:0});break;case 1:if(0===F.length){c({type:b.O,snackbar:{open:!0,variant:"error",message:a.currLang.errors.nicknameLenght}});break}L(!0),f(o.newId,{nickname:F,curr_signup_step:C},Object(N.b)())}},disabled:k},k?r.a.createElement(r.a.Fragment,null,C===X.length-1?r.a.createElement(p.a,null):r.a.createElement(g.a,null)):r.a.createElement(r.a.Fragment,null,C===X.length-1?a.currLang.buttons.Finish:a.currLang.buttons.Next,C===X.length-1?r.a.createElement(p.a,null):r.a.createElement(g.a,null))),backButton:r.a.createElement(m.a,{className:"".concat(O.minWidth100px),size:"small",onClick:function(){n.push("/signin")}},a.currLang.buttons.close)}),X[C]))}V.propTypes={themeMode:i.a.object.isRequired,lang:i.a.object.isRequired,setSnackbar:i.a.func.isRequired,setUserState:i.a.func.isRequired};a.default=Object(c.b)((function(e){return{themeMode:e.themeMode,lang:e.lang,createdUser:Object(f.b)(e),createUserPending:Object(f.d)(e),createUserError:Object(f.c)(e),updateUserData:Object(A.a)(e),updateUserDataError:Object(A.b)(e)}}),(function(e){return Object(o.bindActionCreators)({setSnackbar:function(a){return e(Object(v.M)(a))},setUserState:function(a){return e(Object(v.O)(a))},fetchCreateUser:E.c,resetCreateUserError:E.n,fetchUpdateUserData:E.h,resetUpdateUserDataError:E.q},e)}))(V)}}]);
//# sourceMappingURL=18.index-bundle.js.map