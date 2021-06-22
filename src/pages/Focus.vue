<template>
<div class="container">
  <div class="card">
    <h4  v-bind:class="{title}">title</h4>
    <input type="number" v-model="number">
  </div>
  <button @click="title= !title">change class</button>
  <h3>{{number}}</h3>
</div>
</template>

<script>
export default {
  name: "Focus",
  data(){
    return {
      number: 0,
      title: false
    }
  },
  watch: {
    number(newVal, oldVal) {
      console.log( "new: ",newVal)
      console.log('old', oldVal)
    }
  },
}
</script>

<style scoped>
.container{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.card {

  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  width: 300px;
  background: #ddd;
}

.card input {
  transition: 1s;
}

.card input:focus {
  transition: 1s;
}

.card:focus-within {
  transition: 1s;
  background: #C10015;
}

.card:focus-within > .title {
  transition: 1s;
  color: white;
}

</style>
