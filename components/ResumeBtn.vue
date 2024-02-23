<template lang="pug">
button.btn.btn-outline-danger(@click="openPDF")
    fa(:icon="['fas', 'print']")
    |  Download my CV 
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
	name: 'IndexPage',
	methods: {
		openPDF() {
			window.open(
				'/Resume Derek Johnston Jan 2024 - full no phone.pdf',
				'_blank'
			)
		},
	},
})
</script>
<style scoped></style>
