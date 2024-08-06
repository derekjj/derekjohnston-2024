<template lang="pug">            
.sticky-top
	nav.navbar.navbar-expand-md.navbar-light.bg-white.affix(data-spy="affix" data-offset-top="510" toggleable="lg")
		a.navbar-brand.d-flex.d-md-none
			.row
				img.brand-img.small(src="~/assets/me2.jpg" alt="Display Picture")
				.col
					.h5.brand-title Derek Johnston
					.brand-subtitle Full Stack / Mobile Developer 
		//- TODO: Fix this for mobile
		button.navbar-toggler(type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
            @click="visible=!visible")
			span.navbar-toggler-icon
		.navbar-collapse(id="navbarSupportedContent" :class="!visible?'collapse':''")
			ul.w-100.navbar-nav
				li.nav-item
					a.nav-link(:class="visibleSections.includes('home') && 'active'"
						@click="section='home'" href="#home") Home
				li.nav-item
					a.nav-link(:class="visibleSections.includes('about') && 'active'" 
						@click="section='about'" href="#about") About
			ul.w-100.navbar-nav.d-sm-none.d-md-block.text-center(:class="{ faded: isScrolled }")
				Transition(mode="out-in")
					img.brand-img(src="~/assets/me2.jpg" alt="Display Picture" v-if="!isScrolled")
					.fadedContent(v-else)
						.h5.brand-title Derek Johnston
						.brand-subtitle Full Stack / Mobile Developer
			ul.w-100.navbar-nav
				//- mobile
				li.w-100.nav-item.d-md-none.d-flex
					a.nav-link(:class="visibleSections.includes('resume') && 'active'" 
						@click="section='resume'" right href="#resume") Resume
				//- desktop
				li.w-100.nav-item.text-end.d-sm-none.d-md-block
					a.nav-link(:class="visibleSections.includes('resume') && 'active'" 
						@click="section='resume'" right href="#resume") Resume
				//- li.nav-item(href="#portfolio")
				//- 	a.nav-link(:class="visibleSections.includes('portfolio') && 'active'" 
				//- 	@click="section='portfolio'" right) Portfolio
				li.nav-item
					a.nav-link(:class="visibleSections.includes('contact') && 'active'" 
						@click="section='contact'" right href="#contact") Contact
</template>

<script>
export default {
	name: 'HeaderComponent',
	data() {
		return {
			isScrolled: false,
			calculateOpacity: '100%',
			section: '',
			sections: [],
			intersectionObserver: null,
			visibleSections: [],
			visible: false,
		}
	},
	mounted() {
		// Attach a scroll event listener when the component is mounted
		window.addEventListener('scroll', this.handleScroll)

		// Use nextTick to ensure that the DOM has been updated
		this.loadSections()
		this.intersectionObserver = new IntersectionObserver(
			this.handleIntersection
		)
	},
	beforeUnmount() {
		// Remove the scroll event listener when the component is destroyed to avoid memory leaks
		window.removeEventListener('scroll', this.handleScroll)

		this.sections.forEach((section) => {
			this.intersectionObserver.unobserve(section)
		})
	},
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

					// TODO: not working all the time, if it doesn't leave the view port it won't re add
					// window.history.pushState({}, '', '/#' + entry.target.id)
					// this.$ga.page(entry.target.id)
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
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
	opacity: 0;
}
.sticky-top {
	margin-left: -12px;
	margin-right: -12px;
}
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
a.active {
	color: #f85c70 !important;
}
.navbar-collapse.collapse.show {
	background-color: #fff;
	box-shadow: 0 1px 10px rgba(54, 54, 54, 0.18);
}
.navbar-collapse {
	background-color: #fff;
}
</style>
