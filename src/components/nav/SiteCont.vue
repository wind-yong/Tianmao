<template>
  <div class="site-item">
      <div class="site-cont site-hot">
          <h2 slot="site-title">
              热点推荐
              <span>Hot</span>
          </h2>
          <ul class="site-list">
              <li>
                  <a href="#">天猫超市</a>
              </li>
              <li><a href="#">喵鲜生</a></li>
              <li><a href="#">科技新品
                  <i></i>
                  </a></li>
              <li><a href="#">女装新品</a></li>
              <li><a href="#">酷玩街</a></li>
              <li><a href="#">内衣新品</a></li>
              <li><a href="#">试美妆</a></li>
              <li><a href="#">运动新品</a></li>
              <li><a href="#">时尚先生</a></li>
              <li><a href="#">精明妈咪</a></li>
              <li><a href="#">吃乐会</a></li>
              <li><a href="#">企业采购</a></li>
              <li><a href="#">会员积分</a></li>
              <li><a href="#">天猫国际</a></li>
              <li><a href="#">品质频道</a></li>
          </ul>
      </div>
      <div class="site-cont site-market">
          <h2 slot="site-title">
              行业详情
              <span>Market</span>
          </h2>
          <ul class="site-list">
              <li>
                  <a href="#">美妆</a>
              </li>
              <li><a href="#">电器</a></li>
              <li><a href="#">女装
                  <i></i>
                  </a></li>
              <li><a href="#">男装</a></li>
              <li><a href="#">女鞋</a></li>
              <li><a href="#">男鞋</a></li>
              <li><a href="#">内衣</a></li>
              <li><a href="#">箱包</a></li>
              <li><a href="#">运动</a></li>
              <li><a href="#">母婴</a></li>
              <li><a href="#">家装</a></li>
              <li><a href="#">医药</a></li>
              <li><a href="#">食品</a></li>
              <li><a href="#">配饰</a></li>
              <li><a href="#">汽车</a></li>
          </ul>
      </div>
        <div class="site-cont site-help">
          <h2 slot="site-title">
              服务指南
              <span>Help</span>
          </h2>
          <ul class="site-list">
              <li>
                  <a href="#">帮助中心 </a>
              </li>
              <li><a href="#">品质保障 </a></li>
              <li><a href="#">特色服务 
                  <i></i>
                  </a></li>
              <li><a href="#">7天退换货 </a></li>
          </ul>
      </div>
  </div>
</template>

<script>
import SiteItem from './SiteItem.vue'
export default {
    name:'SiteCont',
    components:{
        SiteItem,
    }
}
</script>

<style scoped>
    .site-cont{
        height: 110px;
        padding-left: 30px;
        overflow: hidden;
    }
    .site-hot,.site-market,.site-help{
        float: left;
        line-height: 1.4;
    }
    .site-hot,.site-market{
        width: 455px;
    }
    .site-hot h2{
        color: #f56a00;
    }
    .site-hot a:hover{
        color: #f56a00;
        text-decoration: underline;       
    }
    .site-market{
        border-left: 1px solid #f5f5f5;
        border-right: 1px solid #f5f5f5;
    }
    .site-market h2{
        color: #2263d4;
    }
    .site-market a:hover{
        color: #2263d4;
        text-decoration: underline;
    }

    .site-help{
        width: 186px;
    }
    .site-help h2{
        color: #666;
    }
    .site-help a:hover{
        color: #666;
        text-decoration: underline;       
    }
</style>