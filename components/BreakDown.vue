<template>
	<section class="section row bg-dark text-center">
		<div class="container-fluid">
			<div class="row text-center">
				<div class="col-md-6 col-lg-3">
					<div class="row">
						<div
							class="col-5 text-right text-light border-right py-3"
						>
							<div class="m-auto">
								<fa icon="fa-solid fa-clock" />
							</div>
						</div>
						<div class="col-7 text-left py-3">
							<h1 class="text-danger font-weight-bold font40">
								{{ sortedSkillExperience[0].years.toFixed(1) }}
							</h1>
							<p class="text-light mb-1">Years Experience</p>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-lg-3">
					<div class="row">
						<div
							class="col-5 text-right text-light border-right py-3"
						>
							<div class="m-auto">
								<fa icon="fa-solid fa-code" />
							</div>
						</div>
						<div class="col-7 text-left py-3">
							<fa
								v-if="loading"
								icon="fa-solid fa-spinner"
								class="spinner"
							/>
							<h1
								v-else
								class="text-danger font-weight-bold font40"
							>
								{{ github.projectCount + gitlab.projectCount }}
							</h1>
							<p class="text-light mb-1">Projects</p>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-lg-3">
					<div class="row">
						<div
							class="col-5 text-right text-light border-right py-3"
						>
							<div class="m-auto">
								<fa icon="fa-solid fa-code-commit" />
							</div>
						</div>
						<div class="col-7 text-left py-3">
							<fa
								v-if="loading"
								icon="fa-solid fa-spinner"
								class="spinner"
							/>
							<h1
								v-else
								class="text-danger font-weight-bold font40"
							>
								{{ github.commitCount + gitlab.commitCount }}
							</h1>
							<p class="text-light mb-1">Commits</p>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-lg-3">
					<div class="row">
						<div
							class="col-5 text-right text-light border-right py-3"
						>
							<div class="m-auto">
								<fa icon="fa-solid fa-heart-pulse" />
							</div>
						</div>
						<div class="col-7 text-left py-3">
							<fa
								v-if="loading"
								icon="fa-solid fa-spinner"
								class="spinner"
							/>
							<h1
								v-else
								class="text-danger font-weight-bold font40"
							>
								{{ estimatedCoffeeConsumption.toFixed(2) }}
							</h1>
							<p class="text-light mb-1">Coffee Drank</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container-fluid">
			<div class="row">
				<div class="col text-center text-white pt-2">
					<small>
						* Only for fun, calculated based on currently connected
						public GitHub/GitLab repo's only *
					</small>
				</div>
			</div>
			<div class="row">
				<div class="col text-center text-white pt-2">
					<small>
						{{ error }}
					</small>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import json from '@/assets/experience.json'

