<template>
  <div>
<!--    导航条-->
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
          <div :style="{'background':shoppingCartNum==0?'#999':'#ff6700'}">购物车（{{shoppingCartNum}}）</div>
        </div>
      </div>
    </div>
<!--菜单-->
    <home-menu></home-menu>
<!--  Banner-->
    <home-banner></home-banner>
<!--    快速通道-->
    <div class="w1230 auto flex between mt15 h200">
      <img class="mr5" src="@/assets/1.png"/>
      <img class="mr5" width="307" src="@/assets/x1.jpeg"/>
      <img class="mr5" width="307" src="@/assets/x2.jpg"/>
      <img class="mr5" width="307" src="@/assets/x3.png"/>
    </div>
<!--    商品主体-->
    <div class="main mt20">
      <div class="w1230 auto">
        <img width="100%" class="mt20 mb20" src="@/assets/m1.webp">
<!--        商品组件-->
        <com-goods-menu title="手机" :img="[require('@/assets/phone.webp')]"
                        :data="phoneData"></com-goods-menu>
        <com-wear></com-wear>
<!--        <com-goods-menu title="智能穿戴"-->
<!--                        :img="[require('@/assets/watch.webp')]"-->
<!--                        :list="['耳机','穿戴']"-->
<!--                        :more="'浏览更多'"-->
<!--                        :data="watchData"></com-goods-menu>-->
        <com-goods-menu title="笔记本 | 平板"
                        :img="[require('@/assets/laptop.webp')]"
                        :list="['更多']"
                        :more="'耳机'"></com-goods-menu>
        <com-goods-menu title="生活电器"
                        :img="[require('@/assets/tv.webp'),require('@/assets/wash_m.webp')]"
                        :list="['电暖器','扫地机','空气','清洁']"
                        :more="'耳机'"></com-goods-menu>
        <img width="100%" class="mt20 mb20" src="@/assets/m2.webp">
      </div>
    </div>
    <div class="w1230 auto">
      <img width="100%" class=" mt20 mb20" src='../assets/footer.png'>
    </div>
  </div>

</template>

<script>
import homeMenu from "@/components/home/homeMenu";
import homeBanner from "@/components/home/homeBanner";
import comGoodsMenu from "@/components/com-goods-menu";
import ComWear from "@/components/com-wear";
export default {
  name: "page-home",
  data(){
    return{
      shoppingCartNum:1,
      phoneData:[{
        id:1,
        img:require('@/assets/phone/p1.webp'),
        title:'Redmi Note 13 Pro',
        desc:'小金刚品质',
        currentPrice:1499
      },{
        id:2,
        img:require('@/assets/phone/p2.webp'),
        title:'Redmi Note 13 5G',
        desc:'一亿像素更快更清晰',
        currentPrice:1099,
        originPrice:1199
      },{
        id:3,
        img:require('@/assets/p3.webp'),
        title:'Redmi Note 13 5G',
        desc:'一亿像素更快更清晰',
        currentPrice:1099,
        originPrice:1199
      },{
        id:4,
        img:require('@/assets/phone/p2.webp'),
        title:'Redmi Note 13 5G',
        desc:'一亿像素更快更清晰',
        currentPrice:1099,
        originPrice:1199
      },{
        id:5,
        img:require('@/assets/p3.webp'),
        title:'Redmi Note 13 5G',
        desc:'一亿像素更快更清晰',
        currentPrice:1099,
        originPrice:1199
      },{
        id:6,
        img:require('@/assets/p3.webp'),
        title:'Redmi Note 13 5G',
        desc:'一亿像素更快更清晰',
        currentPrice:1099,
        originPrice:1199
      },{
        id:7,
        img:require('@/assets/p3.webp'),
        title:'Redmi Note 13 5G',
        desc:'一亿像素更快更清晰',
        currentPrice:1099,
        originPrice:1199
      },{
        id:8,
        img:require('@/assets/p3.webp'),
        title:'Redmi Note 13 5G',
        desc:'一亿像素更快更清晰',
        currentPrice:1099,
        originPrice:1199
      }],
      watchData:[
        {
          id:1,
          img:require('@/assets/watch/w1.webp'),
          title:'小米手环 8 Pro',
          desc:'AMOLED炫彩大屏',
          currentPrice:399,
        },
        {
          id:2,
          img:require('@/assets/watch/w2.webp'),
          title:'Redmi Watch3 青春版',
          desc:'1.83超大屏幕|腕上蓝牙通话|全天候',
          currentPrice:329,
          originPrice:399
        },
        {
          id:3,
          img:require('@/assets/watch/w3.webp'),
          title:'小米手环 8 NFC',
          desc:'快拆时尚腕带|腕上蓝牙通话|全天候',
          currentPrice:259,
          originPrice:299
        },
        {
          id:4,
          img:require('@/assets/watch/w3.webp'),
          title:'小米手环 8 NFC',
          desc:'快拆时尚腕带|腕上蓝牙通话|全天候',
          currentPrice:259,
          originPrice:299
        },
        {
          id:5,
          img:require('@/assets/watch/w3.webp'),
          title:'小米手环 8 NFC',
          desc:'快拆时尚腕带|腕上蓝牙通话|全天候',
          currentPrice:259,
          originPrice:299
        },
        {
          id:6,
          img:require('@/assets/watch/w3.webp'),
          title:'小米手环 8 NFC',
          desc:'快拆时尚腕带|腕上蓝牙通话|全天候',
          currentPrice:259,
          originPrice:299
        },
        {
          id:7,
          img:require('@/assets/watch/w3.webp'),
          title:'小米手环 8 NFC',
          desc:'快拆时尚腕带|腕上蓝牙通话|全天候',
          currentPrice:259,
          originPrice:299
        },
        {
          id:8,
          img:require('@/assets/watch/w3.webp'),
          title:'小米手环 8 NFC',
          desc:'快拆时尚腕带|腕上蓝牙通话|全天候',
          currentPrice:259,
          originPrice:299
        }
      ]

    }
  },
  components:{
    ComWear,
    homeMenu,
    homeBanner,
    comGoodsMenu,

  }
}
</script>

<style scoped lang="less">
.main{
  background: #f5f5f5;
}
.nav{
  height:40px;
  background: #333;
  .nav_center{
    color:#e5e5e5;
    .nav_center_left{
      width: 750px;
      line-height: 40px;
    }
    .nav_center_right{
      line-height: 40px;
      width:400px;
      div{

      }
    }
  }
}
.h40{
  height: 40px;
}

</style>
