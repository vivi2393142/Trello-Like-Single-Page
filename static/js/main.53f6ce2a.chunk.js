(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{30:function(t,e,s){},31:function(t,e,s){},33:function(t,e,s){"use strict";s.r(e);var i=s(2),a=s(1),c=s.n(a),d=s(20),n=s.n(d),r=(s(30),s(19)),l=s(4),o=(s(31),s(7)),u=s(36),b=s(37),j="card",m=function(t){var e=t.listItems.map((function(e){return Object(i.jsx)(f,{id:e.id,listItems:t.listItems,setListItems:t.setListItems,listTitle:e.title,listCards:e.cards},Object(o.a)())}));return Object(i.jsxs)("div",{className:"card-list",children:[e,Object(i.jsx)(g,{setListItems:t.setListItems,listItems:t.listItems})]})},g=function(t){var e=c.a.useState(""),s=Object(l.a)(e,2),a=s[0],d=s[1],n=function(t){document.querySelector(".add-list-button").classList.toggle("hide"),document.querySelector(".add-save-list-button").classList.toggle("hide"),document.querySelector(".list-input").classList.toggle("hide"),document.querySelector(".list-edit").classList.toggle("card-init-toggle")};return Object(i.jsxs)("div",{className:"list edit list-edit",children:[Object(i.jsx)("input",{className:"input-box list-input hide",onChange:function(t){d(t.target.value)},value:a}),Object(i.jsx)("button",{className:"add-init-button add-list-button",onClick:n,children:"+ Add a list"}),Object(i.jsxs)("div",{className:"add-save-close-buttons add-save-list-button hide",children:[Object(i.jsx)("button",{className:"add-save-button",onClick:function(){""===a?n():(t.setListItems([].concat(Object(r.a)(t.listItems),[{id:Object(o.a)(),title:a,cards:[]}])),d(""))},children:"Add List"}),Object(i.jsx)("button",{className:"add-close-button",onClick:n,children:"X"})]})]})},h=function(t){return Object(i.jsx)("div",{index:t.index,className:"single-card",draggable:"true",id:t.cardId,onDrop:function(e){t.setDargEnd(parseInt(e.target.getAttribute("index"))),t.setDargEndId(e.target.getAttribute("id"))},children:t.item})},O=function(t){var e=t.index,s=t.cardId,a=Object(u.a)({item:{cardId:s,index:e,type:j}}),c=Object(l.a)(a,2)[1];return Object(i.jsx)("div",{ref:c,children:Object(i.jsx)(h,{cardId:s,item:t.item,index:e,setDargEnd:t.setDargEnd,setDargEndId:t.setDargEndId})})},v=function(t){var e=c.a.useState(0),s=Object(l.a)(e,2),a=s[0],d=s[1],n=c.a.useState(""),r=Object(l.a)(n,2),u=r[0],m=r[1],g=t.listCards,h="",v=Object(b.a)({accept:j,drop:function(e){(h=e.cardId)===u&&function(e,s){var i=t.listCards;for(var a in i){var c=i[a];if(a==e){i.splice(a,1),i.splice(s,0,c);break}}g=i;var d=t.listItems.map((function(t){return t.id===h?{id:t.id,title:t.title,cards:g}:t}));t.setListItems(d)}(e.index,a)}}),f=Object(l.a)(v,2)[1],x=t.listCards.map((function(e,s){var a=Object(o.a)();return Object(i.jsx)(O,{cardId:t.cardId,id:a,item:e,index:s,setDargEnd:d,setDargEndId:m},a)}));return Object(i.jsx)("div",{ref:f,children:x})},f=function(t){var e=c.a.useState(""),s=Object(l.a)(e,2),a=s[0],d=s[1],n=c.a.useState(t.listTitle),o=Object(l.a)(n,2),u=o[0],b=o[1],j=function(t,e){var s="";(s=e||t.target.parentNode).querySelector(".add-card-button").classList.toggle("hide"),s.querySelector(".add-save-card-button").classList.toggle("hide"),s.querySelector(".card-input").classList.toggle("hide")};return Object(i.jsxs)("div",{className:"card",children:[Object(i.jsxs)("div",{className:"card-title-box",children:[Object(i.jsx)("div",{className:"card-title",children:t.listTitle}),Object(i.jsx)("input",{className:"card-title-input hide",value:u,onChange:function(t){b(t.target.value)}}),Object(i.jsx)("button",{className:"card-title-edit hide",onClick:function(e){e.target.parentNode.childNodes.forEach((function(t){t.classList.toggle("hide")}));var s=t.listItems.map((function(e){return e.id===t.id?{id:e.id,title:u,cards:e.cards}:e}));t.setListItems(s),console.log(s)},children:"save"}),Object(i.jsx)("button",{className:"card-title-edit",onClick:function(t){t.target.parentNode.childNodes.forEach((function(t){t.classList.toggle("hide")}))},children:"edit"})]}),Object(i.jsx)(v,{listCards:t.listCards,setListItems:t.setListItems,listItems:t.listItems,cardId:t.id}),Object(i.jsx)("input",{className:"input-box card-input hide",value:a,onChange:function(t){d(t.target.value)}}),Object(i.jsx)("button",{className:"add-init-button add-card-button",onClick:j,children:"+ Add a Card"}),Object(i.jsxs)("div",{className:"add-save-close-buttons add-save-card-button hide",children:[Object(i.jsx)("button",{className:"add-save-button",onClick:function(e){if(""===a){var s=e.target.parentNode.parentNode;j(null,s)}else{var i=t.listItems.map((function(e){var s=[].concat(Object(r.a)(e.cards),[a]);return e.id===t.id?{id:t.id,title:t.listTitle,cards:s}:e}));t.setListItems(i),d("")}},children:"Add Card"}),Object(i.jsx)("button",{className:"add-close-button",onClick:function(t){var e=t.target.parentNode.parentNode;j(null,e)},children:"X"})]}),Object(i.jsx)("button",{className:"add-init-button add-card-button",onClick:function(e){var s=t.listItems.filter((function(e){if(e.id!==t.id)return e}));t.setListItems(s)},children:"Delete List"})]})},x=function(){var t=c.a.useState([{id:Object(o.a)(),title:"1",cards:["1","2","3","4"]},{id:Object(o.a)(),title:"2",cards:["11","22","33","44"]}]),e=Object(l.a)(t,2),s=e[0],a=e[1];return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("h1",{children:"Trello-Like Single Page App"}),Object(i.jsx)(m,{listItems:s,setListItems:a})]})},p=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,38)).then((function(e){var s=e.getCLS,i=e.getFID,a=e.getFCP,c=e.getLCP,d=e.getTTFB;s(t),i(t),a(t),c(t),d(t)}))},I=s(35),N=s(22);n.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(I.a,{backend:N.a,children:Object(i.jsx)(x,{})})}),document.getElementById("root")),p()}},[[33,1,2]]]);
//# sourceMappingURL=main.53f6ce2a.chunk.js.map