<template>
    <div class="market">
        <ul>
            <li>
                <a href="#">
                    <i class="icon icon-serviceyizhanshigouqi"></i>
                    一站式购齐
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="icon icon-serviceman88baoyou"></i>
                    满88包邮
                </a>
            </li>
            <li class="licence">
                <a href=""><img src="../../assets/img/guohui.png" alt=""></a>
            </li>
            <li class="bian">
                <a href=""><img src="../../assets/img/bian.png" alt=""></a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'HeaderBanner'
}
</script>

<style scoped>
    .market{
        padding: 25px 0 0 15px;
        width: 242px;
        float: right;
    }
    .market ul{
        text-align: right;
        margin-right: 5px;
    }
    .market ul li{
        display: inline-block;
        margin: 0 8px;
    }
    .market ul li a{
        color: #666;
        font-weight: bolder;
    }
    .market ul li .icon{
        color: #30b30e;
        text-align: right;
        margin-top: 20px;
        font-size: 16px;
    }
    .market .licence{
        width: 36px;
        height: 36px;

    }
    .market img{
        vertical-align: middle;
    }
    .market .bian{
        margin-right: -33px;
        margin-top: -58px;
    }
</style>