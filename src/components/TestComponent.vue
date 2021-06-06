<template>
  <div>
<h3>TEST COMPONENT</h3>
    <p>i am Prop </p>
    <h3>{{price}}</h3>
  </div>
</template>

<script>
export default {
  name: "TestComponent",
  props:['price']
}
</script>

<style scoped>

</style>
