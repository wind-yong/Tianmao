<template>
<div class="right-menu">
  <slot name="menu-hd">
    <router-link to="/MyTaobao" class="menu-hd">
        我的淘宝
        <b></b>
    </router-link>
  </slot>
  <slot name="menu-bd">
      <div class="menu-bd">
          <div class="menu-bd-panel">
            <a href="">已买到的宝贝</a>
            <a href="">已卖出的宝贝</a>
      </div>
  </div>
  </slot>
    
  </div>
</template>

<script>
export default {
    name:'Dropdown'
}
</script>

<style scoped>
.menu-hd{
    display: block;
    color: #999;
    height: 26px;
    padding: 0 14px 0 10px;
    border-left: 1px solid #f2f2f2;
    border-right: 1px solid #f2f2f2;
    line-height: 26px;
    position: relative;
}
/* 下拉框 */
.menu-bd{
    display: none;
    padding:  8px 10px;
    position: absolute;
    z-index: 999;
    color: #999;
    border: 1px solid #f2f2f2;
    border-top: 1px solid #fff;
    background-color: #fff;
}
.menu-hd b{
    position: absolute;
    right: 6px;
    top: 12px;
    width: 0;
    height: 0;
    border-width: 3px;
    border-style: solid dashed dashed;
    border-color: #bbb transparent transparent;
    font-size: 0;
    line-height: 0;
}

.right-menu:hover .menu-bd{
    display: block;
}
.right-menu:hover .menu-hd{
    background-color: #fff;
    color: red;
    text-decoration: underline;
}
.menu-bd-panel a{
    color: #666;
    display: block;
    line-height: 20px;
}
.menu-bd-panel a:hover{
    color: red;
    text-decoration: underline;
}
</style>