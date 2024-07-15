import 'nuxt/types/config'

declare module '@nuxt/schema' {
	interface NuxtConfig {
		googleAnalytics?: {
			id: string
		}
	}
}
