<template>
	<li>
		<div>{{ postItem.title }}</div>
		<div>{{ postItem.contents }}</div>
		<div>
			<small>{{ postItem.createdAt | formatDate }}</small>
			<div>
				<span @click="routeEditPage">수정</span> |
				<span @click="deleteItem">삭제</span>
			</div>
		</div>
	</li>
</template>

<script>
import { deletePost } from '@/api/posts';
export default {
	props: {
		postItem: {
			type: Object,
			required: true,
		},
	},
	// filters: {
	// 	formatDate(value) {
	// 		return new Date(value);
	// 	},
	// },
	methods: {
		async deleteItem() {
			if (confirm('do you want to delete it?')) {
				await deletePost(this.postItem._id);
				this.$emit('refresh');
			}
		},
		routeEditPage() {
			this.$router.push(`/post/${this.postItem._id}`);
		},
	},
};
</script>

<style></style>
