<template>
  <div id="TailDesc" v-if="isShowThis">
    <div class="divtaildesc"><span>{{tailDesc}}</span></div>
    <div v-if="isShowSubTail" class="divsubtaildesc"><span>{{subTailDesc}}</span></div>
  </div>
</template>

<script>/**
 * 尾部描述
 * 根据传入数据显示内容
 * 传入数据有-----主描述、副描述
 */

import Tools from "../../utils/Tools";

export default {
  name: "TailDesc",
  props: {
    tailDesc: String,
    subTailDesc: String
  },
  computed: {
    isShowThis() {
      console.log(this.tailDesc);
      return !Tools.isEmpty(this.tailDesc);
    },
    isShowSubTail() {
      return !Tools.isEmpty(this.subTailDesc);
    }
  }
};
</script>

<style>
  @import "../../assets/css/common/taildesc.css";
</style>
