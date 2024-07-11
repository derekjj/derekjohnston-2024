<template>
	<div class="container text-center py-3">
		<div class="row">
			<div class="col">
				<img
					:src="
						updatedQrCode.length >= 3
							? 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' +
								updatedQrCode
							: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=empty'
					"
				/>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<input v-model="qrCode" type="text" @input="handleInput" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
definePageMeta({
	layout: 'playground',
})
export default {
	layout: 'playground',
	data() {
		return {
			qrCode: 'example',
			updatedQrCode: '',
			typingTimeout: setTimeout(() => {}, 0), // Set a timeout to avoid triggering the function immediately
		}
	},
	methods: {
		handleInput() {
			clearTimeout(this.typingTimeout) // Clear the previous timeout
			this.typingTimeout = setTimeout(this.onTypingStopped, 2000) // Set a new timeout
		},
		onTypingStopped() {
			// Call the function you want to execute after typing stops
			this.updatedQrCode = this.qrCode
		},
	},
}
</script>
