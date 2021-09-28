# @melody-core/historian
自动生成changeLog内容的cli工具

## 安装
>请先安装@melody-core/melody-cli，使用它更好地管理您的全局包。

+ 安装 @melody-core/melody-cli
```shell
yarn global add @melody-core/melody-cli
```
+ 安装 historian

使用melody-cli来安装和使用它
```shell
melody i @melody-core/historian
# 使用
# 基于angular-commit提交规范自动生成changelog
melody historian -p angular -i CHANGELOG.md -s
```

也可以全局安装和使用它
```shell
yarn global add  historian -p angular -i CHANGELOG.md -s
# 使用
# 项目根目录下运行
historian -p angular -i CHANGELOG.md -s
```