<template lang="pug">
button.btn.btn-outline-danger(@click="openPDF")
	ClientOnly
		font-awesome-icon(:icon="['fas', 'print']")
		|  Download my CV 
</template>

<script>
export default {
	name: 'ResumeButtonComponent',
	methods: {
		openPDF() {
			window.open('/Derek-Johnston-Resume-Full.pdf', '_blank')
		},
	},
}
</script>
<style scoped></style>
