<template>
  <div class="container">
    <h3 style="transform: translateY(-40px)">Flex Directions: {{directionOne}}</h3>
    <div class="main">
      <div class="cross">
        <div class="arrow-cross">
          <q-icon name="arrow_back_ios"/>
          <div class="tail"></div>
        </div>
        <span style="" class="cross-content">{{ col }}</span>
      </div>
      <div class="arrow-main">
        <q-icon name="arrow_back_ios"/>
        <div class="tail "></div>
      </div>
      <span>{{row}}</span>
    </div>

    <q-btn @click="switchAxis" label="switch" style="transform: translateX(-160px)"/>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.tail {
  transform: translate(2px,-10px);
  height: 2px;
  background: #1D1D1D;
}

.arrow-cross {
 transform: translateX(-80px) rotateZ(90deg);
}

.arrow-main {
  transform: translateY(60px) rotateZ(180deg);
}

.main span {
  display: inline-block;
  transform: translateY(60px);
}

.cross span {
  display: inline-block;
  transform: translateX(-90px) rotateZ(90deg);
}

</style>


<script>
export default {
  name: "Lp",
  data(){
    return {
      row: 'Main-Axis - justify-content',
      col: 'Cross-Axis - align-items',
      directionOne: 'row',
      directionTwo: 'column',

    }
  },
  methods: {
    switchAxis(){
      const row = this.row;
      const col = this.col;
      const directionOne = this.directionOne;
      const directionWto = this.directionTwo;

      this.row = col;
      this.col = row
      this.directionOne = directionWto;
      this.directionTwo = directionOne
    }
  }


}


</script>


