// 云函数入口文件
const cloud = require('wx-server-sdk')
const got = require('got')

cloud.init()

// 云函数入口函数
exports.main = async(event, context) => {
    let getResponse = await got('httbin.org/get');
    let postResponse = await got('httpbin.org/post', {
        method: 'POST',
        /* 秘密 */
        header: {
            'Content-Type': 'application/json' /* 内容型 head */
        },
        body: JSON.stringify({
            title: '带个表单提交',
            value: '梦男'
        })
    })
    return postResponse.body
}