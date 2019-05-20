// pages/index/index.js
const app = getApp();
let interval = null;
let intime = 50;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        color: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
        images: ['/images/item.png', '/images/item1.png', '/images/item.png', '/images/item1.png', '/images/item.png', '/images/item1.png', '/images/item.png', '/images/item1.png', '/images/item.png'],
        btnconfirm: '/images/dianjichoujiang.png',
        luckPosition: 0,
        clickLuck: "clickLuck"
    },
    loadAnimation: function() {
        let that = this;
        let index = 0;
        interval = setInterval(() => {
            if (index > 7) {
                index = 0;
                that.data.color[7] = 0.5;
            } else if (index != 0) {
                that.data.color[index - 1] = 0.5;
            }
            that.data.color[index++] = 1;
            that.setData({
                color: that.data.color
            })
        }, 1000)
    },
    clickLuck() {
        let that = this;
        // 判断中奖位置格式
        if (this.data.luckPosition == null || isNaN(this.data.luckPosition) || this.data.luckPosition > 7) {
            wx.showModal({
                title: "提示",
                content: "请填写正确的值",
                showCancel: false
            })
            return;
        }
        // 设置按钮不可点击
        that.setData({
            btnconfirm: "/images/dianjichoujiangd.png",
            clickLuck: ""
        })
        clearInterval(interval)
        let index = 0;
        // 循环每一项的透明度
        interval = setInterval(() => {
            if (index > 7) {
                index = 0;
                that.data.color[7] = 0.5;
            } else if (index != 0) {
                that.data.color[index - 1] = 0.5;
            }
            that.data.color[index++] = 1;
            that.setData({
                color: that.data.color
            })
        }, intime);
        let stoptime = 2000;
        setTimeout(() => {
            that.stop(that.data.luckPosition);
        }, stoptime)
    },
    stop(which) {
        let that = this;
        clearInterval(interval);
        let current = -1;
        let color = that.data.color;
        for (let i = 0; i < color.length; i++) {
            if (color[i] == 1) {
                current = i
            }
        }
        let index = current + 1;
        that.stopLuck(which, index, intime, 10);
    },
    stopLuck(which, index, time, splittime) {
        let that = this;
        let color = that.data.color;
        setTimeout(() => {
            // 重置前一个位置
            if (index > 7) {
                index = 0;
                color[7] = 0.5
            } else if (index != 0) {
                color[index - 1] = 0.5;
            }
            // 当前位置为选中状态
            color[index] = 1;
            that.setData({
                    color
                })
                // 如果当前旋转时间过短，或当前位置不等于中奖位置，递归
            if (time < 400 || index != which) {
                // 越来越慢
                splittime++;
                time += splittime;
                index++;
                that.stopLuck(which, index, time, splittime)
            } else {
                setTimeout(() => {
                    if (which == 1 || which == 3 || which == 5 || which == 7) {
                        wx.showModal({
                            title: "提示",
                            content: "恭喜中奖",
                            showCancel: false,
                            success: res => {
                                // 设置按钮可电你
                                this.setData({
                                    btnconfirm: "/images/dianjichoujiang.png",
                                    clickLuck: "clickLuck"
                                })
                            }
                        });
                        that.loadAnimation();
                    } else {
                        wx.showModal({
                            title: "提示",
                            content: "很遗憾没中奖",
                            showCancel: false,
                            success: res => {
                                // 设置按钮可点
                                this.setData({
                                    btnconfirm: "/images/dianjichoujiang.png",
                                    clickLuck: "clickLuck"
                                })
                            }
                        });
                        that.loadAnimation();
                    }
                }, 1000)
            }
        }, time)
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.loadAnimation();
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})