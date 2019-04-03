// 什么可以存储之前的楼数?
// 变量
function lou(n) {
    // 抽象能力
    var a=1,b=2,temp=0;
    // a代表n-1层 b代表n-2层 temp代表n层
    // return lou(n-1) + lou(n-2);
    for (var i = 3; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return temp;
}
console.log(lou(50));