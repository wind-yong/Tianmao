<template>
    <div :style="{display:stat}">
         <register-text>
     <div slot="body-cnt">
        <p>
              <strong>【审慎阅读】</strong>
              您在申请注册流程中点击同意前，应当认真阅读以下协议。
              <strong style="text-decoration: underline">请您务必审慎阅读、充分理解协议中相关条款内容，其中包括：</strong>
          </p>
          <p>
              1、
              <strong style="text-decoration: underline">与您约定免除或限制责任的条款；</strong>
          </p>
          <p>
              2、
              <strong style="text-decoration: underline">与您约定法律适用和管辖的条款；</strong>
          </p>
          <p>
              3、
              <strong style="text-decoration: underline">其他以粗体下划线标识的重要条款。</strong>
          </p>
          <p>如您对协议有任何疑问，可向平台客服咨询。</p>
          <p>
              <strong>【特别提示】</strong>
              当您按照注册页面提示填写信息、阅读并同意协议且完成全部注册程序后，
              即表示您已充分阅读、理解并接受协议的全部内容。
              如您因平台服务与淘宝发生争议的，适用《淘宝平台服务协议》处理。
              如您在使用平台服务过程中与其他用户发生争议的，依您与其他用户达成的协议处理。
          </p>
          <p>
              <strong style="text-decoration: underline">阅读协议的过程中，如果您不同意相关协议或其中任何条款约定，您应立即停止注册程序。</strong>
          </p>
          <p>
              <a href="">淘宝平台服务协议</a>
          </p>
            <p>
              <a href="">隐私权政策</a>
          </p>
            <p>
              <a href="">法律声明</a>
          </p>
            <p>
              <a href="">支付宝及客户端服务协议</a>
          </p>
            <p style="text-align: center">
              <button @click="btnClick">同意协议</button>
          </p>
     </div>
 </register-text>
    </div>
</template>

<script>
import RegisterText from './RegisterText.vue'
export default {
    name:'agreement',
    components:{
        RegisterText
    },
    data(){
        return{
            stat:"block",
        }
    },
    methods:{
        btnClick(){
            this.stat = "none"
        }
    }
}
</script>

<style scoped>
.reg-wrapper{
    display: block;
    position: absolute;
    left: 133px;
    top: 120.5px;
    border-top-color: #ff0036;
    width: 680px;
    margin: 0 auto;
    padding: 20px;
    color: #3e3e3e;
    border: 2px solid #dedede;
    border-top: 2px solid #ff4a00;
    background-color: #FFF;
    z-index: 999999;
}
.reg-wrapper .x{
    display: inline-block;
    zoom: 1;
    width: 24px;
    height: 24px;
    font-size: 24px;
    text-align: center;
    line-height: 24px;
    color: #DDD;
    text-decoration: none;
    position: absolute;
    top: 20px;
    right: 20px;
}
.reg-wrapper .header{
    font-size: 14px;
}
.reg-wrapper .re-body p{
    margin-top: 8px;
    margin-left: 5px;
    font-size: 12px;
    width: 100%;
    /* font-weight: 700; */

}
.reg-wrapper .re-body p strong{
    color: #000;
    font-weight: 700;
}
.reg-wrapper .re-body p a{
    font-size: 14px;
    font-weight: 700;
    color: #ff0036
}
.reg-wrapper .re-body p button{
    min-width: 180px;
    display: inline-block;
    zoom: 1;
    height: 36px;
    line-height: 36px;
    padding: 0 20px;
    color: #FFF;
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    background: #ff4001;
    border: 0;
    border-radius: 3px;
}
</style>