
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



#### 3.前端项目配置

**配置内容如下**
* 将react项目精简结构,只保留最基本的页面结构和请求处理
* 添加代理`src/setupProxy.js`文件, 添加代理地址, 端口位8088


#### 4.后端项目配置如下
* `main.ts`中端口更改位8088
* 在`app.controller.ts`文件的getHello方法中接收参数id, 同时调用Service服务的getHello()方法并传递参数id

![[Pasted image 20250323153742.png]]

![[Pasted image 20250323153856.png]]

通过以上的配置, 我们可以在前端获取后端的返参数据.



#### 5. 模块化开发

**1.创建user模块**
* `nest g resource user`生成user模块
* 更改请求路径: 在`user.controller.ts`中修改请求路径
* 更改返回信息: 在`user.service.ts`中修改返参信息

```ts
//user.controller.ts

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post('/create-user')
	create(@Body() createUserDto: CreateUserDto) {
		return this.userService.create(createUserDto);
	}
}
```

```ts
//user.service.ts
@Injectable()
export class UserService {
	create(createUserDto: CreateUserDto) {
		return {
			status: true,
			msg: '创建成功'
		}
	}
}
```




## AOP架构理念
### MVC架构概述

#### 是什么
> Nest属于MVC（Model-View-Controller，模型-视图-控制器）架构体系.

* **Model层**负责业务逻辑处理，包括数据的获取、存储、验证以及数据库操作。
* **Controller层**通常用于处理用户的输入，调度Service服务，以及进行API的路由管理。
* **View层**在传统的服务器端渲染中，可能使用如ejs、hbs等模板引擎。在前后端分离的体系中，通常指的是客户端框架（如Vue或React）负责的部分。

#### HTTP请求的流程
当一个HTTP请求到达服务器时，它首先会被Controller层接收.
Controller层会根据请求调用Model层中的相应模块来处理业务逻辑，并将处理结果返回给View层以进行展示.
![[Figure-P42_868024.jpg]]

### AOP要解决的问题
#### 背景
> 以一个HTTP请求为例，客户端发送请求时首先会经过Controller（控制器）​、Service（服务）​、DB（数据访问或操作）等模块。如果想要在这些模块中加入一些操作，例如数据验证、权限校验或日志统计，应该怎么办呢？
> 如果有多个功能模块都需要进行校验，并且权限校验的逻辑相同，那么是不是意味着需要在多个Controller中重复加入这段逻辑?.
> 需要统一管理, 就是切面.

![[Pasted image 20250323163355.png]]


在Controller的前后都可以“切一刀”​，用来统一处理公共逻辑，这样就不会侵入Controller、Service等业务代码.

#### Nest中的切面(AOP)区域
![[Pasted image 20250323163757.png]]

中间的灰色区域属于AOP切面部分，包含
* Middleware（中间件）​、
* Guard（守卫）​、
* Interceptor（拦截器）​、
* Pipe（管道）
* Filter（过滤器）​。
它们都是AOP思想的具体实现。


### AOP在Nest中的应用
#### 1.中间件
* 默认基于Express
* 分为全局中间件和局部中间件
* 全局中间件通过use方法调用.  所有进入应用的请求都会经过全局中间件，通常用于执行日志统计、监控、安全性处理等任务
* 局部中间件通常应用于特定的控制器或单个路由上，以实现更细粒度的逻辑控制

#### 2.守卫
* 守卫所在的位置与中间件类似，可以对请求进行拦截和过滤. 通常用于权限, 角色等授权操作
* 守卫在调用路由程序之前返回true或者false来判断是否通行，分为全局守卫和局部守卫。
* 守卫必须实现CanActivate接口中的canActivate()方法，代码如下：
![[Figure-P45_8911024.jpg]]
* 全局守卫在main.ts中通过**useGlobalGuards**来调用，每个路由程序都会经过它进行权限验证才能够通行。
```ts
//main.js

async function bootstrap() {
	const app = await NestFfactory.create(AppModule);
	//守卫
	app.useGlobalGuards(new PersonGuard())
	//启动服务
	await app.listen(8088);
}
```
* 与中间件类似，作为局部守卫，可以缩小控制范围，从而实现更加精细的权限控制。
```ts
@Controller('person')
//声明守卫
@UssGuards(new PersonGuard())
//控制器
export class PersonController {}
```



