<template>
  <div>
    <h3>I AM Two</h3>
   <h1> {{number}}</h1>
  </div>
</template>

<script>
import {bus} from '../../../middleware/busEvent/index'
export default {
  name: "FatherTwo",
  props:['number'],
  created() {
    bus.$on('idan', (newNumber)=> {
      this.number = newNumber
    })
    },

  data(){
    return{
    number: 0
    }
  }
}
</script>

<style scoped>

</style>
