<template>
<form action="">
    <div class="form-list">
    <div class="form-content">
        <slot name="form-item"></slot>
    </div>
    <div class="form-content">
    </div>
    </div>
</form>
</template>

<script>
export default {
    name:'ReForm',
    data(){
        return{
      }
    },
    components:{
        
    }
}
    

</script>

<style scoped>
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
.select{
    width: 160px;
    border: 1px solid #ccc;
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