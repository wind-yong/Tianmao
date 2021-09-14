<template>
  <div class="mall-search">
    <div class="mall-search-form">
        <fieldset>
            <div class="search-input clearfix">
              <input type="text" name="tianmao" placeholder="搜索天猫超市商品" v-model="inputValue">
           </div>
           <button class="submit" @click="onSearch()" >搜索</button>
        </fieldset>       
 </div>
 </div>
</template>

<script>
import axios from "axios";
export default {
    name:'MallSearch',
    data(){
      return{
        inputValue:"",

      }
    },
    methods:{
      onSearch(){
        this.$router.push({
          path:'/SearchResult',
        })
        let _val = this.inputValue;
        axios.get('http://localhost:3000/user/node_a',{
              params:{ v_data : _val }
        });
        this.inputValue=""
      },
}
}
</script>

<style scoped>
    .mall-search{
      width: 540px;
      float: right;
      padding-top: 25px;
    }
    .mall-search-form{
       border:0px solid #30b30e;
       border-width: 3px 0 3px 3px;
    }
    fieldset,.search-input{
      position: relative;
    }
    fieldset{
      border: none;
    }
  .search-input input{
        background: #fff;
        font-size: 12px;
        margin: 0;
        z-index: 2;
        width: 289px;
        height: 20px;
        line-height: 20px;
        padding: 5px 3px 5px 5px;
        outline: 0;
        border: none;
        /* font-weight: 900; */
  }
  .submit{
        background-color: #30b30e;
        position: absolute;
        /* z-index: 1; */
        right: 0;
        top: 0;
        width: 90px;
        border: 0;
        font-size: 16px;
        letter-spacing: 4px;
        cursor: pointer;
        color: #fff;
        height: 30px;
        overflow: hidden;
  }
</style>>

