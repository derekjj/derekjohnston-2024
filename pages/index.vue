<template lang="pug">
.container-fluid
	section(ref="home" id="home")
		.row.splash(id="home")
			header.p-5.header
				.container
					.header-content
						Socials.p-2
						h4.header-subtitle {{ about.intro }}
						h1.header-title {{ about.firstName }} {{ about.lastName }}
						h6.header-mono {{ about.title }}
						br
						ResumeBtn
	Header
	section(ref="about" id="about")
		About
	section(id="resume" ref="resume")
		Resume
	// TODO: Portfolio
	//- section(id="portfolio" ref="portfolio")
	//- 	Portfolio
	section(id="references" ref="references")
		References
	section(id="break-down" ref="break-down")
		BreakDown
	section(id="contact" ref="contact")
		Contact
	//- Testing
</template>

<script>
import backgroundUrl from '~/assets/tech-bg.jpg'
import jsonAbout from '@/assets/about.json'
export default {
	data() {
		return { backgroundUrl, about: jsonAbout.about }
	},
}
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
	background-image: linear-gradient(
			to top,
			rgba(0, 0, 0, 0.7),
			rgba(0, 0, 0, 0.7)
		),
		url(~/assets/tech-bg.jpg);
}
.header-content {
	width: fit-content;
	button {
		color: #fff;
		background-color: #f63750;
		border-color: #fff;
	}
	button:hover {
		color: #fff;
		background-color: #f63750;
		border-color: #f62b45;
	}
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
}
.selected {
	.option {
		background-color: #ccc;
	}
	hr {
		background-color: unset;
	}
}

/* Bootstrap classes missing */
.d-none {
	display: none !important;
}
/* Small Screen */
@media (min-width: 576px) {
	.d-sm-block {
		display: block !important;
	}
	.d-sm-none {
		display: none !important;
	}
}
/* Medium Screen */
@media (min-width: 768px) {
	.d-md-block {
		display: block !important;
	}
	.d-md-none {
		display: none !important;
	}
}
/* Large Screen */
@media (min-width: 992px) {
	.d-lg-block {
		display: block !important;
	}
	.d-lg-none {
		display: none !important;
	}
}
</style>
