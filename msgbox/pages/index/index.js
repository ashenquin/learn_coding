Page({
    onLoad: function() {
        this.popup = this.selectComponent('#popup');
    },
    showPopup: function() {
        // 弹窗
        this.popup.showPopup();
    },
    _error() {
        this.popup.hidePopup();
    },
    _success() {
        console.log("111")
        this.popup.hidePopup();
    },
    change: function(e) {
        // console.log('catch')
        var myComponent = this.selectComponent('#myComponent');
        var myComponentt = this.selectComponent('#myComponentt');
        myComponent.setText('外部调用了');
        myComponentt.setText('外部调用了too');

    },
    onTextChange: function() {
        wx.showToast({
            title: '捕获事件'
        })
    }
})