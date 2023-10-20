<template>
  <div>
    <div class="w1230 auto mt20 mb15 flex between">
      <div style="color: #666; font-size: 22px">智能穿戴</div>
      <div style="position: relative; width: 800px">
        <p
            ref="erji"
            @mouseover="showErJi"
            style="
            position: absolute;
            bottom: 0;
            right: 50px;
            color: #ff6700;
            border-bottom: 2px solid #ff6700;
            padding-bottom: 5px;
          "
        >
          耳机
        </p>
        <p
            ref="chuandai"
            @mouseover="showChuanDai"
            style="
            position: absolute;
            bottom: 0;
            right: 0px;
            padding-bottom: 5px;
            border-bottom: 2px solid rgb(245, 245, 245);
          "
        >
          穿戴
        </p>
      </div>
    </div>

    <div class="w1230 auto flex">
      <div class="left mt5">
        <img
            width="233"
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c9550c95ee33a22dc8db677dada00f09.jpg?thumb=1&w=351&h=921&f=webp&q=90"
        />
      </div>
      <div class="right">
        <div v-for="(i, index) in dataList" :key="index" class="item" @click="toDetail(i)">
          <img width="200" :src="i.img" />
          <h3
              style="
              font-size: 14px;
              font-weight: 400;
              color: #333;
              margin-bottom: 8px;
            "
          >
            {{ i.name }}
          </h3>
          <p
              style="
              font-size: 12px;
              color: #b0b0b0;
              margin-bottom: 15px;
              width: 90%;
              padding-left:5%;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            "
          >
            {{ i.jieshao }}
          </p>
          <p v-if="i.qian.length === 1" style="color: #ff6700; font-size: 13px">
            {{ i.qian[0] }}
          </p>

          <p v-else style="position: relative">
            <span
                style="
                color: #ff6700;
                font-size: 13px;
                margin-right: 5px;
                position: absolute;
                left: 20%;
              "
            >{{ i.qian[0] }}</span
            >
            <span
                style="
                color: #b0b0b0;
                font-size: 13px;
                text-decoration: line-through;
                position: absolute;
                left: 52%;
              "
            >{{ i.qian[1] }}</span
            >
          </p>
        </div>
        <div class="item1">
          <div class="shang">
            <img class="img" :src=shang width="214" />
          </div>
          <div class="xia">
            <img class="img" :src=xia width="214" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'com-wear',
  data() {
    return {
      dataList: [],
      //耳机数据
      erjiList: [
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202309211159_17fe0c43d4e970c047f2a69b73e15459.png?thumb=1&w=300&h=300&f=webp&q=90",
          name: "Redmi Buds 5",
          jieshao: "46dB深度降噪丨12.4mm镀钛动圈丨40小时超长续航",
          qian: ["199元"],
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202309211228_c8897065f6db21436ae4826527e4448e.png?thumb=1&w=300&h=300&f=webp&q=90",
          name: "Redmi Buds 5 AAPE 潮流限定版",
          jieshao: "46dB深度降噪丨12.4mm镀钛动圈丨40小时超长续航",
          qian: ["299元"],
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202208111200_c1016839eae2c1f5bb79d5afde498e81.png?thumb=1&w=300&h=300&f=webp&q=90",
          name: "  Xiaomi Buds 4 Pro",
          jieshao: "48dB智能动态降噪｜骨声纹通话降噪 | 独立空间音频",
          qian: ["899元", "1099元"],
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202204211422_ce41ed00fe7fb79df35101222880121d.png?thumb=1&w=300&h=300&f=webp&q=90",
          name: "Xiaomi Buds 3 Pro",
          jieshao: "40dB自适应降噪 ｜空间音频 ｜ HiFi高保真音质",
          qian: ["399元", "699元"],
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202205241526_03b4bf93894a1297a7f1c74d46446fac.png?thumb=1&w=300&h=300&f=webp&q=90",
          name: "Redmi Buds 4 Pro",
          jieshao: "43dB 宽频降噪 | HiFi 高保真音质 | 59ms 游戏低延迟",
          qian: ["329元", "399元"],
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202306102210_23dba6609bd84ca6a776ee4fb49fbb04.png?thumb=1&w=300&h=300&f=webp&q=90",
          name: "Redmi Buds 4活力版",
          jieshao: "12mm大动圈 | 28小时长续航 | 触控便捷操作",
          qian: ["99元"],
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202205241527_fb27e27e6587254da27de5ba9c889512.png?thumb=1&w=300&h=300&f=webp&q=90",
          name: "Redmi Buds 4",
          jieshao: "35dB 智能主动降噪 | AI 通话降噪 | 30小时超长续航",
          qian: ["179元", "229元"],
        },
      ],
      //穿戴数据
      chuandaiList: [
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202308141734_05a676c7c7649f9dbf50373e609304f4.png?thumb=1&w=300&h=300&f=webp&q=90",
          name: "小米手环 8 Pro",
          jieshao: "1.74″AMOLED炫彩大屏 | 手表级健康监测 | 独立GNSS定位",
          qian: ["399元起"],
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202305192235_10c4979f7c2802f89eb80ea2d77b52bd.png?thumb=1&w=300&h=300&f=webp&q=90",
          name: "Redmi Watch 3 青春版",
          jieshao: "1.83″超大屏幕｜腕上蓝牙通话｜全天候血氧检测",
          qian: ["329元","399元"],
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202304181447_fff5c19e16988b91042cfddba800fc19.png?thumb=1&w=300&h=300&f=webp&q=90",
          name: "小米手环8 NFC版",
          jieshao: "多样快拆时尚腕带 | 跑步豆模式 | 体感互动拳击",
          qian: ["259元","199元"],
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202304181447_fff5c19e16988b91042cfddba800fc19.png?thumb=1&w=300&h=300&f=webp&q=90",
          name: "小米手环8",
          jieshao: "多样快拆时尚腕带 | 跑步豆模式 | 体感互动拳击",
          qian: ["219元","249元"],
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202207011906_e7f02b803d3da16ec56a611e790243ba.png?thumb=1&w=300&h=300&f=webp&q=90",
          name: "小米手环7 Pro",
          jieshao: "全彩方形大屏 | 独立GPS定位 | 全天连续血氧饱和度监测",
          qian: ["329元","399元"],
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202204211417_27356c02de718e88afd3cf36eaba8097.png?thumb=1&w=300&h=300&f=webp&q=90",
          name: "Xiaomi Watch S1",
          jieshao: "蓝宝石玻璃镜面 | 不锈钢中框 | 全天候血氧监测",
          qian: ["649元","1099元"],
        },
        {
          img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202208102330_fec8af4d5861f2c0a3fea2b8879ae859.png?thumb=1&w=300&h=300&f=webp&q=90",
          name: "Xiaomi Watch S1 Pro",
          jieshao: "双面蓝宝石玻璃镜面丨全天候血氧监测丨微信消息回复",
          qian: ["1499元","1599元"],
        },
      ],
      shang:"",
      xia:""
    };
  },
  methods: {
    showErJi() {
      console.log(this.$refs.erji);
      this.$refs.erji.style.color = "#ff6700";
      this.$refs.erji.style.borderBottom = "2px solid #ff6700";
      this.$refs.chuandai.style.color = "#000";
      this.$refs.chuandai.style.borderBottom = "2px solid rgb(245, 245, 245)";
      this.dataList = this.erjiList;
      this.shang = "/img/耳机上.f9d716e7.png"
      this.xia = "/img/耳机下.41f3a212.png"
    },
    showChuanDai() {
      this.$refs.chuandai.style.color = "#ff6700";
      this.$refs.chuandai.style.borderBottom = "2px solid #ff6700";
      this.$refs.erji.style.color = "#000";
      this.$refs.erji.style.borderBottom = "2px solid rgb(245, 245, 245)";
      this.dataList = this.chuandaiList;
      this.shang = "/img/穿戴上.05784049.png"
      this.xia = "/img/穿戴下.33b284e9.png"
    },
    toDetail(item){
      // 保存商品
      this.$store.commit('setItem',item)
      this.$router.push('/detail')
    }
  },
  mounted() {
    this.showErJi();
  },
};
</script>

