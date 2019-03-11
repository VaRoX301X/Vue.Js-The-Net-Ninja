import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

Vue.use(Router);
import Routes from './routes';
const router = new Router({
  routes: Routes,
  mode: 'history'
  // mode: 'hash'
});
new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
