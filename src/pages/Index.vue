<template>
  <q-page class="flex column flex-center">
    <img
      class="q-ma-xl"
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
    <q-btn label="login with google" @click="googleSing"/>
  </q-page>
</template>

<script>
import firebaseInstance from '../middleware/firebaseAPI'
export default {
  name: 'PageIndex',
  methods: {
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
