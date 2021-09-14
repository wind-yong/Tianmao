<template>
  <div class="header">
      <!-- 天猫超市logo -->
      <div class="header-box">
          <div class="Logo">
              <span class="malllogo">
                  <a href="#">
                  <img src="../../assets/img/TianLogo.png" alt="" class="logoimg">
              </a>
              </span>
          </div>
      </div>
       <!-- 剩余部分 -->
       <div class="header-rest">
           <header-banner></header-banner>
           <chose-area></chose-area>
           <mall-search></mall-search>
       </div>
  </div>
</template>

<script>
import HeaderBanner from './HeaderBanner.vue'
import ChoseArea from './ChoseArea.vue'
import MallSearch from './MallSearch.vue'
export default {
    name:'TianHeader',
    components:{
        HeaderBanner,
        ChoseArea,
        MallSearch,
    }
}
</script>

<style scoped>
    .header{
        width: 100%;
        height: 122px;
        min-width: 990px;
    }
    .header-box{
        width: 1190px;
        /* height: 122px; */
        margin: 0 auto;
        background-color: sandybrown;
    }
    .Logo{
        width: 240px;
        padding-top: 16px;
        float: left;
        z-index: 9;
        line-height: 62px;
        position: relative;
    }
    .malllogo{
        float: left;
        margin-right: 10px;
        padding: 0px 0px;
    }
    .malllogo a{
        display: block;
        width: 190px;
        padding: 0 0 0 40px;
        margin-top: 10px;
    }
    .logoimg{
        width: 130px;
        height: 48px;
    }
    .header-rest{
        width: 1190px;
        margin: 0 auto;
    }
</style>