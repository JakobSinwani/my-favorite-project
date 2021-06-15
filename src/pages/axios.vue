<template>
<div>
  <h3>Get Posts</h3>
<q-btn @click="getData" label="getData"/>
<!--  <input v-model="value">-->
<!--  <button @click="sendToServer(value)">Click</button>-->
<!--  <button @click="putPost(value)">PUT</button>-->
  <div v-for="post in posts">
    {{post.title}}
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: "axios",
  created() {

  },
  data(){
    return {
    }
  },
  methods: {
    async getData(){
      try {
       const result = await axios.post('https://jsonplaceholder.typicode.com/posts', {name: '11'})
      } catch(e) {
        console.log(e)
      }
      try {
        console.log()
      } catch (e) {}
    }
  }
}
</script>

<style scoped>

</style>
