// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: [
		'@fortawesome/fontawesome-svg-core/styles.css',
		'~/assets/styles/main.scss',
	],
	modules: ['@nuxtjs/eslint-module'],
})
