<template>
	<form @submit.prevent="submitForm">
		<div>
			<label for="username">id: </label>
			<input type="text" v-model="username" />
		</div>
		<div>
			<label for="password">pw: </label>
			<input type="text" v-model="password" />
		</div>
		<div>
			<label for="nickname">nickname: </label>
			<input type="text" v-model="nickname" />
		</div>
		<button
			tyep="submit"
			:disabled="!isUsernameValid || !password || !nickname"
		>
			회원가입
		</button>
		<p>{{ logMessage }}</p>
	</form>
</template>

<script>
import { registerUser } from '@/api/auth';
import { validateEmail } from '@/utils/validation';
export default {
	data() {
		// vda
		return {
			// form values
			username: '',
			password: '',
			nickname: '',
			// log
			logMessage: '',
		};
	},
	computed: {
		isUsernameValid() {
			if (validateEmail(this.username)) {
				return true;
			}
			return false;
		},
	},
	methods: {
		async submitForm() {
			const userData = {
				username: this.username,
				password: this.password,
				nickname: this.nickname,
			};
			// const response = await registerUser(userData);
			// console.log(response.data);
			const { data } = await registerUser(userData);
			this.logMessage = `${data.username}님이 가입 되었습니다`;
			this.initForm();
		},
		initForm() {
			this.username = '';
			this.password = '';
			this.nickname = '';
		},
	},
};
</script>

<style></style>
