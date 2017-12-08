const app = getApp()
const apiurl = 'https://friend-guess.playonwechat.com/';
let sign = wx.getStorageSync('sign');
let userInfo = wx.getStorageSync('userInfo');
import tips from '../../utils/tips.js'
Page({
  data: {
  },
  onLoad: function (options) {
    console.log("options:", options);
     this.setData({
       userInfo: wx.getStorageSync('userInfo')
     })
  },
  onShow: function () {
    wx.showToast({
      title: '加载中',
      icon: 'loading'
    })
    let that = this;
    let sign = wx.getStorageSync('sign');
    // 请求
    wx.request({
      url: apiurl + "photo/manage-photo-wall?sign=" + sign + '&operator_id=' + app.data.kid,
      header: {
        'content-type': 'application/json'
      },
      method: "GET",
      success: function (res) {
        console.log("相册列表:", res);
        var status = res.data.status;
        if (status == 1) {
          //时间戳转化
          function toDate(number) {
            var n = number * 1000;
            var date = new Date(n);
            //console.log("date", date)
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            m = m < 10 ? ('0' + m) : m;
            var d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            var h = date.getHours();
            h = h < 10 ? ('0' + h) : h;
            var minute = date.getMinutes();
            var second = date.getSeconds();
            minute = minute < 10 ? ('0' + minute) : minute;
            second = second < 10 ? ('0' + second) : second;
            return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
          }
          for (var i = 0; i < res.data.data.length; i++) {
            res.data.data[i].add_time = toDate(res.data.data[i].add_time)
          }
          console.log("相册列表", res.data.data);
            that.setData({
              photoList:res.data.data
            })

        } else {
          console.log(res.data.msg);
          that.setData({
            photoList: false
          })
        }
        wx.hideLoading()
      }
    })
    
  },
  dels(e){
    wx.showToast({
      title: '加载中',
      icon: 'loading'
    })
    let that = this;
    let sign = wx.getStorageSync('sign');
    let pic_id = e.currentTarget.dataset.pic_id;
    // 请求
    wx.request({
      url: apiurl + "photo/del-photo?sign=" + sign + '&operator_id=' + app.data.kid,
      data:{
        pic_id: pic_id
      },
      header: {
        'content-type': 'application/json'
      },
      method: "GET",
      success: function (res) {
        console.log("删除相册:", res);
        var status = res.data.status;
        if (status == 1) {
          // 请求
          wx.request({
            url: apiurl + "photo/manage-photo-wall?sign=" + sign + '&operator_id=' + app.data.kid,
            header: {
              'content-type': 'application/json'
            },
            method: "GET",
            success: function (res) {
              console.log("相册列表:", res);
              var status = res.data.status;
              if (status == 1) {
                //时间戳转化
                function toDate(number) {
                  var n = number * 1000;
                  var date = new Date(n);
                  console.log("date", date)
                  var y = date.getFullYear();
                  var m = date.getMonth() + 1;
                  m = m < 10 ? ('0' + m) : m;
                  var d = date.getDate();
                  d = d < 10 ? ('0' + d) : d;
                  var h = date.getHours();
                  h = h < 10 ? ('0' + h) : h;
                  var minute = date.getMinutes();
                  var second = date.getSeconds();
                  minute = minute < 10 ? ('0' + minute) : minute;
                  second = second < 10 ? ('0' + second) : second;
                  return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
                }
                for (var i = 0; i < res.data.data.length; i++) {
                  res.data.data[i].add_time = toDate(res.data.data[i].add_time)
                }
                console.log("相册列表", res.data.data);
                that.setData({
                  photoList: res.data.data
                })

              } else {
                console.log(res.data.msg);
                that.setData({
                  photoList: false
                })
              }
            }
          })
        } else {
          tips.alert(res.data.msg);
        }
        wx.hideLoading()
      }
      
    })
    
  },
  back(){
      wx.switchTab({
        url: '../index/index'
      })
  }
})