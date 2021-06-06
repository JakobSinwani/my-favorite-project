<template>
  <div class="root-element">
    <q-input outlined v-model="name" label="enter text"/>
    <q-input outlined type="number" v-model="price" label =enter price/>
    <q-btn @click="send">Enter</q-btn>
  </div>
</template>

<script>
export default {
  name: "Brother",

  data() {
    return {
      name:'',
      price:0
    }
  },

  methods: {
    send() {
      this.$emit('price',this.price)
      // let brother = new CustomEvent('brother', {title:this.name})
      // dispatchEvent(brother)
      this.price = 0;
    }
  }
}
</script>

<style scoped>

</style>
