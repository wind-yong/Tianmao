<template>
  <div class="list-item">
      <slot name="title">
          <div class="title">
              <span><a href=""></a></span>
          </div>
         </slot>
        <slot name="content">
            <ul class="content">
             <li></li> 
          </ul>
        </slot>
  </div>
</template>

<script>
export default {
    name:'ServiceList',
}
</script>

<style scoped>
.list-item{
    width: 150px;
    float: left;
    padding-left: 52px;
}
.list-item .title{
    color: #646464;
    font-size: 16px;
    font-weight: 700;
    height: 30px;
    line-height: 30px;
    text-align: left;
}
.list-item a{
    display: block;
    width: 100px;
    overflow: hidden;
    text-align: left;
    height: 20px;
    line-height: 20px;
    color: #8b8b8b;
}
.list-item .title a{
    color: #646464;
}
.list-item .content{
    text-align: left;
}
</style>