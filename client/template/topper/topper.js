// template/topper/topper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lBtn1: "民大",
    lBtn2: "周边"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData();
  },
  options: {
    addGlobalClass: true,
  }
})