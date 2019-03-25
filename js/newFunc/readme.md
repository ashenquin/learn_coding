new js 关键字
运算符创建一个用户定义的对象类型的实例
1. 构造函数伤有prototype属性，值为对象
2. 类 构造函数+prototype原型对象
3. typeof 类型 instanceof 实例

new 结果是一个新的对象，具有构造函数里的属性？
2. 对象要有原型对象，指向构造函数的原型对象

1. 空对象来了 new Object()
2. 将构造函数里的属性交给空对象呢？
   constructor 本身就是为他人服务的
   实例服务？ 还是为任何对象服务，都可以
   函数内部的this 是由函数运行时的方式决定的
   new Otaku()
   Otaku.call(obj,.....);普通函数
   call, apply 可以指定桉树运行时this,手动指向obj

3. Constructor构造函数 拥有 prototype属性，
在上面添加属性和方法，可以被实例引用到。