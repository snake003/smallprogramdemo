import MatchStatusType from "./MatchStatusType";
import i18n from "../lang";

const handicaps = [
  "0", "0/0.5", "0.5", "0.5/1", "1", "1/1.5", "1.5", "1.5/2", "2", "2/2.5", "2.5", "2.5/3", "3",
  "3/3.5", "3.5", "3.5/4", "4", "4/4.5", "4.5", "4.5/5", "5", "5/5.5", "5.5", "5.5/6", "6", "6/6.5",
  "6.5", "6.5/7", "7", "7/7.5", "7.5", "7.5/8", "8", "8/8.5", "8.5", "8.5/9", "9", "9/9.5", "9.5",
  "9.5/10", "10", "10/10.5", "10.5", "10.5/11", "11", "11/11.5", "11.5", "11.5/12", "12", "12/12.5",
  "12.5", "12.5/13", "13", "13/13.5", "13.5", "13.5/14", "14"];
const oddsMatrix = [
  [7, 8, 9, 0, 1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  [3, 4, 5, 6, 7, 8, 9, 0, 1, 2],
  [4, 5, 6, 7, 8, 9, 0, 1, 2, 3],
  [2, 3, 4, 5, 6, 7, 8, 9, 0, 1],
  [6, 7, 8, 9, 0, 1, 2, 3, 4, 5],
  [9, 0, 1, 2, 3, 4, 5, 6, 7, 8],
  [8, 9, 0, 1, 2, 3, 4, 5, 6, 7],
  [5, 6, 7, 8, 9, 0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
];

const K3 = 6;
export default class Tools {
  // 盘口转换
  static convertHandicap(value) {
    if ((value.length <= 1 && value.includes("-")) || value.length < 1) {
      return "-";
    }
    const v = parseFloat(value);

    if (v > 10 || v < -10) {
      return value;
    }
    if (v >= 0) {
      return handicaps[parseInt(v * 4)];
    }
    return `-${handicaps[parseInt(-1 * v * 4)]}`;
  }

  // 设置缓存
  static setCache(key, value) {
    if (key !== "") {
      if (localStorage) {
        localStorage.setItem(key, value);
      } else if (window.localStorage) {
        window.localStorage.setItem(key, value);
      }
    }
  }

  // 判断是否json数据
  static testIsJson(str) {
    if (!this.isEmpty(str)) {
      if (str.includes("{") && str.includes("}")) {
        return true;
      }
    }
    return false;
  }

  // 读取缓存
  static getCache(key) {
    if (localStorage) {
      return localStorage.getItem(key);
    }
    if (window.localStorage) {
      return window.localStorage.getItem(key);
    }
    return "";
  }

  // 删除缓存
  static removeCache(key) {
    localStorage.removeItem(key);
  }

  // 判断值是否在数组内
  static isInArray(val, arr) {
    if (arr && arr.length > 0) {
      return !arr.every(item => parseInt(item) !== parseInt(val));
    }
    return false;
  }

  // 数值转换
  static convertOddsValue(value) {
    if (this.isEmpty(value)) {
      return 0;
    }
    return parseFloat(value).toFixed(2);
  }

  // 数值转换
  static convertValueRemain(value, length) {
    return parseFloat(value).toFixed(length);
  }

  // 转换为数字
  static convertToInt(str) {
    if (this.isEmpty(str)) {
      return 0;
    }
    return parseInt(str);
  }

  // 比较初始和即时的变化
  static compareValue(live, original) {
    let remain = parseFloat(live) - parseFloat(original);
    if (original < 0) {
      remain = -remain;
    }

    if (remain > 0) {
      return 2;
    }
    if (remain < 0) {
      return 1;
    }
    return 0;
  }

  // 比较是否有变化
  static getChangeClass(type) {
    if (type > 0) {
      return "bgpinks";
    }
    if (type < 0) {
      return "bggreens";
    }
    return "";
  }

  // 毫秒转时间---月-日 时:分
  static convertTime(ms) {
    const curTime = new Date(ms * 1000);
    const month = String(curTime.getMonth() + 1).padStart(2, "0");
    const day = String(curTime.getDate()).padStart(2, "0");
    const hour = String(curTime.getHours()).padStart(2, "0");
    const minutes = String(curTime.getMinutes()).padStart(2, "0");
    return `${month}-${day} ${hour}:${minutes}`;
  }

  // 毫秒转时间---年-月-日
  static convertTimeToYMD(ms) {
    const curTime = new Date(ms * 1000);
    const year = String(curTime.getFullYear()).substr(2, 2).padStart(2, "0");
    const month = String(curTime.getMonth() + 1).padStart(2, "0");
    const day = String(curTime.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  static isEmpty(str) {
    return !str || str.length < 1 || str === "null" || str === "";
  }

  /**
   * 比较函数
   * @param propertyName  要比较的值的属性名
   * @param type   1为升   2为降
   * @returns {compare}
   */
  static compare(propertyName, type) { // 1、升序排序 2、降序
    return function compare(object1, object2) {
      const value1 = object1[propertyName];
      const value2 = object2[propertyName];
      if ((typeof value1) !== "number") { // 属性值为非数字
        return type === 2 ? value2.localeCompare(value1) : value1.localeCompare(value2);
      }
      return type === 2 ? value2 - value1 : value1 - value2;
    };
  }

  /**
   * 取出字符串范围内的内容
   * @param str
   * @param indexStr
   * @param endStr
   * @returns {*|number|RegExpMatchArray|Promise<Response | undefined>}
   */
  static getStringInScope(str, indexStr, endStr) {
    /* const pattern = new RegExp("\\((.| )+?\\)", "igm")
    return str.match(pattern);*/
    if (this.isEmpty(str)) {
      return "";
    }
    return str.substring(str.indexOf(indexStr) + indexStr.length, str.indexOf(endStr));
  }

  // 获取单个get参数，参数名不区分大小写
  static getParam(paramName) {
    let paramValue = null;
    let isFound = !1;
    const searchStr = window.location.search;
    if (searchStr.indexOf("?") === 0 && searchStr.indexOf("=") > 1) {
      const arrSource = unescape(searchStr).substring(1, searchStr.length).split("&");
      let i = 0;
      while (i < arrSource.length && !isFound) {
        if (arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() === paramName.toLowerCase()) {
          paramValue = arrSource[i].split("=")[1].toString();
          isFound = !0;
        }
        i++;
      }
    }
    return this.isEmpty(paramValue) ? "" : paramValue;
  }

  // 返回指数文字颜色，2为升
  static calculateUpDown(val) {
    if (val === 2) {
      return "cred";
    }
    if (val === 1) {
      return "cgreen";
    }
    return null;
  }

  // 返回变动后的指数的背景颜色，2为升
  static calculateUpDownStatus(val) {
    if (val === 2) {
      return "bgpinks";
    }
    if (val === 1) {
      return "bggreens";
    }
    return null;
  }


  /**
   * 将一个字符串转换成char
   * @param {Object} bytes
   */
  static stringToChars(bytes) {
    const str = bytes.replace(/(^\s*)|(\s*$)/g, "");
    let returnChar = "";
    for (let i = 0; i < str.length; i++) {
      returnChar += i === 0 ? str.charCodeAt(i) : `|${str.charCodeAt(i)}`;
    }
    return returnChar;
  }

  /**
   * 将一个char转换成字符串
   * @param {Object} bytes
   */
  static charsToString(bytes) {
    const str = bytes.replace(/(^\s*)|(\s*$)/g, "");
    let returnStr = "";
    str.forEach((item) => {
      returnStr += String.fromCharCode(item);
    });
    return returnStr;
  }

  /**
   * 将一个字符串转换成char
   * @param {Object} bytes
   */
  static stringToCharsArray(bytes) {
    const str = bytes.replace(/(^\s*)|(\s*$)/g, "");
    const returnChar = Array.of();
    for (let i = 0; i < str.length; i++) {
      returnChar.push(parseInt(str.charAt(i)));
    }
    return returnChar;
  }

  /**
   * 将一个char数组转换成字符串
   * @param arrStr
   */
  static charsArrayToString(arrStr) {
    let returnStr = "";
    arrStr.forEach((item) => {
      returnStr += item.toString();
    });
    return returnStr;
  }


  // 赛事id的解密
  static GetOddsMatchID(matchId, f, s) {
    if (matchId < 1000) {
      return matchId.toString();
    }
    const result = ((parseInt(matchId) + parseInt(s) - (parseInt(f) * 10)) / 6);
    const strResult = result.toString();
    const len = strResult.length;
    const charResult = this.stringToCharsArray(strResult);
    let n3 = charResult[len - 1];
    let n2 = charResult[2];
    let n1 = charResult[1];
    // 矩阵变换
    let i = 0;
    for (; i < 10; i++) {
      if (oddsMatrix[K3][i] === n3) {
        break;
      }
    }
    n3 = i;

    let j = 0;
    for (; j < 10; j++) {
      if (oddsMatrix[j][s] === n2) {
        break;
      }
    }
    n2 = j;

    j = 0;
    for (; j < 10; j++) {
      if (oddsMatrix[j][f] === n1) {
        break;
      }
    }
    n1 = j;

    charResult[1] = n1;
    charResult[2] = n2;
    charResult[len - 1] = n3;
    return this.charsArrayToString(charResult);
  }

  // 根据赛事数字，获取赛事状态文字
  static getStatueDesc(status) {
    switch (status) {
      case MatchStatusType.NOT_STARTED:
        return i18n.t("Match_Status_Type_List")[0];
      case MatchStatusType.FIRST_HALF:
        return i18n.t("Match_Status_Type_List")[1];
      case MatchStatusType.MIDDLE:
        return i18n.t("Match_Status_Type_List")[2];
      case MatchStatusType.SECOND_HALF:
        return i18n.t("Match_Status_Type_List")[3];
      case MatchStatusType.OVERTIME:
        return i18n.t("Match_Status_Type_List")[4];
      case MatchStatusType.PENALTY_KICK:
        return i18n.t("Match_Status_Type_List")[5];
      case MatchStatusType.TBD:
        return i18n.t("Match_Status_Type_List")[6];
      case MatchStatusType.KILL:
        return i18n.t("Match_Status_Type_List")[7];
      case MatchStatusType.PAUSE:
        return i18n.t("Match_Status_Type_List")[8];
      case MatchStatusType.POSTPONE:
        return i18n.t("Match_Status_Type_List")[9];
      case MatchStatusType.FINISH:
        return i18n.t("Match_Status_Type_List")[10];
      case MatchStatusType.CANCEL:
        return i18n.t("Match_Status_Type_List")[11];
      default:
        return `${status}`;
    }
  }

  // 获取分钟数
  static getMinuteString(status, start, systemTime) {
    if (start <= 0) return "";
    const startTime = start / 1000;
    const nowTimeSecond = systemTime / 1000;
    let seconds = 0;
    switch (status) {
      case MatchStatusType.FIRST_HALF: // 上半场
        seconds = nowTimeSecond - startTime; // 开场显示1分钟
        if (seconds > 45 * 60) return "45+";
        if (seconds / 60 <= 0) return "1'";
        return `${parseInt(seconds / 60)}'`;
      case MatchStatusType.SECOND_HALF: // 下半场
        seconds = nowTimeSecond - startTime + 46 * 60; // 下半场显示46分钟
        if (seconds < 0) {
          return "";
        }
        if (seconds > 90 * 60) return "90+";
        if (seconds / 60 <= 45) return "46'";
        return `${parseInt(seconds / 60)}'`;
      default:
        return "";
    }
  }

  // 根据赛事状态判断显示比分还是vs
  static needDisplayScore(status) {
    switch (status) {
      case MatchStatusType.FIRST_HALF: // 上半
      case MatchStatusType.MIDDLE: // 中
      case MatchStatusType.SECOND_HALF: // 下半
      case MatchStatusType.OVERTIME: // 加时
      case MatchStatusType.FINISH: // 完
      case MatchStatusType.PENALTY_KICK: // 点
        return true;
      default:
        return false;
    }
  }

  // 根据赛事状态，返回字体颜色
  static getStatusColor(status) {
    switch (status) {
      case MatchStatusType.FIRST_HALF:
      case MatchStatusType.SECOND_HALF:
      case MatchStatusType.OVERTIME:
        return "color339900";
      case MatchStatusType.MIDDLE:
        return "color4687d5";
      case MatchStatusType.FINISH:
      case MatchStatusType.PAUSE:
      case MatchStatusType.TBD:
      case MatchStatusType.KILL:
      case MatchStatusType.CANCEL:
      case MatchStatusType.POSTPONE:
      case MatchStatusType.PENALTY_KICK:
        return "colorff0000";
      case MatchStatusType.NOT_STARTED:
      default:
        return "colorGRAY";
    }
  }


  // 根据赛事状态，返回进行中（2）、完场（3）、未开始（1）
  static getMatchStatusForFilter(status) {
    switch (status) {
      case MatchStatusType.FIRST_HALF:
      case MatchStatusType.MIDDLE:
      case MatchStatusType.SECOND_HALF:
      case MatchStatusType.PAUSE:
      case MatchStatusType.OVERTIME:
        return 2;
      case MatchStatusType.FINISH:
      case MatchStatusType.TBD:
      case MatchStatusType.KILL:
      case MatchStatusType.POSTPONE:
      case MatchStatusType.CANCEL:
        return 3;
      case MatchStatusType.NOT_STARTED:
      default:
        return 1;
    }
  }


  static formatTime(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const t1 = [year, month, day].map(formatNumber).join("/");
    const t2 = [hour, minute, second].map(formatNumber).join(":");

    return `${t1} ${t2}`;
  }

  static JumpToPage(pagePath, type = 1) {
    const url = `../${pagePath}`;
    if (type === 1) {
      wx.navigateTo({ url }); // 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 wx.navigateBack 可以返回到原页面。
    } else if (type === 2) {
      wx.redirectTo({ url }); // 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。
    } else if (type === 3) {
      wx.switchTab({ url }); // 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
    } else if (type === 4) {
      wx.reLaunch({ url }); // 关闭所有页面，打开到应用内的某个页面
    }
  }
}
