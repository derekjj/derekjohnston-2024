<template lang="pug">
.container-fluid
    .row.splash(id="home" :style="{ backgroundImage: 'linear-gradient(to top,rgba(0,0,0,.7),rgba(0,0,0,.7)),url(' + require('@/assets/tech-bg.jpg') + ')' }")
        header.p-5.header
            .container
                Socials.p-2
                .header-content
                    h4.header-subtitle Hello, I am
                    h1.header-title Derek Johnston
                    h6.header-mono Lead Fullstack Developer (Generalist)
                    ResumeBtn
    Header
    About
    Resume
    // TODO: Portfolio
    //- Portfolio
    BreakDown
    Contact
    //- Testing
</template>

<script>
import Vue from 'vue'
import Info from '~/components/Contact/Info'

export default Vue.extend({
	name: 'IndexPage',
	components: {
		Info,
	},
})
</script>

<style>
html {
	scroll-behavior: smooth;
}
.splash {
	height: 600px;
	background-size: 100% auto;
	background-attachment: fixed;
}
.col.about {
	margin-left: 10px;
	padding: 60px;
	border-right: 1px solid #dee2e6;
}
.col.exp {
	margin-left: 10px;
	padding: 60px;
	border-right: 1px solid #dee2e6;
	border-right: none;
}
.row.about {
	padding: 40px 0;
	border-top: 1px solid #dee2e6;
	border-bottom: 1px solid #dee2e6;
}
.row.splash {
	position: relative;
	height: 80vh;
	min-height: 600px;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-attachment: fixed;
	color: #fff;
}
.social-icons {
	list-style-type: none;
	padding-left: 0;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: justify;
	-webkit-justify-content: space-between;
	-ms-flex-pack: justify;
	justify-content: space-between;
	max-width: 180px;
}
.btn-primary:hover {
	color: #fff;
	background-color: #f63750;
	border-color: #f62b45;
}
.btn-primary {
	color: #fff;
	background-color: #f85c70;
	border-color: #f85c70;
}
.btn-rounded {
	margin-top: 20px;
	border-radius: 100px;
}
.line {
	display: block;
	width: 25px;
	height: 1.5px;
	background-color: #f85c70;
}
.card {
	.row {
		margin-left: 0px;
		margin-right: 0px;
		.col {
			padding: 0px;
		}
	}
}
</style>
