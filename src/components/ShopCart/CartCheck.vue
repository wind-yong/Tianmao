<template>
<div class="cart-check">
    <input type="checkbox" name="cart-check">
    <slot name="cart-check-label">
        <label for=""></label>
    </slot>
</div>
</template>

<script>
export default {
    name:'CartCheck',
}
</script>

<style scoped>
.cart-check{
    width: 15px;
    height: 15px;
    position: relative;
}
.cart-check input{
    position: absolute;
    left: -20px;
    top: -20px;
}
.cart-check label{
    position: relative;
    float: left;
    width: 15px;
    height: 15px;
    line-height: 15px;
}
</style>