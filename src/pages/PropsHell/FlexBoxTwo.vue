<template>
<div class="container">

    <h3>{{item}}</h3>
  <q-btn label="sendSomthing" @click="sendToActions"/>

<!--  <div class="flex-child" id="one">-->
<!--    1-->
<!--  </div>-->
<!--  <div class="flex-child" id="two">-->
<!--  2-->
<!--  </div>-->
<!--  <div class="flex-child" id="three">-->
<!--  3-->
<!--  </div>  <div class="flex-child" >-->
<!--  4-->
<!--  </div>  <div class="flex-child" >-->
<!--  5-->
<!--  </div>  <div class="flex-child" >-->
<!--  6-->
<!--  </div>  <div class="flex-child" >-->
<!--  7-->
<!--  </div>-->

</div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
  name: "FlexBoxTwo",

  computed: {
      ...mapState('products', ['item'])
    },
  methods: {
    ...mapActions('products', ['sayHello']),
    sendToActions(){
      const message = 'niv';
      this.sayHello(message);
    }
  }
  }

</script>


<style scoped>

.container {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  height: 100vh;
}

.flex-child {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 100px;
  height: 80px;

  flex-shrink: 5;
  margin: 5px;
  color: white;
  background: #1D1D1D;
}

#two {
  /*flex-basis: 200px;*/
  flex-shrink: 22;
}

/*#one {*/
/*  flex-shrink: 3;*/
/*}*/
/*#two {*/

/*}*/
/*#three {*/

/*}*/

</style>
