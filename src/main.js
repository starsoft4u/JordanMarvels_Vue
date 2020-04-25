import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
// import ElementUI from 'element-ui';
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
// Vue.use(ElementUI);
Vue.config.productionTip = false
import "./assets/scss/main.scss";

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')