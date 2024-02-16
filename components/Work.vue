<template lang="pug">
.card
  .card-header
    .mt-2 
      h4 Expertise
      span.line
  .card-body
    div.p-2(v-for="(exp,i) in exps" :class="selectedJobs >= i && 'selected'" @click="setSelectedJobs(i)") 
      div
        h6.title.text-danger {{ getMonthDay(exp.startDate) }} - {{ getMonthDay(exp.endDate) }}
        .row 
          .col {{exp.title}}
          .col.text-right {{ exp.employer }}
        p.subtitle.text-justify {{ exp.description }} 
      hr(v-if="i < exps.length - 1")
</template>
<script>
import Vue from 'vue'
import json from '@/assets/experience.json'
import jsonEd from '@/assets/education.json'
const ALL_JOBS = -1

export default Vue.extend({
	name: 'IndexPage',
	props: {
		setSelectedJobs: {
			type: Function,
			default: -1,
		},
		selectedJobs: {
			type: Number,
			default: ALL_JOBS,
		},
	},
	data: function () {
		return {
			exps: json.exps,
			eds: jsonEd.eds,
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
