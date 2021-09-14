<template>
  <div class="content-cart">
      <div class="listbox">
          <div class="grace"></div>
          <div class="grid-header">
              <div class="item">商品</div>
              <div class="amount">数量</div>
              <div class="price">价格</div>
              <div class="ops">删除</div>
          </div>
          <div class="grid-main">
              <p class="not-login">如果您还未登录，可能导致购物车为空，请
                  <span class="login">马上登陆</span>
              </p>
              <div class="bot-box"></div>
          </div>
      </div>
      <div class="handler">
          <a href="" class="num-tatol">
              <strong>￥0.00</strong>元
          </a>
          <a href="" class="weight-total">
              <strong>0</strong>kg
          </a>
      </div>
      <i class="icon icon-yuan b1"></i>
      <i class="icon icon-yuan b2"></i>
      <i class="icon icon-tianmaochaoshi-gouwuche"></i>
      <i class="icon arrow icon-xiangxia1"></i>
  </div>
</template>

<script>
export default {
    name:'ContentCart'
}
</script>

<style scoped>
    .content-cart{
    float: right;
    position: relative;
    top: -3px;
    width: 200px;
    height: 31px;
    margin: 3px 0;
    background: #bf0000;
    }
    .listbox{
        overflow: hidden;
    width: 232px;
    left: 0;
    top: 33px;
    border: 4px solid #e22b40;
    border-top: 0;
    color: #666;
    background: #fff;
    height: 0;
    border-width: 0 4px;
    }
    .grid-header{
        background: #f4f4f4;
    height: 30px;
    line-height: 30px;
    }
    .grid-header .item{
            width: 46px;
    }
    .grid-header .amount{
        width: 68px;
    }
    .grid-header .price{
        width: 60px;
    }
    .grid-header .ops{
        width: 40px;
    }
    .grid-header .item,.grid-header .amount,.grid-header .price,.grid-header .ops{
            text-align: center;
    display: inline-block;
    vertical-align: middle;
    }
    .grid-main{
        height: 214px;
    overflow-y: auto;
    overflow-x: hidden;
    zoom: 1;
    position: relative;
    }
    .not-login{
            padding: 32px 10px;
    color: #333;
    text-align: center;
    }
    .not-login .login{
        color: #00f;
    }
    .handler{
            height: 33px;
    line-height: 33px;
    color: #fff;
    cursor: pointer;
    padding: 0 18px;
    overflow: hidden;
    position: relative;
    }
    .num-tatol{
        color: #fcff00;
    font-family: arial;
    font-size: 12px;
    }
    .num-tatol strong{
            font-size: 22px;
    font-weight: bolder;
    vertical-align: middle;
    margin: 0 2px;
    }
    .weight-total{
color: #fff;
    text-decoration: none;
    }

    .content-cart .icon-tianmaochaoshi-gouwuche{
        display: block;
    width: 30px;
    height: 30px;
    border-radius: 14px;
    line-height: 30px;
    font-size: 30px;
    z-index: 3;
    left: -24px;
    top: 2px;
    color: #fff;
    font-weight: 100;
    position: absolute;

    }
    .content-cart .icon-yuan{
        display: block;
        width: 36px;
        height: 36px;
        line-height: 36px;
        font-size: 38px;
        z-index: 1;
        left: -27px;
        top: -3px;
        color: #fff;
        position: absolute;
    }
    .content-cart .b2{
        width: 32px;
        height: 32px;
        font-size: 32px;
        color: #333;
        z-index: 2;
        left: -25px;
        top: -3px;
    }
    .content-cart .arrow{
        width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: #fff;
    background: 0 0;
    right: 8px;
    top: 15px;
    overflow: hidden;
    position: absolute;

    }
</style>