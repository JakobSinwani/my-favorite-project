<template>
<div style="background: #ddd">
  <h3>i am child one </h3>
  <input v-model="number" @input="send(number)" >

</div>
</template>

<script>
import {bus} from '../../../middleware/BusEvent/index';
export default {
  name: "ChildOne",
  data(){
    return {
      number: 0
    }
  },
  methods: {
    send(number) {
      bus.$emit('childOneBusEvent', number)
    }
  }
}
</script>

<style scoped>

</style>
