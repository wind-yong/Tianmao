<template>
  <div class="product-class">
          <div class="cat">所有产品分类</div>
          <content-cart></content-cart>
  </div>
</template>

<script>
import ContentCart from './ContentCart.vue'
export default {
 name:'ContentTop',
 components:{
     ContentCart,
 }
}
</script>

<style scoped>
    .product-class{
        height: 0;
        z-index: 15;
        
        /* position: absolute; */
    }
    .cat{
        background-color: #2f2f2f;
        height: 36px;
        width: 240px;
        float: left;
        color: #fff;
        font-size: 16px;
        font-weight: 700;
        text-align: center;
        line-height: 36px;
    }
</style>