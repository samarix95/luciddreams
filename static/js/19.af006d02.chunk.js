(this["webpackJsonpmobile-web-frontend-luciddreams"]=this["webpackJsonpmobile-web-frontend-luciddreams"]||[]).push([[19],{186:function(e,t,n){"use strict";var a=n(62),o=n(258);t.a=Object(o.a)((function(e){var t;return{root:{position:"relative",flexGrow:1},stickyTop:{position:"sticky",top:0,zIndex:1e4},paper:(t={position:"relative"},Object(a.a)(t,e.breakpoints.up("xs"),{marginLeft:"15%",marginRight:"15%"}),Object(a.a)(t,e.breakpoints.up("sm"),{marginLeft:"25%",marginRight:"25%"}),Object(a.a)(t,e.breakpoints.up("md"),{marginLeft:"35%",marginRight:"35%"}),t),input:{width:"100%",flex:1},MuiRteRead:{backgroundColor:e.palette.text.main,padding:10},skeletonCard:{minHeight:150,borderRadius:8},smallAvatar:{width:e.spacing(1),height:e.spacing(1)},largeAvatar:{width:e.spacing(7),height:e.spacing(7)},filterFab:{position:"fixed",bottom:e.spacing(1),right:e.spacing(1)},addPostFab:{position:"fixed",bottom:e.spacing(10),right:e.spacing(1)},flexSpaceBetween:{display:"flex",flexDirection:"column",justifyContent:"space-between"},margin1:{margin:e.spacing(1)},margin2:{margin:e.spacing(2)},padding1:{padding:e.spacing(1)},padding2:{padding:e.spacing(2)},fullWidth:{width:"100%"}}}))},193:function(e,t,n){"use strict";n.d(t,"m",(function(){return u})),n.d(t,"n",(function(){return l})),n.d(t,"h",(function(){return p})),n.d(t,"g",(function(){return f})),n.d(t,"k",(function(){return g})),n.d(t,"l",(function(){return h})),n.d(t,"b",(function(){return j})),n.d(t,"i",(function(){return m})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return b})),n.d(t,"c",(function(){return O})),n.d(t,"j",(function(){return k})),n.d(t,"f",(function(){return v})),n.d(t,"a",(function(){return y}));var a=n(25),o=n(65),r=n(53),c=n(13),i=n(43),s="https://ldserver.herokuapp.com",u=function(e){return function(t){return t(Object(a.O)()),fetch(s+"/api/auth/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(n){var s=Object(o.c)(n.token);t(Object(a.N)(s)),t(Object(a.t)({variant:"success",message:i.a[e.language].texts.Wellcome})),r.a.push(c.a.MainPage)})).catch((function(n){t(Object(a.b)()),n.json().then((function(n){t(Object(a.t)({variant:"error",message:i.a[e.language].errors[n.error]}))}))}))}},l=function(e){return function(t){return t(Object(a.O)()),fetch(s+"/api/auth/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(n){var s=Object(o.c)(n.token);t(Object(a.N)(s)),t(Object(a.t)({variant:"success",message:i.a[e.language].texts.Wellcome})),r.a.push(c.a.MainPage)})).catch((function(n){t(Object(a.b)()),n.json().then((function(n){t(Object(a.t)({variant:"error",message:i.a[e.language].errors[n.error]}))}))}))}},p=function(){return function(e){return e(Object(a.G)()),fetch(s+"/api/technic/published",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",token:localStorage.token},body:JSON.stringify()}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(t){e(Object(a.E)(t))})).catch((function(t){e(Object(a.F)()),t.json().then((function(t){e(Object(a.t)({variant:"error",message:t.error}))}))}))}},f=function(){return function(e){return e(Object(a.D)()),fetch(s+"/api/tag",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",token:localStorage.token},body:JSON.stringify()}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(t){e(Object(a.B)(t))})).catch((function(t){e(Object(a.C)()),t.json().then((function(t){e(Object(a.t)({variant:"error",message:t.error}))}))}))}},g=function(e){return function(t){return t(Object(a.G)()),fetch("".concat(s,"/api/technic/").concat(e.id),{method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/json",token:localStorage.token},body:JSON.stringify(e.data)}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(n){t(Object(a.t)({variant:"success",message:n.result})),t(p()),r.a.push({pathname:c.a.ReadTechnic,defaultData:{id:e.id}})})).catch((function(n){t(Object(a.F)()),n.json().then((function(n){t(Object(a.t)({variant:"error",message:i.a[e.language].errors[n.error]}))}))}))}},h=function(e){return function(t){return t(Object(a.R)()),fetch("".concat(s,"/api/post/user/").concat(e.create_user),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",token:localStorage.token},body:JSON.stringify()}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(e){t(Object(a.P)(e))})).catch((function(n){t(Object(a.Q)()),n.json().then((function(n){t(Object(a.t)({variant:"error",message:i.a[e.language].errors[n.error]}))}))}))}},j=function(e){return function(t){return t(Object(a.l)()),fetch("".concat(s,"/api/post"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",token:localStorage.token},body:JSON.stringify(e)}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(e){t(Object(a.j)(e)),r.a.push(c.a.Dreams)})).catch((function(n){t(Object(a.k)()),n.json().then((function(n){t(Object(a.t)({variant:"error",message:i.a[e.language].errors[n.error]}))}))}))}},m=function(e){return function(t){return t(Object(a.M)()),fetch("".concat(s,"/api/post/").concat(e.id),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",token:localStorage.token},body:JSON.stringify(e)}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(n){t(Object(a.K)(n)),t(h({language:e.language,create_user:e.create_user})),r.a.push({pathname:c.a.ReadDream,defaultData:{id:e.id}})})).catch((function(n){t(Object(a.L)()),n.json().then((function(n){t(Object(a.t)({variant:"error",message:i.a[e.language].errors[n.error]}))}))}))}},d=function(e){return function(t){return t(Object(a.q)()),fetch("".concat(s,"/api/post/").concat(e.id),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",token:localStorage.token},body:JSON.stringify()}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(n){t(Object(a.o)(n)),t(h({language:e.language,create_user:e.create_user})),r.a.push(c.a.Dreams)})).catch((function(n){t(Object(a.p)()),n.json().then((function(n){t(Object(a.t)({variant:"error",message:i.a[e.language].errors[n.error]}))}))}))}},b=function(e){return function(t){return t(Object(a.w)()),fetch("".concat(s,"/api/comment/").concat(e.post_id),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",token:localStorage.token},body:JSON.stringify()}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(e){t(Object(a.u)(e))})).catch((function(n){t(Object(a.v)()),n.json().then((function(n){t(Object(a.t)({variant:"error",message:i.a[e.language].errors[n.error]}))}))}))}},O=function(e){return function(t){return t(Object(a.i)()),fetch("".concat(s,"/api/comment"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",token:localStorage.token},body:JSON.stringify(e)}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(n){t(Object(a.g)(n)),t(b({language:e.language,post_id:e.post_id}))})).catch((function(n){t(Object(a.h)()),n.json().then((function(n){t(Object(a.t)({variant:"error",message:i.a[e.language].errors[n.error]}))}))}))}},k=function(e){return function(t){return t(Object(a.J)()),fetch("".concat(s,"/api/comment/").concat(e.id),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",token:localStorage.token},body:JSON.stringify(e)}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(n){t(Object(a.H)(n)),t(b({language:e.language,post_id:e.post_id}))})).catch((function(n){t(Object(a.I)()),n.json().then((function(n){t(Object(a.t)({variant:"error",message:i.a[e.language].errors[n.error]}))}))}))}},v=function e(t){return function(n){return n(Object(a.A)()),fetch("".concat(s,"/geticons"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",token:localStorage.token},body:JSON.stringify(t)}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(o){o.length>0?n(Object(a.y)(o)):(n(Object(a.t)({variant:"info",message:i.a[t.language].texts["FindIcon".concat(Math.floor(5*Math.random()))]})),n(e(t)))})).catch((function(e){n(Object(a.z)()),e.json().then((function(e){n(Object(a.t)({variant:"error",message:i.a[t.language].errors[e.error]}))}))}))}},y=function(e){return function(t){return t(Object(a.f)()),fetch("".concat(s,"/api/tag"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",token:localStorage.token},body:JSON.stringify(e)}).then((function(e){return e.ok?Promise.resolve(e.json()):Promise.reject(e)})).then((function(n){t(Object(a.d)(n)),r.a.push(e.backPath)})).catch((function(n){t(Object(a.e)()),n.json().then((function(n){t(Object(a.t)({variant:"error",message:i.a[e.language].errors[n.error]}))}))}))}}},491:function(e,t,n){"use strict";n.r(t);var a=n(257),o=n(0),r=n.n(o),c=n(33),i=n(21),s=n(433),u=n(367),l=n(123),p=n(121),f=n(259),g=n(53),h=n(13),j=n(186),m=n(43),d=n(193),b=n(47),O=n(44);t.default=Object(c.b)((function(e){return{language:Object(O.a)(e),authPending:Object(b.d)(e)}}),(function(e){return Object(i.bindActionCreators)({signIn:d.m},e)}))((function(e){var t=e.language,n=e.authPending,o=e.signIn,c=Object(j.a)(),i=r.a.useState(""),d=Object(a.a)(i,2),b=d[0],O=d[1],k=r.a.useState(""),v=Object(a.a)(k,2),y=v[0],P=v[1];return r.a.createElement("div",{className:c.root},r.a.createElement(p.a,{className:"".concat(c.paper)},r.a.createElement(f.a,{spacing:1,container:!0,direction:"column",justify:"center",alignItems:"stretch"},r.a.createElement(f.a,{item:!0,className:"".concat(c.margin1)},r.a.createElement(u.a,{className:c.input,onBlur:function(e){O(e.target.value)},type:"email",id:"input-login",label:m.a[t].texts.Email,variant:"outlined"})),r.a.createElement(f.a,{item:!0,className:"".concat(c.margin1)},r.a.createElement(u.a,{className:c.input,onBlur:function(e){P(e.target.value)},type:"password",id:"input-password",label:m.a[t].texts.Password,variant:"outlined"})),n?r.a.createElement(f.a,{item:!0,className:"".concat(c.margin1)},r.a.createElement(s.a,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{item:!0,className:"".concat(c.margin1)},r.a.createElement(l.a,{fullWidth:!0,size:"small",onClick:function(){o({login:b,password:y,language:t})},variant:"outlined",color:"primary"},m.a[t].buttons.SignIn)),r.a.createElement(f.a,{item:!0,className:"".concat(c.margin1)},r.a.createElement(l.a,{fullWidth:!0,size:"small",onClick:function(){g.a.push(h.a.Sign)},variant:"outlined",color:"primary"},m.a[t].buttons.Back))))))}))}}]);
//# sourceMappingURL=19.af006d02.chunk.js.map