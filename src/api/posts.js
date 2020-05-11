import { posts } from './index';

// 학습노트 데이터를 조회하는 api
function fetchPosts() {
	return posts.get('/');
}

// 학습노트 데이터를 생성하는 api
function createPosts(postData) {
	return posts.post('/', postData);
}

// 학습노트 데이터를 삭제하는 api
function deletePost(postId) {
	return posts.delete(postId);
}

export { fetchPosts, createPosts, deletePost };
