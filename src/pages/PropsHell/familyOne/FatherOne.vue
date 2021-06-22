<template>
<div>
  <h3>I AM ONE</h3>
  <input v-model="number"  @input="send(number)">
  <p>{{number}}</p>
<!--  <q-btn label="send Number" />-->
</div>
</template>

<script>
import {bus} from '../../../middleware/busEvent/index'
export default {
  name: "FatherOne",
  data(){
    return{
      number: 0
    }
  },
  methods: {
    send(number){
      bus.$emit('idan', number)
    }
  }
}
</script>

<style scoped>

</style>
