<template>
  <div>
    <Button @click="onClick">你好</Button>
  </div>
</template>

<script>
import Button from "../lib/Button.vue";

export default {
  name: "ButtonDemo",
  components: {Button},
  setup() {
    const onClick = () => {
    }
    return {onClick}
  },
}
</script>

<style scoped>

</style>
