<template lang="pug">
.card
	.card-header 
		h4.mt-2 Languages
		span.line
	.card-body.pb-2 
		.row
			.col
				h6 English
			.col.text-end
				|  (native)
		//- .progress.mb-3 
		//- 	.progress-bar.bg-danger(role="progressbar" style="width:80%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100")
		.row
			.col
				h6 French
			.col.text-end
				|  (actively learning)
		//- .progress.mb-3 
		//- 	.progress-bar.bg-danger(role="progressbar" style="width:30%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100")
</template>
<script>
export default {
	name: 'ResumeLanguagesComponent',
}
</script>

<style scoped></style>
