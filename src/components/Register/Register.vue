<template>
<div class="register">
  <register-nav></register-nav>
  <div class="recontent">
      <agreement></agreement>
      <mobile-number v-if="$store.state.reindex===0"></mobile-number>
      <message v-else-if="$store.state.reindex===1"></message>
      <paid-way v-else-if="$store.state.reindex===2"></paid-way>
      <success v-else-if="$store.state.reindex===3"></success>
      
  </div>

</div>
</template>

<script>
import agreement from './agreement.vue'
import RegisterNav from './RegisterNav.vue'
import MobileNumber from './MobileNumber.vue'
import PaidWay from './PaidWay.vue'
import Success from './Success.vue'
import Message from './Message.vue'


export default {
  components: { 
    agreement,
    RegisterNav,
    MobileNumber,
    Message,
    PaidWay,
    Success,
    Message,
  },
    name:'Rigester',
    data(){
      return{
        reindex:this.$store.state.reindex,
      }
    },
    
}
</script>

<style scoped>
.register{
    width: 990px;
    margin: 0 auto;
    overflow: hidden;
    display: block;
    height: 700px;
    position: relative;
}
.recontent{
    padding: 50px 0;
}
</style>