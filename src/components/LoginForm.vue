<template>
	<form @submit.prevent="submitForm">
		<div>
			<label for="username">id: </label>
			<input id="username" type="text" v-model="username" />
			<p>
				<span
					style="color:red;"
					class="warning"
					v-if="!isUsernameValid && username"
				>
					Please enter an email address
				</span>
			</p>
		</div>
		<div>
			<label for="password">pw: </label>
			<input id="password" type="text" v-model="password" />
		</div>
		<button
			tyep="submit"
			:disabled="!isUsernameValid || !password"
			class="btn"
			:class="!isUsernameValid || !password ? 'disabled' : null"
		>
			로그인
		</button>
		<p>{{ logMessage }}</p>
	</form>
</template>

<script>
// import { loginUser } from '@/api/index';
// import { saveAuthToCookie, saveUserToCookie } from '@/utils/cookies';
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
				await this.$store.dispatch('LOGIN', userData);
				// const { data } = await loginUser(userData);
				// this.$store.commit('setUsername', data.user.username);
				// saveAuthToCookie(data.token);
				// saveUserToCookie(data.user.username);
				// this.$store.commit('setToken', data.token);
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
