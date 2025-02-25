



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




## Docker



### 安装Docker

1.访问安装说明
```url
https://docs.docker.com/engine/install/
```

2.移除系统中的旧版本
```sh
# 移除旧版本docker  yum是旧命令 dnf是新命令
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
```

3.配置docker yum源
```sh
# 配置docker yum源。
sudo yum install -y yum-utils
sudo yum-config-manager \
--add-repo \
http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

4.安装docker引擎

```sh
# 安装最新docker dnf
sudo dnf install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# 安装 最新 docker yum
sudo yum install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```


5.启动docker, 开机qidsdocker; enable + start二合一
```sh
sudo systemctl start docker
```

```sh
systemctl enable docker --now
```


6.配置加速
```sh
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
    "registry-mirrors": [
        "https://mirror.ccs.tencentyun.com",
        "https://docker.m.daocloud.io"
    ]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```



### 镜像操作命令

#### 1.下载镜像相关命令

```sh
#查看运行中的容器
docker ps
#查看所有容器
docker ps -a
#搜索镜像
docker search nginx
#下载镜像
docker pull nginx
#下载指定版本镜像
docker pull nginx:1.26.0
#查看所有镜像
docker images
#删除指定id的镜像
docker rmi e784f4560448
```


#### 2.启动容器相关命令
```sh
#运行一个新容器
docker run nginx
#停止容器
docker stop keen_blackwell
#启动容器
docker start 592
#重启容器
docker restart 592
#查看容器资源占用情况
docker stats 592
#查看容器日志
docker logs 592
#删除指定容器
docker rm 592
#强制删除指定容器
docker rm -f 592
# 后台启动容器
docker run -d --name mynginx nginx
# 后台启动并暴露端口
docker run -d --name mynginx -p 80:80 nginx
# 进入容器内部
docker exec -it mynginx /bin/bash
```

#### 3.提交容器相关命令
```sh
# 提交容器变化打成一个新的镜像
docker commit -m "update index.html" mynginx mynginx:v1.0
# 保存镜像为指定文件
docker save -o mynginx.tar mynginx:v1.0
# 删除多个镜像
docker rmi bde7d154a67f 94543a6c1aef e784f4560448
# 加载镜像
docker load -i mynginx.tar 
```


#### 4.发布镜像
```sh
# 登录 docker hub
docker login
# 重新给镜像打标签
docker tag mynginx:v1.0 用户名/mynginx:v1.0
# 推送镜像
docker push 用户名/mynginx:v1.0
```


#### 其它命令
```sh

# 删除容器
docker rm -f $(docker ps -aq)

#删除全部卷
docker volume rm $(docker volume ls -q)


```


### 镜像实践操作

#### 实现
> 启动一个nginx, 并更改他的首页,发布, 让所有人都能使用


#### 下载镜像
docker pull nginx:1.26.0

#### 启动容器

```sh
docker run nginx:1.26.0
docker run -d nginx:1.26.0
docker run -d --name mynginx -p 80:80 nginx:1.26.0  // -p 主机端口:容器端口
docker run -d --name mynginx -p 80:80 --rm nginx:1.26.0 //rm参数 容器停止后删除
```

#### 进入容器
进入容器中,修改容器中nginx的内容. 使用bin/bash命令更新文件内容
```sh
docker exec -it mynginx /bin/bash
```


```sh

```


#### 提交容器

```sh
# 提交容器变化达成一个新的镜像
docker commit -m 'update index.html' mynginx mynginx:v1.0

# 查看新保存的镜像
docker images

# 保存镜像为指定文件
docker save -o mynginx.tar mynginx:v1.0


# 加载获得镜像tar文件
docker load -i mynginx.tar
```



#### 发布镜像到hub
```sh
# 上面已经提交了命令, 这里不做太多注释

docker login

docker tag mynginx:v1.0 用户名/mynginx:v1.0

docker push 用户名/mynginx:v1.0
```



### Docker存储
容器内部文件有俩问题: 修改麻烦, 容易丢失.

> 注意, 任何命令通过 docker xx --help来查看相关选项或命令. 事倍功半

```sh
# 删除所有容器
docker rm -f $(docker ps -aq)
```


##### 目录挂载
两种方式:
* 目录挂载 `-v /app/nghtml:/usr/share/nginx/html`
* 卷映射 ``


```sh
# 目录挂载
docker run -d -p 80:80 -v /app/nghtml:/usr/share/nginx/html --name app01 nginx

