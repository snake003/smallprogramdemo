import BaseModel from "./BaseModel";
import ItemListModel from "./ItemListModel";
import SaleListModel from "./SaleListModel";

export default class MainPageModel extends BaseModel {
  constructor() {
    super();
    this.itemData = null;
    this.saleData = null;
    this.itemVerticalData = null;
  }

  setData(txtData) {
    const data = JSON.parse(txtData);
    if (data) {
      this.itemData = new ItemListModel(data.itemData);

      this.saleData = new SaleListModel(data.saleData);

      this.itemVerticalData = new ItemListModel(data.itemVerticalData);
    }
  }

  loadData() {
    this.setData(`{ 
     "itemData": {
        "titleDesc": "超低价套餐", 
        "subTitleDesc": "适宜各种人群口味的超值套餐",
        "itemList": [
          { 
            "imageUrl": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg", 
            "itemDesc": "美味的酸甜排骨|原价35，现价18美味的酸甜排骨|原价35，现价18", 
            "price": 18 ,
            "oldPrice": 35 
          },
          { 
            "imageUrl": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg", 
            "itemDesc": "猪肚鸡|男人的加油站猪肚鸡|男人的加油站", 
            "price": 43 ,
            "oldPrice": 80 
          },
          { 
            "imageUrl": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg", 
            "itemDesc": "过山峰️|蛇王肉，大补特补️过山峰️|蛇王肉，大补特补", 
            "price": 220 ,
            "oldPrice": 420 
          },
          { 
            "imageUrl": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg", 
            "itemDesc": "柴火吊烧鸡|香脆鸡皮回味无穷", 
            "price": 25 ,
            "oldPrice": 63 
          }
        ]
      },
      "saleData": {
        "titleDesc": "5折抢购啦", 
        "subTitleDesc": "天天5折，好吃不重样",
        "dataList": [
          { 
            "imageUrl": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg", 
            "tailDesc": "快点来关注1", 
            "subTailDesc": "随便乱写1" 
          },
          { 
            "imageUrl": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg", 
            "tailDesc": "快点来关注2", 
            "subTailDesc": "随便乱写2" 
          },
          { 
            "imageUrl": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg", 
            "tailDesc": "快点来关注3", 
            "subTailDesc": "随便乱写3" 
          }
        ]
      },
       "itemVerticalData": {
        "titleDesc": "超低价套餐", 
        "subTitleDesc": "适宜各种人群口味的超值套餐",
        "itemList": [
          { 
            "imageUrl": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg", 
            "itemDesc": "美味的酸甜排骨|原价35，现价18美味的酸甜排骨|原价35，现价18", 
            "price": 18 ,
            "oldPrice": 35 
          },
          { 
            "imageUrl": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg", 
            "itemDesc": "猪肚鸡|男人的加油站猪肚鸡|男人的加油站", 
            "price": "43" ,
            "oldPrice": "80" 
          },
          { 
            "imageUrl": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg", 
            "itemDesc": "过山风️|蛇王肉，大补特补过山风️|蛇王肉，大补特补️", 
            "price": 220 ,
            "oldPrice": 420
          },
          { 
            "imageUrl": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg", 
            "itemDesc": "柴火吊烧鸡|香脆鸡皮回味无穷柴火吊烧鸡|香脆鸡皮回味无穷", 
            "price": 25 ,
            "oldPrice": 63
          }
        ]
      }
    }`);
  }
}
