// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showPicSrc: "/images/0.jpg",
    showTitle: "港仔手作(武广店)",
    showId: "SHAR7YG",
    goods:[
      {
        img: "/images/mskr.jpg",
        itemWidth: 166,
        itemHeight: 166,
        rtitle: '冯记招牌水煮鱼1',
        rAddress: '五食堂',
        likes: '23',
        comments: '5',
        price: '13.9',
        Rindex: '4.7',
        goodCardID: 'shar7yg',
      },
      {
        img: "/images/mskr.jpg",
        itemWidth: 166,
        itemHeight: 166,
        rtitle: '冯记招牌水煮鱼2',
        rAddress: '五食堂',
        likes: '23',
        comments: '5',
        price: '13.9',
        Rindex: '4.7',
        goodCardID: 'shar7yg',
      },
      {
        img: "/images/mskr.jpg",
        itemWidth: 166,
        itemHeight: 166,
        rtitle: '冯记招牌水煮鱼3',
        rAddress: '五食堂',
        likes: '23',
        comments: '5',
        price: '13.9',
        Rindex: '4.7',
        goodCardID: 'shar7yg',
      },
      {
        img: "/images/mskr.jpg",
        itemWidth: 166,
        itemHeight: 166,
        rtitle: '冯记招牌水煮鱼4',
        rAddress: '五食堂',
        likes: '23',
        comments: '5',
        price: '13.9',
        Rindex: '4.7',
        goodCardID: 'shar7yg',
      },
      {
        img: "/images/mskr.jpg",
        itemWidth: 166,
        itemHeight: 166,
        rtitle: '冯记招牌水煮鱼5',
        rAddress: '五食堂',
        likes: '23',
        comments: '5',
        price: '13.9',
        Rindex: '4.7',
        goodCardID: 'shar7yg',
      },
      {
        img: "/images/mskr.jpg",
        itemWidth: 166,
        itemHeight: 166,
        rtitle: '冯记招牌水煮鱼6',
        rAddress: '五食堂',
        likes: '23',
        comments: '5',
        price: '13.9',
        Rindex: '4.7',
        goodCardID: 'shar7yg',
      },
      {
        img: "/images/mskr.jpg",
        itemWidth: 166,
        itemHeight: 166,
        rtitle: '冯记招牌水煮鱼7',
        rAddress: '五食堂',
        likes: '23',
        comments: '5',
        price: '13.9',
        Rindex: '4.7',
        goodCardID: 'shar7yg',
      },
      {
        img: "/images/mskr.jpg",
        itemWidth: 166,
        itemHeight: 166,
        rtitle: '冯记招牌水煮鱼8',
        rAddress: '五食堂',
        likes: '23',
        comments: '5',
        price: '13.9',
        Rindex: '4.7',
        goodCardID: 'shar7yg',
      },
    ]
  },

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData();
    
    this.FillData(false, this.data.goods)
    
  },
  FillData: function (isFull, goods) {
    let view = this.selectComponent('#waterFallView');
    view.fillData(isFull, goods);
  }
  ,
  onPullDownRefresh: function () {

     this.FillData(true,this.data.goods);
    
  },
})