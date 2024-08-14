<template lang="pug">
.card
	.card-header
			.row
				.col-7
					h4 Experience
					span.line
				.col-5.text-end
					<div class="form-check">
						<label class="form-check-label" for="flexCheckDefault">
							| Point form
							<input class="form-check-input" type="checkbox" id="flexCheckDefault"  v-model="isPointForm">
						</label>
					</div>
					a(@click="clearSelectedJobs()" :class="selectedJobs.length === 0 && 'hidden'")
						button.btn-sm.clear.btn.btn-secondary.p-1 Clear selected 

	.card-body
		template(v-for="(exp,i) in exps")
			div(:class="selectedJobs.includes(i) && 'selected'" @click="toggleSelectedJob(i)" v-if="i < JOBS_TO_SHOW || isShown") 
				//- TODO: Add collapsed state
				div.p-2.option(title="Click to filter")
					.row
						.col
							h6.title.text-danger {{ getMonthDay(exp.startDate) }} - {{ exp.endDate ? getMonthDay(exp.endDate) : 'Present'}}
						.col-2.text-end.pe-0
							input#checkbox(type="checkbox", name="" :checked="selectedJobs.includes(i)", :value="i", @change="")
					.row 
						.col
							b {{exp.title}}
						.col.text-end
							template(v-if="exp.url")
								<a class="link text-black" :href="exp.url" target="_blank" :title="`Link to ${exp.employer}`">
									b {{ exp.employer }}
									| &nbsp;<font-awesome-icon icon="fa-solid fa-up-right-from-square" />
								</a>
							template(v-else)
								b.text-black {{ exp.employer }}&nbsp;
							template(v-if="exp.url2")
								<a class="link text-black" :href="exp.url2" target="_blank" :title="`Second link to ${exp.employer}`"> 
									| &nbsp;<font-awesome-icon icon="fa-solid fa-up-right-from-square" />
								</a>
					p.subtitle.text-justify(v-if="!isPointForm") {{ exp.description }} 
					ul(v-else v-if="exp.points?.length > 0")
						li(v-for="(point, idxPoint) in exp?.points")
							template(v-if="!point.main") 
								| {{point}}
							template(v-else)
								li
									| {{ point.main }}
									ul(v-if="point.points?.length > 0")
										li(v-for="(p, i) in point.points")
											|{{p}}
				hr(v-if="i < exps.length - 1 && (i < JOBS_TO_SHOW - 1 && !isShown )")
		.col.text-center.button.pt-1(@click="isShown = !isShown")
			font-awesome-icon(:icon="!isShown ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-up'")
</template>
<script>
//TODO: Add link to json
import json from '@/assets/about.json'
const ALL_JOBS = []
const JOBS_TO_SHOW = 2

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
			JOBS_TO_SHOW,
			isShown: false,
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
.hidden {
	visibility: hidden;
}
.link {
	text-decoration: none;
}
.form-check-input {
	float: none;
	margin: auto;
	margin-left: 5px;
}
.button {
	cursor: pointer;
}
</style>
