(this.webpackJsonpsales=this.webpackJsonpsales||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),s=(a(15),a(1)),i=a(2),u=a(4),p=a(3),o=a(6),m=a(5),h=a(9),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={percentage:"",price:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"inputHandler",value:function(e,t){this.setState(Object(h.a)({},e,t))}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"converter"},r.a.createElement("label",{className:"converter__label",htmlFor:"percentage"},"What does"),r.a.createElement("input",{value:this.state.percentage,className:"converter__inputs",id:"percentage",type:"number",placeholder:"Enter percentage...",onChange:function(t){return e.inputHandler("percentage",t.target.value)}}),r.a.createElement("label",{className:"converter__label",htmlFor:"price"},"of"),r.a.createElement("input",{value:this.state.price,className:"converter__inputs",id:"price",type:"number",placeholder:"Enter the price... ",onChange:function(t){return e.inputHandler("price",t.target.value)}}),r.a.createElement("button",{className:"converter__btn",onClick:function(t){return e.props.calculate(e.state.percentage,e.state.price,t,e)}},"Calculate"))}}]),t}(r.a.Component),g=function(e){function t(e){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).call(this,e))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"result"},r.a.createElement("p",{className:"result__text"},"The price is"),r.a.createElement("p",{className:"result__number"},this.props.result))}}]),t}(r.a.Component),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={percentage:"",price:"",result:0},a.calculate=a.calculate.bind(Object(o.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"calculate",value:function(e,t,a,n){a.preventDefault();var r=t-e/100*t;this.setState({percentage:"",price:"",result:r}),n.inputHandler("percentage",""),n.inputHandler("price","")}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("a",null,r.a.createElement("img",{className:"logo",srcSet:"./img/logoBlack.svg",src:"./img/logoBlack.png",width:"27",height:"22"})),r.a.createElement("h1",{className:"title"},"Sales&Go")),r.a.createElement(b,{percentage:this.state.percentage,price:this.state.price,calculate:this.calculate,inputHandler:this.inputHandler}),r.a.createElement(g,{result:this.state.result}))}}]),t}(r.a.Component);a(16);var d=function(){return r.a.createElement("div",null,r.a.createElement(v,null))};l.a.render(r.a.createElement(d,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.b349b499.chunk.js.map