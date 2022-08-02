# Rain UI

### 简介

Rain UI 是一款基于 Vue 3 和 TypeScript 的 UI 组件库。

### 特性

* 开箱即用
* 轻量简洁
* 支持自定义

### 安装

打开终端运行下列命令：

```
npm install rain-ui
```

或

```
yarn add rain-ui
```

### 开始使用

请先安装本组件库 然后在你的代码中写入下面的代码

```
import {Button, Tabs, Switch, Dialog} from "rain-ui"
```

就可以使用Rain-UI了

#### Vue 单文件组件

代码示例

```
<template>
  <div><Button>按钮</Button></div>
</template>
<script>
  import {Button, Tabs, Switch, Dialog} from "rain-ui"
  export default {
    components: {Button}
  }
</script>
```
