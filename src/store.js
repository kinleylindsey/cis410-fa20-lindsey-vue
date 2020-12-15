import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import routes from './routes.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        token: null,
        user: null,
        cameras: []
    },
    mutations:{
        storeTokenInApp(state, myToken){
            state.token = myToken
        },
        storeUserInApp(state, myUser){
            state.user = myUser
        },
        storeCameras(state, myCameras){
            state.cameras = myCameras
        },
        clearAuthData(state){
            state.token = null;
            state.user = null;
        }
    },
    actions:{
        getCameras({commit}){
            axios.get('/cameras')
            .then((myResponse)=>{
                console.log("response from getCameras action", myResponse)
                commit('storeCameras', myResponse.data)
            })
            .catch(()=>{console.log("error in getCameras action")})
        },
        logout({commit, state}){
            axios.post('/contacts/logout', null, {
                headers:{
                    Authorization: `Bearer ${state.token}`
                }
            });

            commit('clearAuthData');

            routes.replace("/");
        }

    }
})