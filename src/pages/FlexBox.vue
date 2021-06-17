<template>
  <div class="container">
    <div class="flex-container">
      <div class="flex-item">1</div>
      <div class="flex-item">2</div>
      <div class="flex-item">3</div>
      <div class="flex-item">4</div>      <div class="flex-item">1</div>
      <div class="flex-item">2</div>
      <div class="flex-item">3</div>
      <div class="flex-item">4</div>      <div class="flex-item">1</div>
      <div class="flex-item">2</div>
      <div class="flex-item">3</div>
      <div class="flex-item">4</div>      <div class="flex-item">1</div>
      <div class="flex-item">2</div>
      <div class="flex-item">3</div>
      <div class="flex-item">4</div>      <div class="flex-item">1</div>
      <div class="flex-item">2</div>
      <div class="flex-item">3</div>
      <div class="flex-item">4</div>      <div class="flex-item">1</div>
      <div class="flex-item">2</div>
      <div class="flex-item">3</div>
      <div class="flex-item">4</div>      <div class="flex-item">1</div>
      <div class="flex-item">2</div>
      <div class="flex-item">3</div>
      <div class="flex-item">4</div>      <div class="flex-item">1</div>
      <div class="flex-item">2</div>
      <div class="flex-item">3</div>
      <div class="flex-item">4</div>
    </div>
    <div>
      <h4>i am new</h4>
    </div>
  </div>
</template>

<style scoped>

.flex-container {
  background: black;
  height: 100vh;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;

  display: flex;
}
.flex-item {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100px;
  width: 100px;
  margin: 20px;
  background: darkblue;
  font-size: 20px;
  color: white;
}

</style>


<script>
export default {
  name: "Lp",
  data(){
    return {
      bindClass: true,
      text: 'helloo'
    }
  },
  beforeCreate() {
    console.log('beforeCreate',  this.text)
  },
  created() {
    console.log('created',this.text)
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
    // addEventListener('click', ()=> {
    //   console.log('I am Click')
    // })
  },
  beforeDestroy() {
    console.log('beforeDestroy')
  },
  destroyed() {
    console.log('destroyed')
  },
}


</script>


