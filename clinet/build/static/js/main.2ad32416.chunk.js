(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{44:function(e,t,c){},45:function(e,t,c){},77:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),j=c(14),a=c.n(j),r=(c(44),c(45),c(5)),i=c(13),l=c.n(i),b=c(7),o=c(92),u=c(93),O=c(1),d=function(e){var t=e.pets;e.setPing;return Object(O.jsxs)("div",{children:[Object(O.jsx)(b.a,{to:"/new",children:"add a pet to the ahelter "}),Object(O.jsx)("p",{children:"These pets are looking for a good home :"}),Object(O.jsx)(u.a,{children:Object(O.jsxs)("table",{className:"table",children:[Object(O.jsx)("thead",{className:"head",children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Name"}),Object(O.jsx)("th",{children:" Type"}),Object(O.jsx)("th",{children:" Actions"})]})}),Object(O.jsx)("tbody",{className:"tbody",children:t.map((function(e,t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"td1",children:e.name}),Object(O.jsx)("td",{className:"td1",children:e.type}),Object(O.jsxs)("td",{children:[Object(O.jsx)(o.a,{onClick:function(){Object(b.c)("/edit/".concat(e._id))},children:"Edit"})," |",Object(O.jsx)(o.a,{onClick:function(){Object(b.c)("/details/".concat(e._id))},children:"Details"})]})]},t)}))})]})})]})},h=function(e){var t=e.setPing,c=Object(n.useState)(""),s=Object(r.a)(c,2),j=s[0],a=s[1],i=Object(n.useState)(""),u=Object(r.a)(i,2),d=u[0],h=u[1],x=Object(n.useState)(""),p=Object(r.a)(x,2),f=p[0],g=p[1],m=Object(n.useState)(""),v=Object(r.a)(m,2),y=v[0],k=v[1],C=Object(n.useState)([]),S=Object(r.a)(C,2),N=S[0],P=S[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)(b.a,{to:"/",children:"back to home"}),Object(O.jsx)("h3",{children:"Pet Shelter"}),Object(O.jsx)("p",{children:"Know a pet needing a home?"}),Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l.a.post("http://localhost:8000/api/pets",{name:j,type:d,desc:f,skill:y}).then((function(e){Object(b.c)("/"),t(!0)})).catch((function(e){for(var t=e.response.data.errors,c=[],n=0,s=Object.keys(t);n<s.length;n++){var j=s[n];c.push(t[j].message)}P(c)}))},children:[N.map((function(e,t){return Object(O.jsx)("p",{style:{color:"red"},children:e},t)})),Object(O.jsxs)("div",{className:"divForm",children:[Object(O.jsx)("label",{children:" pet Name:"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",onChange:function(e){return a(e.target.value)}}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{children:" pet Type:"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",onChange:function(e){return h(e.target.value)}}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{children:" pet Description:"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",onChange:function(e){return g(e.target.value)}})]}),Object(O.jsxs)("div",{className:"divForm",children:[Object(O.jsx)("p",{children:"pet skills (optional):"}),Object(O.jsx)("label",{children:"skill 1 "}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",onChange:function(e){return k(e.target.value)}}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{children:"skill 2 "}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",onChange:function(e){return k(e.target.value)}}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{children:"skill 3 "}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",onChange:function(e){return k(e.target.value)}})]}),Object(O.jsx)(o.a,{color:"blue",type:"submit",children:"Add Pet"})]})]})},x=function(e){var t=e.id,c=e.setPing,s=Object(n.useState)(" "),j=Object(r.a)(s,2),a=j[0],i=j[1],u=Object(n.useState)(""),d=Object(r.a)(u,2),h=d[0],x=d[1],p=Object(n.useState)(""),f=Object(r.a)(p,2),g=f[0],m=f[1],v=Object(n.useState)(""),y=Object(r.a)(v,2),k=y[0],C=y[1],S=Object(n.useState)([]),N=Object(r.a)(S,2),P=N[0],D=N[1];Object(n.useEffect)((function(){l.a.get("http://localhost:8000/api/pets/"+t).then((function(e){i(e.data.name),x(e.data.type),m(e.data.desc),C(e.data.skill)})).catch((function(e){return console.log(e)}))}),[t]);return""!==a?Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:"Edit Garfield"}),Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l.a.put("http://localhost:8000/api/pets/"+t,{name:a,type:h,desc:g,skill:k}).then((function(e){Object(b.c)("/"),c(!0)})).catch((function(e){console.log(e);for(var t=e.response.data.errors,c=[],n=0,s=Object.keys(t);n<s.length;n++){var j=s[n];c.push(t[j].message)}D(c)}))},children:[P.map((function(e,t){return Object(O.jsx)("p",{style:{color:"red"},children:e},t)})),Object(O.jsxs)("div",{className:"divForm",children:[Object(O.jsx)("label",{children:" pet Name:"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",onChange:function(e){return i(e.target.value)}}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{children:" pet Type:"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",onChange:function(e){return x(e.target.value)}}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{children:" pet Description:"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",onChange:function(e){return m(e.target.value)}})]}),Object(O.jsxs)("div",{className:"divForm",children:[Object(O.jsx)("p",{children:"pet skills (optional):"}),Object(O.jsx)("label",{children:"skill 1 "}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",onChange:function(e){return C(e.target.value)}}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{children:"skill 2 "}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",onChange:function(e){return C(e.target.value)}}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{children:"skill 3 "}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",onChange:function(e){return C(e.target.value)}})]}),Object(O.jsx)("br",{}),Object(O.jsx)(o.a,{color:"blue",type:"submit",children:"Edit Pet"})]})]}):Object(O.jsxs)("div",{children:[Object(O.jsxs)("h4",{children:["We're sorry, but we could not find the author you are looking for. ",Object(O.jsx)("br",{}),"Would you like to add this author to our database?"]}),Object(O.jsx)("button",{onClick:function(){return Object(b.c)("/new")},children:"Yes"})]})},p=function(e){var t=e.id,c=e.setPing,s=Object(n.useState)([]),j=Object(r.a)(s,2),a=j[0],i=j[1];Object(n.useEffect)((function(){l.a.get("http://localhost:8000/api/pets/"+t).then((function(e){return i(e.data)})).catch((function(e){return console.log(e)}))}),[t]);return Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{className:"button",onClick:function(){return function(e){l.a.delete("http://localhost:8000/api/pets/"+e).then((function(e){Object(b.c)("/"),c(!0)})).catch((function(e){return console.log(e)}))}(a._id)},children:"Adopt Grafield"}),Object(O.jsx)("div",{className:"card",children:Object(O.jsxs)(u.a,{children:[Object(O.jsxs)("h1",{children:["Details about : ",a.name]}),Object(O.jsxs)("div",{className:"info",children:[Object(O.jsxs)("p",{children:["pet type:",a.type]}),Object(O.jsxs)("p",{children:["Description :",a.desc]}),Object(O.jsxs)("p",{children:["skills:",a.skill]})]})]})})]})},f=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],j=Object(n.useState)(!1),a=Object(r.a)(j,2),i=a[0],o=a[1];return Object(n.useEffect)((function(){l.a.get("http://localhost:8000/api/pets").then((function(e){s(e.data.sort((function(e,t){return e.name.localeCompare(t.name)}))),o(!1)})).catch((function(e){return console.log(e)}))}),[i]),Object(O.jsxs)("div",{className:"main",children:[Object(O.jsxs)("nav",{className:"nav",children:[Object(O.jsx)("h1",{children:"Pet Shelter"}),Object(O.jsx)(b.a,{to:"/",children:"back to home"})]}),Object(O.jsxs)(b.b,{children:[Object(O.jsx)(h,{path:"/new",setPing:o}),Object(O.jsx)(d,{path:"/",authsetPing:o,pets:c,setPing:o}),Object(O.jsx)(x,{path:"/edit/:id",setPing:o}),Object(O.jsx)(p,{path:"/details/:id",setPing:o,pets:c})]})]})};var g=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(f,{})})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,94)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,j=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),j(e),a(e)}))};a.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(g,{})}),document.getElementById("root")),m()}},[[77,1,2]]]);
//# sourceMappingURL=main.2ad32416.chunk.js.map