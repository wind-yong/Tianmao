<template>
  <div class="content">
    <div class="content-nav">
      <div class="layout">
      <content-top></content-top>
      <content-bar></content-bar>
      </div>
    </div>
   <content-center></content-center>
  <sales></sales>
  </div>
</template>

<script>
import ContentBar from './ContentNav/ContentBar.vue'
import ContentTop from './ContentNav/ContentTop.vue'
import ContentCenter from './ContentNav/ContentCenter.vue'
import Sales from './Sales/Sales.vue'
export default {
    name:'ContentMid',
    components:{
      ContentBar,
      ContentTop,
      ContentCenter,
      Sales,

    }
}
</script>

<style>
  .content{
    width: 1190px;
    margin: 0 auto;
  }
  .content-nav{
    /* background-color: green; */
    position: static;
    top: auto;
    display: block;
    
    border-bottom: 1px solid #2f2f2f;
  }
    .layout{
        width: 1190px;
        margin: 0 auto;
        height: 36px;
        position: relative;
    }
</style>