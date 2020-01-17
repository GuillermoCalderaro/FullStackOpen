(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(13),u=t.n(l),o=t(2),c=function(e){e.personsToShow;var n=e.displayNames;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,n()))},m=function(e){var n=e.name,t=e.number;return r.a.createElement("li",null,n," ",t)},s=function(e){var n=e.newFilter,t=e.handleFilterChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"filter names with: "),r.a.createElement("input",{value:n,onChange:t}))},i=function(e){e.persons;var n=e.addPerson,t=e.newName,a=e.handleNameChange,l=e.newPhone,u=e.handleNumberChange;e.setPersons,e.setNewName,e.setNewPhone;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,r.a.createElement("p",null,"name: "),r.a.createElement("input",{value:t,onChange:a})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("p",null,"number: "),r.a.createElement("input",{value:l,onChange:u})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},h=t(3),d=t.n(h),f="http://localhost:3001/api/persons",p=function(){return d.a.get(f).then((function(e){return e.data}))},E=function(e){return d.a.post(f,e).then((function(e){return e.data}))},b=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"error"},n)},v=function(){Object(a.useEffect)((function(){p().then((function(e){return l(e)}))}),[]);var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],l=n[1],u=Object(a.useState)("Enter a name"),h=Object(o.a)(u,2),d=h[0],f=h[1],v=Object(a.useState)("Enter a phone number"),w=Object(o.a)(v,2),g=w[0],N=w[1],j=Object(a.useState)("Enter a name to filter"),O=Object(o.a)(j,2),C=O[0],P=O[1],S=Object(a.useState)(""),k=Object(o.a)(S,2),y=k[0],F=k[1],T=Object(a.useState)(null),x=Object(o.a)(T,2),J=x[0],U=x[1],B=""===y?t:t.filter((function(e){return e.name.toUpperCase().startsWith(y.toUpperCase())}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(s,{newFilter:C,handleFilterChange:function(e){P(e.target.value),F(e.target.value)}}),r.a.createElement("h3",null,"add a new"),r.a.createElement(b,{message:J}),r.a.createElement(i,{persons:t,addPerson:function(e){if(e.preventDefault(),d)if(t.map((function(e){return e.name})).includes(d))window.alert("".concat(d," already exists in your phonebook."));else{var n={name:d,number:g};E(n).then((function(e){l(e)})),U("".concat(n.name," was added to the server")),setTimeout((function(){U(null)}),5e3)}else window.alert("The name field must contain at least one character");f(""),N("")},newName:d,handleNameChange:function(e){f(e.target.value)},newPhone:g,handleNumberChange:function(e){N(e.target.value)},setPersons:l,setNewName:f,setNewPhone:N}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(c,{personsToShow:B,displayNames:function(){return B.map((function(e){return r.a.createElement(m,{key:e.id,name:e.name,number:e.number})}))}}))};t(36);u.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.c60bb6a0.chunk.js.map