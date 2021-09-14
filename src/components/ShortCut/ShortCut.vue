<template>
  <div class="tm-shortcut">
      <div class="shortcut">
        <ul>
          <li slot="cut-list" v-for="item,index in ShortCut" :key="index">
              <cut-list>
                  <div slot="cut-list">
                      <h3><i class="icon" :class="item.icon"></i>{{item.title}}</h3>
                      <p v-for="content,indexC in item.content" :key="indexC">
                          <a href="">{{content}}</a>
                      </p>
                  </div>
              </cut-list>
          </li>
      </ul>
      </div>
  </div>
</template>

<script>
import CutList from './CutList.vue'
import {getShopData} from '../../network/home'
export default {
    name:'ShortCut',
    components:{
        CutList,
    },
    data(){
        return{
            ShortCut:{}
        }
    },
    created(){
        getShopData().then(res=>{
        this.ShortCut = res.data.ShortCut
        })
    }
}
</script>

<style scoped>
.tm-shortcut{
    margin-bottom: 10px;
}
.tm-shortcut .shortcut{
    width: 1190px;
    margin: 0px auto;
    background-color: #efefef;
    border-top: 1px solid #e4e4e4;
    padding: 20px 0;
    font-size: 12px;
    line-height: 1.5;
}
.tm-shortcut ul{
    width: 1190px;
    margin: 0 auto;
    overflow: hidden;
}
.tm-shortcut ul li{
    float: left;
    height: 95px;
    width: 197px;
    padding: 20px;
    border-left: 1px solid #e4e4e4;
    margin-left: -1px;
    list-style: none;
}
.tm-shortcut ul li h3{
    font-size: 16px;
    color: #e8394e;
}
.tm-shortcut ul li h3 .icon{
    margin-right: 5px;
    font-size: 25px;
    vertical-align: -2px;
    font-weight: 400;
}
.tm-shortcut ul li p a{
    margin-bottom: 5px;
    float: left;
    width: 50%;
    color: #444;
    text-decoration: none;
}
.tm-shortcut ul li p a:hover{
    color: #e8394e;
}
</style>