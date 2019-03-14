import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Chat from "../components/Chat";

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', name: 'Welcome', component: Welcome},
    { // IR A CHAT SI Y SOLO SI SE ESCRIBE NOMBRE - ROUTE GUARDING
      path: '/chat', name: 'Chat', component: Chat, props: true, beforeEnter: (to, from, next) => {
        console.log(to.params.name);
        if(to.params.name){
          next();
        } else {
          next({ name: 'Welcome' });
        }
      }
    }
  ]
})
