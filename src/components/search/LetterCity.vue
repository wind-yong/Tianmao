<template>
     <div class="letter-city">
         <!-- one字母 -->
         <slot name="letter-title"><span class="letter-title">A</span></slot>
         <!-- 按字母排城市 -->
         <slot name="all-citis">
             <p class="all-citis">
                 <span class="city"></span>
             </p>
         </slot>
         
     </div>
</template>

<script>
export default {
    name:'LetterCity'
}
</script>

<style scoped>
.letter-city{
    position: relative;
}
.letter-title{
    position: absolute;
    display: inline-block;
    left: 20px;
    top: 10px;
    color: #dd2727;
    text-align: center;
}
.all-citis{
    margin: 10px 0 ;
    padding-left: 60px;
    overflow: hidden;
    display: block;   
}
.all-citis .city{
    width: 10%;
    color: #333;
    padding-left: 20px;
    margin-left: 0;
    margin-bottom: 12px;  
    float: left;
}
</style>