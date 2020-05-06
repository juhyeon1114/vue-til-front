import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/index';
import store from '@/store/index';

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
	router, // vue router를 인스턴스에 연결
	store,
}).$mount('#app');
