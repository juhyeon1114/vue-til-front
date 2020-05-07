<template>
	<div>
		<h1>main</h1>
		<div>
			<ul>
				<li v-for="postItem in postItems" :key="postItem._id">
					{{ postItem.title }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { fetchPosts } from '@/api/index';
export default {
	data() {
		return {
			postItems: [],
		};
	},
	methods: {
		async fetchData() {
			const response = await fetchPosts();
			this.postItems = response.data.posts;
		},
	},
	created() {
		this.fetchData();
	},
};
</script>

<style></style>
