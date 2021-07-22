<template>
<div id="page">
<!--  <div class="form">-->
<!--    <input v-model="product.name" placeholder="send">-->
<!--    {{product.name}}-->
<!--  </div>-->
  <button @click="popup = !popup">Show popup</button>
  <section :class="{popup}"></section>
  <div class="form" v-for="product in products">
  </div>
</div>
</template>

<script>
/**
 * v-model
 * watch
 * computed
 * lifeCycleHook
 * methods
 * */
export default {
  name: "JunTest",
  data(){
    return {
      popup: true,
      text: 'moshe',
      products: [
        {name: 'bamba', price: 10 , id: 1},
        {name: 'bisli', price: 11 , id: 2},
        {name: 'kifkef', price: 14 , id: 3},
        {name: 'doritos', price: 3 , id: 4},
        {name: 'amba', price: 12 , id: 5},
      ],
    }
  },

  beforeCreate() {
    console.log('beforeCreate', this.text)
    },
  created() {
    console.log('created' , this.text)
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('moundet')
  },
  beforeUpdate() {
    console.log('befre update')
  },
  updated() {
    console.log('updated')
  },
  beforeDestroy() {
    console.log('beforeDestroyed')
  },
  destroyed() {
    console.log('distroyed')
  },




  watch: {
    text (newValue, oldValue) {
      console.log('newValue: ', newValue)
      console.log('oldValue: ', oldValue)
    },
    'product.name' (newValue, oldValue) {
      console.log('newValue: ', newValue)
      console.log('oldValue: ', oldValue)
    }
  },
  computed: {
    calculateTotal() {
      return this.product.total = this.product.units * this.product.price
    }
  },
  methods: {},
}
</script>

<style scoped>
#page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
section {
  opacity: 0;
  transition: 1s;
  position: absolute;
  z-index: 11;
  height: 100px;
  width: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  background: #dddddd;
}
section.popup {
  z-index: -111;
  transition: 1s;
  opacity: 1;
}
</style>
