<template lang="pug">
.card.text-left
	.card-header
		h4 Volunteer
		span.line
	.card-body
		div.p-2(v-for="(volunteer,i) in volunteers" v-if="volunteers.length > 0" @click="selectedJobs = i") 
			div
				h6.title.text-danger {{ getMonthDay(volunteer.startDate) }} - {{ getMonthDay(volunteer.endDate) }}
				b.row 
					.col {{volunteer.title}}
					.col.text-end {{ volunteer.employer }}
				p.subtitle.text-justify {{ volunteer.description }} 
			hr(v-if="i < volunteers.length - 1")
</template>
<script>
import json from '@/assets/about.json'

export default {
	name: 'ResumeVolunteerComponent',
	data: function () {
		return {
			volunteers: json.volunteers,
		}
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
}
</script>

<style scoped></style>
