<template>
  <div id="q-app">
    <h1 style="display: inline; position: relative; top: 100px; left: 50%; transform: translateX(-50%)">
      {{name}}
    </h1>
    <input v-model="lior">
    <button @click="changeToLiorAc(lior)">change to lior</button>
<!--    <router-view />-->
  </div>
</template>
<script>
import {mapState, mapActions, mapMutations, mapGetters} from 'vuex';
export default {
  name: 'App',
  data(){
    return{
      lior: ''
    }
  },
  computed: {
    ...mapState('products', ['name']),
    ...mapGetters('products',[])
  },
  methods: {
    ...mapActions('products',['changeToLiorAc']),
    ...mapMutations('products', ['changeToLior'])
  }
}
</script>
