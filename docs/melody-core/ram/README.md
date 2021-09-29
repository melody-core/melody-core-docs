# @melody-core/ram

> ram，组件开发小助手~

## how to use？

```shell
# 安装
melody i ram
# 在组件目录下运行
melody ram init --com
```
即可在当前目录下生成一个新的文件夹，里面包含了一个组件的初始化内容，包括README.md，{{ComponentName}}.tsx, index.ts, {{ComponentName}}.scss, {{ComponentName}}.storie.tsx等

## Ram与Rem
如果您是使用ram(拉姆)来开发rem(蕾姆)组件库，那么您只需要在packages/rem/src 目录下，执行
```shell
melody ram init
```
Ram会自动校验是否在rem组件库的src目录下。

