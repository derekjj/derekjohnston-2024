<template lang="pug">            
.sticky-top
	b-nav.navbar.navbar-expand-md.navbar-light.bg-white.affix(data-spy="affix" data-offset-top="510" toggleable="lg")
		b-navbar-brand.d-flex.d-md-none.row
			img.brand-img.small(src="~/assets/me2.jpg" alt="Display Picture")
			.col
				.h5.brand-title Derek Johnston
				.brand-subtitle Full Stack / Mobile Developer 
		b-navbar-toggle.ml-auto(target="nav-collapse")
		b-collapse(id="nav-collapse" is-nav)
			b-navbar-nav
				b-nav-item(href="#home" )
					div(:class="visibleSections.includes('home') && 'active'"
						@click="section='home'") Home
				b-nav-item(href="#about")
					div(:class="visibleSections.includes('about') && 'active'" 
						@click="section='about'") About
			b-navbar-nav.ml-auto.d-sm-none.d-md-block(:class="{ faded: isScrolled }")
				img.brand-img(src="~/assets/me2.jpg" alt="Display Picture" v-if="!isScrolled"
					:style="{ opacity: calculateOpacity }")
				.fadedContent(v-if="isScrolled")
					.h5.brand-title.text-center Derek Johnston
					.brand-subtitle Full Stack / Mobile Developer
			b-navbar-nav.ml-auto
				b-nav-item(href="#resume")
					div(:class="visibleSections.includes('resume') && 'active'" 
					@click="section='resume'" right) Resume
				b-nav-item(href="#contact")
					div(:class="visibleSections.includes('contact') && 'active'" 
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
			sections: [],
			intersectionObserver: null,
			visibleSections: [],
		}
	},
	mounted() {
		// Attach a scroll event listener when the component is mounted
		window.addEventListener('scroll', this.handleScroll)

		// Use nextTick to ensure that the DOM has been updated
		this.loadSections()
	},
	beforeDestroy() {
		// Remove the scroll event listener when the component is destroyed to avoid memory leaks
		window.removeEventListener('scroll', this.handleScroll)

		this.sections.forEach((section) => {
			this.intersectionObserver.unobserve(section)
		})
	},
	created() {
		this.intersectionObserver = new IntersectionObserver(
			this.handleIntersection
		)
	},
	updated() {},
	methods: {
		loadSections() {
			this.$nextTick(() => {
				this.sections = Array.from(document.querySelectorAll('section'))
				this.sections.forEach((section) => {
					this.intersectionObserver.observe(section)
				})
			})
		},
		handleIntersection(entries) {
			const visible = this.visibleSections
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Perform actions when section enters the viewport
					visible.push(entry.target.id)
				} else {
					const index = visible.indexOf(entry.target.id)
					if (index > -1) {
						// only splice array when item is found
						visible.splice(index, 1)
					}
				}
			})
			this.visibleSections = visible
		},
		handleScroll() {
			const FadeStart = window.innerHeight * 0.7
			const FadeEnd = window.innerHeight
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

			// in scrolling area
			if (scrollPosition >= FadeEnd) {
				if (!this.isScrolled) {
					this.isScrolled = true
				} else {
					this.calculateOpacity = scrollPosition - FadeEnd
				}
			} else if (this.isScrolled) {
				// if out
				this.isScrolled = false
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
}
.brand-img.small {
	border-radius: 50%;
	box-shadow: none;
	width: auto;
	height: 50px;
	border: 0px;
	margin-left: 10px;
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
.brand-title {
	margin-bottom: 0px;
}
.brand-subtitle {
	font-size: 12px;
	color: #888;
}
.navbar {
	display: flex;
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