# 卷映射
docker run -d -p 99:80 -v /app/nghtml:/usr/share/nginx/html -v ngconf:/etc/nginx --name app02 nginx
```



##### 卷映射
写法
```sh
-v ngconf(自定义的卷名):/etc/nginx
```


位置
统一放在`/var/lib/docker/volumes/<volume-name>/_data`


相关命令
```sh
# 查看卷
docker volume ls

# 创建一个卷
docker volume crate 卷名


# 查看某个卷的详情
docker volume inspect 卷名
```






### Docker网络
> docker为每一个容器分配唯一的ip, 使用容器**ip+容器端口**可以相互访问
> ip由于各种原因可能会变化, docker0默认不支持主机域名, 所以创建自定义网络, 容器名就是稳定域名


#### 容器之间的访问
```sh
# 第一种方式: 通过容器的bash,使用主机ip+端口
docker exec -it mynginx
# 进入bash
root@xxxx:/ curl http://xxx.xxx.xxx.xxx:容器端口


# 第二种方式: 通过docker的网络docker0进行访问(172.17.0.1)
//查询目标容器的ip地址
docker container inspect 容器名称
root@xxxx:/ curl  容器ip:端口


# 第三种方式: 创建docker网络  docker0默认不支持主机域名
// 删除所有容器
docker rm -f $(docker ps -aq)

//创建自定义网络
docker network create 网络名称
//启动容器
docker run -d -p 88:80 --name app1 --network mynet nginx
docker run -d -p 99:80 --name app2 --network mynet nginx
//进入一个容器中,访问另一个容器
docker exec -it app1 bash
// 访问目标容器
curl http://app2:80




# 查看容器的网络配置
docker container inspect 容器名字
```


#### 网络实践-Redis主从集群
```sh





```


#### 最佳实践

以mysql配置为例:

端口暴露
存储配置
环境变量
镜像版本

```sh
docker run -d -p 3306:3306 \
-v /app/myconf:/etc/mysql/conf.d \
-v /app/mydata:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=123456 \
mysql:8.0.37-debian
```



### Docker compose
> 批量管理容器
> docs.docker.com/compose/comopse-file



#### 特点
- 增量更新
	- 修改 Docker Compose 文件。重新启动应用。只会触发修改项的重新启动。
- 数据不删
	- 默认就算down了容器，所有挂载的卷不会被移除。比较安全



#### 语法
```md
顶级元素
	name 名字
	services 服务 //要启动的应用
	networks 网络
	volumes 卷
	configs 配置
	secrets 密钥
```



#### 创建一个wordpress博客

```sh
# 上线  之前没有创建过
docker compose up -d

# 下线
docker comopse down

# 启动  之前已经创建过了,是重新启动
docker compose start x1 x2 x3

# 停止
docker compose stop x1 x3

# 扩容
docker comopse scale x2=3
```

**实例-启动wordpress+mysql**
```sh

// 未采用compose形式的

# 1.创建一个网络
docker network create blog


# 创建mysql容器
docker run -d -p 3306:3306 \
-e MYSQL_ROOT_PASSWORD=123456 \
-e MYSQL_DATABASE=wordpress \
-v mysql-data:/var/lib/mysql \
-v /app/myconf:/etc/mysql/conf.d \
--restart always --name mysql \
--network blog \
mysql:8.0


# 创建wordpress容器
docker run -d -p 8080:80 \
-e WORDPRESS_DB_HOST=mysql \
-e WORDPRESS_DB_USER=root \
-e WORDPRESS_DB_PASSWORD=123456 \
-e WORDPRESS_DB_NAME=wordpress \
-v wordpress:/var/www/html \
--restart always --name wordpress-app \
--network blog \
wordpress:latest
```


```yml

// 采用compose形式的启动


