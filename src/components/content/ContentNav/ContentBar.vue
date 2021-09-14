<template>
  <div class="content-bar">
      <div class="bar-cont">
        <ul>
          <li class="index">
            <a href="">首页</a>
          </li>
          <li class="separator">
            <a href=""></a>
          </li>
          <li class="qycg">
            <a href="">企业采购</a>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name:'ContentBar'
}
</script>

<style scoped>
.contetn-bar{
      position: relative;
    height: 36px;
    width: 100%;
}
.bar-cont ul{
  display: block;
  margin-left: 240px;
  overflow: hidden;
}
.bar-cont ul li{
  float: left;
}
.bar-cont .separator {
    width: 0;
    height: 28px;
    border-right: 1px solid #d9d9d9;
}
.bar-cont ul li a{
    font-size: 16px;
    color: #333;
    line-height: 36px;
    margin-left: -1px;
    padding: 0 25px;
    text-decoration: none;
    font-weight: 700;
}

</style>