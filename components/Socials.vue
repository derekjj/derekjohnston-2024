<template lang="pug">
.row
	.col.icons.text-center(v-for="social in socials")
		a.icons(:href="social.url")
			font-awesome-icon(:icon="['fab',social.icon]" :color="social.color")
</template>

<script>
export default {
	name: 'SocialsComponent',
	data() {
		return {
			socials: [
				{
					icon: 'linkedin',
					url: 'https://www.linkedin.com/in/derekjjohnston/',
					color: '#0077b5',
				},
				{
					icon: 'github',
					url: 'https://github.com/derekjj',
					color: '#999',
				},
				{
					icon: 'gitlab',
					url: 'https://gitlab.com/derekjj',
					color: '#fc6d26',
				},
			],
		}
	},
}
</script>

<style scoped>
.brand-img {
	height: 600px;
	width: 100%;
}
.splash {
	height: 600px;
	background-size: 100% auto;
}
</style>
