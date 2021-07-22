<template>
<div class="container">
  <div class="form">
    <h3>Set Phone Number</h3>
    <q-input v-model="phone" label="set phone" />
    <q-btn  @click="setPhoneOnState(phone)" label="setNumber"/>
    <q-btn  @click="doSomething" label="ACtions"/>
    <h1>{{item}} </h1>

  </div>
  <h3> {{editedPhone}}</h3>
</div>
</template>

<script>
import {mapActions, mapState, mapMutations} from 'vuex';
export default {
  name: "il18",
  created() {
   console.log(this.$i18n)
  },
  data(){
    return {
      phone: '',
      editedPhone: ''
    }
  },
  computed: {
    ...mapState('payments', ['phone']),
    ...mapState('products', ['item']),
  },
  methods: {
    ...mapMutations('payments', ['setPhoneOnStateMu']),
    ...mapActions('payments', ['doSomething']),
    setPhoneOnState(newPhone) {
      this.setPhoneOnStateMu(newPhone)
      this.doSomething()
    }
  }
}
</script>

<style scoped>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form {
  border-radius: 10px;
  background: #31CCEC;
  text-align: center;
 width: 300px;
}
</style>
