# 如何开始玩

## cra创建项目

* `npx create-react-app react-mobx-todos`

## 支持装饰器语法

### 安装依赖

* `yarn add customize-cra react-app-rewired @babel/plugin-proposal-decorators -D`

### 添加配置文件

* 在src同级创建`config-overrides.js`
* **config-overrides.js**中的代码如下

```js
const {
    override,
    addDecoratorsLegacy
} = require('customize-cra');

module.exports = override(addDecoratorsLegacy());
```

### 修改package.json
```json
"scripts":{
    "start":"react-app-rewired start",
    "build":"react-app-rewired build",
    "test":"react-app-rewired test",
    "eject":"react-app-rewired eject"
}
```

## mobx之旅

### [文档](https://zh.mobx.js.org/README.html)

### [Mobx with React](https://mobx-react.js.org/recipes-context#multiple-global-stores)

### 安装依赖

* `yarn add mobx mobx-react -S`