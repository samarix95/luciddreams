(this["webpackJsonpmobile-web-frontend-luciddreams"]=this["webpackJsonpmobile-web-frontend-luciddreams"]||[]).push([[12],{184:function(e,t,n){"use strict";n.d(t,"n",(function(){return u})),n.d(t,"o",(function(){return l})),n.d(t,"i",(function(){return f})),n.d(t,"h",(function(){return m})),n.d(t,"l",(function(){return h})),n.d(t,"m",(function(){return d})),n.d(t,"b",(function(){return p})),n.d(t,"j",(function(){return j})),n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return g})),n.d(t,"c",(function(){return O})),n.d(t,"k",(function(){return v})),n.d(t,"g",(function(){return y})),n.d(t,"a",(function(){return k})),n.d(t,"f",(function(){return P}));var a=n(27),r=n(66),o=n(55),c=n(14),i=n(46),s="https://192.168.1.32:443",u=function(e){return function(t){return t(Object(a.S)()),fetch(s+"/api/auth/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(n){var s=Object(r.c)(n.token);t(Object(a.R)(s)),t(Object(a.u)({variant:"success",message:i.a[e.language].texts.Wellcome})),o.a.push(c.a.MainPage)})).catch((function(n){t(Object(a.b)()),n.json().then((function(n){t(Object(a.u)({variant:"error",message:i.a[e.language].errors[n.error]}))}))}))}},l=function(e){return function(t){return t(Object(a.S)()),fetch(s+"/api/auth/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(n){var s=Object(r.c)(n.token);t(Object(a.R)(s)),t(Object(a.u)({variant:"success",message:i.a[e.language].texts.Wellcome})),o.a.push(c.a.MainPage)})).catch((function(n){t(Object(a.b)()),n.json().then((function(n){t(Object(a.u)({variant:"error",message:i.a[e.language].errors[n.error]}))}))}))}},f=function(){return function(e){return e(Object(a.K)()),fetch(s+"/api/technic/published",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",token:localStorage.token},body:JSON.stringify()}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(t){e(Object(a.I)(t))})).catch((function(t){e(Object(a.J)()),t.json().then((function(t){e(Object(a.u)({variant:"error",message:t.error}))}))}))}},m=function(){return function(e){return e(Object(a.H)()),fetch(s+"/api/tag",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",token:localStorage.token},body:JSON.stringify()}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(t){e(Object(a.F)(t))})).catch((function(t){e(Object(a.G)()),t.json().then((function(t){e(Object(a.u)({variant:"error",message:t.error}))}))}))}},h=function(e){return function(t){return t(Object(a.K)()),fetch("".concat(s,"/api/technic/").concat(e.id),{method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/json",token:localStorage.token},body:JSON.stringify(e.data)}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(n){t(Object(a.u)({variant:"success",message:n.result})),t(f()),o.a.push({pathname:c.a.ReadTechnic,defaultData:{id:e.id}})})).catch((function(n){t(Object(a.J)()),n.json().then((function(n){t(Object(a.u)({variant:"error",message:i.a[e.language].errors[n.error]}))}))}))}},d=function(e){return function(t){return t(Object(a.V)()),fetch("".concat(s,"/api/post/user/").concat(e.create_user),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",token:localStorage.token},body:JSON.stringify()}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(e){t(Object(a.T)(e))})).catch((function(n){t(Object(a.U)()),n.json().then((function(n){t(Object(a.u)({variant:"error",message:i.a[e.language].errors[n.error]}))}))}))}},p=function(e){return function(t){return t(Object(a.l)()),fetch("".concat(s,"/api/post"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",token:localStorage.token},body:JSON.stringify(e)}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(e){t(Object(a.j)(e)),o.a.push(c.a.Dreams)})).catch((function(n){t(Object(a.k)()),n.json().then((function(n){t(Object(a.u)({variant:"error",message:i.a[e.language].errors[n.error]}))}))}))}},j=function(e){return function(t){return t(Object(a.Q)()),fetch("".concat(s,"/api/post/").concat(e.id),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",token:localStorage.token},body:JSON.stringify(e)}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(n){t(Object(a.O)(n)),t(d({language:e.language,create_user:e.create_user})),!1!==e.redirect&&o.a.push({pathname:c.a.ReadDream,defaultData:{id:e.id}})})).catch((function(n){t(Object(a.P)()),n.json().then((function(n){t(Object(a.u)({variant:"error",message:i.a[e.language].errors[n.error]}))}))}))}},b=function(e){return function(t){return t(Object(a.r)()),fetch("".concat(s,"/api/post/").concat(e.id),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",token:localStorage.token},body:JSON.stringify()}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(n){t(Object(a.p)(n)),t(d({language:e.language,create_user:e.create_user})),o.a.push(c.a.Dreams)})).catch((function(n){t(Object(a.q)()),n.json().then((function(n){t(Object(a.u)({variant:"error",message:i.a[e.language].errors[n.error]}))}))}))}},g=function(e){return function(t){return t(Object(a.x)()),fetch("".concat(s,"/api/comment/").concat(e.post_id),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",token:localStorage.token},body:JSON.stringify()}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(e){t(Object(a.v)(e))})).catch((function(n){t(Object(a.w)()),n.json().then((function(n){t(Object(a.u)({variant:"error",message:i.a[e.language].errors[n.error]}))}))}))}},O=function(e){return function(t){return t(Object(a.i)()),fetch("".concat(s,"/api/comment"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",token:localStorage.token},body:JSON.stringify(e)}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(n){t(Object(a.g)(n)),t(g({language:e.language,post_id:e.post_id}))})).catch((function(n){t(Object(a.h)()),n.json().then((function(n){t(Object(a.u)({variant:"error",message:i.a[e.language].errors[n.error]}))}))}))}},v=function(e){return function(t){return t(Object(a.N)()),fetch("".concat(s,"/api/comment/").concat(e.id),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",token:localStorage.token},body:JSON.stringify(e)}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(n){t(Object(a.L)(n)),t(g({language:e.language,post_id:e.post_id}))})).catch((function(n){t(Object(a.M)()),n.json().then((function(n){t(Object(a.u)({variant:"error",message:i.a[e.language].errors[n.error]}))}))}))}},y=function e(t){return function(n){return n(Object(a.E)()),fetch("".concat(s,"/geticons"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",token:localStorage.token},body:JSON.stringify(t)}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(r){r.length>0?n(Object(a.C)(r)):(n(Object(a.u)({variant:"info",message:i.a[t.language].texts["FindIcon".concat(Math.floor(5*Math.random()))]})),n(e(t)))})).catch((function(e){n(Object(a.D)()),e.json().then((function(e){n(Object(a.u)({variant:"error",message:i.a[t.language].errors[e.error]}))}))}))}},k=function(e){return function(t){return t(Object(a.f)()),fetch("".concat(s,"/api/tag"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",token:localStorage.token},body:JSON.stringify(e)}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(n){t(Object(a.d)(n)),o.a.push(e.backPath)})).catch((function(n){t(Object(a.e)()),n.json().then((function(n){t(Object(a.u)({variant:"error",message:i.a[e.language].errors[n.error]}))}))}))}},P=function(e){return function(t){return t(Object(a.B)()),fetch("".concat(s,"/speech-to-text"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(e){return t(Object(a.z)(e)),e})).catch((function(n){t(Object(a.A)()),n.json().then((function(n){t(Object(a.u)({variant:"error",message:i.a[e.language].errors[n.error]}))}))}))}}},185:function(e,t,n){"use strict";var a=n(12),r=n(7),o=n(11),c=n(532);t.a=Object(r.a)((function(e){var t;return{root:(t={},Object(a.a)(t,e.breakpoints.up("xs"),{maxWidth:150}),Object(a.a)(t,e.breakpoints.up("sm"),{maxWidth:"100%"}),Object(a.a)(t,"userSelect","none"),Object(a.a)(t,"height",e.spacing(3)),Object(a.a)(t,"fontWeight",e.typography.fontWeightRegular),Object(a.a)(t,"&:hover, &:focus",{backgroundColor:e.palette.grey[500]}),Object(a.a)(t,"&:active",{boxShadow:e.shadows[1],backgroundColor:Object(o.c)(e.palette.grey[500],.12)}),t)}}))(c.a)},200:function(e,t,n){"use strict";var a=n(175);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=(0,a(n(176)).default)(r.default.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home");t.default=o},468:function(e,t,n){"use strict";var a=n(1),r=n(4),o=n(0),c=(n(6),n(5)),i=n(131),s=n(7),u=o.forwardRef((function(e,t){var n=e.classes,s=e.className,u=e.raised,l=void 0!==u&&u,f=Object(r.a)(e,["classes","className","raised"]);return o.createElement(i.a,Object(a.a)({className:Object(c.a)(n.root,s),elevation:l?8:1,ref:t},f))}));t.a=Object(s.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(u)},469:function(e,t,n){"use strict";var a=n(1),r=n(4),o=n(0),c=(n(6),n(5)),i=n(7),s=o.forwardRef((function(e,t){var n=e.classes,i=e.className,s=e.component,u=void 0===s?"div":s,l=Object(r.a)(e,["classes","className","component"]);return o.createElement(u,Object(a.a)({className:Object(c.a)(n.root,i),ref:t},l))}));t.a=Object(i.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(s)},470:function(e,t,n){"use strict";var a=n(1),r=n(4),o=n(0),c=(n(6),n(5)),i=n(7),s=o.forwardRef((function(e,t){var n=e.disableSpacing,i=void 0!==n&&n,s=e.classes,u=e.className,l=Object(r.a)(e,["disableSpacing","classes","className"]);return o.createElement("div",Object(a.a)({className:Object(c.a)(s.root,u,!i&&s.spacing),ref:t},l))}));t.a=Object(i.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(s)},476:function(e,t,n){"use strict";var a=n(1),r=n(4),o=n(0),c=n(5),i=(n(6),n(7)),s=o.forwardRef((function(e,t){var n=e.animation,i=void 0===n?"pulse":n,s=e.classes,u=e.className,l=e.component,f=void 0===l?"span":l,m=e.height,h=e.variant,d=void 0===h?"text":h,p=e.width,j=Object(r.a)(e,["animation","classes","className","component","height","variant","width"]);return o.createElement(f,Object(a.a)({ref:t,className:Object(c.a)(s.root,s[d],u,!1!==i&&s[i])},j,{style:Object(a.a)({width:p,height:m},j.style)}))}));t.a=Object(i.a)((function(e){return{root:{display:"block",backgroundColor:e.palette.action.hover,height:"1.2em"},text:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 60%",transform:"scale(1, 0.60)",borderRadius:e.shape.borderRadius,"&:empty:before":{content:'"\\00a0"'}},rect:{},circle:{borderRadius:"50%"},pulse:{animation:"$pulse 1.5s ease-in-out 0.5s infinite"},"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}},wave:{position:"relative",overflow:"hidden","&::after":{animation:"$wave 1.6s linear 0.5s infinite",background:"linear-gradient(90deg, transparent, ".concat(e.palette.action.hover,", transparent)"),content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0,zIndex:1}},"@keyframes wave":{"0%":{transform:"translateX(-100%)"},"60%":{transform:"translateX(100%)"},"100%":{transform:"translateX(100%)"}}}}),{name:"MuiSkeleton"})(s)},531:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(26),c=n(21),i=n(529),s=n(373),u=n(131),l=n(196),f=n(476),m=n(200),h=n.n(m),d=n(55),p=n(14),j=n(62),b=n(46),g=n(184),O=n(47),v=n(70),y=n(470),k=n(469),P=n(98),S=n(133),E=n(468),T=n(36);var N=Object(o.b)((function(e){return{appTheme:Object(T.b)(e),language:Object(O.a)(e),technicsData:Object(v.a)(e)}}),(function(e){return Object(c.bindActionCreators)({},e)}))((function(e){var t=e.language,n=e.technicsData,a=e.card_id,o=Object(j.a)();return r.a.createElement(l.a,{item:!0,xs:12,sm:4,md:3,style:{display:"flex"}},r.a.createElement(E.a,{className:"".concat(o.margin1," ").concat(o.flexSpaceBetween," ").concat(o.transprent03),style:{width:"100%"}},r.a.createElement(k.a,{className:"".concat(o.flexSpaceBetween),style:{height:"100%"}},r.a.createElement(P.a,{variant:"h6",paragraph:!0},n.find((function(e){return e.id===a}))["name_".concat(t)]),r.a.createElement(P.a,{variant:"subtitle1",noWrap:!0},n.find((function(e){return e.id===a}))["description_".concat(t)])),r.a.createElement(y.a,null,r.a.createElement(S.a,{size:"small",variant:"outlined",color:"primary",onClick:function(){d.a.push({pathname:p.a.ReadTechnic,defaultData:{id:a}})}},b.a[t].buttons.Read))))})),C=n(185);t.default=Object(o.b)((function(e){return{language:Object(O.a)(e),technicsPending:Object(v.b)(e),technicsData:Object(v.a)(e)}}),(function(e){return Object(c.bindActionCreators)({fetchTechnics:g.i},e)}))((function(e){var t=e.language,n=e.fetchTechnics,a=e.technicsPending,o=e.technicsData,c=Object(j.a)();return r.a.useEffect((function(){n()}),[n]),r.a.createElement("div",{className:c.root},r.a.createElement(u.a,{className:"".concat(c.padding1," ").concat(c.stickyTop," ").concat(c.transprent02)},r.a.createElement(i.a,{separator:"\u203a","aria-label":"breadcrumb"},r.a.createElement(C.a,{component:"a",color:"primary",label:b.a[t].buttons.Main,icon:r.a.createElement(h.a,null),onClick:function(){d.a.push(p.a.MainPage)}}),r.a.createElement(C.a,{component:"a",color:"primary",disabled:!0,label:b.a[t].buttons.Technics}))),r.a.createElement(s.a,{className:"".concat(c.margin2)},r.a.createElement(l.a,{container:!0,alignItems:"stretch",justify:"center",spacing:1},o.length?o.map((function(e,t){return r.a.createElement(N,{key:t,card_id:e.id})})):a?r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{item:!0,xs:12,sm:4,md:3},r.a.createElement(f.a,{animation:"wave",variant:"rect",className:"".concat(c.skeletonCard," ").concat(c.margin1)})),r.a.createElement(l.a,{item:!0,xs:12,sm:4,md:3},r.a.createElement(f.a,{animation:"wave",variant:"rect",className:"".concat(c.skeletonCard," ").concat(c.margin1)})),r.a.createElement(l.a,{item:!0,xs:12,sm:4,md:3},r.a.createElement(f.a,{animation:"wave",variant:"rect",className:"".concat(c.skeletonCard," ").concat(c.margin1)})),r.a.createElement(l.a,{item:!0,xs:12,sm:4,md:3},r.a.createElement(f.a,{animation:"wave",variant:"rect",className:"".concat(c.skeletonCard," ").concat(c.margin1)}))):r.a.createElement(r.a.Fragment,null))))}))}}]);
//# sourceMappingURL=12.015508a3.chunk.js.map