<template>
  <div>
    <!--数据加载滚动 begin-->
    <div v-if="isLoadingData" class="loadingdata">
      <i-spin custom>
        <i-icon type="refresh" size="20" i-class="icon-load"></i-icon>
        <view>Loading</view>
      </i-spin>
    </div>
    <!--数据加载滚动 end-->

    <!--数据加载失败 begin-->
    <div v-else class="fb_zcenter" v-on:click="onClickReload">
      {{errorMessage}}
    </div>
    <!--数据加载失败 begin-->
  </div>
</template>

<script>

  export default {
    name: "CommonLoad",
    data() {
      return {
        loadingMessage: this.$langPackage.t("Data_Is_Loading_Tips"),
        reloadInterval: 3000, // 重新加载刷新
        reloadTimeOut: Number // 记录延时加载
      };
    },
    props: {
      isLoadingData: Boolean,
      isEmptyData: Boolean,
      errorMessage: String
    },
    methods: {
      onClickReload() {
        if (this.isEmptyData) {
          return;
        }
        clearTimeout(this.reloadTimeOut);
        this.$emit("onChangeLoadStatus", true);
        this.reloadTimeOut = setTimeout(() => {
          this.onReloadData();
        }, this.reloadInterval);
      },
      onReloadData() {
        this.$parent.onReloadData();
      }
    },
    destroyed() {
      clearTimeout(this.reloadTimeOut);
    }
  };
</script>

<style>
  @import "../../assets/css/common/commonload.css";
</style>
