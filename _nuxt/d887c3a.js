(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{337:function(e){e.exports=JSON.parse('{"about":{"intro":"Hello, I am","firstName":"Derek","lastName":"Johnston","title":"Lead Fullstack Developer (Generalist)"},"eds":[{"school":"Durham College","title":"Computer Programmer Analyst","dates":"2018","description":"I hold a three-year advanced diploma in Computer Programmer Analyst, with my final project focusing on leading a partnership to develop a mobile communication application for verbally limited individuals. This project utilized Xamarin for its cross-platform compatibility. Throughout the program, I gained proficiency in various technologies including PHP, ASP, Java, COBOL, SQL, MySQL, C#, C++, Visual Basic, QBasic, VISIO, Ubuntu, MS PowerPoint, Dreamweaver, MS FrontPage, phpMyAdmin, MS Project, MS Access, Android Studio, MS Excel, Visual Studio, and MS Word."}],"exps":[{"startDate":"Sat May 01 2021 00:00:00 GMT-0400 (Eastern Daylight Time)","endDate":"Sun Oct 01 2023 00:00:00 GMT-0400 (Eastern Daylight Time)","icon":"fa-solid fa-cubes-stacked","title":"Lead Full-Stack Developer","employer":"YHP","descriptionOld":"As the go-to problem solver, I tackled development roadblocks swiftly, ensuring project continuity. I led code base enhancements, improving team skills and delivering quality solutions. I evaluated task feasibility, offered alternatives, and facilitated collaboration on technical challenges. I provided accurate work estimations, guided team growth through coaching, and managed multiple projects efficiently. I oversaw merging and deployment, upgraded library dependencies, and conducted employee reviews. I led technical interviews and focused on aligning development efforts with YHP\'s strategic goals, primarily within the Wonderlab suite.","description":"Starting with a small team, I spearheaded the expansion efforts, progressively growing it to over 5 times its original size. Alongside team augmentation, I adeptly managed external resources to supplement our in-house capabilities, ensuring seamless integration and maximizing overall productivity. As the go-to problem solver, I tackled development roadblocks swiftly, ensuring project continuity. I led code base enhancements, improving team skills and delivering quality solutions. I evaluated task feasibility, offered alternatives, and facilitated collaboration on technical challenges. I provided accurate work estimations, guided team growth through coaching, and managed multiple projects efficiently. I oversaw merging and deployment, upgraded library dependencies, and conducted employee reviews. I led technical interviews and focused on aligning development efforts with YHP\'s strategic goals, primarily within the Wonderlab suite.","roles":["Lead Full-Stack Developer","Frontend Developer","Backend Developer"],"skills":["Microsoft Azure","TypeScript","Express.js","React.js","GatsbyJS","PHP","Next.js","Docker Products","SASS","Redux.js","Leadership","Node.js","Git","JavaScript","Amazon Web Services (AWS)","Symfony Framework","Tailwind CSS"]},{"startDate":"Sun Dec 01 2019 00:00:00 GMT-0500 (Eastern Standard Time)","endDate":"Sat May 01 2021 00:00:00 GMT-0400 (Eastern Daylight Time)","icon":"fa-solid fa-laptop","employer":"JSD","title":"Freelance","description":"Providing development consulting services primary with web and mobile development.","roles":["Frontend Developer","Mobile Developer"],"skills":["TypeScript","Express.js","Flutter","iOS","React.js","PHP","Next.js","Docker Products","SASS","Redux.js","Leadership","Vue.js","Node.js","Android","Nuxt.js","JavaScript","Amazon Web Services (AWS)","Git","Java"]},{"startDate":"Sun Apr 01 2018 00:00:00 GMT-0500 (Eastern Standard Time)","endDate":"Sun Sep 01 2019 00:00:00 GMT-0400 (Eastern Daylight Time)","employer":"E-data Now!","title":"Software Developer","description":"Worked as a Software Craftsman for “E-Data Now!” (EDN) product. EDN is a near real time data collection system. The primary use case is inspection and auditing in the automotive industry. Typically a user will perform audits using EDN Client (iOS/Swift/C++) and enter their Time sheet’s using EDN Time (Flutter/Dart). The data is pushed up to a Rails API, where it’s presented to the Web Administrators using a cutting edge Nuxt.js/Vue.js frontend stack. I had the opportunity to write code for the frontend, and backend while assisting with mobile bug fixes. Beyond my developer duties, I maintained test plans and test cases for the entire suite of EDN products. While performing testing duties, I was also mandated to write automated and load tests.","roles":["Frontend Developer","Backend Developer","Mobile Developer"],"skills":["Flutter","iOS","SASS","Ruby on Rails","Vue.js","Android","Nuxt.js","JavaScript","Amazon Web Services (AWS)","Java","Git","PostgreSQL"]},{"startDate":"Mon May 01 2017 00:00:00 GMT-0400 (Eastern Daylight Time)","endDate":"Mon Apr 01 2019 00:00:00 GMT-0400 (Eastern Daylight Time)","dates":"Dec 2019 - May 2021","employer":"Oiika","title":"Software Engineer","description":"Oiika was a web platform where passionate tutors and mentors share their knowledge with other individuals. (Mainly on the frontend) I worked on many random parts of this project, tasks grabbed from a ticket pool.","roles":["Mobile Developer","Frontend Developer"],"skills":["TypeScript","Express.js","React.js","ReactNative","SASS","Git","Node.js","JavaScript"]}],"volunteers":[{"startDate":"Sat Nov 01 2023 00:00:00 GMT-0400 (Eastern Daylight Time)","endDate":"","icon":"fa-solid fa-cubes-stacked","employer":"Virtual Coffee","title":"Room Leader","description":"Science and Technology","roles":[],"skills":[]},{"startDate":"Sun Mar 01 2023 00:00:00 GMT-0500 (Eastern Standard Time)","endDate":"","icon":"fa-solid fa-laptop","employer":"Virtual Coffee","title":"Community member","description":"Science and Technology","roles":["Frontend Developer","Mobile Developer"],"skills":[]},{"startDate":"Sun Apr 01 2020 00:00:00 GMT-0500 (Eastern Standard Time)","endDate":"Sun May 01 2020 00:00:00 GMT-0400 (Eastern Daylight Time)","employer":"Crown International","title":"Frontend Developer","description":"Science and Technology","roles":[],"skills":[]},{"startDate":"Mon Mar 01 2020 00:00:00 GMT-0400 (Eastern Daylight Time)","endDate":"Mon Sep 01 2020 00:00:00 GMT-0400 (Eastern Daylight Time)","employer":"Mintbean","title":"Hackathon Lead","description":"Science and Technology","roles":[],"skills":[]}],"roles":[{"icon":"fa-solid fa-cubes-stacked","title":"Lead Full-Stack Developer"},{"icon":"fa-solid fa-laptop","title":"Frontend Developer"},{"icon":"fa-solid fa-code","title":"Backend Developer"},{"icon":"fa-solid fa-mobile-screen","title":"Mobile Developer"}]}')},381:function(e,t,o){"use strict";o.r(t);o(5),o(61),o(182);var n=o(9),r=o(337),l=n.default.extend({name:"ResumeWorkComponent",props:{setSelectedJobs:{type:Function,default:-1},selectedJobs:{type:Number,default:-1}},data:function(){return{exps:r.exps,eds:r.eds,ALL_JOBS:-1}},methods:{getMonthDay:function(e){var t=new Date(e).toLocaleString("en-US",{month:"short",year:"numeric"});return"Invalid Date"!==t?t:" "}}}),d=o(74),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"card"},[t("div",{staticClass:"card-header"},[t("div",{staticClass:"row"},[e._m(0),t("div",{staticClass:"col text-right"},[t("a",{on:{click:function(t){return e.setSelectedJobs(e.ALL_JOBS)}}},[e._v("clear selected")])])])]),t("div",{staticClass:"card-body"},e._l(e.exps,(function(o,i){return t("div",{class:e.selectedJobs>=i&&"selected",on:{click:function(t){return e.setSelectedJobs(i)}}},[t("div",{staticClass:"p-2"},[t("h6",{staticClass:"title text-danger"},[e._v(e._s(e.getMonthDay(o.startDate))+" - "+e._s(e.getMonthDay(o.endDate)))]),t("div",{staticClass:"row"},[t("div",{staticClass:"col"},[t("b",[e._v(e._s(o.title))])]),t("div",{staticClass:"col text-right"},[t("b",[e._v(e._s(o.employer))])])]),t("p",{staticClass:"subtitle text-justify"},[e._v(e._s(o.description)+" ")])]),i<e.exps.length-1?t("hr"):e._e()])})),0)])}),[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"col"},[t("h4",[e._v("Expertise")]),t("span",{staticClass:"line"})])}],!1,null,"7112321e",null);t.default=component.exports}}]);