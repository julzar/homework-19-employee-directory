(this["webpackJsonphw-19"]=this["webpackJsonphw-19"]||[]).push([[0],{35:function(e,t,a){e.exports=a(48)},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a(18),s=a(12),m=a(32),u=a(5),o=a(22),i=a.n(o),p=a(29),E=Object(c.b)({name:"employees",initialState:{loading:!1,hasErrors:!1,filteredBy:!1,employees:[]},reducers:{getEmployees:function(e){e.loading=!0},getEmployeesSuccess:function(e,t){var a=t.payload;e.employees=a.results,e.loading=!1,e.hasErrors=!1},getEmployeesFailure:function(e){e.loading=!1,e.hasErrors=!0},getEmployeesFiltered:function(e,t){var a=t.payload;e.filteredBy=a}}}),d=E.actions,y=d.getEmployees,h=d.getEmployeesSuccess,f=d.getEmployeesFailure,b=d.getEmployeesFiltered,g=function(e){return e.employees},v=E.reducer;var j=function(e){var t=e.employee;return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{src:t.picture.thumbnail,alt:"employee"})),r.a.createElement("td",null,t.name.first),r.a.createElement("td",null,t.name.last),r.a.createElement("td",null,t.phone),r.a.createElement("td",null,t.email))},O=a(33),x=a(17),k=a(34),w=function(){var e=Object(s.b)();return r.a.createElement(O.a,{inline:!0,onSubmit:function(t){t.preventDefault(),e(b(document.getElementById("search").value.trim()))},className:"mb-2"},r.a.createElement(x.a,{type:"text",placeholder:"Search",className:"mr-sm-2",id:"search",name:"search"}),r.a.createElement(k.a,{type:"submit",variant:"outline-success"},"Search"))},S=a(31),B=function(){var e=Object(s.b)(),t=Object(s.c)(g),a=t.employees,l=t.loading,c=t.hasErrors,m=t.filteredBy;Object(n.useEffect)((function(){e(function(){var e=Object(p.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(y()),e.prev=1,e.next=4,fetch("https://randomuser.me/api/?results=200&nat=us");case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,t(h(n)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t(f());case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement(S.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Photo"),r.a.createElement("th",null,"First Name"),r.a.createElement("th",null,"Last Name"),r.a.createElement("th",null,"Phone"),r.a.createElement("th",null,"Email"))),l?r.a.createElement("p",null,"Loading employees..."):c?r.a.createElement("p",null,"Unable to display employees."):m?a.filter((function(e){return e.name.first===m||e.name.last===m})).map((function(e,t){return r.a.createElement(j,{key:t,employee:e})})):a.map((function(e,t){return r.a.createElement(j,{key:t,employee:e})}))))},F=function(){return r.a.createElement(m.a,null,r.a.createElement(u.a,{exact:!0,path:"/",component:B}))},N=a(7),I=Object(N.c)({employees:v}),J=(a(47),Object(c.a)({reducer:I}));Object(l.render)(r.a.createElement(s.a,{store:J},r.a.createElement(F,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.b90b6db1.chunk.js.map