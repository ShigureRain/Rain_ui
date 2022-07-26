<template>
  <router-view/>
</template>

<script lang="ts">
import {provide, ref} from 'vue'

export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth
    const asideVisible = ref(width > 500) //ref，响应式的参数值，可改变    width>500为true
    provide('asideVisible', asideVisible)
  },
}
</script>
