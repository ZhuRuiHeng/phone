//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgs: [
      'http://static.xyyxsns.com/uploads/ShapeAlbums/2017/12/07/1512625296_0669_5a28d4901058c.jpg',
      'http://static.xyyxsns.com/uploads/ShapeAlbums/2017/12/07/1512625296_0669_5a28d4901058c.jpg',
      'http://static.xyyxsns.com/uploads/ShapeAlbums/2017/12/07/1512625296_0669_5a28d4901058c.jpg',
      'http://static.xyyxsns.com/uploads/ShapeAlbums/2017/12/07/1512625296_0669_5a28d4901058c.jpg',
      'http://static.xyyxsns.com/uploads/ShapeAlbums/2017/12/07/1512625296_0669_5a28d4901058c.jpg',
      'http://static.xyyxsns.com/uploads/ShapeAlbums/2017/12/07/1512625296_0669_5a28d4901058c.jpg',
      'http://static.xyyxsns.com/uploads/ShapeAlbums/2017/12/07/1512625296_0669_5a28d4901058c.jpg',
      'http://static.xyyxsns.com/uploads/ShapeAlbums/2017/12/07/1512625296_0669_5a28d4901058c.jpg',
      'http://static.xyyxsns.com/uploads/ShapeAlbums/2017/12/07/1512625296_0669_5a28d4901058c.jpg',
      'http://static.xyyxsns.com/uploads/ShapeAlbums/2017/12/07/1512625296_0669_5a28d4901058c.jpg',
      'http://static.xyyxsns.com/uploads/ShapeAlbums/2017/12/07/1512625296_0669_5a28d4901058c.jpg',
      'http://static.xyyxsns.com/uploads/ShapeAlbums/2017/12/07/1512625296_0669_5a28d4901058c.jpg',
      'http://static.xyyxsns.com/uploads/ShapeAlbums/2017/12/07/1512625296_0669_5a28d4901058c.jpg',
      'http://static.xyyxsns.com/uploads/ShapeAlbums/2017/12/07/1512625296_0669_5a28d4901058c.jpg',
      'http://static.xyyxsns.com/uploads/ShapeAlbums/2017/12/07/1512625296_0669_5a28d4901058c.jpg',
      'http://static.xyyxsns.com/uploads/ShapeAlbums/2017/12/07/1512625296_0669_5a28d4901058c.jpg',
      'http://static.xyyxsns.com/uploads/ShapeAlbums/2017/12/07/1512625296_0669_5a28d4901058c.jpg',
      'http://static.xyyxsns.com/uploads/ShapeAlbums/2017/12/07/1512625296_0669_5a28d4901058c.jpg',
      'http://static.xyyxsns.com/uploads/ShapeAlbums/2017/12/07/1512625296_0669_5a28d4901058c.jpg',
      'http://static.xyyxsns.com/uploads/ShapeAlbums/2017/12/07/1512625296_0669_5a28d4901058c.jpg',
      'http://static.xyyxsns.com/uploads/ShapeAlbums/2017/12/07/1512625296_0669_5a28d4901058c.jpg',
      'http://static.xyyxsns.com/uploads/ShapeAlbums/2017/12/07/1512625296_0669_5a28d4901058c.jpg',
      'http://static.xyyxsns.com/uploads/ShapeAlbums/2017/12/07/1512625296_0669_5a28d4901058c.jpg',
      'http://static.xyyxsns.com/uploads/ShapeAlbums/2017/12/07/1512625296_0669_5a28d4901058c.jpg',
      'http://static.xyyxsns.com/uploads/ShapeAlbums/2017/12/07/1512625296_0669_5a28d4901058c.jpg',
      'http://static.xyyxsns.com/uploads/ShapeAlbums/2017/12/07/1512625296_0669_5a28d4901058c.jpg',
      'http://static.xyyxsns.com/uploads/ShapeAlbums/2017/12/07/1512625296_0669_5a28d4901058c.jpg'
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    
  },
})
