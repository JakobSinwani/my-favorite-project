<template>
<div style="background: #F2C037; padding: 30px">
  <FatherOne @fromFatherOneToGrandfather="sendToFatherTwo"/>
  <h3>I Am GrandFather</h3>
  <h6>{{$store.state.payments.name}}</h6>
  <FatherTwo v-bind:fatherNumber="number" />
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
    sendToFatherTwo(number) {
      this.number = number;
    }
  },
}
</script>

<style scoped>

</style>
