<template lang="pug">            
div.sticky-top
    b-nav.navbar.navbar-expand-md.navbar-light.bg-white.affix(data-spy="affix" data-offset-top="510" toggleable="lg")
        b-navbar-brand.d-sm-block.d-md-none
            .h5.brand-title.text-center Derek Johnston
            .brand-subtitle Full Stack / Mobile Developer
        b-navbar-toggle.ml-auto(target="nav-collapse")
        b-collapse(id="nav-collapse" is-nav)
            b-navbar-nav
                b-nav-item(href="#home" )
                    div(:class="section === 'home' && 'active'"
                        @click="section='home'") Home
                b-nav-item(href="#about")
                    div(:class="section === 'about' && 'active'" 
                        @click="section='about'") About
            b-navbar-nav.ml-auto.d-sm-none.d-md-block(:class="{ faded: isScrolled }")
                img.brand-img(src="~/assets/me2.jpg" alt="Display Picture" v-if="!isScrolled"
                    :style="{ opacity: calculateOpacity }")
                .fadedContent(v-if="isScrolled")
                    .h5.brand-title.text-center Derek Johnston
                    .brand-subtitle Full Stack / Mobile Developer
            b-navbar-nav.ml-auto
                b-nav-item(href="#resume")
                    div(:class="section === 'resume' && 'active'" 
                    @click="section='resume'" right) Resume
                b-nav-item(href="#contact")
                    div(:class="section === 'contact' && 'active'" 
                    @click="section='contact'" right) Contact
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
	name: 'IndexPage',

	data() {
		return {
			isScrolled: false,
			scrollPosition: 0,
			calculateOpacity: '100%',
			section: '',
		}
	},
	mounted() {
		// Attach a scroll event listener when the component is mounted
		window.addEventListener('scroll', this.handleScroll)
		this.section = window.location.hash.substr(1)
	},
	beforeDestroy() {
		// Remove the scroll event listener when the component is destroyed to avoid memory leaks
		window.removeEventListener('scroll', this.handleScroll)
	},
	methods: {
		handleScrollView(event) {
			const target = event.target
			// Determine which section is in view based on its offset from the top
			const home = document.getElementById('home')
			const about = document.getElementById('about')
			const resume = document.getElementById('resume')
			const contact = document.getElementById('contact')
			if (this.isElementInViewport(home)) {
				this.section = 'home'
				console.log('section', 'home')
			} else if (this.isElementInViewport(about)) {
				this.section = 'about'
				console.log('section', 'about')
			} else if (this.isElementInViewport(resume)) {
				// TODO: FIX never fires!
				this.section = 'resume'
				console.log('section', 'resume')
			} else if (this.isElementInViewport(contact)) {
				this.section = 'contact'
				console.log('section', 'contact')
			}
		},
		isElementInViewport(el) {
			const rect = el.getBoundingClientRect()
			return (
				rect.top >= 0 &&
				rect.bottom <=
					(window.innerHeight ||
						document.documentElement.clientHeight)
			)
		},
		handleScroll(event) {
            // TODO: handleScrollView
			// this.handleScrollView(event)
			const FadeStart = 400
			const FadeEnd = 600
			// Update the scrollPosition data property when the page is scrolled
			const scrollPosition =
				window.scrollY || document.documentElement.scrollTop
			// Change the element when the scroll position crosses a certain thresholdF
			if (scrollPosition > FadeStart && scrollPosition < FadeEnd) {
				this.calculateOpacity =
					100 -
					((scrollPosition - FadeStart) / (FadeEnd - FadeStart)) *
						100 +
					'%'
			}
			if (scrollPosition > FadeEnd) {
				if (!this.isScrolled) {
					this.isScrolled = true
				}
				this.calculateOpacity = scrollPosition - FadeEnd
			} else if (this.isScrolled) {
				this.isScrolled = false
			} else if (scrollPosition < FadeStart) {
				this.calculateOpacity = '100%'
			}
		},
	},
})
</script>

<style scoped>
.brand-img {
	background-color: #fff;
	border-radius: 50%;
	box-shadow: 0 5px 1px rgba(128, 128, 128, 0.13);
	width: 170px;
	border: 10px solid #fff;
	/* transition: 0.5s !important; */
}
.faded {
	position: relative;
	overflow: hidden; /* Hide overflowing content */
}
.fadedContent {
	background-color: #fff;
	z-index: 2;
	justify-content: center;
	align-items: center;
	color: black;
}
.brand-subtitle {
	font-size: 13px;
	color: #888;
}
.navbar {
	box-shadow: 0 1px 10px rgba(54, 54, 54, 0.18);
	-webkit-box-shadow: 0 1px 10px rgba(54, 54, 54, 0.18);
	margin-left: -15px;
	margin-right: -15px;
	height: 70px;
}
a {
	text-decoration: none !important;
	background-color: transparent;
	font-weight: 700;
	font-family: Dosis, 'Open Sans', sans-serif !important;
	color: rgba(0, 0, 0, 0.8) !important;
}
.nav-link {
	display: block !important;
	padding: 0.5rem 1rem !important;
}
.navbar .nav-link .active {
	color: #f85c70 !important;
}
.navbar-collapse.collapse.show {
	background-color: #fff;
	box-shadow: 0 1px 10px rgba(54, 54, 54, 0.18);
}
</style>
