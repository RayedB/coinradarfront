import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Login from '@/pages/login';
import Register from '@/pages/register';
import store from '../store';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (store.getters.isLogged) {
          next('/');
        } else {
          next();
        }
      },
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    
    },

  ],
});
