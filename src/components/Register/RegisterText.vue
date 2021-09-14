<template>
  <div class="reg-wrapper" >
      <div class="reg-all-content">
        <a href="" class="x">
          <slot name="x-icon">
              <span class="el-icon-close"></span>
          </slot>
      </a>
      <div class="header">
         <slot name="header"><h3>注册协议</h3></slot>
      </div>
      <div class="re-body">
        <slot name="body-cnt"></slot>
      </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'RegisterText',

    data(){
        return{

        }
    },

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