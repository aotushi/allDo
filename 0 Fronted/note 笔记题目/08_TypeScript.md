
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





