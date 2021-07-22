
<template>
<div id="page">
  <div class="flex-container">
    <div class="item-flex">
      title
      subTitle
    </div>

    <div class="item-flex">
      <p>title</p>
      <p>subTitle</p>
    </div>

    <div class="item-flex">
      <p>title</p>
      <p>subTitle</p>
    </div>
    <div class="item-flex">
      <p>title</p>
      <p>subTitle</p>
    </div>

    <table>
      <tr>
        <td>hello hello heloe</td>
        <td>hello hello heloe</td>
        <td>hello hello heloe</td>
      </tr>     <tr>
        <td>hello hello heloe</td>
        <td>hello hello heloe</td>
        <td>hello hello heloe</td>
      </tr>     <tr>
        <td>hello hello heloe</td>
        <td>hello hello heloe</td>
        <td>hello hello heloe</td>
      </tr>     <tr>
        <td>hello hello heloe</td>
        <td>hello hello heloe</td>
        <td>hello hello heloe</td>
      </tr>     <tr>
        <td>hello hello heloe</td>
        <td>hello hello heloe</td>
        <td>hello hello heloe</td>
      </tr>     <tr>
        <td>hello hello heloe</td>
        <td>hello hello heloe</td>
        <td>hello hello heloe</td>
      </tr>     <tr>
        <td>hello hello heloe</td>
        <td>hello hello heloe</td>
        <td>hello hello heloe</td>
      </tr>     <tr>
        <td>hello hello heloe</td>
        <td>hello hello heloe</td>
        <td>hello hello heloe</td>
      </tr>     <tr>
        <td>hello hello heloe</td>
        <td>hello hello heloe</td>
        <td>hello hello heloe</td>
      </tr>
    </table>
  </div>
</div>
</template>


<style scoped>


#page {
  height: 100vh;
  display: flex;
  align-items: center;
}

.flex-container {
  position: relative;
  height: 50vh;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  background: #aaaaaa;
}

.item-flex {
  border-radius: 50%;
  position: absolute;
  top:0;
  transform: translateX(100%);
  -webkit-transition: 1s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  background: lightslategrey;
  height: 100px;
  width: 100px;
}

.item-flex:hover > :nth-child(even) {
  color: #F2C037;
  transform: rotateZ(100deg);
  transition: 1s ease-in-out;
  background: blueviolet;
}

tr:nth-child(even) {
  background: #9C27B0;
}

/*.item-flex::before {*/
/*  content: 'before';*/
/*  width: 30px;*/
/*  height: 30px;*/
/*  font-size: 10px;*/

/*}*/
/*.item-flex::after {*/
/*  content: 'after';*/
/*  width: 30px;*/
/*  height: 30px;*/

/*}*/
</style>




<script>
export default {
  name: "CSS"
}
</script>

