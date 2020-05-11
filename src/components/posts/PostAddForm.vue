<template>
	<div>
		<form @submit.prevent="submitForm">
			<div>
				<label for="title">Title: </label>
				<input id="title" type="text" v-model="title" />
			</div>
			<div>
				<label for="contents">Contents: </label>
				<textarea id="contents" type="text" rows="5" v-model="contents" />
				<p v-if="!isContentsValid" style="color:red; font-size:12px;">
					Text is too long
				</p>
			</div>
			<button type="submit">Create</button>
		</form>
		<p>{{ logMessage }}</p>
	</div>
</template>

<script>
import { createPosts } from '@/api/posts';
export default {
	data() {
		return {
			title: '',
			contents: '',
			logMessage: '',
		};
	},
	computed: {
		isContentsValid() {
			return this.contents.length <= 200;
		},
	},
	methods: {
		async submitForm() {
			try {
				const response = await createPosts({
					title: this.title,
					contents: this.contents,
				});
				this.$router.push('/main');
				console.log(response);
				this.$router.push('/main');
			} catch (error) {
				console.error(error.response.data.message);
				this.logMessage = error.response.data.message;
			}
		},
	},
};
</script>

<style></style>
