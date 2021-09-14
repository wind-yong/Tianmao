<template>
<div class="cart-content">
<div class="cart-list">
 <el-table
    :data="cartlist"
    border
    style="width: 100%">
     <el-table-column type="index"> </el-table-column>
    <el-table-column   
      prop="title"
      label="商品"
      width="220">
    </el-table-column>
    <el-table-column
      prop="price"
      label="价格/￥"
      width="200">
    </el-table-column>
    <el-table-column
      label="数量">
      <template slot-scope="scope">
            <el-input-number v-model="cartlist[scope.$index].ProductNum"  @change="handleChange" :min="1" label="数量"></el-input-number>
      </template>
    </el-table-column>
        <el-table-column
      label="删除">
      <template slot-scope="scope">
            <button class="delete" @click="deleteCart(scope.row)">删除</button>
      </template>
    </el-table-column>
  </el-table>

</div>
</div>
</template>

<script>
import {GetCart} from '../../network/home'
import {DeleteCart} from '../../network/home'
import CartCheck from './CartCheck.vue'
export default {
    name:'CartList',
    components:{
        CartCheck,
    },
    data(){
        return{
            cartlist:[],
        }
    },
    methods: {
      handleChange(value) {
        console.log(value);
      },
      deleteCart(rowData){
          let UserId = this.$store.state.UserId
          let productId = rowData._id
          DeleteCart({UserId,productId}).then(res=>{
              GetCart().then(res1=>{
                this.$store.state.cartlist = res1.data.cartlist
                this.cartlist = res1.data.cartlist
            })
          })
      }
    },
    beforeMount(){
        if(sessionStorage.elementToken){
            GetCart().then(res=>{
                this.$store.state.currentUser = res.data.username
                this.$store.state.UserId = res.data._id
                console.log("GetCart: ",res)
                this.$store.state.cartlist = res.data.cartlist
                this.cartlist = res.data.cartlist
            })
        }else{
            console.log("为获取到购物车信息")
        }        
    }
}
</script>

<style scoped>
.cart-content{
    width: 1190px;
    margin: 0 auto;
    padding-top: 20px;
}
.delete{
    width: 80px;
    height: 30px;
    background-color: #ff0036;
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
    border: none;
}
</style>