<template>
<div class="sales">
    <slot name="m-floor">

    </slot>
 
</div>
</template>

<script>
export default {
    name:'SalesList'
}
</script>

<style scoped>
.sales{
    clear: left;
    min-height: 559px;
}
.m-floor{
    position: relative;
    margin-bottom: 50px;
    height: 600px;
    /* background-color: thistle; */
}
.header{
    overflow: hidden;
    padding: 5px 0 5px 5px;
}
.content{
    border-top: 2px solid #000;
    overflow: hidden;
}

.recommend{
    width: 240px;
    float: left;
    margin-left: -100%;
    background-color: #b373fb;
}
.words{
    height: 200px;
    padding: 30px 0 30px 20px;
    
}

.words a{
    margin: 0 10px 10px 0;
    line-height: 1.2;
    float: left;
    width: 57px;
    height: 57px;
    text-align: center;
    color: #2f2f2f;
    background-color: #fff;
    position: relative;
    border: 1px solid #fff;
    border-radius: 57px;
    display: table;
}
.words a:hover{
    color: #fff;
    background: 0 0;
    border-color: rgba(0,0,0,.3);
}
.words a .inner{
    display: table-cell;
    vertical-align: middle;
}
.words a .inner b{
    font-weight: 400;
    max-width: 40px;
    margin: 0 auto;
    overflow: hidden;
    max-height: 2.4em;
}

.goods .sold-out{
    top: 33px;
    left: 50%;
    margin-left: -47px;
    position: absolute;
    width: 95px;
    height: 95px;
    background: url('../../../assets/img/sold.png');
}
.promo{
    position: relative;
    width: 150px;
    float: left;
    margin-left: -150px;
    padding-top: 30px;
    font-size: 0;
}
.promo img{
        position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 39px;
    z-index: 1;
}

.goods{
    float: left;
    width: 100%;
    min-height: 1px;
}

.goods a{
    float: left;
    width: 25%;
    color: #2f2f2f;
    height: 278px;
    overflow: hidden;
    border-right: 1px solid #e7e7e7;
    margin-right: -1px;
    /* background-color: tomato; */
}

.list{
    margin: 0 150px 0 240px;
    overflow: hidden;
    border: 1px solid #e7e7e7;
    border-width: 0 1px;
}
.goods a .wrap{
    margin: 20px;
    position: relative;
}
.goods a .wrap img{
    margin: 0 auto 10px;
    display: block;
    /* background-size: 41% 23%; */
}
.goods a .wrap h3{
        white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 18px;
    font-weight: 700;
}
.goods a .wrap .title{
        color: #666;
    margin-bottom: 5px;
        white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.goods .price{
    font-size: 18px;
    font-weight: 700;
    font-family: arial;
    line-height: 1.231;
}
.goods .price i{
    font-size: .5em;
    font-style: normal;
    vertical-align: top;
    font-weight: 400;
}
.goods .price span{
    color: #2f2f2f;
}
.goods button{
    color: #999;
        position: absolute;
    bottom: -12px;
    right: 1px;
    width: 40px;
    height: 40px;
        font-size: 40px;
    line-height: 36px;
    background: 0 0;
    border: none;
    cursor: pointer;
    outline: 0;

        font-weight: 400;
}
.goods .shop-out{
    
    color: #e9394e;
}

</style>