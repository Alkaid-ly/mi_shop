<template>
  <div class="w1230 auto relative">
    <div>
      <img width="100%" v-for="(item,index) in bannerList" :key="index" :src="item" v-show="activeNum == index"/>
    </div>
    <div class="absolute menu">
      <ul>
        <li class="flex between">
          <span>手机</span>
          <span> > </span>
        </li>
        <li>电视</li>
        <li>家电</li>
        <li>笔记本 平板</li>
        <li>出行 穿戴</li>
        <li>耳机 音箱</li>
        <li>健康 儿童</li>
        <li>生活 箱包</li>
        <li>智能  路由器</li>
        <li>电源 配件</li>
      </ul>
    </div>
    <div class="arr arr-left absolute" style='border:1px solid red' @click="toLeft()">  左   </div>
    <div class="arr arr-right absolute" @click="toRight()">  右   </div>
    <ul class="flex absolute index-box">
      <li
          class="index"
          v-for="(item,index) in bannerList"
          :key="index"
          @click="activeNum = index"
          :style="{background: activeNum == index ? 'red' : 'none'}"
      ></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "homeBanner",
  data(){
    return{
      bannerList:[
          require('@/assets/1.webp'),
          require('@/assets/2.webp'),
          require('@/assets/3.webp'),
      ],
      activeNum:0
    }
  },
  methods:{
    toLeft(){
      this.activeNum--
      this.activeNum==-1&&(this.activeNum=this.bannerList.length-1) //前方成立，执行后方代码
    },
    toRight(){
      this.activeNum--
      this.activeNum==this.bannerList.length&&(this.activeNum=0)
    }
  }

}
</script>

<style lang="less" scoped>
.menu{
  top: 0;
  padding-top: 20px;
  width: 234px;
  background: rgba(0,0,0,0.4); //0-255,0-1
  height: 450px;
  li{
    color: #fff;
    font-size: 14px;
    height: 42px;
    line-height: 42px;
    padding-left: 20px;
    padding-right: 20px;
  }
  li:hover{
    background: #ff6700;
  }
  .arr{
    top: 50%;
    margin-top: -30px;
    height: 60px;
    width: 50px;
    line-height: 60px;
    text-align: center;
    color: #999;
  }
  .arr-left:hover,.arr-right:hover{
    background: rgba(0,0,0,0.4);
    color: #fff;
  }
  .arr-left{
    left:234px;
  }
  .arr-right{
    right:0px;
  }
  .index{
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 2px solid red;
    margin-right: 10px;
  }

  .index-box{
    bottom: 20px;
    right: 20px;
  }
}
</style>
