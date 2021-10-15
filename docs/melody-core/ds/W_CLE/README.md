# CLE
> Component Library Ecology, UI组件库及其生态搭建全流程

日前，音巢正在开发一个react移动端UI组件库，目前正在正在开发H5库，后续也有开发RN库，小程序库的计划。
代码仓库(开发中): https://github.com/melody-core/rem
组件文档(开发中): https://melody-core.github.io/rem/

## 1.menorepo仓库管理
> 完善的组件库生态的开发并不只是单单一个组件库————至少要包含 组件库、组件文档平台，单独抽离出的icon库、组件模板项目脚手架，组件开发助手等。

组件库生态应当是围绕组件库本身，由多个项目构成。
那么如何管理多项目的代码仓库呢？每个项目都独立为一个仓库吗？
这种时候，也许你可以选择menorepo的形式，就像react、antd这些知名的开源库。
#### 什么是monorepo?
monorepo指多个项目放在一个项目仓库里。目录形如：
<img src="/目录12.png">
这样做的目的是——方便公共依赖管理(比如抹平共用依赖的版本差异)，方便同一系列的项目管理，方便统一lint规范、ts规范，方便关联项目统一发布等。其他有关monorepo的描述，感兴趣的可以自行谷歌查询。
monorepo的实现方案有两种
● 一种是lerna，特点就是上述的目录格式。
● 一种是yarn workspaces，特点是package.json里的workspace字段。
当然多数情况是两种都用，都支持。
Rem就是这样，常规情况下我们建议您使用yarn。
clone项目后，只需要运行 yarn 或者 yarn install即可安装所有依赖。


## 2.storybook
> 一个UI组件库当然要配套功能强大的文档平台——毫无疑问，storybook一定是最佳选择之一。

storybook是一个强大的文档平台开发框架。它的能力来源于它给配置集成的插件——比如国际化/单测结果集成/mdx/readme等。

Rem使用了它作为文档平台的开发依赖。有趣的是，Rem组件库开发之所以选择了scss而不是less去处理样式，一部分原因就在于storybook对less并不十分友好。

## 3. 代码规约集成
> 多仓库的形式让我们只需在容器仓库集成一次代码规约约束(lint)，那么所有子仓库的开发者都将遵循它。

在Rem仓库中，我们集成了阿里大前端的开发规约(https://github.com/alibaba/f2e-spec)。

不仅仅体现在tsx的eslint，这包含scss/md/mdx文件等统统都会受到统一的约束。

更关键的是，提交的commit信息也添加了这样的约束。你的commit -m后面跟随的说明，必须要符合下方的格式：
行为目的(目标区域或范围): 改动说明。
如： 
```shell
feat(rem): 添加Tag组件初始化。
```
即表达rem组件库功能方向的迭代，添加了一个Tag组件。

良好的代码规范是一切团队化开发协作的重要基石，也是代码质量和代码变更记录可读性的重要保障。

### 4.原生css自定义属性与函数var()
在rem的代码仓库中，你能够在packages/rem/src/global中发现这样的代码：
```less
:root {
  --rem-color-primary: #1677ff;
  --rem-color-success: #00b578;
  --rem-color-warning: #ff8f1f;
  --rem-color-danger: #ff3141;
  --rem-color-white: #fff;
  --rem-color-weak: #999;
  --rem-color-light: #ccc;
  --rem-border-color: #eee;
  --rem-font-size-main: 13px;
  --rem-color-text: #333;
  --rem-font-family: -apple-system, blinkmacsystemfont, 'Helvetica Neue',
  helvetica, segoe ui, arial, roboto, 'PingFang SC', 'miui',
  'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;
  --rem-z-index-mask: 1000;
  --rem-z-index-popup: 1000;
  --rem-z-index-popover: 1030;
  --rem-z-index-floating-panel: 900;
}
```
然后在某处的css属性中发现了这样的样式定义:
```less
color: var(--rem-color-text);
```
不必惊讶——这其实是原生css的特性，css自定义属性与css函数。
css自定义属性允许我们在根(root)中定义相关的变量，并在任何位置通过css函数var来使用它。
相关文档请参照
https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties

请务必在代码中这样使用它们，它将给我们带来极大的收益——例如当我们需要更换组件的主题皮肤，只需要更新我们的全局自定义color属性即可。

## 5.单元测试集成
> 对于公共基础库来讲，单测是必不可少的。

本章不过多赘述。

## 6.组件开发小助手
> 为了统一初始化形态的组件目录与格式，我们最好开发一个组件开发小助手——用来生成一个初始化的组件目录，以及提供组件开发的其他辅助功能。

在rem中，@六弦 开发了小助手ram(https://melody-core.github.io/melody-core/ram/#how-to-use),使用它可以直接初始化一个组件目录。

## 关于rem开发的补充：TS与prop-types是否冲突？
prop-types是一个包，它常用来跟react项目一起使用。例如：
```jsx
import PropTypes from 'prop-types';

const Button = ({ className, ...rest }) => {
  return <button className={classnames(styles.Button, className)} {...rest} />;
};

Button.propTypes = {
  className: PropTypes.string,
};
```

毫无疑问，PropTypes用来描述Button的prop类型。
那么用typescript来对Button的props进行定义后，还需要使用它吗？

答案是 要的,两者并不冲突.

#### 编译时与运行时
ts是编译时，在源代码编译成js的过程中，它会生效；

而prop-types是运行时，也就是编译后的js在运行的过程中，它会生效。比如我们使用了Button组件，给它传入了一个错误的props类型值，prop-types会及时报错，并将这个错误打印在控制台里。

我们结合两者，前者能在开发阶段给开发者良好的语法提示，后者可以让开发者更便捷的发现使用rem开发的时候，自己写入的bug。

因此，我们这样做会给开发者带来更良好的体验。

## 最后
Rem库正在开发中，如果你对开源产出感兴趣，请钉钉搜索群号 34304813 以申请加入。
