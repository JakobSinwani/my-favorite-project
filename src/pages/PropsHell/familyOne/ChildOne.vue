<template>
<div style="background: #ddd">
  <h3>i am child one </h3>
  <input v-model="number" v-on:input="sendToFatherOne(number)" >
<!--  <button @click="sendToFatherOne(number)">send number</button>-->

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
    sendToFatherOne(number){
      bus.$emit('bus', number)
    }
  }
}
</script>

<style scoped>

</style>
