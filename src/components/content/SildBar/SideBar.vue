<template>
  <div class="side-bar">
      <div class="side-content">
          <a href=""><img src="../../../assets/img/侧-宠物.jpg" alt=""></a>
          <a href=""><img src="../../../assets/img/侧-宠物.jpg" alt=""></a>
      </div>
  </div>
</template>

<script>
export default {
    name:'SideBar'
}
</script>

<style scoped>
.side-bar{
    float: left;
    margin-left: 10px;
    width: 190px;
}
.side-content{
    border-top: 1px solid #e5e5e5;
    height: 342px;
}
.side-content a{
    display: block;
    width: 188px;
    height: 170px;
    border: 1px solid #e5e5e5;
    border-width: 0 1px 1px;
}
.side-content a img{
    width: 100%;
    height: 100%;
    /*  */
    background-color: rgb(163, 59, 163);
}
</style>