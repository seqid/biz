var index = require('../../data/index.js')

Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    swipers: [],
    news: [],
    cat: '17',
  },

  onLoad: function () {
    var that = this;
    var data = index.json;
    var swipers = [];
    var news = [];

    console.log(data);
    for (var i = 0; i < data.count; i++) {
      if (i < 3) {
        swipers.push(data.posts[i]);
      }
      else {
        news.push(data.posts[i]);
      }
    }
    that.setData({ swipers: swipers });
    that.setData({ news: news });
  },
  
  onShareAppMessage: function () {
    // return custom share data when user share.
    console.log('onShareAppMessage')
    return {
      title: '翟岳英沙石',
      desc: '小程序',
      path: '/pages/index/index'
    }
  },
});
