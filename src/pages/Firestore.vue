<template>
<div>
  <q-input label="name" v-model="product.name"/>
  <q-input label="price" v-model="product.price"/>
  <q-btn label="send" @click="sendToFirestore(product)"/>

  <q-btn label="getProducts" @click="getSpecificProduct"/>
  <div v-for="product in allProducts" :key="product.id">
    {{product}}
  </div>
  <q-btn label="NOFAR" @click="nofar(product)"/>
</div>
</template>

<script>
import fbi from '../middleware/firebaseAPI/index'
export default {
  name: "Firestore",
  data(){
    return{
      product: {
        name: '',
        price: ''
      },
      allProducts: []
    }
  },
  methods: {
   async sendToFirestore(product) {

      product.id = await (fbi.firebase.firestore().collection('test').doc().id);

     await fbi.firebase.firestore().collection('users').doc(window.user.uid).collection('products').doc(product.id).set(product)
      .then(()=> console.log('suceess'))
      .catch(e => console.error(e.message))
    },
    async getProducts() {
     await fbi.db().collection('users').doc(window.user.uid)
        .collection('products').get()
      .then(result =>
        result.docs.forEach(doc => this.allProducts.push(doc.data())))
      .catch(e => console.error(e.message));
    },
    async getSpecificProduct() {
     await fbi.db().collection('users').doc(window.user.uid)
      .collection('products')
      .where('name', '==', 'niv')
      .get()
      .then(r => r.docs.forEach(doc => this.allProducts.push(doc.data())))
    },

    async nofar(folder) {
      folder.id = await (fbi.firebase.firestore().collection('test').doc().id)
      await fbi.db().collection('folders')
        .doc(window.user.uid)
        .collection('userFolder').doc(folder.id)
        .set(folder)
    }
  }
}
</script>

<style scoped>

</style>
