const app = getApp();
const apiurl = 'https://friend-guess.playonwechat.com/';
let sign = wx.getStorageSync('sign');
import tips from '../../utils/tips.js';

Page({
  data: {
    photos: [
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
    ],
    move:true,
    position:1,//照片位置
    pw_id:0 //默认自己的
  },
  onLoad: function () {
    
  },
  onShow:function(){
    wx.showToast({
      title: '加载中',
      icon: 'loading'
    })
      let that = this;
      // });
      app.getAuth(function () {
        let userInfo = wx.getStorageSync('userInfo');
        let sign = wx.getStorageSync('sign');
        setTimeout(function(){
          that.setData({
            move: false //动态效果
          })
        },200)
        
        // 请求
        wx.request({
          url: apiurl + "photo/photo-wall-detail?sign=" + sign + '&operator_id=' + app.data.kid,
          data: {
            pw_id: that.data.pw_id
          },
          header: {
            'content-type': 'application/json'
          },
          method: "GET",
          success: function (res) {
            console.log("照片墙信息:", res);
            var status = res.data.status;
            if (status == 1) {
                let photos = res.data.data.photos;
                console.log(typeof (photos))
                let demo= {}
                if (photos.length==0){
                    for (var i = 0; i <27; i++){
                      demo.photo_url='../img/bg.jpg';
                      demo.position=i;
                      photos.push(demo);
                      //将多个both对象pushgouwu数组
                    }
                    //console.log(photos)
                    that.setData({
                      self: res.data.data.self,
                      photos: photos
                    })
                }else{
                  that.setData({
                    self: res.data.data.self,
                    photos: res.data.data.photos
                  })
                }
                
            } else {
              tips.alert(res.data.msg);
            }
            wx.hideLoading()
          }
        })
      })
  },
  //事件处理函数
  prewImg: function (e) {
    let that = this;
    let picture = e.currentTarget.dataset.picture;
    let pictures = picture.split();
    // console.log('picture:', picture, typeof(picture))
    // console.log('pictures:', pictures, typeof(pictures))
    wx.previewImage({
      current: picture, // 当前显示图片的http链接
      urls: pictures // 需要预览的图片http链接列表
    })
  },
  management(){
    wx.navigateTo({
      url: '../setting/setting'
    })
  },
  upPhoto(){
    let that = this;
    let sign = wx.getStorageSync('sign');
    let photos = that.data.photos;
    let length = photos.length;
    if (length>0){
        
    }
    wx.showLoading({
      title: '加载中',
    });
    // 上传 
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        console.log("选择相册", res);
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        tips.loading('上传中');
        tips.loaded(); //消失
        that.setData({
          dialog: true
        })
        console.log(apiurl + "api/upload-image?sign=" + sign + ' & operator_id=' + app.data.kid);
        wx.uploadFile({
          url: apiurl + "api/upload-image?sign=" + sign + ' & operator_id=' + app.data.kid,
          filePath: tempFilePaths[0],
          name: 'image',
          formData: {
            'user': 'test'
          },
          success: function (res) {
            console.log('上传图片成功', res);
            let data = JSON.parse(res.data);
            if (data.status == 1) {
              that.setData({
                picture: data.data
              })
              wx.request({
                url: apiurl + "photo/append-photo?sign=" + sign + '&operator_id=' + app.data.kid,
                data:{
                  pw_id: that.data.pw_id,
                  picture: that.data.picture,
                  position: that.data.position
                },
                header: {
                  'content-type': 'application/json'
                },
                method: "GET",
                success: function (res) {
                  console.log("添加照片:", res);
                  let status = res.data.status;
                  if (status==1){
                    console.log('上传成功！')
                  }else{
                    tips.alert(res.data.msg);
                  }
                  
                }
              })
              // 添加照片
            } else {
              tips.alert(res.data.msg)
            }
          }
        })
      }
    })
    wx.hideLoading()
  },
  // 生成图片墙
  produce(){
    wx.showToast({
      title: '加载中',
      icon: 'loading'
    })
    let that = this;
    let sign = wx.getStorageSync('sign');
    wx.request({
      url: apiurl + "photo/create-image?sign=" + sign + '&operator_id=' + app.data.kid,
      header: {
        'content-type': 'application/json'
      },
      method: "GET",
      success: function (res) {
        console.log("生成图片墙:", res);
        var status = res.data.status;
        if (status == 1) {
            let poster = res.data.data;
            wx.previewImage({
              current: poster, // 当前显示图片的http链接
              urls: poster // 需要预览的图片http链接列表
            })
        } else {
          tips.alert(res.data.msg);
        }
      }
    })
    wx.hideLoading()
  }
})
