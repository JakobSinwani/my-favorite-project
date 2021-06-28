<template>
<div>
  <h5>I AM Bus Two! {{number * 20}}</h5>

</div>
</template>

<script>

export default {
  name: "BusComponentTwo",
  created() {

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
