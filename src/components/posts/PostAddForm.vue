<template>
	<form @submit.prevent="submitForm">
		<div>
			<label for="title">Title: </label>
			<input id="title" type="text" v-model="title" />
		</div>
		<div>
			<label for="contents">Contents: </label>
			<textarea id="contents" type="text" rows="5" v-model="contents" />
		</div>
		<button type="submit">Create</button>
	</form>
</template>

<script>
import { createPosts } from '@/api/index';
export default {
	data() {
		return {
			title: '',
			contents: '',
		};
	},
	methods: {
		async submitForm() {
			await createPosts({
				title: this.title,
				contents: this.contents,
			});
			this.$router.push('/main');
		},
	},
};
</script>

<style></style>
