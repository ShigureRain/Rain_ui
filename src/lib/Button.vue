<template>
  <div :size="size">
    <button v-bind="rest">
      <slot/>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Button',
  inheritAttrs: false, //不继承事件
  setup(props, context) {
    const {size, ...rest} = context.attrs
    return {size,rest}
  }
}
</script>

<style scoped>

</style>
