(this["webpackJsonpmobile-web-frontend-luciddreams"]=this["webpackJsonpmobile-web-frontend-luciddreams"]||[]).push([[4],{104:function(n,e,t){},109:function(n,e,t){},113:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(10),u=t.n(i),c=(t(104),t(164)),o=t(21),d=t(33),s=(t(109),t(157)),l=t(158),E=t(156),f=t(152),p=t(155),_=t(162),g=t(123),O=t(163),T=t(69),S=t(151),m=t(159),R=t(53),D=t(13),h=t(88),A=t(47),b=Object(d.b)((function(n){return{auth:Object(A.b)(n)}}),null)((function(n){var e=n.component,t=n.auth,r=Object(h.a)(n,["component","auth"]);return a.a.createElement(c.b,Object.assign({},r,{render:function(n){return t?a.a.createElement(e,n):a.a.createElement(c.a,{to:D.a.Sign})}}))})),I=t(43),C=t(65),P=t(25),N=t(39),v=t(37),y=t(48),L=t(44),M=t.e(17).then(t.bind(null,490)),j=a.a.lazy((function(){return M})),U=Promise.all([t.e(0),t.e(2),t.e(3),t.e(19)]).then(t.bind(null,491)),w=a.a.lazy((function(){return U})),k=Promise.all([t.e(0),t.e(2),t.e(3),t.e(20)]).then(t.bind(null,495)),G=a.a.lazy((function(){return k})),F=t.e(15).then(t.bind(null,496)),Y=a.a.lazy((function(){return F})),x=Promise.all([t.e(0),t.e(1),t.e(2),t.e(9),t.e(16)]).then(t.bind(null,508)),K=a.a.lazy((function(){return x})),B=Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(8)]).then(t.bind(null,506)),z=a.a.lazy((function(){return B})),V=Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(6)]).then(t.bind(null,509)),H=a.a.lazy((function(){return V})),W=Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(7)]).then(t.bind(null,501)),J=a.a.lazy((function(){return W})),q=Promise.all([t.e(0),t.e(1),t.e(2),t.e(11),t.e(18)]).then(t.bind(null,505)),Q=a.a.lazy((function(){return q})),$=Promise.all([t.e(1),t.e(12)]).then(t.bind(null,510)),X=a.a.lazy((function(){return $})),Z=Promise.all([t.e(1),t.e(13)]).then(t.bind(null,502)),nn=a.a.lazy((function(){return Z})),en=Promise.all([t.e(0),t.e(1),t.e(14)]).then(t.bind(null,503)),tn=a.a.lazy((function(){return en})),rn=(navigator.language||navigator.userLanguage).substr(0,2).toLowerCase();function an(n){return a.a.createElement(m.a,Object.assign({elevation:6,variant:"filled"},n))}R.a.push(Object(C.a)()?D.a.MainPage:D.a.Sign);var un=Object(d.b)((function(n){return{appTheme:Object(y.b)(n),language:Object(L.a)(n),snackbarOpen:Object(N.b)(n),snackbarData:Object(N.a)(n),dialogConfirmOpen:Object(v.d)(n),dialogConfirmData:Object(v.c)(n)}}),(function(n){return Object(o.bindActionCreators)({setLanguage:P.r,closeSnackbar:P.n,cancelDialogConfirm:P.m,acceptDialogConfirm:P.c},n)}))((function(n){var e=n.appTheme,t=n.language,r=n.snackbarOpen,i=n.snackbarData,u=n.setLanguage,o=n.closeSnackbar,d=n.dialogConfirmOpen,m=n.dialogConfirmData,h=n.cancelDialogConfirm,A=n.acceptDialogConfirm,C=Object(T.a)(e);Object.assign(C,{overrides:{MUIRichTextEditor:{toolbar:{display:"flex",alignItems:"center",justifyContent:"center"}}}});var P=function(n,e){"clickaway"!==e&&o()},N=function(){h()};return u(rn),a.a.createElement(c.c,{history:R.a},a.a.createElement(S.a,{theme:C},a.a.createElement(f.a,null),a.a.createElement(a.a.Suspense,{fallback:a.a.createElement("div",null,I.a[t].texts.Loading)},a.a.createElement(_.a,{open:r,autoHideDuration:3e3,onClose:P},a.a.createElement(an,{onClose:P,severity:i.variant},i.message)),a.a.createElement(O.a,{open:d,onClose:N,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},a.a.createElement(p.a,{id:"alert-dialog-title"},m.title),a.a.createElement(E.a,null,a.a.createElement(s.a,{id:"alert-dialog-description"},m.message)),a.a.createElement(l.a,null,a.a.createElement(g.a,{onClick:N,size:"small",color:"primary",variant:"outlined"},I.a[t].buttons.Cancel),a.a.createElement(g.a,{onClick:function(){A()},size:"small",color:"primary",variant:"outlined"},I.a[t].buttons.Accept))),a.a.createElement(c.b,{exact:!0,path:D.a.Sign,component:j}),a.a.createElement(c.b,{path:D.a.SignIn,component:w}),a.a.createElement(c.b,{path:D.a.SignUp,component:G}),a.a.createElement(c.d,null,a.a.createElement(b,{exact:!0,path:D.a.MainPage,component:Y}),a.a.createElement(b,{exact:!0,path:D.a.Dreams,component:K}),a.a.createElement(b,{path:D.a.ReadDream,component:z}),a.a.createElement(b,{path:D.a.AddDream,component:H}),a.a.createElement(b,{path:D.a.EditDream,component:J}),a.a.createElement(b,{path:D.a.AddLocation,component:Q}),a.a.createElement(b,{exact:!0,path:D.a.Technics,component:X}),a.a.createElement(b,{path:D.a.ReadTechnic,component:nn}),a.a.createElement(b,{path:D.a.EditTechnic,component:tn})))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var cn=t(41);u.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d.a,{store:cn.a},a.a.createElement(un,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},13:function(n,e,t){"use strict";e.a={Sign:"/sign",SignIn:"/signin",SignUp:"/signup",MainPage:"/",Dreams:"/dreams",ReadDream:"/dreams/read",EditDream:"/dreams/edit",AddDream:"/dreams/add",AddLocation:"/locations/add",Technics:"/technics",ReadTechnic:"/technics/read",EditTechnic:"/technics/edit"}},2:function(n,e,t){"use strict";t.d(e,"H",(function(){return r})),t.d(e,"t",(function(){return a})),t.d(e,"u",(function(){return i})),t.d(e,"l",(function(){return u})),t.d(e,"o",(function(){return c})),t.d(e,"n",(function(){return o})),t.d(e,"m",(function(){return d})),t.d(e,"p",(function(){return s})),t.d(e,"O",(function(){return l})),t.d(e,"P",(function(){return E})),t.d(e,"b",(function(){return f})),t.d(e,"G",(function(){return p})),t.d(e,"E",(function(){return _})),t.d(e,"F",(function(){return g})),t.d(e,"D",(function(){return O})),t.d(e,"B",(function(){return T})),t.d(e,"C",(function(){return S})),t.d(e,"S",(function(){return m})),t.d(e,"Q",(function(){return R})),t.d(e,"R",(function(){return D})),t.d(e,"k",(function(){return h})),t.d(e,"i",(function(){return A})),t.d(e,"j",(function(){return b})),t.d(e,"N",(function(){return I})),t.d(e,"L",(function(){return C})),t.d(e,"M",(function(){return P})),t.d(e,"s",(function(){return N})),t.d(e,"q",(function(){return v})),t.d(e,"r",(function(){return y})),t.d(e,"x",(function(){return L})),t.d(e,"v",(function(){return M})),t.d(e,"w",(function(){return j})),t.d(e,"a",(function(){return U})),t.d(e,"h",(function(){return w})),t.d(e,"f",(function(){return k})),t.d(e,"g",(function(){return G})),t.d(e,"K",(function(){return F})),t.d(e,"I",(function(){return Y})),t.d(e,"J",(function(){return x})),t.d(e,"A",(function(){return K})),t.d(e,"y",(function(){return B})),t.d(e,"z",(function(){return z})),t.d(e,"e",(function(){return V})),t.d(e,"c",(function(){return H})),t.d(e,"d",(function(){return W}));var r="SET_THEME",a="SET_LANGUAGE",i="SET_OPEN_SNACKBAR",u="SET_CLOSE_SNACKBAR",c="SET_CONFIRM_DIALOG_OPEN",o="SET_CONFIRM_DIALOG_CANCEL",d="SET_CONFIRM_DIALOG_ACCEPT",s="SET_CONFIRM_DIALOG_RESET_ACCEPT",l="SET_USER_DATA",E="SET_USER_LOADING",f="RESET_USER_DATA",p="SET_TECHNICS_PENDING",_="SET_TECHNICS_DATA",g="SET_TECHNICS_ERROR",O="SET_TAGS_PENDING",T="SET_TAGS_DATA",S="SET_TAGS_ERROR",m="SET_USER_POSTS_PENDING",R="SET_USER_POSTS_DATA",D="SET_USER_POSTS_ERROR",h="SET_ADD_POST_PENDING",A="SET_ADD_POST_DATA",b="SET_ADD_POST_ERROR",I="SET_UPDATE_POST_PENDING",C="SET_UPDATE_POST_DATA",P="SET_UPDATE_POST_ERROR",N="SET_DELETE_POST_PENDING",v="SET_DELETE_POST_DATA",y="SET_DELETE_POST_ERROR",L="SET_POST_COMMENTS_PENDING",M="SET_POST_COMMENTS_DATA",j="SET_POST_COMMENTS_ERROR",U="CLEAR_POST_COMMENTS",w="SET_ADD_POST_COMMENT_PENDING",k="SET_ADD_POST_COMMENT_DATA",G="SET_ADD_POST_COMMENT_ERROR",F="SET_UPDATE_POST_COMMENT_PENDING",Y="SET_UPDATE_POST_COMMENT_DATA",x="SET_UPDATE_POST_COMMENT_ERROR",K="SET_SEARCH_ICON_PENDING",B="SET_SEARCH_ICON_DATA",z="SET_SEARCH_ICON_ERROR",V="SET_ADD_LOCATION_PENDING",H="SET_ADD_LOCATION_DATA",W="SET_ADD_LOCATION_ERROR"},25:function(n,e,t){"use strict";t.d(e,"r",(function(){return a})),t.d(e,"t",(function(){return i})),t.d(e,"n",(function(){return u})),t.d(e,"s",(function(){return c})),t.d(e,"m",(function(){return o})),t.d(e,"c",(function(){return d})),t.d(e,"x",(function(){return s})),t.d(e,"O",(function(){return l})),t.d(e,"N",(function(){return E})),t.d(e,"b",(function(){return f})),t.d(e,"G",(function(){return p})),t.d(e,"E",(function(){return _})),t.d(e,"F",(function(){return g})),t.d(e,"D",(function(){return O})),t.d(e,"B",(function(){return T})),t.d(e,"C",(function(){return S})),t.d(e,"R",(function(){return m})),t.d(e,"P",(function(){return R})),t.d(e,"Q",(function(){return D})),t.d(e,"l",(function(){return h})),t.d(e,"j",(function(){return A})),t.d(e,"k",(function(){return b})),t.d(e,"M",(function(){return I})),t.d(e,"K",(function(){return C})),t.d(e,"L",(function(){return P})),t.d(e,"q",(function(){return N})),t.d(e,"o",(function(){return v})),t.d(e,"p",(function(){return y})),t.d(e,"w",(function(){return L})),t.d(e,"u",(function(){return M})),t.d(e,"v",(function(){return j})),t.d(e,"a",(function(){return U})),t.d(e,"i",(function(){return w})),t.d(e,"g",(function(){return k})),t.d(e,"h",(function(){return G})),t.d(e,"J",(function(){return F})),t.d(e,"H",(function(){return Y})),t.d(e,"I",(function(){return x})),t.d(e,"A",(function(){return K})),t.d(e,"y",(function(){return B})),t.d(e,"z",(function(){return z})),t.d(e,"f",(function(){return V})),t.d(e,"d",(function(){return H})),t.d(e,"e",(function(){return W}));var r=t(2);function a(n){return{type:r.t,lang:n}}function i(n){return{type:r.u,data:n}}function u(){return{type:r.l}}function c(n){return{type:r.o,data:n}}function o(){return{type:r.n}}function d(){return{type:r.m}}function s(){return{type:r.p}}function l(){return{type:r.P}}function E(n){return{type:r.O,data:n}}function f(){return{type:r.b}}function p(){return{type:r.G}}function _(n){return{type:r.E,data:n}}function g(){return{type:r.F}}function O(){return{type:r.D}}function T(n){return{type:r.B,data:n}}function S(){return{type:r.C}}function m(){return{type:r.S}}function R(n){return{type:r.Q,data:n}}function D(){return{type:r.R}}function h(){return{type:r.k}}function A(n){return{type:r.i,data:n}}function b(){return{type:r.j}}function I(){return{type:r.N}}function C(n){return{type:r.L,data:n}}function P(){return{type:r.M}}function N(){return{type:r.s}}function v(n){return{type:r.q,data:n}}function y(){return{type:r.r}}function L(){return{type:r.x}}function M(n){return{type:r.v,data:n}}function j(){return{type:r.w}}function U(){return{type:r.a}}function w(){return{type:r.h}}function k(n){return{type:r.f,data:n}}function G(){return{type:r.g}}function F(){return{type:r.K}}function Y(n){return{type:r.I,data:n}}function x(){return{type:r.J}}function K(){return{type:r.A}}function B(n){return{type:r.y,data:n}}function z(){return{type:r.z}}function V(){return{type:r.e}}function H(n){return{type:r.c,data:n}}function W(){return{type:r.d}}},37:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"d",(function(){return c})),t.d(e,"c",(function(){return o})),t.d(e,"b",(function(){return d}));var r=t(3),a=t(2),i={isOpen:!1,data:{title:"",message:""},action:null};function u(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case a.o:return Object(r.a)({},n,{isOpen:!0,data:e.data});case a.n:return Object(r.a)({},n,{isOpen:!1,action:!1});case a.m:return Object(r.a)({},n,{isOpen:!1,action:!0});case a.p:return Object(r.a)({},n,{action:null});default:return n}}var c=function(n){return n.dialogConfirm.isOpen},o=function(n){return n.dialogConfirm.data},d=function(n){return n.dialogConfirm.action}},39:function(n,e,t){"use strict";t.d(e,"c",(function(){return u})),t.d(e,"b",(function(){return c})),t.d(e,"a",(function(){return o}));var r=t(3),a=t(2),i={isOpen:!1,data:{variant:"",message:""}};function u(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case a.u:return Object(r.a)({},n,{isOpen:!0,data:e.data});case a.l:return Object(r.a)({},n,{isOpen:!1});default:return n}}var c=function(n){return n.snackbar.isOpen},o=function(n){return n.snackbar.data}},41:function(n,e,t){"use strict";var r=t(86),a=t(21),i=t(87),u=t(48),c=t(44),o=t(39),d=t(37),s=t(47),l=t(68),E=t(74),f=t(71),p=t(77),_=t(78),g=t(79),O=t(75),T=t(3),S=t(2),m={pending:!1,data:{}};var R={pending:!1,data:{}};var D=t(80),h=t(81),A=Object(a.combineReducers)({appTheme:u.a,language:c.b,snackbar:o.c,dialogConfirm:d.a,authData:s.a,technics:l.c,tags:E.c,userPosts:f.c,addPost:p.a,updatePost:_.b,deletePost:g.a,postComments:O.c,addPostComment:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case S.h:return Object(T.a)({},n,{pending:!0});case S.f:return Object(T.a)({},n,{pending:!1,data:e.data});case S.g:return Object(T.a)({},n,{pending:!1});default:return n}},updatePostComment:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case S.K:return Object(T.a)({},n,{pending:!0});case S.I:return Object(T.a)({},n,{pending:!1,data:e.data});case S.J:return Object(T.a)({},n,{pending:!1});default:return n}},searchIcon:D.c,addLocation:h.a}),b=[i.a];e.a=Object(a.createStore)(A,Object(r.composeWithDevTools)(a.applyMiddleware.apply(void 0,b)))},43:function(n,e,t){"use strict";e.a={ru:{texts:{SUCCESS:"\u0423\u0441\u043f\u0435\u0448\u043d\u043e",Wellcome:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c",SignPageText1:"\u041f\u0440\u0438\u0432\u0435\u0442\u0441\u0432\u0443\u044e, \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u0438\u043a!",SignPageText2:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u0441\u043e\u0437\u0434\u0430\u043d \u0434\u043b\u044f \u0442\u0435\u0445, \u043a\u0442\u043e \u0445\u043e\u0447\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u043e\u0442\u0440\u044f\u0441\u0430\u044e\u0449\u0438\u0439 \u043e\u043f\u044b\u0442 \u043e\u0441\u043e\u0437\u043d\u0430\u043d\u043d\u044b\u0445 \u0441\u043d\u043e\u0432\u0438\u0434\u0435\u043d\u0438\u0439! \u0418\u0441\u043f\u0442\u044b\u0442\u0430\u0442\u044c \u043d\u0435\u0432\u0435\u0440\u043e\u044f\u0442\u043d\u044b\u0435 \u044d\u043c\u043e\u0446\u0438\u0438 \u0438 \u0433\u043b\u0443\u0431\u0436\u0435 \u043f\u043e\u0437\u043d\u0430\u0442\u044c \u0441\u0435\u0431\u044f.",SignPageText3:"\u041c\u044b \u0440\u0430\u0434\u044b \u0432\u0438\u0434\u0435\u0442\u044c \u0442\u0435\u0431\u044f \u0437\u0434\u0435\u0441\u044c!",Loading:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430",Email:"\u042d\u043b. \u043f\u043e\u0447\u0442\u0430",Password:"\u041f\u0430\u0440\u043e\u043b\u044c",Nickname:"\u041d\u0438\u043a\u043d\u0435\u0439\u043c",Settings:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",Editing:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",Title:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",Date:"\u0414\u0430\u0442\u0430",Description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",Locations:"\u041b\u043e\u043a\u0430\u0446\u0438\u0438",Technics:"\u0422\u0435\u0445\u043d\u0438\u043a\u0438",Filter:"\u0424\u0438\u043b\u044c\u0442\u0440",Sort:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430",CancelEditing:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",CancelCreating:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435",DataWillLost:"\u0412\u0441\u0435 \u043d\u0435\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043b\u0435\u043d\u044b.",DeleteTitle:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",DeleteCommentMessage:"\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439?",DeletePostMessage:"\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u043e\u043d?",Dream:"\u0421\u043e\u043d",LucidDream:"\u041e\u0441\u043e\u0437\u043d\u0430\u043d\u043d\u044b\u0439 \u0441\u043e\u043d",RegularDream:"\u041f\u0440\u043e\u0441\u0442\u043e\u0439 \u0441\u043e\u043d",Realistic:"\u0420\u0435\u0430\u043b\u0438\u0441\u0442\u0438\u0447\u043d\u043e\u0441\u0442\u044c",UsersCanRead:"\u0414\u0440\u0443\u0433\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u043c\u043e\u0433\u0443\u0442 \u0447\u0438\u0442\u0430\u0442\u044c \u0432\u0430\u0448 \u0441\u043e\u043d",UsersCantRead:"\u0414\u0440\u0443\u0433\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u043d\u0435 \u043c\u043e\u0433\u0443\u0442 \u0447\u0438\u0442\u0430\u0442\u044c \u0432\u0430\u0448 \u0441\u043e\u043d",AddComment:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",DeletedComment:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u0443\u0434\u0430\u043b\u0435\u043d",NotHaveComments:"\u041d\u0435\u0442 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432",Ru:"\u0440\u0443\u0441",En:"\u0430\u043d\u0433",FindIcon:"\u041f\u043e\u0438\u0441\u043a \u0438\u043a\u043e\u043d\u043a\u0438",Icon:"\u0418\u043a\u043e\u043d\u043a\u0430",IconColor:"\u0426\u0432\u0435\u0442 \u0438\u043a\u043e\u043d\u043a\u0438",FindIcon0:"\u0418\u0449\u0435\u043c \u0438\u043a\u043e\u043d\u043a\u0443",FindIcon1:"\u0414\u043e \u0441\u0438\u0445 \u043f\u043e\u0440 \u0438\u0449\u0435\u043c \u0438\u043a\u043e\u043d\u043a\u0443",FindIcon2:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0435\u043c \u0438\u0441\u043a\u0430\u0442\u044c",FindIcon3:"\u0414\u0430 \u0433\u0434\u0435 \u0436\u0435 \u0442\u044b?",FindIcon4:"\u0412\u043e\u0442 \u043f\u043e\u0447\u0442\u0438 \u043f\u043e\u0447\u0442\u0438..."},buttons:{SignIn:"\u0412\u0445\u043e\u0434",SignUp:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",LogOut:"\u0412\u044b\u0445\u043e\u0434",Read:"\u0427\u0438\u0442\u0430\u0442\u044c",Back:"\u041d\u0430\u0437\u0430\u0434",Cancel:"\u041e\u0442\u043c\u0435\u043d\u0430",Close:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",Reset:"\u0421\u0431\u0440\u043e\u0441",Accept:"\u041f\u0440\u0438\u043d\u044f\u0442\u044c",Reply:"\u041e\u0442\u0432\u0435\u0442\u0438\u0442\u044c",Edit:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",Save:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",Add:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",Delete:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",Main:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",MyDreams:"\u041c\u043e\u0438 \u0441\u043d\u044b",AddDream:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043d",AddLocation:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043b\u043e\u043a\u0430\u0446\u0438\u044e",Technics:"\u0422\u0435\u0445\u043d\u0438\u043a\u0438"},errors:{CREATE_ERROR:"CREATE_ERROR",RETRIEVE_ERROR:"RETRIEVE_ERROR",SIGN_UP_ERROR:"SIGN_UP_ERROR",UPDATE_ERROR:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f",DELETE_ERROR:"DELETE_ERROR",USER_NOT_FOUND:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c",EMAIL_IS_BUSY:"EMAIL_IS_BUSY",INVALID_EMAIL:"INVALID_EMAIL",INVALID_PASSWORD:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c",EMPTY_PASSWORD:"\u041f\u0443\u0441\u0442\u043e\u0435 \u043f\u043e\u043b\u0435 \u043f\u0430\u0440\u043e\u043b\u044f",EMPTY_LOGIN:"\u041f\u0443\u0441\u0442\u043e\u0435 \u043f\u043e\u043b\u0435 \u044d\u043b. \u043f\u043e\u0447\u0442\u044b",EMPTY_NICKNAME:"EMPTY_NICKNAME",NICKNAME_IS_BUSY:"NICKNAME_IS_BUSY",UPDATE_USER_ERROR:"UPDATE_USER_ERROR",UPDATE_USER_SUCCESS:"UPDATE_USER_SUCCESS",NO_TOKEN_PROVIDED:"NO_TOKEN_PROVIDED",INVALID_TOKEN:"INVALID_TOKEN",EMPTY_TITLE:"\u041f\u0443\u0441\u0442\u043e\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",EMPTY_DESCRIPTION:"EMPTY_DESCRIPTION",NO_ICON:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u0430 \u0438\u043a\u043e\u043d\u043a\u0430",EMPTY_DREAM:"\u041f\u0443\u0441\u0442\u043e\u0435 \u043f\u043e\u043b\u0435 \u0441\u043d\u0430",DELETED:"DELETED",ENGLISH_WORDS_ONLY:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0435 \u0441\u043b\u043e\u0432\u0430"}},en:{texts:{SUCCESS:"Success",Wellcome:"Wellcome",SignPageText1:"Hello, traveler!",SignPageText2:"This resource is made for ppl who want to experience the joy as lucid dreaming, feel indescribable emotions again new exp-ce.",SignPageText3:"We warning welcome you here!",Loading:"Loading",Email:"Email",Password:"Password",Nickname:"Nickname",Settings:"Settings",Editing:"Editing",Title:"Title",Date:"Date",Description:"Description",Locations:"Locations",Technics:"Technics",Filter:"Filter",Sort:"Sort",CancelEditing:"Cancel editing",CancelCreating:"Cancel creating",DataWillLost:"All unsaved data will be deleted.",DeleteTitle:"Delete",DeleteCommentMessage:"Are you sure delete this comment?",DeletePostMessage:"Are you sure delete this dream?",Dream:"Dream",LucidDream:"Lucid dream",RegularDream:"Regular dream",Realistic:"Realistic",UsersCanRead:"Other users can read your dream",UsersCantRead:"Other users cant read your dream",AddComment:"Add comment",DeletedComment:"Comment deleted",NotHaveComments:"Not have comments",Ru:"rus",En:"eng",FindIcon:"Find icon",Icon:"Icon",IconColor:"Icon color",FindIcon0:"Looking for an icon",FindIcon1:"\u0414\u043e \u0441\u0438\u0445 \u043f\u043e\u0440 \u0438\u0449\u0435\u043c \u0438\u043a\u043e\u043d\u043a\u0443",FindIcon2:"Still looking for an icon",FindIcon3:"Where are you?",FindIcon4:"That's almost ..."},buttons:{SignIn:"Sign in",SignUp:"Sign up",LogOut:"Log out",Read:"Read",Back:"Back",Cancel:"Cancel",Close:"Close",Reset:"Reset",Accept:"Accept",Reply:"Reply",Edit:"Edit",Save:"Save",Add:"Add",Delete:"Delete",Main:"Main",MyDreams:"My dreams",AddDream:"Add dream",AddLocation:"Add location",Technics:"Technics"},errors:{CREATE_ERROR:"CREATE_ERROR",RETRIEVE_ERROR:"RETRIEVE_ERROR",SIGN_UP_ERROR:"SIGN_UP_ERROR",UPDATE_ERROR:"Update error",DELETE_ERROR:"DELETE_ERROR",USER_NOT_FOUND:"Invalid login or password",EMAIL_IS_BUSY:"EMAIL_IS_BUSY",INVALID_EMAIL:"INVALID_EMAIL",INVALID_PASSWORD:"Invalid login or password",EMPTY_PASSWORD:"Empty password",EMPTY_LOGIN:"Empty email",EMPTY_NICKNAME:"EMPTY_NICKNAME",NICKNAME_IS_BUSY:"NICKNAME_IS_BUSY",UPDATE_USER_ERROR:"UPDATE_USER_ERROR",UPDATE_USER_SUCCESS:"UPDATE_USER_SUCCESS",NO_TOKEN_PROVIDED:"NO_TOKEN_PROVIDED",INVALID_TOKEN:"INVALID_TOKEN",EMPTY_TITLE:"\u041f\u0443\u0441\u0442\u043e\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",EMPTY_DESCRIPTION:"EMPTY_DESCRIPTION",NO_ICON:"Icon not change",EMPTY_DREAM:"\u041f\u0443\u0441\u0442\u043e\u0435 \u043f\u043e\u043b\u0435 \u0441\u043d\u0430",DELETED:"DELETED",ENGLISH_WORDS_ONLY:"Use only english words"}}}},44:function(n,e,t){"use strict";t.d(e,"b",(function(){return u})),t.d(e,"a",(function(){return c}));var r=t(3),a=t(2),i={lang:"en"};function u(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case a.t:return Object(r.a)({},n,{lang:e.lang});default:return n}}var c=function(n){return n.language.lang}},47:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return c})),t.d(e,"d",(function(){return o})),t.d(e,"c",(function(){return d}));var r=t(3),a=t(2),i={isAuth:!1,pending:!1,data:{}};function u(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case a.O:return Object(r.a)({},n,{isAuth:!0,pending:!1,data:e.data});case a.P:return Object(r.a)({},n,{isAuth:!1,pending:!0});case a.b:return Object(r.a)({},n,{isAuth:!1,pending:!1,data:{}});default:return n}}var c=function(n){return n.authData.isAuth},o=function(n){return n.authData.pending},d=function(n){return n.authData.data}},48:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return c}));var r=t(3),a=t(2),i={theme:{palette:{type:"dark",primary:{main:"#ffffff"},secondary:{main:"#f50057"},error:{main:"#cc0000"}}}};function u(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case a.H:return Object(r.a)({},n,{palette:e.palette});default:return n}}var c=function(n){return n.appTheme.theme}},53:function(n,e,t){"use strict";var r=t(24);e.a=Object(r.a)()},65:function(n,e,t){"use strict";t.d(e,"a",(function(){return c})),t.d(e,"c",(function(){return o})),t.d(e,"b",(function(){return d}));var r=t(57),a=t.n(r),i=t(41),u=t(25);function c(){if(localStorage.token){var n=a()(localStorage.token);return i.a.dispatch(Object(u.N)(n)),!(n.exp<Date.now()/1e3)||(alert("\u0422\u043e\u043a\u0435\u043d \u043f\u0440\u043e\u0441\u0440\u043e\u0447\u0435\u043d. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u0435\u0440\u0435\u0437\u0430\u0439\u0434\u0438\u0442\u0435 \u043d\u0430 \u0441\u0430\u0439\u0442."),!1)}return!1}function o(n){return localStorage.setItem("token",n),a()(n)}function d(){localStorage.removeItem("token"),i.a.dispatch(Object(u.b)())}},68:function(n,e,t){"use strict";t.d(e,"c",(function(){return u})),t.d(e,"b",(function(){return c})),t.d(e,"a",(function(){return o}));var r=t(3),a=t(2),i={pending:!1,data:{}};function u(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case a.G:return Object(r.a)({},n,{pending:!0});case a.E:return Object(r.a)({},n,{pending:!1,data:e.data});case a.F:return Object(r.a)({},n,{pending:!1});default:return n}}var c=function(n){return n.technics.pending},o=function(n){return n.technics.data}},71:function(n,e,t){"use strict";t.d(e,"c",(function(){return u})),t.d(e,"b",(function(){return c})),t.d(e,"a",(function(){return o}));var r=t(3),a=t(2),i={pending:!1,data:{}};function u(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case a.S:return Object(r.a)({},n,{pending:!0});case a.Q:return Object(r.a)({},n,{pending:!1,data:e.data});case a.R:return Object(r.a)({},n,{pending:!1});default:return n}}var c=function(n){return n.userPosts.pending},o=function(n){return n.userPosts.data}},74:function(n,e,t){"use strict";t.d(e,"c",(function(){return u})),t.d(e,"b",(function(){return c})),t.d(e,"a",(function(){return o}));var r=t(3),a=t(2),i={pending:!1,data:{}};function u(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case a.D:return Object(r.a)({},n,{pending:!0});case a.B:return Object(r.a)({},n,{pending:!1,data:e.data});case a.C:return Object(r.a)({},n,{pending:!1});default:return n}}var c=function(n){return n.tags.pending},o=function(n){return n.tags.data}},75:function(n,e,t){"use strict";t.d(e,"c",(function(){return u})),t.d(e,"b",(function(){return c})),t.d(e,"a",(function(){return o}));var r=t(3),a=t(2),i={pending:!1,data:{}};function u(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case a.x:return Object(r.a)({},n,{pending:!0});case a.v:return Object(r.a)({},n,{pending:!1,data:e.data});case a.w:return Object(r.a)({},n,{pending:!1});case a.a:return Object(r.a)({},n,{pending:!1,data:{}});default:return n}}var c=function(n){return n.postComments.pending},o=function(n){return n.postComments.data}},77:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return c}));var r=t(3),a=t(2),i={pending:!1,data:{}};function u(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case a.k:return Object(r.a)({},n,{pending:!0});case a.i:return Object(r.a)({},n,{pending:!1,data:e.data});case a.j:return Object(r.a)({},n,{pending:!1});default:return n}}var c=function(n){return n.addPost.pending}},78:function(n,e,t){"use strict";t.d(e,"b",(function(){return u})),t.d(e,"a",(function(){return c}));var r=t(3),a=t(2),i={pending:!1,data:{}};function u(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case a.N:return Object(r.a)({},n,{pending:!0});case a.L:return Object(r.a)({},n,{pending:!1,data:e.data});case a.M:return Object(r.a)({},n,{pending:!1});default:return n}}var c=function(n){return n.updatePost.pending}},79:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return c}));var r=t(3),a=t(2),i={pending:!1,data:{}};function u(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case a.s:return Object(r.a)({},n,{pending:!0});case a.q:return Object(r.a)({},n,{pending:!1,data:e.data});case a.r:return Object(r.a)({},n,{pending:!1});default:return n}}var c=function(n){return n.deletePost.pending}},80:function(n,e,t){"use strict";t.d(e,"c",(function(){return u})),t.d(e,"b",(function(){return c})),t.d(e,"a",(function(){return o}));var r=t(3),a=t(2),i={pending:!1,data:{}};function u(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case a.A:return Object(r.a)({},n,{pending:!0});case a.y:return Object(r.a)({},n,{pending:!1,data:e.data});case a.z:return Object(r.a)({},n,{pending:!1});default:return n}}var c=function(n){return n.searchIcon.pending},o=function(n){return n.searchIcon.data}},81:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return c}));var r=t(3),a=t(2),i={pending:!1,data:{}};function u(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case a.e:return Object(r.a)({},n,{pending:!0});case a.c:return Object(r.a)({},n,{pending:!1,data:e.data});case a.d:return Object(r.a)({},n,{pending:!1});default:return n}}var c=function(n){return n.addLocation.pending}},99:function(n,e,t){n.exports=t(113)}},[[99,5,10]]]);
//# sourceMappingURL=main.e4ebf8eb.chunk.js.map