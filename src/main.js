import Vue from 'vue';
import App from './App.vue';
import VScrollLock from 'v-scroll-lock';

Vue.use(VScrollLock);
Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#mn-vue-globals-app');

