<template>
<div class="message" >
    <el-form :model="registerForm" status-icon :rules="rules" ref="registerForm" label-width="260px" class="demo-registerForm">
      <div class="form-group">
           <el-form-item label="登录名">
               <span class="form-text">{{$store.state.phoneNum}}</span>
            </el-form-item>
      </div>
      <div class="form-group">
            <el-form-item label="请设置登录密码">
                <span class="form-text">登录时验证，保护账号信息</span>
            </el-form-item>
           <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="registerForm.password" autocomplete="off"></el-input>
            </el-form-item>
             <el-form-item label="密码确认" prop="checkPass">
            <el-input type="password" v-model="registerForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
      </div>
      <div class="form-group">
           <el-form-item label="设置会员名">
            </el-form-item>
            <el-form-item label="登录名" prop="username">
                <el-input v-model.number="registerForm.username"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('registerForm');renext()" >提交</el-button>
            </el-form-item>
      </div>
    </el-form>
  
</div>  
</template>

<script>
import {Register} from '../../network/home'
export default {
    name:'Message',
     data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('不能为空'));
        }
        callback()
        // setTimeout(() => {
        //   if (!Number.isInteger(value)) {
        //     callback(new Error('请输入数字值'));
        //   } else {
        //     if (value < 18) {
        //       callback(new Error('必须年满18岁'));
        //     } else {
        //       callback();
        //     }
        //   }
        // }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.registerForm.checkPass !== '') {
            this.$refs.registerForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.registerForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      }
      return {
        registerForm: {
          password: '',
          checkPass: '',
          username: ''
        },
        rules: {
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          username: [
            { validator: checkAge, trigger: 'blur' },
            {min:4,max:25,message:'长度在5-25之间', trigger: 'blur'}
          ]
        },
        reindex:this.$store.reindex
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            Register(this.registerForm).then(res=>{
               console.log("registerForm在工作")
               console.log(res.data)
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      renext(){
            this.$store.commit('REACTIVENEXT')
        }
    }
}
</script>

<style>

.message{
    width: 720px;
    margin: 0 auto;
    font-size: 14px;
}
.form-group .el-form-item__label{
    color: #3c3c3c;
    font-size: 14px;
}
 .form-group .el-input {
    width: 202px;
    height: 17px;
    line-height: 17px;
    padding: 9px;
    font-size: 14px;
}
.form-group .el-button{
    background: #ff0036;
    width: 180px;
    font-weight: 700;
    font-size: 16px;
    height: 36px;
    border: none;
}
</style>