import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../components/home/HomePage.vue';
import RobotBulider from '../components/bulid/RobotBulider.vue';
import PartInfo from '../components/parts/PartInfo.vue';
import BrowseParts from '../components/parts/BrowseParts.vue';
import RobotHeads from '../components/parts/RobotHeads.vue';
import RobotTorsos from '../components/parts/RobotTorsos.vue';
import RobotArms from '../components/parts/RobotArms.vue';
import RobotBases from '../components/parts/RobotBases.vue';

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
      component: RobotBulider,

    },
    {
      path: '/parts/browse',
      name: 'BrowseParts',
      component: BrowseParts,
      children: [
        {
          path:'heads',
          name: 'BrowseHeads',
          component :RobotHeads ,
        },
        {
          path:'arms',
          name: 'BrowseArams',
          component :RobotArms ,
        },
        {
          path:'torsos',
          name: 'BrowseTorsos',
          component :RobotTorsos ,
        },
        {
          path:'bases',
          name: 'BrowseBases',
          component :RobotBases ,
        }
      ]
    },
    {
      path: '/parts/:partType/:id',
      name: 'parts',
      component: PartInfo,
      props:true,
    },
  ],
});
