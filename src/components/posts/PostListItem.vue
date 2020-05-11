<template>
	<li>
		<div>{{ postItem.title }}</div>
		<div>{{ postItem.contents }}</div>
		<div>
			{{ postItem.createdAt }}
			<div>
				<span>생성</span> |
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
	methods: {
		async deleteItem() {
			if (confirm('do you want to delete it?')) {
				await deletePost(this.postItem._id);
				this.$emit('refresh');
			}
		},
	},
};
</script>

<style></style>
