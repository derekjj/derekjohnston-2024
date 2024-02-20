<template lang="pug">
section(id="resume" ref="resume")
	.row.section
		.container 
			h2.mb-5
				span.text-danger My
				|  Resume
			.row
				.col-md-6.col-lg-4
					Work(:selectedJobs="selectedJobs" :setSelectedJobs="setSelectedJobs")
				.col-md-6.col-lg-4
					.card 
						.card-header 
							.mt-2 
								h4 Education
								span.line
						.card-body 
							div(v-for="(ed,i) in eds") 
								h6.title.text-danger {{ ed.dates }}
								.row.py-2
									.col-7.px-0 {{ed.title}}
									.col-5.px-0.text-right {{ed.school}}
								p.subtitle.text-justify {{ ed.description }}
								hr(v-if="i < eds.length - 1")
					.card.mt-2 
						.card-header 
							.pull-left 
								h4.mt-2 Languages
								span.line
						.card-body.pb-2 
							.row
								.col
									h6 English
								.col.text-right
									|  (native)
							//- .progress.mb-3 
							//- 	.progress-bar.bg-danger(role="progressbar" style="width:80%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100")
							.row
								.col
									h6 French
								.col.text-right
									|  (actively learning)
							//- .progress.mb-3 
							//- 	.progress-bar.bg-danger(role="progressbar" style="width:30%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100")
					.row.py-2
						.col.text-center
							Volunteer
				.col-lg-4 
					Skills(:setSelectedJobs="setSelectedJobs" :selectedJobs="selectedJobs")
</template>
<script>
import Vue from 'vue'
import json from '@/assets/experience.json'
import jsonEd from '@/assets/education.json'

export default Vue.extend({
	name: 'IndexPage',
	data: function () {
		return {
			exps: json.exps,
			eds: jsonEd.eds,
			selectedJobs: -1,
		}
	},
	watch: {
		// selectedJobs(a, b) {
		//     console.log('a', a)
		//     console.log('b', b)
		// },
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
</style>
