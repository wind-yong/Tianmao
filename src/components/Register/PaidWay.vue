<template>
  <div class="paid-way" >
      <div class="container">
        <el-form :label-position="labelPosition" label-width="90px" :model="formLabelAlign">
            <el-form-item label="银行卡号" class="item">
                <el-input v-model="formLabelAlign.number"></el-input>
            </el-form-item>
            <el-form-item label="持卡人姓名" class="item">
                <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="证件" class="item">
                <select name="certificate" id="certificate" class="select">
                    <option value="A">身份证</option>
                </select>
                <el-input v-model="formLabelAlign.certificate" style="width:142px"></el-input>
            </el-form-item>
            <el-form-item label="手机号码" class="item">
                <el-input v-model="formLabelAlign.phoneNum" style="width:150px;margin-right:10px"></el-input>
                <el-button class="get-code">获取验证码</el-button>
            </el-form-item>
            <el-form-item>
                 <el-button type="primary" @click="renext()" class="reagreement" >同意协议并确定</el-button>                
                 <!-- <button class="reagreement">同意协议并确定</button> -->
            </el-form-item>
            <el-form-item class="text">
                <span>查看<a href="">《快捷支付服务相关协议》</a></span>
            </el-form-item>
        </el-form>
      </div>     
  </div>
</template>

<script>
import { PaidRegister } from '../../network/home'

export default {
    name:'PaidWay',
    data(){
        return{
            reindex:this.$store.state.reindex,
            labelPosition: 'right',
            formLabelAlign: {
                name: '',
                number: '',
                phoneNum: '',
                certificate:'',
            },
            options: [{
                value: '选项1',
                label: '身份证'}],
            value:"",
        }
    },
    methods:{
        renext(){
            this.$store.commit('REACTIVENEXT')
        },
       
    },
   
}
</script>

<style >

.paid-way{
    width: 990px;
    margin: 0 auto;
}
.container{
    position: relative;
    padding: 12px 0 0;
    min-width: 960px;
    min-height: 600px;
    border: 1px solid #d2d2d2;
}
.container  .el-form-item{
    position: relative;
    padding: 10px 0 10px 240px;
    width: 600px;
    margin: 0;
}
.container .el-form-item__label{
    font-size: 14px;
}


.container .item .el-input{
    width: 242px;
    height: 16px;
}
.container .item .el-input__inner{
    border-radius: 0;
    padding: 8px;
    border: 1px solid #ccc;
}
.container .item .se-input{
    width: 142px;
}
.container .select{
    width: 90px;
    text-indent: 4px;
    margin-right: 10px;
}
.el-button{
    width: 100px;
    border-radius: 0;
    font-size: 12px;
    height: 32px;
    line-height: 10px;
}
.reagreement{
    width: 178px;
    height: 35px;
    padding: 0;
    color: #fff;
    background: #00a3d2;
    border-color: #00a3d2;
    
}
.reagreement span{
    font-size: 14px;
    height: 35px;
    line-height: 35px;
}
.container .text{
    padding: 0 250px;
}
.text .el-form-item__content{
    padding: 0;
    font-size: 12px;
}
</style>