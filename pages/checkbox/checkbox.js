// pages/checkbox/checkbox.js
Page({
  data: {
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ],
    allCheck:'',
    checkArr: ['中国']
  },
  checkboxChange: function (e) {
    var arr = [];
    e.detail.value.forEach(current => {
      for (var value of this.data.items){
        if(current === value.name){
          arr.push(value.value);
          break;
        } 
      }
    });
    if(arr.length == this.data.items.length){
      var allCheck = true;
    }else{
      var allCheck = '';
    }
    this.setData({checkArr: arr,allCheck:allCheck});
  },
  checkboxChangeAll:function(e){
    var arr = [];
    //选中
    if(e.detail.value.length>0){
      for(var i=0;i<this.data.items.length;i++){
        this.data.items[i].checked = true
        arr.push(this.data.items[i].value);
      }
      this.setData({checkArr: arr,items:this.data.items,allCheck:true});
    }else{
      // 取消
      for(var i=0;i<this.data.items.length;i++){
        this.data.items[i].checked = ''
      }
      this.setData({checkArr: arr,items:this.data.items,allCheck:''});
    }
  }
})