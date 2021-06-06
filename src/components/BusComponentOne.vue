<template>
<div>
  <h5>I AM Bus One!</h5>
  <q-input v-model="number" type="number"/>
  <q-btn label="send number" @click="sendNumber(number)" />
</div>
</template>

<script>
import {bus} from '../middleware/busEvent'
export default {
  name: "BusComponentOne",
  data(){
    return{
      number: 0
    }
  },
  methods: {
    sendNumber(number){
      bus.$emit('setNumber', number)
    }
  }
}
</script>

<style scoped>

</style>
