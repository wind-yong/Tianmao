<template>
  <div class="home">
    <nav-bar></nav-bar>
    <tian-header></tian-header>
    <content-mid></content-mid>
    <short-cut></short-cut>
    <footer-content></footer-content>
  </div>
</template>

<script>

import NavBar from '../components/nav/nav.vue'
import TianHeader from '../components/search/header.vue'
import ContentMid from '../components/content/ContentMid.vue'
import ShortCut from '../components/ShortCut/ShortCut.vue'
import FooterContent from '../components/footer/Footer.vue'

export default {
    name:'Home',
    components:{
    NavBar,
    TianHeader,
    ContentMid,
    ShortCut,
    FooterContent,
  },
}
</script>

<style scoped>

</style>