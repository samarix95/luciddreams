(this["webpackJsonpmobile-web-frontend-luciddreams"]=this["webpackJsonpmobile-web-frontend-luciddreams"]||[]).push([[16],{183:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(1),r=n(0),a=n(85);function c(e,t){var n=r.memo(r.forwardRef((function(t,n){return r.createElement(a.a,Object(o.a)({},t,{ref:n}),e)})));return n.muiName=a.a.muiName,n}},184:function(e,t,n){"use strict";n.d(t,"n",(function(){return u})),n.d(t,"o",(function(){return l})),n.d(t,"i",(function(){return f})),n.d(t,"h",(function(){return g})),n.d(t,"l",(function(){return p})),n.d(t,"m",(function(){return d})),n.d(t,"b",(function(){return m})),n.d(t,"j",(function(){return j})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return b})),n.d(t,"c",(function(){return O})),n.d(t,"k",(function(){return v})),n.d(t,"g",(function(){return x})),n.d(t,"a",(function(){return y})),n.d(t,"f",(function(){return k}));var o=n(27),r=n(66),a=n(55),c=n(14),i=n(46),s="https://ldserver.herokuapp.com",u=function(e){return function(t){return t(Object(o.S)()),fetch(s+"/api/auth/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(n){var s=Object(r.c)(n.token);t(Object(o.R)(s)),t(Object(o.u)({variant:"success",message:i.a[e.language].texts.Wellcome})),a.a.push(c.a.MainPage)})).catch((function(n){t(Object(o.b)()),n.json().then((function(n){t(Object(o.u)({variant:"error",message:i.a[e.language].errors[n.error]}))}))}))}},l=function(e){return function(t){return t(Object(o.S)()),fetch(s+"/api/auth/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(n){var s=Object(r.c)(n.token);t(Object(o.R)(s)),t(Object(o.u)({variant:"success",message:i.a[e.language].texts.Wellcome})),a.a.push(c.a.MainPage)})).catch((function(n){t(Object(o.b)()),n.json().then((function(n){t(Object(o.u)({variant:"error",message:i.a[e.language].errors[n.error]}))}))}))}},f=function(){return function(e){return e(Object(o.K)()),fetch(s+"/api/technic/published",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",token:localStorage.token},body:JSON.stringify()}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(t){e(Object(o.I)(t))})).catch((function(t){e(Object(o.J)()),t.json().then((function(t){e(Object(o.u)({variant:"error",message:t.error}))}))}))}},g=function(){return function(e){return e(Object(o.H)()),fetch(s+"/api/tag",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",token:localStorage.token},body:JSON.stringify()}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(t){e(Object(o.F)(t))})).catch((function(t){e(Object(o.G)()),t.json().then((function(t){e(Object(o.u)({variant:"error",message:t.error}))}))}))}},p=function(e){return function(t){return t(Object(o.K)()),fetch("".concat(s,"/api/technic/").concat(e.id),{method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/json",token:localStorage.token},body:JSON.stringify(e.data)}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(n){t(Object(o.u)({variant:"success",message:n.result})),t(f()),a.a.push({pathname:c.a.ReadTechnic,defaultData:{id:e.id}})})).catch((function(n){t(Object(o.J)()),n.json().then((function(n){t(Object(o.u)({variant:"error",message:i.a[e.language].errors[n.error]}))}))}))}},d=function(e){return function(t){return t(Object(o.V)()),fetch("".concat(s,"/api/post/user/").concat(e.create_user),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",token:localStorage.token},body:JSON.stringify()}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(e){t(Object(o.T)(e))})).catch((function(n){t(Object(o.U)()),n.json().then((function(n){t(Object(o.u)({variant:"error",message:i.a[e.language].errors[n.error]}))}))}))}},m=function(e){return function(t){return t(Object(o.l)()),fetch("".concat(s,"/api/post"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",token:localStorage.token},body:JSON.stringify(e)}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(e){t(Object(o.j)(e)),a.a.push(c.a.Dreams)})).catch((function(n){t(Object(o.k)()),n.json().then((function(n){t(Object(o.u)({variant:"error",message:i.a[e.language].errors[n.error]}))}))}))}},j=function(e){return function(t){return t(Object(o.Q)()),fetch("".concat(s,"/api/post/").concat(e.id),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",token:localStorage.token},body:JSON.stringify(e)}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(n){t(Object(o.O)(n)),t(d({language:e.language,create_user:e.create_user})),!1!==e.redirect&&a.a.push({pathname:c.a.ReadDream,defaultData:{id:e.id}})})).catch((function(n){t(Object(o.P)()),n.json().then((function(n){t(Object(o.u)({variant:"error",message:i.a[e.language].errors[n.error]}))}))}))}},h=function(e){return function(t){return t(Object(o.r)()),fetch("".concat(s,"/api/post/").concat(e.id),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",token:localStorage.token},body:JSON.stringify()}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(n){t(Object(o.p)(n)),t(d({language:e.language,create_user:e.create_user})),a.a.push(c.a.Dreams)})).catch((function(n){t(Object(o.q)()),n.json().then((function(n){t(Object(o.u)({variant:"error",message:i.a[e.language].errors[n.error]}))}))}))}},b=function(e){return function(t){return t(Object(o.x)()),fetch("".concat(s,"/api/comment/").concat(e.post_id),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",token:localStorage.token},body:JSON.stringify()}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(e){t(Object(o.v)(e))})).catch((function(n){t(Object(o.w)()),n.json().then((function(n){t(Object(o.u)({variant:"error",message:i.a[e.language].errors[n.error]}))}))}))}},O=function(e){return function(t){return t(Object(o.i)()),fetch("".concat(s,"/api/comment"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",token:localStorage.token},body:JSON.stringify(e)}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(n){t(Object(o.g)(n)),t(b({language:e.language,post_id:e.post_id}))})).catch((function(n){t(Object(o.h)()),n.json().then((function(n){t(Object(o.u)({variant:"error",message:i.a[e.language].errors[n.error]}))}))}))}},v=function(e){return function(t){return t(Object(o.N)()),fetch("".concat(s,"/api/comment/").concat(e.id),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",token:localStorage.token},body:JSON.stringify(e)}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(n){t(Object(o.L)(n)),t(b({language:e.language,post_id:e.post_id}))})).catch((function(n){t(Object(o.M)()),n.json().then((function(n){t(Object(o.u)({variant:"error",message:i.a[e.language].errors[n.error]}))}))}))}},x=function e(t){return function(n){return n(Object(o.E)()),fetch("".concat(s,"/geticons"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",token:localStorage.token},body:JSON.stringify(t)}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(r){r.length>0?n(Object(o.C)(r)):(n(Object(o.u)({variant:"info",message:i.a[t.language].texts["FindIcon".concat(Math.floor(5*Math.random()))]})),n(e(t)))})).catch((function(e){n(Object(o.D)()),e.json().then((function(e){n(Object(o.u)({variant:"error",message:i.a[t.language].errors[e.error]}))}))}))}},y=function(e){return function(t){return t(Object(o.f)()),fetch("".concat(s,"/api/tag"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",token:localStorage.token},body:JSON.stringify(e)}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(n){t(Object(o.d)(n)),a.a.push(e.backPath)})).catch((function(n){t(Object(o.e)()),n.json().then((function(n){t(Object(o.u)({variant:"error",message:i.a[e.language].errors[n.error]}))}))}))}},k=function(e){return function(t){return t(Object(o.B)()),fetch("".concat(s,"/speech-to-text"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(e){return t(Object(o.z)(e)),e})).catch((function(n){t(Object(o.A)()),n.json().then((function(n){t(Object(o.u)({variant:"error",message:i.a[e.language].errors[n.error]}))}))}))}}},196:function(e,t,n){"use strict";var o=n(4),r=n(1),a=n(0),c=(n(6),n(5)),i=n(7),s=[0,1,2,3,4,5,6,7,8,9,10],u=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var f=a.forwardRef((function(e,t){var n=e.alignContent,i=void 0===n?"stretch":n,s=e.alignItems,u=void 0===s?"stretch":s,l=e.classes,f=e.className,g=e.component,p=void 0===g?"div":g,d=e.container,m=void 0!==d&&d,j=e.direction,h=void 0===j?"row":j,b=e.item,O=void 0!==b&&b,v=e.justify,x=void 0===v?"flex-start":v,y=e.lg,k=void 0!==y&&y,S=e.md,P=void 0!==S&&S,w=e.sm,C=void 0!==w&&w,T=e.spacing,N=void 0===T?0:T,E=e.wrap,J=void 0===E?"wrap":E,W=e.xl,A=void 0!==W&&W,D=e.xs,I=void 0!==D&&D,B=e.zeroMinWidth,M=void 0!==B&&B,_=Object(o.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),z=Object(c.a)(l.root,f,m&&[l.container,0!==N&&l["spacing-xs-".concat(String(N))]],O&&l.item,M&&l.zeroMinWidth,"row"!==h&&l["direction-xs-".concat(String(h))],"wrap"!==J&&l["wrap-xs-".concat(String(J))],"stretch"!==u&&l["align-items-xs-".concat(String(u))],"stretch"!==i&&l["align-content-xs-".concat(String(i))],"flex-start"!==x&&l["justify-xs-".concat(String(x))],!1!==I&&l["grid-xs-".concat(String(I))],!1!==C&&l["grid-sm-".concat(String(C))],!1!==P&&l["grid-md-".concat(String(P))],!1!==k&&l["grid-lg-".concat(String(k))],!1!==A&&l["grid-xl-".concat(String(A))]);return a.createElement(p,Object(r.a)({className:z,ref:t},_))})),g=Object(i.a)((function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return s.forEach((function(o){var r=e.spacing(o);0!==r&&(n["spacing-".concat(t,"-").concat(o)]={margin:"-".concat(l(r,2)),width:"calc(100% + ".concat(l(r),")"),"& > $item":{padding:l(r,2)}})})),n}(e,"xs"),{},e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var o={};u.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");o[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else o[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else o[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(r.a)(e,o):e[t.breakpoints.up(n)]=o}(t,e,n),t}),{}))}),{name:"MuiGrid"})(f);t.a=g},510:function(e,t,n){"use strict";n.r(t);var o=n(65),r=n(0),a=n.n(r),c=n(26),i=n(21),s=n(5),u=n(306),l=n(219),f=n(133),g=n(131),p=n(196),d=n(55),m=n(14),j=n(62),h=n(46),b=n(184),O=n(49),v=n(36),x=n(47);t.default=Object(c.b)((function(e){return{appTheme:Object(v.b)(e),language:Object(x.a)(e),authPending:Object(O.d)(e)}}),(function(e){return Object(i.bindActionCreators)({signIn:b.n},e)}))((function(e){var t=e.appTheme,n=e.language,r=e.authPending,c=e.signIn,i=Object(j.a)(),b=a.a.useState(""),O=Object(o.a)(b,2),v=O[0],x=O[1],y=a.a.useState(""),k=Object(o.a)(y,2),S=k[0],P=k[1];return a.a.createElement("div",{className:i.root},a.a.createElement(g.a,{className:"".concat(i.paper)},a.a.createElement(p.a,{spacing:1,container:!0,direction:"column",justify:"center",alignItems:"stretch"},a.a.createElement(p.a,{item:!0,className:"".concat(i.margin1)},a.a.createElement(l.a,{className:i.input,onBlur:function(e){x(e.target.value)},type:"email",id:"input-login",label:h.a[n].texts.Email,variant:"outlined"})),a.a.createElement(p.a,{item:!0,className:"".concat(i.margin1)},a.a.createElement(l.a,{className:i.input,onBlur:function(e){P(e.target.value)},type:"password",id:"input-password",label:h.a[n].texts.Password,variant:"outlined"})),r?a.a.createElement(p.a,{item:!0,className:"".concat(i.margin1)},a.a.createElement(u.a,null)):a.a.createElement(a.a.Fragment,null,a.a.createElement(p.a,{item:!0,className:"".concat(i.margin1)},a.a.createElement(f.a,{className:Object(s.a)("dark"===t.palette.type?i.DarkBackgroundColor:i.LightBackgroundColor),fullWidth:!0,size:"small",onClick:function(){c({login:v,password:S,language:n})},variant:"outlined",color:"primary"},h.a[n].buttons.SignIn)),a.a.createElement(p.a,{item:!0,className:"".concat(i.margin1)},a.a.createElement(f.a,{className:Object(s.a)("dark"===t.palette.type?i.DarkBackgroundColor:i.LightBackgroundColor),fullWidth:!0,size:"small",onClick:function(){d.a.push(m.a.Sign)},variant:"outlined",color:"primary"},h.a[n].buttons.Back))))))}))}}]);
//# sourceMappingURL=16.37c143ae.chunk.js.map