name: myblog
services:
	mysql:
		container_name: mysql
		image: mysql:8.0
		ports:
			- "3306:3306"
		environment:
			- MYSQL_ROOT_PASSWORD=123456
			- MYSQL_DATABASE=wordpress
		volumes:
			- mysql-data:/var/lib/mysql
			- /app/myconf:/etc/mysql/conf.d
		restart: always
		network:
			-blog

	wordpress:
		image: wordpress
	    ports:
	      - "8080:80"
	    environment:
	      WORDPRESS_DB_HOST: mysql
	      WORDPRESS_DB_USER: root
	      WORDPRESS_DB_PASSWORD: 123456
	      WORDPRESS_DB_NAME: wordpress
	    volumes:
	      - wordpress:/var/www/html
	    restart: always
	    networks:
	      - blog
	    depends_on:
	      - mysql

volumes:
	mysql-data:
	wordpress:

networks:
	blog:
 
```



#### 其它操作

```yaml
# 启动comopse文件
docker compose -f compose.yaml up -d // -f compose.yaml 是默认写法,可以根据名称的不同而不同


# 下线+不删除卷
docker compose -f compose.yaml down


# 下线+删除卷
docker compose down -f compose.yaml down -rmi all -v


# 查看容器日志
docker logs myginx

```




#### 制作自定义镜像
> 使用Dockerfile制作镜像


##### dockerfile 常见指令
> docs.docker.com/reference/dockerfile


| 常见指令           | 作用           |
| -------------- | ------------ |
| ==FROM==           | ==指定镜像基础环境==     |
| RUN            | 运行自定义命令      |
| CMD            | 容器启动命令或参数    |
| ==LABEL==      | ==自定义标签==    |
| ==EXPOSE==     | ==指定暴露端口==   |
| ENV            | 环境变量         |
| ADD            | 添加文件到镜像      |
| ==COPY==       | ==复制文件到镜像==  |
| ==ENTRYPOINT== | ==容器固定启动命令== |
| VOLUME         | 数据卷          |
| USER           | 指定用户和用户组     |
| WORKDIR        | 指定默认工作目录     |
| ARG            | 指定构建参数       |


##### 实例: 制作镜像

```dockerfile

FROM openjdk:17

LABEL author=xxxx

COPY app.jar /app.jar

EXPOSE 8080


ENTRYPOINT ["java", "-jar", "/app.jar"]

```


```sh
# 构建镜像
dcoker build -f Dockerfile -t myjavaapp:v1.0 .

# 查看本地镜像
docker images


# 启动构建的容器
docker run -d -p 8888:8080 myjavaapp:v1.0
```



### docker镜像分层存储机制


```sh
docker image history nginx
```



### 安装常见镜像

* 独立组件
	* 缓存redis
	* 据库mysql
	* 消息队列RabbitMQ
	* 分布式协调Zookeeper
* 集群套件
检索opensearch
可视化 opensearch dashboard
消息队列kafka 
可视化 kafka-ui
注册/配置中心 Nacos
持久化 nacos-mysql
时序数据库 Prometheus
监控看板 grafana




## 问题
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





## 命令大全

### 停止删除所有镜像/容器


0.查看所有容器
```sh
docker ps -a
```


1.强制停止并删除所有容器
```sh
docker-compose down --remove-orphans

# 或手动停止
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
```

2.删除网络
```sh
# 列出所有网络
docker network -ls

# 删除项目网络
docker network rm  xxx
```

3.删除镜像
```sh
docker rmi xxxx

# 删除悬空镜像
docker image prune -f


# 删除所有镜像
docker rmi $(docker images -q) -f

# 删除所有镜像-ps
docker images -q | ForEach-Object { docker rmi $_ -f }

# 或者更简单的方式-ps

docker rmi $(docker images -q) -f
```

4.删除所有卷和缓存
```sh
# 删除所有卷
docker volume prune -f

#删除构建缓存
docker builder prune -f
```

5.完全重置
```sh
# 删除所有未使用的容器,网络,镜像和缓存
docker system prune -a -f --volumes

# 删除所有卷  linux
docker volume ls -q | xargs -r docker volume rm
# 删除所有卷 powershell
docker volume ls -q | ForEach-Object { docker volume rm $_ }
```





4.重新开发
```sh
docker network create web
```


```
#重新构建启动
docker-compose up --buld -d
```


```ts

docker network create web && \
docker-compose down && \
docker system prune -f && \
docker-compose build --no-cache && \
docker-compose up -d
```




