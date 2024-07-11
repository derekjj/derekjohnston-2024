<template>
	<div>
		<PlaygroundHeader />
		<slot />
		<footer>
			<p>Footer Content</p>
		</footer>
	</div>
</template>

<script>
import PlaygroundHeader from '@/components/Playground/Header.vue'
export default {
	components: {
		PlaygroundHeader,
	},
}
</script>

<style scoped>
header {
	background-color: #333;
	color: white;
	padding: 1rem;
}
footer {
	background-color: #333;
	color: white;
	text-align: center;
	padding: 1rem;
	position: fixed;
	bottom: 0;
	width: 100%;
}
</style>
