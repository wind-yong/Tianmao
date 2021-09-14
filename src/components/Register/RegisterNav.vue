<template>
  <div class="re-nav">
      <el-steps :active="$store.state.reactive+1" finish-status="success">
        <el-step title="设置用户名"></el-step>
        <el-step title="填写账号信息"></el-step>
        <el-step title="设置支付方式"></el-step>
        <el-step title="注册成功"></el-step>
        <el-step title="" icon=" "></el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
    name:'RegisterNav',
    data(){
        return{
            active:this.$store.state.reactive,
        }
    }
}
</script>

<style >
.re-nav{
    width: 990px;
    margin: 0 auto;
    color: #3c3c3c;
    height: 46px;
    border-bottom: 2px solid #e6e6e6;
    position: relative;
}
.re-nav .el-steps{
    width: 720px;
    margin: 0 auto;
    list-style: none;
}
.re-nav .el-step{
    position: relative;

}
.re-nav .el-step .is-horizontal .is-flex{
    flex-basis: auto;
}

.re-nav .el-step__icon{
    margin-top: 10px;
}
.re-nav .el-step__main{
    position: absolute;
    top: 4px;
    left: 30px;
    text-align:center;
    font-size: 16px;
    font-weight: 700;
}
.re-nav .el-step__title.is-success{
    color: #3e3e3e;
}
.re-nav .el-step.is-horizontal .el-step__line{
   position: absolute;
   top: 46px;
   left: 0px;
   background-color: #e6e6e6;
}

.re-nav .el-step__head.is-success{
    color: #ff4700;
    border-color: #ff4700;
}


.re-nav ol li i{
    display: inline-block;
    zoom: 1;
    margin-right: 5px;
    width: 24px;
    height: 24px;
    text-align: center;
    line-height: 24px;
    font-size: 14px;
    font-weight: 700;
    color: #FFF;
}
</style>