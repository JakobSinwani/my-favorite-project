<template>
  <div style="background: #1976D2 ">
    <h3>I AM Father Two</h3>
   <h6> {{number}}</h6>
  <ChildTwo :number="number" style="background: #1372a2"/>
  </div>
</template>

<script>

import ChildTwo from "pages/PropsHell/familyTwo/ChildTwo";
export default {
  name: "FatherTwo",
  props: ['number'],
  components: {ChildTwo},
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
