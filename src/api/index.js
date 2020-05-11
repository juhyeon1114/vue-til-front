import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// .env.production : npm run build시에 읽음
// .env.development : npm run build시에 읽음
// .env : 개발, 배포와 상관없이 공통되는 설정 값. 또는 .env.production, .env.development 파일이 없는 경우 읽음

function createInstance() {
	return axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	});
}

// axios 초기화
function createInstanceWithAuth(url) {
	const instance = axios.create({
		baseURL: `${process.env.VUE_APP_API_URL}${url}`,
		//VUE_APP 접두사가 붙은 설정 값은 추가적인 .env 설정 없이 바로 가져올 수 있음
		// headers: {
		// 	Authorization: store.state.token,
		// },
	});
	return setInterceptors(instance);
}
export const instance = createInstance();
export const posts = createInstanceWithAuth('posts');
