// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showPicSrc: "/images/showPic.jpg",
    showTitle: "《刺客信条》中的著名历史人物：大革命篇（2）",
    showId: "SHAR7YG",
    items: [
      {
        imageSrc: "/images/ywhp.jpg",
        title: "余味烘焙工作坊",
        pageviews: "233",
        likes: "123",
        comments: "11",
        boxContent: "环境非常好啊，烤肉是新开的。烤肉也不用自己动手，都是服务员姐姐帮忙烤的，自己坐着吃就好了，份量很多的，龙利鱼非常非常非常好吃，非常嫩，吃完了鱼我感觉我都变聪明了🙋。肉很多的，吃到你腻，但是那个爆浆豆腐我觉得不好吃，爆浆感觉奇奇怪怪的，下次再去吃它家的火锅"
      },
      {
        imageSrc: "/images/xxcgs.png",
        title: "鑫小城故事（光谷店）",
        pageviews: "233",
        likes: "123",
        comments: "11",
        boxContent: "这个套餐特别好，不仅划算，而且很好吃，有专人帮烤，还是腌制的肉，羊肉牛肉应有尽有，这里的鱼也非常不错，没有刺，省了时间，而且方便。强烈推荐这个套餐，非常划算，而且也很赞美这家店，以后常来！"
      },
      {
        imageSrc: "/images/hpzzct.jpeg",
        title: "禾帕自助餐厅（世贸广场店）",
        pageviews: "233",
        likes: "123",
        comments: "11",
        boxContent: "还没进门，就是一股高大上的感觉。外面的小城堡翻新之后还真的感觉好看了很多 这是一家武汉的老店 开了很久 很多好吃的 这家味道真的很棒 小姐姐服务态度特别好 给我们烤肉考的很专业 🥰🥰🥰特别喜欢这家米酒 隆重推荐他们家的美食 种草"
      },
      {
        imageSrc: "/images/mskr.jpg",
        title: "么肆烤肉（万松园店）",
        pageviews: "233",
        likes: "123",
        comments: "11",
        boxContent: "点的烤肉，实打实的肉，而且服务员小姐姐全程帮忙烤，动作熟练，服务热情。就餐环境也特别好，关键有个88套餐，两人吃食，我吃撑了，菜品量很大，价格也实惠，两人够已。还有一点，饭店里放的都是我喜欢的歌"
      },
      {
        imageSrc: "/images/sdhg.jpg",
        title: "舍得火锅（红钢城总店）",
        pageviews: "233",
        likes: "123",
        comments: "11",
        boxContent: "店铺位置很好找，就是停车不太方便！店里的生意也挺好的，6.点多来已经差不多坐满了。套餐里的菜品都是腌制过的，烤熟了很入味！店里的服务员服务态度非常好，也很热情，全程都帮忙烤肉。菜品的分量也很足，两个人吃足够了。我本来是一点肥肉都不吃的，我老公说这个五花肉很好吃，我就尝了一下，这个烤的五花肉味道是真的很不错，口味重的还可以沾辣椒粉跟辣酱吃。"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData();
  },

  
})