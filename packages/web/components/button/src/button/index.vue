<template>
  <button>I'm a button, my prop is {{ msg }}</button>
  <Test />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { buttonProps as props } from './props'
import Test from './tes'

export default defineComponent({
  name: 'QButton',
  inheritAttrs: false,
  props,
  components: {
    Test
  },
  setup(props) {
    console.log(props)
  },
})
</script>
