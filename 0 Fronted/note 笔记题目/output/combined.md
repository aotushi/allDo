## 前端问题收集

* https://gitee.com/zxfjd3g/wh221017_vue2-study

*  https://gitee.com/zxfjd3g 

* [pro-collection/interview-question: 目标：收集全网经典面试问题 (github.com)](https://github.com/pro-collection/interview-question)

* [yangshun/tech-interview-handbook: 💯 Curated coding interview preparation materials for busy software engineers](https://github.com/yangshun/tech-interview-handbook)


| 序号  | 名称                                      | 作者github                                                        | 链接                                                                                                  | 其它         |
| --- | --------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ---------- |
| 1   | 木易杨前端进阶                                 | https://github.com/Advanced-Frontend/Daily-Interview-Question   | https://muyiy.cn/question/                                                                          |            |
| 2   | 前端内参                                    | https://coffe1891.gitbook.io/frontend-hard-mode-interview/      | https://github.com/coffe1891/frontend-hard-mode-interview                                           |            |
| 3   | 宇宙最强的前端面试指南                             | https://github.com/azl397985856/fe-interview                    | https://lucifer.ren/fe-interview/#/                                                                 | 最近更新3年前    |
| 4   | web前端面试-面试官系列                           | https://github.com/febobo/web-interview                         | https://vue3js.cn/interview/                                                                        | 最近更新上个月    |
| 5   | 前端知识每日3+1                               | https://github.com/haizlin/fe-interview                         | http://www.h-camel.com/index.html                                                                   | 最近更新半年前    |
| 6   | 大厂面试每日一题                                | https://github.com/shfshanyue/blog                              | https://q.shanyue.tech/                                                                             | 2023.2月份更新 |
| 7   | 30道vue面试题                               |                                                                 | https://juejin.cn/post/6844903918753808398                                                          |            |
| 8   | 前端面试                                    |                                                                 | https://lgwebdream.github.io/FE-Interview/daily/                                                    | 2年前更新      |
| 9   | 前端面试题汇总                                 |                                                                 | https://www.yuque.com/cuggz/interview                                                               |            |
| 10  | 前端面试真题会80%直接进大厂                         |                                                                 | https://bytedance.feishu.cn/base/app8Ok6k9qafpMkgyRbfgxeEnet?table=tblEnSV2PNAajtWE&view=vewJHSwJVd |            |
| 11  | 前端笔记面试部分                                |                                                                 | https://fe.padding.me/#/                                                                            | 4年前更新      |
| 12  | front-end-interview-handbook            | https://github.com/yangshun/front-end-interview-handbook        | https://www.frontendinterviewhandbook.com/zh/introduction/                                          | 5days ago  |
| 13  | Front-end-Developer-Interview-Questions | https://github.com/h5bp/Front-end-Developer-Interview-Questions | https://h5bp.org/Front-end-Developer-Interview-Questions/translations/chinese/                      | 9个月前       |
| 14  | issuesSets                              | https://github.com/Easay/issuesSets(2年前)                        |                                                                                                     | 2年前        |
| 15  |                                         |                                                                 |                                                                                                     |            |

# HTML

### 文档声明的作用

* DOCTYPE文档类型声明**告诉浏览器（解析器）应该以什么样（html或xhtml）的文档类型定义****来解析文档**
* 不同的渲染模式会影响浏览器对 CSS 代码甚⾄ JavaScript 脚本的解析。
* 它必须声明在HTML⽂档的第⼀⾏

### 浏览器渲染页面的2种模式

- **CSS1Compat：标准模式（Strick mode）**，默认模式，浏览器使用W3C的标准解析渲染页面。在标准模式中，浏览器以其支持的最高标准呈现页面。
- **BackCompat：怪异模式(混杂模式)(Quick mode)**，浏览器使用自己的怪异模式解析渲染页面。在怪异模式中，页面以一种比较宽松的向后兼容的方式显示。





### 文档声明（Doctype）和<!Doctype html>有何作用? 严格模式与混杂模式如何区分？它们有何意义?

#### 文档声明的作用

文档声明是为了告诉浏览器，当前`HTML`文档使用什么版本的`HTML`来写的，这样浏览器才能按照声明的版本来正确的解析。

**<!Doctype html>的作用：**`<!doctype html>` 的作用就是让浏览器进入标准模式，使用最新的 `HTML5` 标准来解析渲染页面；如果不写，浏览器就会进入混杂模式，我们需要避免此类情况发生。

**严格模式与混杂模式**

- **严格模式**： 又称为标准模式，指浏览器按照`W3C`标准解析代码；
- **混杂模式**： 又称怪异模式、兼容模式，是指浏览器用自己的方式解析代码。混杂模式通常模拟老式浏览器的行为，以防止老站点无法工作；

**严格模式和混杂模式的区别**

- 如果文档包含严格的`DOCTYPE` ，那么它一般以严格模式呈现
- 包含过渡 `DTD` 和 `URI` 的 `DOCTYPE` ，也以严格模式呈现，但有过渡 `DTD` 而没有 `URI` （统一资源标识符，就是声明最后的地址）会导致页面以混杂模式呈现（**有 URI 的过渡 DTD ——严格模式；没有 URI 的过渡 DTD ——混杂模式**）；
- `DOCTYPE` 不存在或形式不正确会导致文档以混杂模式呈现（**DTD不存在或者格式不正确——混杂模式**）；
- `HTML5` 没有 `DTD` ，因此也就没有严格模式与混杂模式的区别，`HTML5` 有相对宽松的 法，实现时，已经尽可能大的实现了向后兼容(**HTML5 没有严格和混杂之分**)。


### 标签语义化

什么是语义化？就是用合理、正确的标签来展示内容，比如h1~h6定义标题。

#### 好处
- 易于用户阅读，样式丢失的时候能让页面呈现清晰的结构。
- 有利于SEO，搜索引擎根据标签来确定上下文和各个关键字的权重。
- 方便其他设备解析，如盲人阅读器根据语义渲染网页
- 有利于开发和维护，语义化更具可读性，代码更好维护，与CSS3关系更和谐。


#### 语义化标签
* 新的语义化元素：article 、footer 、header 、nav 、section,progress,detail&summary
* 新的 API：音频(用于媒介回放的 video 和 audio 元素)、图形（绘图 canvas 元素）



### doctype作用
doctype是文档类型声明，目的是告诉解析器要使用什么样的文档类型定义（DTD）来解析文档。
浏览器本身分为两种模式，<u>一种是标准模式，一种是怪异模式</u>，浏览器通过doctype来区分这两种模式. doctype来声明标准模式，如果不存在就怪异模式，有些样式会和标准模式存在差异.



### 行内元素和块级元素

#### 区别
- 排列方式：
	- 行内元素：在同一行内从左到右排列。
    - 块元素：独占一行，从上到下垂直排列。
- 宽高及内外边距
    - 行内元素：默认宽度为其内容宽度，无法设置 width 和 height;只能设置左右 margin 和 padding，上下无效。
    - 块元素：默认宽度为父容器的 100%，可以设置 width 和 height;可以设置所有方向的 margin 和 padding
- 包含规则：
    - 行内元素：一般只能包含文本或其他行内元素。
    - 块元素：可以包含行内元素和其他块元素。
- 常见元素：
	- 行内元素：如 `<span>、<a>、<strong>、<em>` 等。
	- 块元素：如 `<div>、<p>、<h1>-<h6>、<ul>、<li>` 等。


#### 块级元素
* 每个块级元素都是独自占一行；
* 高度，行高，外边距（margin）以及内边距（padding）都可以控制；
* 元素的宽度如果不设置的话，默认为父元素的宽度（父元素宽度100%；
* 多个块状元素标签写在一起，默认排列方式为从上至下；

```
 <address>  // 定义地址 
 <caption>  // 定义表格标题 
 <dd>      // 定义列表中定义条目 
 <div>     // 定义文档中的分区或节 
 <dl>    // 定义列表 
 <dt>     // 定义列表中的项目 
 <fieldset>  // 定义一个框架集 
 <form>  // 创建 HTML 表单 
 <h1>    // 定义最大的标题
 <h2>    // 定义副标题
 <h3>     // 定义标题
 <h4>     // 定义标题
 <h5>     // 定义标题
 <h6>     // 定义最小的标题
 <hr>     // 创建一条水平线
 <legend>    // 元素为 fieldset 元素定义标题
 <li>     // 标签定义列表项目
 <noframes>    // 为那些不支持框架的浏览器显示文本，于 frameset 元素内部
 <noscript>    // 定义在脚本未被执行时的替代内容
 <ol>     // 定义有序列表
 <ul>    // 定义无序列表
 <p>     // 标签定义段落
 <pre>     // 定义预格式化的文本
 <table>     // 标签定义 HTML 表格
 <tbody>     // 标签表格主体（正文）
 <td>    // 表格中的标准单元格
 <tfoot>     // 定义表格的页脚（脚注或表注）
 <th>    // 定义表头单元格
 <thead>    // 标签定义表格的表头
 <tr>     // 定义表格中的行
```
#### 行内元素
行内元素不可以设置宽（width）和高（height），但可以与其他行内元素位于同一行，行内元素内一般不可以包含块级元素。行内元素的高度一般由元素内部的字体大小决定，宽度由内容的长度控制。
行内元素有以下特点：
* 不会独占一行，相邻的行内元素会排列在同一行里，直到一行排不下才会自动换行，其宽度随元素的内容而变化；
* 高宽无效，对外边距（margin）和内边距（padding）仅设置左右方向有效,上下无效(上下内外边距会在浏览器上展示出来,但是在空间上没有效果.)
* 设置行高有效，等同于给父级元素设置行高；
* 元素的宽度就是它包含的文字或图片的宽度，不可改变；
* 行内元素中不能放块级元素;
```
 <a>     // 标签可定义锚 
 <abbr>     // 表示一个缩写形式 
 <acronym>     // 定义只取首字母缩写 
 <b>     // 字体加粗 
 <bdo>     // 可覆盖默认的文本方向 
 <big>     // 大号字体加粗 
 <br>     // 换行 
 <cite>     // 引用进行定义 
 <code>    // 定义计算机代码文本
 <dfn>     // 定义一个定义项目
 <em>     // 定义为强调的内容
 <i>     // 斜体文本效果
 <kbd>     // 定义键盘文本
 <label>     // 标签为 input 元素定义标注（标记）
 <q>     // 定义短的引用
 <samp>     // 定义样本文本
 <select> // 创建单选或多选菜单
 <small>     // 呈现小号字体效果
 <span>     // 组合文档中的行内元素
 <strong> // 加粗
 <sub>     // 定义下标文本
 <sup>     // 定义上标文本
 <textarea>     // 多行的文本输入控件
 <tt>     // 打字机或者等宽的文本效果
 <var>    // 定义变量
```





#### 来源
> [CSS中 块级元素、行内元素、行内块元素区别](https://juejin.cn/post/6998925491797229599)
> https://developer.mozilla.org/zh-CN/docs/Web/HTML/Inline_elements

#### 行内元素
**是什么**
行内元素不可以设置宽（width）和高（height），但可以与其他行内元素位于同一行，行内元素内一般不可以包含块级元素。行内元素的高度一般由元素内部的字体大小(行高决定)决定，宽度由内容的长度控制。 

**特点**
* 不会独占一行，相邻的行内元素会排列在同一行里，直到一行排不下才会自动换行，其宽度随元素的内容而变化；
* 高/宽无效，对外边距（margin）和内边距（padding）仅设置左右方向有效  上下无效；
* 设置行高有效，等同于给父级元素设置行高；
* 元素的宽度就是它包含的文字或图片的宽度，不可改变；
* 行内元素中不能放块级元素，a链接里面不能再放链接；

**有哪些**
> https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements#list_of_inline_elements

```md
a abbr acronym audio 
b bdi bdo big br button 
canvas cite code 
data datalist del dfn 
em embed
i iframe img input ins 
kbd label 
map mark meter 
noscript 
object output
picture progress
1 
ruby 
s samp script select slotsmall span strong sub sup svg 
template textarea time
u tt 
var video 
wbr
```



#### 块级元素
**是什么**
占据一整行，可自定义宽度/高度等. 可容纳块级元素和行内元素.
**特点**
* 每个块元素独占一行
* 高度，行高，外边距（margin）以及内边距（padding）都可以控制；
* 元素的宽度如果不设置的话，默认为父元素的宽度（父元素宽度100%；
* 多个块状元素标签写在一起，默认排列方式为从上至下
**块元素介绍**
```sh
标题类: h1-h6
结构类: header main article aside footer p div
表格类: table thead tbody tr th td tfoot
列表类: dl dt dd / li ol ul
表单类: form
语义类: adress caption(标题) figure,canvas,video,audio
```

**使用js判断元素是否是块级元素**
>https://segmentfault.com/q/1010000003994838

```js
//chatgpt生成: 1.获取元素的display属性; 2.判断元素tagName

window.getComputedStyle(ele).display === 'block'

document.getElementById('myEle').tagName
```


#### 行内块元素
**是什么**
行内块级元素，它既具有块级元素的特点，也有行内元素的特点，它可以自由设置元素宽度和高度，也可以在一行中放置多个行内块级元素。比如：input、img就是行内块级元素，它可设置高宽以及一行多个

**特点**
* 高度、行高、外边距以及内边距都可以控制；
* 默认宽度就是它本身内容的宽度，不独占一行，但是之间会有空白缝隙，设置它上一级的 font-size 为 0，才会消除间隙；

**元素介绍**
```sh
span
img
input
button 
select
label
textarea
```

#### 元素之间的转换
* display：block ，定义元素为块级元素
* display : inline ，定义元素为行内元素
* display：inline-block，定义元素为行内块级元素



### link标签和script标签位置
为什么最好把CSS的`<link>`标签放在`<head></head>`之间？
为什么最好把 JS 的`<script>`标签恰好放在`</body>`之前，有例外情况吗？

把`<link>`放在`<head>`中
将样式表放在文档底部附近，会使许多浏览器（包括 Internet Explorer）不能逐步呈现页面。一些浏览器会阻止渲染，以避免在页面样式发生变化时，重新绘制页面中的元素。这种做法可以防止呈现给用户空白的页面或没有样式的内容。

把`<script>`标签恰好放在`</body>`之前
脚本在下载和执行期间会阻止 HTML 解析。把`<script>`标签放在底部，保证 HTML 首先完成解析，将页面尽早呈现给用户。

例外情况是当你的脚本里包含`document.write()`时。但是现在，`document.write()`不推荐使用。同时，将`<script>`标签放在底部，意味着浏览器不能开始下载脚本，直到整个文档（document）被解析。也许，对此比较好的做法是，`<script>`使用`defer`属性，放在`<head>`中。



### defer 与 async区别

[[HTML#defer,async比较]]





### img标签中使用srcset属性.
因为需要设计响应式图片。我们可以使用两个新的属性: srcset 和 sizes——来提供更多额外的资源图像和提示，帮助浏览器选择正确的一个资源.
* srcset 提供多图像资源
* sizes  用媒体查询方法来指定图像宽度
浏览器处理过程:
* 查看设备宽度
* 检查 sizes 列表中哪个媒体条件是第一个为真
* 查看给予该媒体查询的槽大小
* 加载 srcset 列表中引用的最接近所选的槽大小的图像


```html
<img 
    src="/static/flamingo-fallback.jpg"
    srcset="
    /static/flamingo4x.png 4x,
    /static/flamingo3x.png 3x,
    /static/flamingo2x.png 2x,
    /static/flamingo1x.png 1x " >


<img 
  src="https://cloud4.gogoing.site/files/2020-08-21/bbc63bf5-6f56-4d0a-a996-72fff804725c.png"
  sizes="(max-width: 376px) 375px, (max-width: 769px) 768px, 1024px"
  srcset="
    https://cloud3.gogoing.site/files/2020-08-21/bbc63bf5-6f56-4d0a-a996-72fff804725c.png 375w,
    https://cloud2.gogoing.site/files/2020-08-21/69d2679d-eefe-434a-8755-7f8b09166bf3.png 768w,
    https://cloud1.gogoing.site/files/2020-08-21/291087d7-beda-402f-9c28-b23e71beb32e.png 1024w"
>

```



### href 与 src 区别
> https://zhuanlan.zhihu.com/p/91960069

| 名称                      | 是什么                                | 用在哪里          | 作用                                      | 浏览器解析方式                                               | 其它 |
| ------------------------- | ------------------------------------- | ----------------- | ----------------------------------------- | ------------------------------------------------------------ | ---- |
| href(hypertext Reference) | 表示超文本引用,指向网络资源所在位置   | link/a            | href 用于在当前文档和引用资源之间确立联系 | 当浏览器遇到href会并行下载资源并且不会停止对当前文档的处理(同时也是为什么建议使用 link 方式加载 CSS，而不是使用 @import 方式) | 0    |
| src(source)               | 表示引用资源,目的是把文件下载到页面上 | img/script/iframe | src 用于替换当前内容                      | 当浏览器解析到src ，会暂停其他资源的下载和处理，直到将该资源加载或执行完毕(这也是script标签为什么放在底部而不是头部的原因) | 0    |


### head标签中的内容顺序
>https://twitter.com/Barret_China/status/1684192099024146432

>html 中的 `<head>` 元素通常放了一堆脚本、样式和 `meta` 等内容，你可能从未在意过这些内容的摆放顺序，但是错误的顺序会直接影响网页的加载和渲染效率.

建议遵循如下顺序：
1. preconnect
2. script-async
3. css-contains-@ import
4. sync-js
5. sync-css
6. preload
7. script-defer
8. prefetch / prerender
9. seo-relative
有一个工具叫做 capo.js，https://github.com/rviscomi/capo.js，使用它可以快速识别和优化性能问题，同时也提供了一个 Chrome 插件，可以安装试一试：https://chrome.google.com/webstore/detail/capo-get-your-EF%B9%A4%F0%9D%9A%91%F0%9D%9A%8E%F0%9D%9A%8A%F0%9D%9A%8D%EF%B9%A5/ohabpnaccigjhkkebjofhpmebofgpbeb


### meta viewport

#### 是什么
> meta viewport 是一个 HTML 元素，用于控制网页在移动设备上的显示和缩放行为。它通过设置 viewport 元素的属性，告诉浏览器如何调整页面的尺寸和缩放，以适应不同屏幕大小和分辨率的设备。

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
```

- name 为 viewport 表示供移动设备使用
- content 定义了 viewport 的属性
    - width 表示显示宽度为设备宽度（兼容苹果）
    - initial-scale 表示设备与视口的缩放比率（兼容IE）


### Data URL
#### 是什么
> Data URL 是将图片转换为 base64 直接嵌入到了网页中，使用 <img src="data:[MIME type];base64"/> 这种方式引用图片，不需要再发请求获取图片。

#### 缺点
- base64 编码后的图片会比原来的体积大三分之一左右
- Data URL 形式的图片不会缓存下来，每次访问页面都要被下载一次。
    - 可以将 Data URL 写入到 CSS 文件中随着 CSS 被缓存下来。









# CSS
> https://segmentfault.com/a/1190000013325778
> [常规](https://evelance.notion.site/3deb29fe2f464eaa938606bbbb2fc3e4)


### 常规问题
#### 初始化CSS原因? 
- 因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。
- 当然，初始化样式会对 SEO 有一定的影响，但鱼和熊掌不可兼得，但力求影响最小的情况下初始化。
- 最简单的初始化方法： `* { padding: 0; margin: 0; }` （强烈不建议）
- 使用 `normalize.css`
#### min-width, max-width,width的包含关系(优先级)是什么?
**属性的含义：**
- `min-width` 限制元素的最小宽度
- `max-width` 限制元素的最大宽度
- `width` 元素的宽度
**三者之间的优先级：**
`min-width` 和 `max-width` 的优先级都高于 `width`。即使 `width` 后面加上 `!important`。
- 当浏览器缩小导致元素宽度小于 `min-width` 时，元素的 `width` 就会被 `min-width` 的值取代，浏览器出现滚动条来容纳元素。
- 当浏览器放大导致元素的宽度大于 `max-width` 时，元素的 `width` 就会被 `max-width` 值取代。
- 当 `min-width` 值大于 `max-width` 时，则以 `min-width` 值为准。
**所以三者优先级排序： min-width > max-width > width**

### 元素竖向的百分比设定是相对于父容器的高度吗
- 对于 height 属性来说是的。
- 对于 **margin-top/bottom(padding-top/bottom) 来讲不是**，而是**相对于容器的宽度**计算的



### 页面中引入CSS文有几种方式
向页面中添加样式表的时候，层叠机制的原理是次序决定优先级。

如果为某个元素应用样式时，有两个或更多特殊性相等的规则相互竞争，则后声明的样式胜出。

* 行内样式
* 内部样式表
* 链接 `<link type="text/css" rel="stylesheet" href="style.css">`
* 导入 `@import url(style.css)`

```css
//行内
<div style="color: green; margin-top: 30px;border: 1px solid red;width: 500px">行内样式实例1</div>

//内部样式表
<style> 
p { color: #6478de; border: red 1px solid; } 
</style>

//链入外部样式
<link type="text/css" rel="stylesheet" href="style.css" >

//导入外部样式
<style> @import "qt_02_style.css"; </style>
```

### link 与 @import 的区别
就结论而言，强烈建议使用`link`标签，慎用`@import`方式。

> https://segmentfault.com/a/1190000015950516

**区别**
* 从属关系: `@import`是 CSS 提供的语法规则，只有导入样式表的作用；`link`是HTML提供的标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 连接属性等。
* 加载顺序: 加载页面时，`link`标签引入的 CSS 被同时加载；`@import`引入的 CSS 将在页面加载完毕后被加载。
* 兼容性: `@import`是CSS2.1才有的语法，故只可在 IE5+ 才能识别；`link`标签不存在兼容性问题。
* DOM可控性: `@import`不能被DOM控制




### 盒模型

#### 是什么?
>[The box model - Learn web development | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)

指网页布局中，每个 HTML 元素都可以看作是一个矩形盒子（box），包括元素的内容区域、内边距（padding）、边框（border）和外边距（margin）四个部分。

可通过`box-sizing`进行设置。根据计算宽高的区域可分为：

- `content-box` (W3C 标准盒模型) 默认使用
- `border-box` (IE 盒模型)
- `padding-box`
- `margin-box` (浏览器未实现)

#### 作用
通过设置元素的盒模型属性(box-sizing 属性)，可以控制元素的大小、位置和边距，以及元素之间的距离和排列方式。盒模型也是响应式设计和网页布局的基础。

#### 分类
* 标准盒模型
* 替代(IE)盒模型

#### 差异
主要差异在于计算元素宽度和高度时所包含的内容不同。
标准盒模型:元素的宽度和高度只包括内容区域，不包括内边距、边框和外边距。
IE盒模型: 元素的宽度和高度包括了内容区域、内边距和边框，不包括外边距

默认浏览器会使用标准模型。如果需要使用替代模型，您可以通过为其设置 box-sizing: border-box 来实现。


#### 切换
默认浏览器会使用标准模型。
替代模型  box-sizing: border-box
标准模型  box-sizing: content-box

#### 实例
所有元素都使用替代模式
设置 box-sizing 在 `<html>` 元素上，然后设置所有元素继承该属性.
```css
html {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}
```



### px、rem和em的区别
> https://github.com/Easay/issuesSets/issues/19

* px（像素）：相对长度单位，像素px是相对于显示器屏幕分辨率而言的。

* em：相对长度单位。相对于父元素的字体大小。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸。
任意浏览器的默认字体高都是16px。所有未经调整的浏览器都符合: 1em=16px。为了简化font-size的换算，需要在css中的body选择器中声明Font-size=62.5%，这就使em值变为 `16px*62.5%=10px`, 这样`12px=1.2em, 10px=1em`, 也就是说只需要将你的原来的px数值除以10，然后换上em作为单位就行了。
```css
body {
  font-size: 62.5%; /* 设置为 10px */
}

h1 {
  font-size: 2.4em; /* 相当于 24px */
}

p {
  font-size: 1.6em; /* 相当于 16px */
}
```

* rem：是CSS3新增的一个相对单位。使用rem为元素设定字体大小时，仍然是相对大小，但相对的只是HTML根元素。通过它既可以做到只修改根元素就成比例地调整所有字体大小，又可以避免字体大小逐层复合的连锁反应。

#### vw vh vmin vmax
1vh等于1%的视口高度。例如，浏览器高度是900px，那么`1vh = 900*1%=9px`，同理，若视口宽度是750px,则1vw是7.5px。

vh和vw是相对于视口的宽度和高度，而vmin和vmax则关于视口高度和宽度两者的最小或者最大值。例如，如果浏览器的高宽分别为700px和1100px，则1vmin=7px，1vmax=11px；如果高宽分别是1080px和800px,则1vmin=8px,1vmax=10.8px。

#### 使用场景
假设有一个元素，你需要让它始终在屏幕上可见。只要对其高度和宽度使用vmin单位，并赋予其低于100的值就可以做到了。例如，可以这样定义一个至少有两个边触摸到屏幕的方形：
```css
.box {
    height: 100vmin;
    width: 100vmin;
}
```
如果需要让这个方框始终铺满整个视口的可见区域：
```css
.box {
    height: 100vmax;
    width: 100vmax;
}
```



#### 盒模型内部/外部显示类型
> 了解
> https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model#补充：内部和外部显示类型

外部显示类型: 外部显示类型来决定盒子是块级还是内联
内部显示类型: 决定了盒子内部元素是如何布局的, 默认情况下是按照**正常文档流**布局. 可以通过display:flex等方式改变内部显示类型.

### 浮动
#### 浮动问题
由于浮动元素不在文档流中, 浮动元素会漂浮在文档流的块框上。
* 父元素高度无法被撑开,影响与父元素同级的元素
* 与浮动元素同级的非浮动元素（内联元素）会跟随其后
* 若非第一个元素浮动，则该元素之前的元素也需要浮动

#### 清除浮动方法
>https://github.com/Easay/issuesSets/issues/12


一般来说，元素设置为浮动后会脱离文档流，不会对文档流中其他元素造成影响。但是文本内容会记住浮动元素的大小，并在排布时避开它。造成文本环绕浮动盒子的效果。要阻止行盒子环绕在浮动盒子外面，需要给包含行盒子的元素应用clear属性。

清除浮动主要是为了解决父元素因为子元素浮动而引起的内部高度为0的问题。

##### 清除浮动的方式有：

* 父级元素定义height（不推荐）
缺点：只适合高度固定的布局，要给出精确的高度，如果高度和父级div不一样时，会产生问题。
* 结尾处加空div标签+clear:both（不推荐）
在最后加空div标签，并设定clear:both，会在空div标签上方创造出足够的垂直外边距，从而为包住浮动元素创造空间。父元素自动检测子盒子最高的高度，然后与其同高。
* 父级div定义伪类：after+zoom（推荐🌷）
IE8以上和非IE浏览器才支持:after，原理和方法2有点类似，zoom(IE专有属性)可解决ie6,ie7浮动问题。
```css
.father:after{
      content:" ";
      clear:both;
      display: block;
      /* height:0px; */
  }
```

* 父级div定义overflow:hidden
缺点：内容增多的时候容易造成不会自动换行导致内容被隐藏掉，无法显示要溢出的元素
* 父级div定义overflow:auto
当在父级div定义overflow: hidden|auto时，浏览器会自动检查浮动区域的高度。


#### 其它
* 元素浮动后,display自动变为block





### 说说BFC的理解
#### 定义

当元素在页面上垂直或水平排布时，它们之间如何相互影响，CSS有几套不同的规则，其中一套叫块级格式化上下文（Block Formatting Context）。
**格式化上下文**
Formatting context 是 W3C CSS2.1 规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。
最常见的 Formatting context 有 Block fomatting context (简称BFC)和 Inline formatting context (简称IFC)。

BFC是一个独立的布局环境，其中的元素布局是不受外界的影响，并且在一个BFC中，块盒与行盒（行盒由一行中所有的内联元素所组成）都会垂直的沿着其父元素的边框排列。


#### 会渲染BFC的元素
>https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context
* document的根元素(`<html>`)
* 浮动(float值不为none)
* 绝对定位元素(元素position值为absolute/fixed)
* 行内块(元素display属性值为inline-block)
* 表格单元(元素display属性为table-cell,默认的HTML表格)
* 表格标题(元素display属性为table-caption,默认的HTML表格)
* 被拥有`display:table`属性隐式创建的匿名table表格
* 带有overflow属性(其值不能为visible/clip)的块元素(`因为overflow:visible元素并没有限制其内容的布局，其内容可以自由地溢出元素的边界，因此没有必要创建新的BFC来限制其影响范围。`)
* `display:flow-root`
* contain属性值为layout/content/paint的元素
* Flex子元素(属性为display:flex/inline-flex的元素的直接子元素),如果它们本身不是flex或grid或table容器.
* Grid子元素(属性为display:grid/inline-grid的元素的直接子元素),如果它们本身不是flex或grid或table容器.
* 多列容器(元素其column-count/column-width不是auto,column-count不是1)
* column-span:all


#### BFC区域布局规则
1. 内部的Box按垂直方向排列;
2. 计算BFC的高度时，浮动元素也参与计算
3. Box之间垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠
4. 每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
5. BFC的区域不会与float box重叠。
6. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。

#### BFC应用


防止margin重叠: 创建新的BFC来防止相邻元素间的margin重叠
```css
//防止margin重叠  两个p标签的上下外边距会使用两个外边距中较大的那个值,使其中一个p变为bfc区域后,外边距为两个外边距和.


将其中一个p标签变为bfc区域:
 overflow: hidden; || display: inline-block; || dispaly: flex; || display: 
```
自适应两栏布局: 利用BFC不与浮动元素重叠的特性
```html

```
清除内部浮动: BFC可以包含浮动,用来清除浮动防止父元素高度塌陷
```html
<style>
    .par {
        border: 5px solid #fcc;
        width: 300px;
        // overflow: hidden; 实现bfc后, par元素高度会计算上内部的浮动元素
    }
 
    .child {
        border: 5px solid #f66;
        width:100px;
        height: 100px;
        float: left;
    }
</style>
<body>
    <div class="par">
        <div class="child"></div>
        <div class="child"></div>
    </div>
</body>
```

- 清除浮动：
    - 子浮动，父 `overflow: hidden`（缺点：阴影和下拉菜单）
- div 垂直方向 margin 上下合并：
    - 其中一个包 div ，设置 `overflow：hidden`
- div 垂直方向 margin 内外合并：
    - 父容器 1px 透明上边框
    - 父容器 `overflow: hidden`
- 右侧 div 自适应：左边浮动，右边设置 `overflow：hidden`

### line-height理解
行高是指一行文字的高度，具体说是两行文字间基线的距离。CSS中起高度作用的是 height 和 line-height，没有定义 height 属性，最终其表现作用一定是 line-height 。


###  display:none, visiblity: hidden; opacity: 0之间的区别
- `display: none` （不占空间，不能点击）（回流+重绘）
- `visibility: hidden` （**占据空间**，不可点击）（重绘）
- `opacity: 0`（**占据空间**，可以点击）（重建图层，性能较高）

更多：[分析比较 opacity: 0、visibility: hidden、display: none 优劣和适用场景](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/100)

### 浏览器如何解析 CSS 选择器的，换句话说 CSS 的匹配规则是什么？

从右向左，提高查找效率
- 浏览器根据选择器过滤掉 DOM 中的元素，并向上遍历其父元素以确定匹配项。
- 选择器链的长度越短，浏览器可以越快地确定该元素是否与选择器匹配。
（div p em）
- 如果从左到右，有无数多个 div 都得向下查找，效率低
- 反之，只有当当前元素是 em 时，才会向上查找，效率高

**例如**：
- 使用这个选择器 `p span`，浏览器首先找到所有`<span>`元素，然后一直向上遍历其父元素直到根以找到`<p>`元素。
- 对于特定的`<span>`，一旦找到`<p>` ，它就知道 `<span>` 匹配并可以停止匹配。


### 文字超长的省略号写法
#### 单行文本省略
```css
.single-line-ellipsis {
  width: 200px; /* 设置一个固定宽度，根据实际需求调整 */
  white-space: nowrap; /* 强制文本在一行内显示 */
  overflow: hidden; /* 超出宽度的部分隐藏 */
  text-overflow: ellipsis; /* 用省略号表示超出的文本 */
}
```

#### 多行文本省略
```css

.multi-line-ellipsis {
  width: 200px; /* 设置一个固定宽度，根据实际需求调整 */
  overflow: hidden; /* 超出宽度的部分隐藏 */
  text-overflow: ellipsis; /* 这行对于多行省略号只是辅助，主要靠下面的属性 */
  display: -webkit-box; /* 开启弹性伸缩盒子模型 */
  -webkit-line-clamp: 3; /* 显示的行数，超出部分用省略号表示，这里设置为 3 行，可根据需求修改 */
  -webkit-box-orient: vertical; /* 子元素垂直排列 */
}
```


### 图片为什么有左右上下间隙,怎么去除?
**原因：**
- 左右：因为 img 是 `inline-block` 行内块元素，行内元素之间有『换行（回车），空格，tab』时会产生左右间隙
- 上下：**行内元素默认与父容器基线对齐**，而基线与父容器底部有一定间隙，所以上下图片间有间隙。
**解决办法：**
- 移除上下间隙：
    - img 本身设置 `display: block;`
    - 父元素设置 `font-size: 0;` （基线与字体大小有关，字体为零，基线间就没距离了）
    - img 本身设置 `vertical-align: bottom;`（让inline-block的img与每行的底部对齐）
- 移除左右间距：
    - 行内元素间不要有换行，连成一行写消除间隙
    - 第一行结尾写上 `<!-- ，第二行开头跟上 -->` 。即利用注释消除间距
    - 父元素 font-size 设置 0

### chrome字体如何小于12px?
- 老版：`webkit-text-size-adjust: none`
- 新版：`webkit-transform: scale(.8, .8)`


### 为什么会发生样式抖动?
因为没有指定元素具体高度和宽度，比如数据还没有加载进来时元素高度是 100px(假设这里是 100px)，数据加载进来后，因为有了数据，然后元素被撑大，所有出现了抖动

### css 如何匹配前 N 个子元素及最后 N 个子元素
- 如何匹配最前三个子元素: `:nth-child(-n+3)`
- 如何匹配最后三个子元素: `:nth-last-child(-n+3)`
### li 与 li 之间有看不见的空白间隔是什么原因引起的？有什么解决办法？
- **场景：**
    - 有时，在写页面的时候，会需要将这个块状元素横排显示，此时就需要将 display 属性设置为 inline-block，此时问题出现了，在两个元素之间会出现大约8px左右的空白间隙。
- **原因：**
    - 浏览器的默认行为是把 inline 元素间的空白字符（空格换行tab）渲染成一个空格，也就是我们上面的代码 `<li>` 换行后会产生换行字符，而它会变成一个空格，当然空格就占用一个字符的宽度。
- **解决：**
    - 给 ul 标签设置 `font-size: 0;` 并为 li 元素重新设置 `font-size: XXpx;`



### 选择器优先级
[[CSS-CSS选择器#优先级]]
CSS中的优先级规则分为两大类，一类称为**继承**，另一类称为**级联**。
* 继承的优先级是最低的;
* 级联优先级:
	* 开发者设置的CSS样式；
	* @layer规则中的CSS样式；
	* 用户设置的CSS样式；
	* 浏览器内置的CSS样式。
* 每个级联层中优先级计算公式:
	* 将不同选择器分配不同数值,选择器数值越高,优先级越高,但不会超过它上一级的优先级

计算公式:
* 0级 通配符,选择符,逻辑伪类
* 1级 标签
* 2级 类 属性 伪类
* 3级 ID
* 4级 行内样式

#### 计算优先级
<span style="color:blue">一个选择器的优先级可以说是由四个部分相加 (分量)，可以认为是个十百千 — 四位数的四个位数：</span>

1. **千位**： 如果声明在 [`style`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes#attr-style) 的属性（内联样式）则该位得一分。这样的声明没有选择器，所以它得分总是1000。
2. **百位**： 选择器中包含<u>ID选择器</u>则该位得一分。
3. **十位**： 选择器中包含<u>类选择器、属性选择器、伪类</u>则该位得一分。
4. **个位**：选择器中包含<u>元素、伪元素选择器</u>则该位得一分。

**注**: <span style="color:blue">通配符选择器 (`*`)，组合符 (`+`, `>`, `~`, ' ')，和否定伪类 (`:not`) 不会影响优先级。</span>


### flex弹性布局

#### 是什么?
Flexbox是一种用于布局的CSS3模块，它提供了一种灵活的方式来组织和对齐网页中的元素。通过定义容器和其子项的属性，可以轻松地实现各种布局，如水平和垂直居中、等高列、响应式布局等。

#### flex容器6属性及作用
* **flex-direction**  主轴的方向（即子元素的排列方向: row | row-reverse | column | column-reverse。默认row。
* **flex-wrap** 子元素是否需要换行.可选值有:nowrap | wrap | wrap-reverse。默认nowrap。
* **flex-flow** 上面两项合并写法
* **justify-content** 子元素在主轴的对齐方式
	* flex-start
	* flex-end
	* center
	* space-between  两端对齐，项目之间的间隔都相等。
	* space-around   每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
* **align-items** 子元素在交叉轴上的对齐方式
	* flex-start  交叉轴的起点对齐
	* flex-end
	* center   交叉轴的起点对齐
	* baseline 项目的第一行文字的基线对齐。
	* stretch  默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
* **align-content** 定义了多根交叉轴存在时子元素在交叉轴上的对齐方式。如果项目只有一根轴线，该属性不起作用。

#### flex元素6属性
* order 定义子元素的排列顺序(在主轴上数字越小越靠前)
* flex-grow 元素的放大比例,默认为0.如果都为1,则每项元素在空间扩大时等分剩余空间
* flex-shrink 元素的缩小比例
	* 默认为1,空间不足时均等比例缩小;用0来表示禁止缩小.
	* 如果一个子元素的flex-shrink属性为0,其它子元素的为1.则空间不足时,前者不缩小.
	* 负值对该属性无效
* flex-basis 默认值为auto,表示元素占据主轴空间的原大小.
  * 可以设置具体数值或auto
  * 如果值为auto,则元素大小将根据内容自动调整.

* flex 上面3项的缩写. 
  * `flex:1`表示项目会根据剩余空间按等比例放大/缩小(相等于 1 1 0%).最后值不为auto就不会按本身宽度而均分计算.
  * `flex:none`  等价于`flex:0 0 auto`  盒子没有很大或缩小,基于各自内容自适应大小,采用本身默认大小
  * `flex:100px` 等价于`flex:1 1 100px`，表示项目会根据剩余空间按比例放大，也会按比例缩小，基准长度为100像素.
* align-self 单个元素的对齐方式


#### 实例

##### flex布局解决最后一行两边分布的问题
**解决前:**
![[Pasted image 20250227160455.png]]

**解决后:**
![[Pasted image 20250227160433.png]]

**解决方案:**

```html
<div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
    <div class="item">7</div>
    <span></span>
    <span></span>
  </div>
```


**方案说明:**
 如果我们每一行显示的个数为 n，那我们可以最后一行子项的后面加上 n-2 个 span 元素，span 元素的宽度和其它子项元素宽度一样，但不用设置高度。
**为什么是添加 n-2 个 span 元素呢 ？**
- 当最后一行只有 1 个子元素时，他会默认靠左，不用处理
- 当最后一行子元素正好时，我们就不用关心这个问题。
所以要去掉这两种情况，只需要加 n-2 个 span 元素就好


### Grid布局

#### 是什么
Grid 布局则是将容器划分成行和列，产生单元格，然后指定项目所在的单元格，可以看作是二维布局。

#### 优缺点
- **grid 布局的优点：**
    1. 固定和灵活的轨道尺寸
    2. 可以使用行号，名称或通过定位网格区域将项目放置在网格上的精确位置。网格还包含一种算法，用于控制未在网格上显示位置的项目的放置。
    3. 在需要时添加其他行和列
    4. 网格包含对齐功能，以便我们可以控制项目放置到网格区域后的对齐方式，以及整个网格的对齐方式。
    5. 可以将多个项目放入网格单元格或区域中，它们可以彼此部分重叠。然后可以用 z-index 属性控制该分层。
- **grid 布局的缺点：**
    - 兼容性不太好













##### 如何实现响应式flex布局
通过使用媒体查询和弹性盒子属性，实现响应式Flex布局，以适应不同的屏幕尺寸。
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Flexbox Responsive Layout</title>
  <style>
    .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }

    .item {
      flex: 1 0 calc(33.333% - 20px);
      margin-bottom: 20px;
      background-color: #ccc;
      text-align: center;
      padding: 10px;
    }

    @media (max-width: 768px) {
      .item {
        flex: 1 0 calc(50% - 20px);
      }
    }

    @media (max-width: 480px) {
      .item {
        flex: 1 0 calc(100% - 20px);
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </div>
</body>
</html>
```

##### 等高列
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Equal Height Columns with Flexbox</title>
  <style>
    .container {
      display: flex;
    }

    .column {
      flex: 1;
      padding: 20px;
      background-color: #ccc;
    }

    .column:first-child {
      margin-right: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="column">
      <h2>Column 1</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada felis vel augue accumsan, at posuere neque tincidunt. Sed pulvinar, nisi in fringilla fringilla, lorem nisl semper purus, vel consequat ipsum nibh vitae libero.</p>
    </div>
    <div class="column">
      <h2>Column 2</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada felis vel augue accumsan, at posuere neque tincidunt. Sed pulvinar, nisi in fringilla fringilla, lorem nisl semper purus, vel consequat ipsum nibh vitae libero. Proin dictum arcu a libero pulvinar auctor. </p>
      <p>Praesent lobortis erat vel justo finibus, nec ullamcorper quam pretium. Vivamus sed ipsum ligula. Donec lobortis sodales massa eu placerat.</p>
    </div>
  </div>
</body>
</html>
```


### position

#### position属性有那些值
position 属性用于指定一个元素在文档中的定位方式.
position有四个常用属性值：relative、absolute、fixed、static。三个不常用的：inherit、initial、sticky、unset

不设置Position的值或设置了position:static，top，left，right，bottom不起作用.
通过position属性，我们可以让元素相对于其正常位置，父元素或者浏览器窗口进行偏移。

#### position属性值介绍

##### static
默认值. 不设定position或者设定position:static都不会对这个div（或者别的标签）的布局有影响. top，left，right，bottom不会起作用

##### relative
* 相对定位. 未脱离文档流,**基于元素的margin左上角进行偏移**,不会影响其它元素的位置
* left和right同时存在，仅left有效;当top和bottom同时存在仅top有效。

##### absolute
* 绝对定位. 元素脱离了文档流,**绝对定位元素相对于最近的非static祖先元素定位**。基于祖先元素的左上角位置, 不包含margin区域, 从padding区域开始计算.
* 当祖先元素不存在时，则相对于ICB（inital container block, 初始包含块）,可以理解为窗口/body元素.
* 关于盒子层叠的次序，可以设置一个叫z-index的属性，值越大，离眼睛越近。

##### fixed
* 固定定位. 以浏览器的窗口为参考点进行定位.
* 当出现滚动条时，对象不会随着滚动，IE6以下不支持该属性。

##### sticky
* 磁贴定位. 
* 像position:relative和position:fixed的合体:

#### 实例

##### 1.声明为fixed/absolute时
* 该元素将变为块级元素(例子,span设置absolute后,可以设置宽高)
* 如果该元素是块元素且宽度是100%,则宽度变为auto

##### 2.实现水平垂直居中
> 见下面





### 重排和重绘
> https://juejin.cn/post/6844904083212468238


#### 重绘重排区别
重绘和重排是浏览器渲染页面的两个过程，它们有以下区别：
* 重绘是指元素的外观发生改变，但不影响布局的情况，例如改变颜色、背景、边框等。
* 重排是指元素的几何属性发生改变，影响了布局的情况，例如改变位置、大小、内容等。
* 重排往往有重绘。因此，在优化页面性能时，应该尽量减少重排和重绘的次数和范围。

#### 哪些操作导致重排
回流主要计算节点的位置和几何信息，那么当页面布局和几何信息发生变化时，就需要回流。
* 浏览器一开始渲染的时候
- 元素位置和尺寸发生改变的时候
- 新增和删除可见的DOM元素
- 内容发生改变（文字数量或图片大小等等）
- 元素字体大小变化。
- 频繁查询布局信息的属性。比如说： offsetTop、offsetLeft、 offsetWidth、offsetHeight、scrollTop、scrollLeft、scrollWidth、scrollHeight、clientTop、clientLeft、clientWidth、clientHeight


#### 哪些操作会导致重绘
- 更新元素的颜色
- 文本方向
- 阴影

#### 重排优化

##### 1.减少重排范围
* 尽可能直接在目标元素上操作,而不用操作父元素/兄弟元素
* 不使用table布局,1个小改动会造成整个table重新布局

##### 2.减少重排次数
* 样式集中改变 class代替style
* 分离读写操作
* 将DOM元素离线操作
* 使用absolute或fixed脱离文档流
* 优化动画

**样式集中改变**

**分离读写操作**
读操作放在一起,写入操作放在一起

**将DOM离线** !!
* 使用 display:none
* documentFragment
* 复制节点,副本操作,然后替换

```js
//一般操作
const container = document.getElementById('container')
container.style.width = '100px'
container.style.height = '200px'
container.style.border = '10px solid red'
container.style.color = 'red'

//离线后操作
const container = document.getElementById('container')
container.style.width = '100px'
container.style.height = '200px'
container.style.border = '10px solid red'
container.style.color = 'red'
```

**优化动画**
* 动画效果应用position为absolute/fixed
* 启用GPU加速的属性: CSS转换, CSS33D变换transform webgl, 视频







### css问题总结

#### 用css实现瀑布流
利用column-count和break-inside这两个CSS3属性即可

<iframe src="https://codesandbox.io/embed/staging-frog-598uwu?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="css3 瀑布流"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
   


#### 有什么不同的方式可以隐藏内容？
> https://www.frontendinterviewhandbook.com/zh/css-questions#有什么不同的方式可以隐藏内容使其仅适用于屏幕阅读器'
> 注意,链接提供的方法中涉及的Metadata格式化规范方法, WAI-ARIA规范和隐藏元素不太相关.

* display: none;：这是最常见的一种隐藏元素的方法。该属性可以完全从页面中删除元素，并在布局中不占用空间。然而，这种方法会将元素完全从文档流中删除，包括任何子元素和事件监听器。

* visibility: hidden;：这种方法与 display: none; 类似，但元素仍会占用布局空间。元素仍保留在文档流中，但对用户不可见，并且不会响应事件。

* opacity: 0;：该属性将元素的不透明度设置为 0，使元素在页面上不可见，但仍会保留在文档流中并响应事件。

* position: absolute;：将元素的 position 属性设置为absolute，可以将其从文档流中移除并相对于其最近的定位祖先进行定位。可以通过将 left 或 top 属性设置为负值来将元素移出视图区域。

* clip-path: polygon(0 0, 0 0, 0 0, 0 0);：该属性可以将元素裁剪成一个多边形，通过将其所有点的坐标设置为相同的值（例如，0），可以将元素完全裁剪并隐藏。

* height: 0; width: 0; overflow: hidden;：该属性将元素的高度和宽度设置为 0，并将其 overflow 属性设置为 hidden，以将其内容隐藏在元素内部。

* transform: scale(0);：该属性将元素缩放为 0，使其在页面上不可见，但仍会保留在文档流中并响应事件。


#### css水平居中,垂直居中, 水平垂直居中

*水平居中*
- 行内元素: `text-align: center`
- 块级元素: `margin: 0 auto`
- position:absolute +left:50%+ transform:translateX(-50%)
- `display:flex + justify-content: center`

*垂直居中*
- 行内元素 line-height
- 块级元素
	- flex
		- `display:flex + align-items: center`
		- display:table+display:table-cell + vertical-align: middle;
	- grid
	- table-cell
	- 定位+translate
		-  position：absolute +top:50%+ transform:translateY(-50%)

**水平垂直居中**
* flex
* absolute+left/top+margin 或者 absolute+left/top+transform
* absolute+(left/right/top/bottom) + margin
* tabel-cell + vertical-align

```css

// flex
display: flex;
justify-content: center;
align-items: center;


// 定位+margin-1
position: absolute;
top: 50%;
left: 50%;
margin-top: -halfOfWidthpx;
margin-left: -halfOfWidthpx;

// 定位+margin-2
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
margin: auto;


//定位+translate
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%)

//父元素 table-cell
display: table-cell
vertical-align: middle;
```


#### 单行文本溢出
```css
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
```

#### 多行文本溢出
```css
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2; // 最多显示几行
-webkit-box-orient: vertical;
```



### 使用css画一个三角形/圆形/半圆
> https://github.com/Easay/issuesSets/issues/7


#### 三角形


* border
* border+transform
* 伪元素
* linear-gradient
* clip-path
* svg
<iframe src="https://codesandbox.io/embed/san-jiao-xing-3mqln7?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="三角形"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>


**border方式**
```css
div {
	width: 0px;
	height: 0px;
	border-width: 0 40px 40px;
	border-style: solid;
	border-color: transparent transparent green;
}
```

**clip-path方式**
clip-path属性使用裁剪方式创建元素的可显示区域，区域内的部分显示，区域外的隐藏。
```css
#triangle{
	width:100px;
	height:100px;
	background: red;
	clip-path:polygon(0 100%,50% 0,100% 100%);
}
```

#### 圆形/半圆/扇形
```css
.circle {
    border-radius: 50%
}


.container{ //半圆
    width: 100px;
    height: 50px;
    background: red;
    border-radius: 50px 50px 0 0;
}

.container{ //扇形
    width: 50px;
    height: 50px;
    background: red;
    border-radius: 50px 0 0;
}
```




#### inline-block元素间间距问题
> [去除inline-block元素间间距的N种方法 « 张鑫旭-鑫空间-鑫生活 (zhangxinxu.com)](https://www.zhangxinxu.com/wordpress/2012/04/inline-block-space-remove-去除间距/)

- 移除空格
- 使用margin负值
- 使用font-size:0
- letter-spacing
- word-spacing


#### 布局案例
##### 1.左侧固定右侧自适应
**1-1.float方案**
缺点: 初始渲染后,无法自动适应宽高,有空白
<iframe src="https://codesandbox.io/embed/bu-ju-zuo-ce-gu-ding-you-ce-zi-gua-ying-ez6btk?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="布局-左侧固定右侧自适应"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

**1-2.flex方案**
<HTML>
<iframe height="300" style="width:100%;" src="https://codepen.io/westover/embed/MYWbNvO?default-tab=html%2Cresult"></iframe>
</HTML>



##### 2.圣杯布局
**2.1 浮动方案**
<iframe src="https://codesandbox.io/embed/bu-ju-sheng-bei-bu-ju-yt3zf5?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="布局-圣杯布局"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>



##### 3.双飞翼布局
**3.1 浮动方案**
<iframe src="https://codesandbox.io/embed/bu-ju-shuang-fei-yi-bu-ju-fnjxv4?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="布局-双飞翼布局"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>


#### 单行/多行文本居中
使用line-height实现
<iframe src="https://codesandbox.io/embed/wen-ben-chu-li-wc1nq3?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="文本处理"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>




### CSS 预处理器 //?

CSS 预处理器的原理: 是将类 CSS 语言通过 **Webpack 编译** 转成浏览器可读的真正 CSS。在这层编译之上，便可以赋予 CSS 更多更强大的功能，常用功能:

- 嵌套
- 变量
- 循环语句
- 条件语句
- 自动前缀
- 单位转换
- mixin 复用

```js
//less
0.嵌套 &代表当前选择器的父级.使用嵌套（nesting）代替层叠或与层叠结合使用

1.变量声明 @+变量名称=值
2.使用变量 
 2.1作为属性值
 2.2作为属性名 @{变量名称}
 2.3作为选择器 #@{变量名称} @{#变量名称}
 2.4


3.循环语句
4.条件语句

5.自动前缀




7.混入mixin
混合（Mixin）是一种将一组属性从一个规则集包含（或混入）到另一个规则集的方法。
```

# JavaScript

## 常规问题
### var/const/let的区别
- const定义常量, let/var定义变量
- const和let相对于var
  - 有块作用域
  - 没有变量提升
  - 不会添加到window上
  - 不能重复声明

### 声明变量的6种方式
>https://github.com/Easay/issuesSets/issues/113
* var
* let
* const
* function
* import
* class
#### 代码示例
代码1
```js
 function fun(str){
  let str = 'hello'+'world!';
  console.log(str);
}
fun('123');
```
结果：运行后是一个语法错误：Uncaught SyntaxError：Identifier 'code' has already been declared

代码二
```js
var str = 'hello';

function fun(){
  console.log(str);
  let str = 'world';
  console.log(str);
}
fun();
```
结果：只要块级作用域内存在let命令，它所声明的变量就“绑定”这个区域，不再受外部的影响，这也就是传说中的 暂时性死区，ES6 明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错，所以上面是一段错误代码：Uncaught ReferenceError: Cannot access 'str' before initialization。

代码三
```js
const obj = {};
let str = '坚持一周写两篇博客';
let addObj = obj.names = str;

console.log(addObj); //坚持一周写两篇博客
console.log(obj);{names:"坚持一周写两篇博客"}
```

const需要注意：
* 只声明不赋值，会报错；
* 只在声明所在的块级作用域内有效；
* const命令声明的常量不提升，存在暂时性死区；
* 不可重复声明；
* 冻结对象，可以使用Object.freeze方法


**function**
ES6规定：
允许在块级作用域内声明函数。
函数声明类似于var，即会提升到全局作用域或函数作用域的头部。
同时，函数声明还会提升到所在的块级作用域的头部。
上面三条规则只对 ES6 的浏览器实现有效，其他环境的实现不用遵守，还是将块级作用域的函数声明当作let处理。

根据这三条规则，浏览器的 ES6 环境中，块级作用域内声明的函数，行为类似于var声明的变量。

// 浏览器的 ES6 环境
```js
function f() { console.log('I am outside!'); }
(function () {
  var f = undefined;
  if (false) {
    function f() { console.log('I am inside!'); }
  }

  f();
}());
// Uncaught TypeError: f is not a function
```
**import**
import用于加载文件，在大括号接收的是一个或多个变量名，这些变量名需要与想要导入的变量名相同。

🌰：导入action.js文件中的某一个变量，这个变量里保存了一段代码块，所以要写成：import { Button } from 'action'，这个时候，就从action.js中获取到了一个叫 Button 的变量。

如果想为输入的变量重新取一个名字，import命令要使用as关键字，将输入的变量重命名，比如：
```js
import { NewButton as Button } from 'action.js';
```

**class**
```js
class Interest {
	constructor( x, y, e, z ){
		this.x = x;
		this.y = y;
		this.e = e;
		this.z = z;
	}

	MyInterest(){
		let arr = [];
		console.log(`我会${[...arr,this.x,this.y,this.e,this.z]}!`);
	}
}

let GetInterest = new Interest('唱','跳','rap','篮球');
console.log(GetInterest.MyInterest());  //我会唱,跳,rap,篮球!
```



### **执行上下文**

#### 是什么
当 JavaScript 引擎执行一段可执行代码(executable code)时，会创建对应的执行上下文(execution context)。

每个执行上下文都有3个属性:
* 变量对象(Variable object，VO)
* 作用域链(Scope chain)
* this

### 执行上下文栈

#### 定义

执行上下文栈（Execution context stack，ECS）来管理执行上下文
当执行一个函数的时候，就会创建一个执行上下文，并且压入执行上下文栈，当函数执行完毕的时候，就会将函数的执行上下文从栈中弹出。


### 变量对象
#### 是什么
变量对象是与执行上下文相关的<span style="color:red">数据作用域</span>，存储了在上下文中定义的变量和函数声明。在函数被调用但是函数尚未被执行时被创建的.创建过程实际上就是函数初始化的过程.
全局上下文中的变量对象就是全局对象
函数上下文中的变量对象(活动对象)是进入函数上下文时被创建的

#### 变量对象的组成
执行上下文的代码会分成两个阶段进行处理：分析和执行，我们也可以叫做：
1. 进入执行上下文
2. 代码执行
当进入执行上下文时，这时候还没有执行代码，
变量对象会包括：
1. 函数的所有形参 (如果是函数上下文)
   - 创建由名称和对应值组成的一个变量对象的属性
   - 没有实参，属性值设为 undefined
2. 函数声明
   - 创建由名称和对应值（函数对象(function-object)）组成一个变量对象的属性
   - 如果变量对象已经存在相同名称的属性，则完全替换这个属性
3. 变量声明
   - 创建由名称和对应值（undefined）组成一个变量对象的属性
   - <span style="color:blue">如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的这类属性</span>

#### 变量对象实例
```javascript
function foo(a) {
  var b = 2;
  function c() {}
  var d = function() {};

  b = 3;

}

foo(1);
```

在进入执行上下文后，这时候的 AO 是：
```javascript
AO = {
    arguments: {
        0: 1,
        length: 1
    },
    a: 1,
    b: undefined,
    c: reference to function c(){},
    d: undefined
}
```

代码执行:
在代码执行阶段，会顺序执行代码，根据代码，修改变量对象的值
还是上面的例子，当代码执行完后，这时候的 AO 是：
```javascript
AO = {
    arguments: {
        0: 1,
        length: 1
    },
    a: 1,
    b: 3,
    c: reference to function c(){},
    d: reference to FunctionExpression "d"
}
```


### 作用域
#### 产生的背景
将变量引入程序带来的问题: 变量存储在哪里? 程序需要的时候如何找到它们?
#### 是什么
存储变量和查找变量的规则.

#### 变量查找案例 (`var a = 2`)

以`var a = 2`为例:
* 首先, 编译器会将这段程序分解成词法单元，然后将词法单元解析成一个树结构。
* 遇到`var a`，<span style="color:blue;">编译器会询问作用域</span>是否在同作用域集合中存在同名变量
  * 是 编译器会忽略该声明，继续进行编译；
  * 否 它会要求作用域在当前作用域的集合中声明一个新的变量，并命名为a
* 编译器为引擎运行生成所需的代码,用来处理a=2这个赋值操作.<span style="color:blue;">引擎运行时会首先询问作用域</span>，在当前的作用域集合中是否存在一个叫作`a`的变量。
  * 是, 引擎就会使用这个变量
  * 否, 引擎会继续查找该变量
    * 找到, 就会将2赋值给它;
    * 没找到, 引擎就会举手示意并抛出一个异常 ?!!

#### 引擎查找变量两套规则

查找变量的两种查询方式:
- LHS查询  “赋值操作的目标是谁（LHS） 一般出现在赋值操作的左侧
- RHS查询  “谁是赋值操作的源头（RHS）”  一般出现在赋值操作的右侧

#### 查询未声明变量的处理过程
在变量还没有声明（在任何作用域中都无法找到该变量）的情况下，这两种查询的行为是不一样的。具体表现如下:
- RHS查询遍寻不到所需的变量,引擎会抛出`ReferenceError`异常
- LHS查询遍寻不到所需变量,
  - 非严格模式: 全局作用域会创建一个具有该名称的变量,并返还给引擎(非'严格模式'下)
  - 严格模式: 抛出同RHS查询失败时类似的`ReferenceError`异常
- RHS查询找到一个变量,但对变量进行不合理操作(例如,对函数类型进行调用,引用null/undefined值中的属性), 引擎抛出`TypeError`.

> `ReferenceError` 同作用域判别失败相关
> `TypeError` 代表作用域判别成功了，但是对结果的操作是不合法的



#### 作用域的两种类型

作用域共有两种主要的工作模型。
- 词法作用域: 最为普遍的，被大多数编程语言所采用的。<span style="color:blue;">词法作用域就是定义在词法阶段的作用域</span>。
- 动态作用域，仍有一些编程语言在使用（比如Bash脚本、Perl中的一些模式等）


#### JS中的作用域类型
* 全局作用域
* 函数作用域
* 块作用域

#### JS函数作用域的特点

> 在某个位置独立调用,将会局部提升

* 函数的作用域由函数的<u>定义位置决定</u>,和函数的调用位置无关
* 函数作用域在函数调用时<u>创建</u>，在调用结束时<u>销毁</u>  
* 函数每次调用都会产生一个<u>新的</u>函数作用域，函数作用域之间<u>相互独立</u>
* 在函数作用域中声明的变量是<u>局部变量</u>,只能在函数内部访问; 省略var或let，则变量默认会成为<u>全局</u>变量(不希望出现的情况)
* 在函数内部，使用var声明的变量和使用function开头的函数也会被<u>提升</u>


#### JS中的块作用域有哪些?

<u>with</u>

用with从对象中创建出的作用域仅在with声明中而非外部作用域中有效。

<u>try...catch</u>

其中声明的变量仅在catch内部有效

<u>let</u>

let关键字可以将变量绑定到所在的任意作用域中（通常是{ .. }内部）。换句话说，let为其声明的变量<span style="color:blue;">隐式地劫持了所在的块作用域</span>


#### JS块作用域的作用

1.作用域作用-垃圾回收

让引擎清楚地知道没有必要继续保存某些数据

```javascript
function process(data) {
  //...
}
{ //在这个块中定义的内容完事可以销毁
	var someReallyBigData = {};
	process(someReallyBigData);
}

//
```

<u>2.let循环</u>

<span style="color:blue">for循环头部的let不仅将i绑定到了for循环的块中，事实上它将其重新绑定到了循环的每一个迭代中，确保使用上一个循环迭代结束时的值重新进行赋值。</span>

下面通过另一种方式来说明每次迭代时进行重新绑定的行为：

```javascript
{
  let j;
  for (j=0; j<10; j++) {
    let i=j; //每个迭代重新绑定
    console.log(i);
  }
}

//说明了几件事情?
//1. for循环内存在块作用域
//2. let声明的变量会绑定到循环的每一次迭代中
```

<u>3.创建块作用域变量</u>

可以用来创建块作用域变量，但其值是固定的（常量）。之后任何试图修改值的操作都会引起错误。

4.基于作用域隐藏变量和函数


#### 作用域嵌套

是什么?
当一个块或函数嵌套在另一个块或函数中时，就发生了作用域的嵌套。

查找规则?
引擎从当前的执行作用域开始查找变量，如果找不到，就向上一级继续查找。当抵达最外层的全局作用域时，无论找到还是没找到，查找过程都会停止。

#### 作用域链

定义
由多个执行上下文的<u>变量对象</u>构成的链表叫做作用域链. 当查找变量时,会,就会,全局....


### 对象


### 数组

#### 数组遍历的方法有哪些?
* for循环
* while循环
* forEach
* for...of
* every/some reduce/map filter








### 函数
#### 函数声明和函数表达式区别
* **函数名称是否必须**
	* 以函数声明的方法定义的函数,函数名是必须的
	* 函数表达式的函数名是可选的
* **函数是否提升**
	* 以函数声明的方法定义的函数,函数可以在函数声明之前调用
	* 函数表达式的函数只能在声明之后调用
* **使用范围**
	* 以函数声明的方法定义的函数并不是真正的声明,它们仅仅可以出现在全局中,或者嵌套在其他的函数中,但是<span style="color: blue">它们不能出现在循环/条件或try/catch/finally中</span>
	* 函数表达式可以在任何地方声明。换句话说，函数声明不是一个完整的语句，所以不能出现在if-else,for循环，finally，try catch语句以及with语句中。

```js
//（函数声明整体会被提升到当前作用域的顶部，函数表达式也提升到顶部但是只有其变量名提升）

// 函数表达式
console.log(expressionFunc); // 输出: undefined
// expressionFunc(); // 如果取消注释,会抛出 TypeError: expressionFunc is not a function

var expressionFunc = function() {
    console.log("This is a function expression");
};

```


#### call/apply/bind
##### bind能多次绑定一个函数吗?
可以多次绑定,但后续绑定不能覆盖已经指定的this值.

同样使用call/apply也无法改变绑定后函数的this值.

##### 手写bind方法
```js

Function.prototype.bind2 = function(...restArgs) {
	
	let obj = [].call.unshift(restArgs) || globalThis
	let fn = this;

	return function() {
		let innerArgs = [].slice.call(arguments)
		return fn.apply(obj, restArgs.concat(innerArgs))
	}
	
}
```

##### 手写new方法
  >
  1.在内存中新建一个对象
>
>2.将新对象内部的[[prototype]]的指针赋值为构造函数的prototype属性
>
>3.更新构造函数内的this(Constructor.apply(obj))为这个对象, 并执行构造函数内部的代码,
>
>4.返回值: 如果构造函数返回非空对象,则返回该对象; 否则,返回刚创建的新对象.

```js

function newOperator() {
  let obj = {};
  Constructor = [].shift.call(arguments);
  obj.__proto__ = Constructor.prototype; 
  //let obj = Object.create(Constructor.prototype);
  let result = Constructor.apply(obj, arguments);
  return typeof result === 'object' ? result : obj;
}
```



### 闭包
![image](https://jsd.cdn.zzko.cn/gh/aotushi/image-hosting@master/documentation/image.7g1aiggs0g00.webp)
#### 定义
闭包是一个函数以及其周围状态（词法环境）的引用的组合。简单说，闭包让你可以在一个内层函数中访问到其外层函数的作用域。

#### 形成原因
存在上级作用域的引用
当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在当前词法作用域之外执行。

#### 如何创建
- 嵌套的内部函数引用了外部函数的变量, 当调用外部函数并执行返回的内部函数

#### 优点
- 保护函数的私有变量不受外部干扰,实现方法或属性的私有化
- 形成不被销毁的栈内存

#### 缺点
* 内存泄露: 程序申请了内存,但没有及时释放,导致内存空间被浪费
* 内存溢出: 程序申请的内存超过系统提供的上限,导致无法分配内存.

#### 使用场景
* 数据私有化
* 函数工厂
* 实现模块化
闭包使用场景包括: 使用return返回函数; 函数作为参数; IIFE; 定时器setTimeout; 所有的回调函数.

1.回调
闭包有用之处在于它可以将一些数据和操作它的函数关联起来。这和面向对象编程明显相似。在面对象编程中，我们可以将某些数据（对象的属性）与一个或者多个方法相关联。(在<span style="color:red">定时器, 事件监听器,Ajax请求,跨窗口通信,Web Works或者其他的异步(或同步)任务</span>中,<span style="color:blue;"> 只要使用了回调函数,实际上就是在使用闭包.</span>)
因此，当你想只用一个方法操作一个对象时，可以使用闭包。

2.模拟私有方法
私有方法不仅可以限制代码的访问权限，还提供了管理全局命名空间的强大能力，避免非核心的方法弄乱了代码的公共接口。


#### 闭包实例

##### 简述函数执行过程
```javascript
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}

var foo = checkscope();
foo();
```

简要复述其执行过程:

1. 进入全局代码，创建全局执行上下文，全局执行上下文压入执行上下文栈
2. 全局执行上下文初始化
3. 执行 checkscope 函数，创建 checkscope 函数执行上下文，checkscope 执行上下文被压入执行上下文栈
4. checkscope 执行上下文初始化，创建变量对象、作用域链、this等
5. checkscope 函数执行完毕，checkscope 执行上下文从执行上下文栈中弹出
6. 执行 f 函数，创建 f 函数执行上下文，f 执行上下文被压入执行上下文栈
7. f 执行上下文初始化，创建变量对象、作用域链、this等
8. f 函数执行完毕，f 函数上下文从执行上下文栈中弹出

问题:

当 f 函数执行的时候，checkscope 函数上下文已经被销毁了啊(即从执行上下文栈中被弹出)，怎么还会读取到 checkscope 作用域下的 scope 值呢？

<span style="color:red"> f 执行上下文维护了一个作用域链</span>：



##### 实现一个只能执行3次的函数
有一个函数，参数是一个函数，返回值也是一个函数，返回的函数功能和入参的函数相似，但这个函数只能执行3次，再次执行无效，如何实现

```javascript
function sayHi() {
    console.log('hi')
}

function threeTimes(fn) {
    let times = 0
    return () => {
        if (times++ < 3) {
            fn()
        }
    }
}

const newFn = threeTimes(sayHi)
newFn()
newFn()
newFn()
newFn()
newFn() // 后面两次执行都无任何反应
```



##### 实现add函数,让add(a)(b)和add(a,b)两种调用结果相同

```javascript
function add(a, b) {
  if (b === undefined) {
    return function(x) {
       return a + x
    }
  }
  
  return a + b
}
```



#### 闭包面试题

1.for循环
```js
var data = [];

for (var i = 0; i < 3; i++) {
  data[i] = function () {
    console.log(i);
  };
}

data[0](); //输出3
data[1](); //输出3
data[2](); //输出3
```

如何改造:
* 立即执行函数
* 使用let
```js
var data = []
for (var i=0; i<3; i++) {
	//data[i] = (function() {console.log(i)})(i) 错误
	data[i] = (function(j){console.log(j)})(i)
}


//let
var data = []
for (let i=0; i<3; i++) {
	console.log(i)
}
```



#### 其它
##### IIFE是闭包吗?

```javascript
var a = 2;
(function IIFE() {
  console.log(a);
})();
```

以上代码并不是严格的闭包:
* 因为函数（示例代码中的IIFE）并不是在它本身的词法作用域以外执行的。它在定义时所在的作用域中执行
* a是通过普通的词法作用域查找而非闭包被发现的。


##### 循环和闭包
```javascript
for (var i=1; i<=5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i*1000)
}
```

延迟函数的回调会在循环结束时才执行. 即使每个迭代中执行的setTimeout(..., 0), 所有的回调函数依然是在循环结束后才被执行.

**代码的问题:**

我们试图假设循环中的每个迭代在运行时都会给自己“捕获”一个i的副本。<u>但是根据作用域的工作原理，实际情况是尽管循环中的五个函数是在各个迭代中分别定义的，但是它们都被封闭在一个共享的全局作用域中，因此实际上只有一个i。</u>

解决:

IIFE解决方案:
```javascript
//正确代码
for (var i=1; i<=5; i++) {
  (function() {
    var j = i;
    setTimeout(function timer() {
      console.log(j);
    }, j*1000)
  })()
}
//改进
for (var i=1; i<=5; i++) {
  (function() {
    setTimeout(function timer() {
      console.log(i);
    }, i*1000)
  })(i);
}
```

使用let代替IIFE
使用let声明来代替IIFE创建新的作用域
```javascript
for (var i=1; i<=5; i++) {
  let j=i; //闭包的块作用域
  setTimeout(function timer() {
    console.log(j);
  }, j*1000);
}
```



##### 模块
通过在模块实例的内部保留对公共API对象的内部引用，可以从内部对模块实例进行修改，包括添加或删除方法和属性，以及修改它们的值。
* 接收参数
* 命名将要作为公共API返回的对象

```javascript
var foo = (function CoolModule(id) {
  function change() {
    //修改公共API
    publicAPI.identify = identify2;
  }
  
  function identify1() {
    console.log(id);
  }
  
  function identify2() {
    console.log(id.toUpperCase());
  }
  
  var publicAPI = {
    change: change,
    identify: identify1
  };
  
  return publicAPI;
})('foo module');

foo.identify(); //'foo module'
foo.change();
foo.identify(); //'FOO MODULE'
```

其他后续内容, 笔记中记录的比较详细, 面试就说到这里吧

### 高阶函数
#### 实现一个currying函数
> https://bigfrontend.dev/problem/implement-curry
```js
//错误方法
function curry(fn) {
	let args = []
	return function curried() {
		args.push(...arguments)
		if (args < fn.length) {
			return curried
		} else {
			return fn(...args)
		}
	}
}

//正确方法
function curry(fn) {
	return curried(...args) {
		let fnArgsLen = fn.length
		if (args.length < fnArgsLen) {
			return function(...moreArgs) {
				return curried.apply(this, args.concat(moreArgs))
			}
		} else {
			return fn.apply(this, args)
		}
	}
}
```

#### 按需求实现一个debounce函数
> https://bigfrontend.dev/problem/implement-basic-debounce

```js

let currentTime = 0
const run = (input) => {
  currentTime = 0
  const calls = []
  const func = (arg) => {
     calls.push(`${arg}@${currentTime}`)
  }
  const debounced = debounce(func, 3)
  input.forEach((call) => {
     const [arg, time] = call.split('@')
     setTimeout(() => debounced(arg), time)
  })
  return calls
}
expect(run(['A@0', 'B@2', 'C@3'])).toEqual(['C@5'])



function debounce(fn, delay) {
	let timeout
	return function(...args) {
		if (timeout) {
			clearTimeout(timeout)
		}

		
	}
}
```



### this

#### 介绍
* 执行上下文的一个属性
* 是在运行时进行绑定的,和函数声明的位置无关.

#### 使用原因
* 显式传递上下文对象会让代码越来越混乱
* 调用函数时候不用传递上下文对象, this隐式传递一个对象引用,API简洁易于复用

#### 绑定规则
* 默认绑定
  * 非严格模式下,函数直接调用,this绑定到window/globalThis; 严格模式下,this是undefined
* 隐式绑定
  * 调用位置上是否有上下文对象或者说是否被某个对象拥有或包含.(注意: 函数不属于对象,从作用域上来解释)
  * 规则:
    * 当引用函数有上下文对象时,隐式规则会把this绑定到上下文对象
    * <span style="color:red">对象属性引用链中只有最后一层在调用位置中起作用</span>
  * 存在的问题: 
    * 隐式丢失: 丢失绑定对象,会应用默认绑定.
	  * 隐式丢失 几种情况
	    * 将`对象.方法`赋值给变量,调用这个变量
	    * 参数传递, 将函数是通过参数传递进函数
	    * 把函数传入语言内置的函数
	  * 隐式绑定存在问题
	    * 隐式丢失中,无法控制回调函数的执行方式,也就无法控制调用位置以得到期望的值
	    * 如何解决？ 固定this

* 显式绑定
  * 不想在对象内部包含函数引用，而想在某个对象上强制调用函数。  使用call/apply/bind
  * 如果call/apply第一个参数传入原始值？？
    * 装箱  基本类型转成它的对象形式
  * 显示绑定存在的问题（理解）
    * 虽然call和apply可以在任意地方调用,但是它是直接进行调用送的.设想,如果在某个第三方库中,其异步的回调函数需要改变this,如果这个时候使用call/apply会立即调用并更改this,异步在不知道完成与否的情况下,异步回调直接运行了.
* new绑定

使用new来调用函数,或者说发生构造函数调用时,会自动执行下面的操作:
1. 内存中新建一个对象
2. 将构造函数的原型prototype赋值给新建对象的隐式原型[[prototype]]指针
3. 执行函数,并将函数的this更改为这个对象
4. 如果函数返回非空对象,则返回;否则,返回新建对象.
```js
//隐式绑定丢失
//把函数传如语言内置的函数
function foo() {
  console.log(this.a)
}

var obj = {
  a:2,
  foo: foo
}

var a = 'oops, global!'
setTimeout(obj.foo, 100); //'oops, global'
//js内置的setTimeout函数和下面的伪代码类似
functionsetTimeout(fn, delay) {
  //delay
  fn()
}
```

```js
// new绑定

const newFn = () => {
	let obj = {}
	let fn = arguments[0]
	let args = [].slice.call(arguments, 1)
	obj.__proto__ = fn.prototype
	let res = fn.call(obj, args)
	return typeof res === 'object' ? res : obj
}



function newOperator() {
  let obj = {};
  Constructor = [].shift.call(arguments);
  obj.__proto__ = Constructor.prototype; 
  //let obj = Object.create(Constructor.prototype);
  let result = Constructor.apply(obj, arguments);
  return typeof result === 'object' ? result : obj;
}

function createObject(ctor) {
  let obj = Object.create(null);
  Object.setPropertyOf(obj, ctor.prototype);
  // 上面的两步可以合并为一步: obj = Object.create(ctor.prototype)
  
  const res = ctor.apply(obj, [].slice.call(arguments, 1));
  
  return typeof(res) === 'object' ? res : obj;
}
```

### this在不同场景下的取值?

- 常规情况下, 函数中的this取决于执行函数的方式
  - fn(): 直接调用  ==> **this是?**  window
  - new fn(): new调用 ==> **this是?**  新建的对象
  - obj.fn(): 通过对象调用 ==> **this是?**  obj
  - fn.call/apply(obj): 通过函数对象的call/apply来调用 ==> **this是?**  obj

- 特殊情况:
  - bind(obj)返回的函数  ==> **this是?**  obj
  - 箭头函数 ==> **this是?**  外部作用域的this
  - 回调函数
    - 定时器/ajax/promise/数组遍历相关方法回调  ==> **this是?**  window 或 当前的事件源
    - vue控制的回调函数  ==> **this是?**  组件的实例
    - React控制的生命周期回调, 事件监听回调  ==>  **this是?**  组件对象 / undefined

- 如何控制函数的this?  
  - 利用函数的bind()
  - 利用箭头函数
  - 也可以用外部保存了this的变量


### JS设计模式








### 原型链
#### 是什么
由相互关联的原型组成的<span style="color: blue">链状结构</span>

#### 原型对象
##### 定义
每一个JavaScript对象(null除外)在创建的时候就会<u>与之关联另一个对象</u>，这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性。

#### 原型链查找规则概述
- 当我们要获取一个对象的属性时,浏览器会先在对象自身中寻找
- 如果有则直接使用,如果没有则去对象的原型中寻找
- 找到了则使用,没有则去原型的原型里去寻找.以此类推, 直到找到Object的原型,如果依然没有找到则返回undefined
- Object的原型是所有对象的原型,它的原型没有原型

#### 原型链图例
![原型与原型链结构图.png](https://i.loli.net/2021/03/31/mAWeRV3vnhjDM5B.png)








### 继承

[[JS 继承和原型链#继承]]





### 面向对象的3特征
- 封装:
  - 将可复用的代码用一个结构包装起来, 后面可以反复使用
  - js的哪些语法体现了封装性: 函数 ==> 对象 ==> 模块 ==> 组件 ==> 库
  - 封装都要有个特点: 不需要外部看到的必须隐藏起来, 只向外部暴露想让外部使用的功能或数据
- 继承
  - JS中的6种继承方式
- 多态: 多种形态
  - 理解
    - 声明时指定一个类型对象, 并调用其方法,
    - 实际使用时可以指定任意子类型对象, 运行的方法就是当前子类型对象的方法
  - JS中有多态:(去看class中的笔记)
    - 由于JS是弱类型语言, 在声明时都不用指定类型
    - 在使用时可以指定任意类型的数据 ==> 这已经就是多态的体现了





### 防抖节流原理及应用

#### 使用背景
如果是复杂的回调函数或是 ajax 请求呢? 假设 1 秒触发了 60 次，每个回调就必须在 1000 / 60 = 16.67ms 内完成，否则就会有卡顿出现。出现防抖和节流两种方案.

(高频操作导致一定时间内不能实现函数的全部功能,进而导致卡顿)

#### 应用场景
**防抖**
防抖是指在一定时间内，如果连续触发同一事件，只会执行一次事件处理函数，并且是在最后一次事件触发之后一段时间开始执行。比如下拉加载更多，在用户频繁快速滚动的情况下，只有在用户停止滚动操作，并且停留一段时间后（如300毫秒），才会请求新数据。
使用场景:
* 输入框输入并触发搜索功能时；
* 窗口大小调整，调整结束后才更新布局
* 按钮多次点击，仅仅触发一次事件。

**节流**
节流是指在一定时间内，只能触发一次事件处理函数。比如鼠标连续滚动页面时，如果不加以控制，会造成页面不停的滚动，甚至卡顿。通过节流函数控制，能够让滚动事件的触发变得更加平滑。在这种情况下，事件处理函数会在指定时间内定时执行，将事件的触发频率限制为每隔一定时间响应一次，保证页面滚动的流畅性和减轻浏览器资源消耗和溢出。
使用场景:
* 鼠标不停地拖拽某个元素时；
* 页面滚动加载数据的情况下，滚动时数据量过大；
* 拖动元素变形或改变位置等，触发过程操作不发生过为间隔性的很小的操作。


#### 防抖原理
* 在事件<span style="color:red">触发 n 秒后才执行</span>;
* 如果你在一个事件触发的 n 秒内又触发了这个事件，以新的事件的时间为准，n 秒后才执行.
```javascript
function debounce(fn, wait) {
  let timeId
  return function() {
    clearTimeout(timeId)
    timeId = setTimeout(fn, wait)
  }
}

//2 version  修复this 与 事件对象传递
function debounce2(fn, wait) {
  let timeId
  return function() {
    if (timeId) clearTimeout(timeId)
    let thisArg = this
    let args = arguments
    timeId = setTimeout(() => fn.apply(thisArg, args), wait)
  }
}

//3 version 立即执行  
function debounce3(fn, wait, immediate) {
  let timeId
  return function() {
    let thisArg = this, args = arguments
    
    if (timeId) clearTimeout(timeId)
   	
    if (immediate) {  //这个立方总是理解不好
      let callNow = !timeId
      timeId = setTimeout(() => {timeId = null} , wait)
      if (callNow) fn.apply(thisArg, args)
    } else {
      timeId = setTimeout(() => {fn.apply(thisArg, args)}, wait)
    }
  }
}


//其他
/* 
实现函数防抖的函数
*/
function debounce(callback, delay) {
  return function (event) {
    console.log('debounce 事件...')
    
    // 清除待执行的定时器任务
    if (callback.timeoutId) {
      clearTimeout(callback.timeoutId)
    }
    // 每隔delay的时间, 启动一个新的延迟定时器, 去准备调用callback
    callback.timeoutId = setTimeout(() => {
      callback.call(this, event)
      // 如果定时器回调执行了, 删除标记
      delete callback.timeoutId
    }, delay)
  }
}



//使用案例
<span>节流input表单:</span><input id="inputNode" />
    
let inputNode = document.getElementById('inputNode');
function ajax(content){console.log('ajax request'+content)};

function debounce(callback,delay){
    //n秒内又触发,则会重新计时
    if(callback.timeoutId){ 
        clearTimeout(callback.timeoutId)
    }
    callback.timeoutId = setTimeout(()=>{
        callback(event);
        //callback.call(this,event)
        delete callback.timeoutId;
    },delay);  
}

let debounceAjax = debounce(ajax, 3000);
inputNode.addEventListener('keyup',function(e){
    debounceAjax(e.target.value)
})
```



#### 节流原理
<span style="color:red">每隔一段时间只执行一次事件</span>。
节流的实现，有两种主流的实现方式，一种是使用时间戳，一种是设置定时器。
```js
//时间戳
function throttle(fn, wait) {
  let ctx, args;
  let start = 0
  return function() {
    let now = +new Date()
    ctx = this
    args = arguments
    
    if (now - start > wait) {
      fn.apply(ctx, args)
      start = now
    }
  }
}
//定时器
function throttle(fn, wait) {
  let timeId
  return function() {
    let thisArg = this
    let args = arguments
    
    if (!timeId) {
      timeId = setTimeout(() => {
        timeId = null
        fn.apply(thisArg, args)
      }, wait)
    }
  }
}

//比较两个方法：

//1. 第一种事件会立刻执行，第二种事件会在 n 秒后第一次执行
//2. 第一种事件停止触发后没有办法再执行事件，第二种事件停止触发后依然会再执行一次事件

//时间戳 + 定时器方案


/* 
实现函数节流的函数
*/

function throttle(callback, delay) {
  let start = 0 // 必须保存第一次点击立即调用
  return function (event) { // 事件回调函数
      // this是发生事件的dom元素
    console.log('throttle 事件')
    const current = Date.now()
    if (current - start > delay) { // 从第2次点击开始, 需要间隔时间超过delay
      callback.call(this, event)
      // 将当前时间指定为start, ==> 为后面的比较做准备
      start = current
    }
  }
}

<span>节流input表单:</span><input id="inputNode" />
    
let inputNode = document.getElementById('inputNode');
function ajax(content){console.log('ajax request'+content)}

function throttle(callback,delay){
    let start = 0;
    return function(event){
        let current = Date.now();
        if(current-start>delay){
            callback.call(this,event);  //用不用call, 不用
            start = current;
        }
    }
}

let throttleAjax = throttle(ajax,2000);
inputNode.addEventListener('keyup', function(e){
    throttleAjax(e.target.value)
})

```



### 白屏时间
白屏时间是指浏览器从输入网址，到浏览器开始显示内容的时间。

Performance 接口可以获取到当前页面中与性能相关的信息,该类型的对象可以通过调用只读属性 Window.performance 来获得。

performance.timing.navigationStart: PerformanceTiming.navigationStart 是一个返回代表一个时刻的 unsigned long long 型只读属性，为紧接着在相同的浏览环境下卸载前一个文档结束之时的 Unix毫秒时间戳。如果没有上一个文档，则它的值相当于 PerformanceTiming.fetchStart。

所以将以下脚本放在 `</head>` 前面就能获取白屏时间。

```html
<script>
	new Date() - performance.timing.navigationStart
</script>
```



### 模块化

ES6模块的暴露和引入语法

暴露: 分别暴露, 对象暴露, 默认暴露

```javascript
// 分别暴露
export const a = 'a'
export const b = 'b'

//暴露对象
const c = 'c'
const d = 'd'
export {
	c,
  d as dd
}

//默认暴露
export default function foo() {}

```

引入: 通用引入; 解构赋值形式引入; 简便导入

```javascript
import * as m1from './m1'

//解构赋值形式引入
import {default as aaa} from 'xx.js'

//简便导入
import _ from 'lodash'
```







### 异步

#### 事件循环

##### 事件循环
> https://github.com/kvchen95/blog/blob/master/docs/js/event-loop.md

**为什么?**
JavaScript 是单线程的，但它需要处理很多异步操作（比如加载图片、发送网络请求等）。如果让 JS 一直等待这些异步操作完成，就会导致程序卡住，无法继续执行其他任务。为了解决这个问题，JS 把这些异步操作交给宿主环境（如浏览器或 Node.js）去处理，自己则继续执行后面的代码。等到异步操作完成后，宿主环境会通知 JS，JS 再回过头来处理这些异步任务的后续逻辑。

但是，任务一多，JS 就需要知道这些任务的执行顺序。于是，**任务队列** 就诞生了。任务队列就像一个**待办事项列表**，JS 会按照队列中的顺序依次处理任务。

在 JS 中，异步任务分为两种：

1. **浏览器处理的任务**（如 `setTimeout`、图片加载）：这些任务是由宿主环境处理的，完成后会被放入 **宏任务队列**。
2. **JS 自身的异步任务**（如 `Promise`、`async/await`）：这些任务是 JS 语言本身提供的，完成后会被放入 **微任务队列**。

为了确保任务的有序执行，JS 设计了一套规则：
- **微任务队列** 的优先级高于 **宏任务队列**。
- 每当一个宏任务执行完毕后，JS 会立即检查并执行所有微任务，直到微任务队列为空，才会继续执行下一个宏任务。

**是什么**?

**事件循环（EventLoop）** 就是用来实现这套任务调度机制的。它不断地从任务队列中取出任务并执行，确保 JS 能够高效地处理同步任务和异步任务。

事件循环就是用来实现`事件调度`的.  或者说给JS分配任务的过程就是`EventLoop`.

**事件循环的How?**

1. 执行全局同步代码. 也就是变量声明和赋值, 函数定义,等等.
2. 将异步任务放入对应的队列
	2.1 在执行全局同步代码的过程中，如果遇到异步任务（如 `setTimeout`、`Promise`），JS 会根据任务类型将其放入相应的队列：
	2.2 **宏任务队列**：存放由宿主环境处理的异步任务，如 `setTimeout`、`setInterval`、DOM 事件、AJAX 请求等。
	2.3 **微任务队列**：存放 JS 自身的异步任务，如 `Promise` 的 `then` 回调、`async/await`、`MutationObserver` 等。

3. 全局同步代码执行完毕. 此时事件循环开始工作,宏任务队列和微任务队列中可能已经又任务了.

4. **执行宏任务**：EventLoop 从宏任务队列中取出一个任务执行。 
	1. 这个任务可能是: 初始的脚本代码
	2. 后续的`setTimeout`, `setInterval`回调
    
5.  **执行所有微任务**：在当前宏任务执行过程中，如果产生微任务（如 Promise 的 `then` 回调），这些微任务会被放入微任务队列。在当前宏任务执行完毕后，EventLoop 会立即执行所有微任务，直到微任务队列为空。
    
- **渲染更新**：在浏览器环境中，执行完微任务后，可能会进行页面的渲染更新。
    
- **重复循环**：EventLoop 继续从宏任务队列中取出下一个任务，重复上述过程。


#### 实例
![[Pasted image 20241009134747.png]]
```js
setTimeout(() => {
    console.log("0")
  }, 0)
  new Promise((resolve,reject)=>{
    console.log("1")
    resolve()
  }).then(()=>{        
    console.log("2")
    new Promise((resolve,reject)=>{
      console.log("3")
      resolve()
    }).then(()=>{      
      console.log("4")
    }).then(()=>{       
      console.log("5")
    })
  }).then(()=>{  
    console.log("6")
  })

  new Promise((resolve,reject)=>{
    console.log("7")
    resolve()
  }).then(()=>{         
    console.log("8")
  })
```


#### 异步加载JS脚本的方法
>https://github.com/Easay/issuesSets/issues/122

**方法一：给script标签添加defer属性**
添加了defer属性，js脚本会异步加载，但会等到html解析完成后，在window.onload事件之前执行。
添加了defer属性的js文件执行的顺序和在文档中定义的顺序一样。
```html
<script src="../your_file.js" defer></script>
```
**方法二：给script标签添加async属性**
async属性会让js并行下载，但是js文件下载完成之后立刻执行无论html是否解析完毕
添加了async属性的js文件执行顺序不能保证
```js
<script src="../your_file.js" async></script>
```
**方法三：动态添加script标签**
和img标签不一样，设置了script的src属性并不会开始下载，而是要添加到文档中Js文件才会开始下载
```js
let script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'your_file.js';
// 只有添加到html文件中才会开始下载
document.body.append(script);
```
问题⚠️：异步加载script的目的是不对html的渲染造成阻塞，如果脚本中有操作dom的行为，则不能进行。但动态添加script标签需要获取body，所以该script代码段放的位置不能在head标签中，至少要放到body标签内。

**方法四：使用xhr脚本注入**
会受到同源策略的限制
```js
let xhr = new XMLHttpRequest()
xhr.open('get', './01.extra.js', true)
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
            let script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = './01.extra.js';
            script.text = xhr.responseText;
            console.log(xhr.responseText)
            // 只有添加到html文件中才会开始下载
            document.body.append(script);
        }
    }
}
xhr.send(null);

```


#### 限制并发数（异步并发控制）?
>https://github.com/Easay/issuesSets/issues/143

```js
/**
 *
 * @param { 并发限制 } poolLimit
 * @param { promise 数组 } array
 * @param { callback } iteratorFn
 */
function asyncPool(poolLimit, array, iteratorFn) {
    let i = 0
    const ret = []
    const executing = []
    const enqueue = function () {
        // ① 边界条件，array 为空或者 promise 都已达到 resolve 状态
        if (i === array.length) {
            return Promise.resolve()
        }
        const item = array[i++]

        // ② 生成一个 promise 实例，并在 then 方法中的 onFullfilled 函数里返回实际要执行的 promise，
        const p = Promise.resolve().then(() => iteratorFn(item, array))
        ret.push(p)

        // ④ 将执行完毕的 promise 移除
        const e = p.then(() => executing.splice(executing.indexOf(e), 1))
        // ③ 将正在执行的 promise 插入 executing 数组
        executing.push(e)
        // console.log(executing)
        let r = Promise.resolve()
        // ⑥ 如果正在执行的 promise 数量达到了并发限制，则通过 Promise.race 触发新的 promise 执行
        if (executing.length >= poolLimit) {
            r = Promise.race(executing)
            // console.log("r:")
            // console.log(r)
        }

        // ⑤ 递归执行 enqueue，直到满足 ①
        return r.then(() => enqueue())
    }
    return enqueue().then(() => Promise.all(ret))
}

const timeout = i => new Promise(resolve => setTimeout(() => {
    console.log(i)
    resolve(i)
}, i));
asyncPool(2,[1000,5000,3000,2000],timeout).then(results => {
    console.log(results)
})
```





### Promise

#### 概述

> Promise 是异步编程的一种解决方案，比传统的回调函数和事件更好。
> 所谓`Promise`，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。类比为订阅演唱会的时间地址.

#### 状态
Promise有三种状态，分别是：Pending（进行中）， Fulfilled(Resolved已完成)，Rejected (已失败)。
Promise从Pending状态开始，如果成功就转到成功态，并执行resolve回调函数；如果失败就转到失败状态并执行reject回调函数。

#### 优点
- 指定回调函数的时机更加灵活: 在异步操作启动前或完成后, 指定回调函数得到异步结果
- promise链式调用解决嵌套回调的回调地狱问题 
```js
// 异步操作启动前执行操作
let promise = doSomething()
promise.then(successCallback, failureCallback)

// 异步操作完成后指定回调
let promise = doSomething()
setTimeout(() => {(promise.then(successCallback, failureCallback)), 3000)
```


#### promise.prototype.then()返回值
Promise.then()方法返回一个新的 Promise 对象，它的状态和值取决于 then 中的回调函数的执行结果。具体来说，有以下几种情况：
* 返回一个Promise,其值和状态决定了返回Promise的值和状态
* 返回一个错误, 返回一个失败的Promise,其值为返回的错误
* 其它值 返回一个成功的Promise,其值为其它值



#### Promise-API实现

| 静态方法                         | 作用                                                                                                                                                         | 其他  |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| Promise.all(iterable)        | 传入一个可迭代对象,返回一个promise<br/>* 当入参中所有的promise成功时(包括空迭代对象),返回的Promise才会成功,其值是一个成功状态值组成的数组.<br>> 当入参中由任意一个promise失败,返回的Promise才会失败, 其值是第一个失败的promise的值.         |     |
| Promise.allSettled(iterable) | 此静态方法接收一个包含promises的可迭代对象作为入参并返回单个Promise. 当所有入参的promise状态settle(包含空的迭代对象)之后,返回的promise才会解决(fullfill),并带有一个描述每个promise结果的对象数组.                             |     |
| Promise.any()                | 接收一个[`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)可迭代对象，只要其中的一个 `promise` 成功，就返回那个已经成功的 `promise` 。 |     |
| Promise.race                 | 返回一个Promise,一旦迭代器中的某个promise成功或拒绝,返回的promise就会解决或拒绝.                                                                                                       |     |





##### Promise.all

##### 概述
all方法接受一个或多个promsie（以数组方式传递），返回一个新promise，该promise状态取决于传入的参数中的所有promsie的状态：
当所有promise都完成时，返回的promise完成，其最终值为由所有完成promsie的最终值组成的数组；
当某一promise被拒绝时，则返回的promise被拒绝，其拒绝原因为第一个被拒绝promise的拒绝原因；

##### 代码实现
```javascript
//20220724
Promise.prototype.all = function (promises) {
	return new Promise((resolve, reject) => {
		// 判断是否为可迭代对象
		if (!Array.isArray(promises)) {
			throw new TypeError('promises must be an iterable object')
		}

		let resultArr = []
		promises.forEach((promise, idx) => {
			promise.then(
				value => {
					resultArr[idx] = value
					idx === (promises.length - 1) && resolve(resultArr)
				 },
				error => { 
					reject(error)
				}
			)
		})
	})
}
```

##### 案例
```js
function p1(){
    var promise1 = new Promise(function(resolve,reject){
        console.log("p1的第一条输出语句");
        console.log("p1的第二条输出语句");
        resolve("p1完成");
    })
    return promise1;
}

function p2(){
    var promise2 = new Promise(function(resolve,reject){
        console.log("p2的第一条输出语句");
        setTimeout(()=>{console.log("p2的第二条输出语句");resolve("p2完成")},2000);

    })
    return promise2;
}

function p3(){
    var promise3 = new Promise(function(resolve,reject){
        console.log("p3的第一条输出语句");
        console.log("p3的第二条输出语句");
        resolve("p3完成")
    });
    return  promise3;
}

Promise.all([p1(),p2(),p3()]).then(function(data){
    console.log(data);
})


//输出结果
p1的第一条输出语句
p1的第二条输出语句
p2的第一条输出语句
p3的第一条输出语句
p3的第二条输出语句
p2的第二条输出语句
['p1完成','p2完成','p3完成']
```

##### Promise.allSettled

```javascript
function allSettled(promises) {
  if (promises.length === 0) return Promise.resolve([])
  
  const _promises = promises.map(
    item => item instanceof Promise ? item : Promise.resolve(item)
    )
  
  return new Promise((resolve, reject) => {
    const result = []
    let unSettledPromiseCount = _promises.length
    
    _promises.forEach((promise, index) => {
      promise.then((value) => {
        result[index] = {
          status: 'fulfilled',
          value
        }
        
        unSettledPromiseCount -= 1
        // resolve after all are settled
        if (unSettledPromiseCount === 0) {
          resolve(result)
        }
      }, (reason) => {
        result[index] = {
          status: 'rejected',
          reason
        }
        
        unSettledPromiseCount -= 1
        // resolve after all are settled
        if (unSettledPromiseCount === 0) {
          resolve(result)
        }
      })
    })
  })
}
```



##### Promise.any

```javascript
function any(promises) {
  // return a Promise, which resolves as soon as one promise resolves
  return new Promise((resolve, reject) => {
    let isFulfilled = false
    const errors = []
    let errorCount = 0
    promises.forEach((promise, index) => promise.then(
      (data) => {
      if (!isFulfilled) {
        resolve(data)
        isFulfilled = true
      }
    }, 
      (error) => {
      errors[index] = error
      errorCount += 1

      if (errorCount === promises.length) {
        reject(new AggregateError('none resolved', errors))
      }
    }))
  })
}

//https://github.com/azl397985856/fe-interview/issues/125
Promise.any = ps => new Promise((resolve, reject) => {
  ps.forEach((p, idx) => p.then(resolve)).catch(err => idx === (ps.length - 1) && reject(new Aggregate('none resolved')))
})
```



##### Promise.race

```javascript
Promise.race2 = function(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach(promise => Promise.resolve(promise).then(resolve, reject))
  })
}
```


#### Promise面试题
>https://github.com/Easay/issuesSets/issues/77


##### 如何改变Promise的状态

```js
//3种方法
1.resolve() 状态由pending变为fulfilled
2.reject()  状态由pending变为rejected
3.抛出异常   状态由pending变为rejected
```



##### Promise状态改变和指定回调函数(then)谁先谁后

```js
1.都有可能. 正常时先指定回调再改变状态
2.先改变状态再指定回调的方法//同步
 2.1 直接调用resolve()/reject()
 2.2 延迟更长时间才调用then()
    let p = new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve('ok')},1000);
    })
    setTimeout(()=>{p.then(value=>{console.log(value)})},3000)
 
3.先指定回调(先调用then方法)再改变状态//执行器种直接异步调用resolve()/reject()
   let p = new Promise((resolve,reject) => {
        setTimeout(function(){
            resolve('ok')
        },1000)
     })
     p.then(value => {
         console.log(value);
     })

4.什么时候得到数据?
4.1 如果先指定的回调函数,当状态发生改变时,调用回调函数,得到数据
4.2 如果先改变的状态,在指定回调函数时,回调函数就会调用,得到数据
```



##### Promise.then()返回新的Promise的结果状态由什么决定

```js
//then方法的返回结果是一个promise对象
(1)	简单表达: 由then()指定的回调函数执行的结果决定(执行结果就是函数的返回值)
(2)	详细表达:                                    
①	如果抛出异常, 新promise变为rejected, reason为抛出的异常/throw抛出的值
②	如果返回的是非promise的任意值, 新promise变为fulfilled(resolved) 值为返回值
③	如果返回的是另一个新promise, 此promise的结果就会成为新promise的结果,其值也会为then方法的返回值.
```



##### Promise异常穿透

```js
(1)	当使用promise的then链式调用时, 可以在最后指定失败的回调 
(2)	前面任何操作出了异常, 都会传到最后失败的回调中处理
```



##### Promise中断链条

```js
//返回一个pending状态的promise对象  return new Promise(()=>{})
//传一个错误的promise对象值,会被catch捕获,如果没有catch方法会报错
```


##### Promise.all如何将所有promise状态都保存下来
>https://github.com/Easay/issuesSets/issues/141

可以通过将所有primose状态都以resolved结束，即使内部请求挂掉被catch捕获到错误，但最后返回一个具体的值标识错误态即可。
```js
// ?
async function initAll() {
	const [
			loginComphasInited,
			activityConfig,
			styleData,
	] = await Promise.all([
			this.getLoginComp(),
			this.getActivityConfig(),
			this.getMarketingConfig(),
	])
	const { hasActivityConfig, hasEnded } = activityConfig
	if(!loginComphasInited || !hasActivityConfig) {
			this.handleError()
			return
	}
	if(hasEnded) {
			setPageSatus()
	}
}


async function activityConfig(){
	try{
		const { contracts, hasEnded } = await this.$apis.post()
		this.contracts = contracts || []
		return {
				hasActivityConfig: true,
				hasEnded,
		}
	}catch(err){
			return {
					hasActivityConfig: false,
			}
	}
}
```


##### 打印顺序
> https://juejin.cn/post/7055460626923012104
> https://juejin.cn/post/6945319439772434469


```js
setTimeout(() => {
    console.log("0")
  }, 0)
  
new Promise((resolve,reject)=>{
    console.log("1")
    resolve()
  }).then(()=>{        
    console.log("2")
    new Promise((resolve,reject)=>{
      console.log("3")
      resolve()
    }).then(()=>{      
      console.log("4")
    }).then(()=>{       
      console.log("5")
    })
  }).then(()=>{  
    console.log("6")
  })

new Promise((resolve,reject)=>{
    console.log("7")
    resolve()
  }).then(()=>{         
    console.log("8")
  })
```


##### 如果100个请求,使用Promise怎么控制并发  ??
>https://juejin.cn/post/7219961144584552504

题目
```js
// sendRequest(requestList:, limits, callback): void
sendRequest(
    [
        () => request('1'),
        () => request('2'),
        () => request('3'),
        () => request('4')
    ],
    3, // 并发数
    (res) => {
        console.log(res)
    }
)

// 其中 request 可以是：
function request(url, time = 1) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('请求结束：' + url);
            if (Math.random() > 0.5) {
                resolve('成功')
            } else {
                reject('错误')
            }
        }, time * 1e3)
    })
}
在格式化后的代码中，我们将每个参数放在新的一行，并使用适当的缩进来提高可读性。此外，我们还添加了注释来说明每个参数的作用。
```

概念
并发(Concurrency):同一时间段内多个任务都在进行,但不一定同时进行。每个任务会互相切换执行,由操作系统根据一定的调度算法决定哪个任务该执行。
并发控制: 意思是多个并发的任务，一旦有任务完成，就立刻开启下一个任务
切片控制: 将并发任务切片的分配出来，比如10个任务，切成2个片，每片有5个任务，当前一片的任务执行完毕，再开始下一个片的任务，这样明显效率没并发控制那么高了

并行(Parallelism):多个任务同时进行,真正意义上的同时进行。一般需要多核CPU才能实现并行。
```js
// 两个任务依次执行,互相切换
console.log('Start task 1');
setTimeout(() => console.log('Task 1 finished'), 1000);

console.log('Start task 2'); 
setTimeout(() => console.log('Task 2 finished'), 1000);
```
在多核CPU上,并行的例子可能输出:
```js
并发和并行是两个概念:

并发(Concurrency):同一时间段内多个任务都在进行,但不一定同时进行。每个任务会互相切换执行,由操作系统根据一定的调度算法决定哪个任务该执行。

并行(Parallelism):多个任务同时进行,真正意义上的同时进行。一般需要多核CPU才能实现并行。

例子:

并发(Concurrency)的例子:
```js
// 两个任务依次执行,互相切换
console.log('Start task 1');
setTimeout(() => console.log('Task 1 finished'), 1000);

console.log('Start task 2'); 
setTimeout(() => console.log('Task 2 finished'), 1000);
```

并行(Parallelism)的例子,需要在多核CPU上执行:
```js
// 两个任务同时执行
console.log('Start task 1');
setTimeout(() => console.log('Task 1 finished'), 1000);

console.log('Start task 2');
setTimeout(() => console.log('Task 2 finished'), 1000);
```

在单核CPU上,上面的两个例子的输出都是:

```
Start task 1 
Start task 2
Task 1 finished
Task 2 finished
```

但在多核CPU上,并行的例子可能输出:
```js
Start task 1 
Start task 2 
Task 1 finished
Task 2 finished 
```
或
```js
Start task 1
Task 1 finished
Start task 2
Task 2 finished
```

这是因为两个任务可以同时执行,不需要互相切换.

```text
首先执行能执行的并发任务，根据并发的概念，每个任务执行完毕后，捞起下一个要执行的任务。

将关键步骤拆分出合适的函数来组织代码

1.  循环去启动能执行的任务
    
2.  取出任务并且推到执行器执行
    
3.  执行器内更新当前的并发数，并且触发捞起任务
    
4.  捞起任务里面可以触发最终的回调函数和调起执行器继续执行任务
```

```js
function sendRequest(requestList, limits, callback) {
  const promises = requestList; // 取得请求list
  const concurrentNum = Math.min(limits, requestList.length); // 得到开始时，能执行的并发数
  let concurrentCount = 0; // 当前并发数 

  // 第一次先跑起可以并发的任务
  const runTaskNeeded = () => {
    let i = 0;
    while (i < concurrentNum) {
      i++;
      runTask();
    }
  };

  // 取出任务并且执行任务
  const runTask = () => {
    const task = promises.shift();
    task && runner(task);
  };

  // 执行器
  // 执行任务，同时更新当前并发数
  const runner = async (task) => {
    try {
      concurrentCount++;
      await task();
    } catch (error) {
    } finally {
      // 并发数--
      concurrentCount--;
      // 捞起下一个任务
      picker();
    }
  };

  // 捞起下一个任务
  const picker = () => {
    if (concurrentCount < limits && promises.length > 0) {
      // 任务队列里还有任务并且此时还有剩余并发数的时候 执行
      // 继续执行任务
      runTask();
      // 队列为空的时候，并且请求池清空了，就可以执行最后的回调函数了
    } else if (promises.length == 0 && concurrentCount == 0) {
      // 执行结束
      callback && callback();
    }
  };

  // 入口执行
  runTaskNeeded();
}
```

另一种实现
核心代码是判断是当你 【有任务执行完成】 ，再去判断是否有剩余还有任务可执行。可以先维护一个pool（代表当前执行的任务），利用await Promise.race这个pool，不就知道是否有任务执行完毕了吗？
```js
async function sendRequest(requestList, limits, callback) {
  // 维护一个promise队列
  const promises = [];
  // 当前的并发池,用Set结构方便删除
  const pool = new Set(); // set也是Iterable<any>[]类型，因此可以放入到race里

  // 开始并发执行所有的任务
  for (let request of requestList) {
    // 开始执行前，先await 判断 当前的并发任务是否超过限制
    if (pool.size >= limits) {
      // 这里因为没有try catch ，所以要捕获一下错误，不然影响下面微任务的执行
      await Promise.race(pool)
        .catch((err) => err);
    }

    const promise = request(); // 拿到promise
    // 删除请求结束后，从pool里面移除
    const cb = () => {
      pool.delete(promise);
    };
    // 注册下then的任务
    promise.then(cb, cb);
    pool.add(promise);
    promises.push(promise);
  }

  // 等待所有promise完成，调用回调函数
  Promise.allSettled(promises).then(callback, callback);
}
```



### async/await
#### 概述
* `async`用来描述`async`函数的.函数的返回值为promise对象.
* promise对象的结果和状态由`async`函数的返回值决定. 返回规则和then方法回调返回结果是一样的.
  * 如果返回结果是非promise类型的值,则返回值是成功的promise
  * 抛出一个错误, 函数的状态为失败状态rejected, 错误值为函数返回值.
  * 如果返回结果是promise类型的值, 则promise的状态和值决定了async这个promise的状态和返回
* await右侧的表达式一般为promise对象, 但也可以是其它的值
    * 如果表达式是promise对象, await返回的是promise成功的值.如果是失败的值,await会把promise的异常抛出, 我们可以使用try..catch捕获错误.
    * 如果表达式是其它值, 直接将此值作为await的返回值
* await...后面的代码相当于放到成功的回调中


#### async/await与promise的关系
- async/await是消灭异步回调的最终方法
- 简化promise对象的使用, 不用再使用then/catch来指定回调函数. 但和Promise并不互斥
- 执行async函数, 返回promise对象,  
  - await相当于promise的then
  - try...catch可捕获异常, 相当于promise的catch







### js的垃圾回收机制
>https://github.com/Easay/issuesSets/issues/91

#### 背景
JS引擎中对变量的存储主要有两种位置：栈内存和堆内存，栈内存存储基本数据类型以及引用数据的内存地址，堆内存储引用类型的数据。

#### 堆内存回收
V8的堆内存回收分为新生代内存和老生代内存，新生代内存是临时分配的内存，存在时间短，老生代内存存在时间长。

**新生代内存回收机制**
新生代内存容量小，64位系统下仅有32M。新生代内存分为From、To两部分，进行垃圾回收时，先扫描From，将非存活对象回收，将存活对象顺序复制到To中，之后调换From/To，等待下一次回收。
**老生代内存回收机制**
晋升：如果新生代的变量经过多次回收依然存在，那么就会被放入老生代内存中；
标记清除：老生代内存会先遍历所有对象并打上标记，然后对正在使用或被强引用的对象取消标记，回收被标记的对象；
整理内存碎片：把对象挪到内存的一端




#### 常见的GC算法
引用计数
使用引用计数器，当引用数字为0时立即回收。优点是：发现垃圾立即回收；缺点是：无法回收循环引用的对象。

标记清除
遍历所有对象，标记活动对象；再次遍历所有对象，清除没有标记的对象。将回收的空间加到空闲链表中，方便后面的程序申请使用。

标记整理
在标记和清除之间，添加了内存空间的整理。通过移动对象位置使得空间连续。







#### 性能优化
* 避免使用全局变量
* 减少判断层级
* 减少数据读取次数
* 减少循环体中的活动
* 事件绑定优化
* 避开闭包陷阱

### 内存泄露和内存溢出比较

- 内存溢出
  - 运行程序需要分配的内存超过了系统能给你分配的最大剩余内存
  - 抛出内存溢出的错误，程序中断运行
  - 演示代码

    ```
    const arr = []
    for (let index = 0; index < 100000000; index++) {
    	arr[index] = new Array(1000)
    }
    ```

- 内存泄漏
  - 理解: 当程序中的某个内存数据不再需要使用， 而由于某种原因， 没有被释放
  - 常见情况:
  - 意外的全局变量
```
	function fn () {a = new Array(100000)}
	fn()
```

  - 没有及时清除的定时器
    this.intervalId = setInterval(() => {}, 1000) // clearInterval(this.intervalId) ```
  - 没有及时解绑的监听
    this.bus.bus.on('xxx', this.handle) // this.bus.bus.off('xxx')```
  - 没有及时释放的闭包



## 手写代码

### 来源
* https://bigfrontend.dev/zh/problem

### 深拷贝

#### 是什么
深拷贝是将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象,且**修改新对象不会影响原对象**。

浅拷贝: 当我们把一个对象赋值给一个新的变量时，赋的其实是该对象的在==栈==中的地址，而不是堆中的数据。两个对象指向的是同一个存储空间，无论哪个对象发生改变，其实都是改变的存储空间的内容，因此，两个对象是联动的。

#### 浅拷贝
和深拷贝对应的浅拷贝,JS中的相关方法有:
* `[].slice(0)`
* `[].concat(arr)`
* 展开运算符
* Object.assign(obj1,obj2)

#### 深拷贝实现方式
* structuredClone
- JSON.parse(JSON.stringfy(obj)) 
  -  ===> 问题: 方法/函数会丢失(undefined、任意的函数以及 symbol 值，在序列化过程中会被忽略（出现在非数组对象的属性值中时）或者被转换成 null（出现在数组中时)
  -  ===> 问题2: 循环引用会出错(死循环)
- 递归遍历
  - 如果是基本类型与函数直接返回, 函数就不会丢失也不会拷贝
  - 如果是对象/数组创建拷贝对象/数组
  - 问题: 循环引用会出错的问题(死循环)
- 使用Map缓存拷贝对象
  - 如果发现一个对象已经产生拷贝对象, 直接返回这人拷贝对象
  - 使用Map存储 ==> key为源对象, value是拷贝产生的对象  (不能用对象来存储, 因为对象的key为字符串)
- 库. lodash

```js
/* 
1). 大众乞丐版
    问题1: 函数属性会丢失   原因: json字符串数据是不存在函数, 函数属性就会丢失
    问题2: 循环引用会出错   原因: 转换为json字符串是会产生死循环查找, 报错
利用JSON转换成json字符串, 再解析回来
*/
deepClone1 (target) {
  if (target!==null && typeof target==='object' ) {
    return JSON.parse(JSON.stringify(target))
  } else {
    return target
  }
},
```


```javascript
//作者：神三元
//链接：https://juejin.cn/post/6844903986479251464
const getType = obj => Object.prototype.toString.call(obj);

const isObject = (target) => (typeof target === 'object' || typeof target === 'function') && target !== null;

const canTraverse = {
  '[object Map]': true,
  '[object Set]': true,
  '[object Array]': true,
  '[object Object]': true,
  '[object Arguments]': true,
};
const mapTag = '[object Map]';
const setTag = '[object Set]';
const boolTag = '[object Boolean]';
const numberTag = '[object Number]';
const stringTag = '[object String]';
const symbolTag = '[object Symbol]';
const dateTag = '[object Date]';
const errorTag = '[object Error]';
const regexpTag = '[object RegExp]';
const funcTag = '[object Function]';

const handleRegExp = (target) => {
  const { source, flags } = target;
  return new target.constructor(source, flags);
}

const handleFunc = (func) => {
  // 箭头函数直接返回自身
  if(!func.prototype) return func;
  const bodyReg = /(?<={)(.|\n)+(?=})/m;
  const paramReg = /(?<=\().+(?=\)\s+{)/;
  const funcString = func.toString();
  // 分别匹配 函数参数 和 函数体
  const param = paramReg.exec(funcString);
  const body = bodyReg.exec(funcString);
  if(!body) return null;
  if (param) {
    const paramArr = param[0].split(',');
    return new Function(...paramArr, body[0]);
  } else {
    return new Function(body[0]);
  }
}

const handleNotTraverse = (target, tag) => {
  const Ctor = target.constructor;
  switch(tag) {
    case boolTag: 
      return new Object(Boolean.prototype.valueOf.call(target));
      // valueOf方法从对象中提取出其基本类型
      // new Object是为了创建了一个新的某某对象包装器
    case numberTag:
      return new Object(Number.prototype.valueOf.call(target));
    case stringTag:
      return new Object(String.prototype.valueOf.call(target));
    case symbolTag: //es6不推荐使用new,Symbol无法使用;所以使用valueOf
      return new Object(Symbol.prototype.valueOf.call(target));
    case errorTag: 
    case dateTag:
      // Date对象，valueOf方法返回的是日期的毫秒表示,使用Object包装会变成数值类
      // Error`对象表示运行时错误，并且它们通常包含消息、堆栈追踪和其他属性。valueOf方法并不适用于获取Error对象的所有信息
      return new Ctor(target);
    case regexpTag:
      return handleRegExp(target);
    case funcTag:
      return handleFunc(target);
    default:
      return new Ctor(target);
  }
}

const deepClone = (target, map = new WeakMap()) => {
  if(!isObject(target)) 
    return target;
  let type = getType(target);
  let cloneTarget;
  if(!canTraverse[type]) {
    // 处理不能遍历的对象
    return handleNotTraverse(target, type);
  }else {
    // 这波操作相当关键，可以保证对象的原型不丢失！
    let ctor = target.constructor;
    cloneTarget = new ctor();
  }

  if(map.get(target)) 
    return target;
  map.set(target, true);

  if(type === mapTag) {
    //处理Map
    target.forEach((item, key) => {
      cloneTarget.set(deepClone(key, map), deepClone(item, map));
    })
  }
  
  if(type === setTag) {
    //处理Set
    target.forEach(item => {
      cloneTarget.add(deepClone(item, map));
    })
  }

  // 处理数组和对象
  for (let prop in target) {
    if (target.hasOwnProperty(prop)) {
        cloneTarget[prop] = deepClone(target[prop], map);
    }
  }
  return cloneTarget;
}
```



#### 复述一下深拷贝的操作流程:

* 定义函数,  参数(target, map=new WeakMap())
* 判断是否是对象(判断条件), 非对象直接返回
* 获取具体的对象类型
* 判断是否是 5种 可遍历的对象 (可遍历对象5个: Array/Object/Set/Map/Arguments)
  * 如果是不可遍历的对象, 声明外部函数`handleNotCanTraverse(target, type)`来处理
    * 一类: 调用原型上的`valueOf`方法获取原始值, 再使用`new Object()`生成包装类对象 (string / number / boolean /symbol )
    * 一类: 默认调用原型上的构造函数,生成新的对象 (date error)
    * 一类: 调用独立的方法来处理( 正则表达式, 函数)
  * 如果是可遍历的对象
    * 首先是:  通过`target.constructor`属性获取其构造函数, 调用构造函数生成相应的实例对象
    * 如果存在对象引用 , 会提前在函数的参数中添加`map = new WeakMap()` (这个地方不熟悉的话可以省略不说)
      * 存在对象引用: 直接返回这个对象; 
      * 当前对象不存在引用, 将当前对象添加进map集合中 `map.set(target, true)`
    * 如果是map类型
      * `cloneTarget.set(deepClone(key, map), deepClone(item, map))`
    * 如果是set类型
      * `cloneTarget.add(deepClone(item , map))`
    * 如果是对象 / 数组 类型, 使用`for...in`循环来处理
      * `cloneTarget[key] = deepClone(target[key], map)`



### 数组相关

#### 判断数据类型是否为数组的方案7种
* [] instanceof Array
* [].\_\_proto\_\_ === Array.prototype
* [].constructor === Array
* Array.prototype.isPrototypeOf([])
* Object.getPrototypeOf([]) === Array.prototype
* Object.prototype.toString.call([]).slice(8, -1)
* Array.isArray([])


#### 数组扁平化 7种
* toString + split
* flat
* JSON.stringify + replace + split / JSON.parse
* 递归
  * for ...of
  * reduce
* 展开运算符 + some 
```javascript
//toString + split

arr.toString().split(',')

//flat
arr.flat(Infinity)

//JSON + replace+split
//JSON.stringify(arr.replace(/\[|\]/g, '')).split(',')
JSON.stringify(arr).replace(/\[|\]/g, '').split(',')``

//JSON + replace + JSON.parse
let res = JSON.stringify(arr).replace(/\[|\]/g, '')
let newArr = JSON.parse('[' + res + ']')

//递归+for/reduce
let res = []
function flat(arr) {
  for (let i=0; i<arr.length; i++) { 
    if (Array.isArray(arr)) {
    	flat(arr[i])
  	} else {
      res.push(arr[i])
    }
  }
}
//
function flat(arr) {
  return arr.reudce((pre, crt) => {
    return pre.concat(Array.isArray(crt) ? flat(crt) : crt
  }, [])
}
                    

//展开运算符
while(arr.some(Array.isArray)) {
    arr = [].concat(...arr)  // arr = [].concat(arr) 加不加展开运算符都一样的 多循环一次
  }
```



#### 实现flat
```javascript
//递归
// arguments.callee指向argumetns对象所在函数的指针, 实现函数名与逻辑的解耦
function flat(arr) {
  let res = []
  arr.forEach(item => {
    if (Array.isArray(item)) {
      res = res.concat(arguments.callee(item)) 
      // res.push(...arguments.callee(item))
    } else {
      res.push(item)
    }
  })
  
  return res
}

//reduce
const flat = arr => {
  return arr.reduce((acc, crt) => {}, [
    return acc.concat(Array.isArray(crt) ? flat(crt) : crt)
  ])
}

//其他方法
```







#### 数组去重 7 种
* for + for  + splice
* for + for+ 新数组
* for + indexOf / includes
* reduce + indexOf/includes
* filter + indexOf / sort()
  * indexOf存在的问题
  * sort排序的问题  sort()排序有漏洞, 并不适用于特殊类型的排序. !!!!???
* sort快慢指针
* 键值对 
	* object键值对+filter(存在的问题: 不能去重正则表达式)
	* map键值对+filter
* new Set()
```javascript
let arr = [1,2,3,1,1,4,3,2,5,6,7];
// for + for 

for (let i=0; i<arr.length; i++) {
  for (let j=i+1; j<arr.length; j++) {
	  if (arr[j] === arr[i]) {
		  arr.splice(j, 1)
	    j--
	  }
  }
}

//for + 新数组

let newArr = []
let j;

for (let i=0; i<arr.length; i++) {
  for (j=0; j<newArr.length; j++) {
    if (arr[i] === newArr[j]) {
      break
    }
  }
  if (j === newArr.length) {
    newArr.push(arr[i])
  }
}

let newArr = [];
for (let i = 0, len = arr.length; i < len; i++) {
	let isDuplicate = false;
	for (let j = 0, len2 = newArr.length; j < len2; j++) {
		if (arr[i] === newArr[j]) {
			isDuplicate = true;
			break;
		}
	}
	if (!isDuplicate) {
		newArr.push(arr[i]);
	}
}
```



```javascript
//for + indexOf / includes

let res = []
for (let i=0; i<arr.length; i++) {
  if (res.indexOf(arr[i] === -1)) { // !res.includes(arr[i])
    res.push(arr[i])
  }
}
```



```javascript
// reduce + indexOf / includes

arr.reduce((pre, crt) => pre.includes(crt) ? pre : pre.concat(crt), [])
arr.reduce((pre, crt) => pre.indexOf(crt) === -1 ? pre.concat(crt) : pre, [])
```



```javascript
//filter + indexOf

arr.filter((item, idx, arr) => arr.indexOf(item) == idx)
//存在的问题
1.arr.indexOf(NaN)的结果是-1,所以会忽略NaN这个值.
2.对象不去重

arr.concat().sort().filter((item, idx, arr) => !idx || item !== arr[idx - 1])
```



```javascript
//sort快慢指针

//https://juejin.cn/post/6844904202162929671

function unique(arr) {
  arr.sort((a, b) => a - b);
  let left = 0,
      right = 1;
  
  while(right < arr.length) {
    if (arr[left] === arr[right]) {
      right++;
    } else {
      arr[left + 1] = arr[right];
      left++;
      right++;
    }
  }
  return arr.slice(0, left+1);
}

//https://juejin.cn/post/7033275515880341512
function unique2(arr) {
  arr.sort((a, b) => a - b);
  let slow = 1,
      fast = 1;
  
  while(fast < arr.length) {
    if (arr[fast - 1] !== arr[fast]) {
      arr[slow++] = arr[fast];
    }
    ++fast;
  }
  arr.length = slow;
  return arr;
}
```



```javascript
//object键值对

// 考虑到 `JSON.stringify` 任何一个正则表达式的结果都是 `{}`，所以这个方法并不适用于处理正则表达式去重。

let obj = {}
arr.filter( v => obj.hasOwnProerpty(v) ? false : (obj[typeof v + JSON.stringify(v)] = true))
```



```javascript
//map键值对

let map = new Map()
arr.fitler((item, idx, arr) => !map.has(item) && map.set(item, true))
```



```javascript
// set
let res = (arr) => [...new Set(arr)]
```

#### 数组去重存在的问题

重点关注下 对象 和NaN 的去重

| 方法                                                         | 结果                                                         | 说明                                    |
| ------------------------------------------------------------ | ------------------------------------------------------------ | --------------------------------------- |
| for循环(双for+新数组)                                        | [1, "1", null, undefined, String, String, /a/, /a/, NaN, NaN] | 对象和 NaN 不去重                       |
| indexOf(作者用的是新数组+for循环+indexOf方法)                | [1, "1", null, undefined, String, String, /a/, /a/, NaN, NaN] | 对象和 NaN 不去重                       |
| sort<br />结论是数字1不去重,没有勘误.不知道是哪个数字1,是包装类的吗? | [/a/, /a/, "1", 1, String, 1, String, NaN, NaN, null, undefined] | 对象和 NaN 不去重 <br />数字 1 也不去重 |
| filter+indexOf                                               | [1, "1", null, undefined, String, String, /a/, /a/]          | 对象不去重 NaN 会被忽略掉               |
| filter+sort                                                  | [/a/, /a/, "1", 1, String, 1, String, NaN, NaN, null, undefined] | 对象和 NaN 不去重 数字 1 不去重         |
| 优化后的键值对方法                                           | [1, "1", null, undefined, String, /a/, NaN]                  | 全部去重                                |
| Set                                                          | [1, "1", null, undefined, String, String, /a/, /a/, NaN]     | 对象不去重 NaN 去重                     |






#### 数组翻转

1. 使用原型中的reverse方法

   ```js
   let array = [1, 2, 3, 4, 5]
   array.reverse() 
   ```
   
2. 循环
* 临时变量(索引之和等于长度减1)
* unshift
   ```js
   for(var i = 0; i < arr.length; i++){
       var temp = arr[i];
       arr[i] = arr[arr.length - 1 - i]
       arr[arr.length - 1 - i] = temp;
   }
   
   ```

   


#### 排序算法
> https://github.com/Easay/issuesSets/issues/44

##### 简单排序: 冒泡 / 选择 / 插入

```js
/* 
冒泡排序的方法
*/
function bubbleSort (array) {
  // 1.获取数组的长度
  var length = array.length;

  // 2.反向循环, 因此次数越来越少
  for (var i = length - 1; i >= 0; i--) {
    // 3.根据i的次数, 比较循环到i位置
    for (var j = 0; j < i; j++) {
      // 4.如果j位置比j+1位置的数据大, 那么就交换
      if (array[j] > array[j + 1]) {
        // 交换
        // const temp = array[j+1]
        // array[j+1] = array[j]
        // array[j] = temp
        [array[j + 1], array[j]] = [array[j], array[j + 1]];
      }
    }
  }

  return arr;
}

/* 
选择排序的方法
*/
function selectSort (array) {
  // 1.获取数组的长度
  var length = array.length

  // 2.外层循环: 从0位置开始取出数据, 直到length-2位置
  for (var i = 0; i < length - 1; i++) {
    // 3.内层循环: 从i+1位置开始, 和后面的内容比较
    var min = i
    for (var j = min + 1; j < length; j++) {
      // 4.如果i位置的数据大于j位置的数据, 记录最小的位置
      if (array[min] > array[j]) {
        min = j
      }
    }
    if (min !== i) {
      // 交换
      [array[min], array[i]] = [array[i], array[min]];
    }
  }

  return arr;
}

/* 
插入排序的方法
*/
// 插入排序实现
function insertionSort(arr) {
    // 对传入数组的拷贝进行排序，避免修改原数组
    const array = [...arr];
    
    // 从第二个元素开始遍历
    for (let i = 1; i < array.length; i++) {
        // 保存当前要插入的元素
        const current = array[i];
        let j = i - 1;
        
        // 将所有大于 current 的元素向右移动一位
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }
        
        // 在正确的位置插入当前元素
        array[j + 1] = current;
    }
    
    return array;
}
```



##### 快速排序

```js
function quickSort(arr) {
  // 递归结束的条件
  if(arr.length < 2){
    return arr
  }
  // 获取中间值
  let flag = Math.floor(arr.length / 2);
  let flagValue = arr.splice(flag, 1)[0];
  
  let leftArr = [];
  let rightArr = [];
  for (var i = 0; i < arr.length; i++) {
    var arrItem = arr[i];
    
    if(arrItem > flagValue){
      rightArr.push(arrItem)
    }else {
      leftArr.push(arrItem)
    }
  }
  
  leftArr = quickSort(leftArr);
  rightArr = quickSort(rightArr);
  return [...leftArr, flagValue, ...rightArr]
}
```





### 函数相关

#### 函数的call() / apply() / bind()

```javascript

//call
Function.prototype.call2 = function(...items) {
  let obj = items.shift() || globalThis
  let tempFn = Symbol()
  obj[tempFn] = this
  
  let res = obj[tempFn](...items)
  delete obj[tempFn]
  
  return res
}

// 不建议使用arguments
Function.prototype.myCall = function() {
  let obj = [].shift.call(arguments) || globalThis;
  obj.tempFn = this
  
  let res = obj.tempFn(...[...arguments]);
  delete obj.tempFn;
  return res;
}



//apply
Function.prototype.apply2 = function(...items) {
  let obj = items.shift() || globalThis
  obj[tempFn] = this
  let res = obj[tempFn](items)
  delete obj[tempFn]
  
  return res
}

//bind

//1 version
Function.prototype.bind = function(cxt) {
  let fn = this
  let argsOut = [].slice.call(arguments)
  return function() {
    let argsInner = [].slice.call(arguments)
    fn.apply(cxt, argsOut.concat(argsInner))
  }
}

//

//2 version  避免实例通过原型链更改函数原型上的属性,使用空函数中转 + 可以使用new调用
Function.prototype.bind = function () {
	let fn = this
  let argsOut = [].slice.call(arguments, 1)
  let fNOP = function() {}
  let fbound = function () {
    let argsInner = [].slice.call(arguments)
    return fn.apply(this instanceof fNOP ? this : crt, argsOut.concat(argusInner))
  }
  
  fNOP.prototype = this.prototype
  fbound.prototype = new fNOP()
  return fbound
}
```



```js
/* 
自定义函数对象的call方法
*/
function call (fn, obj, ...args) {
  // 如果传入的是null/undefined, this指定为window
  if (obj===null || obj===undefined) {
    obj = obj || window
  }
  // 给obj添加一个方法: 属性名任意, 属性值必须当前调用call的函数对象
  obj.tempFn = fn
  // 通过obj调用这个方法
  const result = obj.tempFn(...args)
  // 删除新添加的方法
  delete obj.tempFn
  // 返回函数调用的结果
  return result
}

/* 
自定义函数对象的apply方法
*/
function apply (fn, obj, args) {
  // 如果传入的是null/undefined, this指定为window
  if (obj===null || obj===undefined) {
    obj = obj || window
  }
  // 给obj添加一个方法: 属性名任意, 属性值必须当前调用call的函数对象
  obj.tempFn = fn
  // 通过obj调用这个方法
  const result = obj.tempFn(...args)
  // 删除新添加的方法
  delete obj.tempFn
  // 返回函数调用的结果
  return result
}

/* 
  自定义函数对象的bind方法
  重要技术:
    高阶函数
    闭包
    call()
    三点运算符
*/
function bind (fn, obj, ...args) {
  if (obj===null || obj===undefined) {
    obj = obj || window
  }
  
  return function (...args2) {
    call(fn, obj, ...args, ...args2)
  }
}
```



### 字符串处理

```js
/* 
1. 字符串倒序: reverseString(str)  生成一个倒序的字符串
2. 字符串是否是回文: palindrome(str) 如果给定的字符串是回文，则返回 true ；否则返回 false
3. 截取字符串: truncate(str, num) 如果字符串的长度超过了num, 截取前面num长度部分, 并以...结束
*/

/* 
1. 字符串倒序: reverseString(str)  生成一个倒序的字符串
*/
function reverseString(str) {
  // return str.split('').reverse().join('')
  // return [...str].reverse().join('')
  return Array.from(str).reverse().join('')
}

/* 
2. 字符串是否是回文: palindrome(str) 如果给定的字符串是回文，则返回 true ；否则返回 false
*/
function palindrome(str) {
  return str === reverseString(str)
}

/* 
3. 截取字符串: truncate(str, num) 如果字符串的长度超过了num, 截取前面num长度部分, 并以...结束
*/
function truncate(str, num) {
  return str.length > num ? str.slice(0, num) + '...' : str
}
```



### instanceof内部原理和实现

instanceof运算符判断一个对象是否为另一个对象的实例

```javascript

function isntanceof2(case, Ctor) {
    //基本数据类型返回false
  //兼容一下函数对象
  if (typeof(Case) !== 'object' && typeof(Ctor) !== 'function' || Case === 'null') {
    return false;
  }
  
  let caseProto = Object.getPrototypeOf(case)
  while(true) {
    if (caseProto == null) return false
    //找到相同的原型
    if (caseProto === Ctor.prototype) return true
    caseProto = Object.getPrototypeOf(caseProto)
  }
}


```


### 函数柯里化
> https://github.com/Easay/issuesSets/issues/78


函数柯里化是一种将接收多个参数的函数转换为接收一个参数并返回另一个函数的技术。更加灵活地控制函数的功能和输入。

#### 案例
考虑一个接收两个参数的函数，它将它们相乘并返回结果：
```js
function multiply(a, b) {
  return a * b;
}

multiply(2, 3);  // 6
```

使用柯里化转换函数
```js
function multiply(a) {
  return function(b) {
    return a * b;
  };
}

multiply(2)(3);  // 6
```



#### 实现代码
```js
function curryIt(fn){
    var args = [];
    return function curried() {
        // 类数组转数组方式1：
        var arg = [].slice.call(arguments);
        // 方式2：
        //var arg = Array.from(arguments);
        args = args.concat(arg);
        if(args.length < fn.length){
            // return arguments.callee;
            return function () {
	            return curried.apply(this, args.concat(arguments))
            }
        }else{
            return fn.apply(null,args);
        }
    }   
}
```


#### 使用setTimeout实现setInterval
>https://github.com/Easay/issuesSets/issues/95
```js
function mySetInterval(fn, delay) {
	function interval() {
		setTimeout(interval, delay)
		fn()
	}
	setTimeout(interval, delay)
}

mySetInterval(() => console.log(1), 1000)


```
//实现clearInterval
```js
let id = 0
let timeMap = {}
const mySetInterval = (cb, time) => {
	let timeId = id;
	id++
	const fn = () => {
		cb()
		timeMap[timeId] = setTimeout(() => {fn()}, time)
	}
	timeMap[timeId] = setTimeout(fn, time)
	return timeId
}

function clearInterval(id) {
	clearTimeout(timeMap[id])
	delte timeMap[id]
}

let newId = mySetInterval(count, 1000)
setTimeout(() => clearInterval(newId), 3000)

function count() {
	console.log('a')
}
```


#### 实现一个准确的倒计时 ?
>https://github.com/Easay/issuesSets/issues/105


#### 实现curry() -(BEF.dev)
```js

function curry() {
	let 
}
```








## DOM/BOM
### 事件(了解)

**事件是文档或者浏览器窗口中发生的，特定的交互瞬间。**

事件是用户或浏览器自身执行的某种动作，如click,load和mouseover都是事件的名字。

事件是javaScript和DOM之间交互的桥梁。

### 事件流

#### 概述

事件流描述的是从页面中接收事件的顺序

#### 两种事件流模型

事件传播的顺序对应浏览器的两种事件流模型：捕获型事件流和冒泡型事件流

**冒泡型事件流**：事件的传播是从**最特定**的**事件目标**到最不特定的**事件目标**。即从DOM树的叶子到根。**【推荐】**

**捕获型事件流**：事件的传播是从**最不特定**的**事件目标**到最特定的**事件目标**。即从DOM树的根到叶子。



#### DOM事件流

DOM标准采用捕获+冒泡。两种事件流都会触发DOM的所有对象，从document对象开始，也在document对象结束

DOM标准规定事件流包括三个阶段：事件捕获阶段、处理目标阶段和事件冒泡阶段。
- 事件捕获阶段：**实际目标**（\<div>）在捕获阶段**不会接收事件**。也就是在捕获阶段，事件从document到\<html>再到\<body>就停止了。上图中为1~3.
- 处理目标阶段：事件在\<div>上发生并处理。**但是事件处理会被看成是冒泡阶段的一部分**。
- 冒泡阶段：事件又传播回文档。

事件捕获阶段,实际目标不会接收事件?
> 根据早期的DOM事件模型，实际目标元素在捕获阶段默认是不会处理事件的。这意味着，虽然事件会传递到目标元素，但是如果你没有明确地设置事件监听器在捕获阶段触发（在JavaScript中通过`addEventListener`的第三个参数设置为`true`），那么在捕获阶段，目标元素不会对事件做出响应。
> 事件进入目标阶段，在这个阶段，无论是否设置捕获，目标元素的事件监听器都会被触发。然后，事件开始冒泡阶段，它会沿DOM树向上传播，直到根节点。在冒泡阶段，如果父元素上有事件监听器设置为在冒泡阶段触发（通过`addEventListener`的第三个参数设置为`false`或不设置这个参数，因为默认值是`false`），那么这些监听器会被调用。



### 事件绑定方式
- 嵌入dom
```js
<button onclick="func()">按钮</button>
```

- 直接绑定
```js
btn.onclick = function(){}
```

- 事件监听
```js
btn.addEventListener('click',function(){})
```


### 事件冒泡
事件在传递给目标元素后, 会由内向外传递给外层的元素处理

### 事件委托
* 事件委托利用了事件冒泡，不直接给多个子元素绑定多个事件监听, 而是给它们共同的父元素绑定一个监听
* 当操作任意子元素时, 事件会冒泡到父元素上处理
* 使用事件委托可以节省内存。
```javascript
<ul>
  <li>苹果</li>
  <li>香蕉</li>
  <li>凤梨</li>
</ul>

// good
document.querySelector('ul').onclick = (event) => {
  let target = event.target
  if (target.nodeName === 'LI') {
    console.log(target.innerHTML)
  }
}

// bad
document.querySelectorAll('li').forEach((e) => {
  e.onclick = function() {
    console.log(this.innerHTML)
  }
})
```



### event.target/event.currentTarget
Event.target：指向触发事件的元素；
Event.currentTarget：指向绑定事件的元素。即添加事件监听器的元素。在事件传播过程中，它的值可能会发生改变。

当事件在DOM中传播时，event.target始终指向最初触发事件的元素，而event.currentTarget则随着事件的捕获或冒泡阶段而变化，指向当前处理事件的元素。

例如，如果你在一个ul元素上绑定了一个点击事件，并且点击了其中一个li子元素，那么event.target就是这个li元素，而event.currentTarget就是这个ul元素。

你可以利用event.target来实现事件委托，即通过在父元素上绑定一个事件处理函数来处理子元素的相同类型的事件。







### 事件冒泡与事件委托

#### 1) 事件冒泡的流程
- 基于DOM树形结构
- 事件在目标元素上处理后, 会由内向外(上)逐层传递
- 应用场景: 事件代理/委托/委派

#### 2) 事件委托
- 减少内存占用(事件监听回调从n变为1)
- 动态添加的内部元素也能响应
- 不直接给多个子元素绑定多个事件监听, 而是给它们共同的父元素绑定一个监听
- 当操作任意子元素时, 事件会冒泡到父元素上处理
- 在事件回调中通过event.target得到发生事件的目标元素, 并进行相关处理


### 封装一个绑定事件监听的函数

> [封装事件监听函数_巴拉巴拉小魔仙_的博客-CSDN博客](https://blog.csdn.net/m0_66637749/article/details/122708615)

```js
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body>
    <div>
      <button id="btn">按钮</button>
      <ul id="divBox">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </div>
    <script>
      function bindEvent(ele, type, selector, fn) {
        if (fn == null) {
          fn = selector
          selector = null
        }

        ele.addEventListener(type, event => {
          const target = event.target
          if (selector) {
            // 代理绑定
            if (target.matches(selector)) {
              fn.call(target, event)
            }
          } else {
            // 普通绑定
            fn.call(ele, event)
          }
        })
      }


      // 普通绑定
      const btn = document.getElementById('btn')
      bindEvent(btn, 'click', function(e) {
        e.preventDefault();
        console.log(this)
        alert(this.innerText)
      })

      // 代理绑定
      const div = document.getElementById('divBox')
      bindEvent(div, 'click', 'li', function(e) {
        e.preventDefault()
        alert(this.innerText)
      })
    </script>
  </body>
</html>

```


### DOM查找/添加/删除节点
#### 获取节点
* id
* class
* name
* tagName
* 查询

#### 获取/设置元素属性值
* element.getAttribute(attributeName)
* element.setAttribute(attributeName, attributeValue)


#### 创建节点
* document.createElement('h3')
* document.createTextNode(String) //创建文本节点
* document.createAttribute('class') //创建一个属性节点

#### 增添/替换/删除节点
* element.appendChild(Node) //再ele元素内部最后添加一个节点,参数是节点类型
* element.insertBefore(newNode, existingNode) //在ele内部中的existingNode前面插入newNode
* element.replaceChild() //替换子元素
* element.removeChild() //删除子元素

#### 删除节点
* element.removeChild(Node)



### 前台数据存储

#### 存储方式
- cookie
- sessionStorage
- localStorage



#### localStoarge与sessionStorage比较
- 相同点:
  - 浏览器不能禁用, 请求时不会自动携带
  - 纯浏览器端存储, 
  - 只能保存文本, 如果是对象或数组, 需要转换为JSON
  - API相同:
    - setItem(key, value)
    - getItem(key, value)
    - removeitem(key, value)
- 不同点(关闭浏览器是否会被删除):
  - localStorage保存在本地文件中, 除非编码或手动删除, 否则一直存在
  - sessonStorage数据保存在当前会话内存中, 关闭浏览器则清除

#### sessionStorage同源跨窗口可以共享吗?
只有在本页面中以新页签或窗口打开的同源页面会‘临时复制’之前页面的sessionStorage。
a标签也是同样的效果



#### cookie与localStorage和sessionStorage比较
都是浏览器提供的用于存储数据的技术
* **存储大小不同**：cookie一般只能存储4KB左右的数据，而localStorage和sessionStorage可以存储更大的数据，一般为5MB或更多。
* **数据有效期不同**：cookie可以设置过期时间，如果没有设置，则在浏览器关闭时失效；localStorage始终有效，除非用户手动清除；sessionStorage只在当前浏览器窗口关闭前有效。
* **作用域不同**：cookie在所有同源窗口中都是共享的，并且会随着每次HTTP请求发送到服务器；localStorage也在所有同源窗口中共享，但不会发送到服务器；sessionStorage一般不在不同的浏览器窗口中共享。
* **数据安全性不同**：cookie相对较容易被篡改或窃取，因此不适合存储敏感信息；localStorage和sessionStorage相对较安全，但仍然可能受到XSS攻击

#### cookie与session比较
cookie和session都是用来记录客户状态的机制，但它们有以下几个区别：
* 存储位置不同：cookie数据存放在客户端浏览器中，session数据存放在服务器上。
* 安全性不同：cookie相对较容易被篡改或窃取，因此不适合存储敏感信息；session相对较安全，因为它只能通过特定的sessionID来访问。
* 服务器性能不同：session会占用服务器的内存资源，如果访问量过大，可能会影响服务器的性能；cookie则不会给服务器增加负担。
* 存储容量和有效期不同：单个cookie保存的数据一般不能超过4KB，而且一个站点最多只能保存20个cookie；session则没有明确的上限，但出于对服务器性能的考虑，应该尽量精简和及时删除无用的session。
* 有效期: cookie可以设置过期时间，如果没有设置，则在浏览器关闭时失效；session也有一定的有效期，一般为30分钟，如果超过这个时间没有活动，则会自动失效.



# TypeScript面试题
> [TypeScript高频面试题及解析本文整理了一些TypeScript 的高频面试题，并附带详细答案及解析代码，涉及包括 - 掘金](https://juejin.cn/post/7321542773076082699)



## 常规问题
### 类型声明和类型推断的区别
* 类型声明是显式地为变量或函数指定类型
* 类型推断是TypeScript根据赋值语句右侧的值自动推断变量的类型
```ts
// 类型声明
let x: number;
x = 10;
// 类型推断
let y = 20; // TypeScript会自动推断y的类型为number

```

### 接口是什么, 作用,使用场景?和类型别名的区别
#### 是什么
> 接口是用于描述对象的形状的结构化类型。它定义了对象应该包含哪些属性和方法。

#### 区别
* 接口定义了一个契约，描述了对象的形状（属性和方法），以便在多个地方共享。它可以被类、对象和函数实现。
* 类型别名给一个类型起了一个新名字，便于在多处使用。它可以用于原始值、联合类型、交叉类型等。与接口不同，**类型别名可以用于原始类型、联合类型、交叉类型等，而且还可以为任意类型指定名字**


### 泛型是什么, 如何创建泛型函数和泛型类, 实际用途
#### 是什么


### 枚举是什么? 作用及案例.
#### 是什么
> 枚举是一种对数字值集合进行命名的方式。它们可以增加代码的可读性，并提供一种便捷的方式来使用一组有意义的常量。

```ts
enum Color {
 red,
 green,
 blue
}

let selectedColor: Color = Color.red
```

#### 枚举和常量枚举区别
* 枚举可以包含计算得出的值，而常量枚举则在编译阶段被删除，并且不能包含计算得出的值，它只能包含常量成员。
* 常量枚举在编译后会被删除，而普通枚举会生成真实的对象。
```ts
const enum Direction {
    Up,
    Down,
    Left,
    Right
}

function move(direction: Direction) {
    switch (direction) {
        case Direction.Up: //编译之后, 只会保留值
            console.log('向上移动');
            break;
        case Direction.Down:
            console.log('向下移动');
            break;
        case Direction.Left:
            console.log('向左移动');
            break;
        case Direction.Right:
            console.log('向右移动');
            break;
    }
}

move(Direction.Up); 

```

### 如何处理可空类型（nullable types）和undefined类型，如何正确处理这些类型以避免潜在错误


在TypeScript中，可空类型是指一个变量可以存储特定类型的值，也可以存储`null`或`undefined`。（通过使用可空类型，开发者可以明确表达一个变量可能包含特定类型的值，也可能不包含值（即为`null`或`undefined`）

为了声明一个可空类型，可以使用联合类型（Union Types），例如 `number | null` 或 `string | undefined`。 例如：


### 联合类型和交叉类型, 类型断言

### 命名空间和模块

`模块`提供了一种组织代码的方式，使得我们可以轻松地在多个文件中共享代码，

`命名空间`则提供了一种在全局范围内组织代码的方式，防止命名冲突
模块示例:


```ts
//模块
// greeter.ts
export function sayHello(name: string) {
  return `Hello, ${name}!`;
}
// app.ts
import { sayHello } from './greeter';
console.log(sayHello('John'));



// 命名空间
// greeter.ts
namespace Greetings {
  export function sayHello(name: string) {
    return `Hello, ${name}!`;
  }
}
// app.ts
<reference path="greeter.ts" />
console.log(Greetings.sayHello('John'));


```






# TS面试题

## TS内置数据类型又那些?
```js
boolean（布尔类型）

number（数字类型）

string（字符串类型）

null 和 undefined 类型

array（数组类型）object 对象类型

tuple（元组类型）：允许表示一个已知元素数量和类型的数组，各元素的类型不必相同

enum（枚举类型）：`enum`类型是对JavaScript标准数据类型的一个补充，使用枚举类型可以为一组数值赋予友好的名字

any（任意类型）

never 类型

void 类型
```


## any类型介绍

### 作用
**作用:**
为编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来**自用户输入或第三方代码库**（不确定用户输入值的类型，第三方代码库是如何工作的）。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。

**any的问题**

1. 类型污染：any`类型的对象会导致后续的属性类型都会变成`any
2. 使用不存在的属性或方法而不报错

### any和泛型的区别？

泛型有类型推论，编译器会根据传入的参数自动地帮助我们确定T的类型

any则是不检验

### any和unknown有什么区别？
unknown 和 any 的主要区别是 unknown 类型会更加严格：在对 unknown 类型的值执行大多数操作之前，我们必须进行某种形式的检查。而在对 any 类型的值执行操作之前，我们不必进行任何检查。


### any和泛型的比较
泛型有类型推论，编译器会根据传入的参数自动地帮助我们确定T的类型

any则是不检验





### TypeScript 中 any、never、unknown、null & undefined 和 void 有什么区别？

- `any`: 动态的变量类型（失去了类型检查的作用）。
- `never`: 永不存在的值的类型。例如：never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型。
- `unknown`: 任何类型的值都可以赋给 unknown 类型，但是 unknown 类型的值只能赋给 unknown 本身和 any 类型。
- `null & undefined`: 默认情况下 null 和 undefined 是所有类型的子类型。 就是说你可以把 null 和 undefined 赋值给 number 类型的变量。当你指定了 --strictNullChecks 标记，null 和 undefined 只能赋值给 void 和它们各自。
- `void`: 没有任何类型。例如：一个函数如果没有返回值，那么返回值可以定义为void。






## HTTP

### HTTP报文结构
> https://github.com/Easay/issuesSets/issues/64


1.**起始行(start line)**
* 请求的起始行：请求方法、请求 `Path` 和`HTTP` 版本号 
* 响应的起始行：`HTTP` 版本号、响应状态码以及状态文本描述

2.**HTTP头(HTTP Headers)**: 指明请求或描述消息正文

3.**空行(empty):** 指示所有关于请求的元数据已经发送完毕

4.**可选的正文(body)**: 包含请求或响应的相关数据, 正文大小由起始行HTTP头指定

起始行和HTTP消息中的HTTP头统称为请求头 而其有效负载被称为消息正文.

<img src="https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/HTTPMsgStructure2.6ek1f6fu5hw0.webp" alt="HTTPMsgStructure2" style="zoom: 200%;" />


### 输入网址后发生了什么

> [what-happens-when-zh_CN/README.rst at master · skyline75489/what-happens-when-zh_CN (github.com)](https://github.com/skyline75489/what-happens-when-zh_CN/blob/master/README.rst?utm_medium=social&utm_source=wechat_session&from=timeline&isappinstalled=0)

* 合成URL
* DNS域名解析
  * 浏览器缓存--->本地hosts文件--->本地DNS解析器缓存--->本地DNS服务器--->根域名服务器-->顶级域名服务器(com, cn,...)-->权威域名服务器(顶级域名托管商)

* 建立TCP连接
  * 首先，判断是不是https的，如果是: 服务端和客户端的信息传输都会加密
  * 进行三次握手,建立TCP连接
    * 第一次握手：建立连接。客户端发送连接请求报文段
    * 第二次握手：服务器收到报文段。同时，自己还要发送请求信息给客户端
    * 第三次握手：客户端收到服务器的报文段。然后将向服务器发送报文段，客户端服务器更新状态,完成TCP三次握手。

* 客户端发送HTTP请求,服务器处理请求,返回响应结果

* 一方完成数据发送任务.关闭TCP连接,四次挥手
	* 客户端告诉服务器，我不需要再发送数据了。
	* 服务器告诉客户端，我知道你不需要再发送数据了。
	* 服务器告诉客户端，我也不需要再发送数据了。
	* 客户端告诉服务器，我知道你不需要再发送数据了。

* 浏览器渲染
  1.HTML 被 HTML 解析器解析成 DOM 树；
  2.CSS  被 CSS 解析器解析成 CSSOM 树；
  3.结合 DOM 树和 CSSOM 树，生成一棵渲染树(Render Tree,这一过程称为 Attachment)
  4.生成布局(flow)，浏览器在屏幕上“画”出渲染树中的所有节点；
  5.将布局绘制(paint)在屏幕上，显示出整个页面。

![[typeUrlProcess.png]]





### 浏览器如何渲染页面的？
> https://juejin.cn/post/7299696650896080922  
1. **解析 HTML 和构建 DOM 树**：
- 浏览器开始解析 HTML 数据，并构建文档对象模型（DOM）树，表示网页的结构和内容。DOM 树是一个树状结构，其中每个 HTML 元素都被表示为一个节点，包括文本、标签、属性等。

2. **解析 CSS 和构建 CSSOM 树**：
- 同时，浏览器也开始解析 CSS 数据，并构建 CSS 对象模型（CSSOM）树，表示网页的样式和布局信息。CSSOM 树与 DOM 树一一对应，每个元素都有对应的样式信息。

3. **合并 DOM 和 CSSOM，构建渲染树**：
- 浏览器将 DOM 树和 CSSOM 树合并，构建渲染树（Render Tree）。渲染树包含了需要渲染的页面内容，但不包括那些被 CSS 隐藏的元素。

4. **布局计算**：
- 浏览器开始计算每个元素在页面中的精确位置和尺寸，这个过程称为布局计算。浏览器确定元素如何放置和相互布局。

5. **绘制页面**：
- 浏览器使用计算出的位置和尺寸信息来绘制页面。这包括将页面内容绘制到屏幕上的像素点上，以及处理字体渲染、图像显示等。

6. **处理 JavaScript**：
- 如果页面包含 JavaScript，浏览器将执行 JavaScript 代码。JavaScript 可能会修改 DOM 树和样式，从而触发重新布局和绘制。

7. **反复执行布局和绘制**：
- 如果 JavaScript 或用户交互导致页面内容发生变化，浏览器会根据需要执行布局和绘制的步骤。这个过程可能会多次发生。

8. **渲染完毕**：
- 一旦浏览器完成所有的布局和绘制，页面就会呈现给用户，用户可以看到并与页面进行交互。

这个渲染过程是高度优化的，浏览器会尽力减少布局和绘制的次数，以提供更快的性能。同时，浏览器还可以通过缓存和其他技术来加速页面的加载和渲染。不过，开发人员也可以通过优化 HTML、CSS 和 JavaScript 代码来改善页面的加载速度和性能。


### GET和POST的区别
**作用**
GET: 用于获取资源。
POST: 用于提交资源。
**数据发送方式**
GET: 通过URL将数据传输到服务器。
POST: 通过HTTP协议body将数据传输到服务器。
**数据发送大小**
GET: 受限于浏览器和服务器的限制，通常最多为2048个字符。
POST: 通常没有大小限制。但是，很多服务器会对提交数据的大小设置一个上限。
**数据发送格式**
GET: 只能发送ASCII字符。
POST: 没有编码限制，可以传输二进制数据。
**处理速度**
GET: 数据通过URL传输，处理速度更快。
POST: 数据通过消息主体传输，处理速度略慢。
**数据缓存**
GET: 可以被缓存，结果可被缓存。
POST: 不能被缓存。
**安全性**
GET: 数据以明文形式出现在URL中，并且被浏览器保存在历史记录中。跨站点脚本利用（XSS）容易利用这种意味着敏感数据不应使用GET传输。
POST: 与GET相比，POST提供更好的安全性，因为数据不可见在URL中，且由于该方法请求的数据存储在HTTP协议的内部，所以不容易被网络上的其他用户获取。

### post为什么会发两次请求?
> 浏览器会执行跨域请求，其中POST请求常常会伴随着两次发送：一次OPTIONS请求（CORS预检）和一次实际的POST请求。
POST请求发送两次的现象是因为浏览器在执行跨域的POST请求时，为了确保安全性，会发送一个OPTIONS请求进行CORS预检。服务器的CORS配置决定了是否允许实际的POST请求。理解CORS预检的过程，能够帮助更好地处理跨域请求问题，确保Web应用的安全性和稳定性。


### Accept和Content-Type

Accept请求头用来告知客户端可以处理的内容类型，这种内容类型用MIME类型来表示。 服务器使用 Content-Type 应答头通知客户端它的选择。

```text
Accept: text/html
Accept: image/*
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8
```

1.Accept属于请求头， Content-Type属于实体头。
Http报头分为通用报头，请求报头，响应报头和实体报头。
请求方的http报头结构：通用报头|请求报头|实体报头
响应方的http报头结构：通用报头|响应报头|实体报头

2.Accept代表发送端（客户端）希望接受的数据类型。
比如：Accept：text/xml;
代表客户端希望接受的数据类型是xml类型

Content-Type代表发送端（客户端|服务器）发送的实体数据的数据类型。
比如：Content-Type：text/html;
代表发送端发送的数据格式是html。

二者合起来，
Accept:text/xml；
Content-Type:text/html
即代表希望接受的数据类型是xml格式，本次请求发送的数据的数据格式是html。


### post常用的数据格式,form-data和json的区别
- application/json: json格式文本
- application/x-www-form-urlencoded: 形如query参数(name=tom&age=12)的文本
- multipart/form-data: 文件上传 这种格式主要用于文件上传，但也可以包含其他表单数据。当使用 `FormData` 时，Axios 会自动设置正确的 `Content-Type` 头，所以你可以省略手动设置 header。

```js
//application/x-www-form-urlencoded

this.$post(url, data, {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: [(data) => {
    return Object.entries(data)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
  }]
});

//使用qs库来更简单的处理
import qs from 'qs';

this.$post(url, qs.stringify(data), {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});


// multipart/form-data
let formData = new FormData();
// 添加文件
formData.append('file', fileObject);
// 添加其他数据
formData.append('name', 'value');

this.$post(url, formData, {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
});

```

### 状态码
| 状态码 | 类别                             | 描述                   |
| ------ | -------------------------------- | ---------------------- |
| 1xx    | Informational（信息状态码）      | 接受请求正在处理       |
| 2xx    | Success（成功状态码）            | 请求正常处理完毕       |
| 3xx    | Redirection（重定向状态码）      | 需要附加操作已完成请求 |
| 4xx    | Client Error（客户端错误状态码） | 服务器无法处理请求     |
| 5xx    | Server Error（服务器错误状态码） | 服务器处理请求出错     |


### Http与Https的区别
* url
* 端口
* 安全性/加密
* 证书: HTTP无需证书，而HTTPS 需要CA机构wosign的颁发的SSL证书


### 什么是Http协议无状态协议?怎么解决Http协议无状态协议?

无状态协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息也就是说，当客户端一次HTTP请求完成以后，客户端再发送一次HTTP请求，HTTP并不知道当前客户端是一个”老用户“。

可以使用Cookie来解决无状态的问题，Cookie就相当于一个通行证，第一次访问的时候给客户端发送一个Cookie，
当客户端再次来的时候，拿着Cookie(通行证)，那么服务器就知道这个是”老用户“。

### HTTP连接优化
>https://github.com/Easay/issuesSets/issues/67

### http状态码
HTTP状态码是服务器对客户端请求的响应代码。以下是一些常见的HTTP状态码及其含义：

1. 1xx (信息性状态码)：
    - 100 Continue: 请求已接收，继续处理
2. 2xx (成功状态码)：
    - 200 OK: 请求成功
    - 201 Created: 已创建新资源
    - 204 No Content: 请求成功，但无返回内容
3. 3xx (重定向状态码)：
    - 301 Moved Permanently: 资源已永久移动到新位置
    - 302 Found: 临时重定向
    - 304 Not Modified: 资源未修改，可使用缓存
4. 4xx (客户端错误状态码)：
    - 400 Bad Request: 请求无效或不能被服务器理解
    - 401 Unauthorized: 未授权，需要身份验证
    - 403 Forbidden: 服务器拒绝请求
    - 404 Not Found: 请求的资源不存在
    - 405 Method Not Allowed: 不允许使用该HTTP方法
    - 429 Too Many Requests: 客户端在给定的时间内发送了太多请求
5. 5xx (服务器错误状态码)：
    - 500 Internal Server Error: 服务器遇到意外情况
    - 502 Bad Gateway: 作为网关或代理的服务器从上游服务器收到无效响应
    - 503 Service Unavailable: 服务器暂时无法处理请求
    - 504 Gateway Timeout: 网关或代理服务器未及时从上游服务器收到响应

### 强缓存和协商缓存

#### 强缓存 (Strong Cache)

强缓存允许浏览器直接从本地缓存中读取资源,无需向服务器发送请求。

##### 实现方式:
1. Expires (HTTP/1.0)
    - 设置资源的过期时间
    - 示例: `Expires: Wed, 21 Oct 2025 07:28:00 GMT`
2. Cache-Control (HTTP/1.1)
    - 更灵活的缓存控制
    - 示例: `Cache-Control: max-age=31536000`
##### 特点:

- 如果命中缓存,浏览器直接使用缓存数据,不与服务器交互
- 响应速度最快
- 节省带宽
- 减轻服务器负载
#### 协商缓存 (Negotiation Cache)
协商缓存需要向服务器发送请求,由服务器判断资源是否有更新。如果资源未更新,返回304状态码,浏览器继续使用本地缓存。

##### 实现方式:

1. Last-Modified / If-Modified-Since
    - 基于资源的最后修改时间
    - 示例:
```bash
Last-Modified: Wed, 21 Oct 2023 07:28:00 GMT 
If-Modified-Since: Wed, 21 Oct 2023 07:28:00 GMT
```
2. ETag / If-None-Match
    - 基于资源的唯一标识符
    - 示例:

```js
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4" 
If-None-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```
##### 特点:

- 每次请求都会与服务器交互
- 可以及时更新缓存
- 如果资源未更新,仅返回304状态码,节省带宽

#### 对比

|特性|强缓存|协商缓存|
|---|---|---|
|是否与服务器交互|否|是|
|响应速度|最快|较快|
|内容更新|不及时|及时|
|服务器负载|最低|较低|

#### 缓存流程

1. 浏览器首先检查强缓存
2. 如果强缓存命中,直接使用缓存数据
3. 如果强缓存未命中,发送请求到服务器,检查协商缓存
4. 如果协商缓存命中,服务器返回304,浏览器使用本地缓存
5. 如果协商缓存未命中,服务器返回新的资源

#### 应用场景

- 强缓存: 适用于长期不变的静态资源(如第三方库、logo等)
- 协商缓存: 适用于经常变动的资源(如HTML页面、API数据等)



### Ajax
#### 概述
Ajax是一种用于创建异步Web应用的技术，它可以在不刷新整个网页的情况下，与服务器交换数据并更新部分网页内容，从而提高用户体验和性能。

Ajax的核心是XMLHttpRequest对象，它可以使用JavaScript向服务器发送请求，并接收服务器的响应。响应的数据格式可以是XML、JSON、文本或其他类型。然后，JavaScript可以使用DOM操作来修改网页内容




#### 使用Ajax的优缺点分别是什么
>https://www.frontendinterviewhandbook.com/javascript-questions#what-are-the-advantages-and-disadvantages-of-using-ajax

**优点**
- 交互性更好。来自服务器的新内容可以动态更改，无需重新加载整个页面。
- 减少与服务器的连接，因为脚本和样式只需要被请求一次。
- 状态可以维护在一个页面上。JavaScript 变量和 DOM 状态将得到保持，因为主容器页面未被重新加载。
- 基本上包括大部分 SPA 的优点。

**缺点**
- 动态网页很难收藏
	- URL可能不会随内容变化而更新导致收藏无法访问
	- 动态网页可能依赖临时会话信息/身份验证,收藏无法访问/显示错误
- 如果 JavaScript 已在浏览器中被禁用，则不起作用。
- 有些网络爬虫不执行JavaScript，也不会看到 JavaScript 加载的内容。
- 基本上包括大部分SPA的缺点


#### Ajax和Fetch区别
* 语言支持:ajax 是 XMLHttpRequest 的简写,依赖 XMLHttpRequest 对象,支持 IE5+。fetch 是 Fetch API 的一部分,使用 Promise,支持 IE10+。
* 接口:ajax 使用 XMLHttpRequest 对象,接口相对底层。fetch 使用 Fetch API,接口更简单。例如:
```js
// ajax
const xhr = new XMLHttpRequest()
xhr.open('GET', '/user/12345')
xhr.send()

// fetch
fetch('/user/12345')
```
* 响应格式:ajax 默认返回 XML 响应,需要手动解析。fetch 默认返回 JSON,可以直接使用 .json() 方法解析。
* 错误处理:ajax 使用 onerror 事件捕捉错误。fetch 使用 Promise 的 catch 方法捕捉错误。
* 超时处理:ajax 可以使用 timeout 属性设置超时时间。fetch 使用 Promise 的 catch 可以设置超时。
* 取消请求:ajax 可以使用 abort() 方法取消请求。fetch 的 Promise 对象没有 abort 方法,需要使用 cancelable Promise 实现取消。

```js
//超时
// ajax
const xhr = new XMLHttpRequest()
xhr.timeout = 1000 // 1秒超时
xhr.open('GET', '/user/12345')
xhr.ontimeout = () => {
  console.log('超时!')
}
xhr.send()

// fetch
fetch('/user/12345', {
  timeout: 1000 
})
.catch(err => {
  if (err.message === 'Timeout') {
    console.log('超时!')
  }
})


//取消
const xhr = new XMLHttpRequest()
xhr.open('GET', '/user/12345')
xhr.send()
xhr.abort() // 取消请求

// fetch
const controller = new AbortController()
fetch('/user/12345', { signal: controller.signal })
.then() // ...
controller.abort() // 取消fetch请求
```



#### 封装一个简易的ajax异步请求函数

##### 简洁版(必须)

```js
/* 
xhr + promise 封装一个异步ajax请求的通用函数  简洁版
*/
function ajax(url) {
  return new Promise((resolve, reject) => {
    // 创建一个XHR对象
    const xhr = new XMLHttpRequest()
    // 初始化一个异步请求(还没发请求)func
    xhr.open('GET', url, true)
    xhr.onreadystatechange = function () {
      // 如果状态值不为4, 直接结束(请求还没有结束)
      if (xhr.readyState !== 4) {
        return
      }
      // 如果响应码在200~~299之间, 说明请求都是成功的
      if (xhr.status>=200 && xhr.status<300) {
        // 指定promise成功及结果值
        resolve(JSON.parse(xhr.responseText))
      } else { // 请求失败了
        // 指定promise失败及结果值
        reject(new Error('request error staus '+ request.status))
      }
    }
    xhr.send(null)
  })
}
```

##### 加强版(可选)

```js
/* 
xhr + promise 封装一个异步ajax请求的通用函数  加强版
  返回值: promise
  参数为配置对象
    url: 请求地址
    params: 包含所有query请求参数的对象
    data: 包含所有请求体参数数据的对象
    method: 为请求方式
*/
function axios({url, params={}, data={}, method='GET'}) {
  // 返回一个promise对象
  return new Promise((resolve, reject) => {
    // 创建一个XHR对象
    const request = new XMLHttpRequest()
    
    // 根据params拼接query参数
    let queryStr = Object.keys(params).reduce((pre, key) => {
      pre += `&${key}=${params[key]}`
      return pre
    }, '')
    if (queryStr.length>0) {
      queryStr = queryStr.substring(1)
      url += '?' + queryStr
    }
    // 请求方式转换为大写
    method = method.toUpperCase()
    
    // 初始化一个异步请求(还没发请求)
    request.open(method, url, true)
    // 绑定请求状态改变的监听
    request.onreadystatechange = function () {
      // 如果状态值不为4, 直接结束(请求还没有结束)
      if (request.readyState !== 4) {
        return
      }
      // 如果响应码在200~~299之间, 说明请求都是成功的
      if (request.status>=200 && request.status<300) {
        // 准备响应数据对象
        const responseData = {
          data: JSON.parse(request.response),
          status: request.status,
          statusText: request.statusText
        }
        // 指定promise成功及结果值
        resolve(responseData)
      } else { // 请求失败了
        // 指定promise失败及结果值
        const error = new Error('request error staus '+ request.status)
        reject(error)
      }
    }

    // 如果是post/put请求
    if (method==='POST' || method==='PUT' || method==='DELETE') {
      // 设置请求头: 使请求体参数以json形式传递
      request.setRequestHeader('Content-Type', 'application/json;charset=utf-8')
      // 包含所有请求参数的对象转换为json格式
      const dataJson = JSON.stringify(data)
      // 发送请求, 指定请求体数据
      request.send(dataJson)
    } else {// GET请求
      // 发送请求
      request.send(null)
    }
  })
}
```



### 跨域
#### 概述
跨域是指一个域下的文档或脚本试图去请求另一个域下的资源，这种资源一般是由浏览器的同源策略所禁止访问的。
跨域问题的出现是因为浏览器和服务器之间需要进行数据交互，而有些数据又不希望被其他来源的网站访问，所以需要有一种机制来限制或允许跨域请求。

#### 同源策略
同源策略是浏览器为了保护用户隐私和安全而实施的一种安全机制，它要求两个 URL 的协议、域名和端口都相同，才能认为是同源，否则就是跨域。

#### 跨域解决方法
[[Browser#跨域10种解决方案]]



## 浏览器和网络

### reflow repaint

#### Reflow

当涉及到DOM节点的布局属性发生变化时，就会重新计算该属性，浏览器会重新描绘相应的元素，此过程叫Reflow（回流或重排）。

#### Repaint

当影响DOM元素可见性的属性发生变化 (如 color) 时, 浏览器会重新描绘相应的元素, 此过程称为Repaint（重绘）。因此重排必然会引起重绘。

#### 引起Repaint和Reflow的一些操作

- 调整窗口大小
- 字体大小
- 样式表变动
- 元素内容变化，尤其是输入控件
- CSS伪类激活，在用户交互过程中发生
- DOM操作，DOM元素增删、修改
- width, clientWidth, scrollTop等布局宽高的计算

#### Repaint和Reflow是不可避免的，只能说对性能的影响减到最小，给出下面几条建议：

- 避免逐条更改样式。建议集中修改样式，例如操作className。
- 避免频繁操作DOM。创建一个documentFragment或div，在它上面应用所有DOM操作，最后添加到文档里。设置display:none的元素上操作，最后显示出来。
- 避免频繁读取元素几何属性（例如scrollTop）。绝对定位具有复杂动画的元素。
- 绝对定位使它脱离文档流，避免引起父元素及后续元素大量的回流




## git操作

- git config --global credential.helper store (记住用户和密码)

- 分支操作
  ​	拉取远程新分支到本地
  ​	git pull (如果分支是在clone后创建的才需要执行)
  ​	git checkout -b dev origin/dev

- 版本注释一般规范
  feature 特性：新增功能
  docs 文档：新增文档
  fix 修复 Bug
- xiongjian分支到本地仓库xiongjian分支上
  git fetch origin xiongjian:xiongjian 拉取远程仓库

```bash
git checkout -b branchName

git add .

git commit -m 'xxx'

git checkout master

git merget branchName

git pull

git push
```








## webpack

#### 1. Webpack 基本概念

##### 1) entry 入口

- 以某个文件为入口开始打包
- 分类
  - 单入口 String 
    - 只会输出一个文件
  - 多入口 Array / Object
    - Array 只会输出一个文件
    - Object 会输出多个文件  ==> 多页应用(MPA)

##### 2) output 输出

- 打包后资源输出到哪里去
- 输出的文件名叫什么

##### 3) loader 加载器

- webpack 本身只能识别 json、js 模块，其他模块一旦加载就会报错
- 需要借助 loader 帮助 webpack 识别其它识别不了的模块

##### 4) plugins 插件

- loader 功能有限，要想做功能更加强大的工作交给插件
- 比如在页面中自动引入打包生成的js/css, 压缩css, 拷贝文件等

##### 5) mode

- 模式：开发环境（development）和生产环境（production）
- 提供一系列默认配置, 用于简化配置

#### 2. Webpack 基本配置

##### 1) 处理JS文件
- eslint-loader
  - 在package.json中配置eslintConfig来指示eslint-loader到底要干什么事
  - enfore: 'pre' 优先执行
- babel-loader
  - 在webpack配置中配置babel来指示babel-loader到底要干什么事
  - babel.config.js: 配置webpack的preset与plugin

##### 2) 处理Vue文件

- vue-loader

##### 3) 处理JSX文件 

- babel-loader
- presets: ['@babel/preset-react']

##### 4) 处理CSS文件

- 开发环境：创建style标签插入样式
  - style-loader
  - css-loader
  - postcss-loader
  - less-loader / sass-loader / stylus-loader
- 生产环境：提取单独css文件，将来通过link引入
  - MiniCssExtractPlugin.loader（还需要配置插件 new MiniCssExtractPlugin）
  - css-loader
  - postcss-loader
  - less-loader / sass-loader / stylus-loader

##### 5) 处理HTML文件

- 目标: 自动引入打包生成的js/css
- html-webpack-plugin

##### 6. 处理图片/字体/音视频文件

- url-loader / file-loader
- limit: 10000 小于10kb一下的图片会被base64处理

#### 3. Webpack 优化手段

##### 1) 优化打包构建速度

##### HMR 热模块替换

- 为什么要用？
  - 默认情况下，一旦修改了代码，全部代码重新编译刷新，速度慢（全体刷新）
- 有什么作用？
  - 只更新修改的模块，其他模块不变（局部更新）  
- 怎么使用？
  - devServer: { hot: true }  
  - new webpack.HotModuleReplacementPlugin()  
- 注意：
  - 默认情况下只有样式文件有HMR功能（style-loader），JS是没有的
- 开启JS的HMR功能：
  - 手写JS代码 --> module.hot.accpet('模块路径', () => {})
  - 在Vue使用 --> vue-loader
  - 在React使用 --> react-hot-loader

#### 缓存

- eslint和babel两个任务处理JS文件，时间一般会比较长，为了让其重新构建速度更快, 可以使用缓存。
- eslint --> cache: true
- babel --> cacheDirectory: true
- cache-loader放置在要缓存loader的前面
- 注意：一般只针对耗时长的任务：eslint-loader/babel-loader/vue-loader

#### oneOf

- 作用：
  - 让模块只被一个loader处理，其他的就不看了(原本所有都会判断一下)
  - 能够提升打包速度
- 注意：
  - eslint-loader: 处理js, 需要先执行, 将其定义在oneOf的外面
  - babel-loader: 处理js, 后执行, 将其定义在oneOf的内部

#### 多进程打包

- 过去: happyPack
- 现在: thread-loader
- 用法和cache-loader差不多，放在要使用loader前面
- 作用：开启多进程处理前面的任务，提升打包速度
- 注意：每个进程开启和通信都有开销，一般只针对耗时长的任务：babel-loader

### 2) 优化打包代码体积和性能

#### 兼容性处理

- JS
  - ES6由二个部分
    - 新语法: const/let/箭头函数/解构赋值/对象简写 
    - 新API: Promise / 数组新方法/ 对象新方法
  - babel-loader presets: ['@babel/preset-env'] 问题就是只能编译语法, 不能处理新API
  - @babel/polyfill 做API兼容，问题是体积太大了
  - core-js3 在@babel/preset-env基础上，增加了useBuiltIns: 'usage'来实现按需加载
  - 指定浏览器版本或占有率配置, 进一步减小打包文件: 只打包使用了且浏览器没有实现的
- CSS  
  - postcss-loader 
  - 在package.json中指定browserslist来指示postcss-loader兼容性做到什么程度

#### tree shaking( 摇树)

- 去除没有使用的JS代码
- 必须使用ES6模块化（需要禁止@babel/preset-env转换ES6模块化语法 modules: false）
- 开启webpack的生产模式（内部启用TerserPlugin，用来压缩JS代码的插件，tree shaking功能就是这个插件完成的）
- 在package.json配置sideEffects来指定哪些文件需要进行tree shaking

#### code split 代码分割 / lazy loading 懒加载

- 作用：
  - 抽取公共代码 
  - 拆分多个文件，减少单个文件体积（避免单次请求时间过长）
- 配置：
  - 多入口 + optimization
    - 将node_modules抽取成单独模块
    - 将多入口的公共模块也抽取成单独模块
  - 单入口 + optimization + import
    - 将node_modules抽取成单独模块
    - 动态导入语法import就能将某些文件抽取成单独模块
  - import()动态引入模块
    - 原生 JS:  在需要的回调函数中动态加载模块, import(模块).then()
    - Vue: () => import('./Foo.vue'), 实现路由组件懒加载
    - React: Suspence +lazy(() => import('./SomeComponent')), 实现路由组件懒加载

#### preload 和 prefetch 预加载

- 作用：
  - 让资源提前加载
- 区别：
  - preload 让当前页面的要使用资源加载（延后加载）
  - prefetch 让后面要使用资源提前加载（当前不需要使用）
- 使用：
  - import(/*webpackChunkName: xxx webpackPrefetch: true */'./xxx')
  - import(/*webpackChunkName: xxx webpackPreload: true */'./xxx') // 没有效果
  - 问题：兼容性较差 
- 使用Chrome团队提供的一个工具包: preload-webpack-plugin
  - npm i -D preload-webpack-plugin@next  // 必须是最新的下一个版本
  - 对异步模块包使用: prefetch
  - 对同步模块包使用: preload

#### 浏览器cache/缓存

- hash 
  - webpack每次构建都会生成一个新的且唯一的hash
  - 问题：只要webpack重新构建，所有文件的hash都会发生变化，缓存就会失效

- chunkhash
  - 打包属于同一个chunk，就共享同一个hash
  - 问题：样式文件被css-loader打包js文件中，导致样式文件和js文件属于同一个chunk，共享同一个hash
  - 一旦样式文件发生变化，js文件也会变

- contenthash
  - 根据文件的内容来成hash，所以只要文件内容不一样，hash就不一样
  - 问题：
    - 比如A模块有一个依赖，是B模块，那么A模块内部就会保存B模块hash值，
    - 一旦B模块发生变化，B模块的hash值就会变，导致A模块内部保存B模块hash值也发生改变
    - 此时A模块文件内容发生变化，它的hash值也会变
  - 解决：
    - runtimechunk: true 将A模块保存的B模块hash值存到runtime文件中，这样A模块内部就没有B模块的hash值了，就不会因为B模块的修改而修改



### 基础

- entry 入口
  指示 webpack 从哪个文件开始打包

- output 输出
  指示 webpack 将打包后的文件输出到哪里去

- loader 加载器
  帮助 webpack 解析它解析不了的模块（将其他模块解析成 webpack 能识别的模块，这样才能打包）

  还有其他功能：多进程打包...

- plugin 插件
  能够功能更加强大的事
  将现有库包装成 webpack 能够识别的功能模块，从而加载使用

- mode 模式
  模式（development/production）
  区别：设置不同 NODE_ENV，启用不同的插件

### 其他配置

- resolve 解析：帮助 webpack 解析模块

  alias 配置路径别名

  extensions 配置自动补全文件扩展名

  modules 配置 引入 node_modules 库，node_modules 文件夹去哪找

- optimization 优化

- devServer 开发服务器

### 兼容性处理

- JS 兼容性处理 babel
- CSS 兼容性处理，使用 postcss-loader 做 css 兼容性处理

### 摇树（**tree shaking**）

- 摇树：去除无用的 JS 代码

- 配置

  必须使用 ES6 模块化

  开启 mode: production

### 缓存

- 客户端端缓存服务器请求的资源（js/css/图片...）

  - 强制缓存（不会重新访问服务器，直接读取缓存）

    问题：如果资源在缓存期间内，是没办法更新的~

  - 协商缓存（每次都会重新访问服务器，由服务器来决定要不要走缓存，304）

- hash webpack 打包生成的，所以资源共享 hash 值

  问题：如果改动一个资源，所有资源的 hash 都变~导致其他资源缓存失效

- chunkhash 属于同一个 chunk，hash 值一样，不同 chunk，hash 值不一样

  问题：单入口样式文件因为 css-loader，会把样式文件打包到 js 中，此时就会和 js 共享同一个 hash 值，一旦改动 js/css 文件，css/js 文件缓存失效

- contenthash 根据文件内容来生成 hash，不同文件 hash 值不同

  新问题：如果 A 文件采用 import 进行代码分割文件 B，分割文件 B 一旦变化，那么 A 文件缓存失效

  原因是：A 文件保存 B 文件的 hash 值，一旦 B 文件变化，A 文件的 hash 值也要更新，从而导致 A 文件也变了

  解决：需要将 A 文件保存 B 文件的 hash 值单独提取出来，成单独文件，这样就不会影响 A 文件了

  ```js
  runtimeChunk: {
    name: (entry) => `runtime-${entry.name}.js`;
  }
  ```

### 关闭map(vue项目生产环境)

productionSourceMap: false, // 关闭map映射文件



### 实际使用
#### require.context
```javascript
//store/index.js

const moduleFIles = require.context('./modules', true, /\.js$/)
const modules = moduleFiles.keys().reduce((modules, modulePath) => {
  let moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  //处理多层文件
  if (moduleName.includes('/')) {
    let moduleNameParts = moduleName.split('/')
    for (let idx=1,len=moduleNameParts.length; idx<len; idx++) {
      const item = moduleNameParts[idx]
      moduleNameParts[idx] = item.slice(0, 1).toUpperCase() + item.slice(1)
    }
    moduleName = moduleNamePargs.join('')
  }
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})
```




## Vite




### 配置
```js

//vite.config.js


import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath} from 'node:url'
// https://vite.dev/config/
export default defineConfig({

  // 基础配置
  plugins: [vue()],
  base: '/vue-eslint/',
  mode: 'development',
  resolve: {
    // 定义路径别名
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    // 定义导入模块时可以省略的扩展名
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  // 定义如何解析css
  css: {
    // 用于表示是否开启devSourcemap
    devSourcemap: true
  },
  // 加载.env文件的目录,默认是项目根目录
  envDir: './',
  // 有效环境变量前缀
  envPrefix: 'VITE_',

  // 开发服务器配置
  server: {
    // 开发服务器IP地址
    host: '0.0.0.0',
    // 开发服务器监听端口
    port: 3000,
    // 不自动切换端口
    strictPort: true,
    // 是否启动https协议
    // https: {
      
    // },
    // 是否自动在浏览器打开 默认值true
    open: false,
    // 设置http请求代理
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
    // 修改监听文件的范围
    watch: {
      // 忽略index.html监听, !表示取反,即为已经忽略的目录添加监听
      ignored: ['**/index.html', '!**/node_modules/dayjs/*']
    }

  },

  // 打包构建配置
  build: {
    // 打包后代码在哪里运行,默认值是modules,表示支持ESM的浏览器;另一个值是'esnext',表示不支持import()的浏览器
    target:  'modules',
    // 打包后的代码输出路径
    outDir: 'dist',
    // 打包后静态资源存储路径 默认assets(相对于dist)
    assetsDir: 'assets',
    // 指定一个阈值用于决定是否将导入的资源转换为base64编码
    assetsInlineLimit: 4096,
    // 是否启用css代码分割, 默认值为true
    cssCodeSplit: true,
    // css转换目标,默认与target一致
    cssTarget: 'modules',
    // 生成调试文件, 开发环境下开启, 生产环境下关闭
    sourcemap: true,
    // 自定义rollup打包配置
    rollupOptions: {
      output: {
        manualChunks: id => {
          //将node_modules目录下的代码单独打包成一个JS文件
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    },
    // 开发第三方npm库时,指定库的入口文件
    // lib: {},
    // 为单页面应用提供应用的描述信息;为服务端框架提供正确的资源引入连接
    manifest: true,
    // 是否启动服务端渲染 默认值false;...
    ssr: true,
    // 打包时压缩代码的工具 默认值是esbuild
    minify: 'esbuild',
    // 打包时是否会清空输出文件,默认值为true
    emptyOutDir: true,
    // 打包体积过大警告
    chunkSizeWarningLimit: 2000,
    // 是否启用rollup监听器,默认值为true
    watch: null,
  },

  // 性能优化配置
  optimizeDeps: {
    // 依赖优化: 排除node_modules下某些依赖;
    exclude: ['dayjs'],
    // 依赖优化: 添加某些模块为依赖
    include: ['src/test.js'],

    // tree-shaking vue3中只支持esm模块  vue3中默认开启
    
    // 分包策略: 利用浏览器请求相同资源会使用其缓存的机制,将第三方模块单独打包成一个文件,减少http请求,提高加载速度. 在rollupOptions中配置


  }

})
```



### 优化概述
> [vite打包性能优化以及填坑大家好，我是 simple ，最近在使用 Vite4.0 构建一个中型前端项目的过程中，遇到 - 掘金](https://juejin.cn/post/7232688124416458789#heading-3)
> [Vite 性能篇：掌握这些优化策略，一起纵享丝滑！Vite 是一种新型前端构建工具，能够显著提升前端开发体验。本文将带领 - 掘金](https://juejin.cn/post/7211437215336333372)

#### 1.拆分包

#### 去除debugger

#### cdn加速

#### 按需导入


#### 文件压缩

#### 图片压缩


#### 
# Vue2


> https://vue3js.cn/interview/
> https://juejin.cn/post/6844903918753808398
> https://www.cnblogs.com/wenshaochang123/p/14888494.html
> [web前端面试 - 面试官系列 (vue3js.cn)](https://vue3js.cn/interview/)
> https://juejin.cn/post/6844903918753808398#heading-20
  https://www.yuque.com/cuggz/interview/hswu8g#02b671eb804c1a7a0e637fb68e91d8ac
  [史上最强vue总结---面试开发全靠它了 - 掘金 (juejin.cn)](https://juejin.cn/post/6850037277675454478)


### 怎么实现vm
Vue 的 MVVM 实现主要由以下四个核心部分构成:

1. **Observer (数据观察者)**
    - 通过 Object.defineProperty 劫持数据对象的属性
    - 将数据对象的属性转换为 getter/setter
    - 在属性被访问和修改时能够获取通知
    - 负责监听数据对象的所有属性变化
2. **Compile (指令解析器)**
    - 对 DOM 模板进行解析
    - 识别其中的指令(v-开头)和插值表达式({{}})
    - 根据不同的指令类型执行相应的绑定操作
    - 初始化视图，将模板与数据关联起来
3. **Watcher (订阅者)**
    - 作为 Observer 和 Compile 的桥梁
    - 订阅数据变化
    - 接收属性的变化通知
    - 执行相应的视图更新操作
    - 实现数据变化到视图更新的关联逻辑
4. **Vue 实例(入口)**
    - 作为整个 MVVM 的入口
    - 接收并解析配置项
    - 初始化 Observer、Compile 和 Watcher
    - 协调三者的关系，建立数据响应系统


### Vue响应式原理(如何实现数据双向绑定)
> https://github.com/Easay/issuesSets/issues/41

Vue采用**数据劫持** + **依赖收集** + **发布订阅模式**来实现响应式. 
Vue通过数据劫持（使用Object.defineProperty或Proxy）拦截数据的访问和修改，在数据被访问时进行依赖收集，在数据变化时通过发布订阅模式通知相关依赖进行更新。



### Vue的渲染过程
>https://github.com/Easay/issuesSets/issues/49

#### 整体流程：
通过编译，将模板编译成渲染函数，执行渲染函数后生成虚拟节点vnode，将虚拟节点渲染到页面上。

#### 模板编译过程
```md
模板 ——>模板编译(compile)——>渲染函数
```

分为三个步骤：
* 将模板解析成AST（抽象语法树）；（解析器）
* 遍历AST标记静态节点；（优化器）
* 使用AST生成渲染函数。（代码生成器）


### 说说你对vue的理解
* 核心特性
	* 数据驱动MVVM形式
		* Model：模型层，负责处理业务逻辑以及和服务器端进行交互
		- View：视图层：负责将数据模型转化为UI展示出来，可以简单的理解为HTML页面
		- ViewModel：视图模型层，用来连接Model和View，是Model和View之间的通信桥梁
	- 组件化思维  各种逻辑均抽象为一个统一的概念（组件）来实现开发的模式
	- 指令系统  指令 (Directives) 是带有 v- 前缀的特殊属性作用：当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM


### MVVM和MVC的区别?
在前端开发领域，MVVM (Model-View-ViewModel) 和 MVC (Model-View-Controller) 是两种常见的架构模式。它们有一些关键的区别：
1. 结构组成：
   - MVC: 由 Model（模型）、View（视图）和 Controller（控制器）组成。
   - MVVM: 由 Model（模型）、View（视图）和 ViewModel（视图模型）组成。

2. 数据流向:
   - MVC: 通常需要手动更新视图，数据流是单向的。
   - MVVM: 通常采用双向数据绑定，视图和模型可以自动同步。

4. 耦合度：
   - MVC: View 和 Model 之间可能存在一定程度的耦合。
   - MVVM: View 和 Model 完全解耦，通过 ViewModel 进行通信。

### Vue 跟 React 有什么异同
- 相同
    - 都是**单向数据流**
    - 都使用了 **虚拟DOM** 技术
    - 都是基于**组件化开发** / 都支持 SSR
- 不同点
    - 视图实现: vue: template ; react: JSX
	- 数据改变: vue: 响应式; react: **手动 setState**
	- 事件绑定: vue: 双向绑定;   react: 单向绑定



### 说说你对 SPA 单页面的理解，它的优缺点分别是什么？
>[面试官：你对SPA单页面的理解，它的优缺点分别是什么？如何实现SPA应用呢 | web前端面试 - 面试官系列 (vue3js.cn)](https://vue3js.cn/interview/vue/spa.html)

#### 什么是SPA?
SPA（single-page application），单页应用`SPA`是一种网络应用程序或网站的模型,它只有一个主页面，有多个页面片段，它是通过页面的**动态重写**来改变页面显示内容从而实现和用户的交互，由于用户从始至终实际上都是在同一个主页面上，仅仅是页面资源的不同装载和添加，也就是说单页面应用**不会进行重新加载**，只有在我们需要的时候才回去检索必要的html,css,js资源，所以用户不会因为页面切换而打断用户体验

#### MPA
多页面应用，是传统的一种网站模型，与SPA完全不同，它由多个主页面构成，**每个页面都是主页面**，每次访问不同页面都需要重新加载不同的html,css,js资源，因此会频繁进行页面切换

#### 两者比较

|           | 单页面应用（SPA）     | 多页面应用（MPA）                   |
| --------- | -------------- | ---------------------------- |
| 组成        | 一个主页面和多个页面片段   | 多个主页面                        |
| 刷新方式      | 局部刷新           | 整页刷新                         |
| url模式     | 哈希模式           | 历史模式                         |
| SEO搜索引擎优化 | 难实现，可使用SSR方式改善 | 容易实现                         |
| 数据传递      | 容易             | 通过url、cookie、localStorage等传递 |
| 页面切换      | 速度快，用户体验良好     | 切换加载资源，速度慢，用户体验差             |
| 维护成本      | 相对容易           | 相对复杂                         |


#### SPA优缺点
优点：

- 具有桌面应用的即时性、网站的可移植性和可访问性
- 用户体验好、快，内容的改变不需要重新加载整个页面
- 良好的前后端分离，分工更明确

缺点：

- 不利于搜索引擎的抓取
- 首次渲染速度相对较慢


### Vue的template标签的作用

* template主要是作为一个占位符去使用
* 在vue2中,作为一个占位符去使用或在组件传递一个插槽内容. 无论什么内容,tempalte会在编译后被去除
	* 使用场景有: 组件模板定义(单文件组件中), 条件渲染包装元素, 循环渲染包装元素
* 在vue3中,同样作为占位符,某些情况下会被保留
	* 多根节点下,会被保留; 使用vfor,vif时,与vue2相同,会被移除.

### 虚拟DOM//?
>https://github.com/Easay/issuesSets/issues/48

虚拟DOM本质上是一个普通对象，是从VNode类实例化的对象。vnode可以理解成节点描述对象，描述了应该怎样去创建真实的DOM节点。

当状态发生变化时，更新与之关联的DOM节点，虚拟DOM是解决这一问题的方式之一。

通过状态生成一个虚拟节点树，然后使用虚拟节点树进行渲染。在渲染之前会使用新生成的虚拟节点树和之前的虚拟节点树进行对比，只渲染不同的部分。

vue2.0中，将组件级别作为一个watcher实例，即使一个组件内有10个节点使用了某个状态，但其实也只有一个watcher在观察这个状态的变化。当变化发生后，通知到组件，组件内再通过虚拟DOM进行比对与渲染。

#### 渲染过程
在Vue.js中使用模板来描述状态与DOM之间的映射关系。
* 模板编译成渲染函数
* 执行渲染函数得到虚拟节点树
* 与上一次得到的虚拟节点树进行对比（diff算法）
* 找出要更新的节点进行DOM操作
* 渲染视图


#### 虚拟 DOM 实现原理？
虚拟 DOM 的实现原理主要包括以下 3 部分：

用 JavaScript 对象模拟真实 DOM 树，对真实 DOM 进行抽象；
diff 算法 — 比较两棵虚拟 DOM 树的差异；
pach 算法 — 将两个虚拟 DOM 对象的差异应用到真正的 DOM 树。

如果对以上 3 个部分还不是很了解的同学，可以查看本文作者写的另一篇详解虚拟 DOM 的文章《[深入剖析：Vue核心之虚拟DOM](https://juejin.cn/post/6844903895467032589#heading-14)》




#### 虚拟DOM优缺点
> [30 道 Vue 面试题，内含详细讲解（涵盖入门到精通，自测 Vue 掌握程度） - 掘金 (juejin.cn)](https://juejin.cn/post/6844903918753808398#heading-12)

优点：
**保证性能下限**： 框架的虚拟 DOM 需要适配任何上层 API 可能产生的操作，它的一些 DOM 操作的实现必须是普适的，所以它的性能并不是最优的；但是比起粗暴的 DOM 操作性能要好很多，因此框架的虚拟 DOM 至少可以保证在你不需要手动优化的情况下，依然可以提供还不错的性能，即保证性能的下限；
**无需手动操作DOM**： 我们不再需要手动去操作 DOM，只需要写好 View-Model 的代码逻辑，框架会根据虚拟 DOM 和 数据双向绑定，帮我们以可预期的方式更新视图，极大提高我们的开发效率；
**跨平台**： 虚拟 DOM 本质上是 JavaScript 对象,而 DOM 与平台强相关，相比之下虚拟 DOM 可以进行更方便地跨平台操作，例如服务器渲染、weex 开发等等。

缺点:
**无法进行极致优化**： 虽然虚拟 DOM + 合理的优化，足以应对绝大部分应用的性能需求，但在一些性能要求极高的应用中虚拟 DOM 无法进行针对性的极致优化。



### Vue数据流
1. Vue也是一个单向数据流的框架
2. Vue通过指令实现了双向数据绑定： v-model
3. v-model都做了哪些事情; `<input v-model='msg' />`
   1. 将指定变量的数据赋值给input的value
   2. 给当前的表单项自动绑定一个input事件，监听View层表单项数据发生改变获取最新value的同时更新Model的数据

### Vue单向数据流
* 父子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外改变父级组件的状态，从而导致你的应用的数据流向难以理解。
* 每次父级组件发生更新时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。子组件想修改时，只能通过 $emit 派发一个自定义事件，父组件接收到后，由父组件修改。

**两种常见的更改Prop的情况**
* prop 用来传递一个初始值；这个子组件接下来希望将其作为一个本地的 prop 数据来使用。 在这种情况下，最好定义一个本地的 data 属性并将这个 prop 用作其初始值：
```vue
props: ['initialCounter'],
data: function () {
  return {
    counter: this.initialCounter
  }
}
```
* 这个 prop 以一种原始的值传入且需要进行转换。 在这种情况下，最好使用这个 prop 的值来定义一个计算属性
```vue
props: ['size'],
computed: {
  normalizedSize: function () {
    return this.size.trim().toLowerCase()
  }
}
```


### Vue中的异步更新队列
>https://github.com/Easay/issuesSets/issues/53

Vue在观察数据变化时并不是直接更新DOM,而是开启一个队列，然后缓冲在同一个时间下发生的所有的数据改变，同时去重，只有在下一个事件循环中，VUE才会刷新队列，执行新的内容

**什么时候DOM会更新完成呢？**
$neckTick执行时就是DOM更新完成后
所以我们对数据变化的DOM对象做处理时，应该在$nextTick函数中做处理

### $nextTick作用及原理
>https://github.com/Easay/issuesSets/issues/52

#### 是什么
nextTick方法接收一个回调函数，作用是将回调延迟到下一次DOM更新周期后执行，与全局nextTick方法一样，不同的回调的this会自动绑定到调用它的vm实例上。如果没有回调，则返回Promise。

#### 使用场景
更新数据后，需要对新DOM做一些操作，但此时我们还无法获得更新后的DOM，因为还没有重新渲染。这时需要用到nextTick方法。
```js
new Vue({
	methods: {
		example:function(){
			//修改数据
			this.message = 'change',
			// DOM还未更新
			this.$nextTick(function(){
					// DOM现在更新了
					// this绑定到更新后的当前vm实例
					this.doSomethingElse();
			})
		}
	}
})
```

当状态发生变化时，watcher会得到通知，然后触发虚拟DOM的渲染流程。而watcher触发渲染这个操作并不是同步的，而是异步的。Vue.js中有个队列，每次需要渲染时，就将watcher推入这个队列，在下一次事件循环中再让watcher触发渲染的流程。

#### 异步更新队列的原因
//待补充





### Vue组件间多种通信方式

#### 1) Vue2组件间通信方式列表

```
1) props
2) vue自定义事件
3) 全局事件总线
4) v-model
5) .sync 
6) $attrs与$listeners
7) $refs, $children与$parent
8) provide与inject
9) Vuex
10) 插槽 ==> 作用域插槽
```


#### Vue3组件间通信方式
```md
- props
- $emit
- expose / ref
- $attrs
- v-model
- provide / inject（原理：原型链）
- Vuex/pinia
- mitt
```


#### 2) 通信方式的选择

#### 根据通信的2个组件间的关系来选择一种通信方式

```
父子
	props
	vue自定义事件
	v-model
	.sync
	$refs, $children与$parent
	插槽 ==> 作用域插槽
祖孙
	$attrs与$listeners
	provide与inject
兄弟或其它/任意
	全局事件总线
	Vuex
```



#### 方式1: props 

```
1). 实现父向子通信: 属性值是非函数
2). 实现子向父通信: 属性值是函数
应用: 最基本, 用得最多的方式
```

#### 方式2: vue自定义事件
```
1). 用来实现子组件向父组件通信
2). 相关语法:
    父组件中给子组件绑定自定义事件监听:
      <Child @eventName="callback">
    子组件中分发事件
      this.$emit('eventName', data)
应用: elment-ui的组件的事件监听语法都用的是自定义事件
      我们项目中的组件也用了不少自定义事件
```



#### 方式3: 全局事件总线   ===> 消息订阅与发布

```
实现任意组件间通信
编码:
	将入口js中的vm作为全局事件总线对象: 
			beforeCreate() {
					Vue.prototype.$bus = this
			}
	分发事件/传递数据的组件: this.$bus.$emit('eventName', data)
	处理事件/接收数据的组件: this.$bus.$on('eventName', (data) => {})
    
应用: 前台项目中使用全局事件总线
```

#### 方式4: v-model
* 实现父子之间相互通信/同步
* 组件标签上的v-model的本质: 自定义input监听来接收子组件分发$emit的数据更新父组件数据
父组件: 
```vue
	<CustomInput v-model="name"/>
	<!-- 等价于 -->
	<CustomInput :value="name" @input="name=$event"/>
```

子组件: 
子组件需要使用`$emit`来触发v-model绑定的事件
```vue
<input type="text" :value="value" @input="$emit('input', $event.target.value)">

props: ['value']
```

应用: element-ui中的表单项相关组件都用了v-model: Input / Select / Checkbox / Radio

#### 方式5: .sync
实现父子之间相互通信/同步(在原本父向子的基础上增加子向父)
组件标签的属性上使用.sync的本质: 事件监听来接收子组件分发$emit过来的数据并更新父组件的数据
父组件:
```vue
<child :money.sync="total"/>
<!-- 等价于 -->
<Child :money="total" @update:money="total=$event"/>

data () {
	return {
		total: 1000
	}
},
```
子组件:
```vue
<button @click="$emit('update:money', money-100)">花钱</button>
props: ['money']
```
应用:  
element-ui在有显示隐藏的组件上: Dialog / Drawer

#### 方式6: `$attrs`与$listeners
**$attrs**
//实现当前组件的父组件向当前组件的子组件通信
父组件传递给子组件的属性,除了props已经声明接收的属性及父组件的style,class属性.
它是包含所有父组件传入的标签属性(排除props声明, class与style的属性)的对象
使用: 通过 v-bind="$attrs" 将父组件传入的n个属性数据传递给当前组件的子组件


**$listeners**
实现当前组件的子组件向当前组件的父组件通信
$listeners是包含所有父组件传入的自定义事件监听名与对应回调函数的对象
使用: 通过v-on="$listeners" 将父组件绑定给当前组件的事件监听绑定给当前组件的子组件
应用: 利用它封装了一个自定义的带hover文本提示的el-button

#### 方式7: `$refs & $children & $parent`
$refs
  实现父组件向指定子组件通信
  $refs是包含所有有ref属性的标签对象或组件对象的容器对象
  使用: 通过 this.$refs.child 得到子组件对象, 从而可以直接更新其数据或调用其方法更新数据
$children
实现父组件向多个子组件通信
$children是所有直接子组件对象的数组
使用: 通过this.$children 遍历子组件对象, 从而可以更新多个子组件的数据
$parent
  实现子组件向父组件通信
  $parent是当前组件的父组件对象
  使用: 通过this.$parent 得到父组件对象, 从而可以更新父组件的数据
应用: 在后台管理项目中使用了$refs

#### 方式8: provide与inject

```js
//provide于inject案例
export default{
    //
    provide(){
        return { //声明向所有后代提供2个数据
            content1:this.content1,
            content2:this.content2,
            updateContent:this.updateContent
        }
    }
}

export default{
    //
    inject:['content1', 'content2', 'updateContent'] //声明注入的属性会成为组件对象的属性
}

```

实现祖孙组件间直接通信
使用
在祖组件中通过provide配置向后代组件提供数据
在后代组件中通过inject配置来声明接收数据
注意:
不太建议在应用开发中使用, 一般用来封装vue插件
provide提供的数据本身不是响应式的 ==> 父组件更新了数据, 后代组件不会变化
provide提供的数据对象内部是响应式的 ==> 父组件更新了数据, 后代组件也会变化
应用: element-ui中的Form组件中使用了provide和inject



#### 方式9: vuex

- vuex用来统一管理多个组件共享的状态数据

- 任意要进行通信的2个组件利用vuex就可以实现

  A组件触发action或mutation调用, 将数据保存到vuex的状态中

  B组件读取vuex中的state或getters数据, 得到最新保存的数据进行显示
  
- 面试题

  1. mutation负责同步修改状态数据的，能不能异步修改

     可以异步修改

     如果异步修改的话会导致Vuex的调试工具失效，无法检测异步修改数据

  2. 设计的时候为什么建议mutation同步修改状态数据，而新增action负责异步

     Vuex的作用是给多个组件共享数据

     如果支持mutation异步修改数据，又因为异步的特性，会导致store对象中state数据发生错乱甚至是报错

     为了数据的安全

  3. Vuex刷新页面，数据丢失问题
```md
 //数据丢失原因
1.	Vuex数据保存在运行内存中，vue实例初始化的时候为其分配内存
2.	当刷新页面的时候重新初始化Vue实例，所以重新为Vuex分配内存导致之前保存的数据丢失

   //如何解决?
1.	Vuex的数据都是每次组件加载时候动态请求获取数据保存
a)	优点： 保证数据不会丢失
b)	缺点: 性能差，因为网络问题可能有网络延迟

2.	将Vuex中的数据每次同步更新保存到sessionStorage中
a)	优点: 每次页面刷新后从sessionStorage中获取保存的数据，不会丢失
b)	缺点: state中的数据是动态的，就需要一直要同步到sessionStorage中，性能差

3.	在页面刷新之前获取Vuex的数据，将数据保存在sessionStorage中，页面加载后从sessionStorage中获取
a)	优点: 减少动态更新sessionStorage的次数，性能好
b)	重点: 给window绑定beforeunload事件监听

4.插件
使用持久化插件：可以使用Vuex持久化插件如vuex-persistedstate或vuex-along来将Vuex存储在浏览器的localStorage或cookie中，以便在刷新页面时保留数据状态。
```


```js
//绑定事件监听: 在页面卸载(关闭)或刷新时候保存当前数据
// beforeunload 页面即将刷新之前调用
window.addEventListener('beforeupload', () => {
    sessionStorage.setItem('test2', JSON.stringify(this.personArr))
})
// 读取sessionStorage中是否有之前缓存的数据
let personArr = sessionStorage.getItem('test2')
// 如果有： 更新Vuex中状态数据
personArr && this.changePersonArrMutation(JSON.parse(personArr))
```



#### 方式10:  插槽/作用域插槽slot-scope
实现父组件向子组件传递标签内容
  什么情况下使用作用域插槽?
  父组件需要向子组件传递标签结构内容,但决定父组件传递怎样标签结构的数据在子组件中
编码:
子组件:
```vue
<slot :row="item" :$index="index">  <!-- slot的属性会自动传递给父组件 -->
</slot>
```
父组件:
```vue
<template slot-scope="{row, $index}">
		<span>{{$index+1}}</span> &nbsp;&nbsp;
		<span :style="{color: $index%2===1 ? 'blue' : 'green'}" >{{row.text}}</span>
</template>
```
应用: element-ui中的Table组件


### computed与method和watch的区别

- **computed** 
  1. 支持缓存，多次读取, 只会执行一次计算, 只有依赖数据发生改变，才会重新进行计算 
  2. 不支持异步，当computed内有异步操作时无效，无法监听数据的变化
  3. 底层用到的是对象set和get方法: 简写为函数形式,就是get方法;完整写法为对象,get+set方法;
     1. setter和getter中的this上下文自动绑定为Vue实例;如果使用箭头函数形式, 可以将实例作为第一个参数
  4. 执行时机: 初始化时; 当依赖数据发生变化时;

- **method**
  - 没有缓存, 多次读取, 必须多次调用

- **watch**
  1. watch支持异步；
  2. 监听的函数接收两个参数，第一个参数是最新的值；第二个参数是输入之前的值；
  3. 当一个属性发生变化时，需要执行对应的操作；一对多；
  4. 监听数据必须是一个响应式数据(data/props/computed)
	  1. immediate：组件加载立即触发回调函数执行，
	  2. deep: 深度监听，为了发现**对象内部值**的变化，复杂类型的数据时使用，例如数组中的对象内容的改变
  5. 执行时机: 初始化, mounted后执行(mounted 钩子函数会在 watch 中的 handler 函数之前执行，因为 mounted 是在组件渲染完毕后执行的，而 watch 监听的数据变化需要等到组件渲染完毕后才能触发。)



### Vue 列表为什么加 key？

#### 是什么
> key是给每一个vnode的唯一id，也是diff的一种优化策略，可以根据key，更准确， 更快的找到对应的vnode节点


#### 背后逻辑
* 在使用`v-for`时，需要给单元加上`key`

- 如果不用key，Vue会采用**就地复用**原则：最小化element的移动，并且会尝试尽最大程度在同适当的地方对相同类型的element，做patch或者reuse。
  
- 如果使用了key，Vue会根据keys的顺序记录element，曾经拥有了key的element如果不再出现的话，会被直接remove或者destoryed


因为Vue在进行列表渲染时的优化策略涉及到了Virtual DOM，而在渲染Virtual DOM时，需要对比新旧节点的变化，如果没有唯一的key属性，Vue无法准确地追踪每个节点的变化情况。

通过给每个列表项加上唯一的key属性，Vue能够更加高效地渲染视图，提高渲染性能。同时，在使用列表组件时，key属性也可以用于优化过渡动画效果，确保在列表项被添加或删除时，动画效果能够正确地触发。

### Class 与 Style 如何动态绑定？
Class 可以通过对象语法和数组语法进行动态绑定：

对象语法：
```vue
<div v-bind:class="{ active: isActive, 'text-danger': hasError }"></div>
data: {
  isActive: true,
  hasError: false
}
```
<div v-bind:class="{ active: isActive, 'text-danger': hasError }"></div>

数组语法：
```vue
<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>


data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}
```


Style也可以通过对象语法和数组语法进行动态绑定：

对象语法：
```vue
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>


data: {
  activeColor: 'red',
  fontSize: 30
}
```
数组语法：
```vue
<div v-bind:style="[styleColor, styleSize]"></div>

data: {
  styleColor: {
     color: 'red'
   },
  styleSize:{
     fontSize:'23px'
  }
}
```




### 直接给一个数组项赋值，Vue 能检测到变化吗？
由于 JavaScript 的限制，Vue 不能检测到以下数组的变动：
* 当你利用索引直接设置一个数组项时，例如：`vm.items[indexOfItem] = newValue`
* 当你修改数组的长度时，例如：`vm.items.length = newLength`

为了解决第一个问题，Vue 提供了以下操作方法：
```js
// Vue.set
Vue.set(vm.items, indexOfItem, newValue)
// vm.$set，Vue.set的一个别名
vm.$set(vm.items, indexOfItem, newValue)
// Array.prototype.splice
vm.items.splice(indexOfItem, 1, newValue)
```
为了解决第二个问题，Vue 提供了以下操作方法：
```js
// Array.prototype.splice
vm.items.splice(newLength)
```


### vfor与vif同时使用的问题?

> 在官方文档中明确指出**v-for和v-if不建议一起使用**。 原因：v-for比v-if优先级高，所以使用的话，每次v-for都会执行v-if,造成不必要的计算，影响性能，尤其是当之需要渲染很小一部分的时候。

`v-for` 和 `v-if` 同时使用有 3 种情景：

1. 部分遍历（内/外部条件）：一个 `list` 中某个属性值符合条件的遍历出来；
2. 全部遍历（外部条件）：某外部条件符合条件时遍历全部。
3. 全部遍历（内部条件）：根据某内部条件渲染出不同的内容。

#### 解决方案:

##### 使用计算属性

> 在计算属性中先用内/外部条件处理数据，再遍历处理后的数据

```javascript
<!-- 遍历list，条件是值小于100 方案：使用计算属性activeList首先筛选出符合条件的值再直接遍历 -->
<ul>
  <li v-for="item in activeList" :key="item"></li>
</ul>

export default {
  data() {
    return {
      list: [78, 90, 20, 45, 66, 120, 136]
    }
  },
  computed: {
    activeList() {
      return this.list.filter((item) => item < 100)
    }
  }
}
```



##### 条件放于父元素(外部条件)

> 解决方案：外部条件放到遍历的父级元素上，没有父级可以使用`<template></template>`。

```html
<ul v-if="isActive">
  <li v-for="item in list" :key="item"></li>
</ul>
<!-- or -->
<div>
  <template v-if="isActive">
    <span v-for="item in list" :key="item"></span>
  </template>
  <p>Hello,My name is Lillian!</p>
</div>

<script>
export default {
  data() {
    return {
      isActive: true,
      list: [78, 90, 20, 45, 66, 120, 136]
    }
  }
}
</script>
```



##### 遍历`template`(内部条件)

> 根据某内部条件，显示不同内容。注意 `key` 不能放 `template` 标签上

```html
<div>
  <template v-for="item in list">
    <span v-if="item.type===0" :key="item.id">文字+图标</span>
    <span v-if="item.type===1" :key="item.id">文字+文字</span>
    <span v-else :key="item.id">其他</span>
  </template>
</div>
```

`vue` 中会优先执行 `v-for`, 当 `v-for` 把所有内容全部遍历之后 , `v-if` 再对已经遍历的元素进行删除 , 造成了加载的浪费 , 所以应该尽量在执行 `v-for` 之前优先执行 `v-if` , 可以减少加载的压力。







### 为什么组件中的data必须是函数形式？

- Vue解析组件标签时，会创建一个新的组件实例对象
- 每个组件实例对象, 都需要有自己的data数据对象
- 如果data配置是对象, 就会导致同个组件的多个实例共享一个data对象
- 如果data是函数, 组件的多个实例的data对象是各自的, 是多份



### 如何理解vue的渐进式

![](https://img-blog.csdn.net/201806191038393?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dhbmd6dW5rdWFu/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)



所谓的渐进式框架,就是把框架分层.

最核心的部分是视图层渲染,然后往外是组件机制,在这个基础上再加入路由机制,再加入状态管理,最外层是构建工具.

所谓分层,就是说你既可以只用最核心的视图层渲染功能来快速开发一些需求,也可以使用一整套全家桶来开发大型应用.




### Vue实例的生命周期

#### 是什么

> 每个 Vue 实例在被创建时都要经过一系列的初始化过程, 这个过程中也会运行一些叫做**生命周期钩子**的函数，这给了用户在不同阶段添加自己的代码的机会


#### Vue生命周期说明

* 有什么
* 三个阶段
  * 挂载阶段=>beforeCreate、created、beforeMounted、mounted
  * 更新阶段=>beforeUpdate、updated
  * 销毁阶段 beforeDestroy、destroyed
* 每个阶段适合干什么
  * created：实例创建完成，可访问data、computed、watch、methods上的方法和数据，未挂载到DOM，不能访问到el属性，el属性，ref属性内容为空数组常用于简单的ajax请求
  * 页面的初始化 beforeMount 在挂载开始之前被调用，beforeMount之前，会找到对应的template，并编译成render函数 
  * mounted：实例挂载到DOM上，此时可以通过DOM API获取到DOM节点，$ref属性可以访问常用于获取VNode信息和操作，ajax请求
  * beforeupdate：响应式数据更新时调用，发生在虚拟DOM打补丁之前，适合在更新之前访问现有的DOM，比如手动移除已添加的事件监听器 
  * updated：虚拟 DOM 重新渲染和打补丁之后调用，组件DOM已经更新，可执行依赖于DOM的操作避免在这个钩子函数中操作数据，可能陷入死循环 
  * beforeDestroy：实例销毁之前调用。这一步，实例仍然完全可用，this仍能获取到实例，常用于销毁定时器、解绑全局事件、销毁插件对象等操作

| 生命周期钩子    | 说明                                                         | 对应上述步骤   |
| --------------- | ------------------------------------------------------------ | -------------- |
| `beforeCreate`  | 初始化实例前，`data`、`methods`等不可获取                    | 1 之后，2 之前 |
| `created`       | 实例初始化完成，此时可获取`data`里数据和`methods`事件，无法获取 DOM | 2 之后，3 之前 |
| `beforeMount`   | 虚拟 DOM 创建完成，此时未挂载到页面中，`vm.$el`可获取未挂载模板 | 3 之后，4 之前 |
| `mounted`       | 数据绑定完成，真实 DOM 已挂载到页面，`vm.$el`可获取真实 DOM  | 4 之后         |
| `beforeUpdate`  | 数据更新，DOM Diff 得到差异，未更新到页面                    | 5 之后，6 之前 |
| `updated`       | 数据更新，页面也已更新                                       | 6 之后         |
| `beforeDestroy` | 实例销毁前                                                   | 7 之前         |
| `destroyed`     | 实例销毁完成                                                 | 7 之后         |





#### 重要生命周期函数（开发中常用） 

- **created / mounted** 

  发送AJAX请求、设置定时器等一次性任务

  created速度更快

- **beforeDestroy** 

  做一些收尾工作：取消AJAX请求，清除定时器等



#### Vue2与Vue3生命周期比较
- `beforeCreate` -> 使用 `setup()`
- `created` -> 使用 `setup()`
- `beforeMount` -> `onBeforeMount`
- `mounted` -> `onMounted`
- `beforeUpdate` -> `onBeforeUpdate`
- `updated` -> `onUpdated`
- `beforeDestroy` -> `onBeforeUnmount`
- `destroyed` -> `onUnmounted`
- `errorCaptured` -> `onErrorCaptured`


#### 父子组件的更新
**加载渲染过程**
父 beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子 created -> 子 beforeMount -> 子 mounted -> 父 mounted

**子组件更新过程**
父 beforeUpdate -> 子 beforeUpdate -> 子 updated -> 父 updated

**父组件更新过程**
父 beforeUpdate -> 父 updated

**销毁过程**
父 beforeDestroy -> 子 beforeDestroy -> 子 destroyed -> 父 destroyed




#### 周期函数补充

- 动态组件

  `<component :is="comName"></component>`  is属性来切换不同的组件

  正常传入props数据就可以接受到

- 缓存组件

  ```vue
  <keep-alive :include="['a','b']>
    <component :is="view"></component>
  </keep-alive>
  ```

- **errorCaptured(errObj, errVM, errMsg)**

  捕获一个来自子孙组件的错误时被调用

  return false // 阻止错误继续向上传播，并且不会在浏览器控制台抛出错误

  参数：错误对象，抛出错误的实例，错误信息



动态`<component>`案例

```vue
// src/comopnents/baseComponents/baseForm/index.vue

<template>
	<div @clik.stop>
    <component
    	:is="componentId"
      v-bind="$attrs"
      @click="(param) => this.$emit('click', param)"
    ></component>
  </div>
</template>


<script>
	import baseInput from "./baseInput"
  import baseSelect from "./baseSelectCustom"; // 定制版
  import baseTime from "./baseTime";
  import baseCheck from "./baseCheck";
  import baseJudge from "./baseJudge";
  import baseupload from "./baseupload";
  import baseSelectQuery from "./baseSelectQuery";
  import baseSelectQuery_two from "./baseFromMask_two";
  import baseSearchShll from "./baseSearchShll";
  import baseCheckTwo from "./basecheckTwo";
  import baseTime_two from "./baseTime_two";
  import baseCheckthree from "./baseCheckthree";
  import baseInputTwo from "./baseInputTwo";
  import baseuploadMetering from "./baseuploadMetering";
  import baseInputSelects from "./baseInputSelects";
  import basejudeFlag from "./basejudeFlag"
  import basePopup from "./baseInputpopup";
  import baseInforSearchShll from "./baseInforSearchShll";
  import baseTimeashdas from "./baseTimeashdas";
  import baseJudges from "./baseJudges";
  import baseJudgetb from "./baseJudgetb";
  
  export default {
    name: 'baseFrom',
    components: {
      baseInput,
      baseSelect,
      baseTime,
      baseCheck,
      baseJudge,
      baseupload,
      baseSelectQuery,
      baseSelectQuery_two,
      baseSearchShll,
      baseCheckTwo,
      baseTime_two,
      baseCheckthree,
      baseInputTwo, 
      baseuploadMetering,
      baseInputSelects,
      basejudeFlag,
      basePopup,
      baseInforSearchShll,
      baseTimeashdas,
      baseJudges,
      baseJudgetb,
    },
    props: {
      type: {type:String, default: '1'}
    },
    computed: {
      componentId() {
        return [
          "baseInput",//ok
          "baseSelect",//ok
          "baseTime",//ok
          "baseCheck",//ok
          "baseJudge",//ok
          "baseupload",//该组件默认不可修改
          "baseSelectQuery",//ok
          "baseSelectQuery_two",//
          "baseSearchShll",//9
          "baseCheckTwo",//ok
          "baseTime_two",//ok
          "baseCheckthree",//ok
          "baseInputTwo", //13ok
          "baseuploadMetering", // 14
          "baseInputSelects",//15
          "basejudeFlag",//16
          "basePopup",
          'baseInforSearchShll',//18ok
          'baseTimeashdas',//19ok
          'baseJudges',//20ok
          'baseJudgetb',//21ok
        ][this.type - 1];
      }
    }
  }
</script>
```



```vue
// 其他组件调用baseForm

<!-- 发电用户普查 -->
<article class="publicData" v-show="powerUsers">
  <template v-for="(item, index) in publicEntryList">
	<baseFrom
          v-if="[19].indexOf(index) != -1"
          :key="index"
          v-bind="item"
          v-model="publicEntryList[index]"
          @click="entryList($event, item, index)"
          />
  </template>
</article>
```



##### 在缓存组件的基础上存在的声明周期

- **activated()**

  每次缓存组件被激活时就会调用

- **deactivated()**

  缓存的组件停用时调用，可替代destroyed



#### 父子组件生命周期

加载渲染过程

父 beforeCreate -> 父 created -> <span style="color:blue">父 beforeMount -></span><span style="color:red"> 子 beforeCreate -> 子 created -> 子 beforeMount -> 子 mounted </span>-> <span style="color:blue">父 mounted</span>

子组件更新过程

父 beforeUpdate -> 子 beforeUpdate -> 子 updated -> 父 updated

父组件更新过程

父 beforeUpdate -> 父 updated

销毁过程

父 beforeDestroy -> 子 beforeDestroy -> 子 destroyed -> 父 destroyed


#### 父组件可以监听到子组件的生命周期吗？
比如有父组件 Parent 和子组件 Child，如果父组件监听到子组件挂载 mounted 就做一些逻辑处理，可以通过以下写法实现：
```ts
// Parent.vue
<Child @mounted="doSomething"/>
    
// Child.vue
mounted() {
  this.$emit("mounted");
}
```

以上需要手动通过 $emit 触发父组件的事件，更简单的方式可以在父组件引用子组件时通过 @hook 来监听即可，如下所示：
```ts
//  Parent.vue
<Child @hook:mounted="doSomething" ></Child>

doSomething() {
   console.log('父组件监听到 mounted 钩子函数 ...');
},
    
//  Child.vue
mounted(){
   console.log('子组件触发 mounted 钩子函数 ...');
},    
    
// 以上输出顺序为：
// 子组件触发 mounted 钩子函数 ...
// 父组件监听到 mounted 钩子函数 ...  
```
当然 @hook 方法不仅仅是可以监听 mounted，其它的生命周期事件，例如：created，updated 等都可以监听。



### keep-alive
#### 是什么
keep-alive是vue的内置组件，能在组件切换过程中将状态保留在内存中，相当于缓存，防止DOM的重复渲染；

#### 基本用法
* keep-alive有三个属性：include（只有名字匹配的才会被缓存）、exclude（任何名字匹配的都不会被缓存）、max（最多可以缓存多少个组件）。
* 一般结合路由和动态组件一起使用，用于缓存组件；
* 提供 include 和 exclude 属性，两者都支持字符串或正则表达式， include 表示只有名称匹配的组件会被缓存，exclude 表示任何名称匹配的组件都不会被缓存 ，其中 exclude 的优先级比 include 高；
* 对应两个钩子函数 activated 和 deactivated ，当组件被激活时，触发钩子函数 activated，当组件被移除时，触发钩子函数 deactivated。

#### 生命周期
- 首次进入组件时：`beforeRouteEnter` > `beforeCreate` > `created`> `mounted` > `activated` > ... ... > `beforeRouteLeave` > `deactivated`
- 再次进入组件时：`beforeRouteEnter` >`activated` > ... ... > `beforeRouteLeave` > `deactivated`


#### 实例
**缓存后如何获取数据?**
1. beforeRouteEnter
2. actived

### Vue常用的修饰符及应用场景

#### 是什么
修饰符是用于限定类型以及类型成员的声明的一种符号
在`Vue`中，修饰符处理了许多`DOM`事件的细节，让我们不再需要花大量的时间去处理这些烦恼的事情

#### 分类
- 表单修饰符
- 事件修饰符
- 鼠标按键修饰符
- 键值修饰符
- v-bind修饰符

#### 表单修饰符
表单的修饰符有如下：

- lazy
- trim
- number
##### [#](https://vue3js.cn/interview/vue/modifier.html#lazy)lazy
在我们填完信息，光标离开标签的时候，才会将值赋予给`value`，也就是在`change`事件之后再进行信息同步

```
<input type="text" v-model.lazy="value">
<p>{{value}}</p>
```


##### [#](https://vue3js.cn/interview/vue/modifier.html#trim)trim
自动过滤用户输入的首尾空格字符，而中间的空格不会过滤

```
<input type="text" v-model.trim="value">
```


##### [#](https://vue3js.cn/interview/vue/modifier.html#number)number
自动将用户的输入值转为数值类型，但如果这个值无法被`parseFloat`解析，则会返回原来的值

```
<input v-model.number="age" type="number">
```


#### 事件修饰符
事件修饰符是对事件捕获以及目标进行了处理，有如下修饰符：
- stop
- prevent
- self
- once
- capture
- passive
- native
##### stop
阻止了事件冒泡，相当于调用了`event.stopPropagation`方法

```
<div @click="shout(2)">
  <button @click.stop="shout(1)">ok</button>
</div>
//只输出1
```

##### [#](https://vue3js.cn/interview/vue/modifier.html#prevent)prevent
阻止了事件的默认行为，相当于调用了`event.preventDefault`方法

```
<form v-on:submit.prevent="onSubmit"></form>
```


##### [#](https://vue3js.cn/interview/vue/modifier.html#self)self
只当在 `event.target` 是当前元素自身时触发处理函数

```
<div v-on:click.self="doThat">...</div>
```

> 使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 `v-on:click.prevent.self` 会阻止**所有的点击**，而 `v-on:click.self.prevent` 只会阻止对元素自身的点击

#### [once](https://vue3js.cn/interview/vue/modifier.html#once)

绑定了事件以后只能触发一次，第二次就不会触发

```
<button @click.once="shout(1)">ok</button>
```

##### [#](https://vue3js.cn/interview/vue/modifier.html#capture)capture
使事件触发从包含这个元素的顶层开始往下触发

```
<div @click.capture="shout(1)">
    obj1
<div @click.capture="shout(2)">
    obj2
<div @click="shout(3)">
    obj3
<div @click="shout(4)">
    obj4
</div>
</div>
</div>
</div>
// 输出结构: 1 2 4 3 
```


##### [#](https://vue3js.cn/interview/vue/modifier.html#passive)passive

在移动端，当我们在监听元素滚动事件的时候，会一直触发`onscroll`事件会让我们的网页变卡，因此我们使用这个修饰符的时候，相当于给`onscroll`事件整了一个`.lazy`修饰符

```
<!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
<!-- 而不会等待 `onScroll` 完成  -->
<!-- 这其中包含 `event.preventDefault()` 的情况 -->
<div v-on:scroll.passive="onScroll">...</div>
```

> 不要把 `.passive` 和 `.prevent` 一起使用,因为 `.prevent` 将会被忽略，同时浏览器可能会向你展示一个警告。
> 
> `passive` 会告诉浏览器你不想阻止事件的默认行为

##### [#](https://vue3js.cn/interview/vue/modifier.html#native)native

让组件变成像`html`内置标签那样监听根元素的原生事件，否则组件上使用 `v-on` 只会监听自定义事件

```
<my-component v-on:click.native="doSomething"></my-component>
```


> 使用.native修饰符来操作普通HTML标签是会令事件失效的


#### 鼠标按钮修饰符
鼠标按钮修饰符针对的就是左键、右键、中键点击，有如下：
- left 左键点击
- right 右键点击
- middle 中键点击

```
<button @click.left="shout(1)">ok</button>
<button @click.right="shout(1)">ok</button>
<button @click.middle="shout(1)">ok</button>
```

#### 键盘修饰符
键盘修饰符是用来修饰键盘事件（`onkeyup`，`onkeydown`）的，有如下：

`keyCode`存在很多，但`vue`为我们提供了别名，分为以下两种：

- 普通键（enter、tab、delete、space、esc、up...）
- 系统修饰键（ctrl、alt、meta、shift...）

#### v-bind修饰符
v-bind修饰符主要是为属性进行操作，用来分别有如下：
- `.prop` - 作为一个 DOM property 绑定而不是作为 attribute 绑定。([差别在哪里？](https://stackoverflow.com/questions/6003819/properties-and-attributes-in-html#answer-6004028))
- `.camel` - (2.1.0+) 将 kebab-case attribute 名转换为 camelCase。(从 2.1.0 开始支持)
- `.sync` (2.3.0+) 语法糖，会扩展成一个更新父组件绑定值的 `v-on` 侦听器。

##### [#](https://vue3js.cn/interview/vue/modifier.html#async)sync

能对`props`进行一个双向绑定

```
//父组件
<comp :myMessage.sync="bar"></comp> 
//子组件
this.$emit('update:myMessage',params);
```


以上这种方法相当于以下的简写

```
//父亲组件
<comp :myMessage="bar" @update:myMessage="func"></comp>
func(e){
 this.bar = e;
}
//子组件js
func2(){
  this.$emit('update:myMessage',params);
}
```


使用`async`需要注意以下两点：

- 使用`sync`的时候，子组件传递的事件名格式必须为`update:value`，其中`value`必须与子组件中`props`中声明的名称完全一致
  
- 注意带有 `.sync` 修饰符的 `v-bind` 不能和表达式一起使用
  
- 将 `v-bind.sync` 用在一个字面量的对象上，例如 `v-bind.sync=”{ title: doc.title }”`，是无法正常工作的
  

##### [#](https://vue3js.cn/interview/vue/modifier.html#props)props

设置自定义标签属性，避免暴露数据，防止污染HTML结构

```
<input id="uid" title="title1" value="1" :index.prop="index">
```

##### [#](https://vue3js.cn/interview/vue/modifier.html#camel)camel

将命名变为驼峰命名法，如将`view-Box`属性名转换为 `viewBox`

```
<svg :viewBox="viewBox"></svg>
```


### v-model 

#### 原理
我们在 vue 项目中主要使用 v-model 指令在表单 input、textarea、select 等元素上创建双向数据绑定，我们知道 v-model 本质上不过是语法糖，v-model 在内部为不同的输入元素使用不同的属性并抛出不同的事件：
* text 和 textarea 元素使用 value 属性和 input 事件；
* checkbox 和 radio 使用 checked 属性和 change 事件；
* select 使用value属性和change事件。
以 input 表单元素为例：
```vue
<input v-model='something'>
    
//相当于
<input v-bind:value="something" v-on:input="something = $event.target.value">



<input type="checkbox" v-model="checkboxVal" />
<input type="checkbox" v-bind:checked="checkboxVal" v-on:change="checkboxVal=$event.target.checked"/>

<select type="select" v-model="selectVal" />
<select v-bind:value="selectVal" v-on:change="selectVal=$event.target.value" />
```
如果在自定义组件中，v-model 默认会利用名为 value 的 prop 和名为 input 的事件，如下所示：
```js
父组件：
<ModelChild v-model="message"></ModelChild>

子组件：
<div>{{value}}</div>

props:{
    value: String
},
methods: {
  test1(){
     this.$emit('input', '小红')
  },
}
```

但是像单选框、复选框等类型的输入控件可能会将 `value` attribute 用于[不同的目的](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Value)。<span style="color:blue;">**`model` 选项**可以用来声明v-model传递的属性和事件名称</span>,仍需要在组件的props选项中声明这个属性.

```html

<script>
Vue.component('base-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean  //props中需要接收绑定传递的v-model属性
  },
  template: `
  	<input
  		type="checkbox"
  		v-bind:checked="checked"
  		v-on:change="$emit('change', $event.target.value)"
  `
})
</script>  


<base-checkbox v-model="test"></base-checkbox>
```


#### 在组件上使用


### Vue自定义指令
#### 是什么
看到的`v-`开头的行内属性，都是指令，不同的指令可以完成或实现不同的功能

除了核心功能默认内置的指令 (`v-model` 和 `v-show`)，`Vue` 也允许注册自定义指令

指令使用的几种方式：
```js
//会实例化一个指令，但这个指令没有参数 
`v-xxx`

// -- 将值传到指令中
`v-xxx="value"`  

// -- 将字符串传入到指令中，如`v-html="'<p>内容</p>'"`
`v-xxx="'string'"` 

// -- 传参数（`arg`），如`v-bind:class="className"`
`v-xxx:arg="value"` 

// -- 使用修饰符（`modifier`）
`v-xxx:arg.modifier="value"` 
```


#### 如何实现
注册一个自定义指令有全局注册与局部注册

全局注册主要是通过`Vue.directive`方法进行注册
`Vue.directive`第一个参数是指令的名字（不需要写上`v-`前缀），第二个参数可以是对象数据，也可以是一个指令函数
```
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()  // 页面加载完成之后自动让输入框获取到焦点的小功能
  }
})
```

局部注册通过在组件`options`选项中设置`directive`属性
```
directives: {
  focus: {
    // 指令的定义
    inserted: function (el) {
      el.focus() // 页面加载完成之后自动让输入框获取到焦点的小功能
    }
  }
}
```

自定义指令也像组件那样存在钩子函数：
- `bind`：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
  
- `inserted`：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)
  
- `update`：所在组件的 `VNode` 更新时调用，但是可能发生在其子 `VNode` 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新
  
- `componentUpdated`：指令所在组件的 `VNode` 及其子 `VNode` 全部更新后调用
  
- `unbind`：只调用一次，指令与元素解绑时调用
  

所有的钩子函数的参数都有以下：

- `el`：指令所绑定的元素，可以用来直接操作 `DOM`
- `binding`：一个对象，包含以下 `property`：
    - `name`：指令名，不包括 `v-` 前缀。
    - `value`：指令的绑定值，例如：`v-my-directive="1 + 1"` 中，绑定值为 `2`。
    - `oldValue`：指令绑定的前一个值，仅在 `update` 和 `componentUpdated` 钩子中可用。无论值是否改变都可用。
    - `expression`：字符串形式的指令表达式。例如 `v-my-directive="1 + 1"` 中，表达式为 `"1 + 1"`。
    - `arg`：传给指令的参数，可选。例如 `v-my-directive:foo` 中，参数为 `"foo"`。
    - `modifiers`：一个包含修饰符的对象。例如：`v-my-directive.foo.bar` 中，修饰符对象为 `{ foo: true, bar: true }`
- `vnode`：`Vue` 编译生成的虚拟节点
- `oldVnode`：上一个虚拟节点，仅在 `update` 和 `componentUpdated` 钩子中可用

> 除了 `el` 之外，其它参数都应该是只读的，切勿进行修改。如果需要在钩子之间共享数据，建议通过元素的 `dataset` 来进行

例子:
```
<div v-demo="{ color: 'white', text: 'hello!' }"></div>
<script>
    Vue.directive('demo', function (el, binding) {
    console.log(binding.value.color) // "white"
    console.log(binding.value.text)  // "hello!"
    })
</script>
```


#### 应用场景
这里给出几个自定义指令的案例：
- 表单防止重复提交
- 图片懒加载
- 一键 Copy的功能


##### 权限控制
[[Vue2 doc#^5b5ab6]]

##### 表单防止重复提交
```js
Vue.directive('throttle', {
	bind:(el,binding) => {
		let throttleTime = binding.value
		if (!throttleTime) {
			throttleTime = 2000
		}
		let timeId;
		el.addEventListener('click', event => {
			if (!timeId) {
				timeId = setTimeout(() => {
					timeId = null
				},throttleTime)
			} else {
				event && event.stopImmediatePropagation()
			}
		}, true) // true 表示在捕获阶段处理事件
	}
})
```


##### 一键copy功能
```js
import { Message } from 'ant-design-vue';

const vCopy = { //
  /*
    bind 钩子函数，第一次绑定时调用，可以在这里做初始化设置
    el: 作用的 dom 对象
    value: 传给指令的值，也就是我们要 copy 的值
  */
  bind(el, { value }) {
    el.$value = value; // 用一个全局属性来存传进来的值，因为这个值在别的钩子函数里还会用到
    el.handler = () => {
      if (!el.$value) {
      // 值为空的时候，给出提示，我这里的提示是用的 ant-design-vue 的提示，你们随意
        Message.warning('无复制内容');
        return;
      }
      // 动态创建 textarea 标签
      const textarea = document.createElement('textarea');
      // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域
      textarea.readOnly = 'readonly';
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      // 将要 copy 的值赋给 textarea 标签的 value 属性
      textarea.value = el.$value;
      // 将 textarea 插入到 body 中
      document.body.appendChild(textarea);
      // 选中值并复制
      textarea.select();
      // textarea.setSelectionRange(0, textarea.value.length);
      const result = document.execCommand('Copy');
      if (result) {
        Message.success('复制成功');
      }
      document.body.removeChild(textarea);
    };
    // 绑定点击事件，就是所谓的一键 copy 啦
    el.addEventListener('click', el.handler);
  },
  // 当传进来的值更新的时候触发
  componentUpdated(el, { value }) {
    el.$value = value;
  },
  // 指令与元素解绑的时候，移除事件绑定
  unbind(el) {
    el.removeEventListener('click', el.handler);
  },
};

export default vCopy;
```


### Vue中的过滤器
#### 是什么
对数据进行格式化处理

#### 如何使用
`vue`中的过滤器可以用在两个地方：双花括号插值和 `v-bind` 表达式，过滤器应该被添加在 `JavaScript`表达式的尾部，由“管道”符号指示：
```
<!-- 在双花括号中 -->
{{ message | capitalize }}

<!-- 在 `v-bind` 中 -->
<div v-bind:id="rawId | formatId"></div>
```

#### 定义filter
在组件的选项中定义本地的过滤器
```
filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
```

定义全局过滤器：
```
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

new Vue({
  // ...
})
```


#### 特点
- 局部过滤器优先于全局过滤器被调用
- 一个表达式可以使用多个过滤器。过滤器之间需要用管道符“|”隔开。其执行顺序从左往右


#### 应用场景
需要用到过滤器的地方有很多，比如单位转换、数字打点、文本格式化、时间格式化之类的等

**千分位符**
```
Vue.filter('toThousandFilter', function (value) {
     if (!value) return ''
     value = value.toString()
     return .replace(str.indexOf('.') > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g, '$1,')
})
```


#### 原理分析
> https://vue3js.cn/interview/vue/filter.html#%E4%BA%8C%E3%80%81%E5%A6%82%E4%BD%95%E7%94%A8:~:text=%23-,%E5%9B%9B%E3%80%81%E5%8E%9F%E7%90%86%E5%88%86%E6%9E%90,-%E4%BD%BF%E7%94%A8%E8%BF%87%E6%BB%A4%E5%99%A8


### Vue中style scoped原理
Vue中的`scoped`样式是一种用于组件样式隔离的重要特性。以下是它的工作原理：
1. 编译过程： 当你在Vue组件中使用`<style scoped>`时，Vue会在编译阶段处理这些样式。
2. 添加唯一属性： Vue会为组件的根元素添加一个唯一的属性，类似于`data-v-f3f3eg9`。
3. 选择器转换： 在编译过程中，所有的选择器都会被转换。例如：
```css
.example { color: red; }
```
`
会被转换为：
```css
.example[data-v-f3f3eg9] { color: red; }
```

4. HTML元素标记： 组件模板中的所有HTML元素也会被添加这个唯一属性。
5. 样式隔离： 由于选择器现在包含了唯一属性，样式就只会应用到拥有对应属性的元素上，从而实现了样式隔离。
6. 深度选择器： 如果你需要影响子组件的样式，可以使用`::v-deep`或`/deep/`。
优点：
- 防止样式冲突
- 提高代码可维护性

缺点：
- 略微增加了编译时间和生成的CSS大小
需要注意的是，`scoped`并不能阻止子组件的根元素被父组件的样式影响。


### Vue.use
1. 自定义Vue插件需要向外暴露对象或者是函数
2. 如果向外暴露对象的话，对象中必须有install方法
3. 如果向外暴露的是函数的话，那么该函数本身就是install方法
4. 当Vue.use()的时候，会自动调用install方法，并且将Vue对象作为实参传入到install方法中

```js

//main.js
import Directives from './directives'
Vue.use(Directives)


//directives/index.js
import copy from "./copy";
import longpress from "./longpress";
import debounce from "./debounce";
import emoji from "./emoji";
import lazyLoad from "./lazyLoad";
import permission from "./permission";
import waterMarker from "./waterMaker";
import draggable from "./draggable";

  

const directives = {
	copy,
	longpress,
	debounce,
	emoji,
	lazyLoad,
	permission,
	waterMarker,
	draggable
};

export default {
	install(Vue) {
		Object.keys(directives).forEach((key) => {
			Vue.directive(key, directives[key]);
		});
	}
};
```






### 父子组件的生命周期

```js
子组件初始化: 在父组件beforeMount-->mounted之间 执行beforeCreated->mounted4个钩子
子组件更新: 在父组件beforeUpdate->updated之间 执行2个钩子
子组件死亡: 在父组件beforeDestroy->destroyed之间 执行2个钩子
```

- 初始化:
  - beforeCreate
  - created
  - beforeMount
  - *--child beforeCreate*
  - *--child created*
  - *--child beforeMount*
  - *--child mounted*
  - mounted
- 更新:
  - beforeUpdate
  - *--child beforeUpdate*
  - *--child updated*
  - updated
- 死亡:
  - beforeDestroy
  - *-- child beforeDestroy*
  - *-- child destroyed*
  - destroyed

### 带缓存的路由组件生命周期keep-alive

```js
路由组件添加<keep-alive></keep-alive>之后,在mounted之后会出现activated
总结:路由组件生命钩子activated是在挂在mounted之后.离开的路由组件生命周期钩子deactivated是在进入的路由组件生命钩子mounted之前调用

(路由组件,activated是在自身mounted之后;deactivated是在进入其他路由组件mounted之前调用)
当前组件激活总是最后一个

 同级路由组件:离开一个进入一个 ++表示进入的路由组件,没有加的表示离开的路由组件
++beforeCreate
++created
++beforeMount
 deactivated
++mounted
++activated
```



- 初始化:
  - ...
  - mounted
  - *--Child activated*
  - activated
- 路由离开
  - *--Child deactivated*
  - deactivated
- 路由回来
  - *--Child activated*
  - activated

### 捕获子组件错误的勾子

- 子组件执行抛出错误
  - errorCaptured

```js
父组件中调用这个钩子:
errorCaptured(err,child,info){
    console.log('errorCaptured')
    console.log(err,child,info)  //打印的错误是灰色的
    return false;//不再向外传递,说明当前已经处理了错误
}
```



### 各个生命周期勾子说明

![vue组件生命周期详图.png](https://i.loli.net/2021/04/03/t4AIhPlnpNe8i9d.png)

(1) beforeCreate(): 在实例初始化之后调用, data和methods都还没有初始化完成, 通过this不能访问

初始化data与methods/computed

(2) created(): 此时data和methods都已初始化完成, 可以通过this去操作, 可以在此发ajax请求

编译模板

(3) beforeMount(): 模板已经在内存中编译, 但还没有挂载到页面上, 不能通过ref找到对应的标签对象

插入到界面上显示

(4) mounted(): 页面已经初始显示, 可以通过ref找到对应的标签, 也可以选择此时发ajax请求



n次更新数据

(5) beforeUpdate(): 在数据更新之后, 界面更新前调用, 只能访问到原有的界面

更新界面

(6) updated(): 在界面更新之后调用, 此时可以访问最新的界面



**销毁组件/ v-if隐藏/离开不缓存的路由组件**
(7) beforeDestroy(): 实例销毁之前调用, 此时实例仍然可以正常工作
(8) destroyed(): Vue 实例销毁后调用, 实例已经无法正常工作了
(9) deactivated():组件失活, 但没有死亡
(10) activated(): 组件激活, 被复用
(11) errorCaptured(): 用于捕获子组件的错误,return false可以阻止错误向上冒泡(传递)












### vue中对象响应式处理和数组响应式处理的区别

#### 对象

对于已经创建的实例，Vue 不允许动态添加根级别的响应式 property。但是，可以使用 `Vue.set(object, propertyName, value)` 方法或 `vm.$set`实例方法, 向嵌套对象添加响应式 property

需要为已有对象赋值多个新 property，比如使用 `Object.assign()` 或 `_.extend()`

#### 数组

Vue 不能检测以下数组的变动：

1. 当你利用索引直接设置一个数组项时，例如：`vm.items[indexOfItem] = newValue`
2. 当你修改数组的长度时，例如：`vm.items.length = newLength`

为了解决第一类问题，以下两种方式:

```
// Vue.set  vm.$set
Vue.set(vm.items, indexOfItem, newValue)
vm.$set(vm.items, indexOfItem, newValue)

// Array.prototype.splice
vm.items.splice(indexOfItem, 1, newValue)

**push, pop, unshift, shift, splice, reverse, sort**
```



为了解决第二类问题，你可以使用 `splice`：

vm.items.splice(newLength)









### Vue.set和Vue.delete的基本原理

#### 背景

Vue.set和Vue.delete是Vue提供的两个API，用于向响应式对象添加或删除属性。

由于Vue在初始化实例时会对property执行getter/setter转换，所以property必须在data对象上存在才能让Vue将它转换为响应式的。这意味着，对于已经创建的实例，Vue不允许动态添加根级响应式属性。但是，可以使用Vue.set方法向嵌套对象添加响应式属性。此外，还可以使用vm.$set实例方法，这也是全局Vue.set方法的别名。

同理，Vue.delete方法用于删除对象的属性。如果该属性是响应式的，则删除后视图也会更新。此外，还可以使用vm.$delete实例方法，这也是全局Vue.delete方法的别名。



#### 语法

Vue.set

Vue.set(obj, key, val) 的作用是在对象 obj 中添加属性 key 并将其值设置为 val 。如果 obj 是响应式的，当添加了新属性后，新属性也将是响应式的，并触发视图重新渲染。

例如：

```
Vue.set(vm.obj, 'newKey', 'newValue');
```

Vue.delete

Vue.delete(obj, key) 的作用是删除对象 obj 中的属性 key。如果 obj 是响应式的，则删除后也会立即触发视图重新渲染。

例如：

```
Vue.delete(vm.obj, 'keyToDelete');
```

#### 原理

Vue.set 和 Vue.delete 的基本原理是**通过调用 Observer 对象上的 defineReactive 方法来实现的**。当给响应式对象添加或删除属性时，Observer 会监听到对象的变化并通知 Dep 对象，Dep 再通知 Watcher 更新视图。

总之，Vue.set 和 Vue.delete 提供了一种方便且安全地修改 Vue 实例中响应式数据的方式。




### vue2中new Vue之后做了什么事情?

在Vue2中，当我们使用new Vue()创建一个Vue实例时，会发生以下事情：

1. 初始化：Vue实例的_init方法会被调用。这个方法会合并配置，初始化生命周期，初始化事件，初始化渲染，初始化data、props、computed、watcher等。
2. 挂载：如果创建实例时传入了el选项，实例将立即进入挂载阶段。否则，需要手动调用vm.$mount方法才能触发挂载。在挂载阶段，Vue会将模板编译成渲染函数，并生成虚拟DOM，最终更新DOM。
3. 渲染更新：当实例中的响应式数据发生变化时，会触发重新渲染和更新DOM。
总之，在Vue2中，new Vue()会创建一个Vue实例，并执行初始化和挂载操作。





### 说说Vue与组件间之间的关系

在Vue中，组件是可复用的Vue实例，它们与新创建的Vue实例有着类似的选项，例如data、computed、watch、methods以及生命周期钩子等。

组件可以分为全局组件和局部组件。全局组件可以在任何新创建的Vue根实例的模板中使用，而局部组件则只能在注册它们的实例的模板中使用。

Vue通过组件化的方式实现了正交性（Orthogonality），即组件只关心自己的内部状态和行为，不依赖于其他组件的状态和行为。这种设计方式使得我们可以更加方便地维护和重用组件，同时也提高了应用的可读性和可测试性。

总之，组件是Vue中的核心概念，它们是构建用户界面的基本单元。组件可以嵌套、复用和传递数据，使得我们可以更加方便地构建复杂的应用程序。



### scoped样式的作用和原理

当 `<style>` 标签有 `scoped` 属性时，它的 CSS 只作用于当前组件中的元素。

使用 `scoped` 后，父组件的样式将不会渗透到子组件中。不过一个子组件的根节点会同时受其父组件的 scoped CSS 和子组件的 scoped CSS 的影响。这样设计是为了让父组件可以从布局的角度出发，调整其子组件根元素的样式。

**原理**

在编译阶段，Vue会为每个组件生成一个唯一的属性（例如data-v-xxxxx），并将其添加到组件模板中的所有元素上。同时，Vue还会修改组件中的CSS选择器，在每个选择器后面添加一个对应的属性选择器（例如[data-v-xxxxx]）。这样，组件中的样式就只能作用于拥有对应属性的元素上。



### 深度作用域选择器的作用和原理

当我们使用scoped样式时，有时候我们需要为子组件中的元素定义样式。但是由于scoped样式的限制，我们不能直接在父组件中为子组件中的元素定义样式。这时候，我们就可以使用深度作用域选择器。

深度作用域选择器有两种形式：>>>和/deep/(`::v-deep`)。它们的作用是一样的，都是用来穿透scoped样式的限制，为子组件中的元素定义样式。


### vue的插件是什么，如何定义？如何使用？

Vue的插件是一个可以扩展Vue功能的功能模块。它们允许您在全局或组件级别注册新的全局功能、指令、过滤器或自定义组件，以及为现有Vue实例添加属性或方法。

插件通常用来为 Vue 添加全局功能。插件的功能范围没有严格的限制——一般有下面几种：

1. 添加全局方法或者 property。如：[vue-custom-element](https://github.com/karol-f/vue-custom-element)
2. 添加全局资源：指令/过滤器/过渡等。如 [vue-touch](https://github.com/vuejs/vue-touch)
3. 通过全局混入来添加一些组件选项。如 [vue-router](https://github.com/vuejs/vue-router)
4. 添加 Vue 实例方法，通过把它们添加到 `Vue.prototype` 上实现。
5. 一个库，提供自己的 API，同时提供上面提到的一个或多个功能。如 [vue-router](https://github.com/vuejs/vue-router)



#### 使用插件

通过全局方法 `Vue.use()` 使用插件。它需要在你调用 `new Vue()` 启动应用之前完成：

```vue
// 调用 `MyPlugin.install(Vue)`
Vue.use(MyPlugin)

new Vue({
  // ...组件选项
})

```

也可以传入一个可选的选项对象：

```vue
Vue.use(MyPlugin, { someOption: true })
```




### 混入是什么? 如何定义?如何使用?

一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。

同名钩子函数将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子**之前**调用。

数据对象data在内部会进行递归合并，并在发生冲突时以组件数据优先

值为对象的选项，例如 `methods`、`components` 和 `directives`，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对。



使用

```vue
var mixin = {
  data: function () {
    return {
      message: 'hello',
      foo: 'abc'
    }
  }
}

new Vue({
  mixins: [mixin],
  data: function () {
    return {
      message: 'goodbye',
      bar: 'def'
    }
  },
  created: function () {
    console.log(this.$data)
    // => { message: "goodbye", foo: "abc", bar: "def" }
  }
})
```



### vuex的数据持久化是什么？可以解决什么问题

Vuex是一个专为Vue.js应用程序开发的状态管理模式。它可以集中管理应用程序中所有组件的状态，并以一种可预测的方式进行状态变更。

然而，Vuex的状态存储是响应式的，当页面刷新或关闭时，Vuex的状态将会丢失。这就意味着，如果我们希望在页面刷新或关闭后仍然保留Vuex的状态，就需要进行数据持久化。

数据持久化指的是将Vuex的状态保存到客户端，例如localStorage、sessionStorage或cookie等，以便在页面刷新或关闭后仍然能够访问这些状态。

数据持久化可以解决Vuex状态丢失的问题。例如，我们可以在用户登录后将用户信息保存到Vuex中，并进行数据持久化。这样，即使用户刷新页面或关闭浏览器，我们仍然能够访问用户信息。

总之，Vuex的数据持久化指的是将Vuex的状态保存到客户端，以便在页面刷新或关闭后仍然能够访问这些状态。它可以解决Vuex状态丢失的问题。



### Vue发开中遇到的坑?

'就地复用'的问题
> vue在用v-if v-else渲染两个相同的按钮，一个绑定了事件，另外一个没有绑定事件。当渲染状态切换的时候，会导致未绑定事件的按钮也绑定上了事件。
> 原因是有的vue版本在没给条件渲染的元素加上key标识时候会默认复用元素提升渲染能力，导致事件被错误的绑定上另一个按钮。解决方案：更换高版本vue，加上key标识两个按钮。




### 编程式路由导航和声明式路由导航区别？

- 编程式路由导航：通过代码进行路由的跳转，在组件内部通过 `$router` 对象来操作路由，使用 `$router.push`、`$router.replace` 和 `$router.go` 等方法来实现路由的切换，主要适用于需要在某些场景下进行特定路由跳转的情况。
- 声明式路由导航：在模板中使用 Vue Router 提供的组件（如 `<router-link>`）来实现路由的跳转，通过设置 `to` 属性来指定目标路由地址，当用户点击这些组件时，路由会自动进行跳转，非常适用于需要在页面间进行切换的场景。



### 编程式路由导航重复导航报错？

### 缓存式路由组件？

- 当离开时, 路由组件会自动销毁, 再跳转回来, 需要重新创建
- 目标: 能不能让路由组件离开时不销毁, 再回来时, 直接复用
- 解决: 使用`<keep-alive>来包含<router-view>`, 就能让对应的路由组件离开时不销毁
- 作用: 能复活组件对象, 包含它的所有状态相关数据



### 路由组件间通信方式

### 路由的props如何指定?

### 组件内如果监听动态路由的数据改变

* 监听 `$route` 对象的变化

* 监听 `$route.params` 对象内的变化
* beforeRouteUpdate(to,from,next)



# Vue3面试题

## vue2和vue3的相关问题

### vue2和vue3的区别
1.**双向数据绑定的原理不同**
* vue2利用`Object.defineProperty`对数据进行劫持,结合发布/订阅模式方式来实,要通过遍历方式监听每一个属性
* vue3利用Proxy对数据代理.不需要遍历,自动监听
2.**根节点不同**
* vue2只有一个根节点
* vue3支持多个根节点
3.**组合式api和选项式api**
* vue2使用选项式api,将数据和逻辑进行了分离,不相关的数据放在一起,项目复杂以后,维护难度大;
* vue3支持组合api,更好的组织和复用代码.
4.**生命周期不同**
5.**对ts支持不同**
6.**性能增强**
* vue3重写了虚拟dom算法,比2更快;添加了模块化删除和tree-shaking,降低了体积.
7.其它:
* vue3使用hooks代替mixin
* v-model应用于组件时, 监听的事件和传递的值会改变(value/iput  modelValue/update:modelValue); v-model可以在同一组件上绑定多个

### vue3比2的优势
性能更好，打包体积更小(tree-shaking)，更好的ts支持，更好的代码组织，更好的逻辑抽离


### 生命周期介绍
选项式和组合式的生命周期名称有所不同,
![[Pasted image 20240925105704.png]]



### Vue2/Vue3通信方式比较

#### 1.Props
* vue2和vue3基本相同
```js
//vue2
<!-- 父组件 -->
<Child :message="parentMsg" />

<!-- 子组件 -->
<script>
export default {
  props: ['message']
}
</script>
```


#### 2.自定义事件
* vue2: `$emit` + `v-on`/`.sync`修饰符
* vue3: `$emit` + `v-on` / `v-model`增强
```js
//vue3
<!-- Vue2 -->
<Child @update="handleUpdate" />
<Child :title.sync="pageTitle" />  <!-- .sync语法 -->

<!-- Vue3 -->
<Child @update="handleUpdate" />
<Child v-model:title="pageTitle" /> <!-- 替代.sync -->
```

#### 3.provide/inject
- **Vue2**: 选项式API，非响应式(除非使用对象)
- - **Vue3**: 组合式API，可配合 `ref`/`reactive` 实现响应式


#### 4.事件总线
- Vue2常用方式：创建空的Vue实例作为事件中心
- Vue3不再推荐事件总线模式, 推荐使用替代方案
	- 使用 `mitt` 或 `tiny-emitter` 第三方库
	- 使用 `provide/inject` + 响应式状态


#### 5.`$attrs`/`$listeners` vs `$attrs`

- **Vue2**: 分离属性和事件
- **Vue3**: 合并为 `$attrs` (包含属性和事件)
```js
//vue2
<Child v-bind="$attrs" v-on="$listeners" />

//vue3
<Child v-bind="$attrs" />
```

#### 6.`$parent/$children` 和模板引用(vue3)
- **Vue2**: 直接访问父/子实例
- - **Vue3**: 推荐使用模板引用
```js
//vue2
this.$parent.methodName()
this.$children[0].methodName()

//vue3
<Child ref="childRef" />

<script setup>
import { ref } from 'vue'
const childRef = ref(null)
childRef.value.methodName()
</script>
```


| 通信方式                    | Vue2 实现                                                       | Vue3 实现                                    | 变化说明                                                        |
| ----------------------- | ------------------------------------------------------------- | ------------------------------------------ | ----------------------------------------------------------- |
| **1. Props**            | `props: ['message']`                                          | `defineProps(['message'])`                 | 基本一致，Vue3 支持 `defineProps` 编译器宏                             |
| **2. 自定义事件**            | `this.$emit('event')` + `@event="handler"`                    | `defineEmits(['event'])` + `emit('event')` | Vue3 引入 `defineEmits` 编译器宏                                  |
| **3. 全局事件总线**           | `const bus = new Vue()` + `bus.$on`/`bus.$emit`               | 推荐使用 `mitt` 或 `tiny-emitter` 库             | Vue3 移除了 `$on`/`$off`，不再推荐事件总线模式                            |
| **4. v-model**          | `value` prop + `input` 事件                                     | `modelValue` prop + `update:modelValue` 事件 | Vue3 支持多个 `v-model`（如 `v-model:title`）                      |
| **5. .sync**            | `:title.sync="val"` → `update:title` 事件                       | 被 `v-model:title` 替代                       | Vue3 移除了 `.sync`，功能合并到增强的 `v-model`                         |
| **6. $attrs**           | 仅包含非 props 的属性                                                | 包含所有非 props 的属性和事件                         | Vue3 的 `$attrs` 包含属性和事件（合并了 Vue2 的 `$attrs` + `$listeners`） |
| **7. $listeners**       | 单独包含父组件传递的事件                                                  | 已移除，合并到 `$attrs`                           | Vue3 不再需要单独处理                                               |
| **8. ref/ref/children** | `this.$refs.child` / `this.$children`                         | `ref` 模板引用（`<Child ref="childRef">`）       | Vue3 移除 `$children`，推荐使用模板引用                                |
| **9. $parent**          | `this.$parent` 访问父实例                                          | 仍存在但不推荐使用                                  | Vue3 推荐使用 `provide/inject` 或 props 替代                       |
| **10. Vuex**            | `this.$store` + `mapState/mapGetters/mapMutations/mapActions` | `useStore()` + 组合式 API 使用                  | Vue3 推荐使用 Pinia，但 Vuex 4 仍可用                                |
| **11. provide/inject**  | 选项式 API，默认非响应式                                                | 组合式 API，支持响应式数据                            | Vue3 可配合 `ref`/`reactive` 实现响应式                             |
| **12. 插槽**              | `<slot>` + `<template v-slot:name>`                           | `<slot>` + `<template #name>`（语法糖）         | Vue3 插槽语法更简洁，作用域插槽原理相同                                      |



### vFor与vIf的优先级
| 特性   | Vue2             | Vue3              |
| ---- | ---------------- | ----------------- |
| 优先级  | `v-for` > `v-if` | `v-if` > `v-for`  |
| 设计意图 | 兼容旧代码            | 更符合直觉             |
| 推荐用法 | 用计算属性过滤          | 用计算属性或嵌套 template |
| 同时使用 | 可能性能问题           | 会直接报错             |
**最佳实践**
* **避免在同一元素上同时使用**
* **避免在同一元素上同时使用**
* **Vue3 中的特殊情况处理**：
	* - 如果需要访问循环变量，必须确保 `v-if` 不依赖循环变量
    
- 或者使用嵌套方式：

### vue2中的指令原理和vue3中的有什么区别
#### 1. **钩子函数名称与生命周期调整**
- **Vue2**：指令通过 `bind`、`inserted`、`update`、`componentUpdated`、`unbind` 等钩子函数实现。
- ​**Vue3**：钩子函数名称**重命名**以对齐组件生命周期：
    
    - `bind` → `beforeMount`
    - `inserted` → `mounted`
    - `update` → ​**移除**​（由 `beforeUpdate` 和 `updated` 替代）
    - `componentUpdated` → `updated`
    - `unbind` → `unmounted`
    新增 `beforeUpdate` 钩子，在组件更新前触发。
#### 2.**参数传递与上下文变化**
- ​**Vue2**：钩子接收 `el`, `binding`, `vnode`, `oldVnode` 等参数。
- ​**Vue3**：参数调整为：
    - 移除 `vnode` 和 `oldVnode`，改为通过 `binding.instance` 访问组件实例。
    - `binding` 对象新增 `instance` 属性（指向组件实例）。
    - 移除了 `vnode` 的直接传递，需通过 `el.__vueParentComponent` 访问（不推荐直接操作）。

#### 3.**自定义指令注册**

- ​**Vue2**：全局指令通过 `Vue.directive()` 注册。
- ​**Vue3**：通过应用实例 `app.directive()` 注册，更符合模块化设计。

```js
// Vue2 指令
Vue.directive('focus', {
  bind(el, binding) {
    el.style.color = binding.value;
  },
  inserted(el) {
    el.focus();
  }
});

// Vue3 指令
app.directive('focus', {
  beforeMount(el, binding) {
    el.style.color = binding.value;
  },
  mounted(el) {
    el.focus();
  },
  beforeUpdate(el, binding) {
    // 响应式数据更新前逻辑
  }
});
```

### vue2中的v-model和vue3的有什么区别?

| 特性         | Vue2          | Vue3                |
| ---------- | ------------- | ------------------- |
| 默认 prop    | `value`       | `modelValue`        |
| 默认 event   | `input`       | `update:modelValue` |
| 多个 v-model | 不支持           | 支持                  |
| 自定义修饰符     | 不支持           | 支持                  |
| 修改默认行为     | 使用 `model` 选项 | 直接在 v-model 后指定参数   |


### 选项式和组合式的区别
**选项式api**
* 通过定义`data、computed、watch、method`等属性与方法，共同处理页面逻辑；
* 组件复杂后,组件难以阅读和后期维护成本变高；
**组合式api**
* 组件根据逻辑功能来组织，一个功能所定义的所有API会放在一起（高内聚，低耦合)
* 解决vue2业务逻辑碎片化,实现聚合处理;逻辑复用
**总结:**
- 在逻辑组织和逻辑复用这方面，组合式API是优于选项式API的；
- 组合式API中见不到this的使用，减少了this指向不明的情况；
- 组合式API几乎都是函数，会有更好的类型推断；


### vue3使用proxy代替defineProperty
- `Object.defineProperty` 只能遍历对象属性进行劫持；
- `Proxy` 直接可以劫持整个对象，便返回一个新对象，我们可以操作新对象达到响应式目的；
- `Proxy` 可以直接监听数组的变化；
- Proxy有13种拦截方法，不限于apply、ownKeys、deleteProperty、has等等，这是Object.defineProperty不具备的；

 

## watch和watchEffect区别
* 监听数据源
* 访问值的区别
* 立即执行的区别

1. `watch`：既要指明监听数据的源，也要指明监听的回调； `watchEffect`：可以自动监听数据源作为依赖,监听的回调中用到哪个数据，那就监听哪个数据；
2. `watch` 可以访问改变前后的值，`watchEffect` 只能获取改变后的值；
3. `watch`运行的时候 不会立即执行，值改变后才会执行，而`watchEffect`运行后可立即执行，这一点可以通过`watch`的配置项`immeriate`改变；


4. `watchEffect` 有点像 `computed`：
    - `computed`注重的是计算出来的值（回调函数的返回值），所以必须写返回值；
    - `watchEffect`注重的是过程（回调函数的函数体），所以不用写返回值；
        - `watchEffect`所指定的回调中用到的数据只要发生变化，则直接重新执行回调；
5. Vue3与Vue2中的watch配置项一致，但也有两个小坑：
    - 监听`reactive`定义的响应式数据时（监听数据整体），`oldVal`无法正确获取到，强制开启深度监听，deep配置项失效；
    - 监听`reactive`定义的响应式数据的某个属性时，deep配置项有效；

## ref与reactive区别

| 特性       | `ref`             | `reactive`  |
| -------- | ----------------- | ----------- |
| **数据类型** | 适用于基本类型和对象        | 仅适用于对象      |
| **访问方式** | 需要 `.value`       | 直接访问属性      |
| **模板使用** | 自动解包（无需 `.value`） | 需保持对象结构     |
| **适用场景** | 单个数据、组合式函数返回值     | 复杂状态管理（如表单） |


* **接收类型**
	* `ref`函数可以接收原始数据类型和引用数据类型
	*  `reactive`函数只能接收引用数据类型
* **原理**
	*  `ref`底层还是使用`reactive`来做，`ref`是在`reactive`上进行了封装，增强了其能力，使其支持了对原始数据类型的处理





## script setup是干什么的
script setup是Vue3的语法糖，简化了组合式API的写法，并且运行性能更高，使用script setup语法糖的特点：
* 属性和方法无需返回，直接使用；
* 引入组件的时候，会自动注册；
* 使用defineProps接收父组件传递的值；defineEmits获取自定义事件;使用useAttrs获取属性，useSlots获取插槽
* 默认不会对外暴露任何属性，如果有需要使用defineExpose；`


## setup中直接使用异步的问题
1. **组件无法正确渲染**
    - `setup` 如果是异步函数，组件会在 `setup` 完成前渲染，导致初始状态丢失
    - 返回的响应式数据可能无法被模板正确访问
2. **生命周期钩子执行时机问题**
    - 异步 `setup` 会导致生命周期钩子（如 `onMounted`）的执行时机不可控
3. **响应式数据初始化问题**
    - 异步获取的数据可能无法正确建立响应式关联

```js
// ❌ 错误示例：直接使用 async setup
export default {
  async setup() {
    const data = await fetchData(); // 异步操作
    
    return {
      data // 可能无法正确建立响应式
    };
  }
};
```


### 解决方案
#### 方案1：使用 `ref/reactive` + `onMounted`
```js
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const data = ref(null);
    
    onMounted(async () => {
      data.value = await fetchData();
    });
    
    return { data };
  }
};
```
#### 方案2: 使用 `reactive/ref` + 立即执行异步函数
```js
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({ data: null });
    
    (async () => {
      state.data = await fetchData();
    })();
    
    return { state };
  }
};
```

#### 方案3：使用 Suspense (Vue3 实验性功能)

```js
// 子组件
export default {
  async setup() {
    const data = await fetchData();
    return { data };
  }
};

// 父组件
<template>
  <Suspense>
    <template #default>
      <AsyncComponent />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>
```








## Pinia简介

### 比较
- Vuex: State、Getters、Mutations（同步）、Actions（异步）
- Pinia: State、Getters、Actions（同步异步都支持）

### 优点
- Pinia 没有 Mutations
- 没有模块的嵌套结构
- 更好的 TypeScript 支持
- Vue2 和 Vuc3 都支持
- 支持 Vue DevTools


### 使用介绍
#### 安装
```sh
npm i pinia
```

#### 配置
```js
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import axios from 'axios'
import { createPinia } from 'pinia'

const app = createApp(App)
app.config.globalProperties.$axios = axios
app
  .use(router)
  .use(createPinia())
  .mount('#app')


```


### 定义
```js
import { defineStore } from 'pinia'

interface IUser {
  name: string
  age: number
}
export const useUserStore = defineStore('user', {
  state(): IUser {
    return {
      name: '',
      age: 0,
    }
  },
  getters: {},
  actions: {
    updateUser(user: IUser) {
      this.name = user.name
      this.age = user.age
    },
  },
})

```

### 使用

##### state基本使用
```vue

<template>
  <div>userAge: {{ user.age }}</div>
</template>
<script setup lang="ts">
import { useUserStore } from '../pinia/user'
const user = useUserStore()
setTimeout(() => {
  user.updateUser({
    name: 'Sherry',
    age: 30
  })
}, 500)
</script>

```



#### storeToRefs 使解构也能响应式
```vue

<template>
  <div>userAge: {{ age }}</div>
</template>
<script setup lang="ts">
import { useUserStore } from '../pinia/user'
import { storeToRefs } from 'pinia'

const user = useUserStore()
// 使解构后的值也能拥有响应式
const { age } = storeToRefs(user)
setTimeout(() => {
  user.updateUser({
    name: 'Sherry',
    age: 30
  })
}, 500)
</script>

```

#### 修改state的方式
```vue

<template>
  <div>Name: {{ name }}</div>
  <div>Age: {{ age }}</div>
</template>
<script setup lang="ts">
import { useUserStore } from '../pinia/user'
import { storeToRefs } from 'pinia'

const user = useUserStore()
// 使解构后的值也能拥有响应式
const { age, name } = storeToRefs(user)
setTimeout(() => {
  // 1. 直接修改（不建议）
  // user.age = 200
  // 2. $patch（传递对象，多个数据修改）（不建议）
  user.$patch({
    name: 'Lance',
    age: 28,
  })
  // 3. $patch（传递箭头函数，多个数据修改）（不建议）
  user.$patch((state) => {
    state.name = 'GC'
    state.age = 31
  })
  // 4. 直接调用 action （推荐）
  user.updateInfo({
    name: 'QB',
    age: 29,
  })
}, 500)
</script>

```


#### getters

无参数传递 vs 有参数传递
```js


import { defineStore } from 'pinia'

interface IUser {
  name: string
  age: number
}
export const useUserStore = defineStore('user', {
  state(): IUser {
    return {
      name: '',
      age: 0,
    }
  },
  getters: {
    getAge(): number {
      return this.age
    },
    // 接受参数
    getFormatName(state): (value: string) => string {
      return (value: string) => {
        return state.name + value
      }
    },
  },
  actions: {
    updateInfo(user: IUser) {
      this.name = user.name
      this.age = user.age
    },
  },
})

```

```vue
<template>
  <div>Name: {{ name }}</div>
  <div>Age: {{ age }} - {{ getAge }} - {{ getFormatName('Lance') }}</div>
</template>
<script setup lang="ts">
import { useUserStore } from '../pinia/user'
import { storeToRefs } from 'pinia'
const user = useUserStore()
const { age, name, getAge, getFormatName } = storeToRefs(user)
setTimeout(() => {
  user.updateInfo({
    name: 'QB',
    age: 29,
  })
}, 500)
</script>

```


#### 跨模块更新数据
定义俩模块:
* user
* subject

```js
import { defineStore } from 'pinia'

export const useSubjectStore = defineStore('subject', {
  state() {
    return {
      courseList: ['数学', '语文'],
      currentIdx: 0,
    }
  },
})

```

然后希望在user模块中修改subject数据:
```js

import { defineStore } from 'pinia'
import { useSubjectStore } from './subject'
const subject = useSubjectStore()
...
export const useUserStore = defineStore('user', {
  state(): IUser {
    return {
      ...
    }
  },
  getters: {
    ...
  },
  actions: {
    ...
    addCourse(course: string) {
      subject.courseList.push(course)
    },
  },
})

```


页面中使用:
```vue

<template>
  ...
  <div>courseList: {{ subject.courseList.join(',') }}</div>
</template>
<script setup lang="ts">
import { useUserStore } from '../pinia/user'
import { useSubjectStore } from '../pinia/subject'

const user = useUserStore()
const subject = useSubjectStore()
user.addCourse('英语')
</script>

```




# Vuex

### 概述下Vuex
Vue应用的状态管理模式.每一个 Vuex 应用的核心就是 store（仓库）。“store” 基本上就是一个容器，它包含着你的应用中大部分的状态 ( state )。
* Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
* 改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化。

主要包括以下几个模块：
State： 定义了应用状态的数据结构，可以在这里设置默认的初始状态。
Getter：允许组件从 Store 中获取数据，mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性。
Mutation：是唯一更改 store 中状态的方法，且必须是同步函数。
Action：用于提交 mutation，而不是直接变更状态，可以包含任意异步操作。
Module：允许将单一的 Store 拆分为多个 store 且同时保存在单一的状态树中。




### vuex多模块编程
- vuex的多模块编程的必要性
  - vuex单模块问题: 
    - 需要的管理状态数据比较多, 那对应的mutations/actions模块就会变得比较大
    - 如果添加新的数据管理, 需要修改现在文件(不断向其添加内容) 
  - vuex多模块编程: 对各个功能模块的数据分别进行管理, 这样更加具有扩展性

- 什么时候需要用vuex多模块编程? 需要vuex管理的数据比较多时使用
- 多模块编程的总state结构:

```js
{
	home: {
        categoryList: [],
        xxx: {}
    },
    user: {
        userInfo: {}
    }
}
```

### 问答题

#### vuex中的mutation可以执行异步操作吗?

- 可以 ==> 异步更新数据后界面确实会自动更新
- 问题 ==> vuex的调用工具监视不到mutation中的异步更新, 工具记录还是更新前的数据(不对)
- 扩展: 工具如何记录数据变化? ==> 每次mutation函数执行完后, 立即记录当前的数据   ==> 在mutation中同步更新state, 才能被记录到



#### vuex中的状态数据的响应式的原理?

1. 创建了一个vue实例(vm)对象

2. state中的数据都是实例的data数据(是响应式的)

3. 组件中读取的state数据本质读取的就是data中的数据

4. 一旦更新了state中的数据, 所有用到这个数据的组件就会自动更新



#### vuex数据刷新丢失的问题

```js
//数据丢失原因
1.	Vuex数据保存在运行内存中，vue实例初始化的时候为其分配内存
2.	当刷新页面的时候重新初始化Vue实例，所以重新为Vuex分配内存导致之前保存的数据丢失


//如何解决?
1.	Vuex的数据都是每次组件加载时候动态请求获取数据保存
a)	优点： 保证数据不会丢失
b)	缺点: 性能差，因为网络问题可能有网络延迟

2.	将Vuex中的数据每次同步更新保存到sessionStorage中
a)	优点: 每次页面刷新后从sessionStorage中获取保存的数据，不会丢失
b)	缺点: state中的数据是动态的，就需要一直要同步到sessionStorage中，性能差

3.	在页面刷新之前获取Vuex的数据，将数据保存在sessionStorage中，页面加载后从sessionStorage中获取
a)	优点: 减少动态更新sessionStorage的次数，性能好
b)	重点: 给window绑定beforeunload事件监听

```


```js
1. 使用本地存储

这是最简单和常用的方法之一：


`// 在状态改变时保存到localStorage store.subscribe((mutation, state) => {   localStorage.setItem('store', JSON.stringify(state)); }) // 在创建store时从localStorage恢复状态 const store = new Vuex.Store({   state: localStorage.getItem('store') ? JSON.parse(localStorage.getItem('store')) : {    // 初始状态  },  // ...其他配置 })`

2. 使用插件

Vuex提供了插件机制，你可以使用或创建插件来持久化状态：

Vuex PersistedState Plugin Usage


这个插件会自动将Vuex的状态保存到localStorage，并在页面加载时恢复。

3. 服务器端渲染（SSR）

如果你使用Nuxt.js或其他SSR解决方案，可以在服务器端初始化store状态：



`export default function ({ store, req }) {   if (process.server) {    // 从服务器API获取数据    store.dispatch('fetchInitialData')  } }`

4. 使用sessionStorage

如果你只需要在当前会话中保持数据，可以使用sessionStorage代替localStorage：



`store.subscribe((mutation, state) => {   sessionStorage.setItem('store', JSON.stringify(state)); })`

5. 使用Cookie

对于一些小型数据，你也可以考虑使用Cookie：



`import Cookies from 'js-cookie' store.subscribe((mutation, state) => {   Cookies.set('store', JSON.stringify(state)); })`

6. 只持久化特定字段

有时你可能只想保存部分状态：


`store.subscribe((mutation, state) => {   localStorage.setItem('user', JSON.stringify(state.user)); })`

选择哪种方法主要取决于你的具体需求，如数据大小、安全性要求、浏览器兼容性等。对于大多数应用，使用localStorage或专门的插件如vuex-persistedstate通常是最简单有效的解决方案。
```




- 绑定事件监听: 在页面卸载(关闭)或刷新时候保存当前数据

```js
beforeCreate(){
    window.addEventListener('beforeunload', () => {
	sessionStorage.setItem('CART_LIST_KEY', 
		JSON.stringify(this.$store.state.shopCart.cartList))
	})
}
```

- 在初始时读取保存数据作为状态的初始值. 解决页面刷新数据丢失的问题

```js
//state中初始化属性值
cartList: JSON.parse(sessionStorage.getItem('CART_LIST_KEY')) || [],
```


#### vuex原理,组件传参方式
 构建一个vm,state中的数据都是实例的data属性
 组件传参方式? 先需要确认是否是组件和vuex传递数据
 组件->vuex dispatch commit
 vuex->组件: mapState,mapGetters


#### 监听vuex自身数据
 两种方式获取vuex的state数据:  $store.state与mapState
 定义返回state数据的计算属性->通过watch监视这个计算属性->state变化,计算属性值,监视的回调

#### vuex理解
 - vuex是vue中集中式状态管理的一个插件,可以对组件共享状态进行集中式管理(管理:读写)
 - vuex是组件间通信的一种方式,可实现任意组件间通信.
 - 什么时候使用? 多个组件依赖同一状态,不同组件的行为要变更为同一状态: 购物车页面要根据登录状态来访问



#### vuex如何外部改变内部的值
 是组件更新了state中的数据:dispatch, commit
 模块化编程下,内部模块改变外部模块的值:


#### 对vuex的理解一些使用场景
 多个组件共享数据或者是跨组件传递数据时
 购物车的数据共享, 登录注册






# vue-router

### 声明式路由导航和编程式路由导航区别
- 跳转/导航路由的2种基本方式
  - 声明式路由: `\<router-link :to="{path: '/xxx'}" replace>xxx</router-link/>`
  - 编程式路由: `this.$router.push/replace(location)`

* 编程式路由导航：通过代码进行路由的跳转，在组件内部通过 `$router` 对象来操作路由，使用 `$router.push、$router.replace` 和 `$router.go` 等方法来实现路由的切换，主要适用于需要在某些场景下进行特定路由跳转的情况。

* 声明式路由导航：在模板中使用 Vue Router 提供的组件（如 `<router-link>`）来实现路由的跳转，通过设置 to 属性来指定目标路由地址，当用户点击这些组件时，路由会自动进行跳转，非常适用于需要在页面间进行切换的场景



#### 编程路由导航
>https://v3.router.vuejs.org/zh/guide/essentials/navigation.html


**参数:**
* 字符串
* path对象
* 命名路由对象
* 带查询参数的path对象

```js
// 字符串
router.push('home')

// 对象
router.push({ path: 'home' })

// 命名的路由
router.push({ name: 'user', params: { userId: '123' }})

// 带查询参数，变成 /register?plan=private
router.push({ path: 'register', query: { plan: 'private' }})
```

**注意**:
* 如果提供了 path，params 会被忽略
```js
const userId = '123'
router.push({ name: 'user', params: { userId }}) // -> /user/123
router.push({ path: `/user/${userId}` }) // -> /user/123

// 这里的 params 不生效
router.push({ path: '/user', params: { userId }}) // -> /user
```



### 跳转路由携带参数(数据)的方式
#### params参数
传参方式:
* 注册路由的时候需要声明占位符，{path: '路由路径/:name/:age'}  //name,age是占位符

跳转时指定参数值:
- /xxx/abc/12
* {name: 'xxx', params: {name: 'abc', age: 12}}

#### query参数
传参方式:
* 注册的路由的时候不需要做任何事情
* 请求时url路径中以?开始以&连接key=value的字符形式,例如`path?key=value&key2=value2`
* params和query同时使用,params参数要放在query前面.

获取
* query参数无需声明即可接收,接收通过计算属性 `this.$route.query`


#### props
> https://v3.router.vuejs.org/zh/guide/essentials/passing-props.html#布尔模式

传参方式:
* 布尔值(只能搭配params参数使用)
	* props: true, // 只能同名映射params参数
* 对象(用于自定义参数)
	* props: {a: 1, b: 'abc'}, // 只能映射非params/query参数
* 函数(自定义参数 + 路由信息)
    - props: route => ({keyword3: route.params.keyword, keyword4: route.query.keyword2, xxx: 12}), //可以指定任何数据都可以

//布尔模式
如果 props 被设置为 true，route.params 将会被设置为组件属性。
```js

const User = {
  props: ['id'],
  template: '<div>User {{ id }}</div>'
}


const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User, props: true },

    // 对于包含命名视图的路由，你必须分别为每个命名视图添加 `props` 选项：
    {
      path: '/user/:id',
      components: { default: User, sidebar: Sidebar },
      props: { default: true, sidebar: false }
    }
  ]
})
```

//对象模式
如果 props 是一个对象，它会被按原样设置为组件属性。当 props 是静态的时候有用。
```js
const router = new VueRouter({
  routes: [
    {
      path: '/promotion/from-newsletter',
      component: Promotion,
      props: { newsletterPopup: false }
    }
  ]
})
```


//函数模式
你可以创建一个函数返回 props。这样你便可以将参数转换成另一种类型，将静态值与基于路由的值结合等等。
```js
const router = new VueRouter({
  routes: [
    {
      path: '/search',
      component: SearchUser,
      props: route => ({ query: route.query.q })
    }
  ]
})
```
URL /search?q=vue 会将 {query: 'vue'} 作为属性传递给 SearchUser 组件。



#### meta
传参方式:
* 注册的时候通过meta字段进行参数设置,指定包含n个数据的对象

获取数据
* `this.$route.meta.xxx`





#### `$router` VS `$route`的区别
* **$router**
路由器对象
用来控制路由的跳转，包含相关方法: push()/replace()/back()/addRoutes()
* **$route**
路由信息对象
包含当前路由的所有信息(path, query, params, meta)




### 路由模式
> https://juejin.cn/post/7116336664540086286


#### 3种路由模式
可以通过mode选项修改路由的模式。
* hash:  使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器；
* history :  依赖 HTML5 History API 和服务器配置。具体可以查看 HTML5 History 模式；
* abstract :  支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式.



#### 路由中history模式和hash模式

- URL格式:
    - Hash模式: 使用井号(#)。例如: `http://example.com/#/user/1`
    - History模式: 看起来像普通的URL。例如: `http://example.com/user/1`
- 实现原理:
    - Hash模式: 基于URL的hash(#)。使用window.location.hash来操作。
    - History模式: 基于HTML5的History API。使用history.pushState()和history.replaceState()方法。
- 服务器配置:
    - Hash模式: 不需要特殊的服务器配置。
    - History模式: 需要服务器配置。所有的路由都需要重定向到index.html。
- 浏览器兼容性:
    - Hash模式: 兼容性较好，支持旧版浏览器。
    - History模式: 只在支持HTML5 History API的浏览器中可用。
- SEO友好性:
    - Hash模式: 对SEO不友好，因为搜索引擎通常会忽略#后面的内容。
    - History模式: 对SEO更友好，因为URL结构更像传统的网页。
- 刷新页面行为:
    - Hash模式: 刷新页面时，不会向服务器发送请求。
    - History模式: 刷新页面时会向服务器发送请求，因此需要proper服务器配置以避免404错误。



#### 路由模式实现原理
**hash 模式的实现原理**
早期的前端路由的实现就是基于 location.hash 来实现的。其实现原理很简单，location.hash 的值就是 URL 中 # 后面的内容。比如下面这个网站，它的 location.hash 的值为 '#search'：
```awk
https://www.word.com#search
```

**history 模式的实现原理**
HTML5 提供了 History API 来实现 URL 的变化。其中做最主要的 API 有以下两个：history.pushState() 和 history.repalceState()。这两个 API 可以在不进行刷新的情况下，操作浏览器的历史纪录。唯一不同的是，前者是新增一个历史记录，后者是直接替换当前的历史记录，如下所示：
```js
window.history.pushState(null, null, path);
window.history.replaceState(null, null, path);
```

如何做到修改url参数页面不刷新

HTML5引入了 `history.pushState()` 和 `history.replaceState()` 方法，它们分别可以添加和修改历史记录条目。
```js
let stateObj = {
    foo: "bar",
};

history.pushState(stateObj, "page 2", "bar.html");
```

假设当前页面为 `foo.html`，执行上述代码后会变为 `bar.html`，点击浏览器后退，会变为 `foo.html`，但浏览器并不会刷新。



### 路由(导航)守卫
#### 是什么
导航守卫是vue-router提供的下面2个方面的功能
- 监视路由跳转  -->回调函数
- 控制路由跳转  -->  放行/不放行/强制跳转到指定位置    next()

#### 使用场景
- 在跳转到界面前, 进行用户权限检查限制(如是否已登陆/是否有访问路由权限)
- 在跳转到登陆界面前, 判断用户没有登陆才显示

#### 全局前置守卫

```js
router.beforeEach((to, from, next) => {
  // 使用场景： 验证用户身份，判断用户是否登录
  if(isLogin){ // 如果登录，正常跳转至home
    next()
  }else { // 如果未登录就跳转至登录界面
    if(to.path === '/login'){
      next()
    }else {
      next('/login')
    }
  }
})
```

#### 全局解析守卫
- 这和 `router.beforeEach` 类似，区别是在导航被确认之前，**同时在所有组件内守卫和异步路由组件被解析之后**，解析守卫就被调用。
```js
router.beforeResolve((to, from, next) => {
  // 负责解析路由地址，加载对应的路由组件
})
```

#### 全局后置钩子
```js
router.afterEach((to, from) => {
  // 路由完全跳转后执行
})
```

#### 路由独享守卫
```js
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})
```

#### 组件内的守卫
* beforeRouteEnter
* beforeRouteUpdate
* beforeRouteLeave
```js
beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 可以通过传一个回调给 next来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数。
    // 因为当守卫执行前，组件实例还没被创建
  next(vm => {
    // 通过 `vm` 访问组件实例
  })
},
beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
},
beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
}
```



### 完整导航解析流程

1. 导航被触发。
2. 在失活的组件里调用组件后置守卫 `beforeRouteLeave` 。
3. 调用全局前置守卫 `beforeEach` 。
4. 在重用的组件里调用 组件解析守卫`beforeRouteUpdate`  (2.2+)。
5. 在路由配置里调用路由前置守卫 `beforeEnter`。
6. 解析异步路由组件。
7. 在被激活的组件里调用组件前置守卫 `beforeRouteEnter`。
8. 调用全局解析守卫 `beforeResolve` (2.5+)。
9. 导航被确认。
10. 调用全局后置守卫 `afterEach` 钩子。
11. 触发 DOM 更新。
12. 调用组件前置守卫 `beforeRouteEnter` 中传给 `next` 的回调函数，创建好的组件实例会作为回调函数的参数传入。



#### 触发钩子的完整顺序

> https://www.yuque.com/cuggz/interview/hswu8g#2c3f563ad7506984575f1a323937c5c0

路由导航、keep-alive、和组件生命周期钩子结合起来的，触发顺序，假设是从a组件离开，第一次进入b组件

- beforeRouteLeave：路由组件的组件离开路由前钩子，可取消路由离开。
- beforeEach：路由全局前置守卫，可用于登录验证、全局路由loading等。
- beforeEnter：路由独享守卫
- beforeRouteEnter：路由组件的组件进入路由前钩子。
- beforeResolve：路由全局解析守卫
- <u>afterEach：路由全局后置钩子</u>
- beforeCreate：组件生命周期，不能访问this。
- created;组件生命周期，可以访问this，不能访问dom。
- beforeMount：组件生命周期
- <u>deactivated：离开缓存组件a，或者触发a的beforeDestroy和destroyed组件销毁钩子。</u>
- mounted：访问/操作dom。
- <u>activated：进入缓存组件，进入a的嵌套子组件（如果有的话）。</u>
- 执行beforeRouteEnter回调函数next。


### 问题

#### 路由懒加载
懒加载/异步加载: 请求对应的路径时才请求获取对应的打包文件
import动态引入的特点:
  单独打包(code split  代码分割): 被引入的模块会被单独打包
  单独打包是懒加载的前提
包含动态引入的函数: () => import('@/views/Home')
  开始不执行, 请求对应的路径时才会执行
  执行函数进才会请求加载对应的打包文件 

import静态引入:
  import xxx from '模块'
  会打包在一起

为什么要这么做: 主要为了提高首页的访问检验(更快), 访问首页时, 需要加载的打包文件更小了

**懒加载的缺点**: 访问其它路由更慢了 => 需要发请求加载对应的打包文件
解决: 预加载    提前加载后面需要其它的打包文件


#### 缓存路由组件
- 当离开时, 路由组件会自动销毁, 再跳转回来, 需要重新创建
- 目标: 能不能让路由组件离开时不销毁, 再回来时, 直接复用
- 解决: 使用`<keep-alive>来包含<router-view>`, 就能让对应的路由组件离开时不销毁
- 作用: 能复活组件对象, 包含它的所有状态相关数据




#### 如果指定name与params配置, 但params中数据是一个"", 无法跳转
* 解决1: 不指定params
* 解决2: 指定params参数值为undefined

#### 路由组件能不能传递props数据?
* 可以: 可以将query或且params参数映射成props传递给路由组件对象

```js
//在routes中配置
props: route=>({keyword1:route.params.keyword, keyword2: route.query.keyword })
```

#### 编程式路由航重复导航报错？
>跳转到当前路由(参数不变), 多次执行会抛出NavigationDuplicated的警告错误

##### 说明情况:
当编程式跳转到当前路由且参数数据不变, 就会出警告错误:
错误: `Avoided redundant navigation to current location` ==> 重复跳转当前路由
原因: 
vue-router在3.1.0版本(2019.8)引入了push()的promise的语法, 如果没有通过参数指定回调函数就返回一个promise来指定成功/失败的回调, 且内部会判断如果要跳转的路径和参数都没有变化, 会抛出一个失败的promise
说明文档: https://github.com/vuejs/vue-router/releases?after=v3.3.1

##### 解决方案
办法1: 在每次push时指定回调函数或catch错误
```js
push('/xxx', () => {})   ===> 声明式路由跳转本质就是这样执行的
push('/xxx').catch()
```

办法2: 重写VueRouter原型上的push方法 (比较好)
* 如果没有指定回调函数, 需要调用原本的push()后catch()来处理错误的promise
* 如果传入了回调函数, 本身就没问题, 直接调用原本的push()就可以
    ```js
    const originPush = VueRouter.prototype.push
    VueRouter.prototype.push = function (location, onComplete, onAbort) {
      console.log('push()', onComplete, onAbort)
      // 判断如果没有指定回调函数, 通过call调用源函数并使用catch来处理错误
      if (onComplete===undefined && onAbort===undefined) {
        return originPush.call(this, location).catch(() => {})
      } else { // 如果有指定任意回调函数, 通过call调用源push函数处理
        return originPush.call(this, location, onComplete, onAbort)
      }
    }
    
    ```

说明:
声明式路由跳转之所有没有问题, 是因为默认传入了成功的空回调函数

   ```js
   // 缓存原型上的push方法
   const originPush = VueRouter.prototype.push
   VueRouter.prototype.push = function (location, onComplete, onAbort) {
     console.log('push()', location, onComplete, onAbort)
     // this是路由器对象 $router
     // 如果调用push, 传递了成功或者失败的回调函数
     if (onComplete || onAbort) {
       // 让原来的push方法进行处理
       originPush.call(this, location, onComplete, onAbort) // 不用返回, 因为执行的结果返回是undfined
     } else { // 如果调用push, 没传递了成功或者失败的回调函数, 可能会抛出失败的promise, 需要catch一下
       return originPush.call(this, location).catch(() => {
         console.log('catch error')
       })   // 必须返回产生的promise对象
     }
   }
   ```


#### params与path配置能不能同时使用
不可以: router.push({path: '/xx', params: {name: 'tom'}})
params只能与name配合: router.push({name: 'xx', params: {name: 'tom'}})   

#### 如何配置params参数可传可不传?
path: '/search/:keyword?',    
注意: 一旦声明可以不传, 不能传入一个空串的param参数

#### 跳转携带的参数, 刷新就丢失了
如果注册没有指定/:xxx的点位, 而跳转时通过params配置携带的参数数据, 刷新时就会丢失
因为url中没有携带的参数数据路径
this.$router.push({name: 'Info', params: {a: 1, b: 2}})
this.$route.params.a
/info/1/2

#### 路由组件能不能传递props参数?
可以, 但只是将params/query映射成props传入路由组件的

路由配置中props属性的作用
- 组件中使用$route会使对应的组件形成耦合,这些组件只能在相应的url上使用,限制灵活性
- 通过props传递,简化了以往需要计算属性获取params,query参数.可以直接在组件的props属性上声明接收.



#### 如何让路由跳转后, 滚动条自动停留到起始位置?

```js
new VueRouter({ // 配置对象
  // ...
  scrollBehavior (to, from, savedPosition) {
    // 指定路由跳转后滚条的坐标
    return { x: 0, y: 0 }
  }
})


//返回上个页面定位到底上次访问的位置
scrollBehavior(to,from,savedPosition){
    if(savedPosition){
        return savedPosition;
    }else{
        return {x:0, y:0}
    } 
}

//完善 上面的代码.不是每个页面都有这个需求 搭配使用meta属性
scrollBehaviour(to,from,savedPosition){
    if(savedPosition && to.meta===true){
        return savedPosition
    }else{
        return {x:0,y:0}
    }
}
```

#### 如何实现登陆后, 自动跳转到前面要访问的路由界面

在全局前置守卫中, 强制跳转到登陆页面时携带目标路径的redirect参数

```js
if (userInfo.name) {
  next()
} else {
  // 如果还没有登陆, 强制跳转到login
  next('/login?redirect='+to.path)  // 携带目标路径的参数数据
}
```

在登陆成功后, 跳转到redirect参数的路由路径上

```js
await this.$store.dispatch('login', {mobile, password})
// 成功了, 跳转到redirect路由 或 首页
const redirect = this.$route.query.redirect
this.$router.replace(redirect || '/')
```



#### 重载组件,页面没有变化的解决方法
当从 C 组件切换到 C 组件（只更新参数的时候），C 组件并不会被重新创建或卸载，而是复用之前 C 组件，这样会导致只有路由变化，页面没有发生变化
<span style="color:red;">解决方案</span> 3种
* watch
* beforeRouteUpate
* router key

##### watch
使用watch进行监视，因为每次更新时，$route都会创建一个新对象 ，而不是原对象，所以所有数据都是新的，可以监视
```js
//项目中使用
search页面改变参数，无法重复发请求的问题
watch: {
    $route(newVal, oldval) {
      this.handlerSearchParams();
      this.getSearchInfo();
    },
  },
```


##### beforeRouteUpdate
```javascript
beforeRouteUpdate(to, from, next) {
  
}
```


##### router key
> https://mp.weixin.qq.com/s/0Yekkc08ozbNxuquHVGveg

```html
<router-view v-bind:key="$route.fullpath"></router-view>
```


#### 命名路由的时候params和query分别可以和什么搭配使用

query + name

query + path

params + name  (怎么记忆, 都有am)


#### 如何监听路由变化 //?
>https://juejin.cn/post/6875198510221197319
>https://github.com/Easay/issuesSets/issues/142


**vue-router实现原理** //概述
```js
// ...
this._router = this.$options.router
// ...
Vue.util.defineReactive(this, '_route', this._router.history.current)
```

* `this.$options.router`就是VueRouter的实例
* `this._router.history.current`是当前路由，在每次你`this.$router.push/this.$router.replace`的时候，current都会更新。
* 响应式属性`_route`。当响应式属性更新时，依赖这个属性的组件都会更新。
* RouterView就依赖了这个属性`_route`。它会根据`_route`的改变而更新组件渲染内容(重新执行render函数)。
* `_route`又会对应有当前路由匹配的组件，这些匹配的组件就是RouterView要渲染的内容。


##### 如何监听
使用Proxy方法
```js
history.pushState = new Proxy(history.pushState, {
  apply: function (target, thisBinding, args) {
    console.log('就这？');
    return target.apply(thisBinding, args);
  },
});


```












# 小程序

### 资源

* [2022 小程序面试题 - 掘金 (juejin.cn)](https://juejin.cn/post/7126577034356064286)
* 

### 1) 小程序特点

1. 体积小，压缩包的体积不能大于2M
2. 没有DOM对象
3. 基于组件化开发
4. 小程序环境不同于浏览器环境
   1. 浏览器环境中全局对象： window
   2. 小程序环境中全局对象：wx
   3. 小程序环境中没有window对象

### 2)小程序适配

1. 小程序适配单位： rpx(responsive px) 响应式单位
2. 小程序中规定所有的机型中页面宽度都是750rpx
3. iphone6: 1物理像素 = 0.5px = 1rpx ---> 1px = 2rpx
4. 小程序底层已经做了viewport适配

```js
const SCREEN_WIDTH = 750

let RATE = wx.getSystemInfoSync().screenHeight / wx.getSystemInfoSync().screenWidth

Page({
  data: {
    screenTotalW: SCREEN_WIDTH,
    screenTotalH: SCREEN_WIDTH * RATE
  }
)

// wxml
<view style="width:{{screenTotalW}}rpx; height:{{screenTotalH}}rpx"></view>

```

### 3) 小程序相关语法

1. 数据绑定

   1. 单项数据流: Model ---> view
   2. 修改状态数据： this.setData() 同步行为
   3. 页面中的数据均来自于data中，使用data中的数据的时候记住使用表达式{{}}
   
2. 事件绑定

   1. 事件分类： 冒泡事件 || 非冒泡事件
   2. 绑定的方式： bind + 事件名  || catch + 事件名
   
3. 路由跳转

   1. wx.navigateTo() || wx.redirectTo()
   
4. 本地存储
   1. 语法： 
      1. wx.setStorage() || wx.setStorageSync()
      2. wx.getStorage() || wx.getStorageSync()
   2. 注意点
      1. 单个key上限是1M
      2. 整体上限是10M
   
5. 全局传参

   app.js中可定义全局参数globalData

### 4) 向事件对象传参

1. 语法
   1. id=value
   2. data-key=value
2. 获取
   1. id: event.target.id || event.currentTarget.id
   2. data-key: event.target.dataset.key || event.currentTarget.dataset.key
3. 使用场景
   1. id：通常需要向event对象传递单一且唯一的标识
   2. data-key:   需要向event对象传递多个标识数据

### 5) 小程序获取用户唯一标识（openId）

1. 客户端先通过wx.login(获取code
2. wx.request()发送code给服务器
3. 服务器端发送请求携带参数(code, appSecret（开发密钥）, appId)给微信服务器获取openId
4. 微信返回openId给服务器后，服务器进行加密再返回给前端
5. 前端进行本地储存，下次发送请求时携带参数

### 6) 小程序支付流程

1. 用户在小程序客服端下单(包含用户及商品信息)
2. 小程序客户端发送下单支付请求给商家服务器
3. 商家服务器同微信服务器对接获取唯一标识openID
4. 商家服务器根据openId生成商户订单(包含商户信息)
5. 商家服务器发送请求调用统一下单API获取预支付订单信息
6. 商家对预支付信息签名加密后返回给小程序客户端
7. 用户确认支付（鉴权调起支付）
8. 微信服务器返回支付结果给小程序客户端
9. 微信服务器推送支付结果给商家服务器端


### 7) 面试问题

- Iphone6的dpr为多少？Iphone6Plus比Iphone6显示图像清晰吗？

  视网膜屏幕是分辨率超过人眼识别极限的高分辨率屏幕，Iphone4的dpr = 2; 人类肉眼分辨的极限
  
- 生命周期函数实际测试和官网描述有差

- wx.setStorage()，单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB

- 性能优化

  一个页面一次只有一个video标签，其余的使用image代替
  
- 请求相关

  小程序为了安全起见只支持Https请求

  wx.request最大并发限制10个

- 如何使用组件

  先创建组件，在对应的json文件下设置component: true

  到使用组件页面的json文件中，注册组件填写相应的路径

- 使用npm包

  下载后，勾选使用npm模块，再构建npm，会将node_modules中的包打包到miniprogram_npm中

- 分包相关

  分包后可解决2M限制，并且能分包加载内容，提高性能

  分包后单个包的体积不能大于2M，所有包的体积不能大于16M

  1. 常规分包

     加载小程序的时候先加载主包，当需要访问分包的页面时候才加载分包内容

     分包的页面可以访问主包的文件，数据，图片等资源

  2. 独立分包

     独立分包可单独访问分包的内容，不需要下载主包

     独立分包不能依赖主包或者其他包的内容

     通常某些页面和当前小程序的其他页面关联不大的时候可进行独立分包，如：临时加的广告页 || 活动页

  3. 分包预下载

     在加载当前包的时候可以设置预下载其他的包

     缩短用户等待时间，提高用户体验

### 7)-2小程序开发遇到的问题

```js
1.页面通信方式及注意事项
通信方式: 路由传参+storage
 路由传参只能通过query形式(原生小程序对query参数有长度限制,如果长度过长会自动截取.且会对query参数自动进行类型转换)
 wx.getStorage('cookies')

2.本地存储 有上限

3.请求
 协议: https请求
 并发数:10个
 
4.分包
4.1原因:程序要求压缩包体积小于2M;提高用户体验, 提高页面的加载速度
4.2形式
4.3特点:

5.性能优化:
5.1 视频优化 图片封面
5.2 
```



### 8) 开发相关

- setData行为始终是同步的
- H5中实现滑块功能，推荐大家使用：better-scroll

### 9) 封装

- 封装函数：

  1. 功能点明确

  2. 函数内部保留静态的数据

  3. 将动态的数据抽取出来作为形参，由使用者根据场景不同动态传入实参

- 封装组件：

  1. 功能点明确 || 呈现效果

  2. UI组件 || js组件

  3. 组件内部保留静态的数据

  4. 将动态的数据抽取出来作为 props属性，由使用者根据场景不同动态以标签属性的形式导入

  5. 封装良好的组件应该规定传入props数据的必要性还有数据类型 propsType



### 请谈谈WXSS和CSS的异同？

都是用来描述页面的样子
WXSS具有CSS大部分的特性，也做了一些扩充和修改
WXSS新增了尺寸单位，WXSS在底层支持新的尺寸单位rpx
WXSS仅支持部分CSS选择器
WXSS提供全局样式与局部样式



### 小程序和Vue写法的区别？

遍历的时候：小程序wx:for="list",而Vue是v-for="item in list" 调用data模型（赋值）的时候：

小程序：this.data.item // 调用，this.setDate({item:1})//赋值

Vue：this.item //调用，this.item=1 //赋值



### 提高微信小程序的应用速度？

**a.提高页面加载速度:**

1. 首先用户在页面切换也就是路由跳转时,会有一个100m-300m的一个时间，我们可以利用这个时间段,预先发起新页面所需要的网络加载时间。

2.例如从A页面预加载B页面时,我们可以通过在A页面通过this.$route的方法向B页面传递参数,B页面接收到参数之后利用我们封装好的全局put take的方法,利用缓存来进行ajax请求

疑难:为什么我在A页面时会访问到B页面的实例呢？此时B页面不是未创建吗?

解答: 1.首先根据微信小程序的机制来说,在我们小程序启动时,会把所有的page()方法内的object存在一个队列中,每次页面访问时,就会创建一个新的对象实例,简单理解就是深拷贝。
2.在我们的A页面进行点击响应事件的时候,B页面实例此时未加载,所以此时调用onload方法(onNavigate)方法时,此时this指向还是在page对象的原型,也就是小程序启动时刚创建时的那个实例。
3.而马上被创建好的B页面此时又是另外一个obeject对象,此时this指向不是同一个对象,不能把我们临时的数据存储住,因此我们可以封装一个全局的put take缓存方法进行存储。
4.为了通用性,我们将所有公共的方法 比如put take route都定义在了page这个基类之中,基类同时还保存了所有的list页面,这样就可以根据需求来通过onNavigate方法预加载我们的页面了。哪个页面有onNavigate方法就执行预加载,没有则不执行。

**b.用户行为预测:**

1.什么是用户行为预测,就是根据用户可能点击某一个界面的机率来预先加载数据,从而实现界面秒开的效果,提高用户的浏览体验。
2.与提高页面加载速度原理大致相同,我们需要给page对象拓展一个方法,在我们每次预载的页面之中调用这个方法,与上一个方法不同的是,本方法的临时数据会储存在storge之中,因为用户有可能不点击这个页面,而把数据全部存储在全局变量中,会影响小程序本身的内存,小程序本身一个也就支持11M的数据。

**c.减少默认data的大小:**

从一个面跳转到下一个页面时,此时我们跳转后的页面会深拷贝一个page对象,所以我们为了提高性能理应减少data的体积,比如data有100个属性时,就会有一个150ms的延迟。

**d.组件化方案:**

我们将一些公共的组件一个封装,在我们需要的时候来进行一个组件的调用,提高复用性,避免内存的重复占用。



### 小程序页面之间有哪些（传值）传递数据的方法？
1.  使用全局变量实现数据传递，需要在app.js中定义全局变量，在不同页面中引用即可。
2.  页面跳转或重定向时，可以使用url带参数传递数据。例如：`wx.navigateTo({ url: 'pages/detail/detail?id=1'})`。
3.  使用组件模板template传递参数，可以在template中定义属性，在引用时传递参数。
4.  使用缓存传递参数，可以使用wx.setStorageSync()方法将数据存储在缓存中，在需要获取时使用wx.getStorageSync()方法获取即可。
5.  使用数据库传递参数，在数据库中存储数据，在需要获取时查询即可。
6.  给html元素添加data-属性来传递值，然后通过e.currentTarget.dataset或onload的param参数获取（data-名称不能有大写字母，不可以存放对象）。
7.  设置id的方法标识来传值，通过e.currentTarget.id获取设置的id值，然后通过设置全局对象的方式来传递数据。
8.  在navigator中添加参数数值，例如：`<navigator url="/pages/detail?id={{id}}"></navigator>`，在跳转时传递参数。


### 怎么封装微信小程序的数据请求的？
在微信小程序中可以使用`wx.request`方法实现数据请求，同时可以通过封装数据请求以提高代码复用性和可维护性。下面介绍一个简单的封装数据请求的方法：

1.  创建一个util.js文件，在该文件中定义一个函数，例如`request(url, method, data, success, fail)`，表示请求url地址，请求方式为method，请求数据为data，成功时回调函数为success，失败时回调函数为fail。
2.  在request函数中使用wx.request方法发送请求，同时将传入的参数传递给wx.request函数。
3.  在request函数中通过success和fail参数来控制成功和失败时的回调函数，将服务器返回的数据作为参数传递给回调函数处理。
4.  在需要调用数据请求的页面中引入util.js文件，然后调用request函数即可。

下面是一个简单的util.js文件的代码示例：
```js
function request(url, method, data, success, fail) {
  wx.request({
    url: url,
    method: method,
    data: data,
    header: {
      'content-type': 'application/json'
    },
    success: function (res) {
      success(res.data);
    },
    fail: function (res) {
      fail(res);
    }
  })
}

module.exports = {
  request: request
}
```
以上是一个简单的封装微信小程序数据请求的方法，可以根据具体需要进行修改和优化，例如添加loading动画、错误处理等。同时，使用ES6中的Promise或async/await等新特性也可以实现更加优雅和高效的数据请求。

### bindtap和catchtap的区别？

bind事件绑定不会阻止冒泡事件向上冒泡  
catch事件绑定可以阻止冒泡事件向上冒泡

### 如何提高小程序的首屏加载时间

1.  减少网络请求：在首屏中如果能减少网络请求，就能减少首屏加载时间。可以将不必要的网络请求推迟到后面再进行，只保留首屏必须进行的请求，减少渲染时间。同时也可以减小图片大小，使用小图标等方式减少网络请求量。
2.  对应用进行模块化：使用模块化的方式将小程序分成不同的部分，只有在需要的时候才进行渲染。每个页面只加载和展示对应模块，减少首屏加载时间。
3.  使用分包加载：将应用拆分成不同的分包，只在使用时加载相关的分包数据。这种方式可以减少首屏渲染所需加载的资源数量，进而减少首屏加载时间。
4.  合理利用缓存：小程序可以使用缓存存储一些数据，减少不必要的网络请求。可以考虑缓存一些与用户相关的数据，例如登录信息、用户信息等。
5.  优化首页代码：需要将能提前获取的数据提前获取，一些繁琐的计算尽可能的放到后台去处理。同时减少页面打包体积，去除未使用的引用，减少资源加载时间。另外，可以为页面设置数据预加载，在页面渲染前预先获取数据，提高用户体验。


### 分包加载?
小程序提供了分包加载的功能，可以将应用的代码划分为多个不同的包来进行加载。这种方式可以将不同的页面放入不同的包中，只有在需要时才进行加载，从而减小小程序的首次加载时间和初始化时间。以下是分包加载的实现步骤：

1.  在app.json文件中，添加`subpackages`属性，并配置需要划分的包信息。例如：
```json
"subpackages": [
  {
    "root": "pages/sub1",
    "pages": [
      "index",
      "list"
    ]
  },
  {
    "root": "pages/sub2",
    "pages": [
      "index",
      "detail"
    ]
  }
]
```

上述代码中，定义了两个分包"sub1"和"sub2"，"sub1"包含了两个页面"index"和"list"，"sub2"包含了两个页面"index"和"detail"。注意，`root`属性是分包路径，必须以`/`开头。
    
2.  在需要使用分包的页面上进行引用。如下代码所示，其中`root`属性为需要引用的分包路径，`name`属性为分包的名称。

```json
// app.js
App({
  onLaunch: function () {
    wx.loadSubPackage({
      name: 'sub1',
      success: function (res) {
        console.log('load sub1 success');
      },
      fail: function (res) {
        console.log('load sub1 fail');
      }
    })
  }
})

// page.js
wx.loadSubPackage({
  root: 'pages/sub2',
  success: function (res) {
    console.log('load sub2 success');
  },
  fail: function (res) {
    console.log('load sub2 fail');
  }
})
```

通过调用`wx.loadSubPackage`方法来加载分包。需要注意的是，加载分包是一个异步操作，需要使用回调函数来处理成功和失败的情况。
分包加载可以大幅减少小程序的初始化时间，从而提高用户体验。但是，需要注意的是，分包也会增加小程序的总体积，因此需要平衡好分包和主包的关系，合理地设置分包大小和分包与主包之间的关系。同时，因为分包的加载是异步的，所以在分包未加载完成之前，页面上可能会存在一些依赖分包的组件无法正常显示的情况，需要注意相关处理。


### 如何自定义组件

（1）先创建一个components文件夹，用来存放所有自定义组件的，目录结构依然是js,wxml,json,wxss

（2）基本配置

json——进行自定义组件声明

```json
json复制代码{
  "component": true
}
```

（3）使用组件

假如在index.wxml中使用这个自定义的组件，首先在index.json中进行声明。

```json
json复制代码{  
  "usingComponents": {  
      "toastdemo": "/components/toastdemo/toastdemo"  
  }  
}
```

（4）接着在index.wxml中引用

（5）然后在index.js进行配置

（6）使用时直接执行this.toastdemo.showToast(‘弹框组件调用成功’,2000)就可以了



### 小程序内的页面跳转

1. wx.navigateTo——保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面（参数必须为字符串）
2. wx.redirectTo——关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面
3. wx.switchTab——跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面，路径后不能带参数
4. wx.navigateBack——关闭当前页面，返回上一页面或多级页面。可通getCurrentPages() 获取当前的页面栈，决定需要返回几层
5. wx.reLaunch——关闭所有页面，打开到应用内的某个页面









## express

### 基本使用

```js
// 引入
let express = require('express');
// 1. 生成应用实例
const app = new express(); // app: application 代表整个应用

// 3. 注册路由
app.get('/', (request, respone) => {
  console.log('1111');
  // 返回数据
  respone.end('success data');
});

app.get('/login', (req, res) =>  {
  console.log('2222');
  res.end('login data');
});

app.post('/register', (req, res) =>  {
  console.log('4444');
  res.end('register data');
});

// 2. 绑定监听(设置当前项目的端口号)
app.listen('3001', (err) => {
  if(err){
    console.log('服务器启动失败');
    console.log(err);
  }else {
    console.log('服务器启动成功');
    console.log('服务器地址： http://localhost:3001');
  }
})

```

### 2. 路由

1. 路由分类
   1. 前端路由
   2. 后端路由
2. 前端路由
   1. 发请求不需要走网络传输层
   2. 需要由前端指定的js库解析(vue-router, react-router-dom)
   3. 应用： SPA（single page application）
3. 后端路由
   1. 发请求需要走网络传输层
   2. 需要由服务器端解析
   3. 应用： 前后端交互

### 3. 路由参数

1. get请求
   1. params参数： 
      1. 请求： url/:id ==> url/参数
      2. 获取： req.params
   2. query参数:
      1. 请求：url?key=value&key2=value2
      2. 获取: req.query
   3. 总结:
      1. params参数只能有一个参数，适用于参数为标识数据
      2. query参数可以有多个
2. post请求
   1. params参数
   2. query参数
   3. body参数
      1. 相对安全
      2. 获取req.body，但是不能直接获取，需要使用中间键

### 4. res常用方法

1. res.end() 返回响应: 直接返回数据
2. res.send() 根据数据类型不同，自动做出判断处理，再返回，如：中文的话会自动设置content-type
3. res.set() 设置响应头的方法
4. res.json() 返回的数据一定是json数据，直接返回
5. res.cookie() 设置cookie
6. res.status() 设置状态码
7. res.redirect() 返回的是新地址，状态码通常是302，浏览器接收到响应以后会跳转至新的地址
8. res.download()  返回的文件信息，浏览器会自动下载该文件

### 5. 中间件

1. 本质
   1. 就是一个函数
2. 作用
   1. 处理请求，返回响应数据
   2. 获取，修改请求的参数及响应数据
   3. 执行下一个中间键
3. 体现形式
   1. (req, res, next) => {}
   2. req: 请求对象
   3. res: 响应对象
   4. next：是一个方法，用来调用下一个中间键
4. 注意
   1. 连续使用多个中间键的时候返回数据的动作应该放在最后且只有一次
   2. 路由对应的回调 也是中间键函数
   3. 如果请求方法和中间键共存的情况下，只能匹配一个，谁在前就匹配谁（满足匹配条件情况下）

## 问题




### 格式化金钱，每千分位加逗号
5种方法
> https://www.cnblogs.com/wangmeijian/p/4163936.html



```javascript
function format(str) {
    let s = ''
    let count = 0
    for (let i = str.length - 1; i >= 0; i--) {
        s = str[i] + s
        count++
        if (count % 3 == 0 && i != 0) {
            s = ',' + s
        }
    }
    return s
}


function format(str) {
    return str.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
//有问题, '3333330.68'.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');添加不上
}
```



### 保持前后端实时通信

保持前后端实时通信的方法有以下几种： 

轮询是客户端和服务器之间会一直进行连接，每隔一段时间就询问一次。

* 优点就是实现简单，无需做过多的更改。
* 缺点是轮询的间隔过长，会导致用户不能及时接收到更新的数据；轮询的间隔过短，会导致查询请求过多，增加服务器端的负担  

长轮询是对轮询的改进版，客户端发送HTTP给服务器之后，如果没有新消息，就一直等待。有新消息，才会返回给客户端。

* 在某种程度上减小了网络带宽和CPU利用率等问题。由于http数据包的头部数据量往往很大（通常有400多个字节），但是真正被服务器需要的数据却很少（有时只有10个字节左右），这样的数据包在网络上周期性的传输，难免对网络带宽是一种浪费。
* 优点是做了优化，有较好的时效性。
* 缺点是保持连接会消耗资源; 服务器没有返回有效数据，程序超时。

iframe流方式是在页面中插入一个隐藏的iframe，利用其src属性在服务器和客户端之间创建一条长连接，服务器向iframe传输数据（通常是HTML，内有负责插入信息的javascript），来实时更新页面。

* 优点是消息能够实时到达；浏览器兼容好。
* 缺点是服务器维护一个长连接会增加开销；IE、chrome、Firefox会显示加载没有完成，图标会不停旋转。 

WebSocket是类似Socket的TCP长连接的通讯模式，一旦WebSocket连接建立后，后续数据都以帧序列的形式传输。在客户端断开WebSocket连接或Server端断掉连接前，不需要客户端和服务端重新发起连接请求。在海量并发和客户端与服务器交互负载流量大的情况下，极大的节省了网络带宽资源的消耗，有明显的性能优势，且客户端发送和接受消息是在同一个持久连接上发起，实时性优势明显。缺点是浏览器支持程度不一致，不支持断开重连。 SSE(Server-Sent Event)是建立在浏览器与服务器之间的通信渠道，然后服务器向浏览器推送信息。

SSE 是单向通道，只能服务器向浏览器发送，因为 streaming 本质上就是下载。 优点是SSE 使用 HTTP 协议，现有的服务器软件都支持。SSE 属于轻量级，使用简单；SSE 默认支持断线重连； 

轮询适用于：小型应用，实时性不高 长轮询适用于：一些早期的对及时性有一些要求的应用：web IM 聊天 iframe适用于：客服通信等 WebSocket适用于：微信、网络互动游戏等 SSE适用于：金融股票数据、看板等










## 自我介绍

```md
// 时间1分钟30秒左右

您好,面试官. 我叫xxx, 我面试的岗位是前端开发.
个人目前涉及的技术包括:
 vue及全家桶系列, UI框架包括elementUI, antUI, vantUI.
 熟悉原生JavaScript/ts开发
 了解小程序/uniapp开发,最近也在使用react开发后台管理项目
 同时,我熟悉SEO/SEM开发,个人也在github上翻译英文仓库.
 
个人做过的项目有:
	商城网站前后台
	国网APP下一个微应用
	铁塔大屏/铁塔后台管理/铁塔h5应用掌上精分等
	
	商城网站用来为客户提供商品的展示和购买服务,使用vue2+elementUI,个人负责及参与的页面包括首页,详情页及支付购买页面.
	国网APP的微应用是是便于国网基层员工对用电单位进行多维度的信息普查工具,使用vue2+vant, 个人负责的是基本信息普查模块.
	铁塔大屏项目是统计铁塔业务数据,使用echarts,组件封装,二级表格来展示数据
	铁塔后台管理是表单表格类的数据展示及处理
	铁塔h5应用
	
最后,我希望在新的工作岗位上能有更多项目历练及技术提升的机会.
```


# 移动端

### 4种适配方案

主流的适配方式有4种：
* 媒体查询
* viewport 适配
* rem 适配（主流方式，几乎完美适配）
* vw适配

> 由于 `viewport` 单位得到众多浏览器的兼容，`lib-flexible`这个过渡方案已经可以放弃使用，官方已经不再维护了

### 0.媒体查询

#### 概述

> 通过CSS的@media媒体查询设置不同的style.通过媒体查询,可以根据不同的屏幕设置不同样式,实现不同屏幕适配.

link元素中的CSS媒体查询,不同屏幕加载不同样式文件

```html
<link rel='stylesheet' media="(max-width: 500px)" href="mobile.css"/>
<link rel='stylesheet' media="(min-width: 980px)" href="pc.css" />
```

CSS样式表中的媒体查询:

```html
//mobile.css

@media only screen and (max-width: 414px){
	html{ font-size: 64px;}
}
@media only screen and (max-width: 375px) {
	html{ font-size:58px}
}
@media only screen and (max-width:360px) {
	html{ font-size: 56px}
}
@media only screen and (max-width: 320px) {
	html{ font-size: 50px;}
}
```


### 1.viewport 适配

- 方法：拿到设计稿之后，设置**布局视口**宽度为设计稿宽度，然后直接按照设计稿给宽高进行布局即可。
- 优点：不用复杂的计算，直接使用图稿上标注的px值
- 缺点：
  - 不能使用完整的meta标签，会导致在某些安卓手机上有兼容性问题。
  - 不希望适配的东西，例如边框，也强制参与了适配

```css
<meta name="viewport" content="width=375">
```


### 2 rem适配 

#### 原理
据屏幕宽度动态设置`html`标签的`font-size`。再将设计稿中各元素的`px`替换为`rem`单位，就可以达到适配的目的。

**em 和 rem**
em 和 rem 都是 css 中的长度单位。而且两个都是相对长度单位，不过两个有点区别
* em 相对的是父级元素的字体大小
* rem 相对的是根元素的字体大小

rem适配的原理：编写样式时统一使用rem为单位，在不同设备上动态调整根字体大小



#### 具体方案

##### 方案一 设置值/100

![rem适配方案1.png](https://i.loli.net/2021/01/05/ziclxkXCKmEVnaM.png)

##### 方案介绍

淘宝、百度的移动端页面用的此方案

1. 设置完美视口
2. <span style="color:#ee0b41">通过js设置根字体大小 = ( 当前设备横向独立像素值 *100)/设计稿宽度</span>
3. <span style="color:#ee0b41">编写样式时，直接以rem为单位，值为：原型上设计值 / 100 </span>  
4. 增加 JS 代码进行实时适配

##### 公式详解
来让我们细化一下公式:
```html
还是相同占比的问题:

设计值/设计稿宽度  = x/dip

设计值/设计稿宽度*100 = x/dip*100

```


$$
\begin{aligned}
\frac{设计值}{设计稿宽度} = \frac{x}{dip} \\
\\
\frac{dip*100}{设计稿宽度} = \frac{x*100}{设计值} \\
\\
规定:1rem=\frac{dip*100}{设计稿宽度}
\\
故: 1rem = \frac{x*100}{设计值} = \frac{dip*100}{设计稿宽度}
\\
故: x = \frac{设计值}{100}*1rem
\end{aligned}
$$


##### 代码实例

优势：编写样式时直接挪动小数点即可。

```html
//页面JS脚本中-设置实时刷新页面布局
<script type='text/javascript'>
    function adapter(){ //适配器函数
  			//获取手机横向的设备独立像素dip
        const dip=document.documentElement.clientWidth;
  			//计算根根字体大小(100是我们指定的,375是设计稿宽度)
        const rootfontSize=(dip*100)/375;
  			//设置根字体
    	document.documentElement.style.fontSize=rootFontSize+'px';
    }
    window.onresize=adapter;
</script>

less写法:
@font:100rem;
*{margin:0;padding:0}
#demo{
	width:690/@font;
	height:300/@font;
	background-color:#ddd;
    //border:1px solid black; 边框不参与适配 都是固定的1px
	border:0.01rem solid black; 边框参与适配 有大有小 1/100
}
```







##### 方法二  设计值/(设计稿宽度/10)

![rem适配方案2.png](https://i.loli.net/2021/01/05/PnVTJDEoRyYHAqO.png)

搜狐、唯品会的移动端页面用的此方案

1. 设置完美视口
2. <span style="color:#ee0b41">通过js设置根字体大小  = 当前设备横向独立像素值 / 10 </span>
3. <span style="color:#ee0b41">编写样式时，直接以rem为单位，值为：(设计值/(设计稿宽度/10))*rem</span>   例如345px/(375px/10)\*rem(41.4px)
4. 增加 JS 代码进行实时适配

```javascript
function adapter() {
  let rem = document.documentElement.clientWidth / 10
  
  document.style.fontSize = rem + 'px'
   
}

window.onresize = adapter()
```





### 3.vw vh方案

> https://www.luanzhuxian.com/post/783ce8a9.html

由于`viewport`单位得到众多浏览器的兼容，上面方案现在已经被官方弃用。现在最流行的是`vw`、`vh`方案。

`vh、vw`方案即将视觉视口宽度 `window.innerWidth `和视觉视口高度 `window.innerHeight` 等分为 100 份. 

#### 单位

vw和vh是两个相对单位
- vw(Viewport’s width)：`1vw`等于视觉视口的1%。
- vh(Viewport’s height)：`1vh`为视觉视口高度的1%。
- vmin：`vw`和`vh`中的较小值。
- vmax：选取`vw`和`vh`中的较大值。

如果视觉视口为375px,那么1vw=3.75px, 这时UI给定的一个元素的宽为75px(设备独立像素),我们只需要将它设位置75/3.75 = 20vw.


#### vh实践
>来源: CSS新世界>7.3 rem和vw单位与移动端适配最佳实践

vh单位的经典应用，那就是当内容高度不足一屏时，让底部栏贴在浏览器窗口的底部；当内容高度超过一屏时，让底部栏贴在页面最下方。
```html
	<div class="container">
		<content></content>
		<footer></footer>
	</div>
```

```css
.container {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}
footer {
	margin-top: auto;
}
```


#### vw+calc函数实现移动端布局适配方案
> CSS新世界 7.3 rem和vw单位与移动端适配最佳实践

有了vw单位，再配合calc()函数进行计算，无须使用任何JavaScript代码，我们就可以实现基于设备宽度的移动端布局适配方案。

例如，希望375px～414px的宽度区间的根字号大小是16px～18px，就可以这么设置：
```css
html {
	font-size: 16px;
}

@media screen and (min-width: 375px) {
	html {
	  // 
		font-size: calc(16px + 2 * (100vw - 375px) / 39); 
	}
}

@media screen and (min-width: 414px) {
	html {
		font-size: 18px;
	}
}
```

按照上面的计算公式,如果设备宽度是375px,则font-size属性的计算值是16px; 如果设备宽度是400px,则计算值为17.28px; 如果设备宽度是414px，则font-size属性的计算值是18px;
第二步,这样，无论手机的宽度是多少，都可以有一个合适的根字号大小。此时只需要把视觉稿对应的px尺寸使用rem表示就可以了。例如，视觉稿上图片尺寸是120px×80px，则我们布局的时候使用：
```css
img {
	width: 7.5rem;
	height: 5rem;
}
```
3px的间隙可以如下表示:
```css
.container {
	gap: calc(3/16rem);
	/* 也可以直接设置成 gap:.1875rem; */
}
```


#### 最佳实践范例代码
>下面这段CSS代码是我最常用的基于rem和vw单位并配合calc()函数的移动端适配代码，大家可以自行微调或者直接复制粘贴到自己的项目中使用，例如screen and可以删除，1000px之后的尺寸可以使用固定值等：

```css
html {
    font-size: 16px;
}
@media screen and (min-width: 375px) {
    html {
        /* 375px作为16px基准，414px宽度时正好对应18px的根字号大小 */
        font-size: calc(16px + 2 * (100vw - 375px) / 39);
    }
}
@media screen and (min-width: 414px) {
    html {
        /* 屏幕宽度从414px到1000px，根字号大小累积增加4px（18px-22px） */
        font-size: calc(18px + 4 * (100vw - 414px) / 586);
    }
}
@media screen and (min-width: 1000px) {
    html {
        /* 屏幕宽度从1000px往后每增加100px，根字号大小就增加0.5px */
        font-size: calc(22px + 5 * (100vw - 1000px) / 1000);
    }
}
```


**起点中文网移动端 适配方案**
```css
html {
  font-size: 16px
}
@media screen and (min-width:375px) {
  html {
    font-size: calc(100% + 2 * (100vw - 375px)/ 39);
    font-size: calc(16px + 2 * (100vw - 375px)/ 39)
  }
}
@media screen and (min-width:414px) {
  html {
    font-size: calc(112.5% + 4 * (100vw - 414px)/ 586);
    font-size: calc(18px + 4 * (100vw - 414px)/ 586)
  }
}
@media screen and (min-width:600px) {
  html {
    font-size: calc(125% + 4 * (100vw - 600px)/ 400);
    font-size: calc(20px + 4 * (100vw - 600px)/ 400)
  }
}
@media screen and (min-width:1000px) {
  html {
    font-size: calc(137.5% + 6 * (100vw - 1000px)/ 1000);
    font-size: calc(22px + 6 * (100vw - 1000px)/ 1000)
  }
}
```

#### 范例升级+clamp函数
>随着越来越多的浏览器支持clamp()函数，我们也可以使用下面这种更加精简的语法：

```css
html {
	font-size: 16px;
	font-size: clamp(16px, calc(16px + 2 * (100vw - 375px) / 39), 22px);
}
```


#### 纯vw适配方案使用场景
>CSS新世界 7.3 rem和vw单位与移动端适配最佳实践


>在这种纯vw单位的布局方式下，布局尺寸和图文大小既不使用px单位，也不使用rem单位，而是统一使用vw单位。例如，视觉稿上图片的尺寸是120px×80px，使用vw单位表示就是：

```css
img {
	- [ ] width: 32vw;
	height: 21.333vw;
}
```

一切单位皆是vw。于是，开发的时候只需要使用vw单位按照1∶1的尺寸将视觉稿复刻下来，就可以做到无论是什么宽度的设备，都会等比例缩放，不用担心因为设备宽度不一样而出现错位或无法对齐等布局问题。
但是，不建议在长期维护的大型项目中使用纯vw布局方式，因为这种布局方式一旦确定，后期更换布局的成本会非常高，这种布局方式比较适合用在运营活动页面中。


### Vue中的移动端适配
> 新增一个`postcss.config.js`文件，然后下载`yarn add -D # postcss-px-to-viewport-8-plugin`，这样在代码中写入的`px`会自动转换成`vw`单位，同样可以达到移动端适配的效果。


```js
// postcss.config.js文件内容
module.exports = {
  plugins: {
    "# postcss-px-to-viewport-8-plugin": {
      unitToConvert: "px", // 要转化的单位
      viewportWidth: 375, // UI设计稿的宽度
      unitPrecision: 6, // 转换后的精度，即小数点位数
      propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
      viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
      fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
      selectorBlackList: ["wrap"], // 指定不转换为视窗单位的类名，
      minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
      mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
      replace: true, // 是否转换后直接更换属性值
      exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
      landscape: false, // 是否处理横屏情况
    },
  },
};


```










### 移动端问题

#### 1px物理像素边框

高清屏幕下 1px 对应更多的物理像素，所以 1 像素边框看起来比较粗，解决方法如下

##### 方法一

使用媒查询：

```css
@media screen and (-webkit-min-device-pixel-ratio:2){
    #demo{
        border: 0.5px solid black;
    }
}
或
@media screen and (-webkit-min-device-pixel-ratio:2){
    #demo2::after{
        transform:scaleY(0.5);
    }
}
```

##### 方法二

根据dpr扩大布局视口，例如dpr为n则布局视口改为原来的n倍，则元素尺寸均变为原来的n分之一，为了保证元素尺寸比例不变，扩大根字体为原来的n倍，但整个过程中边框一直用px作为单位，不用rem。

1. rem 页面布局

2. 元素的边框设置为 1px

3. 通过 viewport 中的 initial-scale 将布局视口扩大n倍，这样页面元素就比原来缩小了n倍

```js
var viewport = document.querySelector('meta[name=viewport]')
var scale = 1 / window.devicePixelRatio
viewport.setAttribute('content', 'width=device-width,initial-scale=' + scale);
```

4. 重新设置根元素字体

```js
var fontSize = parseInt(document.documentElement.style.fontSize);
document.documentElement.style.fontSize = fontSize * window.devicePixelRatio + 'px'
```

### 移动端事件

* touchstart   元素上触摸开始时触发
* touchmove   元素上触摸移动时触发
* touchend   手指从元素上离开时触发
* touchcancel   触摸被打断时触发

### 移动端中touchstart,touchend,click执行顺序

- touchstart
- touchend
- click，浏览器在 click 后会等待约300ms去判断用户是否有双击行为，如果300ms内没有再一次click，那么就判定这是一次单击行为

### 点击穿透

- touch 事件结束后会默认触发元素的 click 事件

  方法一：阻止默认行为

  方法二：使背后元素不具备click特性，用touchXxxx代替click

  方法三：让背后的元素暂时失去click事件，300毫秒左右再复原，属性`pointer-events: none;`

  方法四：让隐藏的元素延迟300毫秒左右再隐藏

### getComputedStyle

- 可读取到非内联样式上的属性
- 可以通过使用 getComputedStyle 读取样式，通过 element.style 修改样式



### viewport

#### 设备像素(device pixel)

又名物理像素, 从屏幕在工厂生产出的那天起，它上面设备像素点就固定不变了，单位为`pt`

#### 设备独立像素

设备独立像素简称 DIP （device-independent pixel），又称：**屏幕密度无关像素**。表示*与设备无关的逻辑像素*，<span style="color:blue">代表可以通过程序控制使用的虚拟像素</span>。是一个总体概念，包括了`css`像素。可以理解为：<span style="color:blue">`CSS像素 = 设备独立像素 = 逻辑像素`。</span>在`iOS`、`Android`和`React Native`开发中样式单位其实都使用的是设备独立像素。

出现的原因?

更高分辨率的屏幕诞生.理论上来讲，在白色手机(分辨率320\*480)上相同大小的图片和文字，在黑色手机(分辨率640\*960)上会被缩小一倍，因为它的分辨率提高了一倍。

获取

在`javaScript`中可以通过`window.screen.width/ window.screen.height` 查看

#### 设备像素比

##### 是什么

设备像素比dpr(device pixel ratio), 单一方向上【设备像素】除以【设备独立像素】的比值，用于描述整个渲染环境在硬件设备上的缩放程度。

##### 获取

`window.devicePixelRatio`来帮助我们获取`dpr`。



#### 布局视口

获取

`document.documentElement.clientWidth / clientHeight`

设置

如果显式设置布局视口,可以使用HTML中的meta标签

```javascript
<meta name='viewport' content="width=400"
```

布局视口使移动端浏览器屏幕宽度与视口完全独立开来. CSS将根据它来进行计算,并被它约束.



#### 视觉视口

视觉视口(`visual viewport`)：用户通过屏幕真实看到的区域。

视觉视口默认等于当前浏览器的窗口大小<span style="background: #ccc">（包括滚动条宽度）</span>。

用户可以通过缩放操作视觉视口,同时不会影响布局视口.

<u>获取:</u>

```javascript
window.innerwidth / innerHeight
```



#### 理想视口

调用`screen.width / height`来获取理想视口大小。

上面在介绍`CSS像素时`曾经提到`页面的缩放系数 = CSS像素 / 设备独立像素`，实际上说`页面的缩放系数 = 理想视口宽度 / 视觉视口宽度`更为准确。????

所以，当页面缩放比例为`100%`时，`CSS像素 = 设备独立像素`，`理想视口 = 视觉视口`。

移动设备一般具有固定的DPR,即在缩放100%时, 用多少个物理像素显示一个逻辑像素,在CSS中就是用多少个物理像素来显示一个CSS像素.

> 理想视口宽度 = 移动设备横向分辨率 / DPR



#### 视口设置

移动设备默认的`viewport`是`layout viewport`，也就是那个比屏幕要宽的`viewport`，但在进行移动设备网站的开发时，我们需要的是`ideal viewport`。那么怎么才能得到`ideal viewport`呢？这就该轮到`meta`标签出场了。

借助`meta`元素的`viewport`来帮助我们设置视口、缩放等，从而让移动端得到更好的展示效果。

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maxium-scale=1, user-scalable=no">
```



`viewport`配置的具体含义：

| name          | 可能值                | 描述                                                         |
| :------------ | :-------------------- | :----------------------------------------------------------- |
| width         | 正整数或device-width  | 以pixels（像素）为单位， 定义布局视口的宽度。                |
| height        | 正整数或device-height | 以pixels（像素）为单位， 定义布局视口的高度。                |
| initial-scale | 0.0 - 10.0            | 定义页面初始缩放比率。This parameter sets the initial zoom level, which means **1 CSS pixel** is equal to **1 viewport pixel**. |
| minimum-scale | 0.0 - 10.0            | 定义缩放的最小值；必须小于或等于maximum-scale的值。          |
| maximum-scale | 0.0 - 10.0            | 定义缩放的最大值；必须大于或等于minimum-scale的值。          |
| user-scalable | 布尔值（yes或者no）   | 如果设置为 no，用户将不能放大或缩小网页。默认值为 yes。      |





https://juejin.cn/column/7044426014323605541



## 项目重点
### 1.axios配置-处理重复请求


### 2.axios配置-缓存结果



### 3.axios配置-处理竟态问题



### 4.axios封装方案
#### 1.核心功能点

1.统一响应格式定义
```ts
export interface FcResponse<T> {
	errno?: string
	errmsg?: string
	data: T
}

//统一返回格式, 便于错误处理
export type ApiResponse<T> = Promise<[Error | null, FcResponse<T> | undefined]
```

2.请求重试机制: 支持配置重试次数,延迟时间和重试条件
```ts
export interface RetryConfig {
	retries: number
	retryDelay: number
	retryCondition?: (error: Error) => boolean
}
```

3.防止重复请求
使用map来存储进行中的请求
使用AbortController实现请求取消
```ts
private pendingRequest: Map<string, AbortController>
```


#### 2.拦截器设置
##### 1.请求拦截器
* 防止重复请求
* 统一处理请求头
* 处理认证信息

##### 2.响应拦截器
* 统一状态码处理
* 业务错误处理
* 网络错误处理
* 请求完成后的清理工作

#### 3.实用功能
##### 1.数据转换
支持自定义响应数据转换
```ts
export type TransformFn<T> = (resopnse: IAnyObj) => FcResponse<T>
```

##### 2.完整的请求方法
* 支持get, post, put, delete, patch等常用方法
* 支持文件下载功能
* 支持请求参数和url参数分离

##### 3.请求管理
* 支持取消所有请求
* 支持获取进行中的请求数量

#### 4.安全性考虑
##### 1.跨域处理
支持跨域携带cookie
```ts
withCredentials: true
```

##### 2.超时控制
```ts
timeout: 1000 * 10
```















### 5.后台管理中的权限管理
#### 来源
> [面试官：vue要做权限管理该怎么做？如果控制到按钮级别的权限怎么做？ | web前端面试 - 面试官系列 (vue3js.cn)](https://vue3js.cn/interview/vue/permission.html#%E4%B8%80%E3%80%81%E6%98%AF%E4%BB%80%E4%B9%88)
> [vue权限路由实现方式总结全局路由守卫每次都判断用户是否已经登录，没有登录则跳到登录页。已经登录(已经取得后台返回的用户 - 掘金 (juejin.cn)](https://juejin.cn/post/6844903648057622536?searchId=2024092818194401DD58038C33CF2EDEDE)


#### 是什么
权限是对特定资源的访问许可，所谓权限控制，也就是确保用户只能访问到被分配的资源
而前端权限归根结底是**请求的发起权**，请求的发起可能有下面两种形式触发:
- 页面加载触发
- 页面上的按钮点击触发

总的来说，所有的请求发起都触发自前端路由或视图,对触发权限的源头进行控制，最终要实现的目标是：

- 路由方面，用户登录后只能看到自己有权访问的导航菜单，也只能访问自己有权访问的路由地址，否则将跳转 `4xx` 提示页
  
- 视图方面，用户只能看到自己有权浏览的内容和有权操作的控件
  
- 最后再加上请求控制作为最后一道防线，路由可能配置失误，按钮可能忘了加权限，这种时候请求控制可以用来兜底，越权请求将在前端被拦截


#### 如何做?
前端权限控制可以分为四个方面：
- 接口权限
- 按钮权限
- 菜单权限
- 路由权限



#### 接口权限
接口权限目前一般采用`jwt`的形式来验证，没有通过的话一般返回`401`，跳转到登录页面重新进行登录
登录完拿到`token`，将`token`存起来，通过`axios`请求拦截器进行拦截，每次请求的时候头部携带`token`
```js
axios.interceptors.request.use(config => {
    config.headers['token'] = cookie.get('token')
    return config
})
axios.interceptors.response.use(res=>{},{response}=>{
    if (response.data.code === 40099 || response.data.code === 40098) { //token过期或者错误
        router.push('/login')
    }
})
```


#### 路由权限

##### 1.使用全局路由守卫

**怎么实现**
1. 定义路由，标记相应的权限信息. 
2. 全局路由守卫每次判断用户是否已登录
	1. 没有登录,则跳到登录页
	2. 已经登录,则判断当前要跳转的路由,用户是否有权限访问
		1. 没有权限访问,则跳到事先定义好的界面(403,404之类)

使用这种方式,菜单可以直接使用路由生成(用户没有权限的菜单也会显示,点击跳转时才会做权限判断),也可以在用户登录以后根据用户权限把路由过滤一遍生成菜单(菜单需要保存在vuex中)

**缺点**
* 一次性加载所有的路由，对性能可能会有潜在影响。
- 每次更改相关路由信息，需要重新编译
- 菜单跟路由耦合在一起，定义路由的时候还有添加菜单显示标题，图标之类的信息，而且路由不一定作为菜单显示，还要多加字段进行标识
  

**实例**
```js
const routerMap = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: 'permission',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [{
      path: 'page',
      component: () => import('@/views/permission/page'),
      name: 'pagePermission',
      meta: {
        title: 'pagePermission',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    }, {
      path: 'directive',
      component: () => import('@/views/permission/directive'),
      name: 'directivePermission',
      meta: {
        title: 'directivePermission'
        // if do not set roles, means: this page does not require permission
      }
    }]
  }]

```

> 目前[iview-admin](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fiview%2Fiview-admin%2Fblob%2Fdev%2Fsrc%2Frouter%2Findex.js "https://github.com/iview/iview-admin/blob/dev/src/router/index.js")还是用的这种方式



##### 方案2-动态路由
**描述**
1. 初始化时,先加载公共路由,例如登录页,404等错误页.
2. 登陆后进行路由跳转时
	1. 没有获取到用户信息
		1. 没有: 发送请求获取用户信息,根据用户信息获取动态路由, 将路由信息添加到路由中
	2. 获取到了用户信息
		1. 判断路由权限信息和要跳转的路由关系,是否包含: 继续跳转或401页面

```js
import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import { getToken } from '@/utils/auth' // getToken from cookie

NProgress.configure({ showSpinner: false })// NProgress Configuration

// permission judge function
function hasPermission(roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true // admin permission passed directly
  if (!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

const whiteList = ['/login', '/authredirect']// no redirect whitelist

router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  if (getToken()) { // determine if there has token
    /* has token*/
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
    } else {
      if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
        store.dispatch('GetUserInfo').then(res => { // 拉取user_info
          const roles = res.data.roles // note: roles must be a array! such as: ['editor','develop']
          store.dispatch('GenerateRoutes', { roles }).then(() => { // 根据roles权限生成可访问的路由表
            router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
            next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
          })
        }).catch((err) => {
          store.dispatch('FedLogOut').then(() => {
            Message.error(err || 'Verification failed, please login again')
            next({ path: '/' })
          })
        })
      } else {
        // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
        if (hasPermission(store.getters.roles, to.meta.roles)) {
          next()//
        } else {
          next({ path: '/401', replace: true, query: { noGoBack: true }})
        }
        // 可删 ↑
      }
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next('/login') // 否则全部重定向到登录页
      NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
```




#### 按钮权限
##### 方案1
使用`v-if`判断,适用于简单模式. 

##### 方案2
通过自定义指令进行按钮权限的判断
首先配置路由

```js
{
    path: '/permission',
    component: Layout,
    name: '权限测试',
    meta: {
        btnPermissions: ['admin', 'supper', 'normal']
    },
    //页面需要的权限
    children: [{
        path: 'supper',
        component: _import('system/supper'),
        name: '权限测试页',
        meta: {
            btnPermissions: ['admin', 'supper']
        } //页面需要的权限
    },
    {
        path: 'normal',
        component: _import('system/normal'),
        name: '权限测试页',
        meta: {
            btnPermissions: ['admin']
        } //页面需要的权限
    }]
}
```



自定义权限鉴定指令

```js
import Vue from 'vue'
/**权限指令**/
const has = Vue.directive('has', {
    bind: function (el, binding, vnode) {
        // 获取页面按钮权限
        let btnPermissionsArr = [];
        if(binding.value){
            // 如果指令传值，获取指令参数，根据指令参数和当前登录人按钮权限做比较。
            btnPermissionsArr = Array.of(binding.value);
        }else{
            // 否则获取路由中的参数，根据路由的btnPermissionsArr和当前登录人按钮权限做比较。
            btnPermissionsArr = vnode.context.$route.meta.btnPermissions;
        }
        if (!Vue.prototype.$_has(btnPermissionsArr)) {
            el.parentNode.removeChild(el);
        }
    }
});
// 权限检查方法
Vue.prototype.$_has = function (value) {
    let isExist = false;
    // 获取用户按钮权限
    let btnPermissionsStr = sessionStorage.getItem("btnPermissions");
    if (btnPermissionsStr == undefined || btnPermissionsStr == null) {
        return false;
    }
    if (value.indexOf(btnPermissionsStr) > -1) {
        isExist = true;
    }
    return isExist;
};
export {has}
```


在使用的按钮中只需要引用`v-has`指令

```html
<el-button @click='editClick' type="primary" v-has>编辑</el-button>
```

# 前端工程化


## 文章来源
* https://mp.weixin.qq.com/s/B-cFH2WGbL-Nf93CUN8wrQ
* 

## 是什么

其宗旨是: 提高团队协作能力，提高开发效率，降低维护成本. 
其流程包括:
- **技术选型**
- **统一规范**
- **测试**
- **部署**
- **监控**
- **性能优化**
- **重构**

![[Pasted image 20250321122500.png]]







* 代码规范(命名,格式,目录,注释,类型)
* git规范
* node/npm规范
* 脚手架相关配置
* 统一的请求配置(axios)
* 待补充...



## 零.技术选型

### 0-1 框架选择
* 市场占有率高的; 团队最熟的.

## 一.统一规范
### 1.样式规范

#### 0) 目的
* 提高开发效率, 提高团队协作能力
* 降低维护难度, 分治

#### 1) 是什么?

在一个前端项目中,可以将代码规范分为如下几类:

* 命名规范
* 格式规范
* 目录规范
* 注释规范
* 类型规范

#### 2) 规范标准

##### 命名规范:

> 命名规范指的是,最基础的代码规范

**标准:**

* 下划线命名: 如`user_name`
* 中划线命名: 如`user-name`
* 小驼峰命名: 如`userName`
* 大驼峰命名: 如`UserName`

**使用案例:**

* 变量/属性/参数: 下划线命名
* 函数: 小驼峰命名
* 类/类型: 大驼峰命名
* 文件/文件夹: 中划线命名



##### 格式规范:

> 指的是,代码中使用的基本符号和组织代码的规范

例如:

* 代码结尾是否使用分号
* 使用单引号或双引号
* 缩进的空格是2还是4
* 字符之间的空格是1还是2
* 宽度超过多少自动换行
* 最多的连续空行
* ...



##### 目录规范

> 指的是,项目中目录解构的规范

推荐一种:

```md
src
	- assets 资源目录
	- composables 公共方法目录
	- components 公共组件目录
	- pages 页面目录
	- router 路由目录
	- request 请求目录
	- styles 全局样式目录
	- stores 全局状态管理目录
	- utils 工具目录
config 构建配置目录
public 静态资源目录
dist 构建后的代码目录
node_modules 依赖目录
```



##### 注释规范

js中的注释有单行注释,多行注释.但此处只强调函数规范:

```js
/**
* @desc 函数整体描述
* @params 参数描述
* @callback 回调函数描述
* @return 函数返回值描述
* /
```



##### 类型规范

> 指的是, 如何设置TS类型.有俩个方面: 命名规范和分组规范.

命名规范: 类和类型都使用大驼峰命名

分组规范: 通过命名空间和模块两种方案实现, 避免出现全局状态下发生命名冲突


##### 其它
可以使用现成的代码规范, 在此基础上结合需求作个性化更改. 例如:
- airbnb (101k star 英文版)，airbnb-中文版
- standard (24.5k star) 中文版
- 百度前端编码规范 3.9k

css 代码规范也有不少，例如：
- styleguide 2.3k
- spec 3.9k




#### 3) 检测和统一规范

使用`ESLint`插件及依赖检查代码质量, 使用`prettier`插件及依赖统一格式规范, 使用vscode配置文件`.vscode/settings.json`共享格式化配置.



##### 安装ESLint依赖及配置

> 注意: 安装的版本是eslint@9.17.0

1.安装. 安装完成后, 会在根目录下生成的文件是`.eslint.config.js`

```bash
npm i @eslint/config@latest
```



2.安装JS框架相关依赖(可省略,初始化步骤中包含)

安装vue相关的eslint

```bash
npm init eslint-plugin-vue -D
```

配置`eslint.config.js`

```js
// .eslint.config.js

import pluginVue from 'eslint-plugin-vue'

export defualt [
	...pluginVue.configs['flat/recommended'],
]

```



3.可添加自定义规范

如果要自定义规范,可以将多条规则定义在rules对象下,此时会覆盖默认的规则.
例如,下面例子中添加了命名规范.

```js
import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    files: ['src/*.{js,ts,vue}'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },

    rules: {
      //命名规范配置
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: ['variable', 'parameter', 'property'],
          format: ['snake_case'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow',
        },
        {
          selector: ['function'],
          format: ['camelCase'],
        },
        {
          selector: ['class', 'typeAlias', 'interface'],
          format: ['PascalCase'],
        },
      ],
    },
  },
]
```



4.检测相关文件的代码规范

不过只能使用终端命令行的方式

```bash
npx eslint [文件或目录]
```







##### 安装prettier依赖及配置

使用prettier进行代码格式化,代替ESLint的代码规范

1.安装

```bash
npm i prettier -D
```



2.根目录下创建`.prettierrc.json`文件

```json
// .prettierrc.json

{
  "singleQuote": true,
  "semi": false,
  "arrowParens": "avoid",
  "bracketSpacing": true,
  "jsxBracketSameLine": true,
  "requirePragma": false,
  "overrides": [
    {
      "files": ["*.json"],
      "options": {
        "parser": "json-stringify"
      }
    }
  ]
}
```



3.格式化代码

此时我们可以通过在控制台使用命令行或添加npm脚本的方式来执行格式化操作

```bash
//命令行
npx prettier --write xxx.js


//package.json中添加脚本
"scripts": {
	"format": "prettier --write \"src/**/*.js\" \"src/**/*.ts\""
}
```





##### 安装插件及配置实现自动化检查

> 在vscode中安装`prettier`和`ESLint`插件, 添加相关配置,实现保存后自动检查和格式化.



**安装ESLint插件及配置**

> 注意: ESLint插件版本3.0.10, ESLint依赖版本9.0.17

1.安装插件

2.更新`.vscode/settings.json`中的相关配置:

```json
// .vscode/settings.json

"eslint.useFlatConfig": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always"
  },
  "eslint.format.enable": false
```

注意: 插件`3.10.0 202412`版本在执行eslint命令行检查时会产生一个错误(在控制台ouput栏查看), 其内容为`'configFile' has been removed. Please use the 'overrideConfigFile' option instead.`, 但是新发布版本没有这个问题. 所以注意一下即可.



**安装prettier插件及配置**



1.安装插件

2.更新`.vscode/settings.json`中格式化配置

```json
// .vscode/settings.json

"editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.formatOnSave": true,
```



配置完成以后, 当保存文件后,会自动使用prettier进行格式化处理.



### 2.git规范

#### 1).制定规范

git规范包括两个方面: 提交规范和分支规范.主要看下提交规范.

将提交信息按照功能划分,添加固定前缀, 其通用规范如下:

```md
feat: 新增
fix: 修复bug
perf: 优化性能
refactor: 重构
chore: 杂项
build: 构建相关
ci: 持续集成
style: 样式更改
test: 单元测试
```



使用案例: 

```bash
git commit -m "feat: 完成用户模块"
```







#### 2).验证规范

使用较为通用的组合插件来实现验证规范,同时提供eslint检查,prettier格式化,提交信息自定义的功能.

采用`husky+lintStaged+commitlint+commitizen+cz-git`组合.



##### -1.安装配置husky

> husky用来创建客户端钩子

1.安装

```bash
npm i husky -D
```

2.初始化husky

```bash
npx husky init
```

初始化以后,会在根目录下生成`.husky`文件夹,里面有`'_'文件夹, pre-commit文件`. pre-commit内容是`npm test`. 安装以后,当我们使用`git commit -m xxx`命令时,就会触发对应的钩子,执行里面的命令行语句, 其语句内容一般是执行`package.json`中的脚本.





##### -2. lint-staged安装及配置

1.安装

```bash
npm i -D lint-staged
```

2.配置`package.json`

```json

//package.json
"scripts": {
 ....
 "lint:lint-staged": "lint-staged"
},
"lint-staged": {
	"*.{js,ts,vue}": [
		"eslint --fix",
		"prettier --write"
	],
	"*.{cjs, json}": [
		"prettier --write"
	],
	"*.{vue,html}": [
		"eslint --fix",
		"prettier --write",
		//"stylelint --fix"
	],
	"*.{scss,less,css}": [
		//"stylelint --fix",
		"prettier --write"
	],
	"*.md": [
		"prettier --write"
	]
}
```



##### -3.修改husky文件夹下的`pre-commit`内容

```
npm run lint:lint-staged
```



此时,我们执行`git commit -m xxx`时候,就会触发pre-commit钩子, 进行eslint,prettier的检查和格式化操作.如果有错误就会在控制台打印,终端执行.



##### -4.commitlint安装及配置

1.安装

```bash
npm i -D @commitlint/cli, @commitlint/config-conventional
```



2.配置: 根目录下创建`commitlint.config.js`文件,添加如下内容:

```js
// commitlint.config.js

export default {
  extends: ['@commitlint/config-conventional'],
  	rules: {
		'subject-case': [0], //subject大小写不做校验
		'type-enum': [
			2,             //验证的错误级别
			'always',      //在什么情况下验证, always表示一直验证
			[
				'feat',
				'fix',
				'docs',
				'style',
				'refactor',
				'perf',
				'test',
				'build',
				'ci',
				'revert',
				'chore'
			]
		]
	}
}
```



3.commitlint添加到husky钩子中

执行如下命令:

```bash
echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg
```

此时我们执行`git commit -m 'abc'`的化, 就会报错

##### -5.commitizen和cz-git安装及配置

1.安装

```bash
npm i -D commitizen cz-git
```

2.修改配置

修改package.json, 添加config用来指定使用的适配器

```json
//package.json

{
 "sciprts": {},
 "config": {
	 "commitizen": {
		 "path": "node_modules/cz-git"
	 }
 }
}
```



cz-git与commitlint进行联动给与校验信息, 所以可以编写commitlint配置文件:

```js
// commitlint.config.js

export default {

 rules: {},
 prompt: {
    messages: {
      type: '选择要提交的类型',
      scope: '选择一个提交范围',
      customScope: '选择一个提交范围',
      subject: '填写简短精炼的变更描述 :\n',
      body: '填写更加详细的变更描述(可选)',
      breaking: '列举非兼容性的重大的变更(可选). 使用"|"换行 :\n',
      footerPrefixesSelect: '选择关联issue前缀(可选)',
      customFooterPrefix: '填写自定义issue前缀',
      footer: '列举关联issue(可选) 例如: #31, #I3244 :\n',
      generatingByAI: '正在通过AI生成你的提交简短描述...',
      generatedSelectByAI: '选择一个AI生成的简单描述...',
      confirmCommit: '是否确认提交?',
    },
    // prettier-ignore
    types: [
    { value: 'feat', name: '特性:     新增功能', emoji: ':sparkles:' },
    { value: 'fix', name: '修复:      修复bug', emoji: ':bug:' },
    { value: 'docs', name: 'docs:     文档变更', emoji: ':memo:' },
    { value: 'style', name: 'style:    代码格式(不影响代码逻辑)', emoji: ':lipstick:' },
    { value: 'refactor', name: 'refactor: 重构(既不增加feature,也不是bug修复)', emoji: ':recycle:' },
    { value: 'perf', name: 'perf:     性能优化', emoji: ':zap:' },
    { value: 'test', name: 'test:     添加测试' , emoji: ':white_check_mark:'},
    { value: 'build', name: 'build:    打包' , emoji: ':construction:'},
    { value: 'ci', name: 'ci:       修改持续集成配置', emoji: ':ferris_wheel:' },
    { value: 'revert', name: 'revert:   回退', emoji: ':rewind:' },
    { value: 'chore', name: 'chore:    构建过程或辅助工具的变更', emoji: ':hammer:' },
  ],
    useEmoji: true,
    emojiAlign: 'center',
    useAI: false,
    aiNumber: 1,
    themeColorCode: '',
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: 'bottom',
    customScopesAlias: 'custom',
    emptyScopesAlias: 'empty',
    upperCaseSubject: false,
    markBreakingChangeMode: false,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: '|',
    skipQuestions: [],
    issuePrefixes: [
      { value: 'closed', name: 'closed: ISSUES has been processed' },
    ],
    customIssuePrefixAlign: 'top',
    emptyIssuePrefixAlias: 'skip',
    customIssuePrefixAlias: 'custom',
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: '',
    defaultIssues: '',
    defaultScope: '',
    defaultSubject: '',
  },
}
}
```



#### -6.使用

使用如下命令,来触发钩子对应的脚本信息,可以实现eslint语法插件, prettier格式化, git提交信息格式化.

```bash
npx cz
```



### 3.node/npm配置

#### 是什么

开发时, 强制规定使用的node及npm版本



#### 怎么做

##### 方案1-nvm

如果使用nvm,可以通过nvm配置文件规定node&npm版本

根根目录下创建`.nvmrc`文件,添加如下内容:
```rc
// .nvmrc
v18.16.0
```



##### 方案2-配置package.json

1.配置package.json文件中的`engines`字段指定项目所需的node及npm版本. 版本可按照node规范进行更改,可添加星号.

```json
//package.json

{
  "name": 'xxx',
  "version": '0.1',
  "engines": {
    "node": "= 18.16.0",
    "npm": "= 9.5.0"
  }
}
```



以上内容并不会强制生效, 需要搭配使用`.npmrc`文件

2.新建`.npmrc`文件,并添加内容:

```rc
//.npmrc

engine-strict=true
```



如果版本不匹配，`npm install` 会报错。



##### 方案3-preinstall脚本

在 `package.json` 中，可以通过 `preinstall` 脚本检查 Node.js 和 npm 版本。

示例：

```json
{
  "scripts": {
    "preinstall": "node -v | grep -q 'v18.16.0' || (echo 'Error: Node.js version must be 18.16.0' && exit 1)"
  }
}
```



可以在安装以来前强制检查版本.



##### 方案4-CI/CD配置

略

##### 方案5-跨平台node版本管理工具

[Volta](https://volta.sh/) 是一个跨平台的 Node.js 版本管理工具，可以锁定项目的 Node.js 和 npm 版本。

略



### 4.UI规范

使用统一的 UI 组件库



## 二.测试

### 单元测试

> 根据正确性写测试，即正确的输入应该有正常的结果。根据异常写测试，即错误的输入应该是错误的结果。



### TDD测试驱动开发
> TDD 就是根据需求提前把测试代码写好，然后根据测试代码实现功能。 如果需求经常变化, 则用的不会太多.



## 三. 部署

### 背景
手动部署重复且浪费时间.
其流程是:
```bash
git push
npm run build
将打包好的文件放到静态服务器上
```

### 自动部署(持续部署 CD)

#### 两种触发方式
* 轮询
* 监听webhook事件







## 四. 监控

### 介绍
> 监控，又分性能监控和错误监控，它的作用是预警和追踪定位问题。


### 性能监控

> 性能监控一般利用window.performance来进行数据采集。

监控是为了更好的优化系统，可以从以下几个维度进行分析：
1. 重定向耗时
2. DOM 渲染耗时
3. 页面加载耗时
4. 页面卸载耗时
5. 请求耗时
6. 获取性能信息时当前时间

通过下面代码实现:
```js
const getPerformance = () => {  
    if (!window.performance) return  
    const timing = window.performance.timing  
    const performance = {  
        // 重定向耗时  
        redirect: timing.redirectEnd - timing.redirectStart,  
        // 白屏时间  
        whiteScreen: whiteScreen,  
        // DOM 渲染耗时  
        dom: timing.domComplete - timing.domLoading,  
        // 页面加载耗时  
        load: timing.loadEventEnd - timing.navigationStart,  
        // 页面卸载耗时  
        unload: timing.unloadEventEnd - timing.unloadEventStart,  
        // 请求耗时  
        request: timing.responseEnd - timing.requestStart,  
        // 获取性能信息时当前时间  
        time: new Date().getTime(),  
    }  
  
    return performance  
}  
  
// 获取资源信息  
const getResources = () => {  
    if (!window.performance) return  
    const data = window.performance.getEntriesByType('resource')  
    const resource = {  
        xmlhttprequest: [],  
        css: [],  
        other: [],  
        script: [],  
        img: [],  
        link: [],  
        fetch: [],  
        // 获取资源信息时当前时间  
        time: new Date().getTime(),  
    }  
  
    data.forEach(item => {  
        const arry = resource[item.initiatorType]  
        arry && arry.push({  
            // 资源的名称  
            name: item.name,  
            // 资源加载耗时  
            duration: item.duration.toFixed(2),  
            // 资源大小  
            size: item.transferSize,  
            // 资源所用协议  
            protocol: item.nextHopProtocol,  
        })  
    })  
  
    return resource  
}
```


#### 用户信息收集

**navigator**

使用window.navigator可以收集到用户的设备信息，操作系统，浏览器信息...

**UV（Unique visitor）**

是指通过互联网访问、浏览这个网页的自然人。访问您网站的一台电脑客户端为一个访客。00:00-24:00内相同的客户端只被计算一次。一天内同个访客多次访问仅计算一个UV。

在用户访问网站时，可以生成一个随机字符串+时间日期，保存在本地。在网页发生请求时（如果超过当天24小时，则重新生成），把这些参数传到后端，后端利用这些信息生成 UV 统计报告。

**PV（Page View）**

即页面浏览量或点击量，用户每1次对网站中的每个网页访问均被记录1个PV。用户对同一页面的多次访问，访问量累计，用以衡量网站用户访问的网页数量。

**页面停留时间**

传统网站 用户在进入 A 页面时，通过后台请求把用户进入页面的时间捎上。过了 10 分钟，用户进入 B 页面，这时后台可以通过接口捎带的参数可以判断出用户在 A 页面停留了 10 分钟。

**SPA**

可以利用 router 来获取用户停留时间，拿 Vue 举例，通过router.beforeEach destroyed这两个钩子函数来获取用户停留该路由组件的时间。

**浏览深度**

通过document.documentElement.scrollTop属性以及屏幕高度，可以判断用户是否浏览完网站内容。

**页面跳转来源**

通过document.referrer属性，可以知道用户是从哪个网站跳转而来。

**小结**

通过分析用户数据，我们可以了解到用户的浏览习惯、爱好等等信息，用户画像。移动端和pc断，内网系统要求都不一样，toB和toC的也不一样，有针对性的监控。


## 五.性能优化

性能优化主要分为两类：

- 加载时优化
- 运行时优化

例如压缩文件、使用 CDN 就属于加载时优化；减少 DOM 操作，使用事件委托属于运行时优化。在解决问题之前，必须先找出问题，否则无从下手。所以在做性能优化之前，最好先调查一下网站的加载性能和运行性能。

关于性能优化实战，可以看这一篇文章关于**系统优化的思考，与网站优化实战【点击阅读原文，进博客查看】**



## 六. 重构

《重构2》一书中对重构进行了定义：

> 所谓重构（refactoring）是这样一个过程：在不改变代码外在行为的前提下，对代码做出修改，以改进程序的内部结构。重构是一种经千锤百炼形成的有条不紊的程序整理方法，可以最大限度地减小整理过程中引入错误的概率。本质上说，重构就是在代码写好之后改进它的设计。


重构的原则

* 事不过三，三则重构。即不能重复写同样的代码，在这种情况下要去重构。
* 如果一段代码让人很难看懂，那就该考虑重构了。
* 如果已经理解了代码，但是非常繁琐或者不够好，也可以重构。
* 过长的函数，需要重构。
* 一个函数最好对应一个功能，如果一个函数被塞入多个功能，那就要对它进行重构了。  
  
  # 认识性能优化

 `网络层面+渲染层面`组成了渲染优化的股价. 

### 网络层面优化
#### 1.DNS解析
> 利用DNS具有将用户请求导向某个服务端IP地址的特性, 实现分解流量的目标,缓解服务器压力. 其中,最具代表性的就是CDN.


#### 2.HTTP请求
**1.减少请求体积**
请求携带的数据更少, 请求发送得更快.  如果请求体积较大, 可以精简请求参数.

**2.减少请求次数**
尽量用更少的请求实现功能.
一个浏览器最多支持同时下载6个资源, 因此模块拆分粒度最好不要超过6个.

#### 3.HTTP响应
响应阶段主要考验服务器的处理能力
主要从如下几个方面优化响应速度:
* 服务器配置不能称为访问速度的限制
* 压缩资源减少响应时间
* 设置浏览器缓存.
* 保证带宽足够

### 渲染层面的优化
渲染层面的优化,其实就是浏览器端的性能优化.

#### 1.HTML解析
CSS不会阻塞DOM树的构建, 默认情况下JS会阻塞DOM树的构建. 所以,插入脚本的位置对页面渲染是有影响的.


#### 2.CSS解析
HTML解析时候会遇到样式标签, CSS就开始加载并开始构建CSSOM树. CSS是阻塞渲染的资源. 阻塞的是渲染树的构建. 因此越早让CSS尽早加载有利于缩短渲染时间.


#### 3.JS解析

JS代码执行的时候, 会阻塞DOM树的构建, 阻塞CSSOM树的构建. (为什么呢? 渲染引擎和解析器引擎同一时间只能有一个运行)
最佳做法是将JS标签尽可能地向后放, 将js标签放在body标签地最后一个子元素地后面.

初次之外, ES6还添加了defer,async属性.

### 检测性能问题

主要又以下几个手段:
* 主观感知性能
* 利用'性能'面板检测性能
* 利用'lighthouse'检测性能
* 项目打包后地性能检测, 例如`rollup-plugin-visualizer`插件.


### 性能优化

#### 1.首屏渲染优化
1.路由懒加载
2.Gzip压缩
3.服务端渲染


#### 2.网络资源优化
1.图片异步加载




2.高效利用缓存


#### 3.交互性能优化

1.防抖与节流

2.异步更新,减少重复渲染
vue和react使用事件循环来实现异步更新

3.减少DOM操作
* 使用CSS代替JS动画
* 使用DocumentFragment代替Domcument

最常用地方法介绍:
使用DocumentFragement创建和组合一棵子节点树, 并将其插入真实DOM树中. 采用这种方式地好处是, 在创建子节点地过程中不需要执行DOM操作,只需要在讲创建的子节点插入文档时进行一次重渲染.
```js
let ul = document.querySelector('ul')
let fragment = new DocumentFragment()
for (let i=1; i<200; i++) {
	let li = document.createElement('li')
	li.innerText = `子元素${i}`
	fragment.appendChild(li)
}

ul.appendChild(fragment)
```







# vue项目优化
> [Vue 项目性能优化 — 实践指南](https://juejin.cn/post/6844903913410314247)
> [🔥 2022 前端性能优化最佳实践 - SegmentFault 思否](https://segmentfault.com/a/1190000041753539)
> [聊一聊前端性能优化 - 掘金 (juejin.cn)](https://juejin.cn/post/6911472693405548557)

### 性能优化本质

**展示更快**、**交互响应快**、**页面无卡顿情况**。

更详细的说，就是指，在用户输入url到站点完整把整个页面展示出来的过程中，通过各种优化策略和方法，让页面加载更快；在用户使用过程中，让用户的操作响应更及时，有更好的用户体验。

### 性能优化指标

1.性能评估 Chrome Performance选项卡 / Lighthouse 生成性能检测报告 

2.值得关注的性能指标

(1)LCP (Largest Contentful Paint 最大内容绘制 ) 

(2)首屏渲染时间（也叫白屏时间） 

(3)FCP (Fitst Contentful Paint 首先内容绘制 ) 

(4)可交互时间 (Time to Interactive TTI)

(5) Network请求时间(jax,js等) 

3.浏览器开发者工具什么都能看得到，可以调用性能监测API 或建立 前端监控系统(无痕埋点) 



### 性能优化手段

前端性能优化分为两类，一类是文件加载更快，另一类是文件渲染更快。 

* 加载更快的方法： 
  * 让传输的数据包更小（压缩文件/图片）：图片压缩和文件压缩 
  * 减少网络请求的次数：雪碧图/精灵图、节流防抖 
    * 雪碧图的应用场景一般是项目中不常更换的一些固定图标组合在一起，比如logo、搜索图标、切换图标等
    * 电商项目中最常用到的懒加载，一般在查看商品展示的时候通常下拉加载更多，因为商品数据太多，一次性请求过来数据太大且渲染的时间太长。
  * 减少渲染的次数：缓存（HTTP缓存、本地缓存、Vue的keep-alive缓存等） 
* 渲染更快的方法： 
  * 提前渲染：ssr服务器端渲染 
  * 避免渲染阻塞：CSS放在HTML的head中 JS放在HTML的body底部 
  * 避免无用渲染：懒加载 
  * 减少渲染次数：对dom查询进行缓存、将dom操作合并、使用减少重排的标签 


### 1网页优化
#### JS中的性能优化

##### 1.不要覆盖原生方法

##### 2.事件委托(简化DOM操作)

##### 3.//JS动画

##### 4.节流与防抖



#### 页面渲染优化

##### 1.避免CSS, JS堵塞

CSS 是阻塞渲染的资源。需要将它尽早、尽快地下载到客户端，以便缩短首次渲染的时间。**尽早（将 CSS 放在 head 标签里）和尽快（启用 CDN 实现静态资源加载速度的优化）**

实际使用时，可以遵循下面3个原则：
- **CSS 资源优于 JavaScript 资源引入**
- **JS 应尽量少影响 DOM 的构建**

改变JS阻塞方式
* defer（延缓）模式
`defer` 方式加载 script, 不会阻塞 HTML 解析，等到 DOM 生成完毕且 script 加载完毕再执行 JS。
* async（异步）模式
`async` 属性表示异步执行引入的 JS，加载时不会阻塞 HTML解析，但是加载完成后立马执行，此时仍然会阻塞 load 事件。
从应用的角度来说，一般当我们的脚本与 DOM 元素和其它脚本之间的依赖关系不强时，我们会选用 `async`；当脚本依赖于 DOM 元素和其它脚本的执行结果时，我们会选用`defer`。

##### 2.使用字体图标iconfont代替图片图标
字体图标是矢量图，不会失真。还有一个优点是生成的文件特别小。



##### 3.降低CSS选择器复杂性
浏览器读取选择器，遵循的原则是从选择器的右边到左边读取

1. 减少嵌套。后代选择器的开销是最高的，因此我们应该尽量将选择器的深度降到最低（最高不要超过三层），尽可能使用类来关联每一个标签元素
2. 关注可以通过继承实现的属性，避免重复匹配重复定义
3. 尽量使用高优先级的选择器，例如 ID 和类选择器。
4. 避免使用通配符，只对需要用到的元素进行选择



##### 4.减少重绘和重排(回流)

**回流必将引起重绘，重绘不一定会引起回流，回流比重绘的代价要更高。**
如何避免?
**CSS**
- 避免使用table布局。
- 尽可能在DOM树的最末端改变class。
- 避免设置多层内联样式。
- 将动画效果应用到position属性为absolute或fixed的元素上。
- 避免使用CSS表达式（例如：calc()）。

**JavaScript**
- 避免频繁操作样式，最好一次性重写style属性，或者将样式列表定义为class并一次性更改class属性。
- 避免频繁操作DOM，创建一个documentFragment，在它上面应用所有DOM操作，最后再把它添加到文档中。
- 也可以先为元素设置display: none，操作结束后再把它显示出来。因为在display属性为none的元素上进行的DOM操作不会引发回流和重绘。
- 避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来。
- 对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。
 ,
##### ~~5.使用flexbox布局~~

##### 6.图片资源优化

使用雪碧图

雪碧图的作用就是减少请求数，而且多张图片合在一起后的体积会少于多张图片的体积总和

图片压缩

压缩方法有两种，一是通过在线网站进行压缩，二是通过 webpack 插件 image-webpack-loader。它是基于 [imagemin](https://link.segmentfault.com/?enc=OIHazSW1xgE0eJv1ufzlhg%3D%3D.50sTefI%2FunQpQnTLFGGC2iHdYBRXLANOzcn9%2BnYmSIMvSsZ2MxqDRBV%2F%2BgM8jZ3hfnNCnY2A6GBe0w8Jx7FIk7eCSR1knYAy2lBQYNu45s4%3D) 这个 Node 库来实现图片压缩的。

图片拉加载

在页面中，先不给图片设置路径，只有当图片出现在浏览器的可视区域时，才去加载真正的图片，这就是延迟加载。对于图片很多的网站来说，一次性加载全部图片，会对用户体验造成很大的影响，所以需要使用图片延迟加载。

使用CSS3代替图片


使用webp格式的图片

小的图片体积，而且拥有肉眼识别无差异的图像质量；同时具备了无损和有损的压缩模式、Alpha 透明以及动画的特性，在 JPEG 和 PNG 上的转化效果都相当优秀、稳定和统一。



##### 开启 Gzip
- 下载: yarn add compression-webpack-plugin --dev
- vue.config.js

``` js
var CompressionWebpackPlugin = require('compression-webpack-plugin');
...
configureWebpack: config => {
  config.plugins.push(
      new CompressionWebpackPlugin({
          test: new RegExp('\\.(js|css)$'),
          threshold: 8192,
          minRatio: 0.8
      })
 )
```

- nginx.conf中
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6749ab642da04d578181cc30d6f114e7~tplv-k3u1fbpfcp-watermark.image)

##### 静态资源(css/js/img)使用CDN引入
浏览器从服务器上下载 CSS、js 和图片等文件时都要和服务器连接，而大部分服务器的带宽有限，如果超过限制，网页就半天反应不过来。而 CDN 可以通过不同的域名来加载文件，从而使下载文件的并发连接数大大增加，且CDN 具有更好的可用性，更低的网络延迟和丢包率 。
![image-20201119221157741.png](https://i.loli.net/2021/04/09/c2ZFgNI75WtVAze.png)


### 2Vue代码层面优化

####  1) v-for 遍历列表
指定非下标的唯一key
不同时使用 v-if

#### 合理使用watch computed
- 当我们需要进行数值计算，并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时，都要重新计算；
- 当我们需要在数据变化时执行**异步**或**开销较大**的操作时，应该使用 watch，使用 watch 选项允许我们执行异步操作 ( 访问一个 API )，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。

#### 长列表性能优化
Vue 会通过 `Object.defineProperty` 对数据进行劫持，来实现视图响应数据的变化，然而有些时候我们的组件就是纯粹的数据展示，不会有任何改变，我们就不需要 Vue 来劫持我们的数据，在大量数据展示的情况下，这能够很明显的减少组件初始化的时间，那如何禁止 Vue 劫持我们的数据呢？可以通过 `Object.freeze` 方法来冻结一个对象，一旦被冻结的对象就再也不能被修改了。

```javascript
export default {
  data: () => ({
    users: {}
  }),
  async created() {
    const users = await axios.get("/api/users");
    this.users = Object.freeze(users);
  }
};
```



#### 优化无线列表性能: 虚拟列表
如果你的应用存在非常长或者无限滚动的列表，那么需要采用 窗口化 的技术来优化性能，只需要渲染少部分区域的内容，减少重新渲染组件和创建 dom 节点的时间。 你可以参考以下开源项目 [vue-virtual-scroll-list](https://link.segmentfault.com/?enc=RwGR6yk1CBddLI%2Bu8vtszQ%3D%3D.dlCkBYR4PA%2B55K3tT%2FQw8n0NYgopqNuyAiHiOl%2BmqkEbvSEXfwJzLmiOlCKtzroQt8eQCA8Nhva3W4K0YZ%2B%2FqtpzzMo6urAt17%2F52bgtgue87rsur8bCDAKfgfIWQNni) 和 [vue-virtual-scroller](https://link.segmentfault.com/?enc=VUESvmfK3cEynJ2TsRaDtw%3D%3D.BJ5wA7H4OmMcXokRRU59qGLNEEnNcyBtrSbVUK4mD9Dx8n1PY3Ug0ZqP05IZgBQjewtZNwuUGdg0J9VPr%2FVEGmAMU0cO94XO2a%2FeHYKtnDDlsvX9R2pFCY2p2kTTalwi) 来优化这种无限列表的场景的。



#### 事件的销毁
Vue 组件销毁时，会自动清理它与其它实例的连接，解绑它的全部指令及事件监听器，但是仅限于组件本身的事件。 如果在 JS 内使用 `addEventListener` 等方式是不会自动销毁的，我们需要在组件销毁时手动移除这些事件的监听，以免造成内存泄露，如：

```javascript
created() {
  addEventListener('click', this.click, false)
},
beforeDestroy() {
  removeEventListener('click', this.click, false)
}
```


#### 图片资源懒加载
如使用v-lazyload

##### 页面大量图片，如何优化加载，优化用户体验
1. 图片懒加载。在页面的未可视区域添加一个滚动事件，判断图片位置与浏览器顶端的距离与页面的距离，如果前者小于后者，优先加载。
2. 如果为幻灯片、相册等，可以使用图片预加载技术，将当前展示图片的前一张和后一张优先下载。
3. 如果图片为css图片，可以使用CSSsprite，SVGsprite等技术。
4. 如果图片过大，可以使用特殊编码的图片，加载时会先加载一张压缩的特别厉害的缩略图，以提高用户体验。
5. 如果图片展示区域小于图片的真实大小，应在服务器端根据业务需要先进行图片压缩，图片压缩后大小与展示一致。



#### 路由组件懒加载
```js
https://blog.csdn.net/fanjianglin/article/details/113430620
```

>  **Vue动态加载组件主要有两类方式，即import方式和require方式**, 

const Home = () => import('./pages/Home')

#### 第三方插件的按需引入
如: element-ui / vant 


#### 服务端渲染SSR / 预渲染

具体的 Vue SSR 如何实现，可以参考作者的另一篇文章《 [Vue SSR 踩坑之旅](https://link.segmentfault.com/?enc=Hf%2BIPuMRv2K%2BeUWhiiDh1w%3D%3D.3jDS1JNzAA3uTddj1k%2FbKUkxDfmUV66bvM0o0VlBp7p4tnJIH%2F%2FCoaWInurEjB3S) 》。如果你的 Vue 项目只需改善少数营销页面（例如 /， /about， /contact 等）的 SEO，那么你可能需要**预渲染**，在构建时 (build time) 简单地生成针对特定路由的静态 HTML 文件。优点是设置预渲染更简单，并可以将你的前端作为一个完全静态的站点，具体你可以使用 [prerender-spa-plugin](https://link.segmentfault.com/?enc=0VzVqkIFywisus2tXadNQA%3D%3D.idXZ937QutVTXXQ7wd01EK5OzIiISu2XSekHrv7pF9FQiDAmnD%2BWfxWCnx3amR%2FY1GwMIYYXtSDhO1lW0mWFyN7OTrA%2BbYHHgPsQzzqGblwB1SWoyI0BnBBKo7se13rh) 就可以轻松地添加预渲染 。


 ### 脚手架vue-cli5性能优化
> [如何优化你的 vue-cli 项目？前言 在日常开发中，最容易让人注意的就是项目编译打包的时间，特别是在较频繁打包部署时 - 掘金](https://juejin.cn/post/7078491632605069348)

vue-cli默认配置已经添加了很多常用的优化，包括：

- `cache-loader` 会默认为 Vue/Babel/TypeScript 编译开启。文件会缓存在 `node_modules/.cache` 中
- 图片等多媒体文件使用`url-loader`，小于4K的图片会转base64编码内联在js文件中
- 生产环境下使用`mini-css-extract-plugin`，将css提取成单独的文件
- `thread-loader` 会在多核 CPU 的机器上为 Babel/TypeScript 转译开启并行处理。
- 提取公共代码：两个缓存组`chunk-vendors`和`chunk-common`
- 代码压缩(`terser-webpack-plugin`)
- `preload-webpack-plugin`：所有入口js、css文件加上`preload`，按需加载文件加上`prefetch`


#### 1.减少打包体积

##### 1.productionSourceMap设置为false
> 去除打包后生成的 map 文件，减少代码体积
```js
module.exports = defineConfig({
  productionSourceMap: false,
})

```


##### 2.启用gzip压缩
1.安装依赖
```bash
npm i compression-webpack-plugin -D
```

2.`vue.config.js`配置
```js
// 在`vue.config.js`中配置
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
    plugins: [ new CompressionPlugin() ],
    chainWebpack: (config) => {
        // 生产环境，开启js\css压缩
        if (process.env.NODE_ENV === 'production') {
            config.plugin('CompressionPlugin').use(new CompressionPlugin({
                algorithm: 'gzip',
                test: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i, // 匹配文件名
                threshold: 10240, // 对超过5k的数据压缩(默认10k)
                minRatio: 0.8,
                deleteOriginalAssets: false // 删除源文件(默认false)
            }))
        }
    }
}
```


##### 3.图片压缩
> 配置 image-webpack-loader 图片压缩

```js
module.exports = defineConfig({
  chainWebpack: (config) => {
    config.module
      .rule('min-image')
      .test(/.(png|jpe?g|gif|svg)(?.*)?$/)
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({ disable: process.env.NODE_ENV == 'development' ? true : false })//此处为ture的时候不会启用压缩处理,目的是为了开发模式下调试速度更快,网上错误示例直接写为disable:true,如果不去查看文档肯定是要被坑的
      .end()
    config.plugins.delete("prefetch")  //删除预加载 提升首次加载速度
  },
});

```



##### 5.图片和字体转base64,文件
> 使用url-loader或file-loader。对于小图片和字体文件，可以使用url-loader将它们转换为Base64编码，并直接嵌入到生成的JS或CSS文件中，避免额外的HTTP请求。对于大文件，则可以使用file-loader将它们复制到输出目录中，并返回相对URL。

```js
module.exports = {  
  chainWebpack: config => {  
    config.module  
      .rule('images')  
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)  
      .use('url-loader')  
      .loader('url-loader')  
      .options({  
        limit: 8192, // 小于8kb的图片转换为Base64编码  
        name: 'img/[name].[hash:7].[ext]' // 输出到img目录，文件名包含hash值  
      });  
  
    config.module  
      .rule('fonts')  
      .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/)  
      .use('url-loader')  
      .loader('url-loader')  
      .options({  
        limit: 10000, // 小于10kb的字体文件转换为Base64编码  
        name: 'fonts/[name].[hash:7].[ext]' // 输出到fonts目录，文件名包含hash值  
      });  
  }  
};
```




##### 3.删除无用文件
> 安装useless-files-w5-webpack-plugin

```js
module.exports = defineConfig({ 
 configureWebpack:{
    plugins: [
      new UnusedFilesW5WebpackPlugin({
        root: ['./src'], // 项目目录
        output: './fileList.json', // 输出文件列表
        clean: false, // 是否删除文件, 不建议开启，手动删除比较好，防止误删
        exclude: ['node_modules']  // 排除文件列表
      })
    ]
  }
})

```


##### 4.配置CDN,减少打包提交
> 需要再html和vue.config.js中都配置

```html
  <body>
    <noscript>
      <strong
        >We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work
        properly without JavaScript enabled. Please enable it to
        continue.</strong
      >
    </noscript>
    <div id="app"></div>
    //引入echarts
    <script src="https://cdn.bootcdn.net/ajax/libs/echarts/5.4.1/echarts.min.js"></script>
  </body>

```

```js
module.exports = defineConfig({
  configureWebpack: {
    externals: {
      "./cptable": "var cptable",
      'echarts': 'echarts'
    },
  },
});

```



#### 2.提高打包速度
##### 1.配置缓存提高构建速度
```js
module.exports = defineConfig({ 
 configureWebpack: {
    cache: {
      type: 'filesystem',
      allowCollectingMemory: true
    },
  }
})

```



#### 3.分析工具
> 使用`speed-measure-webpack-plugin`, `webpack-bundle-analyzer`分析工具,使用`thread-loader`开启多线程优化
> 
> `speed-measure-webpack-plugin`来测量网页包构建速度,输出各个模块编译时长,找到更耗时的模式
> `webpack-bundle-analyzer`可视化王爷包输出文件大小,提供交互树形图.
> 使用`thread-loader`开启多线程优化, 使用`hard-source-webpack-plugin`实现缓存优化

```js
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
module.exports = {
  ...,
  configureWebpack: (config) => {
      ...
      config.plugins.push(
        new SpeedMeasurePlugin(),
      );
    },
};


```

```js

const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  ...,
  configureWebpack: (config) => {
      ...
      config.plugins.push(
        new SpeedMeasurePlugin(),
      + new BundleAnalyzerPlugin()
      );
    },
};

```







#### 其它优化
1.alias别名配置
> [**resolve.alias**](https://link.juejin.cn/?target=https%3A%2F%2Fwebpack.docschina.org%2Fconfiguration%2Fresolve%23resolvealias "https://webpack.docschina.org/configuration/resolve#resolvealias") 是用于创建 `import` 或 `require` 的别名，来确保模块引入变得更简单

```js
   chainWebpack: (config) => {
      // 配置别名
      config.resolve.alias
        .set('@build', pathResolve('../build')) // 构建目录
        .set('@', pathResolve('../src'))
        .set('@api', pathResolve('../src/api'))
        .set('@utils', pathResolve('../src/utils'))
        .set('@views', pathResolve('../src/views'));
  }

```







# Web页面全链路性能优化指南

### 来源
> [Web页面全链路性能优化指南 | 唐志远](https://fe32.top/articles/we0522bs/)
> [基于自建 VTree 的全链路埋点方案 - 知乎](https://zhuanlan.zhihu.com/p/564189923)
> [前端全链路优化实战课](https://time.geekbang.org/column/intro/100759401)
> 




