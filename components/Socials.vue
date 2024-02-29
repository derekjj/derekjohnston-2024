<template lang="pug">
.row
    .col.icons.text-center(v-for="social in socials")
        a.icons(:href="social.url")
            fa(:icon="['fab', social.icon]")
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
	name: 'SocialsComponent',
	data() {
		return {
			socials: [
				{
					icon: 'linkedin',
					url: 'https://www.linkedin.com/in/derekjjohnston/',
				},
				{ icon: 'github', url: 'https://github.com/derekjj' },
				{ icon: 'gitlab', url: 'https://gitlab.com/derekjj' },
			],
		}
	},
})
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
a {
	color: #999;
}
</style>
