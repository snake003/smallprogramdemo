<template>
  <div>

  </div>
</template>

<script>

  export default {
    name: "BaseSubClass",
    onLoad() {
      this.onInit();
      this.onEvtInit();
    },
    // 页面清除
    onUnload() {
      this.onEvtRemove();
    },
    methods: {
      // 页面初始化
      onInit() {
      },
      // 事件监听初始化
      onEvtInit() {
      },
      // 事件移除
      onEvtRemove() {
      }
    }
  };
</script>
