<template>
  <div class="content-center">
      <category-left></category-left>
      <courtyard></courtyard>
      <side-bar></side-bar>

  </div>
</template>

<script>
import CategoryLeft from '../CategoryLeft/CategoryLeft.vue'
import Courtyard from '../Courtyard/Courtyard.vue'
import SideBar from '../SildBar/SideBar.vue'
export default {
    name:'ContentCenter',
    components:{
        CategoryLeft,
        Courtyard,
        SideBar,
    }
}
</script>

<style scoped>
    .content-center{
        z-index: 11;
        float: left;
        margin-bottom: 40px;
        width: 100%;
        position: relative;
    }
</style>