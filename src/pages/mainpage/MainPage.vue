<template>
  <div id="MainPage">
    <ItemListHorizontal v-bind="getItemList"/>
    <SwiperComponents v-bind:indicatorDots="getSwiperData.valueOf().indicatorDots"
                      v-bind:autoPlay="getSwiperData.valueOf().autoPlay"
                      v-bind:interval="getSwiperData.valueOf().interval"
                      v-bind:duration="getSwiperData.valueOf().duration"
                      v-bind:titleDesc="getSwiperData.valueOf().titleDesc"
                      v-bind:subTitleDesc="getSwiperData.valueOf().subTitleDesc"
                      v-bind:isShowPageSubscript="getSwiperData.valueOf().isShowPageSubscript"
                      v-bind:dataList="getSwiperData.valueOf().dataList"/>
    <ItemListVertical v-bind="getItemListVertical"/>

  </div>
</template>

<script>
  import ItemListHorizontal from "../../components/list/ItemListHorizontal.vue";
  import ItemListVertical from "../../components/list/ItemListVertical.vue";
  import SwiperComponents from "../../components/list/SwiperComponents.vue";
  import BaseSubPage from "../base/BaseSubPage.vue";
  import MainPageModel from "../../model/MainPageModel";

  export default {
    name: "MainPage",
    extends: BaseSubPage,
    data() {
      return {
        data: null
      };
    },
    components: { SwiperComponents, ItemListVertical, ItemListHorizontal },
    computed: {
      getSwiperData() {
        if (this.data) {
          return this.data.saleData;
        }
        return null;
      },
      getItemList() {
        if (this.data) {
          return this.data.itemData;
        }
        return null;
      },
      getItemListVertical() {
        if (this.data) {
          return this.data.itemVerticalData;
        }
        return null;
      }
    },
    methods: {
      onInit() {
        this.data = new MainPageModel();
        this.data.loadData();
      }
    }
  };
</script>

<style>

</style>
