- css 命名词汇
  feeds *-item
- html结构及布局
  从上到下，从左到右，语义化和功能性
  1. 套路
  content>h3+p
  2. 盒子
  3. a 作为盒子，在移动端很正常
  display:block
  4. 盒子模型 
  文字line-height padding margin
  5. 文字截断
  tmall 商铺信息是由商家填的，他的高度，不被限制，
  display:-webkit-box;新的盒子模型，像flex来划分父元素的空间。
  overflow:hidden;超出则隐藏
  -webkit-line-clamp 行数限制
  -webkit-box-orient:vertical默认水平方向划分父元素

  6. 浮动 float
  离开文档流
  在一个盒子里，将要浮动的元素写在最前面
  经典的 左右布局
  在flex 布局之前，我们一般借助于float来布局
  图片的宽高设置 宽度用百分比，自适应需求
  高度怎么做? div padding-top:自身的宽度来做比例100%