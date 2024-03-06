<template>
	<div ref="fadeInElement" class="fade-in">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		rate: {
			type: String,
			default: '0.8s',
		},
	},
	mounted() {
		// Options for the IntersectionObserver
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.3,
		}

		// Callback function for the IntersectionObserver
		const callback = (entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					this.$refs.fadeInElement.classList.add('fade-in-active')
					observer.unobserve(entry.target) // Stop observing once the element is visible
				}
			})
		}

		// Create a new IntersectionObserver
		const observer = new IntersectionObserver(callback, options)
		observer.observe(this.$refs.fadeInElement) // Start observing the element
	},
}
</script>

<style>
.fade-in {
	opacity: 0;
	transition: opacity v-bind(rate) ease-in-out;
}

.fade-in-active {
	opacity: 1;
}
</style>
