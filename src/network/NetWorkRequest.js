/* eslint-disable prefer-destructuring */
import Tools from "../utils/Tools";
import i18n from "../lang";

function ApiModel() {
  this.urlTxt = "http://txt.win007.com";
  this.football = {
    // 即时指数相关
    liveOddsRefresh: `${this.urlTxt}/phone/txt/asianchange.txt`, // 足球即时变化
    liveOddsTxt: `${this.urlTxt}/phone/txt`, // 足球即时指数
    companyData: `${this.urlTxt}/phone/company.aspx`, // 足球指数公司
    liveOddsAsp: `${this.urlTxt}/phone/odds.aspx`, // 足球即时指数
    liveOddsAsiaChange: `${this.urlTxt}/phone/asiandetail.aspx`, // 足球即时亚指变化
    liveOddsEuroChange: `${this.urlTxt}/phone/1x2eurodetail.aspx`, // 足球即时欧指变化
    liveOddsUpDownChange: `${this.urlTxt}/phone/oudetail.aspx`, // 足球即时大小变化

    // 滚球相关
    rollBall: `${this.urlTxt}/phone/txt/newZouDi2JIA.txt`, // 足球滚球数据
    rollBallRefresh: `${this.urlTxt}/phone/txt/zouDiChange.txt`, // 足球滚球数据刷新
    rollBallLetBallRecord: `${this.urlTxt}/phone/txt/nowOddsAnaly.txt`, // 足球滚球让球记录
    rollBallUpDownRecord: `${this.urlTxt}/phone/txt/nowOddsAnalyOu.txt`, // 足球滚球大小记录
    rollBallDetail: `${this.urlTxt}/phone/analyoddsdetail.aspx` // 足球滚球详细变化
  };
  this.getTimeStamp = function getTime() {
    return new Date().getTime();
  };
}

export const API = new ApiModel();
let requestTask = null;
const ErrorTips1 = i18n.t("None_Data_Tips");
const ErrorTips2 = i18n.t("None_Data_To_Click_Reload_Tips");

const netWork = {
  get(url, data = null) {
    return new Promise((resolve, reject) => {
      requestTask = wx.request({
        url: url,
        data: data,
        method: "GET", // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
          "Content-Type": "application/json"
        },
        success: function(response) {
          switch (response.statusCode) {
            case 200:
              const responseData = response.data;
              // console.log(responseData);
              if (responseData.hasOwnProperty("data")) {
                if (responseData.status === 0) {
                  const returnObj = JSON.parse(responseData.data);
                  resolve(returnObj);
                } else {
                  resolve(new Error(`${ErrorTips1}`));
                }
              } else {
                resolve(responseData);
              }
              break;
            default:
              reject(new Error(`${ErrorTips2}`));
          }
        },
        fail: function(error) {
          reject(error);// 请求失败
        },
        complete: function() {
        }
      });
    });
  },
  post(url, data) {
    return new Promise((resolve, reject) => {
      requestTask = wx.request({
        url: url,
        data: data,
        method: "POST", // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
          "Content-Type": "application/json"
        }, // 设置请求的 header
        success: function(res) {
          resolve(res.data);
        },
        fail: function(error) {
          reject(error);
        },
        complete: function() {
        }
      });
    });
  }
};


/**
 * 获取足球即时指数数据
 * @returns {*}
 * @param date  非必填，默认为今天，格式yyyy-MM-dd
 * @param companyId 必填，多个使用,符号分隔
 * @param lang 非必填，0简体(默认)、1繁体、2皇冠、3泰文、4英文、5印尼文、越南文
 * @param type 非必填，0全部(默认)、1一级赛事、2足彩、3竞彩、4北单
 * @param odds 非必填，1亚赔(默认)、2大小、3欧赔
 */
export function getFootBallLiveOddsData(date, companyId, lang, type, odds) {
  let urlStr;
  if (Tools.isEmpty(companyId)) {
    urlStr = `${API.football.liveOddsTxt}/asianOdds_${lang}_${type}.txt`;
  } else {
    urlStr = `${API.football.liveOddsAsp}?date=${date}&companyid=${companyId}&lang=${lang}&type=${type}&odds=${odds}`;
  }
  return netWork.get(urlStr);
}

/**
 * 获取足球即时指数公司列表
 * @returns {*}
 * @param lang 非必填，0简体(默认)、1繁体、2皇冠、3泰文、4英文、5印尼文、越南文
 */
export function getFootBallCompanyData(lang) {
  const urlStr = `${API.football.companyData}?lang=${lang}`;
  return netWork.get(urlStr);
}

/**
 * 获取足球即时指数变化
 * @returns {*}
 */
export function getFootBallLiveOddsRefresh() {
  const urlStr = `${API.football.liveOddsRefresh}`;
  return netWork.get(urlStr);
}

/**
 * 获取足球指数变化数据
 * * @returns {*}
 * @param companyId 公司id
 * @param matchId  赛事id
 * @param oddsType 非必填，1亚赔(默认)、2大小、3欧赔
 * @returns {*}
 */
export function getFootBallLiveOddsChange(companyId, matchId, oddsType) {
  let urlStr;
  if (oddsType === 1) {
    urlStr = `${API.football.liveOddsAsiaChange}?companyid=${companyId}&scheid=${matchId}`;
  } else if (oddsType === 2) {
    urlStr = `${API.football.liveOddsUpDownChange}?companyid=${companyId}&scheid=${matchId}`;
  } else {
    urlStr = `${API.football.liveOddsEuroChange}?companyid=${companyId}&scheid=${matchId}`;
  }
  return netWork.get(urlStr);
}


/**
 * 获取足球滚球数据
 * * @returns {*}
 * @returns {*}
 */
export function getFootRollBallData() {
  const urlStr = `${API.football.rollBall}`;
  return netWork.get(urlStr);
}

/**
 * 刷新足球滚球让球记录
 * * @returns {*}
 * @returns {*}
 */
export function getFootRollBallLetBallRecord() {
  const urlStr = `${API.football.rollBallLetBallRecord}`;
  return netWork.get(urlStr);
}

/**
 * 刷新足球滚球大小记录
 * * @returns {*}
 * @returns {*}
 */
export function getFootRollBallUpDownRecord() {
  const urlStr = `${API.football.rollBallUpDownRecord}`;
  return netWork.get(urlStr);
}

/**
 * 刷新足球滚球数据
 * * @returns {*}
 * @returns {*}
 */
export function getFootRollBallRefreshData() {
  const urlStr = `${API.football.rollBallRefresh}`;
  return netWork.get(urlStr);
}

/**
 * 获取足球滚球详细变动数据
 * * @returns {*}
 * @returns {*}
 */
export function getFootRollBallDetailData(matchId, matchtime, oddsType, isHalf) {
  const urlStr = `${API.football.rollBallDetail}?scheid=${matchId}&matchtime=${matchtime}&oddstype=${oddsType}&ishalf=${isHalf ? "1" : "0"}`;
  return netWork.get(urlStr);
}
