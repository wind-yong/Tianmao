<template>
  <div class="seller-box">
     <ul>
       <li>
         <h3>商家：</h3>
         <a href="">商家中心</a>
         <a href="">天猫规则</a>
         <a href="">商家入驻</a>
         <a href="">运营服务</a>
         <a href="">商家品控</a>
         <a href="">商家工具</a>
         <a href="">天猫智库</a>
         <a href="">喵言喵语</a>
       </li>
       <li>
         <h3>帮助：</h3>
         <div>
           <a href="">商家服务大厅</a>
         </div>
         <div>
           <a href="">问商友</a>
         </div>
       </li>
     </ul>
  </div>
</template>

<script>
export default {
    name:'SellerBox'
}
</script>

<style>
    .seller-box ul{
      overflow:  hidden;
      width: 122px;
    }
    .seller-box h3{
      font-weight: 700;
      color: #666;
      font-size: 12px;
    }
    .seller-box ul li{
      float: none;
      padding: 5px 0;
      display: block;
      line-height: 1.4;
      border-bottom: 1px dotted #827777;
      margin-right: -20px;
    }
    .seller-box ul li a{
      color: #666;
      display: inline-block;
      /* width: 48px; */
      font-size: 12px;
      margin-right: 20px;
      line-height: 22px;
    }
    .seller-box ul li a:hover{
      color:red;
      text-decoration:  underline;
    }
</style>