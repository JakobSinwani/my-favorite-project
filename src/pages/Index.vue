<template>
  <q-page class="flex column flex-center">
    <Brother @price="changeTitle"/>
    <h2>{{price}}</h2>
    <img
      class="q-ma-xl"
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
    <q-btn label="login with google" @click="googleSing"/>
    <TestComponent v-bind:price="price"/>
  </q-page>
</template>

<script>
import firebaseInstance from '../middleware/firebaseAPI'
import TestComponent from "components/TestComponent";
import Brother from "components/Brother";
export default {
  name: 'PageIndex',
  components: {Brother, TestComponent},
  created() {
    addEventListener('brother',(e) => {
      debugger
    })
  },
  data() {
    return {
      title: 'My Best Title never!!!!',
      price: 0
    }
  },
  methods: {
    changeTitle(price) {
      this.price = price
    },
    googleSing(){

      const provider = new firebaseInstance.firebase.auth.GoogleAuthProvider();
      firebaseInstance.firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;

          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = credential.accessToken;

          // The signed-in user info.
          var user = result.user;
          window.user = user;
          this.$router.push('/home')
        }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });

    }
  }
}
</script>
