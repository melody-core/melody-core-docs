# @melody-core/holmes
> 🕵️ 福尔摩斯！为您的项目提供安全扫描服务！
## 1. 作为命令行工具使用
安装
```shell
 # 我们更期望您可以通过 melody来安装它。
   yarn global add @melody-core/melody-cli
 # 安装  
   melody i @melody-core/holmes
  # 使用-目标项目的根目录下运行
  melody holmes check
```


当然，也可以直接安装和使用它。
```shell
   yarn global add  @melody-core/holmes
```
使用
```shell
# 您可以在任意前端项目的根目录下运行
holmes check 
```


## 2. 作为依赖包使用
安装
```shell
   yarn add  @melody-core/holmes
```
使用
```node
   const PackageSafeWorker  = require('@melody-core/holmes');
   const packageSafeWorker = new PackageSafeWorker({
       proPath   //参数，要检测项目的绝对路径
   });
   const result = await PackageSafeWorker.run();
   console.log('项目依赖包安全检测结果：', result)
```



## 原理与设计

### 注意点

由于每个业务组项目的依赖安装方式不一样，会带来一定的差异：

- yarn 生成 yarn.lock
- npm 生成 package-lock.json
- cnpm 不会生成锁文件

因此关键点在于如何兼容这些安装方式所带来的差异性问题：

1. 文件参数不一致，那么每一种最匹配的扫描方案都不一致
2. 每种扫描方案的输出不一致；

### 兼容性方案

#### 扫描方式兼容

> Yarn/npm/retirejs.js

- yarn audit
- npm audit
- retirejs.js 用来解决无锁文件的情况

因此，holmes其实就是会先检测项目根目录下是否含有锁文件，如果含有，则用对应的yarn/np audit来获取检测数据。如果没有，则会使用retirejs来兼容无锁文件下的检测(根据package.json里的依赖项)。