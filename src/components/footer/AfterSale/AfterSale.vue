<template>
  <div class="afrer-sale">
      <img src="../../../assets/img/tianmaochaoshi.png" alt="" class="tianmao-logo">
      <service-list v-for="(listItem,listindex) in ServiceList" :key="listindex">
          <div class="title" slot="title">
              <span><a href="">{{listItem.title}}</a></span>
          </div>
          <ul class="content" slot="content" >
              <li v-for="item,index in listItem.list" :key="index">
                  <a href="">{{item}}</a>
              </li>
          </ul>
      </service-list>
      <service-list>
            <div class="title" slot="title">
              <span><a href="">随时随地逛</a></span>
          </div>
          <ul class="content" slot="content" >
                <li>
                    <img src="../../../assets/img/chaoshi-code.png" alt="" class="qr-code">
                </li>
          </ul>
      </service-list>
  </div>
</template>

<script>
import ServiceList from './ServiceList.vue'
import {getShopData} from '../../../network/home'
export default {
    name:'AfterSale',
    components:{
        ServiceList,
    },
    data(){
        return{
            ServiceList:[],
        }
    },
    created(){
    getShopData().then(res=>{
        this.ServiceList = res.data.ServiceList
    })
    }
}
</script>

<style scoped>
.afrer-sale{
    padding-left: 170px;
    width: 1020px;
    background-position: 0 bottom;
    position: relative;
        padding-top: 22px;
    height: 190px;
    margin: auto;
    border-top: 1px solid #ededed;
    background: url('../../../assets/img/tianmaotouxiang.png') 45px bottom/68px 25px no-repeat;
}
.afrer-sale .tianmao-logo{
    width: 112px;
    height: 40px;
    position: absolute;
    top: 22px;
    left: 0;
}
.afrer-sale .qr-code{
    width: 105px;
    height: 105px;
    line-height: 105px;
    text-align: center;
}

</style>