#### 3.拦截器
* 拦截器不同于中间件和守卫，它在路由请求之前和之后都可以进行逻辑处理，能够充分操作request和response对象
* 拦截器通常用于记录请求日志、转换或格式化响应数据等。
* 类似于守卫，拦截器可以设置为控制器作用域、方法作用域或全局作用域。


**下面的代码定义了一个用于统计接口超时的拦截器**
![[Pasted image 20250323193230.png]]


****

**2.控制器作用域允许拦截器只作用于某个控制器。**
> 当程序执行到控制器时触发拦截器逻辑，通过@UseInterceptors装饰器将TimeoutInterceptor绑定到控制器类

```ts
@Controller('person') // 为控制器绑定超时拦截器 
@UseInterceptors(new TimeoutInterceptor()) 

export class PersonController {}
```


**3.方法作用域把拦截器的作用范围限制在某个方法上，比全局或控制器级别的范围更加精确。**
> 当程序执行到该方法时，触发拦截器的逻辑。

```ts
@Get() // 为单独的方法绑定超时拦截器 
@UseInterceptors(new TimeoutInterceptor()) 
findAll() { return this.personService.findAll(); }
```


**4.全局作用域允许拦截器应用到整个应用中。**
> 在main.ts文件中，可以通过app.useGlobalInterceptors()方法进行绑定，

```ts
async function bootstrap() { 
	const app = await NestFactory.create(AppModule); // 全局超时拦截器
	app.useGlobalInterceptors(new TimeoutInterceptor()); // 启动服务
	await app.listen(8088); } 
	bootstrap();
```



#### 4.管道
> 管道用于处理通用逻辑，其中两个典型的用例是处理请求参数的验证(validation)和转换(transformation)。
> 在执行路由方法之前，会首先执行管道逻辑，并将经过管道转换后的参数传递给路由方法。

Nest框架内置的管道, 及用户自定义的管道

**自定义管道-transform**
![[Pasted image 20250323194751.png]]


#### 5.过滤器

Nest中最为常见的是HTTP异常过滤器，通常用于在后端服务发生异常时向客户端报告异常的类型。目前内置的HTTP异常包含：
* BadRequestException
* UnauthorizedException
* NotFoundException
* ForbiddenException
* NotAcceptableException
*  RequestTimeoutException
* ConflictException
* GoneException
* HttpVersionNotSupportedException
* PayloadTooLargeException
* UnsupportedMediaTypeException

它们都继承自HttpException类。当然，我们也可以自定义异常过滤器，并向前端返回统一的数据格式：
![[Pasted image 20250323200919.png]]



....





## IoC(控制反转)思想
#### 背景
> 在后端架构中，当多个Controller模块调用同一个Service类时，我们希望确保它们使用的是同一个实例，即维持单例模式。在大型应用中，手动管理这种依赖关系可能会变得复杂，这是传统后端开发经常面临的一个挑战。
> 幸运的是，IoC（Inverse Of Control，控制反转）提供了一种解决方案。IoC容器在应用初始化时，会查找每个类上声明的依赖，并按顺序创建相应的实例，然后管理这些实例。当需要使用某个依赖时，IoC容器会提供相应的对象实例。

依赖注入(DI)是实现IoC的一种常见方式。

#### 为什么?
为么称之为“控制反转”呢？让我们通过一个生活化的比喻来说明：

自己做饭:
买菜->处理食材->烹饪

外出就餐:
菜单点菜->服务员->厨师

















## 调试Nest应用



## 装饰器



## 模块化



## 控制器与服务



## 中间件




## 拦截器与RxJS






## 管道




## 文件上传

