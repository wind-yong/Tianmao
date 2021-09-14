<template>
    <div class="category">
        <div class="cat" @mouseleave="Out()">
            <div class="cat-content">
                <b class="decorate" :style="{display:status,top:top}">
                    <s></s>
                </b>
                <div class="category-item">
                <ul >
                <li class="cat-item" v-for="categoryitem,cindex in Category"
                :key="cindex" 
                @mouseover="GetPosition(cindex)"
                >
                <h3>
                        <i class="icon" :class="[categoryitem.Icon,{'select':cindex===dindex}]" ></i>
                        <a href="" :class="{'select':cindex===dindex}">{{categoryitem.title}} </a>
                </h3>
                <p >
                        <a href="" v-for="item,index in categoryitem.list" 
                        :key="index" :class="{'select':cindex===dindex}" >{{item}}</a>
                </p>
                <i class="icon icon-xiangyou arrow" :class="{'select':cindex===dindex}"></i>
                </li>

                <li class="last" >
                    <h3>
                        <i class="icon icon-chongzhi01" ></i>
                        <a href="">生活服务</a>
                    </h3>
                    <p>
                        <a href="">信用卡还款</a>
                        <a href="">转账</a>
                        <a href="">充话费</a>
                        <a href="">点券</a>
                    </p>
                </li>
            </ul>
                </div>
                <!-- 下拉框 -->
                <div class="item-down" :style="{display:status,top:itemtop}">
                    <div class="subview" v-for="Subview,Sindex in CategoryItem" :key="Sindex"  v-show="dindex===Sindex">
                            <div class="subview-li" v-for="subLi,Lindex in Subview" :key="Lindex">
                                <h4>{{subLi.name}}</h4>
                                <p>
                                    <a href="" v-for="item,index in subLi.detial" :key="index">{{item}}</a>       
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {getShopData} from '../../../network/home'
export default {
    name:'CategoryLeft',//左侧分类栏 总
    components:{
        
    },
    data(){
        return{
        status:'none',
        top:'1px',
        itemtop:'1px',
        Category:[],
        CategoryItem:[],
        dindex:-1,
        }
    },
    methods:{
        GetPosition(index){
            this.dindex = index
            this.status = 'block'
            this.top = index*74 + 'px'
            if(index<=3){
               this.itemtop = index*74 + 'px'
            }else{
                this.itemtop = 3*74 +'px'
            }
        },
        Out(){
            this.status = 'none'
            this.dindex = -1
        },
        get(i){
            console.log(i)
        }
    },
    created(){
        getShopData().then(res=>{
        this.Category = res.data.Category
        this.CategoryItem = res.data.CategoryItem
    })}
}
</script>

<style scoped>
    .category{
        float: left;
        width: 240px;
        height: 585px;
        /* background-color:skyblue; */
    }
    .cat-content{
        position: relative;
        top: 0px;
        float: left;
        width: 238px;
        height: 100%;
        border: 1px solid #e7e7e7;
        z-index: 11;
    }

        .category-item{
            position: relative;
    padding: 0 14px;
    height: 100%;
    max-height: 584px;
    line-height: 1.1!important;
    overflow: hidden;
    }
    .category-item ul{
        margin: -1px 0 0;
        padding: 0;
    }
    .category-item ul li{
            float: left;
    position: relative;
    list-style: none;
    width: 100%;
    height: 34px;
    margin: 0;
    padding: 19px 0;
    border-top: 1px solid #e7e7e7;
    line-height: 1.1;
    }
    .cat-item h3,.last h3{
        font-size: 14px;
        font-weight: 700;
        position: relative;
        color: #515151;
        text-indent: 30px;
    }
    /* .cat-item h3 {
        color: #515151;
    } */
    .cat-item h3 i,.last h3 i{
        position: absolute;
        width: 20px;
        height: 20px;
        left: 0;
        top: 0;
        margin-top: -4px;
        overflow: hidden;
        text-align: center;
        text-indent: 0;
        text-decoration: none;
        font-size: 20px;
        color: #e22a40;
        font-weight: 400;
    }
    .cat-item p,.last p{
    margin-top: 10px;
    margin-left: -8px;
    font-size: 12px;
    color: #999;
    overflow: hidden;
    text-indent: 30px;
    }
    .cat-item p a,.last p a{
        color: #999;
        margin-left: 8px;
    }
    .cat-item i,.last i{
        position: absolute;
    top: 22px;
    right: 5px;
    color: #515151;
    font-size: 12px;
    font-weight: 400;
    }

    .decorate{
    position: absolute;
    background: #e00024;
    opacity: .9;
    width: 100%;
    top: 0;
    left: -10px;
    height: 72px;
    /* z-index: 0; */
    padding-left: 15px;
    }
    .decorate s{
    display: block;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: #aa2633;
    border-top-color: #aa2633;
    position: absolute;
    bottom: -10px;
    left: 0;
    }
    /* .cat-item:hover a,.cat-item:hover i{
        color: #fff;
    } */


    .item-down{  
        position: absolute;
        background-color: #fff;
        border: 3px solid #e22a40;
        width: 944px;
        max-height: 357px;
        top: 0;
        left: 100%;
        margin-left: 1px;
        line-height: 1.2;
        z-index: 100;
    }

        /* 鼠标我没有移入 */
    .item-down .subview{
        /* display: none; */
        height: 100%;
        position: relative;
        overflow: hidden;
    }
    .item-down .subview .subview-li{
        float: left;
    border-right: 1px dotted #d3d3d3;
    padding: 16px 0 15px 25px;
    margin-right: 2px;
    width: 222px;
    height: 88px;
    overflow: hidden;
    }
    .subview-li h4{
        color: #515151;
    font-size: 12px;
    font-weight: 700;
    }
    .subview-li p{
        overflow: hidden;
        margin: 0px;
    }
    .subview-li p a{
        border-left: 1px solid #e7e7e7;
    padding-left: 9px;
    margin-left: -10px;
    margin-right: 18px;
        float: left;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 12px;
    overflow: hidden;
    color: #666;
    }
    .select{
        color: #fff !important;
    }
</style>