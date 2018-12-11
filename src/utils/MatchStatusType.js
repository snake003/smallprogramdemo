/* eslint-disable camelcase */

export default class MatchStatusType {
    // 未开
    static NOT_STARTED = 0;

    // 进行中
    static FIRST_HALF = 1;

    static MIDDLE = 2;

    static SECOND_HALF = 3;

    static OVERTIME = 4;

    static PENALTY_KICK = 5;// 点球大战

    static FINISH = -1;// 完场

    // 特殊状态
    static CANCEL = -10;

    static TBD = -11;

    static KILL = -12;

    static PAUSE = -13;

    static POSTPONE = -14;
}