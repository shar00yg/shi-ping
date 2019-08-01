// component/WaterFallView/WaterFallView.js
var leftList = new Array();//左侧集合
var rightList = new Array();//右侧集合
var leftHight = 0, rightHight = 0, itemWidth = 0, maxHeight = 0;

Component({
  properties: {},
  data: {
    
  },

  attached: function () {
    wx.getSystemInfo({
      success: (res) => {
        let percentage = 750 / res.windowWidth;
        let margin = 20 / percentage;
        itemWidth = (res.windowWidth - margin) / 2;
        maxHeight = itemWidth / 0.8
      }
    });
  },

  methods: {
    /**
     * 填充数据
     */
    fillData: function (isPull, listData) {
      if (isPull) { //是否下拉刷新，是的话清除之前的数据
        leftList.length = 0;
        rightList.length = 0;
        leftHight = 0;
        rightHight = 0;
      }
      for (let i = 0, len = listData.length; i < len; i++) {
        let tmp = listData[i];
        
        if(i%2 === 0){
          leftList.push(tmp);
          
        }else{
          
          rightList.push(tmp);
        }
      }

      this.setData({
        leftList: leftList,
        rightList: rightList,
      });
    },
    touchToInfo: function(){
      wx.navigateTo({
        url: '../contentInfo/contentInfo',
      })
    }
  }
})
