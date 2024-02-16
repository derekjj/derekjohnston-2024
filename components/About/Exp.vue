<template lang="pug">
.card
    .card-header.py-2
        .mt-2 
            h2 My Experience
            span.line
    .card-body
      .row.my-2(v-for="(role, index) in roles" :key="index")
        .col-2.text-danger.pt-2.text-center
          fa(:icon="role.icon")
        .col-10
          .row
            .col-12 
              h6 {{ role.title }}
            .col-6.text-center(v-for="(exp, i) in exps" :key="i" v-if="exp.roles.includes(role.title)")
              .subtitle {{ exp.employer }}
        .col-12(v-if="index < roles.length - 1")
          hr
</template>

<script>
import Vue from 'vue'
import json from '~/assets/experience.json'

export default Vue.extend({
	name: 'IndexPage',
	data() {
		return {
			exps: json.exps,
			roles: [
				{
					icon: 'fa-solid fa-cubes-stacked',
					title: 'Lead Full-Stack Developer',
				},
				{
					icon: 'fa-solid fa-laptop',
					title: 'Frontend Developer',
				},
				{
					icon: 'fa-solid fa-code',
					title: 'Backend Developer',
				},
				{
					icon: 'fa-solid fa-mobile-screen',
					title: 'Mobile Developer',
				},
			],
		}
	},
	methods: {
		getExperiences(roleTitle) {
			const expRole = this.exps?.roles?.find(
				(role) => role.title === roleTitle
			)
			return expRole ? expRole.exps.map((exp) => exp.title) : []
		},
	},
})
</script>

<style scoped>
.card {
	border-width: 0px;
	.card-header {
		background: 0 0;
		border: none;
		padding: 0px;
	}
	.card-body {
		border: none;
		padding: 0px;
	}
}
svg {
	font-size: 30px;
}
.subtitle {
	font-size: 12px;
}
</style>
