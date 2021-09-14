<template>
    <div class="chose-area">
        <h3>
            临汾
            <i class="icon icon-xiangxia"></i>
        </h3>
        <div class="area">
            <div class="hot-cities">
                <span class="hot">热门城市：</span>
                <p class="cities" >
                    <span v-for="city,index in HotCities" :key="index">{{city}}</span>
                </p>
            </div>
            <p class="letters">
                <span class="tab">ABCDE</span>
                <span class="tab">FGHJ</span>
                <span class="tab">KLMNP</span>
                <span class="tab">QRSTW</span>
                <span class="tab">XYZ</span>
            </p>
            <div class="ABCDE C_content">
                <letter-city v-for="CityTitle,Cindex in Cities" :key="Cindex">
                    <span class="letter-title" slot="letter-title">{{CityTitle[0]}}</span>
                    <p class="all-citis" slot="all-citis">
                        <span class="city" v-for="item,index in CityTitle[1]" :key="index">{{item}}</span>
                    </p>
                </letter-city>
            </div>
            <div class="FGHJ C_content"></div>
            <div class="KLMNP C_content"></div>
            <div class="QRSTW C_content"></div>
            <div class="XYZ C_content"></div>
        </div>
    </div>
</template>

<script>
import LetterCity from './LetterCity.vue'
import {getShopData} from '../../network/home'

export default {
    name:'ChoseArea',
    components:{
        LetterCity,
    },
    data(){
        return{
            HotCities:[],
            Cities:{},
        }
    },
    created(){
        getShopData().then(res=>{
        this.HotCities = res.data.HotCities
        this.Cities = res.data.Cities
        })
    }
}
</script>

<style scoped>
    .chose-area{
        float: left;
        position: relative;
        top: 25px;
        z-index: 12;
        margin-top: 36px;
        max-width: 464px;
    }
    /* 被选中 */
    .chose-area:hover .area{
        display: block;
    }
    .chose-area:hover h3{
        border-bottom: none;
    }
    .chose-area h3{
        position: relative;
        color: #30b30e;
        padding: 6px 12px;
        font-size: 16px;
        font-weight: 400;
        border: 1px solid #e5e5e5;
        line-height: 1.5;
        margin-top: -36px;
        margin-left: -1px;
        overflow: hidden;
        max-width: 100px;
    }
    .chose-area h3 .icon{
        /* font-weight: 400; */
        margin: 2px;
        
    }
    /* 下拉框 */
    .area{
        display: none;
        border: 1px solid #e5e5e5;
        position: absolute;
        background-color: #fff;
        left: 0;
        top: 10px;
        width: 480px;
        /* height: 480px; */
        z-index: -1;
        margin-top: -9px;
        margin-left: -1px;
        font-size: 14px;
    }

    .hot-cities{
        overflow: hidden;
        position: relative;
        padding-top: 20px;
    }
    .hot-cities .hot{
        color: #999;
        padding-left: 25px;
    }
    .hot-cities .cities{
        margin-top: 20px;
        overflow: hidden;
        display: block;
    }
    .hot-cities .cities span{
        width: 10%;
        display: block;
        float: left;
        color: #333;
        margin-left: 0;
        margin-bottom: 12px;
        padding-left: 25px;
    }
    .letters{
        margin: 0;
        padding: 20px 25px 0;
        border-bottom: 1px solid #eee;
    }
    .letters span{
        box-sizing: border-box;
        width: 19%;
        text-align: center;
        padding: 10px 0;
        display: inline-block;
    }
    .letters .active{
        position: relative;
        border: 1px solid #eee;
        border-bottom: 1px solid #fff;
        top: 1px;
    }
    .C_content{
        margin: 20px 0;
    }
</style>
