<template lang="pug">
.card 
	.card-header 
		h4 Education
		span.line
	.card-body 
		div(v-for="(ed,i) in eds") 
			h6.title.text-danger {{ ed.dates }}
			.row
				.col-7.px-0
					b {{ed.title}}
				.col-5.px-0.text-end
					b {{ed.school}}
			p.subtitle.text-justify {{ ed.description }}
			hr(v-if="i < eds.length - 1")
</template>
<script>
import json from '@/assets/about.json'

export default {
	name: 'ResumeComponent',
	data() {
		return {
			eds: json.eds,
		}
	},
}
</script>

<style scoped></style>
