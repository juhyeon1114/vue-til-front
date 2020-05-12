import Vue from 'vue';
import VueRouter from 'vue-router';
// import LoginPage from '@/views/LoginPage.vue';
// import SignupPage from '@/views/SignupPage.vue';
import store from '@/store/index';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/login',
		},
		{
			path: '/login',
			// component: LoginPage,
			component: () => import('@/views/LoginPage.vue'), //code splitting
		},
		{
			path: '/signup',
			// component: SignupPage,
			component: () => import('@/views/SignupPage.vue'),
		},
		{
			path: '/main',
			component: () => import('@/views/MainPage.vue'),
			meta: { auth: true }, // 로그인을 체크하고 로그인하지 않았으면 login페이지로 redirect하기 위한 값
		},
		{
			path: '/add',
			component: () => import('@/views/PostAddPage.vue'),
			meta: { auth: true },
		},
		{
			path: '/post/:id',
			component: () => import('@/views/PostEditPage.vue'),
			meta: { auth: true },
		},
		{
			path: '*',
			component: () => import('@/views/NotFound.vue'),
		},
	],
});

/**
 * router navigation guard
 */
router.beforeEach((to, from, next) => {
	if (to.meta.auth && store.getters.isLogin) {
		console.log('인증이 필요함');
		next('/login');
		return;
	}
	next();
});

export default router;
