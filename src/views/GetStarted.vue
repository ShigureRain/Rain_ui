<template>
  <article class="markdown-body">
    <h1>
      开始使用
    </h1>
    <p>请先<a href="#/doc/install">安装</a>本组件库。</p>
    <p>然后在你的代码中写入下面的代码</p>
    <pre><code>import {Button, Tabs, Tab, Switch, Dialog, openDialog} from "rain-vue3-ui"</code></pre>
    就可以使用Rain-UI了。
    <h2>Vue 单文件组件</h2>
    <p>代码示例：</p>
    <pre><code>&lt;template&gt;
  &lt;div&gt;&lt;Button&gt;按钮&lt;/Button&gt;&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  import {Button, Tabs, Tab, Switch, Dialog, openDialog} from "rain-vue3-ui"
  export default {
    components: {Button, Tabs, Tab, Switch, Dialog, openDialog}
  }
&lt;/script&gt;
 </code></pre>
  </article>
</template>

<script lang="ts">
  export default {
    name: 'GetStarted'
  }
</script>

<style lang="scss" scoped>

</style>