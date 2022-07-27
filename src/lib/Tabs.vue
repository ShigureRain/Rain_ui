<template>
  <div class="rain-tabs">
    <div class="rain-tabs-nav">
      <div v-for="(t,index) in titles" :key="index" class="rain-tabs-nav-item">{{ t }}</div>
    </div>
    <div class="rain-tabs-content">
      <component :is="c" v-for="(c,index) in defaults" :key="index"/>   <!--  这个标签可以查看组件类型  -->
    </div>
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

<style lang="scss">
  $blue: #40a9ff;
  $color: #333;
  $border-color: #d9d9d9;
  .rain-tabs {
    &-nav {
      display: flex;
      color: $color;
      border-bottom: 1px solid $border-color;
      position: relative;
      &-item {
        padding: 8px 0;
        margin: 0 16px;
        cursor: pointer;
        &:first-child {
          margin-left: 0;
        }
        &.selected {
          color: $blue;
        }
      }
      &-indicator {
        position: absolute;
        height: 3px;
        background: $blue;
        left: 0;
        bottom: -1px;
        width: 100px;
        transition: all 250ms;
      }
    }
    &-content {
      padding: 8px 0;
    }
  }
</style>
