<template>
  <div id="ItemListVertical">
    <BigTitlePaging v-if="isShowTitle" v-bind:titleDesc="titleDesc" v-bind:subTitleDesc="subTitleDesc"
                    v-bind:pageIndex="0" v-bind:isShowPageSubscript="false" v-bind:pageCount="0"/>
    <ItemComponents v-for="(item,index) in itemList" v-bind:key="item.key"
                    v-bind:imageUrl="item.imageUrl"
                    v-bind:itemDesc="item.itemDesc"
                    v-bind:price="item.price"
                    v-bind:oldPrice="item.oldPrice"/>
  </div>
</template>

<script>
  /**
   * 商品列表，两列，固定
   */
  import ItemComponents from "../section/ItemComponents.vue";
  import BigTitlePaging from "../section/BigTitlePaging.vue";
  import Tools from "../../utils/Tools";


  export default {
    name: "ItemListVertical",
    props: {
      titleDesc: String,
      subTitleDesc: String,
      itemList: Array
    },
    components: { ItemComponents, BigTitlePaging },
    computed: {
      isShowTitle() {
        return !Tools.isEmpty(this.title);
      }
    }
  };
</script>
