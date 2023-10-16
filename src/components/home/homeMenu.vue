<template>
  <div class="w1230 auto flex between menu" >
    <div>
      <div class="flex between logo-box">
        <div>
          <img src="@/assets/logo.png" width="55px">
        </div>
        <div class="flex between menu-box">
          <div v-for="(item,index) in list" :key="index" class="item">
            {{item.title}}
            <div class="data-box">
              <div class="w1230 auto between flex">
                <div v-for="(goods,i) in item.data" :key="i">
                  <div><img :src="goods.img"></div>
                  <div>{{goods.title}}</div>
                  <div>{{goods.price}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--    右侧-->
    <div  class="search-box flex relative">
      <input v-model="search"><button>搜素</button>
      <div v-show="!search" class="absolute inputText">{{inputText}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeMenu",
  data(){
    return{
      list:[
        {
          title:'Xiaomi手机',
          data:[{
            title:'Xiaomi MIX Fold 3',
            // img:require(),//js中引入
            img:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/35f352268526045e077a230802beb588.png?thumb=1&w=200&h=138&f=webp&q=90',
            price:8999
          },{
            title:'Xiaomi Civi 3',
            img:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b4846501f1e9be04d6d2e859deb0d80e.png?thumb=1&w=200&h=138&f=webp&q=90',
            price:2499
          },{
            title:'Xiaomi 12S Pro',
            img:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2874cb04f16cdca6e3f2a542b6bc5e8a.png?thumb=1&w=200&h=138&f=webp&q=90',
            price:2799
          },{
            title:'Xiaomi 13 Ultra',
            img:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3c130b71f2edfafbc61c38f1325cd60e.png?thumb=1&w=200&h=138&f=webp&q=90',
            price:5999
          },{
            title:'Xiaomi 13',
            img:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c758eb7e0dce4307c62c47155519bc80.png?thumb=1&w=200&h=138&f=webp&q=90',
            price:3999
          }],
        },
        {
          title:'Redmi手机',
          data:[{
            title:'Xiaomi MIX Fold 3',
            img:'',
            price:8999
          },{
            title:'Xiaomi Civi 3',
            img:'',
            price:2499
          },{
            title:'Xiaomi MIX Fold 3',
            img:'',
            price:8999
          },{
            title:'Xiaomi MIX Fold 3',
            img:'',
            price:8999
          },{
            title:'Xiaomi MIX Fold 3',
            img:'',
            price:8999
          }],
        },
        {
          title:'电视',
          data:[{
            title:'Xiaomi MIX Fold 3',
            img:'',
            price:8999
          },{
            title:'Xiaomi Civi 3',
            img:'',
            price:2499
          },{
            title:'Xiaomi MIX Fold 3',
            img:'',
            price:8999
          },{
            title:'Xiaomi MIX Fold 3',
            img:'',
            price:8999
          },{
            title:'Xiaomi MIX Fold 3',
            img:'',
            price:8999
          }],
        },
        {
          title:'笔记本',
          data:[{
            title:'Xiaomi MIX Fold 3',
            img:'',
            price:8999
          },{
            title:'Xiaomi Civi 3',
            img:'',
            price:2499
          },{
            title:'Xiaomi MIX Fold 3',
            img:'',
            price:8999
          },{
            title:'Xiaomi MIX Fold 3',
            img:'',
            price:8999
          },{
            title:'Xiaomi MIX Fold 3',
            img:'',
            price:8999
          }],
        },
        {
          title:'平板',
          data:[{
            title:'Xiaomi MIX Fold 3',
            img:'',
            price:8999
          },{
            title:'Xiaomi Civi 3',
            img:'',
            price:2499
          },{
            title:'Xiaomi MIX Fold 3',
            img:'',
            price:8999
          },{
            title:'Xiaomi MIX Fold 3',
            img:'',
            price:8999
          },{
            title:'Xiaomi MIX Fold 3',
            img:'',
            price:8999
          }],
        },
        {
          title:'家电',
          data:[{
            title:'Xiaomi MIX Fold 3',
            img:'',
            price:8999
          },{
            title:'Xiaomi Civi 3',
            img:'',
            price:2499
          },{
            title:'Xiaomi MIX Fold 3',
            img:'',
            price:8999
          },{
            title:'Xiaomi MIX Fold 3',
            img:'',
            price:8999
          },{
            title:'Xiaomi MIX Fold 3',
            img:'',
            price:8999
          }],
        },
        {
          title:'路由器',
          data:[{
            title:'Xiaomi MIX Fold 3',
            img:'',
            price:8999
          },{
            title:'Xiaomi Civi 3',
            img:'',
            price:2499
          },{
            title:'Xiaomi MIX Fold 3',
            img:'',
            price:8999
          },{
            title:'Xiaomi MIX Fold 3',
            img:'',
            price:8999
          },{
            title:'Xiaomi MIX Fold 3',
            img:'',
            price:8999
          }],
        }
      ], //数组，放置多条数据
      inputText:'笔记本电脑',
      inputTextArr:['笔记本电脑','手机','充电宝','路由器'],
      search:''
    }
  },
  created() {
  //  随机产生0-3之间的数字
    setInterval(()=>{
      var i=Math.floor(Math.random()*4)
      this.inputText = this.inputTextArr[i]
      console.log(this.inputText);
    },5000)
  },
  methods:{

  }
}
</script>

<style scoped lang="less">
.logo-box{
  width: 800px;
  //background: #000;
}
.menu{
  height: 75px;
  margin-top:20px;
}
.menu-box{
  line-height: 55px;
  .item{
    margin-right: 20px;
    padding-bottom: 20px;
    cursor: pointer; /**鼠标样式 手指 */
  }
  .item:hover{
    color: #ff6700;
  }
  .item:hover .data-box{
    display: block;
  }
}
.data-box{
  display: none;
  position: absolute;
  width: 100%;
  left: 0;
  top: 135px;
  border-top: 1px solid #eee;
  box-shadow: 0px 2px 5px #eee ; /*阴影* */
}
.search-box{
  input{
    height:50px;
    width: 220px;
    border: 1px solid #eee;
    outline:none;
    padding: 0 10px;
  }
  button{
    width: 55px;
    height: 55px;
    border: 1px solid #ccc;
    background: none;
    border-left: none;
  }
  button:hover{
    background: #ff6700;
    color:white;
  }
  .inputText{
    color:#666;
    font-size:14px;
    left: 10px;
    top: 17px;
  }
}
</style>
