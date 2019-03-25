* 五种清除浮动的方法
5种方法全在父容器上执行
1. 父元素底部加上一行代码<div style="clear:left;"></div> left right同时存在时 clear:both
2. 在父元素css中加上
div.content{
    float: left;
}
3. 伪元素after
.content::after{
      content:'.';
      clear:both;
      display: block;
      height: 0;
      visibility: hidden;
    }
.content::after{
      content:'';
      clear:both;
      display: block;
    }
给父元素div添加一个clearFix的class类
.clearFix::after{
      content:'';
      clear:both;
      display: block;
    }
4. 利用BFC简称(块级格式化上下文) 的效果来弥补父容器的高度塌陷
div.content{
    overflow:hidden/auto/scroll;
}
5. 尼古拉斯大师 方法，把父容器的display设置为table，可以创建一个匿名表格单元，直接触发BFC效果
.content{
    display:table;
}
不推荐使用，会出现各种潜在的或实在的各种问题