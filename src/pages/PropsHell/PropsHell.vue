<template>
<div style="background: #F2C037; padding: 30px">
  <FatherOne @fatherOne="setNumberOnGrandFather"/>
  <h3>I Am GrandFather</h3>
  <h6>{{number}}</h6>
  <FatherTwo :number="number" />
</div>
</template>

<script>
import FatherOne from "pages/PropsHell/familyOne/FatherOne";
import FatherTwo from "pages/PropsHell/familyTwo/FatherTwo";
export default {
  name: "PropsHell",
  components: {FatherTwo, FatherOne},
  data(){
    return {
      number: 0,
    }
  },
  methods: {
    setNumberOnGrandFather(numberFromFatherOne){
      this.number = numberFromFatherOne;
    }
  },
}
</script>

<style scoped>

</style>
