<template>
  <div>
    <div class="w1230 auto flex between title mb15 mt20">
      <h2>{{ title }}</h2>
      <div class="more">
        <div v-if="list.length == 0">查看更多</div>
        <div v-else class="flex ">
          <div v-for="(item,index) in list" :key="index" class="ml20" :class="index == active && 'active'">{{ item }}</div>
        </div>
      </div>
    </div>
    <div class="w1230 auto flex between goods">
      <div>
        <div v-for="(item,index) in img" :key="index">
          <img width="100%" :src="item">
        </div>
      </div>
      <div v-for="x in Math.ceil(data.length/2)" :key="x">
        <div class="goods-item" @click="toDetail()">
<!--          索引{{x-1}}-->
          <img :src="data[x-1].img"/>
          <p class="title fs14">{{ data[x-1].title }}</p>
          <p class="desc fs13 mt10 mb10 c-999">{{ data[x-1].desc }}</p>
          <p class="price fs14">
            <span class="textColor">{{ data[x-1].currentPrice }}元起</span>
            <span class="c-999 ml10 line-del" v-if="data[x-1].originPrice">{{ data[x-1].originPrice }}元</span>
          </p>
        </div>
        <div v-if="x==4 && more" class="more-box" @click="toDetail()">
          <div class="flex between">
            <div class="mt30 ml30">
              <p class="fs14">{{data[data.length-1].title}}</p>
              <p class="fs13 textColor mt10">{{data[data.length-1].currentPrice}}</p>
            </div>
            <div class="mt30 mr30">
              <img width="70px" :src="data[data.length-1].img">
            </div>
          </div>
          <div>下</div>
        </div>
        <div v-else class="goods-item">
          <img :src="data[x+3].img"/>
          <p class="title fs14">{{ data[x+3].title }}</p>
          <p class="desc fs13 mt10 mb10 c-999">{{ data[x+3].desc }}</p>
          <p class="price fs14">
            <span class="textColor">{{ data[x+3].currentPrice }} 元起</span>
            <span class="c-999 ml10 line-del" v-if="data[x+3].originPrice">{{ data[x-1].originPrice }}元</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "com-goods-menu",
  data(){
    return{
      active:0
    }
  },
  props:{
    title:String,
    list:{
      type:Array,
      default:()=>[]
    },
    img:{
      type:Array
    },
    more:{
      type:String,
      default:()=>''
    },
    data:{
      type:Array,
      default:()=>[]
    }
  },
  methods:{
    toDetail(){
      this.$router.push('/detail')
    }
  }
}
</script>

<style lang="less" scoped>
.goods{
  height: 615px;
  &>div{
    width: 234px;
    &>div{
      height: 300px;
      background: #fff;
      &>div{
        height: 143px;
      }
      &>div:first-of-type{
        margin-bottom: 14px;
      }
    }
    &>div:first-of-type{
      margin-bottom: 15px;
    }
  }
}

.active{
  color: #ff6700;
  padding-bottom: 5px;
  border-bottom: 2px solid #ff6700;
}

.more{
  margin-top: 10px;
}
.title{
  h2{
    font-weight: 100;
    color: #666;
  }
}
.more-box{
  background: none;
  &>{
    background: #fff;
  }
}
.goods-item{
  text-align: center;
  img{
    width: 70%;
    margin-top:10px;
  }
}
</style>
