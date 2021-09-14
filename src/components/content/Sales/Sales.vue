<template>
  <div class="sales-wrapper">
     <sales-list   v-for="(salesitem,listindex) in SalesList" :key='listindex'>
        <div class="m-floor" slot="m-floor">
        <div class="header">
            <h2>{{salesitem.name}}</h2>
        </div>
        <div class="content">
            <div class="goods">
            <div class="list">
                <a href="javascript:;" slot="sales-list" v-for="(item,index) in salesitem.content" :key="index">
                    <div class="wrap">
                        <img :src="item.imageUrl" alt="">
                        <h3>{{item.feature}}</h3>
                        <p class="title">{{item.title}}</p>
                        <p class="price">
                            <i>￥</i>
                            <span>{{item.price}}</span>
                            </p>
                        <button type="button" class="icon icon-gouwuchecart-fill2" 
                        :class="{'shop-out':!item.isSoldOut}" 
                        :disabled="item.isSoldOut"
                        @click="addCart(item,index)"></button>
                        <i class="icon" :class="{'sold-out': item.isSoldOut}"></i>
                    </div>
                </a>
            </div>
            </div>


            <div class="recommend" :style="{'background-color':salesitem.bacgroundColor}">
                <div class="words">
                    <a href="" v-for="item,index in salesitem.Recommend" :key="index">
                        <span class="inner">
                            <b>{{item}}</b>
                        </span>
                    </a>
                </div>
            </div>
            <div class="promo">
                <img src="../../../assets/img/band-1.png" alt="">
            </div>
        </div>
         </div>
     </sales-list>
  </div>
</template>

<script>
import SalesList from './SalesList.vue'
import {getShopData} from '../../../network/home'
import {AddCart} from '../../../network/home'
export default {
    components:{
        SalesList,
    },
    data(){
        return{
            SalesList:[],
        }
    },
    methods:{
        addCart(item,index){
            if(this.$store.state.isLogin){
            let UserId = this.$store.state.UserId
            console.log(item,index,item._id)
            let productId = item._id.$oid
            AddCart({UserId,productId}).then(res=>{
                console.log(res.data.cartlist)
                this.$store.commit('UPDATE_CART',res.data.cartlist)
                })}
            else{
                this.$router.push({
                    path:'/login',
                })
            }
        }
    },
    created(){
        getShopData().then(res=>{
        this.SalesList = res.data.SalesList
    })
 
  }
} 
</script>

<style scoped>

</style>