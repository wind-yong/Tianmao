<template>
  <div class="site-item">
      <slot name="site-title"></slot>
      <slot name="site-list"></slot>
  </div>
</template>

<script>
export default {
    name:'SiteItem'
}
</script>

<style>
   
    .site-item h2{
        font-size: 16px;
        padding-bottom: 8px;
        font-weight: 400;
        line-height:1.4;
    }
    .site-item h2 span{
        padding-left: 6px;
    }
    .site-item ul{
        margin-right: -20px;
        overflow: hidden;
    }
    .site-item ul li{
        width: 95px;
        float: left;
        padding: 6px 0;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .site-item ul li a{
        color: #666;
        position: relative;
    }
</style>