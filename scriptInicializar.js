import Vue from 'vue';
import Router from 'vue-router';
import TelaLogin from '@/components/TelaLogin.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TelaLogin',
      component: TelaLogin
    },
  ]
});