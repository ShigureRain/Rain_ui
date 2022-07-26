<template>
  <button :class="`theme-${theme}`" class="rain-button">
    <slot/>
  </button>
</template>

<script lang="ts">
export default {
  name: 'Button',
  props: {
    theme: String
  }
}
</script>

<style scoped>

</style>
