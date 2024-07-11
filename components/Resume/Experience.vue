<template lang="pug">
.card
	.card-header
			.row
				.col-lg-8
					h4 Experience
					span.line
				.col-lg-4
					<div class="form-check">
						<label class="form-check-label" for="flexCheckDefault">
							| point form
						</label>
						<input class="form-check-input" type="checkbox" id="flexCheckDefault"  v-model="isPointForm">
					</div>
					a(@click="clearSelectedJobs()" v-show="selectedJobs.length > 0")
						button.clear.btn.btn-secondary.p-1 clear selected 

	.card-body
		div(v-for="(exp,i) in exps" :class="selectedJobs.includes(i) && 'selected'" @click="toggleSelectedJob(i)") 
			div.p-2.option(title="Click to filter")
				.row
					.col
						h6.title.text-danger {{ getMonthDay(exp.startDate) }} - {{ exp.endDate ? getMonthDay(exp.endDate) : 'Present'}}
					.col-2.text-end
						input#checkbox(type="checkbox", name="" :checked="selectedJobs.includes(i)", :value="i", @change="")
				.row 
					.col
						b {{exp.title}}
					.col.text-end
						b {{ exp.employer }}
				p.subtitle.text-justify(v-if="!isPointForm") {{ exp.description }} 
				ul(v-else v-if="exp.points?.length > 0")
					li(v-for="(point, idxPoint) in exp?.points")
						| {{point}}
			hr(v-if="i < exps.length - 1")
</template>
<script>
import json from '@/assets/about.json'
const ALL_JOBS = []

export default {
	name: 'ResumeExperienceComponent',
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
			required: true,
		},
	},
	data: function () {
		return {
			isPointForm: true,
			exps: json.exps,
			eds: json.eds,
			ALL_JOBS,
		}
	},
	watch: {
		isPointForm() {
			console.log(this.isPointForm)
		},
		selectedJobs: {
			handler(newValue) {
				console.log('Array changed:', newValue)
			},
			deep: true,
		},
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
.option:hover {
	cursor: pointer;
	background-color: #e2e2e2;
}
.form-check {
	min-height: auto;
	margin-bottom: auto;
}
.col-3 {
	padding-right: 0;
}
</style>
