<template>
     <div class="court-bot">
         <div class="row1">
             <a href="">
                 <img src="../../../assets/img/口腔.jpg" alt="">
             </a>
            <a href="">
                 <img src="../../../assets/img/粮油.jpg" alt="">
             </a>
            <a href="">
                 <img src="../../../assets/img/洗衣.jpg" alt="">
             </a>
             
         </div>
         <div class="row2">
             <a href=""><img src="../../../assets/img/茅台.jpg" alt=""></a>
             <a href=""><img src="../../../assets/img/乳饮.jpg" alt=""></a>
             <!-- <a href=""><img src="/img/茅台.jpg" alt=""></a> -->
             <a href=""><img src="../../../assets/img/茅台.jpg" alt=""></a>
         </div>
     </div>
</template>

<script>
export default {
    name:'CourtBot'
}
</script>

<style scoped>
.court-bot{
border: 1px solid #e5e5e5;
    border-width: 1px 0;
    height: 292px;
    font-size: 0;
}
.court-bot .row1{
    position: relative;
    left: -1px;
}
.court-bot .row1 a{
        border-left: 1px solid #eee;
    width: 249px;
    height: 120px;
    float: left;
}
.court-bot img{
    width: 100%;
    height: 100%;
    border: none;
    background-color: thistle;
}
.court-bot .row2 a{
    width: 250px;
    height: 172px;
    float: left;
}
</style>