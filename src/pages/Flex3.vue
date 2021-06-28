<template>
<div>
  <header class="desk">
    <ol>
      <li>SERVICE</li>
      <li>HOME</li>
      <li>CONTACT</li>
      <li>INFO</li>
    </ol>

    <h3>
      LOGO
    </h3>
  </header>

  <header class="mobile">
    <q-btn flat icon="menu"/>
    <h5>LOGO</h5>
    <q-btn flat icon="shopping_cart"/>
  </header>

  <section class="user">
    <div class="imageBx">
      <div class="img-container">
        <q-img :src="require('../assets/img.svg')"/>
      </div>
    </div>
    <div class="detailsBx">
      <p>hello friends naem</p>
      <p>lorm ipsum bla son</p>
      <p>loron epuson dolor </p>
    </div>
  </section>

  <section>
    <div class="card">
      <div class="card-imgBx">
        <q-img :src="require('../assets/quasar-logo-vertical.svg')"/>
      </div>
      <div class="card-content">
          i want to be proggramer brogrammert
          i want to be proggramer brogrammert
          i want to be proggramer brogrammert
          i want to be proggramer brogrammert
          i want to be proggramer brogrammert
          i want to be proggramer brogrammert
          i want to be proggramer brogrammert
          i want to be proggramer brogrammert
          i want to be proggramer brogrammert
      </div>
    </div>
  </section>

</div>
</template>

<script>
export default {
  name: "Flex3"
}
</script>

<style scoped>

.desk {
  height: 120px;
  background: #dddddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.desk ol {
  display: flex;
  width: 70%;
  justify-content: space-evenly;
  list-style: none;
  padding: 20px;
}

.desk h3 {
  margin: 10px;
}
.mobile {
  display: none;
}

.user {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
}

.img-container {
  margin: 30px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  border-radius: 50%;
  min-height:250px;
  min-width: 250px;
}

.detailsBx {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  min-width: 200px;
  min-height: 200px;
}

.card {
  max-width: 400px;
  height: 300px;
  overflow: hidden;
}


@media (max-width: 400px) {
  .desk {
    display: none;
  }
  .mobile {
    display:flex;
    justify-content: space-between;
    height: 100px;
    background: #dddddd;

  }
}
</style>
