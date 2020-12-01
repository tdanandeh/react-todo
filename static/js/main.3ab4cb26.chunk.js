(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,o){e.exports=o(24)},18:function(e,t,o){},22:function(e,t,o){},24:function(e,t,o){"use strict";o.r(t);var n,l,a,r,c,i,s,u,p,d,m=o(0),f=o.n(m),h=o(9),b=o.n(h),y=(o(18),o(2)),O=o(3),v=o(5),j=o(4),g=o(6),k=o(8),C=(o(22),o(10)),w=o(7),E=(o(12),o(1)),A=(n=function(){function e(t,o,n,r){Object(y.a)(this,e),this.store=void 0,this.id=void 0,Object(C.a)(this,"title",l,this),Object(C.a)(this,"completed",a,this),this.id=r,this.store=t,this.title=o,this.completed=n}return Object(O.a)(e,[{key:"toggle",value:function(){this.completed=!this.completed}},{key:"destroy",value:function(){this.store.todos.remove(this)}}]),e}(),l=Object(w.a)(n.prototype,"title",[E.k],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a=Object(w.a)(n.prototype,"completed",[E.k],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Object(w.a)(n.prototype,"toggle",[E.d],Object.getOwnPropertyDescriptor(n.prototype,"toggle"),n.prototype),Object(w.a)(n.prototype,"destroy",[E.d],Object.getOwnPropertyDescriptor(n.prototype,"destroy"),n.prototype),n),N=new(r=function(){function e(){Object(y.a)(this,e),Object(C.a)(this,"todos",c,this),this.lastID=0,Object(C.a)(this,"filters",i,this)}return Object(O.a)(e,[{key:"addTodo",value:function(e){this.todos.push(new A(this,e,!1,this.lastID++))}},{key:"clearAllCompleted",value:function(){N.todos=N.todos.filter(function(e){return!e.completed})}}]),e}(),c=Object(w.a)(r.prototype,"todos",[E.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),i=Object(w.a)(r.prototype,"filters",[E.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"All"}}),Object(w.a)(r.prototype,"addTodo",[E.d],Object.getOwnPropertyDescriptor(r.prototype,"addTodo"),r.prototype),Object(w.a)(r.prototype,"clearAllCompleted",[E.d],Object.getOwnPropertyDescriptor(r.prototype,"clearAllCompleted"),r.prototype),r),D=N,T=function(e){function t(){var e,o;Object(y.a)(this,t);for(var n=arguments.length,l=new Array(n),a=0;a<n;a++)l[a]=arguments[a];return(o=Object(v.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(l)))).state={value:""},o.handleKeyDown=function(e){13===e.keyCode&&(e.preventDefault(),D.addTodo(o.state.value),e.target.value="")},o}return Object(g.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this;return f.a.createElement("div",null,f.a.createElement("header",{className:"header"},f.a.createElement("h1",null,"todo"),f.a.createElement("input",{onChange:function(t){return e.setState({value:t.target.value})},onKeyDown:function(t){return e.handleKeyDown(t)},type:"text",className:"new-todo",placeholder:"What needs to be done?"})))}}]),t}(m.Component),z=Object(k.a)(s=function(e){function t(){var e,o;Object(y.a)(this,t);for(var n=arguments.length,l=new Array(n),a=0;a<n;a++)l[a]=arguments[a];return(o=Object(v.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(l)))).onToggle=function(){o.props.todo.toggle()},o.itemDestroy=function(){o.props.todo.destroy()},o}return Object(g.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props.todo;return f.a.createElement("div",null,f.a.createElement("li",{className:e.completed?"completed":" "},f.a.createElement("div",{className:"view"},f.a.createElement("input",{onChange:this.onToggle,type:"checkbox",className:"toggle",value:"on",checked:e.completed}),f.a.createElement("label",null,e.title," "),f.a.createElement("button",{className:"destroy",onClick:this.itemDestroy}))))}}]),t}(m.Component))||s,P=Object(k.a)(u=function(e){function t(){return Object(y.a)(this,t),Object(v.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return f.a.createElement("div",null,f.a.createElement("section",{className:"completed"},f.a.createElement("ul",{className:"todo-list"},this.applyFilter().map(function(e){return f.a.createElement(z,{todo:e})}))))}},{key:"applyFilter",value:function(){return D.todos.filter(function(e){switch(D.filters){case"All":return!0;case"Active":return!e.completed;case"Completed":return e.completed}})}}]),t}(m.Component))||u,x=Object(k.a)(p=function(e){function t(){return Object(y.a)(this,t),Object(v.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(O.a)(t,[{key:"todoActiveCounter",value:function(){return D.todos.filter(function(e){return!e.completed}).length}},{key:"todoCompletedCounter",value:function(){return D.todos.filter(function(e){return e.completed}).length}},{key:"clearCompleted",value:function(){return f.a.createElement("button",{className:"clear-completed",onClick:D.clearAllCompleted},"clear Completed")}},{key:"render",value:function(){return f.a.createElement("div",{className:"footer"},f.a.createElement("a",{className:"todo-count"},this.todoActiveCounter()," items left"),f.a.createElement("ul",{className:"filters"},f.a.createElement("li",null,f.a.createElement("a",{className:"All"===D.filters?"selected":" ",onClick:this.filtersAll},"All")),f.a.createElement("li",null,f.a.createElement("a",{className:"Active"===D.filters?"selected":" ",onClick:this.filtersActive},"Active")),f.a.createElement("li",null,f.a.createElement("a",{className:"Completed"===D.filters?"selected":" ",onClick:this.filtersCompleted},"Completed")),0===this.todoCompletedCounter()?"":this.clearCompleted()))}},{key:"filtersAll",value:function(){D.filters="All",console.log(D.filters)}},{key:"filtersActive",value:function(){D.filters="Active",console.log(D.filters)}},{key:"filtersCompleted",value:function(){D.filters="Completed",console.log(D.filters)}}]),t}(m.Component))||p,I=Object(k.a)(d=function(e){function t(){return Object(y.a)(this,t),Object(v.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return f.a.createElement("div",{id:"todoapp",className:"todoapp"},f.a.createElement(T,null),f.a.createElement(P,null),f.a.createElement(x,null))}}]),t}(m.Component))||d;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));b.a.render(f.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,2,1]]]);
//# sourceMappingURL=main.3ab4cb26.chunk.js.map