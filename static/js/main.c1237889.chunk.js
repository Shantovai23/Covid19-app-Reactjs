(this["webpackJsonpcovid19-tracker"]=this["webpackJsonpcovid19-tracker"]||[]).push([[0],{173:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(49),o=a.n(r),c=(a(57),a(2)),u=(a(58),a(50)),s=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row container-fluid mb-5"},l.a.createElement("div",{className:"col-md-8 mx-auto mt-5"},l.a.createElement(u.Line,{data:{labels:e.label.map((function(e){return e.substr(0,10)})),datasets:[{label:"Covid-19 Report",fill:!0,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:e.yaxis}]}}))))},i=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:" card"},e.children))},m=a(6),d=function(e){var t=e.totalConfirmed,a=e.totalRecovered,n=e.totalDeaths,r=e.totalNewConfirmed,o=e.totalNewDeaths,c=e.country,u=(new Date).toLocaleDateString();return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",null,l.a.createElement("h1",{style:{textTransform:"capitalize"}},""==c?"World Wide Covid-19 Report":c),l.a.createElement("h1",null,u),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm col-md-4 mx-auto",style:{justifyContent:"center"}},l.a.createElement(i,null,l.a.createElement("span",null,"Total Confirmed"),l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement(m.a,{value:t,displayType:"text",thousandSeparator:!0}))),l.a.createElement(i,null,l.a.createElement("span",null,"New Confirmed"),l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement(m.a,{value:r,displayType:"text",thousandSeparator:!0}))),l.a.createElement(i,null,l.a.createElement("span",null,"Total Recovered"),l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement(m.a,{value:a,displayType:"text",thousandSeparator:!0}))),l.a.createElement(i,null,l.a.createElement("span",null,"Total Deaths"),l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement(m.a,{value:n,displayType:"text",thousandSeparator:!0}))),l.a.createElement(i,null,l.a.createElement("span",null,"New Deaths"),l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement(m.a,{value:o,displayType:"text",thousandSeparator:!0}))))))))},p=a(51),E=a.n(p).a.create({baseURL:"https://api.covid19api.com/"});var b=function(){var e=Object(n.useState)(0),t=Object(c.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(0),u=Object(c.a)(o,2),i=u[0],m=u[1],p=Object(n.useState)(0),b=Object(c.a)(p,2),v=b[0],f=b[1],g=Object(n.useState)(0),h=Object(c.a)(g,2),y=h[0],C=h[1],j=Object(n.useState)(0),O=Object(c.a)(j,2),D=O[0],S=O[1],N=Object(n.useState)(!1),w=Object(c.a)(N,2),T=w[0],x=w[1],R=Object(n.useState)({}),k=Object(c.a)(R,2),B=k[0],L=k[1],F=Object(n.useState)(7),G=Object(c.a)(F,2),H=G[0],W=G[1],J=Object(n.useState)(""),Z=Object(c.a)(J,2),z=Z[0],A=Z[1],I=Object(n.useState)([]),M=Object(c.a)(I,2),U=M[0],Y=M[1],q=Object(n.useState)([]),K=Object(c.a)(q,2),P=K[0],Q=K[1];Object(n.useEffect)((function(){x(!0),E.get("/summary").then((function(e){x(!1),console.log(e),200===e.status&&(r(e.data.Global.TotalConfirmed),m(e.data.Global.TotalRecovered),f(e.data.Global.TotalDeaths),C(e.data.Global.NewConfirmed),S(e.data.Global.NewDeaths),L(e.data))})).catch((function(e){console.log(e)}))}),[]);var V=function(e){var t=new Date(e),a=t.getFullYear(),n="0".concat(t.getMonth()+1).slice(-2),l="0".concat(t.getDate()).slice(-2);return"".concat(a,"-").concat(n,"-").concat(l)},X=function(e,t,a){E.get("/country/".concat(e,"/status/confirmed?from=").concat(t,"T00:00:00Z&to=").concat(a,"T00:00:00Z")).then((function(t){console.log(t);var a=t.data.map((function(e){return e.Cases})),n=t.data.map((function(e){return e.Date})),l=B.Countries.find((function(t){return t.Slug===e}));r(l.TotalConfirmed),m(l.TotalRecovered),f(l.TotalDeaths),C(l.NewConfirmed),S(l.NewDeaths),Y(a),Q(n)})).catch((function(e){console.log(e)}))};return T?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"loader"}),l.a.createElement("h5",null,"Loading...")):l.a.createElement("div",{className:"App"},l.a.createElement(d,{totalConfirmed:a,totalRecovered:i,totalDeaths:v,totalNewConfirmed:y,totalNewDeaths:D,country:z}),l.a.createElement("div",null,l.a.createElement("select",{value:z,onChange:function(e){A(e.target.value);var t=new Date,a=V(t),n=V(t.setDate(t.getDate()-H));console.log(n,a),X(e.target.value,n,a)}},l.a.createElement("option",{value:""},"Select Country"),B.Countries&&B.Countries.map((function(e){return l.a.createElement("option",{key:e.Slug,value:e.Slug},e.Country)}))),l.a.createElement("select",{value:H,onChange:function(e){var t=new Date,a=V(t),n=V(t.setDate(t.getDate()-e.target.value));X(z,n,a),W(e.target.value)}},l.a.createElement("option",{value:"7"},"Last 7 days graph data"),l.a.createElement("option",{value:"30"},"Last 30 days graph data"),l.a.createElement("option",{value:"90"},"Last 90 days graph data"))),l.a.createElement("div",{className:"screen"},l.a.createElement(s,{yaxis:U,label:P})))};o.a.render(l.a.createElement(b,null),document.getElementById("root"))},52:function(e,t,a){e.exports=a(173)},57:function(e,t,a){},58:function(e,t,a){}},[[52,1,2]]]);
//# sourceMappingURL=main.c1237889.chunk.js.map