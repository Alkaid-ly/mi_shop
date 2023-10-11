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
          <div :style="{'background':shoppingCartNum==0?'#999':'#ff6700'}">购物车（{{shoppingCartNum}}）</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "page-home",
  data(){
    return{
      shoppingCartNum:1
    }
  }
}
</script>

<style scoped lang="less">
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
