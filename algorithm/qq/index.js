// 数据是最廉价的数据结构
let enc_qq =[6,3,1,7,5,8,9,2,4],
    qq = []; //真正的QQ
    head=0;//队首指针，要移除的元素位置
    tail=8;//队尾指针，要加入的元素位置
// 第一个数移除
// while (head<tail) 
// {   qq.push(enc_qq[head]);
//     head++;
//     enc_qq[tail] = enc_qq[head];
//     tail++;
//     head++;
//     console.log(qq);
// }
// console.log(typeof qq);
while(head<=tail){
    qq.push(enc_qq[head]);
    enc_qq.shift();
    enc_qq[tail]=enc_qq[head];
    enc_qq.shift();
    tail--;
    console.log(qq);
}
// 移除数组的第一个数字
// enc_qq.shift();
// 在数组前插入元素
// enc_qq.unshift(0);
// 删除数组最后一个元素
// enc_qq.pop();
// 在数组最后增加一个元素
// enc_qq.push(0);
// console.log(enc_qq);
// 字符串是字符集合
// console.log(enc_qq.length,enc_qq[0]);
