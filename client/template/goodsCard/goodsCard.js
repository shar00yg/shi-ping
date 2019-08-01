// template/goodsCard/goodsCard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img:"/images/mskr.jpg",
    itemWidth:46,
    itemHeight:26,
    rtitle: '冯记招牌水煮鱼',
    rAddress: '五食堂',
    likes:'23',
    comments:'5',
    price: '13.9',
    Rindex: '4.7',
    goodCardID:'shar7yg',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.init();
  },
  init:function(optins){
    var that = this;
    wx.getStorage({
      key: 'windowWidth',
      success: function (res) {
        let cNumber = (res.data - 40) / 2;
        console.log(cNumber);
        that.setData({
          itemHeight: cNumber,
          itemWidth: cNumber
        })
      },
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  }
})