<template>
  <div class="form-item">
      <slot name="form-item"></slot>
  </div>
</template>

<script>
export default {
    name:'ReFormItem'
}
</script>

<style scoped>
.form-item{
    padding: 10px 0 10px 260px;
    line-height: 36px;
    zoom: 1;
}
</style>