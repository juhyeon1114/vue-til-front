import { posts } from './index';

// 학습노트 데이터 전체를 조회하는 api
function fetchPosts() {
	return posts.get('/');
}

// 특정 학습노트 데이터를 조회하는 api
function fetchPost(postId) {
	return posts.get(postId);
}

// 학습노트 데이터를 생성하는 api
function createPosts(postData) {
	return posts.post('/', postData);
}

// 학습노트 데이터를 수정하는 api
function editPost(postId, postData) {
	return posts.put(postId, postData);
}

// 학습노트 데이터를 삭제하는 api
function deletePost(postId) {
	return posts.delete(postId);
}

export { fetchPosts, fetchPost, createPosts, deletePost, editPost };
