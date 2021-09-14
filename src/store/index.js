import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      reindex:0,
      reactive:0,
      //当前用户
      currentUser:'',
      UserId:'',
      isLogin:false,
      userToken:'',
      cartlist:[],
      phoneNum:'',
  },
  mutations: {
    REACTIVENEXT(state){ 
      state.reactive++
      state.reindex++
      console.log(state.reactive,state.reindex)
    },
    SetToken(state){
      state.userToken = sessionStorage.elementToken
      state.isLogin = true
      console.log('SetToken'+'   '+state.userToken)
    },
    OutToken(state){
      state.userToken = ''
      state.currentUser = ''
      state.UserId = ''
      state.cartlist = [],
      state.isLogin = false
    },
    UPDATE_CART(state,data){
      state.cartlist = data 
    },
    UPDATE_MSG (state, phoneNum) {
      state.phoneNum = phoneNum
    }
  
  },
  actions: {
    Reactive(context,value){
      context.commit('REACTIVENEXT',value)
    }
  },
  modules: {

  },
  getters:{
    
  }
})
