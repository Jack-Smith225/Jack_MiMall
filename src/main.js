import Vue from 'vue'
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios"
import VueLazyLoad from 'vue-lazyload';
import VueCookie from 'vue-cookie' //引入cookie插件
import {Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index'
import App from './App.vue';


const mock = false
if (mock) {
  // 根据开关决定是否走此拦截
  require('./mock/api')
}
//根据前端的跨域方式做调整 /a/b : /api/a/b => /a/b [使用接口代理跨域]
// axios.defaults.baseURL = ' http://localhost:7300/mock/6064012b9a6b18e0bb1af203/mimall';
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
//根据环境变量获取伙同的请求地址
//axios.defaults.baseURL = env.baseURL;

/*start::写拦截代码*/
axios.interceptors.response.use(function (response) {
  let res = response.data; /*取到我们接口返回的数据*/
  let path = location.hash;
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) { /*未登录状态*/
    if (path != '#/index') {
      window.location.href = '/#/login';
    }
    return Promise.reject(res);
  } else {
    // alert(res.msg);
    Message.warning(res.msg)
    return Promise.reject(res); // 抛出一个异常
  }

}, (error) => { // 服务器异常
  let res = error.response;
  Message.error(res.data.message);
  return Promise.reject(error)
});
/*end::写拦截代码*/

/*应用一个中间件*/
Vue.use(VueAxios, axios);
Vue.use(VueCookie); //加载cookie插件
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.prototype.$message = Message;
Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
  store: store
}).$mount('#app')
