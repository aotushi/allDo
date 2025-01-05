
# Vue项目初始化

## CDN模式
[unpkg.com/vue@next](https://link.juejin.cn/?target=https%3A%2F%2Funpkg.com%2Fvue%40next "https://unpkg.com/vue@next") 可以拿到最新的 Vue 版本。 使用场景集中在实现简单需求方面.
```html
<script src="https://unpkg.com/vue@next"></script>
```



## Vue-CLI模式
使用vue-cli创建vue3项目时,版本需要4.5.x,升级之前许先卸载低版本.(或可以升级)
**查看/升级/卸载/安装全局版本**
```bash
#命令行查看vue版本
vue --version

# 升级vue-cli
npm update -g @vue/cli

#卸载全局中的低版本
npm uninstall -g @vue/cli

#或,卸载具体项目中的低版本
npm uninstall vue-cli

# 安装
npm i -g @vue/cli
```

创建项目
```bash
vue create vue3-demo
```

**局部安装**
由于局部安装,命令不一样,所以单独写.
>在本地目录中安装 Vue CLI 后，我们需要使用 `npx` 前缀来执行命令，因为 `vue` 命令不包含在全局路径中。在使用 `npx` 前缀后，它将自动查找本地目录中安装的 Vue CLI 版本，然后运行相应的命令。


```bash
# 局部安装
npm i @vue/cli

# 查看局部安装版本(Window)
npx vue -V
```



## Vite模式
[搭建Vite项目](https://cn.vitejs.dev/guide/)

```bash
npm create vite@latest  

# npm init vite 这个命令也可以

# yarn create vite

# pnpm create vite
```


# 文档总结




## Reactivity fundamentals

### reactive()

#### What
> Vue3中声明响应式状态的一种方式.
> 与`ref()`在特殊对象中包裹内部的值不同的是, reactive()使对象自身变成响应式的.


#### How
```js

//declare
import {reactive} from 'vue'

const state = reactive(({ count: 0 })

//usage in template
<button @click="state.count++"> {{state.count}}</button>


// declare explicity type with interface or impliticy default

const book = reactive({title: 'vue3 guide'}) // type: {title: string}

interface Book {
	title: string
}
const book: Book = reactive({title: 'vue3 guide})


```


#### Desc
* 响应式对象(reactive objects)是JS Proxy,且行为上和普通对象一致. 不同的是, Vue可以拦截响应式对象所有属性(properties)的访问和更新,来实现响应式的追踪(tracking)和触发(triggering).
* `reactive()`深度转换对象: 当访问时,嵌套对象也被`reactive()`包裹.
* 当一个`ref value`是一个对象时, 在内部`ref()`调用的也是`reactive()`
* 和shadow refs类似, `shadowReactive()`用来跳出深度响应式
* **`reactive()`的限制:**
	* 限制值类型: 只对对象类型有效(object, array, 集合类型例如map, set等),对原始类型无效
	* 不要替换整个对象: 响应式追踪会失效.
	* 解构不友好: 解构响应式对象的原始类型属性为本地变量;传递原始类型属性到函数中,会丧失响应式

```js

```


### Ref unwrapping

#### 1. 作为响应式对象的属性
* `ref`作为响应式对象属性访问或变更时, 会自动解包(unwrapped)
* 如果指派(赋值)一个新的`ref`到已经存在`ref`的属性, 新`ref`将会替代旧`ref`
* `ref`解包只发生在嵌套在深度响应式对象中. 它不会发生在当作为shadow reactive object的属性时.


#### 2. 数组和集合的警告

* 当ref作为数组或集合的元素被访问时, 不会执行解包.

```js
const books  reactive([ref('vue3 guide')])

//访问元素时,需要添加 .value
console.log(books[0].value)

const map = reactive(new Map([['count', ref(0)]]))
console.log(map.get('count').value)
```


#### 3.在模板上解包的警告
* 在模板上ref解包, 只有在ref是在模板解析上下文中的顶级属性才会解包
* 如果 ref 是文本插值的最终评估值（即 {{ }} 标签），则 ref 会被解包


## computed properties

#### what
* 响应式数据的getter和setter

#### why
* 降低在模板中处理数据的复杂度
#### how

#### Desc
* 返回值是`computed ref`,
* 访问形式和ref一样, 通过`xxx.value`形式
* 计算属性自动追踪它的响应式依赖.

#### computed vs. method
* 计算属性根据其响应式依赖项进行缓存,只有当响应式依赖发生变化后,计算属性才会重新计算.
* 当重新渲染时,方法调用总会重新执行

#### Writable computed(可写的计算属性)

```js
<script setup>
import {ref, computed} from 'vue'

const firstName = ref('jhon')
const lastName = ref('doe')

const fullName = computed({
	get() {
		return this.firstName.value + ' ' + lastName.value
	},

	set(val) {
		[firstName.value, lastName.value] = val.split(' ')
	}
})

</script>
```

#### 获得之前的值
> supported 3.4+

getter方法的第一个参数就是.


#### 最佳实践
* getter应该没有副作用
* 避免更改计算属性值


## class and style bindings

### binding HTML class

#### 绑定对象
```vue

//单独绑定
<div :class="{active: isActive}"></div>

//已经存在class
<div class="foo" :class="{active: isActive}"></div>

//绑定一个对象变量
<div class="foo" :class="classObj" ></div>

const classObj = reactive({
	active: true
})

//绑定计算属性
const isActive = ref(true)
const error = ref(null)

const classObj = computed(() => ({
	active: isActive.value && !error.value,
	'text-danger': error.value && error.value.type === 'fatal'
}))
```

#### 绑定数组
```vue
const activeClass = ref('active')
const errorClass = ref('text-danger')

//绑定数组
<div :class="[activeClass, errorClass]"></div>

//绑定数组,元素为三元表达式
<div :class="[isActive ? activeClass : '', errorClass]" ></div>

//后定数组, 元素为对象
<div :class="[{ [activeClass] : isActive }, errorClass]" ></div>
```

#### 绑定到组件上
* 组件只有一个根元素, 类名会绑定到根元素上
* 组件会多个根元素, 可以通过指定`$attr.class`来绑定到目标根元素上
```vue
<myComponent class="baz" />

// myComponent组件 单个根元素
<div class="baz"></div>

//myComponent组件 多个根元素
<div class="a"></div>
<div class="$attr.class"></div>
```

### 绑定行内样式

#### 绑定对象
* 支持绑定对象形式或对象的变量形式
* 支持小驼峰和中横线表示法来修饰对象的键标识符.
* 对象样式绑定通常与返回对象的计算属性结合使用。


#### 绑定数组
* 多个style对象组成的数组
```vue
<div :style="[baseStyle, overrideStyles]"></div>
```


#### 自动前缀

* 当你使用css property,在style中需要一个浏览器前缀,vue会自动添加.

#### style多值
* 你可以为style属性提供多个前缀值的数组, 只会渲染浏览器支持的数组中最后一个值.
```vue
<div :style="{display: ['-webkit-box', '-ms-flexbox', 'flex' ]}"
```

## 条件渲染

### v-if vs. v-show
* 展示与隐藏的实现区别
	* v-show使用CSS属性display来进行, 总是存在于DOM中
	* v-if使用DOM创建和删除来实现
* 成本及使用场景
	* v-if有更高的切换花销, 所以它适用于条件不太变化的场景
	* v-show有更高的初始化渲染花销, 所以它适合经常切换的经常.
* 与template的关系
	* v-if可以与之搭配使用
	* v-show不能与之搭配使用




## 列表渲染

### v-for
> 使用v-for来渲染基于数组的列表项.

```js
// 语法

const items = ref([{message: 'foo'}, {message: 'bar'}])

<li v-for="item in items">{{item.message}}</list>

```

#### Desc
* `v-for`的值和`forEach`回调的函数签名匹配
* `v-for`中参数的别名可以像函数参数一样解构,嵌套的`v-for`作用域也类似嵌套函数
* `v-for`也能使用`of`来代替`in`

#### v-for with objects
* `v-for`也能作用域对象,迭代顺序基于在对象上调用`Object.values()`的顺序. 可以提供`key`作为第二个属性名称

```js
<li v-for="(value, key, index) in myObject">
  {{ index }}. {{ key }}: {{ value }}
</li>
```


#### v-for with range
* 从1开始,而不是从0开始
```js
<span v-for="n in 10">{{n}}</span>
```



#### v-for with `<template>`


#### v-for with v-if
* 当它们存在统一节点上, `v-if`有更高的优先级, 这意味着v-if将无法访问v-for范围内的变量

两种推荐的解决方法:
*  使用计算属性来筛选除一个列表, 换掉v-if的判断
*  看情况将v-for或v-if移动到容器元素上


#### 使用`key`来维持状态

**Desc**
* 使用`v-for`来更新元素列表的渲染, Vue默认使用`in-place patch`(**就地更新**)策略.
* 什么是'就地更新'呢?  <span style="text-decoration: underline">如果数据项的位置发生变化, Vue 不会移动 DOM 元素以匹配项的顺序，而是就地更新每个元素，并确保它们在原本指定的索引位置上渲染。</span>
* 就地更新的有效范围: 只适配列表渲染输出结果不依赖*子组件状态或临时DOM状态(例如输入框的值)*.
* 为了给vue一个提示, 以便它能追踪每个节点的标识, 从而复用和重排现有元素, 你需要提供一个唯一的key.    (总结: <span style="color: red">在渲染数据更改后, 没有添加key的,vue会采用就地更新; 添加了key的, vue会根据key值进行重排和复用.</span>), 




```js
// 不添加key 或者 使用index当作key时,存在的问题: 如果在数组最后插入新项,只会在DOM中更新最新插入的这一项; 如果在数组最前面插入新项, 则在DOM中更新所有项.
<head>
  <title>Vue3 List Reordering Issue</title>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
</head>

<body>
  <div id="app">

    <ul class="items-list">
      <li v-for="item in items">
        {{item.id}} -- {{ item.name }}
      </li>
      </>


      <button @click="addItemToLast">添加到最后</button>
      <button @click="addItemToFirst">添加到第一个</button>
  </div>

  <script>
    const { createApp, ref } = Vue

    const app = createApp({
      setup() {
        const items = ref([
          { id: 1, name: '苹果' },
          { id: 2, name: '香蕉' },
          { id: 3, name: '橙子' }
        ])



        const addItemToLast = () => {
          items.value.push({
            id: items.value.length + 1,
            name: '商品',
          })
        }

        const addItemToFirst = () => {
          items.value.unshift({
            id: items.value.length + 1,
            name: '商品',
          })
        }

        return {
          items,
          addItemToLast,
          addItemToFirst
        }
      }
    })

    app.mount('#app')
  </script>
</body>

```


#### 在组件上使用v-for

为什么组件内无法直接访问v-for的数据?
* 如果数据插入组件, 会造成紧密耦合
* 清楚直到数据来源,  可以在其它位置复用组件

#### 数组变化侦测

Vue侦听数组的几个变更方法,用来触发更新.  7个方法
对非变更方法来说, [[Array#非破坏性方法]]




## 事件处理
#### 两种形式
* inline handler
* method handler

#### 如何区分
> 模板编译器通过检查`v-on`值字符串是否是合法的JS标识符或属性访问路径来检测方法处理器(method handler)

```js

// js标识符
<button @click="handleClick"></button>
const handleClick = () => {}


//属性访问路径
<template>
  <!-- Method handler using a property access path -->
  <button @click="user.handleClick">Click me</button>
</template>

<script>
export default {
  data() {
    return {
      user: {
        handleClick() {
          alert('Button clicked by user!');
        }
      }
    };
  }
};
</script>


// 行内样式
<template>
  <!-- Inline handler -->
  <button @click="count++">Add 1</button>
  <p>Count is: {{ count }}</p>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);
    return { count };
  }
};
</script>


//在行内调用方法
<button @click="say('hello')">Say hello</button>
<button @click="say('bye')">Say bye</button>

function say(message) {
  alert(message)
}
```


#### 在行内处理器中访问事件参数(event argument)
**两种访问形式:**
* 使用`$event`传到一个方法中
* 使用行内箭头行数

```js

// 使用$event
<button @click="warn($event)"></button>


//使用行内箭头函数
<button @click="event => warn(event)"></submit>


function warn(event) {
	if (event) {
		event.preventDefault()
	}
}


```


#### 事件修饰符
**是什么**
方法只用来处理业务逻辑而不是DOM事件的细节, 所以提供了修饰符功能.

修饰符: `.stop, .prevent, .capture, .once, .self, .passive`


**怎么用**
* 单个使用
* 多个以链式使用, 注意使用顺序


#### 按键修饰符
略





## 表单输入绑定


## 监视器


## 模板引用


## 组件


## 组件深入


## 内建组件


## 生命周期钩子


## 重用性



## 扩展





## 使用实例
### 动态绑定ref
> https://blog.csdn.net/qq_36330228/article/details/134466234



