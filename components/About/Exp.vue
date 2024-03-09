<template lang="pug">
.card
	.card-header.py-2
		h2 My Experience
		span.line
	.card-body
		.row.my-2(v-for="(role, index) in roles" :key="index")
			.col-2.text-danger.pt-2.text-center
				font-awesome-icon(:icon="role.icon")
			.col-10
				.row.b
					.col-12(:class="index < roles.length - 1 && 'border-bottom'")
						h6.lh-lg.mt-1 {{ role.title }}
					.col-6.text-center(v-for="(exp, i) in exps" :key="i" v-if="exp?.roles.includes(role.title)")
						.subtitle {{ exp.employer }}
</template>

<script>
import json from '~/assets/about.json'

export default {
	name: 'AboutExpComponent',
	data() {
		return {
			exps: json.exps,
			roles: json.roles,
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
}
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
