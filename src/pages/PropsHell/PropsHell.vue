<template>
<div>
  <FatherOne/>
  <h3>{{number}}</h3>
  <FutherTwo :number="number"/>
</div>
</template>

<script>
import FatherOne from "pages/PropsHell/familyOne/FatherOne";
import FutherTwo from "pages/PropsHell/familyTwo/FutherTwo";
export default {
  name: "PropsHell",
  components: {FutherTwo, FatherOne},
  data(){
    return {
      number: 0
    }
  },
  methods: {
  setNumber(numberFromEmit) {
    this.number = numberFromEmit
  }
  }
}
</script>

<style scoped>

</style>
