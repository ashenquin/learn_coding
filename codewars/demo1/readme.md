有一段字符

- 如果字符超过140字， 返回false
- 如果是空字符串，返回false
- 以#开始
- 每个单词第一个字母都大写

"How are you".split(' ').map(function(w) {return w.charAt(0).toUpperCase() + w.slice(1)})
(3) ["How", "Are", "You"]
- 将单词字符串， 变成单词数组 
  split(' ') 按字符分割
- 数组里的每个元素都是单词，首字母要大写
  map 遍历每个元素，使用箭头函数
- 每个单词 charAt(0) 第一个字符 toUpperCase()
- 除第一个字符后，其余的呢？ slice(1) 按位置切割
- join(' ') 把分割的字符拼起来，用字符拼接