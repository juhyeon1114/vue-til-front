/**
 * npm t
 */

/**
 * example codes
 */
// import { sum } from './math';
// describe('math.js', () => {
// 	// describe() -> jest에서 제공하는 api. 연관된 테스트 케이스를 그룹화하는 api
// 	test('10 + 20 = 30', () => {
// 		// test() -> 하나의 테스트 케이스를 검증하는 api
// 		const result = sum(10, 20);
// 		result === 30;
// 		expect(result).toBe(30); //expect() -> 결과를 검증하는 api
// 	});
// });

/**
 * classic한 방법
 */
// import Vue from 'vue';
// import LoginForm from './LoginForm.vue';

// describe('LoginForm.vue', () => {
// 	test('컴포넌트가 마운팅되면 username이 존재하고 초기 값으로 설정되어 있어야 한다.', () => {
// 		const instance = new Vue(LoginForm).$mount();
// 		// 위 코드의 의미는 아래와 같다
// 		// new Vue({
// 		// 	el: '#app',
// 		// 	render: h => h(LoginForm),
// 		// });
// 		expect(instance.username).toBe('');
// 	});
// });

/**
 * vue 테스트를 위한 공식 library를 활용한 방법
 */
import { shallowMount } from '@vue/test-utils';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
	test('id는 이메일 형식이어야 한다.', () => {
		//wrapper.vm === instance
		const wrapper = shallowMount(LoginForm, {
			data() {
				return {
					username: 'test',
				};
			},
		});
		const warningText = wrapper.find('.warning');
		expect(warningText.exists()).toBeTruthy();
		// console.log(warningText.html());
		// const idInput = wrapper.find('#username');
		// console.log(idInput.html());
	});

	test('id와 pw가 입력되지 않으면 로그인 버튼이 바활성화 된다.', () => {
		const wrapper = shallowMount(LoginForm, {
			data() {
				return {
					username: 'test',
					password: 'test',
				};
			},
		});
		const button = wrapper.find('.btn');
		expect(button.element.disabled).toBeTruthy();
	});
});
