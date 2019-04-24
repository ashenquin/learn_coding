var LRUCache = function(capacit) {
    this.capacity = capacity; // 容量
    this.obj = {}; // 存放数据
    // 最近最少使用?
    // 开头[0]， 结尾.length-1
    // unshift pop()
    // obj 存取， 数组来存重要性
    this.arr = [];

}
LRUCache.prototype.get = function(key){
    var val = his.obj[key];
    if (val>0) {
        //最近最少使用
        var index = this.arr.indexOf(key);
        this.arr.splice(index, 1);
        this.arr.unshift(key);
        return val;
    } else {
        return  -1;
    }
}
LRUCache.prototype.set = function(key,val) {
    //之前已存在
    if (this.obj[key]) {//更新
        var index = this.arr.indexOf(key);
        this.arr.splice(index, 1);
        this.arr.unshift(key);
        return;
    }
    // 空间不够怎么办？
    if (this.capacity === this.arr.length) {
        //满了
        var k = this.arr.pop();
        this.obj[0]=undefined;
    }
    //1, 1
    this.obj[key] = val;//存好了
    this.arr.unshift(key);//最近最常使用
}