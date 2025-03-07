
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

### ref

#### 使用ref的原因
* 在JS中,干净变量的访问和更新是无法监测的,但可以使用getter/setter方法来拦截对象属性的set/get操作.
* `.value`给Vue检测ref访问和更新的能力, 基于以上,Vue在get时候执行track, 在set时候执行trigger.
* 不像JS中其它干净的变量, 传递进函数中的ref依然保留了最新值的访问和响应式连接.



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



## 与Typescript的一些问题

### 1.声明空数组但显式声明类型, 其类型会变成`never[]`
```vue
const arr = ref([]) // this type is implicit a never[]
```
表示一个不包含任何元素的数组。当 TypeScript 无法推断出数组的具体类型时，就会默认将其类型设为 `never[]`。


### 2.声明响应式数据后,在模板中使用报错`xxx..value' is possibly 'undefined'.ts-plugin(18048)`
**原因:**
* 可能是没有提供初始值,TS会将类型判断为`Ref<XxxType | undefined>`

**解决方案**
* 提供初始值(最佳实践)
* 使用非空断言
* 使用可选链和条件判断(安全但啰嗦)
* 使用类型断言(不推荐)

```vue
<script>
//1.提供初始值
const form = ref<UserType>({
  avatar: '',
  name: '',
  age: 0,
  email: '',
})

const updateForm = res => {
	form.value = res
}



//2.使用非空断言操作符
const form = ref<UserType>({
})

const updateForm = res => {
	form.value!.avatar = res
}

//3.使用可选连或条件判断
const form = ref<UserType>({
})

//3.1 可选连操作符
const updateForm = res => {
	if (form.value?.avatar !== undefined) {
		form.value?.avatar = res
	}
	
}

//3.2 直接条件判断
if (form.value) {
	form.value.avatar = res
}



//4.使用类型断言
const form = ref<UserType>(); 
(form.value as UserType).avatar = value;

</script>
```


### 3.某个值的类型为联合类型,做真值判断后再条件判断报错
```vue
<script setup lang="ts">

interface formType {
	status: 0 | 1
	//...
}

const form = <formType>({
	status: 0,
	//...
})



if (form.value.status && form.value.status === 1) {
	//...
}

在form.value.status有报错提示:This comparison appears to be unintentional because the types '1' and '0' have no overlap.ts-plugin(2367)



</script>
```
**原因:**
因为 TypeScript 的类型检查机制导致的:
* 在 `if (form.value.status && form.value.status === 1)` 中
- 第一个条件 `form.value.status` 会被 TypeScript 理解为真值检查
- 因为 `0` 是 falsy 值，所以第一个条件成立时，`status` 就不可能是 `0`
- 这样在第二个条件 `form.value.status === 1` 中，TypeScript 认为 `status` 只能是 `1`
- 所以会报类型不重叠的错误

**解决方案**
1.比较比较值,不做真值判断
2.如果要判断真值存在, 使用`!==undefined`
3.如果要检查多个条件,建议使用多个明确的比较


```ts

//1
if(form.value.status === 1)

//2
if (form.value.status !== undefined && form.value.status === 1)

//3-1
if ([1].includes(form.value.status))

//3-2
const isStatusOne = (status: 0 | 1): status is 1 => status === 1; 
if (isStatusOne(form.value.status)) { // ... }
```


### 不安全的类型转换
案例:
```vue
store.getShortmsgs(filter.value as unknown as Record<string, string>)

filter的类型是:
const filter = ref<IAnyObj>({})

getShortmsgs的参数类型: async getShortmsgs( params: Record<string, string> = {}, fun?: (data: unknown) => void, ) {
//...
}
```


报错:
```sh
ite v6.0.3 building for production... transforming (1167) node_modules\lodash-es\_baseIsArrayBuffer.jssrc/pages/short-msg/index.vue:87:22 - error TS2345: Argument of type 'IAnyObj' is not assignable to parameter of type 'Record<string, string>'. 'string' index signatures are incompatible. Type 'unknown' is not assignable to type 'string'.
```

简单来说,就是`IAnyObj`类型不能转换为`Record<string,string>`类型.,unknown类型不能赋值给string类型(父类型不能赋值给子类型)
```ts
interface IAnyObj {
 [index:string]: unknown
}
```


#### ts中安全的类型转换规则:
```ts
// 1. 子类型到父类型的转换是安全的
class Animal { name: string = "" }
class Dog extends Animal { bark() {} }

const dog = new Dog();
const animal: Animal = dog; // 安全，不需要 as

// 2. 联合类型的收缩是安全的
let value: string | number = "hello";
let str = value as string; // 安全

// 3. 具有重叠属性的类型转换是安全的
interface A { x: number; y: number; }
interface B { x: number; z: number; }
const a: A = { x: 1, y: 2 };
const b = a as unknown as B; // 不安全，但通过 unknown 中介可以绕过

// 4. 完全不相关类型间的转换是不安全的
const num = 42;
const date = num as Date; // 报错！完全不相关的类型

// 5. 对象类型的属性兼容性
interface Person { name: string; }
interface DetailedPerson { name: string; age: number; }

const person: Person = { name: "Tom" };
// 不安全：缺少必需的属性
const detailed = person as DetailedPerson; // 报错
```








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
#### 概述
背景就是在处理表单输入时,我们尝尝需要同步输入值和js中的状态. 手动绑定值和触发事件监听的话会比较笨重.

