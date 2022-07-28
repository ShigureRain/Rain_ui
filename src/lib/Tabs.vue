<template>
  <div class="rain-tabs">
    <div ref="container" class="rain-tabs-nav">
      <div v-for="(t,index) in titles" :key="index" :ref="el => { if (t===selected) selectedItem = el }"
           :class="{selected: t=== selected}"
           class="rain-tabs-nav-item" @click="select(t)">
        {{ t }}
      </div>
      <div ref="indicator" class="rain-tabs-nav-indicator"></div>
    </div>
    <div class="rain-tabs-content">
      <component :is="c" v-for="(c,index) in defaults" :key="index" :class="{selected: c.props.title === selected }"
                 class="rain-tabs-content-item"/>
      <!--  这个标签可以查看组件类型  -->
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
import {onMounted, onUpdated, ref} from 'vue'

export default {
  name: 'Tabs',
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null)
    const indicator = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>(null)
    const x = () => {
      const {width} = selectedItem.value.getBoundingClientRect()
      indicator.value.style.width = width + 'px'
      const {left: left1} = container.value.getBoundingClientRect()
      const {left: left2} = selectedItem.value.getBoundingClientRect()
      const left = left2 - left1
      indicator.value.style.left = left + 'px'
    }
    onMounted(x)
    onUpdated(x)

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
    const select = (title: string) => {
      context.emit('update:selected', title)
    }
    return {selectedItem, indicator, container, defaults, titles, select}
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
      &-item {
        display: none;
        &.selected {
          display: block;
        }
      }
    }
  }
</style>
