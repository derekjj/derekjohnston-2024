<template lang="pug">
.row
	.col-xl-6.p-0
		.contact
			.map
				iframe(
					width="100%"
					height="100%"
					style="border: 0"
					loading="lazy"
					allowfullscreen
					referrerpolicy="no-referrer-when-downgrade"
					:src="location")
	.col-xl-6.col-lg-12
		.row
			.col-md-6.py-2
				.contact-form-card.text-center
					h4.contact-title
						| Email Me
					.form-group.py-1
						input.form-control(type="text" id="name" name="name" :value="about.email" disabled)
					form(:action="'https://formspree.io/f/' + about.email" method="post")
						.form-group.py-1
							input.form-control(type="text" id="name" name="name" placeholder="Name *" required)
						.form-group.py-1
							input.form-control(type="email" id="email" name="email" placeholder="Email *" required)
						.form-group.py-1
							input.form-control(type="text" id="subject" name="subject" placeholder="Subject *" required)
						.form-group.py-1
							textarea.form-control(placeholder="Message *" id="message" name="message" rows="7" required)
						.form-group.py-1
							button.btn.btn-primary(type="submit") 
								| Send Message
			.col-md-6
				.contact-info-card.d-sm-none.d-md-block
					h4.contact-title
						| Get in touch 
					Info
</template>
<script>
import json from '@/assets/about.json'
import Info from '~/components/Contact/Info'

export default {
	name: 'ContactComponent',
	components: {
		Info,
	},
	data() {
		return {
			about: json.about,
			showMap: true,
			hoveringContact: false,
			showContact: false,
			location:
				'https://www.google.com/maps/embed/v1/place?key=AIzaSyDpRStcC8FVyAC3QE43Yd4q3m_ucJaQxh8&q=Greater+Toronto+Area,Ontario',
		}
	},
	head() {
		const key = process.env.TOKEN_GOOGLE
		// white list over at https://console.cloud.google.com/apis/credentials?project=derekjohnston
		return (
			!window.google && {
				script: [
					{
						src: `https://maps.googleapis.com/maps/api/js?libraries=places&key=${key}`,
					},
				],
			}
		)
	},
	created() {
		fetch('https://ipinfo.io/json?token=fd4d7922a87146')
			.then((response) => response.json())
			.then((data) => {
				// Set my location based on where they are
				// Default is Toronto because everyone knows toronto
				if (data.country === 'CA' && data.region === 'Ontario') {
					// They might know newcastle becasue they are located in oshawa
					if (data.loc === 'Oshawa') {
						this.location =
							'https://www.google.com/maps/embed/v1/place?key=AIzaSyDpRStcC8FVyAC3QE43Yd4q3m_ucJaQxh8&q=Newcastle,Ontario'
					} else {
						// Otherwise they are they will need to a more broad location
						this.location =
							'https://www.google.com/maps/embed/v1/place?key=AIzaSyDpRStcC8FVyAC3QE43Yd4q3m_ucJaQxh8&q=Durham+Region,Ontario'
					}
				}
			})
			.catch((error) => console.error('Error fetching location:', error))
	},
}
</script>

<style scoped>
.row {
	position: relative;
	align-items: center;
}
.contact .map {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
}
.contact {
	position: relative;
	min-height: 700px;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	-ms-flex-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	-webkit-align-items: center;
	-ms-flex-align: center;
	align-items: center;
	padding: 40px 0;
}
.contact .contact-form-card,
.contact .contact-info-card {
	padding: 35px;
	background: #fff;
	min-height: 300px;
}
.contact .contact-title::after {
	content: '';
	width: 20px;
	height: 2px;
	background: #f85c70;
	display: block;
	margin-top: 10px;
}

.container {
	max-width: 1140px;
}
</style>
