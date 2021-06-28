<template>
<div style="background: #aaa; padding: 20px">
  <ChildOne @childOne="sendNumberToGrandFather" />
<!--  <h3>I AM Father ONE</h3>-->
<!--    <h6>{{number}}</h6>-->
</div>
</template>

<script>
import ChildOne from "pages/PropsHell/familyOne/ChildOne";
export default {
  name: "FatherOne",
  components: {ChildOne},
  data(){
    return{
      number: 0
    }
  },
  methods: {
    sendNumberToGrandFather(numberFromChild) {
      this.number = numberFromChild

    }
    }
}
</script>

<style scoped>

</style>
