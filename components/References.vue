<template lang="pug">
.container
  .row
    .col
      h2.my-5.ml-3.text-danger
        | References
  .row
    .col-lg-6(
      class="reference"
      v-for="reference in references"
      :key="reference.id")
      .card.h-100
        .card-header
          p "{{ reference.message }}"
        .card-body.text-center 
          <img :src="reference.photo" alt="Author photo" class="photo" />
          br
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
					message:
						'To whom it may concern, \n Kindly note that Derek Johnston is recommended as a good candidate for future \n employment. Derek was employed at the company from May 25th, 2021, to September \n 15th, 2023. He worked as a Lead, Full Stack Developer and was responsible for \n participating in the development of multiple successful projects, in which he oversaw \n both front-end and back-end development teams. He also brought is expertise to lead \n the product technical decision. \n Derek was autonomous in his work and always willing to help both his direct team \n members and co-workers, as well as other departments. His rapport with his direct \n reports was particularly strong, and he excels at creating and maintaining strong \n internal relationships and supporting his team. \n We can recommend Derek for future employment, as he demonstrates strong technical \n skills and can be an asset to any company. \n ',
					author: 'Jérémy Ferland',
					title: 'CTO at YHP',
					photo: 'https://media.licdn.com/dms/image/D4E03AQECX4z5ucr4Uw/profile-displayphoto-shrink_400_400/0/1687958763260?e=1726704000&v=beta&t=jK-5aHJofaYXGYZbguEA3D1G9z3mwboFziIwn0F4EVg',
				},
				{
					id: 2,
					message:
						"I taught Derek in 2 (sort of 3) courses in Durham College's Computer Programmer Analyst program in 2017-2018. In my time working with Derek, he contributed meaningfully to a database project related to an autoshow and created a capstone project making a customizable communication board intended for youths on the autism spectrum. Derek's biggest strengths are probably his work ethic and time management; I specifically recall how when seeking work placements, Derek approached every single booth at a campus career event and came away with a number of possible placements when other students didn't; Derek knows how to take advantage of opportunities like this, and how to approach and relate to people. Derek is a strong communicator; great not just as a programmer but for working to meet clients' needs. Derek has also made himself available to speak to some of my current students about his experiences and mentoring some with regards to both web development and mobile development, with an emphasis on accessibility.",
					author: 'Kyle Chapman',
					title: 'Full-Time Faculty at Durham College',
					photo: 'https://media.licdn.com/dms/image/D5603AQEGiscoolDwbA/profile-displayphoto-shrink_800_800/0/1711738706602?e=1726704000&v=beta&t=zeukx4C4rQGdAGj_7J8FLyPW44xWIqRWaYk6w0-WbF0',
				},
				// Add more references as needed
			],
		}
	},
}
</script>

<style scoped>
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
