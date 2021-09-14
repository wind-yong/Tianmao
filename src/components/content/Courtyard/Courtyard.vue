<template>
  <div class="courtyard">
      <court-top></court-top>
      <court-bot></court-bot>
  </div>
</template>

<script>
import CourtBot from './CourtBot.vue'
import CourtTop from './CourtTop.vue'
export default {
    name:'Courtyard',
    components:{
        CourtBot,
        CourtTop,
    }
}
</script>

<style scoped>
    .courtyard{
        float: left;
        width: 750px;
    }
</style>

