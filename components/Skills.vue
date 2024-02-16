<template lang="pug">
.card 
    .card-header 
        .pull-left.row
            .col 
                h4.mt-2 Skills
                span.line
            .col.text-right
              .row
                .col.text-right # of jobs
              .row
                .col.text-right
                  span.options(v-for="(exp, index) in exps" :class="selectedJobs === index && 'selected'")
                    span(@click="setSelectedJobs(index)")  {{index+1}}
                  span.options(:class="selectedJobs === ALL_JOBS && 'selected'" @click="setSelectedJobs(ALL_JOBS)")  all
            span.-webkit-linear-gradient
    .card-body.pb-2
        div(v-for="(value, index) in sortedSkillExperience" :key="index")
            h6(:class="index > 20 && hideSkills && 'hide'") {{ value.skill }}
                .progress.mb-3 
                    .progress-bar.bg-danger(role="progressbar" :style="{width:(value.years/sortedSkillExperience[0].years)*100 + '%'}" :title="value.years.toFixed(1) + ' years'" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100")
        .col.text-center(v-on:click="hideSkills = !hideSkills" v-if="sortedSkillExperience.length > 20")
            fa(:icon="hideSkills ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-up'")
</template>
<script>
import Vue from 'vue'
import json from '@/assets/experience.json'
const ALL_JOBS = -1
export default Vue.extend({
    name: 'SkillsComponent',
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
    data() {
        return {
            ALL_JOBS,
            // selectedJobs: ALL_JOBS,
            hideSkills: true,
            exps: json.exps,
        }
    },
    computed: {
        skillExperience() {
            const skillExperience = {}
            const loopSize =
                this.selectedJobs === ALL_JOBS
                    ? this.exps.length
                    : this.selectedJobs + 1
            for (let i = 0; i < loopSize; i++) {
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
    watch: {
        selectedJobs(a) {
            // console.log('bb', b)
            // console.log('aa', a)
            this.setSelectedJobs(a)
        },
    },
    mounted() {},
    methods: {
        calculateYears(startDate, endDate) {
            const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25
            const durationMilliseconds = new Date(endDate) - new Date(startDate)
            return durationMilliseconds / millisecondsPerYear
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
.hide {
    display: none;
}
span.selected {
    color: red;
}
.line {
    display: block;
    width: 25px;
    height: 1.5px;
    background-color: #f85c70;
}
.options {
    cursor: pointer;
}
</style>
