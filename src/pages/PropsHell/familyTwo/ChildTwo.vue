<template>
<div>
  <h3>I am Child Two: {{number}}</h3>

</div>
</template>

<script>
import {bus} from '../../../middleware/BusEvent/index';
import FatherOne from "pages/PropsHell/familyOne/FatherOne";
export default {
  name: "ChildTwo",
  components: {FatherOne},

  created() {
      bus.$on('childOneBusEvent', (numberFromChildOne)=> {
          this.number = numberFromChildOne;
      })
    },
  data(){
    return {
      number: 0
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
