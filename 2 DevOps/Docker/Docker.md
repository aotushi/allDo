



## Docker了解

> [What is Docker? | Docker Docs](https://docs.docker.com/get-started/docker-overview/)

[Docker 入门教程 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html)

[Docker学习资料集（从入门到实践） - 追逐时光者 - 博客园](https://www.cnblogs.com/Can-daydayup/p/17813981.html)

### 是什么

> Docker 是一个开源的应用容器引擎，基于 Golang 语言开发，可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 服务器。
> 容器是一个沙箱机制、相互隔离、相互之间不会有影响（类似于我们手机上运行的 App），并且容器开销是较低的。



### docker平台

> Docker 提供了在松散隔离的环境（称为容器）中打包和运行应用应用的能力。独立和安全性让你可以同时运行多个容器在一个主机上.
>
> 容器是轻量的,且包含运行应用的所有东西,所以你不需要依赖主机上安装的东西.
>
> 容器是可分享的.

### docker能干什么





### docker结构

* 使用客户端-服务端结构
* 客户端与daemon守护进程通信, 后者负责构建,运行,分发docker容器的重担.
* 客户端和守护端可以运行在同一个系统上,或可以连接客户端到远程Docker守护
* docker客户端与守护daemon通信使用REAT API, UNIX套接字或网络接口.
* 另一个docker客户端是Docker Compose,可以让你在包含一组容器的应用中工作.

![docker-architecture](assets/docker-architecture.webp)



#### Docker daemon

* Docker daemon(`dockerd`)监听Docker API请求和管理Docker对象,例如images, containers, networks和volumes.
* 一个daemon能和其他daemons通信来管理Docker services.

#### Docker client

* Docker client(`docker`)是多个Docker用户和Docker交互的主要方式
* 客户端发送指令(例如`docker run`)到`dockerd`, 后期执行命令.
* `docker`命令使用Docker API.
* Docker客户端可以和多个daemon通信

#### Docker Desktop

* 一个Mac,Windows,Linux环境下易安装的应用, 让你构建和分享容器化的应用和微服务
* Docker Desktop包含Docker daemon(`dockerd`), Docker客户端(`docker`),Docker Compose, Dcoker Content Trust, Kubernetes, Credential Helper.

#### Docker registries

* Docker registry存储Docker images.
* Docker Hub是公用的registry, 也是Docker默认查找镜像的地方.
* 使用`docker pull`或`docker run`命令时, Docker从你配置的registry拉取镜像.
* 使用`docker push`命令时, Docker推送镜像到你配置的registry





#### Docker objects

当你使用Docker时, 你是创建并使用了images, containers, networks,volumes, plugins, and other objects.

##### Images
* 镜像(image)是创建Docker容器说明的只读模板.
* 通常, 一个镜像是基于另一个镜像,和一些其他自定义配置.
* 构建自己的镜像: 
	* 创建Dockerfile文件,用简单的语法定义创建和执行镜像的步骤.
	* 每个Dockerfile中的命令都会在镜像中创建一个层(layer).
	* 当你改变Dockerfile并重启镜像,只有改变的层会重建.

##### Containers
* 一个容器是这个镜像的运行实例.
* 你可以使用Docker API或CLI 创建,开始,停止,移动,或删除容器
* 可以连接容器到一个或多个网络,将存储附加到容器,甚至基于容器当前状态创建一个新的镜像
* 容器之间及容器和主机之间默认是隔绝的.
* 当容器被删除后, 未存储在持久化存储中的状态都会消失.



### 安装






### docker-compose
#### 安装
1.Linux
```bash
sudo curl -L "https://github.com/docker/compose/releases/download/2.32.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

//对二进制文件授权可执行权限
sudo chmod -x /usr/local/bin/docker-compose

//创建软连接
 sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

//测试是否安装成功
docker-compose --version
```


下载到本地后离线安装
先以阿里云轻量级服务器为例,将其上传到了/tmp/文件夹下,假设名字就是'docker-compose'
```bash

//添加执行权限
sudo chmod +x /tmp/docker-compose

 移动到执行目录
sudo mv /tmp/docker-compose /usr/local/bin/docker-compose

# 创建软链接
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

# 验证
docker-compose --version
```



### 问题
#### 1.报错:`failed to resolve source metadata for docker.io/library`

执行命令`docker-compose up --build`后, 具体报错信息:
```bash
PS D:\github\allDo\Project\Nuxt\nuxt0> docker-compose up --build 

time="2024-12-17T13:08:35+08:00" level=warning msg="D:\\github\\allDo\\Project\\Nuxt\\nuxt0\\docker-compose.yml: the attribute `version` is obsolete, it will be ignored, please remove it to avoid potential confusion" 

[+] Building 23.2s (3/3) FINISHED 
docker:desktop-linux 
=> [nuxt_app_container internal] load build definition from Dockerfile 0.0s => => transferring dockerfile: 520B 0.0s 
=> ERROR [nuxt_app_container internal] load metadata for docker.io/library/node:20.10.0-alpine 23.1s 
=> [nuxt_app_container auth] library/node:pull token for registry-1.docker.io 0.0s

> [nuxt_app_container internal] load metadata for docker.io/library/node:20.10.0-alpine:

failed to solve: node:20.10.0-alpine: failed to resolve source metadata for docker.io/library/node:20.10.0-alpine: failed to authorize: failed to fetch anonymous token: Get "[https://dockerpull.org/token?scope=repository%3Alibrary%2Fnode%3Apull&service=registry.docker.io](https://dockerpull.org/token?scope=repository%3Alibrary%2Fnode%3Apull&service=registry.docker.io)": read tcp [240e:446:e08:152c:c2f:f67b:2ee6:5b1c]:64583->[2606:4700:8ca0::3dc4:21a2]:443: wsarecv: An existing connection was forcibly closed by the remote host.
```

精简的报错信息:
```md
failed to resolve source metadata for docker.io/library/...

failed to authorize: failed to fetch anonymous token
```

背景信息:
* win11 64
* docker-desktop 默认配置

网络上搜寻的解决解决方案:
* [Help on "ERROR [internal] load metadata for docker.io/library/node:18-alpine" - General - Docker Community Forums](https://forums.docker.com/t/help-on-error-internal-load-metadata-for-docker-io-library-node-18-alpine/144360)
* https://medium.com/@matijazib/how-to-fix-the-error-load-metadata-for-docker-io-when-building-your-docker-image-on-macos-ec6deee664fd#:~:text=This%20error%20often%20pertains%20to,Docker%20application%20on%20your%20system.
* https://stackoverflow.com/questions/73812700/docker-error-internal-load-metadata-for-docker-io
* https://forums.docker.com/t/docker-failed-to-fetch-oauth-token/143581
* https://blog.csdn.net/fwzzzzz/article/details/142333600
* https://forums.docker.com/t/unexpected-status-from-post-request-to-https-auth-docker-io-token-403-forbidden-on-macos/142500
* https://blog.csdn.net/U202113837/article/details/135710075
以上方案涉及:
* 添加代理, 
* 取消buildkit
* 登录
* 提升操作权限
* 删除config.json文件,重启
* 修改镜像(上面的错误提示中已经就是修改过的了.)

都没有生效, 只有第一个连接中直接使用docker命令下载就能跳过这个问题.
```bash
docker pull node:20.10.0-alpine
```



### 阿里云
根据你提供的 `/etc/os-release` 文件内容，你的服务器运行的是 Alibaba Cloud Linux 3.2104 U10 (OpenAnolis Edition)，这是一个基于 RHEL 8 的发行版。因此，我们可以按照类似于 CentOS 的步骤来安装和配置 Nginx。

### 步骤一：更新软件包列表

首先确保你的系统是最新的：

`sudo yum update -y`

### 步骤二：启用 EPEL 仓库

Nginx 不在默认的 Alibaba Cloud Linux 存储库中，所以我们需要启用 EPEL 仓库：

`sudo yum install -y epel-release`

### 步骤三：安装 Nginx

现在你可以安装 Nginx 了：

`sudo yum install -y nginx`

### 步骤四：启动 Nginx 并设置为开机自启

启动 Nginx 服务，并将其设置为随系统启动：

`sudo systemctl start nginx sudo systemctl enable nginx`

### 步骤五：检查 Nginx 状态

使用以下命令检查 Nginx 是否正在运行：

`sudo systemctl status nginx`

你应该会看到类似以下的信息：

```
● nginx.service - The nginx HTTP and reverse proxy server
   Loaded: loaded (/usr/lib/systemd/system/nginx.service; enabled; vendor preset: disabled)
   Active: active (running) since ...
```

### 步骤六：防火墙配置

如果你服务器上启用了防火墙（通常是 `firewalld`），你需要允许 HTTP 和 HTTPS 流量：

`sudo firewall-cmd --permanent --add-service=http sudo firewall-cmd --permanent --add-service=https sudo firewall-cmd --reload`

### 步骤七：访问默认页面

打开浏览器并访问你的服务器 IP 地址（例如 [http://your-server-ip）。你应该能看到](http://your-server-ip).xn--6qq71e45q1tyy7kv2p/) Nginx 的欢迎页面，这表明 Nginx 已经成功安装并运行。

通过这些步骤，你应该能够在 Alibaba Cloud Linux 上成功安装和配置 Nginx。如果有任何其他问题或需要进一步的帮助，请告诉我！


mysql_db_container-1  | 2024-12-16T14:04:02.961034Z 8 [Warning] [MY-013360] [Server] Plugin mysql_native_password reported: ''mysql_native_password' is deprecated and will be removed in a future release. Please use caching_sha2_password instead'
nuxt_app              | 
nuxt_app              | > migrate
nuxt_app              | > npx prisma migrate dev --name init --schema server/database/schema.prisma
nuxt_app              | 
nuxt_app              | Prisma schema loaded from server/database/schema.prisma
nuxt_app              | Datasource "db": MySQL database "course" at "mysql_db_container:3306"
nuxt_app              | 
nuxt_app              | Already in sync, no schema change or pending migration was found.
nuxt_app              | 
✔ Generated Prisma Client (v5.22.0) to ./node_modules/@prisma/client in 145ms
nuxt_app              | 
nuxt_app              | 
nuxt_app              | 
nuxt_app              | > build
nuxt_app              | > nuxt build