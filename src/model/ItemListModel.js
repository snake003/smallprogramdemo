import ItemModel from "./ItemModel";

export default class ItemListModel {
  constructor(data) {
    if (data) {
      this.titleDesc = data.titleDesc;

      this.subTitleDesc = data.subTitleDesc;

      if (data.itemList && data.itemList.length > 0) {
        this.itemList = data.itemList.map((item) => {
          return new ItemModel(item);
        });
      }
    }
  }
}
