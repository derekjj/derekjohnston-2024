<template lang="pug">
div
	.row(v-for="(data, index) in info" :key="index" )
		.col-4.text-nowrap 
			b {{data.type}} : &nbsp;
		.col-8 {{data.data}}
	Socials
	.row.py-2
		.col.text-center
			ResumeBtn
</template>

<script>
import about from '~/assets/about.json'
export default {
	name: 'ContactInfoComponent',
	data() {
		return {
			info: [
				{ type: 'Email', data: about.about.email },
				{ type: 'Cell', data: about.about.cell },
				{ type: 'Location', data: about.about.location },
				{ type: 'Open to', data: about.about.lookingFor },
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
.row {
	margin-top: 20px;
}
</style>
