<template lang="pug">
.card.text-left
  .card-header
    .mt-2 
      h4 Volunteer
      span.line
  .card-body
    div.p-2(v-for="(volunteer,i) in volunteers" @click="selectedJobs = i") 
      div
        h6.title.text-danger {{ getMonthDay(volunteer.startDate) }} - {{ getMonthDay(volunteer.endDate) }}
        .row 
          .col {{volunteer.title}}
          .col.text-right {{ volunteer.employer }}
        p.subtitle.text-justify {{ volunteer.description }} 
      hr(v-if="i < volunteers.length - 1")
</template>
<script>
import Vue from 'vue'
import json from '@/assets/volunteer.json'

export default Vue.extend({
	name: 'IndexPage',
	data: function () {
		return {
			volunteers: json.volunteers,
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
.card .card-header {
	background: 0 0;
	border: none;
}
.progress-bar {
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-webkit-flex-direction: column;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	-ms-flex-pack: center;
	justify-content: center;
	color: #fff;
	text-align: center;
	white-space: nowrap;
	background-color: #f85c70;
	-webkit-transition: width 0.6s ease;
	transition: width 0.6s ease;
}
.bg-danger {
	background-color: #f85c70 !important;
}
.progress {
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	height: 0.3rem;
	overflow: hidden;
	font-size: 0.75rem;
	background-color: #eaf0fc;
	border-radius: 0.25rem;
}
.section {
	padding: 80px 0;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	overflow: hidden;
	font-size: 0.75rem;
	background-color: #eaf0fc;
	border-radius: 0.25rem;
}
.section {
	padding: 80px 0;
}
.selected {
	div {
		background-color: #ccc;
		/* border-radius: 3%; */
		margin-top: 10px;
	}
}
.selected {
	hr {
		background-color: unset;
	}
}
</style>
