(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{349:function(t,e,n){t.exports=n.p+"img/me2.01edcac.jpg"},350:function(t,e,n){var content=n(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(76).default)("0aa40066",content,!0,{sourceMap:!1})},360:function(t,e,n){"use strict";n(350)},361:function(t,e,n){var o=n(75)((function(i){return i[1]}));o.push([t.i,'.brand-img[data-v-10067ecc]{background-color:#fff;border:10px solid #fff;border-radius:50%;box-shadow:0 5px 1px hsla(0,0%,50%,.13);width:170px}.brand-img.small[data-v-10067ecc]{border:0;border-radius:50%;box-shadow:none;height:50px;margin-left:10px;width:auto}.faded[data-v-10067ecc]{overflow:hidden;position:relative}.fadedContent[data-v-10067ecc]{align-items:center;background-color:#fff;color:#000;justify-content:center;z-index:2}.brand-title[data-v-10067ecc]{margin-bottom:0}.brand-subtitle[data-v-10067ecc]{color:#888;font-size:12px}.navbar[data-v-10067ecc]{box-shadow:0 1px 10px rgba(54,54,54,.18);-webkit-box-shadow:0 1px 10px rgba(54,54,54,.18);display:flex;height:70px;margin-left:-15px;margin-right:-15px}a[data-v-10067ecc]{background-color:transparent;color:rgba(0,0,0,.8)!important;font-family:Dosis,"Open Sans",sans-serif!important;font-weight:700;-webkit-text-decoration:none!important;text-decoration:none!important}.nav-link[data-v-10067ecc]{display:block!important;padding:.5rem 1rem!important}.navbar .nav-link .active[data-v-10067ecc]{color:#f85c70!important}.navbar-collapse.collapse.show[data-v-10067ecc]{background-color:#fff;box-shadow:0 1px 10px rgba(54,54,54,.18)}',""]),o.locals={},t.exports=o},370:function(t,e,n){"use strict";n.r(e);n(77),n(114),n(67),n(183),n(1),n(46),n(4);var o=n(9).default.extend({name:"IndexPage",data:function(){return{isScrolled:!1,scrollPosition:0,calculateOpacity:"100%",section:"",sections:[],intersectionObserver:null,visibleSections:[]}},mounted:function(){var t=this;window.addEventListener("scroll",this.handleScroll),this.loadSections(),this.sections.forEach((function(section){t.intersectionObserver.observe(section)}))},beforeDestroy:function(){var t=this;window.removeEventListener("scroll",this.handleScroll),this.sections.forEach((function(section){t.intersectionObserver.unobserve(section)}))},created:function(){this.intersectionObserver=new IntersectionObserver(this.handleIntersection)},methods:{loadSections:function(){this.sections=Array.from(document.querySelectorAll("section"))},handleIntersection:function(t){var e=this.visibleSections;console.log("this.visibleSections",this.visibleSections),t.forEach((function(t){if(t.isIntersecting)console.log("entry.isIntersecting",t.target.id),e.push(t.target.id);else{var n=e.indexOf(t.target.id);n>-1&&e.splice(n,1)}})),this.visibleSections=e},handleScroll:function(){var t=.7*window.innerHeight,e=window.innerHeight,n=window.scrollY||document.documentElement.scrollTop;n>t&&n<e&&(this.calculateOpacity=100-(n-t)/(e-t)*100+"%"),n>=e?this.isScrolled?this.calculateOpacity=n-e:this.isScrolled=!0:this.isScrolled&&(this.isScrolled=!1,this.calculateOpacity="100%")}}}),c=(n(360),n(74)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"sticky-top"},[e("b-nav",{staticClass:"navbar navbar-expand-md navbar-light bg-white affix",attrs:{"data-spy":"affix","data-offset-top":"510",toggleable:"lg"}},[e("b-navbar-brand",{staticClass:"d-flex d-md-none row"},[e("img",{staticClass:"brand-img small",attrs:{src:n(349),alt:"Display Picture"}}),e("div",{staticClass:"col"},[e("div",{staticClass:"h5 brand-title"},[t._v("Derek Johnston")]),e("div",{staticClass:"brand-subtitle"},[t._v("Full Stack / Mobile Developer ")])])]),e("b-navbar-toggle",{staticClass:"ml-auto",attrs:{target:"nav-collapse"}}),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",[e("b-nav-item",{attrs:{href:"#home"}},[e("div",{class:t.visibleSections.includes("home")&&"active",on:{click:function(e){t.section="home"}}},[t._v("Home")])]),e("b-nav-item",{attrs:{href:"#about"}},[e("div",{class:t.visibleSections.includes("about")&&"active",on:{click:function(e){t.section="about"}}},[t._v("About")])])],1),e("b-navbar-nav",{staticClass:"ml-auto d-sm-none d-md-block",class:{faded:t.isScrolled}},[t.isScrolled?t._e():e("img",{staticClass:"brand-img",style:{opacity:t.calculateOpacity},attrs:{src:n(349),alt:"Display Picture"}}),t.isScrolled?e("div",{staticClass:"fadedContent"},[e("div",{staticClass:"h5 brand-title text-center"},[t._v("Derek Johnston")]),e("div",{staticClass:"brand-subtitle"},[t._v("Full Stack / Mobile Developer")])]):t._e()]),e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-nav-item",{attrs:{href:"#resume"}},[e("div",{class:t.visibleSections.includes("resume")&&"active",attrs:{right:""},on:{click:function(e){t.section="resume"}}},[t._v("Resume")])]),e("b-nav-item",{attrs:{href:"#contact"}},[e("div",{class:t.visibleSections.includes("contact")&&"active",attrs:{right:""},on:{click:function(e){t.section="contact"}}},[t._v("Contact")])])],1)],1)],1)],1)}),[],!1,null,"10067ecc",null);e.default=component.exports}}]);