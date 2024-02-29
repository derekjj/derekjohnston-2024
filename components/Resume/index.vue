<template lang="pug">
.row.section( :style="{ backgroundImage: 'linear-gradient(to top,rgba(0,0,0,.4),rgba(0,0,0,.4)),url(' + require('@/assets/tech2-bg.jpg') + ')' }")
	.container
		.row
			h2.mb-5.ml-3.text-white
				span.text-danger My
				|  Resume
		.row
			//- show only on lg
			.d-none.col-lg-4.d-lg-block
				Education
				Languages
				Volunteer

			//- show only on smaller then lg
			.col-md-6.d-lg-none
				Education
				Languages
			.col-md-6.col-lg-4.d-lg-none
				Volunteer

			.col-md-6.col-lg-4
				Work(:selectedJobs="selectedJobs" :setSelectedJobs="setSelectedJobs")
			.col-md-6.col-lg-4
				Skills(:setSelectedJobs="setSelectedJobs" :selectedJobs="selectedJobs")
</template>
<script>
import Vue from 'vue'
import json from '@/assets/about.json'
import Education from '~/components/Resume/Education'
import Languages from '~/components/Resume/Languages'
import Volunteer from '~/components/Resume/Volunteer'
import Work from '~/components/Resume/Work'
import Skills from '~/components/Resume/Skills'

export default Vue.extend({
	name: 'ResumeComponent',
	components: {
		Education,
		Languages,
		Volunteer,
		Work,
		Skills,
	},
	data() {
		return {
			exps: json.exps,
			eds: json.eds,
			selectedJobs: -1,
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
})
</script>

<style scoped>
.card {
	margin-top: 20px;
}
.section {
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-attachment: fixed;
}
.container {
	max-width: 1600px;
}
</style>
