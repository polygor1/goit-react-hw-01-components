(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,,,,function(e){e.exports=JSON.parse('{"username":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://cdn-icons-png.flaticon.com/512/2922/2922506.png","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,,function(e,a,c){},function(e,a,c){},function(e,a,c){},,function(e,a,c){},function(e,a,c){},function(e,a,c){},function(e,a,c){"use strict";c.r(a);var t=c(1),n=c.n(t),s=c(3),i=c.n(s),r=(c(13),c(8)),d=(c(14),c(15),c(0));function l(e){var a=e.username,c=e.tag,t=e.location,n=e.avatar,s=e.stats,i=s.followers,r=s.views,l=s.likes;return Object(d.jsxs)("div",{className:"profile",children:[Object(d.jsxs)("div",{className:"description",children:[Object(d.jsx)("img",{src:n,alt:"User avatar",className:"avatar"}),Object(d.jsx)("p",{className:"name",children:a}),Object(d.jsxs)("p",{className:"tag",children:["@",c]}),Object(d.jsx)("p",{className:"location",children:t})]}),Object(d.jsxs)("ul",{className:"stats",children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:"label",children:"Followers"}),Object(d.jsx)("span",{className:"quantity",children:i})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:"label",children:"Views"}),Object(d.jsx)("span",{className:"quantity",children:r/1e3})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:"label",children:"Likes"}),Object(d.jsx)("span",{className:"quantity",children:l})]})]})]})}var o=c(4);c(17);function b(e){var a=e.title,c=e.stats;return Object(d.jsxs)("section",{className:"statistics",children:[a&&Object(d.jsx)("h2",{className:"title",children:a}),Object(d.jsx)("ul",{className:"stat-list",children:c.map((function(e){return Object(d.jsxs)("li",{className:"item",style:{backgroundColor:"#"+Math.floor(16777215*Math.random()).toString(16)},children:[Object(d.jsx)("span",{className:"label",children:e.label}),Object(d.jsxs)("span",{className:"percentage",children:[e.percentage,"%"]})]},e.id)}))})]})}var p=c(5);c(18);function u(e){var a=e.avatar,c=e.name,t=e.isOnline;return Object(d.jsxs)("li",{className:"item",children:[Object(d.jsx)("span",{className:"status",style:{backgroundColor:t?"green":"red"}}),Object(d.jsx)("img",{className:"avatar",src:a,alt:"User avatar",width:"48"}),Object(d.jsx)("p",{className:"name",children:c})]})}function j(e){var a=e.props;return Object(d.jsx)("ul",{className:"friend-list",children:a.map((function(e){return Object(d.jsx)(u,{avatar:e.avatar,name:e.name,isOnline:e.isOnline,id:e.id},e.id)}))})}var m=c(6);c(19);function f(e){var a=e.type,c=e.amount,t=e.currency;return Object(d.jsxs)("tr",{className:"item",children:[Object(d.jsx)("td",{children:a}),Object(d.jsx)("td",{children:c}),Object(d.jsx)("td",{children:t})]})}function h(e){var a=e.props;return Object(d.jsxs)("table",{className:"transaction-history",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Type"}),Object(d.jsx)("th",{children:"Amount"}),Object(d.jsx)("th",{children:"Currency"})]})}),Object(d.jsx)("tbody",{children:a.map((function(e){return Object(d.jsx)(f,{type:e.type,amount:e.amount,currency:e.currency},e.id)}))})]})}var O=c(7);function y(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(l,Object(r.a)({},o)),Object(d.jsx)(b,{title:"Upload stats",stats:p}),Object(d.jsx)(j,{props:m}),Object(d.jsx)(h,{props:O})]})}i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.69217ed2.chunk.js.map