<template>
  <div id="ItemComponents" :class="getHorizontalClass">
    <image :src="imageUrl" class="itemimage"></image>
    <TailPriceDesc v-bind:price="price" v-bind:oldPrice="oldPrice" v-bind:itemDesc="itemDesc"/>
  </div>
</template>

<script>
  /**
   * 商品类型------1
   */
  import TailPriceDesc from "./TailPriceDesc.vue";

  export default {
    name: "ItemComponents",
    props: {
      imageUrl: String,
      itemDesc: String,
      price: Number,
      oldPrice: Number,
      isHorizontal: Boolean
    },
    components: { TailPriceDesc },
    computed: {
      getHorizontalClass() {
        return this.isHorizontal ? "horizontal" : "norview";
      }
    }
  };
</script>

<style>
  @import "../../assets/css/common/itemcomponents.css";
</style>
