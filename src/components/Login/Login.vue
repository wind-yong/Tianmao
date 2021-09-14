<template>
  <div class="login-page">
      <!-- 头部 -->
    <div class="header">
        <a href="">
            <img src="../../assets/img/Tmall-logo.png" alt="">
        </a>
    </div>

    <div class="content">
        <!-- 背景 -->
        <div class="backimg">            
           <img src="../../assets/img/login-bac.png" alt="">
            <a href=""></a>
        </div>
        <!-- 登录入口 -->
        <login-form></login-form>
    </div>

    <!-- 底部 -->
    <login-footer></login-footer>
  </div>
</template>

<script>
import LoginFooter from './LoginFooter.vue'
import LoginForm from './LoginForm/LoginForm.vue'
export default {
    name:'Login',
    components:{
        LoginFooter,
        LoginForm,
    }
}
</script>

<style scoped>
/*登录头部样式*/
.header{
    height: 44px;
    width: 1190px;
    margin: 0 auto;
    padding: 22px 0;
}

.header img{
    margin-top: 8px;
    height: 27px;
    width: 190px;
}
/*中间内容*/
.content{
    width: 100%;
    height: 600px;
    background-color: #E32A25;
    box-sizing: border-box;
    position: relative;
    margin-bottom: 40px;
}
.backimg{
    position: relative;
    height: 600px;
    width: 1190px;
    margin: 0 auto;
}
.backimg a{
    display: block;
    position: absolute;
    top: 90px;
    left: 100px;
    height: 440px;
    width: 630px;
}
</style>