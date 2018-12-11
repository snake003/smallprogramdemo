<template>
  <div id="BigTitlePaging">
    <div class="divtitle flexty">
      <div class="divtitledesc"><span>{{titleDesc}}</span></div>
      <div v-if="isShowPage" class="divtitlepading"><span class="spanpadingall">{{pageIndex}}</span><span class="spanpadingcurrent">{{getPageCount}}</span></div>
    </div>
    <div v-if="isShowSubTitle" class="divsubtitledesc"><span>{{subTitleDesc}}</span></div>
  </div>
</template>

<script>/**
 * 大标题组件
 * 根据传入的数据显示对应内容
 * 传入数据有-----大标题、标题下描述、当前页、共多少页
 */

import Tools from "../../utils/Tools";

export default {
  name: "BigTitlePaging",
  props: {
    isShowPageSubscript: Boolean,
    titleDesc: String,
    subTitleDesc: String,
    pageCount: Number,
    pageIndex: Number
  },
  computed: {
    isShowPage() {
      return this.pageCount > 0 && this.pageIndex > 0 && this.isShowPageSubscript;
    },
    isShowSubTitle() {
      return !Tools.isEmpty(this.subTitleDesc);
    },
    getPageCount() {
      return `/${this.pageCount}`;
    }
  }
};
</script>

<style>
  @import "../../assets/css/common/bigtitlepading.css";
</style>
