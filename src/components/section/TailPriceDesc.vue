<template>
  <div id="TailPriceDesc" class="textdisplay">
    <div class="divitemtaildesc">{{itemDesc}}</div>
    <div class="divitemsubtaildesc"><span class="spanitemprice">{{getPrice}}</span><span v-if="isShowOldPrice" class="spanitemoldprice">{{getOldPrice}}</span></div>
  </div>
</template>

<script>
  /**
   * 尾部描述和价格
   * 根据传入数据显示内容
   * 传入数据有-----描述、当前价格、旧价格
   */
  export default {
    name: "TailPriceDesc",
    props: {
      itemDesc: String,
      price: Number,
      oldPrice: Number
    },
    computed: {
      isShowOldPrice() {
        return this.oldPrice > 0;
      },
      getPrice() {
        return `¥${this.price}`;
      },
      getOldPrice() {
        return `¥${this.oldPrice}`;
      }
    }
  };
</script>

<style>
  @import "../../assets/css/common/tailpricedesc.css";
</style>
