<template>
  <div class="w1230 auto relative">
    <div>
      <img width="100%" v-for="(item,index) in bannerList" :key="index" :src="item" v-show="activeNum == index"/>
    </div>
    <div class="absolute menu">
      <ul>
        <li
            v-for="(item, index) in dataList"
            :key="index"
            class="flex between item"
            @mouseover="getItemLength(item.data.length)"
        >
          <span>{{ item.title }}</span>
          <span> > </span>

          <div class="data-box" :style="{width:dataBOxWidth}">
            <div
                v-for="(value, index2) in item.data"
                :key="index2"
                class="data-box-ch"
            >

              <div style="height:77px; display:flex">
                <img :src="value.img" style="width: 47px; height: 47px; margin-top:15px; margin-bottom:15px; margin-left:10px;" />
                <div
                    style="
                  color: #000;
                  width: 100px;
                  height: 77px;
                  margin-left: 30px;
                  margin-right: 30px;
                "
                    class="fs12 link-height77"
                >
                  {{ value.title }}
                </div>

              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="arr arr-left absolute" @click="toLeft()"><i class="el-icon-arrow-left"></i> </div>
    <div class="arr arr-right absolute" @click="toRight()"><i class="el-icon-arrow-right"></i> </div>
    <ul class="flex absolute index-box">
      <li
          class="index"
          v-for="(item,index) in bannerList"
          :key="index"
          @click="activeNum = index"
          :style="{background: activeNum == index ? '#d2c8bb' : 'none'}"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerList: [
        require('@/assets/1.webp'),
        require('@/assets/2.webp'),
        require('@/assets/3.webp')
      ],
      dataList: [
        {
          title: "手机12",
          data: [
            {
              title: "Xiaomi MIX系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/35f352268526045e077a230802beb588.png?thumb=1&w=240&h=165&f=webp&q=90",
            },
            {
              title: "Xiaomi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/168b20a5ea19280f9ddb3cc423f1db4e.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Xiaomi Civi系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4ed8c4ca59357db902916b5b9dfb8016.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi K系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/42436481ce985c1f69be688a15d7531e.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi Note系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a6dfdc51ff25583042e86d9ae2697b3.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
          ],
        },
        {
          title: "电视",
          data: [
            {
              title: "Xiaomi MIX系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/35f352268526045e077a230802beb588.png?thumb=1&w=240&h=165&f=webp&q=90",
            },
            {
              title: "Xiaomi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/168b20a5ea19280f9ddb3cc423f1db4e.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Xiaomi Civi系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4ed8c4ca59357db902916b5b9dfb8016.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi K系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/42436481ce985c1f69be688a15d7531e.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi Note系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a6dfdc51ff25583042e86d9ae2697b3.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
          ],
        },
        {
          title: "家电",
          data: [
            {
              title: "Xiaomi MIX系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/35f352268526045e077a230802beb588.png?thumb=1&w=240&h=165&f=webp&q=90",
            },
            {
              title: "Xiaomi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/168b20a5ea19280f9ddb3cc423f1db4e.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Xiaomi Civi系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4ed8c4ca59357db902916b5b9dfb8016.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi K系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/42436481ce985c1f69be688a15d7531e.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi Note系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a6dfdc51ff25583042e86d9ae2697b3.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },  {
              title: "Xiaomi MIX系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/35f352268526045e077a230802beb588.png?thumb=1&w=240&h=165&f=webp&q=90",
            },
            {
              title: "Xiaomi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/168b20a5ea19280f9ddb3cc423f1db4e.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Xiaomi Civi系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4ed8c4ca59357db902916b5b9dfb8016.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi K系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/42436481ce985c1f69be688a15d7531e.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi Note系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a6dfdc51ff25583042e86d9ae2697b3.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
          ],
        },
        {
          title: "笔记本 平板",
          data: [
            {
              title: "Xiaomi MIX系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/35f352268526045e077a230802beb588.png?thumb=1&w=240&h=165&f=webp&q=90",
            },
            {
              title: "Xiaomi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/168b20a5ea19280f9ddb3cc423f1db4e.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Xiaomi Civi系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4ed8c4ca59357db902916b5b9dfb8016.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi K系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/42436481ce985c1f69be688a15d7531e.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi Note系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a6dfdc51ff25583042e86d9ae2697b3.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi K系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/42436481ce985c1f69be688a15d7531e.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi Note系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a6dfdc51ff25583042e86d9ae2697b3.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },  {
              title: "Redmi K系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/42436481ce985c1f69be688a15d7531e.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi Note系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a6dfdc51ff25583042e86d9ae2697b3.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
          ],
        },
        {
          title: "出行 穿戴",
          data: [
            {
              title: "Redmi K系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/42436481ce985c1f69be688a15d7531e.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi Note系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a6dfdc51ff25583042e86d9ae2697b3.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },  {
              title: "Redmi K系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/42436481ce985c1f69be688a15d7531e.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi Note系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a6dfdc51ff25583042e86d9ae2697b3.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
          ],
        },
        {
          title: "耳机 音箱",
          data: [
            {
              title: "Redmi K系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/42436481ce985c1f69be688a15d7531e.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi Note系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a6dfdc51ff25583042e86d9ae2697b3.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },  {
              title: "Redmi K系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/42436481ce985c1f69be688a15d7531e.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi Note系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a6dfdc51ff25583042e86d9ae2697b3.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },  {
              title: "Redmi K系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/42436481ce985c1f69be688a15d7531e.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi Note系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a6dfdc51ff25583042e86d9ae2697b3.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },  {
              title: "Redmi K系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/42436481ce985c1f69be688a15d7531e.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi Note系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a6dfdc51ff25583042e86d9ae2697b3.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
          ],
        },
        {
          title: "健康 儿童",
          data: [
            {
              title: "Redmi K系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/42436481ce985c1f69be688a15d7531e.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi Note系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a6dfdc51ff25583042e86d9ae2697b3.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },  {
              title: "Redmi K系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/42436481ce985c1f69be688a15d7531e.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi Note系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a6dfdc51ff25583042e86d9ae2697b3.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
          ],
        },
        {
          title: "生活 箱包",
          data: [
            {
              title: "Redmi K系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/42436481ce985c1f69be688a15d7531e.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi Note系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a6dfdc51ff25583042e86d9ae2697b3.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },  {
              title: "Redmi K系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/42436481ce985c1f69be688a15d7531e.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi Note系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a6dfdc51ff25583042e86d9ae2697b3.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },  {
              title: "Redmi K系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/42436481ce985c1f69be688a15d7531e.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi Note系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a6dfdc51ff25583042e86d9ae2697b3.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
          ],
        },
        {
          title: "智能 路由器",
          data: [
            {
              title: "Redmi K系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/42436481ce985c1f69be688a15d7531e.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi Note系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a6dfdc51ff25583042e86d9ae2697b3.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },  {
              title: "Redmi K系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/42436481ce985c1f69be688a15d7531e.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi Note系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a6dfdc51ff25583042e86d9ae2697b3.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },  {
              title: "Redmi K系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/42436481ce985c1f69be688a15d7531e.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi Note系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a6dfdc51ff25583042e86d9ae2697b3.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
          ],
        },
        {
          title: "电源 配件",
          data: [
            {
              title: "Redmi K系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/42436481ce985c1f69be688a15d7531e.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi Note系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a6dfdc51ff25583042e86d9ae2697b3.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },  {
              title: "Redmi K系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/42436481ce985c1f69be688a15d7531e.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi Note系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a6dfdc51ff25583042e86d9ae2697b3.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },  {
              title: "Redmi K系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/42436481ce985c1f69be688a15d7531e.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi Note系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a6dfdc51ff25583042e86d9ae2697b3.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },  {
              title: "Redmi K系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/42436481ce985c1f69be688a15d7531e.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi Note系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a6dfdc51ff25583042e86d9ae2697b3.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
            {
              title: "Redmi 数字系列",
              img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=60&h=60&f=webp&q=90",
            },
          ],
        },
      ],
      dataBOxWidth:'',
      activeNum: 0
    }
  },
  methods: {
    toLeft() {
      this.activeNum--
      this.activeNum == -1 && (this.activeNum = this.bannerList.length - 1)
    },
    toRight() {
      this.activeNum++
      this.activeNum == this.bannerList.length && (this.activeNum = 0)
    },
    getItemLength(value){
      if(value%6 != 0){
        this.dataBOxWidth = (value/6*200+200)+'px'
      }else{
        this.dataBOxWidth = (value/6*200+40)+'px'
      }
    }
  }
}
</script>
<style lang="less" scoped>
.menu {
  top: 0;
  padding-top: 15px;
  width: 234px;
  background: rgba(0, 0, 0, 0.4); // 0-255    0-1 0全透明 1不透明
  height: 447px;
  li {
    color: #fff;
    font-size: 14px;
    height: 42px;
    line-height: 42px;
    padding-left: 20px;
    padding-right: 20px;
  }

  li:hover {
    background: #ff6700;
  }
}
.arr {
  top: 50%;
  margin-top: -30px;
  height: 60px;
  width: 50px;
  line-height: 60px;
  text-align: center;
  color: #999;
}

.arr-left:hover, .arr-right:hover {
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
}
.arr-left {
  left: 234px;
}

.arr-right {
  right: 0px;
}

.index {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: 2px solid #929595;
  margin-right: 10px;
}

.index-box {
  bottom: 20px;
  right: 20px;
}
.item:hover .data-box{
  display: flex;
}

.data-box {
  position: absolute;
  display: none;
  flex-direction: column;
  flex-wrap: wrap;
  height: 462px;
  top: 0;
  left: 234px;
  background-color: #eee;
}

.link-height77 {
  line-height: 77px;
  flex-grow: 1; /* 允许元素自动扩展 */
}
</style>