所以,vue中创建了`v-model`来处理不同类型的表单输入, 它会基于使用的元素来自动扩展不同的DOM属性和事件配对. 注意: v-model会忽略初始化的元素上的value,checked,selected属性
* `<input> <textarea>` 使用`input事件和value属性
* `<input type="radio"> <input type="checkout">`使用了change事件和checked属性
* `<select>`使用了change事件和value属性

#### 基本用法

#### 值绑定
对radio/checkbox/select来说, 可以绑定动态值
```ts

<input type="checkbox" v-model="toggle" :true-value="dynamicTrueVal" :false-value="daynamciFalseVal" />

<input type="radio" v-model="pick" :value="first" />


<select v-model="selected">
  <!-- inline object literal -->
  <option :value="{ number: 123 }">123</option>
</select>
```


#### 修饰符

#### 在组件上使用


**如何使用?**

`v-model`可以用在组件上,实现双方绑定(two-way binding). 

1.Vue 3.4+

```vue
// child.vue
<script setup>
const model = defineModel()
function update() {
	model.value++
}
</script>

//parent.vue
<Child v-model="countVal" />
```

**概述**
* `defineModel()`返回值是一个`ref`
* 返回值的`.value`和父组件绑定到`v-model`上的值同步
* 当子组件更新这个值后, 父组件的绑定值也会更新

这意味着你可以使用`v-model`绑定这个ref到原生input元素上.
```vue
// child.vue

<script setup>
const model = defineModel()
</script>

<template>
	<input v-model="model" />
</template>
```


**内部机制**
编译器会将`defineModel`扩展为下面两个方面:
* 属性名称: `modelValue`, 也就是本地局部ref的同步值
* 事件名称: `update:modelValue`, 当本地ref的值变化发时触发(emitted)
vue 3.4之前的实现:
```vue
// child.vue

<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
</script>

<template>
<input 
	:value="props.modelValue"
	@input="emit('update:modelValue', $event.target.value)"  
/>

</template>


//parent.vue
<Child :modelValue="foo" @update:modelValue="$event => (foo=$event)" />
```

**传递选项配置**
可以为props传递default/required的属性.
注意: 有默认值,但是父组件绑定的变量没有值(也就是undefined)的情况下, 会引起非同步问题(de-synchronization).
```js
const model = defineModel({
	required: true,
	default: 1
})

//parent.vue
const myRef=ref()
<Child v-model="myRef" />
```


**`v-model`的参数**
> Vue 3.4+

在组件上的`v-model`也能接收一个参数, 在子组件中向`defineModel()`传递一个字符串当作其第一个参数.

```vue
// parent.vue
const abcd = ref('v-model title')
const abc = ref(123)
<Child v-model:title="abcd" v-model="abc" />

// child.vue
const title = defineModel('title') //'v-model title'
const modelVal = defineModel() //123
```

同样的,我们可以在此基础上使用prop的选项配置:
```vue
const title = defineModel('title', {required: true})
```


**v-model自定义修饰符**
自定义修饰符,满足需求场景下的需求.
> vue 3.4+

获取修饰符的内容
```vue
// parent.vue
<Child v-model.capitalize="myText" />


// child.vue
<script setup>
const [modelVal, modifiers] = defineModel()

consoe.log(modifiers) //{capitalize: true}

</script>
```


根据修饰符的内容*读写*绑定的值.(传递set/get选项)
```vue
// child.vue

<script setup>
const [model, modifiers] = defineModel({
	set(value) {
		if (modifiers.capitalize) {
			return value.charAt(0).toUpperCase() + value.slice(1)
		}
		return value
	}
})

</script>
```




## 监视器watcher

### 背景
> 计算属性允许声明式的计算派生值, 但有种需求是在数据变化时候,我们需要执行副作用来响应数据变化, 例如DOM更新, 基于异步操作来改变另一个状态等等.



### 描述
 * 可以监听ref, computed ref, reactive objet, getter函数, 或数组中多个以上的数据类型.
 * 不能监听reactive object的属性值, 应该是用getter函数代替
```vue
const x = ref(0)
const y = ref(0)

// single ref
watch(x, newX => {
	//...
})

// getter
watch(
	() => x.value,
	newVal => {}
)

// array of multiple sources
watch(
	[x, () => y.value], ([newX, newY] => {})
)
```


### 其它描述

#### 深度监听


#### 触发监听


#### 一次性监听




  






## 模板引用


## 组件


## 组件深入


## 内建组件


## 生命周期钩子


### Vue2到Vue3的生命周期钩子变化
- `beforeCreate` -> 使用 `setup()`
- `created` -> 使用 `setup()`
- `beforeMount` -> `onBeforeMount`
- `mounted` -> `onMounted`
- `beforeUpdate` -> `onBeforeUpdate`
- `updated` -> `onUpdated`
- `beforeDestroy` -> `onBeforeUnmount`
- `destroyed` -> `onUnmounted`
- `errorCaptured` -> `onErrorCaptured`




## 重用性



## 扩展





## 使用实例
### 动态绑定ref
> https://blog.csdn.net/qq_36330228/article/details/134466234



