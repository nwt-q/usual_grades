import Vue from 'vue'
import App from './App.vue'
//导入路由信息
import router from './router'
//忘记了要引用Vue
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//Vue.config.productionTip = false 的意思是 是否显示在控制台的提示

Vue.use(ElementUI);
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
