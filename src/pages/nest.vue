<template>
  <div>
<h3>hellosss</h3>
  <input v-model="value">
  <q-btn label="send" @click="update(value)"/>
  </div>
</template>

<script>

import fbi from '../middleware/firebaseAPI';
export default {
  name: "nest",
  methods: {
    update(value) {
      fbi.db().collection('folders').doc(window.user.uid).set({test: value})
    }
  }
}
</script>

<style scoped>

</style>
