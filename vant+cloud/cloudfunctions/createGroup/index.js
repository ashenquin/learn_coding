// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'wdnmd-7tw0w'

cloud.init()
    // 获取服务器句柄
const db = cloud.database({ env })

// 云函数入口函数
exports.main = async(event, context) => {
    const userInfo = event.userInfo
        // await es7 语法 promise.then升级版
    return await db.collection().add({
        data: {
            name: event.groupName,
            createBy: userInfo.openId,
            createTime: new Date(),
            deleted: false,
            updateTime: newDate()
        }
    })
}