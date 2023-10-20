<template>
<div>
  <div class="nav w100">
    <div class="w1230 auto h40 flex between nav_center">
      <div class="flex nav_center_left h40 fs12 between">
        <div>小米官网</div>
        <div>小米商城</div>
        <div>MIUI</div>
        <div>IoT</div>
        <div>云服务</div>
        <div>天星数科</div>
        <div>有品</div>
        <div>小爱开放平台</div>
        <div>资质证照</div>
        <div>协议规则</div>
        <div>下载app</div>
        <div>SelectLocation</div>
      </div>
      <div class="flex nav_center_right fs12 between text-center">
        <div>请登录</div>
        <div>消息通知</div>
        <div>我的订单</div>
        <div :style="{'background':shoppingCartNum==0?'#999':'#ff6700'}">购物车（{{ shoppingCartNum }}）</div>
      </div>
    </div>
  </div>
  <home-menu></home-menu>
  <!-- 加入购物车 -->
  <div class="main">
    <div class="w1230 auto ">
      <div class="flex between pt40 mb40">
        <div class="flex">
          <div>
            <img src="@/assets/success.png"/>
          </div>
          <div class="info ml20">
            <p class="fs24">已成功加入购物车！</p>
            <p class="fs13 c-666 mt5">Redmi Note 13 Pro  12GB+256GB  星沙白</p>
          </div>
        </div>
        <div class="btn-box">
          <button class="ml15 back">返回上一级</button>
          <button class="ml15 bgColor c-white border0">去购物车结算</button>
        </div>
      </div>
      <hr color="#ddd">
      <h2 class="text-center mt80 mb40">
        <span>买购物车中商品的人还买了</span>
      </h2>

      <div>
        <com-goods-menu :data="phoneData"></com-goods-menu>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import HomeMenu from "@/components/home/homeMenu";
import ComGoodsMenu from "@/components/com-goods-menu";
export default {
  name: "page-add-shopping",
  components: {ComGoodsMenu, HomeMenu},
  data () {
    return {
      shoppingCartNum: 2,
      phoneData: [
        {
          id: 1,
          img: require('@/assets/phone/p1.webp'),
          title: 'Redmi Note 13 Pro',
          desc: '小金刚品质',
          currentPrice: 1499
        },
        {
          id: 2,
          img: require('@/assets/phone/p1.webp'),
          title: 'Redmi Note 13 5G',
          desc: '一亿像素，更快更优先',
          currentPrice: 1099,
          originPrice: 1199
        },
        {
          id: 3,
          img: require('@/assets/phone/p1.webp'),
          title: 'Redmi Note 13 Pro',
          desc: '小金刚品质',
          currentPrice: 1499
        },
        {
          id: 4,
          img: require('@/assets/phone/p1.webp'),
          title: 'Redmi Note 13 5G',
          desc: '一亿像素，更快更优先',
          currentPrice: 1099,
          originPrice: 1199
        },
        {
          id: 5,
          img: require('@/assets/phone/p2.webp'),
          title: 'Redmi Note 13 Pro',
          desc: '小金刚品质',
          currentPrice: 1499
        },
        {
          id: 6,
          img: require('@/assets/phone/p2.webp'),
          title: 'Redmi Note 13 5G',
          desc: '一亿像素，更快更优先',
          currentPrice: 1099,
          originPrice: 1199
        },
        {
          id: 7,
          img: require('@/assets/phone/p2.webp'),
          title: 'Redmi Note 13 Pro',
          desc: '小金刚品质',
          currentPrice: 1499
        },
        {
          id: 8,
          img: require('@/assets/phone/p2.webp'),
          title: 'Redmi Note 13 5G',
          desc: '一亿像素，更快更优先',
          currentPrice: 1099,
          originPrice: 1199
        },
        {
          id: 9,
          img: require('@/assets/phone/p2.webp'),
          title: 'Redmi Note 13 Pro',
          desc: '小金刚品质',
          currentPrice: 1499
        },
        {
          id: 10,
          img: require('@/assets/phone/p2.webp'),
          title: 'Redmi Note 13 5G',
          desc: '一亿像素，更快更优先',
          currentPrice: 1099,
          originPrice: 1199
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.btn-box{
  button{
    width: 180px;
    height: 40px;
  }
  .back{
    background: none;
    border: 1px solid #aaa;
    color: #aaa;
  }

}
.main{
  background: #f5f5f5;
  hr{
    // height:10px;
    transform: scale(1,0.3);
  }
  h2{
    border-top: 1px solid #DDD;
    span{
      display: block; /* 把内联元素 转换成为  块元素 */
      transform: translateY(-20px);
      background: #f5f5f5;
      width: 430px;
      margin-left: auto;
      margin-right: auto;
      font-size: 30px;
      font-weight: 500;
      color: #999;
    }
  }
}
.nav{
  height: 40px;
  background: #333;
  .nav_center{
    color: #e5e5e5;
    .nav_center_left{
      width: 750px;
      line-height: 40px;
    }
    .nav_center_right{
      line-height: 40px;
      width:400px;
      div{
        width: 100px;
      }
    }
  }
}
</style>
