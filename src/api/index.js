import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// .env.production : npm run build시에 읽음
// .env.development : npm run build시에 읽음
// .env : 개발, 배포와 상관없이 공통되는 설정 값. 또는 .env.production, .env.development 파일이 없는 경우 읽음

// axios 초기화
function createInstance() {
	const instance = axios.create({
		baseURL: process.env.VUE_APP_API_URL,
		//VUE_APP 접두사가 붙은 설정 값은 추가적인 .env 설정 없이 바로 가져올 수 있음
		// headers: {
		// 	Authorization: store.state.token,
		// },
	});
	return setInterceptors(instance);
}
const instance = createInstance();

// 회원가입 api
function registerUser(userData) {
	// const url = 'http://localhost:3000/signup';
	// return axios.post(url, userData);
	return instance.post('signup', userData);
}

// 로그인 api
function loginUser(userData) {
	return instance.post('login', userData);
}

// 학습노트 데이터를 조회하는 api
function fetchPosts() {
	return instance.get('posts');
}

// 학습노트 데이터를 생성하는 api
function createPosts(postData) {
	return instance.post('posts', postData);
}

export { registerUser, loginUser, fetchPosts, createPosts };
