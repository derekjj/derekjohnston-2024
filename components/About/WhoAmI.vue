<template lang="pug">
.card
  .card-header.py-2
    .mt-2 
      h2 Who am I?
      span.line
  .card-body
    .row.title
      h5 A Fullstack / Mobile Developer Located In Our Lovely Earth
    .row.description.text-justify
      | With a background spanning software development roles at Oiika and E-Data Now!, along with project leadership at YHP, I've gained diverse experience in frontend and backend development. Additionally, my freelance consulting work has provided expertise in web and mobile development. This varied experience has equipped me with a versatile skill set and a deep understanding of software development across different domains.
      //- | With a diverse background spanning roles in software development, freelance consulting, and project management, I bring a wealth of experience to the table. My journey began as a Software Engineer at Oiika, where I honed my skills in frontend development while contributing to a platform fostering knowledge sharing among tutors and mentors. Subsequently, I transitioned to roles as a Software Developer at E-Data Now!, where I tackled challenges in real-time data collection systems for the automotive industry, and as a Lead Full-Stack Developer at YHP, where I orchestrated projects aligning with strategic goals. Alongside, I ventured into freelance development consulting, offering expertise in web and mobile development. This multifaceted experience has equipped me with a versatile skill set and a deep understanding of the intricacies of software development across various domains.
</template>

<script>
// TODO: use json vs static
export default {
	name: 'AboutWhoAmIComponent',
}
</script>

<style scoped>
.row {
	padding-bottom: 10px;
}
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
</style>
