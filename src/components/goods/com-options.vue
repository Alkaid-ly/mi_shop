<template>
  <div>
    <p class="mb15 fs18">{{ data.text }}</p>
    <div class="flex option f-wrap between ">
      <div
          v-for="(item,index) in data.list"
          :key="index"
          :class="{'active': active == index}"
          @click="change(index,item)">
        {{ item.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "com-options",
  data(){
      return{
          active:0
      }
  },
  props:['data'],
  methods: {
    change (index,item) {
      this.active = index
      // console.log(price)
      this.$emit('change',item)  //
    }
  }
}
</script>

<style lang="less" scoped>
.option{
  div{
    width: 48%;
    margin-bottom: 15px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    border:1px solid #ddd;
    font-size: 14px;
    color:#999;
  }
  div:hover{
    border-color: #ff6700;
    color: #ff6700;
  }
  .active{
    border-color: #ff6700;
    color: #ff6700;
  }
}
</style>
