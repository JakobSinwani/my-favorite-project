<template>
<div>

</div>
</template>

<script>
import fbi from '../middleware/firebaseAPI/index'
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
export default {
  name: "Getters",
  created() {
    console.log("WINDOUW USER", window.user);
    console.log("FIREBASE USER", fbi.firebase.auth().currentUser);
    console.log(localStorage.getItem('uid'))
  }
}
</script>

<style scoped>

</style>
