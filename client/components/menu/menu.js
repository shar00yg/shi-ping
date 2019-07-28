// components/menu/menu.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    mainmodel: {
      type: Object,
      value: {}
    },
    menulist: {
      type: Object,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showmenus:true,
    opacityNumber:0.3
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showclick:function(e){
      //console.log("showclick")
      let isshow = !this.data.showmenus;
      // console.log(isshow)
      this.setData({
        showmenus: isshow,
      })
      if(isshow===false){
        this.setData({
          opacityNumber: 1,
        })
      }else{
        this.setData({
          opacityNumber: 0.3,
        })
      }
    },
    itemclick:function(e){
      this.showclick();
      //console.log(e.currentTarget.dataset);
      let info = e.currentTarget.dataset.item;
      if (info){
        this.triggerEvent('menuItemClick', {
            "iteminfo":info
        })
      }
    }
   

  }
})
