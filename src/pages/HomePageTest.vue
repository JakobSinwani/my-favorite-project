<template>
<div class="container">
  <section class="user-details">

    <div class="imgBx">
      <q-img :src="require('../assets/img.svg')"/>
    </div>
    <div class="content-box">
      <div class="title"></div>
      <div class="resume"></div>
      <div class="profile"></div>
    </div>

  </section>

  <section>
    <div class="btnBox">
      <div class="btn">
        <img src="">
        <span>course</span>
      </div>
    </div>
  </section>

  <nav>
    <div class="line"></div>
    <div class="navBtnBx">

    </div>
  </nav>

  <section>

  </section>
</div>
</template>

<script>
export default {
  name: "HomePageTest"
}
</script>

<style scoped>
.container {
  transition: 1s;
  background: linear-gradient(to top, #1D1D1D , #fff);
}
.line {
  transform: translateX(12.5%);
  height: 40px;
  width: 80%;
  background: rgba(137, 48, 48, 0.2);
}

</style>
