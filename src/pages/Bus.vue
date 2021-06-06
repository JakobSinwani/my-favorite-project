<template>
  <div>
<BusComponentOne/>
    <BusComponentTwo/>
  </div>
</template>

<script>
import BusComponentOne from "components/BusComponentOne";
import BusComponentTwo from "components/BusComponentTwo";
export default {
  name: "Bus",
  components: {BusComponentTwo, BusComponentOne},
  data() {
    return {
      number:0
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
