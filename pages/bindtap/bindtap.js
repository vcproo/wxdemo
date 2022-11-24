// pages/checkbox/checkbox.js
Page({
  data: {
    val1:0,
    val2:0,
    buttonClicked:false
  },
  continuity:function(e){
    var i = e.currentTarget.dataset.index 
    i++
    this.setData({
      val1:i
    })
  },
  noContinuity:function(e){
    var that = this
    var i = e.currentTarget.dataset.index 
    i++
    this.setData({
      buttonClicked: true,
      val2:i
    })
    setTimeout(function () {
      that.setData({
        buttonClicked: false
      })
    }, 1500)
  }
})