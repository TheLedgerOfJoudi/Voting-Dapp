(this["webpackJsonpvoting-dapp"]=this["webpackJsonpvoting-dapp"]||[]).push([[0],{217:function(t,n,e){},219:function(t,n,e){},231:function(t,n){},256:function(t,n){},258:function(t,n){},337:function(t,n){},339:function(t,n){},372:function(t,n){},377:function(t,n){},379:function(t,n){},386:function(t,n){},399:function(t,n){},422:function(t,n){},431:function(t,n){},433:function(t,n){},503:function(t,n,e){"use strict";e.r(n);var a=e(20),i=e.n(a),u=e(79),o=e.n(u),c=(e(217),e(27)),s=e.n(c),r=e(208),p=e(5),d=e(6),b=e(11),y=e(10),l=(e(219),e(28)),f=e.n(l),j="0xeAb540E1D96A633c7ca8bC4b214f52F80a8b3016",m=[{constant:!1,inputs:[{name:"_candidateId",type:"uint256"}],name:"vote",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"hasVoted",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"candidatesCount",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"candidates",outputs:[{name:"id",type:"uint256"},{name:"name",type:"string"},{name:"voteCount",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"candidateOneVotes",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"candidateTwoVotes",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"isOwner",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,name:"previousOwner",type:"address"},{indexed:!0,name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"}],v=e(55),h=e(13);function O(){var t=Object(a.useState)("2"),n=Object(v.a)(t,2),e=n[0],i=n[1],u=Object(a.useState)(""),o=Object(v.a)(u,2),c=(o[0],o[1],function(t){var n=t.target,e=(n.type,n.name,n.value);i(e)});return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=new f.a(f.a.givenProvider);n.eth.getAccounts().then((function(t){new n.eth.Contract(m,j).methods.vote(parseInt(e)).send({from:t[0]}).then((function(){}))}))},children:[Object(h.jsxs)("label",{children:[Object(h.jsx)("input",{type:"radio",name:"candidate",value:"0",onChange:c}),"First Candidate"]}),Object(h.jsx)("br",{}),Object(h.jsxs)("label",{children:[Object(h.jsx)("input",{type:"radio",name:"candidate",value:"1",onChange:c}),"Second Candidate"]}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{type:"submit",children:" Vote "})]})})}var w=function(){var t=Object(a.useState)(0),n=Object(v.a)(t,2),e=n[0],i=n[1],u=Object(a.useState)(0),o=Object(v.a)(u,2),c=o[0],s=o[1];return function(){var t=new(new f.a(f.a.givenProvider).eth.Contract)(m,j);t.methods.candidateOneVotes().call().then((function(t){i(t)})),t.methods.candidateTwoVotes().call().then((function(t){s(t)}))}(),Object(h.jsxs)("div",{children:[e,Object(h.jsx)("br",{}),c]})},x=function(t){Object(b.a)(e,t);var n=Object(y.a)(e);function e(){var t;return Object(p.a)(this,e),(t=n.call(this)).state={candidatesCount:0},t}return Object(d.a)(e,[{key:"componentDidMount",value:function(){this.load()}},{key:"load",value:function(){var t=Object(r.a)(s.a.mark((function t(){var n,e,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new f.a(f.a.givenProvider),e=new n.eth.Contract(m,j),a=0,t.next=5,e.methods.candidatesCount().call().then((function(t){a=t}));case 5:this.setState({candidatesCount:a});case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(h.jsxs)("div",{children:["candidatesCount : ",this.state.candidatesCount,Object(h.jsx)(O,{}),Object(h.jsx)(w,{})]})}}]),e}(i.a.Component),C=x,g=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,507)).then((function(n){var e=n.getCLS,a=n.getFID,i=n.getFCP,u=n.getLCP,o=n.getTTFB;e(t),a(t),i(t),u(t),o(t)}))};o.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root")),g()}},[[503,1,2]]]);
//# sourceMappingURL=main.c9388ddd.chunk.js.map