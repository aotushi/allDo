
## 快速上手Nest CLI

### 1.安装
```sh
npm i @Nestjs/cli -g
```

需要注意,以上方式需要不定时更新,以获取最新代码:
```sh
npm update @Nestjs/cli -g
```
### 2.了解基本命令
运行`nest -h`了解其命令


### 3.创建项目
创建项目相关命令:
![[Pasted image 20250304204143.png]]
直接使用`nest n cli-test -p pnpm`命令:


#### 生成指定代码片段
执行`nest generate -h`命令来查看生成指定的代码片段:
![[Pasted image 20250304213630.png]]




#### 构建应用

执行`nest build –h`命令，可以看到build命令提供了一些可选参数

![[Pasted image 20250304215027.png]]


#### 启动开发调试

使用`nest start`命令来启动开发调试:
![[Pasted image 20250304215258.png]]

#### 查看项目信息
`nest info`查看Node.js, npm及Nest依赖包的相关版本信息.



### 创建第一个Nest应用

> 创建一个服务端应用，并使用React构建一个客户端应用。我们将实现客户端发送请求后，服务端接收请求、进行数据处理，并返回新的数据给客户端。

#### 1.生成后端项目

```sh
nest n web-app -p pnpm
```
安装完成以后, 启动该项目并保持热重载:
```sh
nest start --watch
```


#### 2.生成前端项目
安装React脚手架`create-react-app`
```sh

npm i -g create-react-app
```

查看是否安装成功
```sh
create-react-app --version
```

创建名为`web-app-front`的项目
```sh
create-react-app web-app-front
```

启动该项目
```sh
npm start
```


