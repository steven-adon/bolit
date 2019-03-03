
import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HelloPage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import PartInfo from '../parts/PartInfo.vue';
import BrowseParts from '../parts/BrowseParts.vue';
import RobotHeads from '../parts/RobotHeads.vue';
import RobotArms from '../parts/RobotArms.vue';
import RobotBases from '../parts/RobotBases.vue';
import RobotTorsos from '../parts/RobotTorsos.vue';

Vue.use(Router);

export default new Router({
    routes: [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/build',
        name: 'Build',
        component: RobotBuilder,
    },
    // {
    //     path: '/parts/browse',
    //     name: 'browse',
    //     components: BrowseParts,
    //     // children: [
    //     //     {
    //     //         name: 'BrowseHeads',
    //     //         path: 'heads',
    //     //         component: RobotHeads,
    //     //     },
    //     //     {
    //     //         name: 'RobotArms',
    //     //         path: 'arms',
    //     //         component: RobotArms,
    //     //     },
    //     //     {
    //     //         name: 'RobotBases',
    //     //         path: 'bases',
    //     //         component: RobotBases,
    //     //     },
    //     //     {
    //     //         name: 'RobotTorsos',
    //     //         path: 'torsos',
    //     //         component: RobotTorsos,
    //     //     }
    //     // ]
    // }
    // {
    //     path: '/parts/:partType/:id',
    //     name: 'Parts',
    //     component: PartInfo,
    //     props: true,
    // }
]});
