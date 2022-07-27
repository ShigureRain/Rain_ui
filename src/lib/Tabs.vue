<template>
  <div>
    <div v-for="(t,index) in titles" :key="index">{{ t }}</div>
    <component :is="c" v-for="(c,index) in defaults" :key="index"/>   <!--  这个标签可以查看组件类型  -->
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
    const titles = defaults.map((tag) => {
      return tag.props.title
    })
    return {defaults, titles}
  }
}
</script>

<style scoped>

</style>
