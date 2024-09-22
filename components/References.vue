<template lang="pug">
.container
.row
	.col
		h2.my-5.ml-3.text-danger
			| References
.row.justify-content-center.p-3
	.col-lg-6.col-xl-4(
		class="reference"
		v-for="reference in references"
		:key="reference.id")
		a(:href="reference.link" target="_blank")
			.card.h-100
				.card-header
					p(v-for="message in reference.messages") {{ message }}
				.card-body.text-center
					| {{ reference.author }}
					br
					|{{ reference.title }} 
</template>

<script>
export default {
	name: 'ReferencesComponent',
	data() {
		return {
			references: [
				{
					id: 1,
					messages: [
						'To whom it may concern,',
						'Kindly note that Derek Johnston is recommended as a good candidate for future employment. Derek was employed at the company from May 25th, 2021, to September 15th, 2023. He worked as a Lead, Full Stack Developer and was responsible for participating in the development of multiple successful projects, in which he oversaw both front-end and back-end development teams. He also brought is expertise to lead the product technical decision.',
						'Derek was autonomous in his work and always willing to help both his direct team members and co-workers, as well as other departments. His rapport with his direct reports was particularly strong, and he excels at creating and maintaining strong internal relationships and supporting his team.',
						'We can recommend Derek for future employment, as he demonstrates strong technical skills and can be an asset to any company.',
					],
					author: 'Jérémy Ferland',
					title: 'CTO at YHP',
					link: 'https://www.linkedin.com/in/jeremy-ferland/',
				},
				{
					id: 2,
					messages: [
						"I taught Derek in 2 (sort of 3) courses in Durham College's Computer Programmer Analyst program in 2017-2018. In my time working with Derek, he contributed meaningfully to a database project related to an autoshow and created a capstone project making a customizable communication board intended for youths on the autism spectrum. Derek's biggest strengths are probably his work ethic and time management; I specifically recall how when seeking work placements, Derek approached every single booth at a campus career event and came away with a number of possible placements when other students didn't; Derek knows how to take advantage of opportunities like this, and how to approach and relate to people. Derek is a strong communicator; great not just as a programmer but for working to meet clients' needs. Derek has also made himself available to speak to some of my current students about his experiences and mentoring some with regards to both web development and mobile development, with an emphasis on accessibility.",
					],
					author: 'Kyle Chapman',
					title: 'Full-Time Faculty at Durham College',
					link: 'https://www.linkedin.com/in/kyledchapman/',
				},
				{
					id: 3,
					messages: [
						'Derek was a pivotal member of our team at E-Data Now!, where his work on a near real-time data collection system for the automotive industry showcased his technical expertise and attention to detail. Utilizing Ruby on Rails, VueJS, and Flutter, Derek not only enhanced functionality but also significantly improved system performance and accessibility. His proactive problem-solving and dedication to continuous improvement were invaluable assets.',
						' At YHP, Derek took on the role of Lead Full-stack Developer, where he drove the development of innovative solutions like the Wonderlab event platform and a gamified HR onboarding system. His deep knowledge of technologies such as NextJS, ReactJS, and Docker, combined with his leadership in agile methodologies, enabled him to lead teams in delivering high-quality, user-centric products. Derek’s ability to mentor junior developers and foster a collaborative environment further underscored his value as a leader and skilled developer.',
					],
					author: 'Lee Kichko',
					title: 'CTO at E-Data Now! (Phoenix Quality)',
					link: 'https://www.linkedin.com/in/lee-kichko-a42b19178/',
				},
				// Add more references as needed
			],
		}
	},
}
</script>

<style scoped>
a {
	text-decoration: none;
}
.container {
	max-width: 1700px;
}
.card {
	background-color: white;
	box-shadow:
		0 4px 8px rgba(0, 0, 0, 0.1),
		0 6px 20px rgba(0, 0, 0, 0.1); /* Soft shadow for floating effect */
	transition:
		transform 0.2s,
		box-shadow 0.2s; /* Smooth transition for hover effect */
}

.card:hover {
	transform: translateY(-10px); /* Slight lift on hover */
	box-shadow:
		0 8px 16px rgba(0, 0, 0, 0.2),
		0 12px 40px rgba(0, 0, 0, 0.2); /* Enhanced shadow on hover */
}
.references {
	padding: 2rem;
	background-color: #f0f0f0;
	border-radius: 10px;
	max-width: 800px;
	margin: 0 auto;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.references h2 {
	text-align: center;
	margin-bottom: 1.5rem;
	color: #333;
	font-family: 'Helvetica Neue', sans-serif;
	font-weight: 700;
}

.reference {
	margin-bottom: 2rem;
	padding: 1rem;
	border-left: 4px solid rgba(var(--bs-danger-rgb));
	background: white;
	border-radius: 8px;
}

.reference .message {
	font-style: italic;
	font-size: 1.2rem;
	color: #555;
}

.reference .author {
	text-align: right;
	font-weight: bold;
	margin-top: 1rem;
	color: rgba(var(--bs-danger-rgb));
}

.reference .title {
	text-align: right;
	color: #777;
	margin-top: 0.2rem;
}

.reference .photo {
	display: block;
	margin: 0.5rem auto;
	border-radius: 50%;
	width: 50px;
	height: 50px;
	object-fit: cover;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
