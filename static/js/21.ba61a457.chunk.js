(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[21],{808:function(e,t,n){e.exports=n(469)},809:function(e,t,n){"use strict";function r(e,t,n,r,a,o,c){try{var i=e[o](c),s=i.value}catch(l){return void n(l)}i.done?t(s):Promise.resolve(s).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var c=e.apply(t,n);function i(e){r(c,a,o,i,s,"next",e)}function s(e){r(c,a,o,i,s,"throw",e)}i(void 0)}))}}n.d(t,"a",(function(){return a}))},897:function(e,t,n){"use strict";n.r(t);var r=n(808),a=n.n(r),o=n(809),c=n(29),i=n(30),s=n(32),l=n(31),d=n(1),u=n(11),m=n(4),h=(n(33),n(2)),b="localhost"===document.domain,p=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={withdraw:"",wallet:!0,wallamt:!1,amt:""},e}return Object(i.a)(n,[{key:"loadScript",value:function(e){return new Promise((function(t){var n=document.createElement("script");n.src=e,n.onload=function(){t(!0)},n.onerror=function(){t(!1)},document.body.appendChild(n)}))}},{key:"displayRazorpay",value:function(){var e=Object(o.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,e.next=3,this.loadScript("https://checkout.razorpay.com/v1/checkout.js");case 3:if(e.sent){e.next=7;break}return alert("Razorpay SDK failed to load. Are you online?"),e.abrupt("return");case 7:n={key:b?"rzp_test_wOGiV1gpEDUQrb":"PRODUCTION_KEY",currency:"INR",amount:Number(t.state.amt+"00"),image:"https://scontent.famd4-1.fna.fbcdn.net/v/t1.6435-9/118735517_106259321210134_6609537456866208869_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=973b4a&_nc_ohc=OIXJOQyvfYAAX8g-uYI&_nc_ht=scontent.famd4-1.fna&oh=32147705a68745ef4c204efc1eb9c97e&oe=60D201C5",handler:function(e){var n=u.a+"addtransaction",r={transaction_id:e.razorpay_payment_id,vendor_id:localStorage.getItem("user_id"),amount:Number(t.state.amt)};fetch(n,{method:"POST",headers:u.b,body:JSON.stringify(r)}).then((function(e){e.json().then((function(){}),(function(e){return console.log(e)}))}))},prefill:{email:"sdfdsjfh2@ndsfdf.com",phone_number:"9899999999"}},new window.Razorpay(n).open();case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{children:Object(h.jsx)(m.p,{style:{padding:"10px"},children:Object(h.jsx)(m.O,{className:"justify-content-center",children:Object(h.jsxs)(m.o,{md:"12",lg:"12",xl:"12",style:{padding:"0px"},children:[Object(h.jsx)(m.e,{className:"mx-10",style:{backgroundColor:"#110730",marginLeft:"-1rem",marginRight:"-.9rem",marginBottom:"-.1rem"},children:Object(h.jsxs)(m.f,{className:"p-10",children:[Object(h.jsxs)("center",{style:{color:"white"},children:[" ",Object(h.jsx)("h4",{children:"Wallet"})," "]}),Object(h.jsx)("b",{children:Object(h.jsx)("label",{style:{color:"white"},children:"Total"})}),Object(h.jsx)(m.F,{className:"mb-3",children:Object(h.jsx)(m.E,{type:"text",placeholder:"Rs. 0.00",autoComplete:"false",name:"total",value:this.state.total,style:{borderRadius:"30px",backgroundColor:"#3B5998",border:"1px solid #3B5998"}})}),Object(h.jsxs)("b",{children:[" ",Object(h.jsx)("label",{style:{color:"white"},children:"Add the Amount"})]}),Object(h.jsx)(m.F,{className:"mb-3",children:Object(h.jsx)(m.E,{type:"text",name:"withdraw",placeholder:"Please enter the amount to add to the wallet",autoComplete:"false",onChange:function(t){e.setState({amt:t.target.value})},style:{borderRadius:"30px",backgroundColor:"#3B5998",border:"1px solid #3B5998"}})}),Object(h.jsx)("span",{className:"desc_heading",style:{float:"right",marginTop:"-1rem",marginBottom:"0.4rem",color:"red",fontSize:"0.8rem"},children:"The minimum adding amount is Rs. 100/-"})]})}),Object(h.jsx)(m.d,{type:"submit",value:"add",style:{backgroundColor:"orange",color:"black",marginTop:"1rem",borderRadius:"20px"},block:!0,color:"primary",onClick:function(){return e.displayRazorpay()},children:"ADD AMOUNT TO THE WALLET"}),Object(h.jsx)("br",{}),Object(h.jsxs)("p",{className:"tran",style:{textAlign:"center",color:"blueviolet",fontSize:"0.9rem",fontWeight:"bold"},children:[Object(h.jsx)("u",{children:" Transaction"})," "]})]})})})})}}]),n}(d.Component);t.default=p}}]);
//# sourceMappingURL=21.ba61a457.chunk.js.map