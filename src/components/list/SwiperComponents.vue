<template>
  <div id="SwiperComponents">
    <BigTitlePaging v-if="isShowTitle" v-bind:titleDesc="titleDesc" v-bind:subTitleDesc="subTitleDesc"
                    v-bind:pageIndex="getPageIndex" v-bind:isShowPageSubscript="isShowPageSubscript" v-bind:pageCount="getPageCount"/>
    <swiper class="swiperclass" :indicator-dots="indicatorDots"
            :autoplay="autoPlay" :interval="interval" :duration="duration" @change="swiperChange">
      <block v-for="(item, index) in dataList" :key="index">
        <swiper-item>
          <image :src="item.imageUrl" class="slideimage"></image>
          <TailDesc v-bind:tailDesc="item.tailDesc" v-bind:subTailDesc="item.subTailDesc"/>
        </swiper-item>
      </block>
    </swiper>
  </div>
</template>

<script>
  /**
   * 根据传入内容显示的swiper
   * 传入数据可以有-----标题、副标题、滑动列表数据
   */

  import BigTitlePaging from "../section/BigTitlePaging.vue";
  import TailDesc from "../section/TailDesc.vue";
  import Tools from "../../utils/Tools";

  export default {
    name: "SwiperComponents",
    data() {
      return {
        pageIndex: 1
      };
    },
    props: {
      indicatorDots: Boolean,
      autoPlay: Boolean,
      interval: Number,
      duration: Number,
      titleDesc: String,
      subTitleDesc: String,
      isShowPageSubscript: Boolean,
      dataList: Array
    },
    components: { BigTitlePaging, TailDesc },
    computed: {
      isShowTitle() {
        return !Tools.isEmpty(this.titleDesc);
      },
      getPageIndex() {
        return this.pageIndex;
      },
      getPageCount() {
        if (this.dataList && this.dataList.length > 0) {
          return this.dataList.length;
        }
        return 1;
      }
    },
    methods: {
      swiperChange(event) {
        if (event.mp && event.mp.detail) {
          // 当前页面下标
          this.pageIndex = Tools.convertToInt(event.mp.detail.current) + 1;
        }
      }
    }
  };
</script>

<style>
  @import "../../assets/css/common/swipercomponents.css";
</style>
