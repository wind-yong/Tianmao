<template>
<div id="nav-bar">
      <div class="navimg">
          <a href="#"><img src="../../assets/img/navtop.jpg" alt=""></a>
      </div>
      <div class="navmenu">
          <div class="menu-container clearfix ">
            <!-- 左侧的菜单 -->
            <div class="left-bar">
                <p class="home-page">
                    <i class="icon icon-liuliangyunpingtaitubiao02"></i>
                    <a href="#">天猫首页</a>
                </p>
                <p id="login-info" v-if="!isLogin">
                    <span>喵，欢迎来到天猫</span>
                    <router-link to="/login">请登录</router-link>
                    <router-link to="/register">免费注册</router-link>
                </p>
                <p id="login-info" v-else>
                    <span>Hi,{{$store.state.currentUser}}</span>
                    <a>积分</a>
                    <a class="sign-out" @click="LoginOut">退出</a>
                </p>
                

            </div>
            <!-- 右侧的菜单 -->
            <ul class="right-bar clearfix">
                <li class="mytaobao">
                    <drop-down></drop-down>
                </li>
                <li class="cart text">
                    <i class="icon icon-tianchongxing-" style="font-size: 13px;"></i>
                    <router-link to="/ShopCar">购物车</router-link>
                </li>
                <li class="favorite">
                     <drop-down>
                         <router-link to="/Favorites" class="menu-hd" slot="menu-hd">
                             收藏夹
                             <b></b>
                         </router-link>
                         <div class="menu-bd" slot="menu-bd">
                              <div class="menu-bd-panel">
                                <a href="#">收藏的宝贝</a>
                                <a href="#">收藏的店铺</a>
                                </div>
                         </div>
                     </drop-down>
                </li>
                <li class="separator"></li>
                <li class="mobile text">
                    <i class="icon icon-mobile" style="font-size: 13px;"></i>
                    <a href="">手机版</a>
                    <div class="qrcode">
                        <img src="../../assets/img/tianmao-code.png" alt="" class="qr-code">
                        <img src="../../assets/img/qrcode-text.jpg" alt="" class="qr-text">
                        <b></b>
                    </div>
                </li>
                <li class="home text">
                    <a href="#">淘宝网</a>
                </li>
                <li class="seller">
                    <drop-down>
                        <a href="#" class="menu-hd" slot="menu-hd">
                             商家支持
                             <b></b>
                         </a>
                         <div class="menu-bd" slot="menu-bd">
                            <seller-box></seller-box>
                         </div>
                    </drop-down>
                </li>
                <li class="sitemap">
                    <drop-down>
                        <a href="#" class="menu-hd" slot="menu-hd">
                            <i class="icon icon-wangzhandaohang" style="font-size: 13px;"></i>
                             网站导航
                             <b></b>
                         </a>
                         <div class="menu-bd" slot="menu-bd">
                            <site-cont></site-cont>
                         </div>
                    </drop-down>
                    
                </li>
            </ul>
        </div>
      </div>
</div>
</template>

<script>
import DropDown from '../../components/nav/dropdown.vue'
import SellerBox from '../../components/nav/seller.vue'
import SiteCont from './SiteCont.vue'
import {GetList} from '../../network/home'
export default {
    name:'NavBar',
    components:{
        DropDown,
        SellerBox,
        SiteCont,
    },
    data(){
        return{
            username:'',
            isLogin:false,
        }
    },
    methods:{
        LoginOut(){
            sessionStorage.removeItem('elementToken')
            this.$store.commit('OutToken')
            console.log("退出登录")
            this.$router.push({
                path:'/login',
            })
        }
    },

    

    beforeMount(){
        if(sessionStorage.elementToken){
            this.isLogin = true
            GetList().then(res=>{
                
                this.$store.state.currentUser = res.data.username
                this.$store.state.UserId = res.data._id
            
                console.log("GetList: ",res)
            })
        }else{
            console.log("用户未登录")
        }
        
    }
}
</script>

<style scoped> 
    @import '../../assets/css/base.css';
    #nav{
        width: 100%;
    }
    .navimg{
        width: 100%;
        height: 100px;
        background-color: #8C58FA;
    }
    .navimg a{
        display: block;
        width: 1190px;
        height: 100px;
        margin: 0 auto;
    }
    .navimg a img{
        width: 1190px;
        height: 100px;
        margin: 0 auto;
    }
    .navmenu{
        width: 100%;
        height: 26px;
        background-color: #f2f2f2;
        line-height: 26px;
        border-bottom: 1px solid #e5e5e5
   
    }
    .navmenu a{
        color: #999;
    }
    .navmenu a:hover{
        color: red;
        text-decoration: underline;
    }
    /* 图标 */
    .home-page .icon,.cart .icon,.mobile .icon,.sitemap .icon{
        margin-right: 4px;
        position: relative;
        top: 1px;
        color: #FF0036;
        /* font-size: 12px; */
    }
    /* 设置内部容器 */
    .menu-container{
        width: 1190px;
        margin: 0px auto;
        background-color: #f2f2f2;
        /* background-color: teal; */
    }
    .left-bar p{
        float: left;
        color: #999;
        margin-right: 20px;
    }
    .left-bar p a{
        color: #999;
    }
    #login-info span,#login-info a{
        padding: 0 10px 0 10px;
    }
    /* 右侧菜单 */
    .right-bar{
        float: right;
        height: 26px;
        color: #999;
        /* background-color: #8C58FA; */
        line-height: 26px;
    }
    .right-bar li{
        float: left;
        color: #999;
        /* padding: 0 10px 0 10px; */
    }
    .right-bar .text{
        padding: 0 10px 0 10px;
    }
    .right-bar li a:hover{
        color: red;
        text-decoration: underline;
    }
    /* 分割线 */
    .right-bar .separator{
        display: inline-block;
        width: 0;
        height: 14px;
        line-height: 14px;
        vertical-align: top;
        position: relative;
        top: 6px;
        left: 0;
        font-size: 0;
        border-left: 1px solid #ccc;
        margin: 0 2px 0 5px;
        padding: 0px 0px;
    }
    /* 二维码 */
    .mobile{
        position: relative;
    }
    .mobile .qrcode{
        position: absolute;
        width: 175px;
        height: 227px;
        background: #fff;
        left: -48px;
        top: 26px;
        box-shadow: 0 0 5px #aaa;
        display: none;
        z-index: 999;
    }
    .mobile:hover .qrcode{
        display: block;
    }
    .mobile .qrcode .qr-img{
        width: 175px;
        height: 175px;
        margin: 5px 0 0px;
    }
    .mobile .qrcode .qr-text{
            text-indent: -9999px;
        overflow: hidden;
        margin: 0 15px;
        line-height: 35px;
    }
    .mobile .qrcode b{
        width: 0;
        height: 0;
        line-height: 0;
        font-size: 0;
        position: absolute;
        left: 50%;
        top: -10px;
        margin-left: -2px;
        border-width: 5px;
        border-style: dashed dashed solid;
        border-color: transparent transparent #fff;
    }
    /* 网站导航 */
    .sitemap .right-menu{
        position: relative;
        box-sizing: border-box;
    }
    .sitemap .menu-bd{
        width: 1188px;
        height: 110px;
        border-width: 0 1px 1px;
        border: solid #f2f2f2;
        padding: 25px 0;
        right: 0;
        left: auto;
        background-color: #fff;
    }
</style>