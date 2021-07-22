<template>
<div>
  <h3>hello</h3>
  {{messages}}
</div>
</template>

<script>
import fbi from '../middleware/firebaseAPI/index';
export default {
  name: "Snapshot",
  created() {
    fbi.db().collection('cities')
      .where('id', '==', '11')
      .onSnapshot((snap)=> {
          snap.forEach((doc) => {
            this.messages.push(doc.data().name);
      })
  })
  },
  data(){
    return {
      messages: []
    }
  }
}
</script>

<style scoped>

</style>
