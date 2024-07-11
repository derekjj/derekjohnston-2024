<template lang="pug">
.row.about
	.col-md-12.col-xl-4.about
		WhoAmI
	.col-md-6.col-xl-4.about
		.card
			.card-header.py-2
				.mt-2 
					h2 Personal Info
					span.line
			.card-body
				Info
	.col-md-6.col-xl-4.exp.about
		Expertise
</template>

<script>
import Info from '~/components/Contact/Info'
import WhoAmI from '~/components/About/WhoAmI'
import Expertise from '~/components/About/Expertise'

export default {
	name: 'AboutComponent',
	components: {
		Info,
		WhoAmI,
		Expertise,
	},
}
</script>

<style scoped>
.card {
	border-width: 0px;
	.card-header {
		background: 0 0;
		border: none;
		padding: 0px;
	}
	.card-body {
		border: none;
		padding: 0px;
	}
}
.row {
	div {
		margin: 0px !important;
	}
}
.about {
	margin-left: 10px;
	padding: 40px;
	border-right: 1px solid #dee2e6;
}
.col.exp {
	margin-left: 10px;
	padding: 60px;
	border-right: 1px solid #dee2e6;
	border-right: none;
}
.row.about {
	padding: 40px 0;
	border-top: 1px solid #dee2e6;
	border-bottom: 1px solid #dee2e6;
}
.card {
	.row {
		margin: 0px;
		.col {
			padding: 0px;
		}
	}
}
</style>
