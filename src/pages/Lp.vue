<template>
  <div class="container">
   <header v-bind:class="{bindClass:bindClass}">
    <ol>
      <li>Service</li>
      <li>Home</li>
      <li>About</li>
      <li>Gallery</li>
    </ol>
     <h4>LOGO</h4>
   </header>
    <q-btn label="bindClass" @click="bindClass = !bindClass"/>
    <div class="box" style="background: antiquewhite">
      <div class="box-child">
        <h5>title</h5>
        <input>
      </div>
    </div>

    <footer>
    </footer>
  </div>
</template>

<style scoped>

header {
  display: flex;
  justify-content: space-between;
  background: #1976D2;
}

header ol {
  background: #C10015;
  display: flex;
}

header ol li {
  margin: 10px;
  list-style: none;
}

header.bindClass {
  display: none;
}

.box {
  display: flex;
  justify-content: center;
}

.box-child {
  transition: 1s;
  background: lightslategrey;
}

.box-child:focus-within {
  transition: 1s;
  background: pink;
}

.box-child:focus-within > h5 {
  transition: 1s;
  color: blue;
}



/*h3 {*/
/*  transition: 0.5s;*/
/*}*/
/*.bindClass {*/
/*  transition: 0.5s;*/
/*  text-align: center;*/
/*  font-size: 100px;*/
/*  color: #C10015;*/
/*}*/

/*.cards {*/
/*  display: flex;*/
/*  flex-direction: row;*/
/*  flex-wrap: wrap;*/
/*}*/

/*section {*/
/*  width: 100px;*/
/*  height: 100px;*/
/*  background: #C10015;*/
/*  margin: 10px;*/
/*}*/

@media (max-width: 400px) {
  .hide {
    display: none;
  }
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


