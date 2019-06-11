const state = {
    id:"",
    name:"",
    city:"",
    latitude: null,
    longitude:null,
    address:""

}

const getters = {

}

const mutations = {
    modifyIdAndName(state,params){
        // console.log("modifyIdAndName 调用了",params)
        state.id = params.id;
        state.name = params.name;
    },
    modifyCity(state,params){
        state.city = params.city;
        state.latitude = params.latitude;
        state.longitude = params.longitude;
    },
    modifyAddress(satae,params){
        state.address = params.address
    }
}

const actions = {

}

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}