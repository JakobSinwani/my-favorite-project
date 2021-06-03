<template>
  <div>
<h3 v-bind:class="{bindClass}" >Landing Page</h3>
    <q-input v-model="text"/>
  <q-btn label="dynamic class" @click="bindClass = !bindClass"/>
    <div class="cards">
      <section></section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Lp",

  data(){
    return {
      bindClass: false,
      text: ''
    }
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {

    console.log('beforeUpdate')
  },

  updated() {
    console.log('updated')
  },
  destroyed() {
    console.log('destroyed')
  },
}
</script>

<style scoped>
h3 {
  transition: 0.5s;
}
.bindClass {
  transition: 0.5s;
  text-align: center;
  font-size: 100px;
  color: #C10015;
}

.cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

section {
width: 100px;
  height: 100px;
  background: #C10015;
  margin: 10px;
}

</style>
