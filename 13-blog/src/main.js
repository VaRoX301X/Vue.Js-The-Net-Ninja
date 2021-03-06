import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Routes from './routes';

Vue.use(VueResource);
Vue.use(VueRouter);

//Add routing
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
  // mode: 'hash'
});

// Custom directives
Vue.directive('rainbow',{
  bind(el, binding, vnode){
    el.style.color = "#" + Math.random().toString().slice(2,8);
  }
});
Vue.directive('theme', {
  bind(el, binding, vnode){
    if (binding.value == 'wide'){
      el.style.maxWidth = '1200px';
    } else el.style.maxWidth = '800px';
    if (binding.arg == 'column'){
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
});

// Filters
Vue.filter('shortener', function (value) {
  return (value.slice(0,100)+ '...')
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
});