export default Vue.extend({
	name: 'IndexPage',
	data: function () {
		return {
			exps: json.exps,
			username: 'derekjj',
			github: {
				token: process.env.TOKEN_GITHUB, // Readonly
				projectCount: 0,
				commitCount: 0,
			},
			gitlab: {
				token: process.env.TOKEN_GITLAB, // Readonly
				projectCount: 0,
				commitCount: 0,
			},
			loading: false,
			error: '',
			projectCount: null,
			commitCount: null,
			estimatedCoffeeConsumptionNumber: null,
		}
	},
	computed: {
		skillExperience() {
			const skillExperience = {}
			this.exps.forEach((exp) => {
				const durationYears = this.calculateYears(
					exp.startDate,
					exp.endDate
				)
				exp.skills.forEach((skill) => {
					if (!skillExperience[skill]) {
						skillExperience[skill] = 0
					}
					skillExperience[skill] += durationYears
				})
			})
			return skillExperience
		},
		estimatedCoffeeConsumption() {
			const numberOfProjects =
				this.github.projectCount + this.gitlab.projectCount
			const numberOfCommits =
				this.github.commitCount + this.gitlab.commitCount
			const yearsOfExperience = this.sortedSkillExperience[0].years
			// Define arbitrary coefficients
			const kA = 1.5 // Coffee consumption per project
			const kB = 1.2 // Coffee consumption per commit
			const kC = 1.5 // Coffee consumption per year of experience

			// Calculate the estimated number of cups of coffee consumed
			const cupsConsumed =
				numberOfProjects * kA +
				numberOfCommits * kB +
				yearsOfExperience * kC

			return cupsConsumed
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
	mounted() {
		this.getData()
	},
	methods: {
		async getData() {
			const githubProjectCount = localStorage.getItem(
				'github-project-count'
			)
			const githubCommitCount = localStorage.getItem(
				'github-commit-count'
			)
			const gitlabProjectCount = localStorage.getItem(
				'gitlab-project-count'
			)
			const gitlabCommitCount = localStorage.getItem(
				'gitlab-commit-count'
			)
			if (
				!githubProjectCount ||
				!githubCommitCount ||
				!gitlabProjectCount ||
				!gitlabCommitCount
			) {
				this.loading = true
				await this.getGitlab()
				await this.getGithub()
				localStorage.setItem(
					'github-project-count',
					this.github.projectCount
				)
				localStorage.setItem(
					'github-commit-count',
					this.github.commitCount
				)
				localStorage.setItem(
					'gitlab-project-count',
					this.gitlab.projectCount
				)
				localStorage.setItem(
					'gitlab-commit-count',
					this.gitlab.commitCount
				)
				this.loading = false
			} else {
				this.github.projectCount = parseInt(githubProjectCount)
				this.github.commitCount = parseInt(githubCommitCount)
				this.gitlab.projectCount = parseInt(gitlabProjectCount)
				this.gitlab.commitCount = parseInt(gitlabCommitCount)
			}
		},
		async getGitlab() {
			const headers = {}
			if (this.gitlab.token) {
				headers['Private-Token'] = this.gitlab.token
			}
			return await axios
				.get(
					`https://gitlab.com/api/v4/users/${this.username}/projects`,
					{ headers }
				)
				.then((response) => {
					this.gitlab.projectCount = response.data.length
					return this.getGitlabCommits(response.data, headers)
				})
				.catch(() => {
					this.error = 'GitLab repositories not loaded.'
				})
		},
		async getGitlabCommits(projects, headers) {
			let totalCommits = 0
			for (const project of projects) {
				await axios
					.get(
						`https://gitlab.com/api/v4/projects/${project.id}/repository/commits`,
						{ headers }
					)
					.then((response) => {
						totalCommits += response.data.length
					})
					.catch(() => {
						this.error = 'GitLab commits not loaded.'
					})
			}
			return (this.gitlab.commitCount = totalCommits)
		},
		async getGithub() {
			const headers = {}
			if (this.github.token) {
				headers.Authorization = `token ${this.github.token}`
			}
			return await axios
				.get(`https://api.github.com/users/${this.username}/repos`, {
					headers,
				})
				.then((response) => {
					this.github.projectCount = response.data.length
					const repos = response.data
					return Promise.all(
						repos.map((repo) =>
							this.getGithubCommits(repo.full_name, headers)
						)
					).then((commitsCounts) => {
						this.github.commitCount = commitsCounts.reduce(
							(acc, val) => acc + val,
							0
						)
					})
				})
				.catch(() => {
					this.error = 'GitHub repositories not loaded.'
				})
		},
		getGithubCommits(repoName, headers) {
			return axios
				.get(`https://api.github.com/repos/${repoName}/commits`, {
					headers,
				})
				.then((response) => {
					const commits = response.data
					const userCommits = commits.filter(
						(commit) =>
							commit.author &&
							commit.author.login === this.username
					)
					return userCommits.length
				})
				.catch(() => {
					this.error = 'GitHub commits not loaded.'
				})
		},
		calculateYears(startDate, endDate) {
			const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25
			const durationMilliseconds = new Date(endDate) - new Date(startDate)
			return durationMilliseconds / millisecondsPerYear
		},
	},
})
</script>
<style scoped>
svg {
	font-size: 65px;
}
.section {
	padding: 80px 0;
}
.spinner {
	font-size: 50px;
	animation: spin 2s linear infinite;
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
