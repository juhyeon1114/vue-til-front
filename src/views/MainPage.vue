<template>
	<div>
		<div>
			<h1>main</h1>
			<div v-if="isLoading">
				Loading...
			</div>
			<ul v-else>
				<post-list-item
					v-for="postItem in postItems"
					:key="postItem._id"
					:postItem="postItem"
					@refresh="fetchData"
				></post-list-item>
			</ul>
		</div>
		<div>
			<router-link to="/add">+</router-link>
		</div>
	</div>
</template>

<script>
import PostListItem from '@/components/posts/PostListItem.vue';
import { fetchPosts } from '@/api/posts';
export default {
	components: {
		PostListItem,
	},
	data() {
		return {
			postItems: [],
			isLoading: false,
		};
	},
	methods: {
		async fetchData() {
			this.isLoading = true;
			const { data } = await fetchPosts();
			this.postItems = data.posts;
			this.isLoading = false;
		},
	},
	created() {
		this.fetchData();
	},
};
</script>

<style></style>
