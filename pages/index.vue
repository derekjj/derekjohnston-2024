<template lang="pug">
.container-fluid
	section(ref="home" id="home")
		.row.splash(id="home" :style="{ backgroundImage: 'linear-gradient(to top,rgba(0,0,0,.7),rgba(0,0,0,.7)),url(' + require('@/assets/tech-bg.jpg') + ')' }")
			header.p-5.header
				.container
					Socials.p-2
					.header-content
						h4.header-subtitle Hello, I am
						h1.header-title Derek Johnston
						h6.header-mono Lead Fullstack Developer (Generalist)
						br
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

<style scoped>
.splash {
	position: relative;
	height: 100vh;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-attachment: fixed;
	color: #fff;
}
</style>

<style>
html {
	scroll-behavior: smooth;
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
.card .card-header {
	background: 0 0;
	border: none;
}
.progress-bar {
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-webkit-flex-direction: column;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	-ms-flex-pack: center;
	justify-content: center;
	color: #fff;
	text-align: center;
	white-space: nowrap;
	background-color: #f85c70;
	-webkit-transition: width 0.6s ease;
	transition: width 0.6s ease;
}
.bg-danger {
	background-color: #f85c70 !important;
}
.progress {
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	height: 0.3rem;
	overflow: hidden;
	font-size: 0.75rem;
	background-color: #eaf0fc;
	border-radius: 0.25rem;
}
.section {
	padding: 80px 0;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	overflow: hidden;
	font-size: 0.75rem;
	background-color: #eaf0fc;
	border-radius: 0.25rem;
}
.selected {
	div {
		background-color: #ccc;
		/* border-radius: 3%; */
		margin-top: 10px;
	}
	hr {
		background-color: unset;
	}
}
</style>
