(window.webpackJsonp=window.webpackJsonp||[]).push([[7,8,10,16],{338:function(t,e,o){var content=o(341);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(76).default)("5df09797",content,!0,{sourceMap:!1})},339:function(t,e,o){var content=o(348);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(76).default)("35093ca6",content,!0,{sourceMap:!1})},340:function(t,e,o){"use strict";o(338)},341:function(t,e,o){var n=o(75)((function(i){return i[1]}));n.push([t.i,".brand-img[data-v-73eb19f6]{height:600px;width:100%}.splash[data-v-73eb19f6]{background-size:100% auto;height:600px}a[data-v-73eb19f6]{color:#999}",""]),n.locals={},t.exports=n},342:function(t,e,o){"use strict";o.r(e);var n=o(9).default.extend({name:"SocialsComponent",data:function(){return{socials:[{icon:"linkedin",url:"https://www.linkedin.com/in/derekjjohnston/"},{icon:"github",url:"https://github.com/derekjj"},{icon:"gitlab",url:"https://gitlab.com/derekjj"}]}}}),c=(o(340),o(74)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"row"},t._l(t.socials,(function(t){return e("div",{staticClass:"col icons text-center"},[e("a",{staticClass:"icons",attrs:{href:t.url}},[e("fa",{attrs:{icon:["fab",t.icon]}})],1)])})),0)}),[],!1,null,"73eb19f6",null);e.default=component.exports},343:function(t,e,o){"use strict";o.r(e);var n=o(9).default.extend({name:"ResumeButtonComponent",methods:{openPDF:function(){window.open("/Resume Derek Johnston -phone.pdf","_blank")}}}),c=o(74),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("button",{staticClass:"btn btn-outline-danger",on:{click:t.openPDF}},[e("fa",{attrs:{icon:["fas","print"]}}),t._v(" Download my CV ")],1)}),[],!1,null,"bd636cb2",null);e.default=component.exports},346:function(t,e,o){"use strict";o.r(e);var n=o(9).default.extend({name:"ContactInfoComponent",props:{location:{type:Boolean,default:!0}},data:function(){return{info:[{type:"Email",data:"derek@derekjohnston.ca"},{type:"Cell",data:"+1 (905) 926-8279"},{type:"Location",data:"Durham Region, Ontario, Canada"},{type:"Open to",data:"Remote or local work"}]}}}),c=(o(347),o(74)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[t._l(t.info,(function(data,o){return"Location"!==data.type||t.location?e("div",{key:o,staticClass:"row"},[e("div",{staticClass:"col-4 text-nowrap"},[e("b",[t._v(t._s(data.type)+" :  ")])]),e("div",{staticClass:"col-8"},[t._v(t._s(data.data))])]):t._e()})),e("Socials"),e("div",{staticClass:"row py-2"},[e("div",{staticClass:"col text-center"},[e("ResumeBtn")],1)])],2)}),[],!1,null,"4dad6e44",null);e.default=component.exports;installComponents(component,{Socials:o(342).default,ResumeBtn:o(343).default})},347:function(t,e,o){"use strict";o(339)},348:function(t,e,o){var n=o(75)((function(i){return i[1]}));n.push([t.i,".brand-img[data-v-4dad6e44]{height:600px;width:100%}.splash[data-v-4dad6e44]{background-size:100% auto;height:600px}.row[data-v-4dad6e44]{margin-top:20px}",""]),n.locals={},t.exports=n},350:function(t,e,o){"use strict";(function(t){var n=o(9),c=o(346);e.a=n.default.extend({name:"ContactComponent",components:{Info:c.default},head:function(){var e=t.env.TOKEN_GOOGLE;return!window.google&&{script:[{src:"https://maps.googleapis.com/maps/api/js?libraries=places&key=".concat(e)}]}}})}).call(this,o(181))},360:function(t,e,o){var content=o(372);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(76).default)("49d9945d",content,!0,{sourceMap:!1})},371:function(t,e,o){"use strict";o(360)},372:function(t,e,o){var n=o(75)((function(i){return i[1]}));n.push([t.i,'.row[data-v-7c448902]{align-items:center;position:relative}.contact .map[data-v-7c448902]{height:100%;left:0;position:absolute;top:0;width:100%}.contact[data-v-7c448902]{align-items:center;display:flex;justify-content:center;min-height:700px;padding:40px 0;position:relative}.contact .contact-form-card[data-v-7c448902],.contact .contact-info-card[data-v-7c448902]{background:#fff;min-height:300px;padding:35px}.contact .contact-title[data-v-7c448902]:after{background:#f85c70;content:"";display:block;height:2px;margin-top:10px;width:20px}.container[data-v-7c448902]{max-width:1140px}',""]),n.locals={},t.exports=n},384:function(t,e,o){"use strict";o.r(e);var n=o(350).a,c=(o(371),o(74)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"row contact"},[t._m(0),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[t._m(1),e("div",{staticClass:"col-md-12 col-lg-4"},[e("div",{staticClass:"contact-info-card"},[e("h4",{staticClass:"contact-title"},[t._v("Get in touch ")]),e("Info",{attrs:{location:!1}})],1)])])])])}),[function(){var t=this._self._c;this._self._setupProxy;return t("div",{staticClass:"map"},[t("iframe",{staticStyle:{border:"0"},attrs:{width:"100%",height:"100%",loading:"lazy",allowfullscreen:"",referrerpolicy:"no-referrer-when-downgrade",src:"https://www.google.com/maps/embed/v1/place?key=AIzaSyDpRStcC8FVyAC3QE43Yd4q3m_ucJaQxh8&q=Durham+Region,Ontario"}})])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"col-lg-8"},[e("div",{staticClass:"contact-form-card"},[e("h4",{staticClass:"contact-title"},[t._v("Send a message")]),e("form",{attrs:{action:"https://formspree.io/f/derek@derekjohnston.ca",method:"post"}},[e("div",{staticClass:"form-group"},[e("input",{staticClass:"form-control",attrs:{type:"text",id:"name",name:"name",placeholder:"Name *",required:""}})]),e("div",{staticClass:"form-group"},[e("input",{staticClass:"form-control",attrs:{type:"email",id:"email",name:"email",placeholder:"Email *",required:""}})]),e("div",{staticClass:"form-group"},[e("input",{staticClass:"form-control",attrs:{type:"text",id:"subject",name:"subject",placeholder:"Subject *",required:""}})]),e("div",{staticClass:"form-group"},[e("textarea",{staticClass:"form-control",attrs:{placeholder:"Message *",id:"message",name:"message",rows:"7",required:""}})]),e("div",{staticClass:"form-group"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v(" Send Message ")])])])])])}],!1,null,"7c448902",null);e.default=component.exports}}]);