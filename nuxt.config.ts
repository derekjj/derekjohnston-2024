// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: 'Lead Full-Stack Developer - Derek Johnston',
			meta: [
				{
					name: 'description',
					content:
						'With a background spanning software development roles at Oiika and E-Data Now!, along with project leadership at YHP, Derek Johnston has gained diverse experience in frontend and backend development. Additionally, his freelance consulting work has provided expertise in web and mobile development. This varied experience has equipped him with a versatile skill set and a deep understanding of software development across different domains.',
				},
			],
			htmlAttrs: {
				lang: 'en',
			},
		},
	},
	devtools: { enabled: true },
	css: [
		'@fortawesome/fontawesome-svg-core/styles.css',
		'~/assets/styles/main.scss',
	],
	modules: ['@nuxtjs/eslint-module'],
	buildModules: ['@nuxtjs/google-analytics'],
	googleAnalytics: {
		id: process.env.GOOGLE_ANALYTICS_ID ?? 'G-NPN04H4TNV',
	},
	publicRuntimeConfig: {
		googleAnalytics: {
			id: process.env.GOOGLE_ANALYTICS_ID,
			debug: {
				enabled: true,
				sendHitTask: true,
			},
		},
	},
})
