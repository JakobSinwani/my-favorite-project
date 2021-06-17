<template>
<div class="container">
  <div class="card">
    <h4 class="title">title</h4>
    <input>
  </div>
</div>
</template>

<script>
export default {
  name: "Focus"
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
