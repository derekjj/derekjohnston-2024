import { defineNuxtPlugin } from '#app'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
	faLinkedin,
	faGithub,
	faGitlab,
	faGithubSquare,
} from '@fortawesome/free-brands-svg-icons'
import {
	faPrint,
	faClock,
	faCode,
	faCodeCommit,
	faSpinner,
	faHeartPulse,
	faLaptop,
	faMobileScreen,
	faCubesStacked,
} from '@fortawesome/free-solid-svg-icons'
library.add(faLinkedin, faGithub, faGitlab)
library.add(
	faPrint,
	faClock,
	faCode,
	faCodeCommit,
	faSpinner,
	faHeartPulse,
	faGithubSquare,
	faLaptop,
	faMobileScreen,
	faCubesStacked
)

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})
