
B站教程[Node.js完全指南（直播回放）李立超_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1qN4y1A7jM/?spm_id_from=333.337.search-card.all.click&vd_source=0a44ae8faaf24c34689c5c4ff8731349)的笔记

[Table of contents](./toc.md)



### Node.js介绍与安装

#### 出现背景
* Java是多线程配置,成本太高(一个客户对应一个服务员)
* Node.js是单线程配置(一个服务员对应多个客户), 要降低成本

#### Node.js特点
* 单线程, 异步(服务多个客户), 非阻塞
* 统一API

#### 安装
1.官网地址: node.js.com
2.版本选择: LTS(长期维护版)-生产, Current(当前最新版本)-练习

#### 多版本管理-nvm
1.安装地址: [coreybutler/nvm-windows: A node.js version management utility for Windows. Ironically written in Go.](https://github.com/coreybutler/nvm-windows)

2.基本命令熟悉

3.配置镜像地址
```sh
nvm node_mirror https://npmmirror.com/mirrors/node
```


#### 文档
质量比较高的文档
* nodejs.org

### 2.异步编程&Promise

#### 背景概念
##### 进程和线程
* 进程: 程序的运行环境(工厂)
* 线程: 实际进行运算的东西(工人)

##### 同步和异步
* 同步: 
	* 通常情况代码都是自上向下一行行执行的;
	* 前边代码不执行后面的代码也不执行;
	* 可能会出现阻塞的情况
	* 解决同步的问题:
		* Java python: 通过多线程来解决
		* Node.js: 通过异步方式来解决
* 异步: 
	* 一段代码的执行不会影响其它代码
	* 异步的问题:
		* 异步的代码无法通过return来设置返回值
	* 特点
		* 不会阻塞其它代码的执行
		* 需要通过回调函数来返回结果
* 基于回调函数的异步带来的问题:
	* 代码的可读性差
	* 可调试性差
* 如何解决问题?
	* 需要代替回调函数的方案-Promise
	* Promise简单介绍
		* 一个存储数据的对象

```js
//异步例子的说明

function sum(a,b) {
	let begin = Date.now()
	setTimeout(() => {
		return a + b
	}, 2000)
}

console.log('111')
const result = sum(123,456)
console.log(result)
console.log('222')
//111 undefined 222


// 回调函数解决
function sum(a,b,cb) {
	setTimeout(() => {
		cb(a+b)
	},2000)
}
console.log('111')
const result = sum(123,456,(a,b)=>a+b)
console.log(result)
console.log('222')
// 111 222 579


//回调地狱
function sum(a,b,cb) {
	setTimeout(() => {
		cb(a+b)
	},2000)
}
console.log('111')

sum(123,456, (result) => {
	sum(result, 7, (result) => {
		sum(result, 8, (result) => {
			sum(result, 9, (result) => {
				sum(result, 10, (result) => {
					console.log(result)
				})
			})
		})
	})
})
console.log(result)
console.log('222')
```


#### Promise

##### 实现Promise
```js
const mp = new MyPromise((resolve, reject) => {})



class MyPromise {
	//接收一个执行器作为参数
	constructor(executor) {
		executor
	}

	#result

	#state = 0 //peding0 fulfilled 1 rejected 2

	#resolut() {
	
	}

	#reject() {
	
	}
}
```


#### async和await
