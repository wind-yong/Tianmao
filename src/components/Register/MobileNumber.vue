<template>
  <div class="mobile"  >
      <re-form>
        <div slot="form-item">
            <div class="form-item clearfix">
                <span>手机号码</span>
                <div class="text ">
                    <div class="select">
                        <el-select v-model="value" placeholder="请选择" >
                        <el-option
                        v-for="item in ares"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        <span style="float: left">{{ item.label }}</span>
                        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                        </el-option>
                    </el-select>
                    </div>
                    <input type="text" placeholder="请输入你的手机号码" class="item-text" v-model="message">
                </div>                
            </div>
            <div class="form-item" style="width:300px">
                <span>验证</span>
                <slider-code></slider-code>
            </div>
        </div>
        <div slot="form-item">
            <div class="form-item">
                <button @click="btnClick();renext()" class="next-step">下一步</button>
            </div>
        </div>
      </re-form>
  </div>
</template>

<script>
import SliderCode from './SliderCode.vue'
import ReForm from './ReForm.vue'

export default {
    name:'MobileNumber',
    data(){
        return{
        ares: [{
          value: '+86',
          label: '中国大陆'
        }, {
          value: '+886',
          label: '中国台湾'
        }],
        phoneNum: '',
        value:'',
        reindex:this.$store.state.reindex,
        isRight:false,
      }
    },
    components:{
        SliderCode,
        ReForm,
    },
    methods:{
        btnClick(){
            this.stat = "none"
        },
        renext(){
            this.$store.commit('REACTIVENEXT')
        },
    },
    computed:{
        message:{
            get(){
                return this.$store.state.phoneNum
            },
            set: function (newvalue){
                this.$store.commit('UPDATE_MSG',newvalue)
            }
        }
    }
}
    

</script>

<style scoped>
.isShow{
    display: block !important;
}
.mobile{
    padding: 50px 0px;
}
.mobile .form-list{
    width: 720px;
    margin: 0 auto;
    font-size: 14px;
}
.mobile .form-list .form-content{
    padding: 10px 0;
}
.mobile .form-content .form-item{
    padding: 10px 0 10px 260px;
    line-height: 36px;
    zoom: 1;
}
.form-item .text{
    position: relative;
    display: block;
}
.form-item span{
    display: inline;
    float: left;
    margin-left: -260px;
    width: 240px;
    height: 37px;
    line-height: 37px;
    text-align: right;
}
.form-item .item-text{
    border: 1px solid #dedede;
    width: 140px;
    height: 17px;
    line-height: 17px;
    float: left;
    padding: 9px;
    font-size: 14px;
}
.select {
    width: 160px;
    font-size: 14px;
    outline: 0;
    position: relative;
    cursor: pointer;
    float: left;
    /* padding-left: 10px; */
    height: 35px;
    border-right: 0;
    font-weight: 700;
    overflow: hidden;
}
.select .el-input__inner{
  border: 1px solid #ccc;
  border-radius: 0;
}
.select .el-select .is-focus{
      border: 1px solid #ccc;
}
.form-content .next-step{
    background: #ff0036;
    color: #fff;
    border: 0;
    border-radius: 3px;
    font-weight: 700;
    font-size: 16px;
    width: 180px;
    height: 36px;
    line-height: 36px;
    padding: 0 20px;
    display: inline-block;
}
</style>