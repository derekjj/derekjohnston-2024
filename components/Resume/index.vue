<template lang="pug">
.row.section( :style="{ backgroundImage: 'linear-gradient(to top,rgba(0,0,0,.4),rgba(0,0,0,.4)),url(' + require('@/assets/tech2-bg.jpg') + ')' }")
	.container
		.row.mx-3
			h2.mb-5.ml-3.text-white
				span.text-danger My
				|  Resume
		.row.mx-3
			//- show only on lg or larger
			.d-none.col-lg-4.d-lg-block
				FadeIn(:rate="randomRate(5)")
					Education
					Languages
					Volunteer

			//- show only on smaller then lg
			.col-md-6.d-lg-none
				FadeIn(:rate="randomRate(3)")
					Education
					Languages
			.col-md-6.col-lg-4.d-lg-none
				FadeIn(:rate="randomRate(4)")
					Volunteer

			.col-md-6.col-lg-4
				FadeIn(:rate="randomRate(2)")
					Work(:selectedJobs="selectedJobs" :toggleSelectedJob="toggleSelectedJob" :clearSelectedJobs="clearSelectedJobs")
			.col-md-6.col-lg-4
				FadeIn(:rate="randomRate(3)")
					Skills(:selectedJobs="selectedJobs" :toggleSelectedJob="toggleSelectedJob" :clearSelectedJobs="clearSelectedJobs")
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
			selectedJobs: [],
		}
	},
	methods: {
		getMonthDay(date) {
			const dateObject = new Date(date)
			const options = { month: 'short', year: 'numeric' }
			const formattedDate = dateObject.toLocaleString('en-US', options)
			return formattedDate !== 'Invalid Date' ? formattedDate : ' '
		},
		toggleSelectedJob(job) {
			if (!this.selectedJobs.includes(job)) {
				this.selectedJobs.push(job)
			} else {
				this.selectedJobs.splice(this.selectedJobs.indexOf(job), 1)
			}
		},
		clearSelectedJobs() {
			this.selectedJobs = []
		},
		randomRate(num) {
			const randomNum =
				Math.floor(Math.random() * (9 - 4 + num + 1)) + num

			return '0.' + randomNum + 's'
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
