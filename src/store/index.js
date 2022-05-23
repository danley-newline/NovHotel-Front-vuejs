import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import axios from 'axios'
import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state:{
        ChoosenPlace:{},
        isSent:{}
    }, 
    mutations:{
        choosenMutation(state, payload){
            state.ChoosenPlace = payload;
            // console.log("la place est ok ", state.ChoosenPlace)
        },
        ValidationReserve(state, payload){
            state.isSent = payload;
            console.log("voir le content ok ", state.isSent)
        },
        // setLoading(state, payload){

        // }
        
        
    },
    actions:{
        // async sendReserveContent(body) {
        //     // Store.commit('setLoading', true)
        //     return await axios.post("http://127.0.0.1:8000/api/post", body)
        //          .then(res => {
        //              console.log("retoir res ", res.data)
        //              commit("ValidationReserve", res.data)
        //          })

        // },



        // sendReserveContent(data){
        //     axios.post("http://127.0.0.1:8000/api/post", data)
        //     .then(response => {
        //         console.log(response);
        //         console.log("Etudiant baaabo", data);
        //     }),(error => {
        //         console.log(error);
        //     })

        // },


    }
})