<style scoped lang="less">
.ahover:hover {
  cursor: pointer; /**鼠标样式 手指 */
  color: #ff6700;
}
.right {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  :first-child {
    margin-left: 30px;
  }
  :nth-child(5) {
    margin-left: 30px;
  }
}
.item {
  background-color: #fff;
  width: 234px;
  margin-left: 10px;
  margin-block: 5px;
  height: 300px;
  text-align: center;
}
.item1 {
  width: 234px;
  margin-left: 10px;
  margin-block: 5px;
  height: 300px;
  text-align: center;
  .img{
    margin-left: 0 !important;
  }
  .shang {
    width: 100%;
    height: 45%;
    margin-bottom: 12%;
    background-color: #fff;
    margin-left: 0 !important;
  }
  .xia {
    width: 100%;
    height: 45%;
    background-color: #fff;
  }
  .shang:hover {
    //盒子阴影
    box-shadow: 4px 20px 40px 5px rgba(0, 0, 0, 0.1);
    //盒子向上移动
    margin-top: 0;
    transition: all 0.6s;
  }
  .xia:hover {
    //盒子阴影
    box-shadow: 4px 20px 40px 5px rgba(0, 0, 0, 0.1);
    //盒子向上移动
    margin-top: 0;
    transition: all 0.6s;
  }
}

.item:hover {
  //盒子阴影
  box-shadow: 4px 20px 40px 5px rgba(0, 0, 0, 0.1);
  //盒子向上移动
  margin-top: 0;
  //动画时长
  transition: all 0.6s;
}
</style>
