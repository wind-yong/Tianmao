<template>
  <div class="success" >
      <el-row>
        <el-col :sm="30" :lg="100">
            <el-result icon="success" title="注册成功">
            <template slot="extra">
                <el-button type="primary" size="medium" @click="back()">返回登录页面</el-button>
            </template>
            </el-result>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    data(){
        return{
            reindex:this.$store.state.reindex
        }
    },
    methods:{
        back(){
            this.$router.push({
                path:'/login'
            })
        }
    },
    created(){
        console.log(this.$store.state.reindex)
    }
}
</script>

<style>
.success{
    width: 990px;
    margin: 0 auto;
    /* background-color: burlywood; */
}
</style>