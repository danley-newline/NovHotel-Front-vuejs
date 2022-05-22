import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../services/index'
import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state:{
        ChoosenPlace:{},
    }, 
    mutations:{
        choosenMutation(state, payload){
            state.ChoosenPlace = payload;
            // console.log("la place est ok ", state.ChoosenPlace)
        }
        // seeOneProduct(state, payload){
        //     state.ProductInfo = payload;
        //     console.log("voir le content ok ", state.ProductInfo)
        // },
        
        
    },
    actions:{
        // async LoadNasaContent({commit}) {
        //     axios.get("/nasa?_format=json")
        //          .then(res => {
        //              console.log("retoir res ", res.data)
        //              commit("MutNasaContent", res.data)
        //          })

        // }
    }
})