<template lang="pug">
.card
	.card-header
			.row
				.col 
					h4 Expertise
					span.line
				.col.text-end
					a(@click="clearSelectedJobs()")
						span.clear clear selected
	.card-body
		div(v-for="(exp,i) in exps" :class="selectedJobs.includes(i) && 'selected'" @click="toggleSelectedJob(i)") 
			div.p-2
				h6.title.text-danger {{ getMonthDay(exp.startDate) }} - {{ getMonthDay(exp.endDate) }}
				.row 
					.col
						b {{exp.title}}
					.col.text-end
						b {{ exp.employer }}
				p.subtitle.text-justify {{ exp.description }} 
			hr(v-if="i < exps.length - 1")
</template>
<script>
import json from '@/assets/about.json'
const ALL_JOBS = []

export default {
	name: 'ResumeWorkComponent',
	props: {
		toggleSelectedJob: {
			type: Function,
			default: () => {},
		},
		clearSelectedJobs: {
			type: Function,
			default: () => {},
		},
		selectedJobs: {
			type: Array,
			default: () => [],
		},
	},
	data: function () {
		return {
			exps: json.exps,
			eds: json.eds,
			ALL_JOBS,
		}
	},
	methods: {
		getMonthDay(date) {
			const dateObject = new Date(date)
			const options = { month: 'short', year: 'numeric' }
			const formattedDate = dateObject.toLocaleString('en-US', options)
			return formattedDate !== 'Invalid Date' ? formattedDate : ' '
		},
	},
}
</script>

<style scoped>
.clear {
	cursor: pointer;
}
</style>
