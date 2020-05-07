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
		<button tyep="submit" :disabled="!isUsernameValid || !password">
			로그인
		</button>
		<p>{{ logMessage }}</p>
	</form>
</template>

<script>
import { loginUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';
export default {
	data() {
		return {
			username: '',
			password: '',
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
			try {
				const userData = {
					username: this.username,
					password: this.password,
				};
				const { data } = await loginUser(userData);
				this.$store.commit('setUsername', data.user.username);
				this.$store.commit('setToken', data.token);
				this.$router.push('/main');
				// this.logMessage = `${data.user.username} 님 환영합니다.`;
				// this.initForm();
			} catch (error) {
				console.error(error);
				this.logMessage = error.response.data;
			}
		},
		initForm() {
			this.username = '';
			this.password = '';
		},
	},
};
</script>

<style></style>
