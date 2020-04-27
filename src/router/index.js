import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../components/home/HomePage.vue';
import RobotBulider from '../components/bulid/RobotBulider.vue';

Vue.use(Router);

export default new Router({

  routes: [
    {
      path: '/',
      name: 'Home',
      component : HomePage ,
    },
    {
      path: '/bulid',
      name: 'Bulid',
      component : RobotBulider ,
    },
  ],
});
