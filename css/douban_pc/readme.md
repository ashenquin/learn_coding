PC mobile ?
mobile first
flex 在老浏览器无法用，IE10+
布局： float 撑起来pc布局

float 会离开文档流
BFC
float 离开文档流跟position:absulute不一样
float 是魔鬼 需要清除浮动 会影响兄弟元素

两列式布局，除了float 还有谁？
inline-block grid(网格式布局)

white-space:nowrap;/*文字不换行*/
    overflow:hidden;
    text-overflow: ellipsis;截断。。。
文字。。。