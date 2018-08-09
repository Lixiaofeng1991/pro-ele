import Vue from 'vue';
import Vuex from "vuex";
Vue.use(Vuex);

import userInfo from "./userInfo.js"
const state = {};
const getters ={};
const mutations = {}; 
const actions ={};
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules:{
        userInfo
    }
})

export default store;