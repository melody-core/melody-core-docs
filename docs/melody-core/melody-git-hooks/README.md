# @melody-core/melody-git-hook

> 提供了强大的git hooks功能。
## how to use？

### English
in your project package.json, add:
```js
"sctript": {
    //...others
    "prepare": "melody-git-hook"
}
``` 
then 
install @melody-core/melody-git-hook
```shell
yarn add @melody-core/melody-git-hook -D
```
now, you can see your project which dir named '.melody' and file 'pre-commit';
you are seccessful.

if you want to update the shell, just write the file which named 'pre-commit'.

### 中文
在你的项目的package.json里，添加:
```js
"sctript": {
    //...others
    "prepare": "melody-git-hook"
}
``` 
然后安装这个依赖

```shell
yarn add @melody-core/melody-git-hook -D
```
现在你可以看到你的项目里有 .melody 文件夹和pre-commit文件
你成功啦
现在尝试执行'git commit'的话，你将发现会先执行 pre-commit文件的shell脚本。
如果你想改变它的内容，直接重写这个文件内容就可以了，比如：
```shell 
npm run test
```