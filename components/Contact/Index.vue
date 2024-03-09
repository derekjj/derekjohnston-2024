<template lang="pug">
.row.contact
	.map 
		iframe(
			width="100%"
			height="100%"
			style="border: 0"
			loading="lazy"
			allowfullscreen
			referrerpolicy="no-referrer-when-downgrade"
			src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDpRStcC8FVyAC3QE43Yd4q3m_ucJaQxh8&q=Durham+Region,Ontario")
	.container
		.row 
			.col-lg-8 
				.contact-form-card 
					h4.contact-title
						| Send a message
					form(action="https://formspree.io/f/derek@derekjohnston.ca" method="post")
						.form-group
							input.form-control(type="text" id="name" name="name" placeholder="Name *" required)
						.form-group 
							input.form-control(type="email" id="email" name="email" placeholder="Email *" required)
						.form-group 
							input.form-control(type="text" id="subject" name="subject" placeholder="Subject *" required)
						.form-group
							textarea.form-control(placeholder="Message *" id="message" name="message" rows="7" required)
						.form-group
							button.btn.btn-primary(type="submit") 
								| Send Message 
			.col-md-12.col-lg-4
				.contact-info-card 
					h4.contact-title
						| Get in touch 
					Info(:location="false")
</template>
<script>
import Info from '~/components/Contact/Info'

export default {
	name: 'ContactComponent',
	components: {
		Info,
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
