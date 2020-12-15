import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import Account from './components/Account.vue';
import Login from './components/Login.vue';
import CameraDetail from './components/CameraDetail.vue';
import Camera from './components/Camera.vue';
import NotFound from './components/NotFound.vue';
import PhotoCreate from './components/PhotoCreate.vue'; 
import SignUp from './components/SignUp.vue';
import store from './store.js';

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home},
    {path: '/account', component: Account, beforeEnter(to, from, next){
        if(store.state.token){next()}
            else{next('/signin')}
    }},
    {path: '/signin', component: Login},
    {path: '/camera', component: Camera},
    {path: '/camera/:pk', component: CameraDetail,
        children: [
            {path: 'photos', component: PhotoCreate}
        ] },
    {path: '/signup', component: SignUp},
    {path: '/:invalidroute(.*)', component: NotFound}
]

export default new VueRouter({mode: 'history', routes})