<template>
<div class="login-err">
    <i class="el-icon-warning-outline"></i>
    <div class="login-err-cont">登录名或登录密码不正确</div>
</div>
</template>

<script>
export default {
    name:'LoginErr',
}
</script>

<style scoped>
.login-err{
    /* border-color: #201514; */
    border: #ffb4a8 1px solid;
    background-color: #fef2f2;
    margin-top: 4px;
    position: relative;
    margin-bottom: 10px;
}
.login-err i{
    font-size: 16px;
    line-height: 28px;
    color: #ff934c;
    float: left;
    padding-left: 4px;
    padding-right: 4px; 
}
.login-err .login-err-cont{
    font-size: 12px;
    padding: 6px;
    color: #6c6c6c;
}
</style>