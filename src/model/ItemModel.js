export default class ItemModel {
  constructor(data) {
    if (data) {
      this.imageUrl = data.imageUrl;

      this.itemDesc = data.itemDesc;

      this.price = data.price;

      this.oldPrice = data.oldPrice;
    }
  }
}
