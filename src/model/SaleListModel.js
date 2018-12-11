import SaleModel from "./SaleModel";

export default class SaleListModel {
  constructor(data) {
    if (data) {
      this.indicatorDots = false;

      this.autoPlay = false;

      this.interval = 5000;

      this.duration = 500;

      this.isShowPageSubscript = true;

      this.titleDesc = data.titleDesc;

      this.subTitleDesc = data.subTitleDesc;


      if (data.dataList && data.dataList.length > 0) {
        this.dataList = data.dataList.map((item) => {
          return new SaleModel(item);
        });
      }
    }
  }

  setData(indicator, autoPlay, interval, duration, isShowPageSubscript) {
    this.indicatorDots = indicator;

    this.autoPlay = autoPlay;

    this.interval = interval;

    this.duration = duration;

    this.isShowPageSubscript = isShowPageSubscript;
  }
}
