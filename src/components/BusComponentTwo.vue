<template>
<div>
  <h5>I AM Bus Two! {{number * 20}}</h5>

</div>
</template>

<script>
import {bus} from '../middleware/busEvent';
export default {
  name: "BusComponentTwo",
  created() {
    bus.$on('setNumber', this.setNumber)
    },
  data() {
    return{
      number: 0
    }
  },
  methods: {
    setNumber(number) {
      this.number = number
    }
  }
}
</script>

<style scoped>

</style>
