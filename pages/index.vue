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
