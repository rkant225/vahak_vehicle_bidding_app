(this.webpackJsonpvahak_vehicle_bidding_app=this.webpackJsonpvahak_vehicle_bidding_app||[]).push([[0],{130:function(e,t,a){},235:function(e,t,a){},236:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(10),i=a.n(s),c=(a(130),a(7)),o=a(17),d=(a.p,a(114)),u=a(9),l=a(27),b=a.n(l),j=a(41),m=a(243),h=a(274),O=a(239),x=a(241),p=a(240),g=a(269),v=a(273),f=a(2),N=function(e){var t=e.isLoading;return Object(f.jsx)(f.Fragment,{children:t&&Object(f.jsx)("div",{className:"loader-container",children:Object(f.jsxs)("div",{className:"loader",children:[Object(f.jsx)("div",{className:"loader-dot loader-dot-1"}),Object(f.jsx)("div",{className:"loader-dot loader-dot-2"}),Object(f.jsx)("div",{className:"loader-dot loader-dot-3"})]})})})},y=a(52),T=a(24),C=function(e){return new Promise((function(t){return setTimeout(t,e)}))},k=function(e){var t=e.history,a=Object(n.useContext)(R),r=a.biddingData,s=a.setBiddingData,i={source:r.source||"",destination:r.destination||"",carType:r.carType||"",numberOfTravelers:r.numberOfTravelers||0},o=T.a({source:T.b().required("Source is Required."),destination:T.b().required("Destination is Required."),carType:T.b().required("Car type is Required.")}),d=function(){var e=Object(j.a)(b.a.mark((function e(a){var n,i,o,d;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(Object(c.a)(Object(c.a)({},r),{},{isLoading:!0})),e.next=3,C(2e3);case 3:s(Object(c.a)(Object(c.a)({},r),{},{isLoading:!1})),console.log("FormData",a),n=a.carType,i=a.destination,o=a.source,d=a.numberOfTravelers,s(Object(c.a)(Object(c.a)({},r),{},{carType:n,destination:i,source:o,numberOfTravelers:d})),sessionStorage.setItem("biddingData",JSON.stringify(Object(c.a)(Object(c.a)({},r),{},{carType:n,destination:i,source:o,numberOfTravelers:d}))),t.push("/step-two");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=Object(y.a)({initialValues:i,validationSchema:o,onSubmit:d});return Object(f.jsx)("div",{className:"step-container",children:Object(f.jsxs)("form",{className:"form",onSubmit:u.handleSubmit,children:[Object(f.jsx)(g.a,{name:"source",className:"text-box-small",variant:"outlined",label:"Source *",value:u.values.source,onChange:u.handleChange,error:u.touched.source&&Boolean(u.errors.source),helperText:u.touched.source&&u.errors.source}),Object(f.jsx)(g.a,{name:"destination",className:"text-box-small",variant:"outlined",label:"Destination *",value:u.values.destination,onChange:u.handleChange,error:u.touched.destination&&Boolean(u.errors.destination),helperText:u.touched.destination&&u.errors.destination}),Object(f.jsxs)(O.a,{variant:"outlined",className:"dropdown",error:u.touched.carType&&Boolean(u.errors.carType),children:[Object(f.jsx)(m.a,{children:"Enter car type *"}),Object(f.jsxs)(x.a,{name:"carType",label:"Enter car type *",value:u.values.carType,onChange:u.handleChange,children:[Object(f.jsx)(h.a,{value:"",children:"Please Select"}),Object(f.jsx)(h.a,{value:"HachBack",children:"HachBack"}),Object(f.jsx)(h.a,{value:"Sudan",children:"Sudan"}),Object(f.jsx)(h.a,{value:"SUV",children:"SUV"})]}),Object(f.jsx)(p.a,{children:u.touched.carType&&u.errors.carType})]}),Object(f.jsx)(g.a,{name:"numberOfTravelers",className:"text-box-large",variant:"outlined",label:"Number of Travellers",value:u.values.numberOfTravelers,onChange:u.handleChange,error:u.touched.numberOfTravelers&&Boolean(u.errors.numberOfTravelers),helperText:u.touched.numberOfTravelers&&u.errors.numberOfTravelers}),Object(f.jsx)(v.a,{className:"button",variant:"contained",color:"primary",type:"submit",children:"Enter bid details"})]})})},S=function(){var e=Object(u.f)(),t=Object(n.useContext)(R),a=t.biddingData,r=(t.setBiddingData,a.source),s=a.destination,i=a.carType;return Object(f.jsxs)("div",{className:"journey-details-container",children:[Object(f.jsx)("div",{className:"journey-details-header",children:"JOURNEY DETAILS"}),Object(f.jsx)("div",{className:"journey-details-edit-button",onClick:function(){e.push("/step-one")},children:"Edit"}),Object(f.jsx)("div",{className:"journey-details-source-destination-container",children:Object(f.jsxs)("div",{className:"journey-details-source-destination",children:[r," - ",s,", ",i]})})]})},B=function(e){return new Promise((function(t){return setTimeout(t,e)}))},w=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,D=function(e){var t=e.history,a=Object(n.useContext)(R),r=a.biddingData,s=a.setBiddingData,i=r.biddingAmount,o={biddingAmount:r.biddingAmount||"",mobileNo:r.mobileNo||"",userName:r.userName||"",remark:r.remark||""},d=T.a({mobileNo:T.b().matches(w,"Mobile number is not valid").required("Mobile number is Required.").min(10,"Too short").max(10,"Too long"),userName:T.b().required("Name is Required.")}),u=function(){var e=Object(j.a)(b.a.mark((function e(a){var n,i,o,d;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(Object(c.a)(Object(c.a)({},r),{},{isLoading:!0})),e.next=3,B(2e3);case 3:s(Object(c.a)(Object(c.a)({},r),{},{isLoading:!1})),console.log("FormData",a),n=a.biddingAmount,i=a.mobileNo,o=a.userName,d=a.remark,s(Object(c.a)(Object(c.a)({},r),{},{biddingAmount:n,mobileNo:i,userName:o,remark:d})),sessionStorage.setItem("biddingData",JSON.stringify(Object(c.a)(Object(c.a)({},r),{},{biddingAmount:n,mobileNo:i,userName:o,remark:d}))),t.push("/step-three");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=Object(y.a)({initialValues:o,validationSchema:d,onSubmit:u});return Object(f.jsxs)("div",{className:"step-container",children:[Object(f.jsx)(S,{}),Object(f.jsxs)("form",{onSubmit:l.handleSubmit,style:{padding:"2rem"},children:[Object(f.jsxs)("div",{className:"textbox-bidding-amount-container",children:[Object(f.jsx)("i",{class:"fas fa-rupee-sign"}),Object(f.jsx)("input",{name:"biddingAmount",type:"number",className:"textbox-bidding-amount",placeholder:"0.0",value:l.values.biddingAmount,onChange:function(e){s(Object(c.a)(Object(c.a)({},r),{},{biddingAmount:e.target.value})),l.handleChange(e)}})]}),Object(f.jsxs)("div",{className:"checkbox-container",children:[Object(f.jsx)("input",{type:"checkbox"}),Object(f.jsx)("span",{children:"Rate is Negotiable"})]}),Object(f.jsx)(g.a,{name:"mobileNo",type:"number",className:"",variant:"outlined",label:"Enter your 10 digit mobile number *",value:l.values.mobileNo,onChange:l.handleChange,error:l.touched.mobileNo&&Boolean(l.errors.mobileNo),helperText:l.touched.mobileNo&&l.errors.mobileNo,style:{width:"100%"}}),Object(f.jsxs)("div",{className:"get-updates-checkbox-container",style:{width:"96%",padding:"1rem",backgroundColor:"rgb(0,0,0,.1)",marginBottom:"1rem",borderRadius:"5px"},children:[Object(f.jsx)("input",{type:"checkbox"}),Object(f.jsx)("span",{children:"Get updates on "}),Object(f.jsxs)("span",{className:"whatsapp",style:{color:"#40C351"},children:[Object(f.jsx)("i",{class:"fab fa-whatsapp",style:{marginRight:".5rem"}}),Object(f.jsx)("span",{children:"Whatsapp"})]})]}),Object(f.jsx)(g.a,{name:"userName",className:"text-box-large",variant:"outlined",label:"Enter your name *",value:l.values.userName,onChange:l.handleChange,error:l.touched.userName&&Boolean(l.errors.userName),helperText:l.touched.userName&&l.errors.userName}),Object(f.jsx)(g.a,{name:"remark",className:"text-box-large",variant:"outlined",label:"Enter remarks (optional)",value:l.values.remark,onChange:l.handleChange,error:l.touched.remark&&Boolean(l.errors.remark),helperText:l.touched.remark&&l.errors.remark}),Object(f.jsx)(v.a,{className:"button",variant:"contained",color:"primary",disabled:i<=0,type:"submit",children:"Next"})]})]})},L=function(){var e=Object(u.f)(),t=Object(n.useContext)(R),a=t.biddingData,r=(t.setBiddingData,a.biddingAmount),s=a.mobileNo,i=a.userName,c=a.remark;return Object(f.jsxs)("div",{className:"journey-details-container",children:[Object(f.jsx)("div",{className:"journey-details-header",children:"BID DETAILS"}),Object(f.jsx)("div",{className:"journey-details-edit-button",onClick:function(){e.push("/step-two")},children:"Edit"}),Object(f.jsxs)("div",{className:"journey-details-source-destination-container",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"1rem"},children:[Object(f.jsxs)("div",{className:"journey-details-source-destination",children:["+91-",s,Object(f.jsx)("br",{}),i,Object(f.jsx)("br",{}),c||"No remark provided."]}),Object(f.jsxs)("div",{style:{fontSize:"2.5rem"},children:[Object(f.jsx)("i",{class:"fas fa-rupee-sign"}),Object(f.jsx)("b",{style:{fontSize:"3rem"},children:r}),Object(f.jsx)("div",{style:{fontSize:"1.3rem"},children:"Fixed price"})]})]})]})},P=function(e){var t=e.history,a=Object(n.useContext)(R),r=a.biddingData,s=(a.setBiddingData,r.mobileNo),i=Object(n.useState)(""),c=Object(o.a)(i,2),d=c[0],u=c[1],l=Object(n.useState)(""),b=Object(o.a)(l,2),j=b[0],m=b[1],h=Object(n.useState)(""),O=Object(o.a)(h,2),x=O[0],p=O[1],g=Object(n.useState)(""),N=Object(o.a)(g,2),y=N[0],T=N[1],C=Object(n.useState)(""),k=Object(o.a)(C,2),B=k[0],w=k[1],D=function(){"1234"=="".concat(d).concat(j).concat(x).concat(y)?t.push("/step-four"):w("Please enter valid OTP.")};return Object(f.jsxs)("div",{className:"step-container",children:[Object(f.jsx)(S,{}),Object(f.jsx)(L,{}),Object(f.jsxs)("div",{style:{marginTop:"1rem",width:"50%"},children:["We\u2019ve sent an OTP to your mobile number, Please enter it below to submit your bid.",Object(f.jsx)("br",{}),Object(f.jsx)("b",{children:s}),Object(f.jsx)("span",{style:{color:"blue",marginLeft:".5rem",cursor:"pointer"},onClick:function(){t.push("/step-two")},children:"Edit"})]}),Object(f.jsxs)("div",{className:"otp-inputs-container",children:[Object(f.jsx)("input",{value:d,onChange:function(e){u(e.target.value)},id:"otp-digit-1",className:"otp-textbox",maxLength:"1",onFocus:function(e){e.target.value=""},onKeyUp:function(){document.getElementById("otp-digit-2").focus()}}),Object(f.jsx)("input",{value:j,onChange:function(e){m(e.target.value)},id:"otp-digit-2",className:"otp-textbox",maxLength:"1",onFocus:function(e){e.target.value=""},onKeyUp:function(){document.getElementById("otp-digit-3").focus()}}),Object(f.jsx)("input",{value:x,onChange:function(e){p(e.target.value)},id:"otp-digit-3",className:"otp-textbox",maxLength:"1",onFocus:function(e){e.target.value=""},onKeyUp:function(){document.getElementById("otp-digit-4").focus()}}),Object(f.jsx)("input",{value:y,onChange:function(e){T(e.target.value)},id:"otp-digit-4",className:"otp-textbox",maxLength:"1",onFocus:function(e){e.target.value=""},onKeyUp:function(){D()}})]}),B&&Object(f.jsx)("div",{style:{width:"max-content",margin:"auto",height:"1rem",color:"red",marginBottom:"2rem"},children:B}),Object(f.jsx)("div",{style:{width:"max-content",margin:"auto",height:"1rem",color:"blue",marginBottom:"2rem",cursor:"pointer"},children:Object(f.jsx)("u",{children:"Resend OTP"})}),Object(f.jsx)(v.a,{id:"otp-button",className:"button",variant:"contained",color:"primary",onClick:D,children:"Verify OTP"})]})},E=function(e){return new Promise((function(t){return setTimeout(t,e)}))},A=function(e){e.history;var t=Object(n.useContext)(R),a=t.biddingData,r=t.setBiddingData,s=function(){var e=Object(j.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return sessionStorage.clear(),r(Object(c.a)(Object(c.a)({},a),{},{isLoading:!0})),e.next=4,E(1e3);case 4:r(Object(c.a)(Object(c.a)({},a),{},{isLoading:!1})),window.location.href="/home";case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"step-container",children:[Object(f.jsx)(S,{}),Object(f.jsx)(L,{}),Object(f.jsx)("div",{style:{marginTop:"2rem"},children:Object(f.jsx)(v.a,{id:"otp-button",className:"button",variant:"contained",color:"primary",onClick:s,children:"Submit Bid"})})]})},I=a.p+"static/media/vahakLogo.ec5e3409.PNG",F=function(e){var t=e.history,a=Object(n.useState)(""),r=Object(o.a)(a,2),s=r[0],i=r[1];return Object(n.useEffect)((function(){!function(){switch(t.location.pathname){case"/":case"/home":case"/step-one":i("Place Your Bid (1/4 step)");break;case"/step-two":i("Place Your Bid (2/4 step)");break;case"/step-three":i("Place Your Bid (3/4 step)");break;case"/step-four":i("Place Your Bid (4/4 step)")}}()}),[e.match]),Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{className:"logo",src:I}),Object(f.jsx)("div",{className:"step-name",children:s})]})};var q=function(e){var t=e.history;return Object(f.jsxs)("div",{className:"not-found-container",children:[Object(f.jsx)("div",{className:"not-found-message",children:"It seems that you are lost."}),Object(f.jsx)("button",{className:"not-found-button",onClick:function(){t.push("/home")},children:"Home"})]})},R=(a(235),r.a.createContext());var U=function(){var e=Object(n.useState)(JSON.parse(sessionStorage.getItem("biddingData"))||{isLoading:!1,biddingAmount:0}),t=Object(o.a)(e,2),a=t[0],r=t[1];return Object(f.jsx)("div",{className:"app",children:Object(f.jsxs)(R.Provider,{value:{biddingData:a,setBiddingData:r},children:[Object(f.jsxs)(d.a,{children:[Object(f.jsx)(u.a,{render:function(e){return Object(f.jsx)(F,Object(c.a)({},e))}}),Object(f.jsxs)(u.c,{children:[Object(f.jsx)(u.a,{path:"/",exact:!0,render:function(e){return Object(f.jsx)(k,Object(c.a)({},e))}}),Object(f.jsx)(u.a,{path:"/home",exact:!0,render:function(e){return Object(f.jsx)(k,Object(c.a)({},e))}}),Object(f.jsx)(u.a,{path:"/step-one",exact:!0,render:function(e){return Object(f.jsx)(k,Object(c.a)({},e))}}),Object(f.jsx)(u.a,{path:"/step-two",exact:!0,render:function(e){return Object(f.jsx)(D,Object(c.a)({},e))}}),Object(f.jsx)(u.a,{path:"/step-three",exact:!0,render:function(e){return Object(f.jsx)(P,Object(c.a)({},e))}}),Object(f.jsx)(u.a,{path:"/step-four",exact:!0,render:function(e){return Object(f.jsx)(A,Object(c.a)({},e))}}),Object(f.jsx)(u.a,{render:function(e){return Object(f.jsx)(q,Object(c.a)({},e))}})]})]}),Object(f.jsx)(N,{isLoading:a.isLoading})]})})},J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,275)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),s(e),i(e)}))};i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(U,{})}),document.getElementById("root")),J()}},[[236,1,2]]]);
//# sourceMappingURL=main.bebbfb40.chunk.js.map