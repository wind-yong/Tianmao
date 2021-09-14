import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../components/Register/Register.vue'
import Login from '../components/Login/Login.vue'
import Home from '../views/Home.vue'
import searchResult from '../views/SearchResult.vue'
import MyTaobao from '../views/MyTaobao.vue'
import ShopCar from '../views/ShopCar.vue'
import Favorites from '../views/Favorites.vue'
// import { from } from 'core-js/core/array'

// import { from } from 'core-js/core/array'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path:'/login',
    name:'Login',
    component:Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  //搜索
  {
    path: '/searchResult',
    name: 'searchResult',
    component:searchResult,
  },
  //我的淘宝
  {
    path: '/MyTaobao',
    name: 'MyTaobao',
    component:MyTaobao,
    meta:{isAuth:true}  //是否需要鉴权
  },
  //已买到的宝贝
  //已卖出的宝贝
  //购物车
  {
    path: '/ShopCar',
    name: 'ShopCar',
    component:ShopCar,
    meta:{isAuth:true}  //是否需要鉴权
  },
  //收藏夹
  {
    path: '/Favorites',
    name: 'Favorites',
    component:Favorites,
    meta:{isAuth:true}  //是否需要鉴权
  },
  //收藏的宝贝
  //收藏的店铺
]

const router = new VueRouter({
  routes
})
// router.beforeEach((to,from,next)=>{
//   if(to.meta.isAuth){
//     if(sessionStorage.elementToken){
//       next()  
//     }else{
//       next('/login')
//     }
//   }else{
//     next()
//   }
// })


export default router
