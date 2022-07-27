<template>
  <div>
    <h1>示例1</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="visible" :cancel="f2" :ok="f1">
      <template v-slot:title>
        6666
      </template>
      <template v-slot:content>
        <div>你好</div>
        <div>内容</div>
      </template>
    </Dialog>
    <h1>示例2</h1>
    <Button @click="showDialog">show</Button>
  </div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {h, ref} from 'vue'
import {openDialog} from '../lib/openDialog'

export default {
  name: 'DialogDemo',
  components: {Dialog, Button},
  setup() {
    const visible = ref(false)
    const toggle = () => {
      visible.value = !visible.value
    }
    const f1 = () => {
    }
    const f2 = () => {
    }
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, '标题'),
        content: '你好',
        closeOnClickOverlay:false,
        ok() {
          console.log('ok')
        },
        cancel() {
          console.log('cancel')
        }
      })
    }
    return {visible, toggle, f1, f2, showDialog}
  }
}
</script>

<style scoped>

</style>
