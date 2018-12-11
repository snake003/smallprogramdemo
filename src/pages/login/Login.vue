<template>
  <div>
    <button v-if="!isLogin" open-type="getUserInfo" @getuserinfo="onGetUserInfo">用户授权</button>
  </div>
</template>

<script>
  import Tools from "../../utils/Tools";
  import PagePath from "../../utils/PagePath";
  import BaseSubPage from "../base/BaseSubPage.vue";

  export default {
    name: "login",
    extends: BaseSubPage,
    data() {
      return {
        isLogin: true
      };
    },
    methods: {
      onInit() {
        // 获取用户信息
        wx.getSetting({
          success: res => {
            if (res.authSetting["scope.userInfo"]) {
              // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
              wx.getUserInfo({
                success: res => {
                  this.onSetUserInfo(res.userInfo);
                }
              });
            } else {
              this.isLogin = false;
            }
          }
        });
      },
      onGetUserInfo: function(event) {
        if (event.mp && event.mp.detail && event.mp.detail.userInfo) {
          // 获取用户信息成功，跳转到主页
          this.onSetUserInfo(event.mp.detail.userInfo);
        } else {
          // 获取用户信息失败
        }
      },

      onSetUserInfo(obj) {
        // 获取用户信息成功，跳转到主页
        this.globalData.userInfo = obj;
        Tools.JumpToPage(PagePath.Main_Page);
      }
    }
  };
</script>

<style scoped>

</style>
