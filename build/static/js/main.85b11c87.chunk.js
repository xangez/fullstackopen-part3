(this.webpackJsonpfullstackopen=this.webpackJsonpfullstackopen||[]).push([[0],{18:function(e,n,t){e.exports=t(40)},40:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(16),c=t.n(u),l=(t(5),t(17)),o=t(6),i=t(2),m=function(e){var n=e.person,t=e.handleDelete;return r.a.createElement("li",{className:"personNumber"},n.name," ",n.number,r.a.createElement("button",{onClick:t},"delete"))},f=function(e){var n=e.list,t=e.handleDelete;return r.a.createElement("ul",null,n.map((function(e,n){return r.a.createElement(m,{key:n,person:e,handleDelete:function(){return t(e.id,e.name)}})})))},d=function(e){var n=e.handleNameChange,t=e.handleNumberChange,a=e.addPerson,u=e.newName,c=e.newNumber;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:a},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:u,onChange:n})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:c,onChange:t})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},s=function(e){var n=e.handleFilterChange;return r.a.createElement("div",null,"Filter shown with",r.a.createElement("input",{onChange:n}))},h=t(3),b=t.n(h),p="/api/people",v=function(){return b.a.get(p).then((function(e){return e.data}))},E=function(e){return b.a.post(p,e).then((function(e){return e.data}))},g=function(e){return b.a.delete("".concat(p,"/").concat(e)).then((function(e){return e}))},w=function(e,n){return b.a.put("".concat(p,"/").concat(e),n).then((function(e){return e.data}))},j=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"notif"},n)},O=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),m=Object(i.a)(c,2),h=m[0],b=m[1],p=Object(a.useState)(""),O=Object(i.a)(p,2),C=O[0],N=O[1],k=Object(a.useState)(""),y=Object(i.a)(k,2),D=y[0],S=y[1],F=Object(a.useState)(null),P=Object(i.a)(F,2),J=P[0],L=P[1];Object(a.useEffect)((function(){v().then((function(e){u(e)}))}),[]);var x=function(){b(""),N("")},A=function(e){L(e),setTimeout((function(){return L(null)}),5e3)},B=function(){var e=t.find((function(e){return e.name===h})),n=Object(o.a)(Object(o.a)({},e),{},{number:C});w(e.id,n).then((function(e){u(t.map((function(n){return n.name!==h?n:e}))),A("".concat(e.name,"'s number updated"))})).catch((function(n){A("".concat(e.name," already removed from server")),u(t.filter((function(e){return e.name!==h})))}))};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(j,{message:J}),r.a.createElement(s,{handleFilterChange:function(e){S(e.target.value)}}),r.a.createElement("h2",null,"Add a new"),r.a.createElement(d,{handleNameChange:function(e){b(e.target.value)},handleNumberChange:function(e){N(e.target.value)},addPerson:function(e){(e.preventDefault(),function(){var e,n=Object(l.a)(t);try{for(n.s();!(e=n.n()).done;){if(e.value.name===h)return window.confirm("".concat(h," is already added to phonebook, replace the old number with a new one?"))&&B(),!0}}catch(a){n.e(a)}finally{n.f()}}())?x():E({name:h,number:C}).then((function(e){A("".concat(e.name," added")),u(t.concat(e)),x()})).catch((function(e){console.log(e.response.data),A(e.response.data.error),x()}))},newName:h,newNumber:C}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(f,{list:""===D?t:t.filter((function(e){return!0===e.name.toLowerCase().startsWith(D.toLowerCase())})),handleDelete:function(e,n){window.confirm("Delete ".concat(n,"?"))&&(g(e),u(t.filter((function(n){return n.id!==e}))))}}))};c.a.render(r.a.createElement(O,null),document.getElementById("root"))},5:function(e,n,t){}},[[18,1,2]]]);
//# sourceMappingURL=main.85b11c87.chunk.js.map