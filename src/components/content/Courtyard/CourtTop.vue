<template>
    <div class="court-top"  @mouseover="stop()" @mouseout="move()">
        <div class="viewport">
            <div class="wrapper">
                
                <div  v-for="(item,index) in imgArray" :key="index"  v-show="mark === index">
                    <a href="#">
                            <img :src="item">
                    </a>
                </div>
               

            </div>
            <ul class="view-nav">
                <li v-for="(item,index) in imgArray" :key="index" :class="{'current': index===mark}" @click="change(index)">{{index+1}}</li>
                <!-- 当标记的数字等于第几张图片时，才有 'current'的class，当点击时，改变mark值 -->
            </ul>
            <i class="icon icon-toRight-fill next" @click="goto(nextIndex)" @mouseover="stop()" @mouseout="move()" title="下一个"></i>
            <i class="icon icon-toLeft-fill pre" @click="goto(preIndex)" @mouseover="stop()" @mouseout="move()" title="上一个"></i>
        </div>
    </div>
 
</template>

<script>
import {getShopData} from '../../../network/home'

export default {
    name:'CourtTop',
    data(){
        return{
            timer:null, // 定时器
            mark:0,//图片索引标志
            imgArray:[
            ],
            
        } 
    },

    computed:{
        preIndex(){
        if(this.mark == 0){
            return this.imgArray.length-1
        }else{
            return this.mark - 1
        }
        },
        nextIndex(){
        if(this.mark == this.imgArray.length-1){
            return 0
        }else{
            return this.mark + 1
        }
        }
    },
    methods:{
        autoPlay(){
            this.mark++
            if(this.mark===6){
                this.mark = 0 
            }
        },
        Play(){
            this.timer = setInterval(this.autoPlay,2500)
        },
        // 点击索引时，改变图片索引标志
        change(i){
            this.mark = i
        },
        //停止定时器
        stop(){
            clearInterval(this.timer)
        },
        move(){
            this.timer = setInterval(this.autoPlay,2500)
        },

        goto(index){
            this.mark = index
        }
 
    },

  created(){
    this.Play(),

    getShopData().then(res=>{
        this.imgArray = res.data.imgArray
        // console.log(this.imgArray)
    })
 
  }

}

</script>

<style scoped>
    .court-top{
        height: 291px;
        overflow: hidden;
        width: 100%;
        position: relative;
        background-color: teal;
    }
    .viewport{
        height: 291px;
        position: relative;
    }
    .viewport .wrapper{
        width: 6000px;
        height: 100%;
        float: left;
        position: relative;
    }
    .viewport .wrapper div{
        display: inline-block;
        width: 750px;
        height: 291px;
    }
    .viewport .wrapper a img{
        width: 100%;
        height: 100%;
    }

    /* 轮播点 */
    .view-nav{
        position: absolute;
        bottom: 10px;
        right: 15px;
        padding: 0px;
        text-align: center;
    }
    .view-nav li{
            display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    border-radius: 20px;
    background-color: #000;
    color: #fff;
    margin-right: 4px;
    }
    /* 当前图片 */
    .view-nav .current{
        background-color: red;
    }
    /* 左右按钮 */
    .viewport .icon{
        display: none;
        opacity: .3;
        position: absolute;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 25px;
        color: #fff;
        background: #000;
        top: 50%;
        margin-top: -25px;
    }
    .viewport .pre{
        left: 5px;
        padding: 0 9px 0 7px;
    }
    .viewport .next{
        right: 5px;
        padding: 0 7px 0 9px;
    }
    .court-top:hover i{
        display: inline;
    }

    
  .image-enter-active {
    transform: translateX(0);
    transition: all 0.5s;
  }
  .image-leave-active {
    transform: translateX(-750px);
    transition: all 1.5s;
  }
  .image-enter {
    transform: translateX(750px);
  }
  .image-leave {
    transform: translateX(0);
  }

</style>