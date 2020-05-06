<template>
	<header>
		<template v-if="isUserLogin">
			<span>{{ $store.state.username }}</span> |
			<a href="javascript:;" @click="logoutUser">로그아웃</a>
		</template>
		<template v-else>
			<router-link to="/login">로그인</router-link> |
			<router-link to="/signup">회원가입</router-link>
		</template>
	</header>
</template>

<script>
export default {
	computed: {
		isUserLogin() {
			return this.$store.getters.isLogin;
		},
	},
	methods: {
		logoutUser() {
			this.$store.commit('clearUsername');
		},
	},
};
</script>

<style></style>
