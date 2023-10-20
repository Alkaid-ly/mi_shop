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
    <!-- 菜单 -->
    <home-menu></home-menu>

    <!-- 标题 -->
    <div class="title-box">
      <div class="w1230 auto flex between title">
        <div>
          <span class="fs18">Redmi Note 13 Pro</span>
          <span class="fs13 c-ccc ml20 mr20">|</span>
          <span class="fs13 c-666">Redmi Note 12 Pro</span>
        </div>
        <div>右边</div>
      </div>
    </div>

    <!-- 主体 -->
    <div class="w1230 auto flex between main mt30">
<!--      左轮播-->
      <div class="detailBanner">
        <el-carousel indicator-position="outside" height="585px">
          <el-carousel-item v-for="(item,index) in img" :key="index">
            <img :src="item" width="80%">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div >
        <div class="goods-title fs26">{{ phoneData.title }}</div>
        <div class="goods-desc mt15 mb15 fs13">
          <span class="textColor">至高优惠{{ phoneData.prePrice }}元</span><br>
          <span class="c-999">{{ phoneData.desc }}元</span>
        </div>
        <div v-if="phoneData.isSelfSupport" class="fs13 textColor mb15">小米自营</div>
        <div>
          <span class="fs16 textColor">{{phoneData.defaultData.price.current}}元</span>
          <span class="fs13 c-999 ml10 line-del">{{phoneData.originPrice}}元</span>
        </div>
        <hr>
<!--        选项-->
        <com-options @change="change" :data="phoneData.version"></com-options>
        <com-options @change="colorChange" :data="phoneData.color"></com-options>
<!--        结算-->
        <div class="computed">
          <div class="fs14 c-666 flex between">
            <span>
              {{ phoneData.title }}
              {{ phoneData.defaultData.version.text }}
              {{ phoneData.defaultData.color.text }}
            </span>
            <p>{{ phoneData.defaultData.price.current }}元
              <span v-if="phoneData.defaultData.price.original" class="line-del">{{ phoneData.defaultData.price.original }}元 </span> </p>
          </div>
        </div>
<!--        加入购物车-->
        <div class="shoppingCart mt20">
          <!-- <button class="fs18">加入购物车</button> -->
          <router-link class="fs18" to="/addShopping" tag="button">加入购物车</router-link>
        </div>
      </div>
    </div>
    <div class="w1230 auto">
      <img width="100%" class=" mt20 mb20" src='../assets/footer.png'>
    </div>
  </div>
</template>

<script>
import HomeMenu from "@/components/home/homeMenu";
import ComOptions from "@/components/goods/com-options";
export default {
  name: "page-detail",
  components: {ComOptions, HomeMenu},
  data () {
    return {
      shoppingCartNum: 2,
      phoneData: {
        title: 'Redmi Note 13 Pro+',
        desc: '新 2 亿像素｜金刚曲屏｜第二代 1.5K 高光护眼屏',
        isSelfSupport: true,
        prePrice: 100,
        currentPrice: 1899,
        originalPrice: 1999,
        version: {
          text: '选择版本',
          list: [{
            text: '12GB+256GB',
            price: 1699,
            id:1
          },{
            text: '8GB+256GB',
            price: 1599,
            id:2
          },{
            text: '8GB+128GB',
            price: 1499,
            id:3
          },{
            text: '12GB+512GB',
            price: 1899,
            id:4
          }]
        },
        color: {
          text: '选择颜色',
          list: [{
            text: '星沙白',
            price: 0,
            id:1
          },{
            text: '子夜黑',
            price: 0,
            id:2
          },{
            text: '浅梦空间',
            price: 0,
            id:3
          },{
            text: '时光蓝',
            price: 0,
            id:4
          }]
        },
        defaultData: {
          version: {
            text: '12GB+256GB',
            price: 1699,
            id:1
          },
          color: {
            text: '星沙白',
            price: 0,
            id:1
          },
          price: {
            current: 1699,
            original: 1799
          }
        }
      },
      img:[require('@/assets/detail-phone/all.png'),
          require('@/assets/detail-phone/white.png'),
          require('@/assets/detail-phone/black.png'),

      ],

    }
  },
  methods: {
    change(item) {
      this.phoneData.defaultData.version = item
      this.phoneData.defaultData.price = {
        current: item.price
      }
    },
    colorChange(item) {
      this.phoneData.defaultData.color = item
    }
  }
}
</script>

<style lang="less" scoped>
.nav {
  height: 40px;
  background: #333;

  .nav_center {
    color: #e5e5e5;

    .nav_center_left {
      width: 750px;
      line-height: 40px;
    }

    .nav_center_right {
      line-height: 40px;
      width: 400px;

      div {
        width: 100px;
      }
    }
  }
}

.title-box {
  border-top: 1px solid #ddd;
  height: 70px;
  line-height: 70px;
  box-shadow: 0px 2px 5px #ddd;
  // background: red;
}

.main {
  & > div {
    width: 50%;
  }
}
.computed{
  background: #f5f5fa;
  padding: 40px 30px;
}
.detailBanner{
  //border: 1px solid red;
  width: 100px;
  height: 585px;
}
.shoppingCart{
  button{
    width: 50%;
    height: 60px;
    background: #ff6700;
    color: #fff;
    border: none;

  }
}

</style>
