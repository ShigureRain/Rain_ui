<template>
  <router-view/>
</template>

<script lang="ts">
import {provide, ref} from 'vue'
import {router} from './router'

export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth
    const asideVisible = ref(width > 500) //ref，响应式的参数值，可改变    width>500为true
    provide('asideVisible', asideVisible)
    router.afterEach(() => {
      if (width <= 500) {
        asideVisible.value = false
      }
    })
  },
}

</script>
