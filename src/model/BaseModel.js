/* eslint-disable prefer-rest-params */
import i18n from "../lang";

export default class BaseModel {
  constructor() {
    this.errorMessage = i18n.t("None_Data_Tips");
    this.isEmptyData = false;
    this.isLoadingData = true;
    const arrayEventName = Array.of();

    const Event = {
      // 通过on接口监听事件eventName
      // 如果事件eventName被触发，则执行callback回调函数
      on(eventName, callback) {
        if (!this.handles) {
          // this.handles={};
          Object.defineProperty(this, "handles", {
            value: {},
            enumerable: false,
            configurable: true,
            writable: true
          });
        }

        if (!this.handles[eventName]) {
          this.handles[eventName] = [];
        }
        arrayEventName.push(eventName);
        this.handles[eventName].push(callback);
      },
      // 触发事件 eventName
      emit(eventName) {
        if (this.handles[arguments[0]]) {
          for (let i = 0; i < this.handles[arguments[0]].length; i++) {
            this.handles[arguments[0]][i](arguments[1]);
          }
        }
      },
      removeEvent() {
        arrayEventName.forEach((item) => {
          if (this.handles[item]) {
            this.handles[item].splice(0, this.handles[item].length);
            this.handles[item] = [];
          }
        });
      }
    };

    this.targetEvent = Event;
  }
}
