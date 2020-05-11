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
			<button type="submit">Edit</button>
		</form>
		<p>{{ logMessage }}</p>
	</div>
</template>

<script>
import { editPost, fetchPost } from '@/api/posts';
export default {
	data() {
		return {
			id: '',
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
				const id = this.$route.params.id;
				const response = await editPost(id, {
					title: this.title,
					contents: this.contents,
				});
				this.$router.push('/main');
				console.log(response);
			} catch (error) {
				console.error(error.response.data.message);
				this.logMessage = error.response.data.message;
			}
		},
	},
	async created() {
		const id = this.$route.params.id;
		const { data } = await fetchPost(id);
		this.title = data.title;
		this.contents = data.contents;
	},
};
</script>

<style></style>
