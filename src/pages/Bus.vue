<template>
  <div>
<BusComponentOne/>
    <BusComponentTwo/>
   STATE {{item}}
  </div>
</template>

<script>
import {mapState} from 'vuex'
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
  computed: {
    ...mapState('products',['item']),
    showState() {
      return this.$store.state.products.item
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
