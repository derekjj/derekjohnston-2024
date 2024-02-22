<template lang="pug">
.card.text-left
	.card-header
		.mt-2 
			h4 Volunteer
			span.line
	.card-body
		div.p-2(v-for="(volunteer,i) in volunteers" v-if="volunteers.length > 0" @click="selectedJobs = i") 
			div
				h6.title.text-danger {{ getMonthDay(volunteer.startDate) }} - {{ getMonthDay(volunteer.endDate) }}
				b.row 
					.col {{volunteer.title}}
					.col.text-right {{ volunteer.employer }}
				p.subtitle.text-justify {{ volunteer.description }} 
			hr(v-if="i < volunteers.length - 1")
</template>
<script>
import Vue from 'vue'
import json from '@/assets/about.json'

export default Vue.extend({
	name: 'IndexPage',
	data: function () {
		return {
			volunteers: json.volunteers,
		}
	},
	watch: {},
	mounted() {
		// console.log('volunteers.length', volunteers.length)
	},
	methods: {
		getMonthDay(date) {
			const dateObject = new Date(date)
			const options = { month: 'short', year: 'numeric' }
			const formattedDate = dateObject.toLocaleString('en-US', options)
			return formattedDate !== 'Invalid Date' ? formattedDate : ' '
		},
		setSelectedJobs(jobs) {
			this.selectedJobs = jobs
		},
	},
})
</script>

<style scoped></style>
