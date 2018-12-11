export default class SaleModel {
  constructor(data) {
    if (data) {
      this.imageUrl = data.imageUrl;

      this.tailDesc = data.tailDesc;

      this.subTailDesc = data.subTailDesc;
    }
  }
}
