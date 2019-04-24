- wxml 只是模板，不像html5，
看到的是page，不是wxml，而是编译过后的wxml，
js data 拿去模板生成page view
- 登录 登录后
 页面不是静态的，dom ajax 
 MVVM 来实现的 
 不同的状态
- wxml {{}} 或者指令 data 加相应的数据项就好了
  this.setData({}) 设置数据，并且带来数据相应部分UI的重新渲染