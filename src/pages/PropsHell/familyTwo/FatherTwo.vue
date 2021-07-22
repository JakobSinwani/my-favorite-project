<template>
  <div style="background: #1976D2 ">
    <h3>I AM Father Two</h3>
   <h6> {{fatherNumber}}</h6>
  <ChildTwo  style="background: #1372a2"/>
  </div>
</template>

<script>

import ChildTwo from "pages/PropsHell/familyTwo/ChildTwo";
export default {
  name: "FatherTwo",
  components: {ChildTwo},
  props: {
    fatherNumber: String
  },
  created() {

    },

  data(){
    return{
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
