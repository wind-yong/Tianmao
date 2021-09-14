<template>
  <div class="footer">
      <after-sale></after-sale>
        <home-footer></home-footer>
  </div>
</template>

<script>
import AfterSale from './AfterSale/AfterSale.vue'
import HomeFooter from './HomeFooter.vue'
export default {
    name:'Footer',
    components:{
        AfterSale,
        HomeFooter,
    }
}
</script>

<style scoped>
.footer{
    border-top: 1px solid #D1D7DC;
    clear: both;
    margin: 0;
    text-align: center;
    background: #fff;
    position: relative;
    overflow: hidden;
}

</style>