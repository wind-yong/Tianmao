<template>
  <div class="shop-cart">
      <h1>这里是购物车</h1>
      <cart-list></cart-list>
  </div>
</template>

<script>
import CartList from '../components/ShopCart/CartLit.vue'
export default {
  name:'ShopCar',
  components:{
        CartList,
    },
}
</script>

<style>

</style>