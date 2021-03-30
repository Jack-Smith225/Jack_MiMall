import Vue from 'vue'
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios"
import App from './App.vue'

//根据前端的跨域方式做调整 /a/b : /api/a/b => /a/b [使用接口代理跨域]
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;

/*start::写拦截代码*/
axios.interceptors.response.use(function (response) {
  let res = response.data; /*取到我们接口返回的数据*/
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) { /*未登录状态*/
    window.location.href = '/#/login';

  }else {
    alert(res.msg)
  }

});
/*end::写拦截代码*/

/*应用一个中间件*/
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
