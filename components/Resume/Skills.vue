<template lang="pug">
.card 
	.card-header 
		.row
			.col 
				h4.mt-2 Skills
				span.line
			.col.text-end
				.row
					.col.text-end Jobs
				.row
					.col.text-end
						span.options(v-for="(exp, index) in exps" :class="selectedJobs.includes(index) && 'selected'")
							span(@click="toggleSelectedJob(index)")  {{index+1}}
						span.options(:class="selectedJobs.length === 0 && 'selected'" @click="clearSelectedJobs()")  all
			span.-webkit-linear-gradient
	.card-body.pb-2
		div(v-for="(value, index) in sortedSkillExperience" :key="index")
			.row.p-0
				.col-8.p-0
					h6(:class="index > MIN_SKILLS && hideSkills && 'hide'") {{ value.skill }}
				.col-4.text-end.p-0 {{value.years.toFixed(1)}} yrs
			.progress.mb-3 
				.progress-bar.bg-danger(role="progressbar" :style="{width:(value?.years/sortedSkillExperience[0]?.years)*100 + '%'}" :title="value.years.toFixed(1) + ' years'" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100")
		.col.text-center(v-on:click="hideSkills = !hideSkills" v-if="sortedSkillExperience.length - 1 > MIN_SKILLS")
			font-awesome-icon(:icon="hideSkills ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-up'")
</template>
<script>
import json from '@/assets/about.json'
const MIN_SKILLS = 25
const ALL_JOBS = []
export default {
	name: 'ResumeSkillsComponent',
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
			default: ALL_JOBS,
		},
	},
	data() {
		return {
			ALL_JOBS,
			MIN_SKILLS,
			hideSkills: true,
			exps: json.exps,
		}
	},
	computed: {
		skillExperience() {
			const skillExperience = {}
			if (this.exps.length > 0) {
				for (let i = 0; i < this.exps.length; i++) {
					if (
						this.selectedJobs.includes(i) ||
						this.selectedJobs.length === 0
					) {
						const durationYears = this.calculateYears(
							this.exps[i].startDate,
							this.exps[i].endDate
						)
						this.exps[i].skills.forEach((skill) => {
							if (!skillExperience[skill]) {
								skillExperience[skill] = 0
							}
							skillExperience[skill] += durationYears
						})
					}
				}
			}
			return skillExperience
		},
		sortedSkillExperience() {
			// Convert skillExperience object to array of objects
			const skillArray = Object.keys(this.skillExperience).map(
				(skill) => ({
					skill,
					years: this.skillExperience[skill],
				})
			)
			// Sort the array based on years of experience
			skillArray.sort((a, b) => b.years - a.years)
			return skillArray
		},
	},
	methods: {
		calculateYears(startDate, endDate) {
			const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25
			const durationMilliseconds = new Date(endDate) - new Date(startDate)
			return durationMilliseconds / millisecondsPerYear
		},
	},
}
</script>

<style scoped>
.hide {
	display: none;
}
span.selected {
	color: red;
}
.options {
	cursor: pointer;
}
</style>
