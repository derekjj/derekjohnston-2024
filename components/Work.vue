<template lang="pug">
.card
  .card-header
    .mt-2 
      h4 Expertise
      span.line
  .card-body
    div(v-for="(exp,i) in exps" :class="selectedJobs >= i && 'selected'" @click="setSelectedJobs(i)") 
      div.p-2
        h6.title.text-danger {{ getMonthDay(exp.startDate) }} - {{ getMonthDay(exp.endDate) }}
        .row 
          .col
            b {{exp.title}}
          .col.text-right
            b {{ exp.employer }}
        p.subtitle.text-justify {{ exp.description }} 
      hr(v-if="i < exps.length - 1")
</template>
<script>
import Vue from 'vue'
import json from '@/assets/about.json'
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
			eds: json.eds,
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

<style scoped></style>
