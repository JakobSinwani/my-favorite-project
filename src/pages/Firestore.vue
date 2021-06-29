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
  <q-input label="delete by id" v-model="product.id"/>
  <q-btn label="DeleteDoc" @click="deleteById(product.id)"/>
  <q-btn label="update" @click="updateName(product.id)"/>
  <q-btn label="deleteField" @click="deleteField(product.id)"/>
  <q-btn label="GetCollectionGroup" @click="GetCollectionGroup()"/>
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
        price: '',
        id: ''
      },
      allProducts: []
    }
  },
  methods: {
   async sendToFirestore(product) {

      product.id = await (fbi.firebase.firestore().collection('test').doc().id);

     await fbi.firebase.firestore()
       .collection('TestUser').doc(window.user.uid+2)
       .collection('products').doc(product.id).set(product)
      .then(()=> console.log('suceess'))
      .catch(e => console.error(e.message))
    },
    async getProducts() {
     await fbi.db().collection('TestUser').doc(window.user.uid)
        .collection('products').get()
      .then(result =>
        result.docs.forEach(doc => this.allProducts.push(doc.data())))
      .catch(e => console.error(e.message));
    },
    async getSpecificProduct() {
     const arr = ['niv', 'ofek'];
     await fbi.db().collection('TestUser').doc(window.user.uid)
      .collection('products')
       // .where('name', '!=', 'niv')
       .where('name', 'in', arr)
      // .where('name', '==', 'niv')
      .get()
      .then(r => r.docs.forEach(doc => this.allProducts.push(doc.data())))
    },
    deleteById(id) {
     id = 'yZUvev6QSThbgmEYvbvc'
      // fbi.db().collection('TestUser').doc(window.user.uid).collection('products')
      // .doc(id).delete()
      fbi.db().collection('TestUser').doc('ICxsEAAKFug8iCCnP9NW0UkOljG22').delete()
      .then(r => alert('sucess'))
      .catch(e => alert('error' + e))
    },
    updateName(id) {
     id = 'cXowa3fz17cyorO53b8N'
      fbi.db().collection('TestUser').doc(window.user.uid).collection('products')
      .doc(id).update({name: 'nir', hobby: 'guitar'})
    },
    deleteField(id) {
     id = 'cXowa3fz17cyorO53b8N'
      fbi.db().collection('TestUser').doc(window.user.uid).collection('products')
      .doc(id).update({hobby: fbi.firebase.firestore.FieldValue.delete()})
    },
    async GetCollectionGroup(){

     const collection = await fbi.db().collectionGroup('products')
       .where('price', '<', '100')
       .get()
      collection.docs.forEach(doc => console.log(doc.data()))

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
