<template>
  <div>
    Tabs
    <component :is="defaults[0]"/>   <!--  这个标签可以查看组件类型  -->
    <component :is="defaults[1]"/>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'

export default {
  name: 'Tabs',
  setup(props, context) {
    const defaults = context.slots.default()    //获取子组件的类型
    // console.log(defaults[0].type === Tab)   //插入的组件类型判断
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab')
      }
    })
    return {defaults}
  }
}
</script>

<style scoped>

</style>
