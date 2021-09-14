<template>
<div class="form-box">
    <div class="form-inner">
        <div class="form-content">
            <div class="iframe">
                <div class="login-box">
                        <div class="login-v">
                            <div class="login-content">
                                <el-form :model="registerForm" status-icon :rules="rules" ref="registerForm" label-width="260px" class="demo-registerForm">
                                <el-tabs v-model="activeName" @tab-click="handleClick">
                                    <el-tab-pane label="密码登录" name="first">
                                        <div class="wrapper">
                                            <!-- 登录错误 -->
                                            <login-err v-show="loginerr"></login-err>
                                        <div class="login">
                                            <div class="input password">                                            
                                                <label class="label-icon"><i class="icon icon-denglu-yonghuming"></i></label>
                                            <input type="text" placeholder="会员名/邮箱/手机号" v-model="registerForm.username">
                                           
                                        </div>
                                        <div class="input password">
                                            <div>
                                                <label class="label-icon"><i class="icon icon-ziyuanxhdpi"></i></label>
                                            </div>
                                            <input type="password" placeholder="请输入登录密码" v-model="registerForm.password">
                                            
                                            
                                        </div>            
                                            </div>    
                                        </div>  
                                            <div class="input extral">
                                            <div class="btn">
                                                <button class = "btnLogin"  @click="submitForm('registerForm')">登录</button>
                                               
                                            </div>
                                            <div class="remind_text">
                                                <a href="">忘记密码</a>
                                                <a href="">忘记用户名</a>
                                                <router-link to="/register">免费注册</router-link>
                                            </div>
                                        </div>
                                    </el-tab-pane>
                                    <el-tab-pane label="短信登录" name="second">
                                        <div class="wrapper">
                                            <login-err v-show="loginerr"></login-err>
                                            <div class="login">
                                                <div class="input mobile">
                                                <div>
                                                    <label class="label-icon"><i class="icon icon-shoujihao"></i></label>
                                                </div>
                                                <div class="select-wrapper">
                                                <select name="phonecode" id="phone-code">
                                                    <option value="">+86 中国大陆</option>
                                                </select>
                                                </div>
                                                <input type="text" placeholder="请输入手机号" id="select-input">
                                            </div>          

                                        <div class="input mobile">
                                                <div>
                                                    <label class="label-icon"><i class="icon icon-yanzhengma"></i></label>
                                                </div>
                                                <input type="text" placeholder="请输入验证码">
                                                <div class="send-btn">
                                                    <a href="">获取验证码</a>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                                            <div class="input extral">
                        <div class="btn">
                            <button class = "btnLogin">登录</button>
                        </div>
                        <div class="remind_text">
                            <a href="">忘记密码</a>
                            <a href="">忘记用户名</a>
                            <!-- <a href="">免费注册</a> -->
                            <router-link to="/register">免费注册</router-link>
                        </div>
                    </div>
                                    </el-tab-pane>
                                </el-tabs>
                                    </el-form>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div> 

</div>
</template>

<script>
import {PostLogin} from '../../../network/home'
import LoginErr from './LoginErr.vue'
export default {
    name:'LoginForm',
    components:{ LoginErr },

    data() {
        var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('不能为空'));
        }
        callback()
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

      return {
        loginerr:false,  
        activeName: 'first',
        registerForm: {
          password: '',
          username: '',
        },
        rules: {
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          username: [
            { validator: checkAge, trigger: 'blur' },
            {min:4,max:25,message:'长度在5-25之间', trigger: 'blur'}
          ]
        },
      };
    },
    methods:{
        handleClick(tab, event) {
        console.log(tab, event);
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            PostLogin(this.registerForm).then(res=>{
                console.log("PostLogin在工作: ")
                sessionStorage.setItem('elementToken','Bearer '+res.data)
                this.$store.commit('SetToken')
                this.$router.push({
                    path:'/',
                })
            })
            .catch(err=>{
                console.log(err.response.status)
                if(err.response.status){
                    this.loginerr = true
                }
            })
          } 
          else {
            console.log('error submit!!');
            return false;
          }
        });
      }, 
    }
}
</script>

<style >
.login-content .el-tabs__item{
    font-size: 16px;
    color: #3c3c3c;
    font-weight: 700;
}
.login-content .el-tabs__item:hover{
     font-size: 16px;
    color: #3c3c3c;
    font-weight: 700;
}

.login-content .el-tabs__item.is-active{
    font-size: 16px;
    color: #3c3c3c;
    font-weight: 700;

}
.login-content .el-tabs__active-bar{
  background: #3c3c3c;
}
/*登录*/
.form-box{
    
    position: absolute;
    top: 91px;
    right: 233px;
}
.form-content{
        /* box-sizing: border-box; */

    position: relative;
}
.iframe{  
    width: 350px;
    height: 400px;
}
.login-box{
    width: 300px;
    min-height: 350px;
    padding: 25px 25px 23px;
    color: #6c6c6c;
    background: #fff;
    position: relative;
    margin: 0 auto;
}
.login-v{
    width: 100%;
        margin-bottom: 0;
}

.login-content{
        width: 100%;
    margin: 0 auto;
    padding-top: 2px;
}


/*输入*/

.login{
    font-size: 14px;
}
.login .input{
    position: relative;
    margin-bottom: 20px;
    font-size: 14px;
}

.login .label-icon{
    display: block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #ccc;
    position: absolute;
    left: 1px;
    bottom: 1px;
    background-color: #ccc;
}
.login .label-icon i{
    font-size: 24px;
    color: #fff;
}
.login .input input:hover{
    border-color: #ff0036;
}
.login .input input{
    box-sizing: border-box;
    width: 100%;
        border: 1px solid #ccc;
    height: 42px;
    outline: none;
    font-size: 14px;
    padding-left: 50px;

}

.login-box  .extral{
margin-bottom: 0;
    margin-top: 0;
}
.login-box  .extral .btn{
    width: 100%;
}
.login-box button{
    font-size: 16px;
    /* height: 40px; */
    width: 100%;
    text-align: center;
    background-color: #ff0036;
    border: 1px solid #ff9000;
    border-radius: 3px;
    color: #fff;
    height: 42px;
    line-height: 42px;
    outline: none;
}
.login-box button:hover{
        background-color: #ff0036;
}
.login-box .select-wrapper{
        position: absolute;
    left: 40px;
    bottom: 0;
}
.login-box #phone-code{
    color: rgba(0,0,0,.0001);
    background: url(https://gw.alicdn.com/tfs/TB1.8ugw.T1gK0jSZFrXXcNCXXa-200-200.png);
    background-size: 24px;
    background-repeat: no-repeat;
    background-position: 48px 8px;
    width: 65px;

        border: none;
    outline: 0;
    padding-left: 10px;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
    border-bottom: 0;
    padding-right: 14px;
}
.login-box #select-input{
padding-left: 110px;
}
.login-box .send-btn{
    position: absolute;
    right: 10px;
    bottom: 0;
    line-height: 40px;
}
.login-box .send-btn{
        color: #6c6c6c;
    font-size: 12px;
}
.remind_text{
    font-size: 10px;
    text-align: right;
    margin: 16px 0 0 0;
}
.remind_text>a{
    color: #6c6c6c;
    display: inline-block;
    margin-left: 10px;
}

</style>