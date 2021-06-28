import fbi from '../middleware/firebaseAPI/index';

console.log('i am boot')
const config = {
  apiKey: "AIzaSyCKvDpT7YzzSESmSIEDd7r8_g9DY4j5Z_Q",
  authDomain: "my-favorite-app-e4a1d.firebaseapp.com",
  projectId: "my-favorite-app-e4a1d",
  storageBucket: "my-favorite-app-e4a1d.appspot.com",
  messagingSenderId: "717690645919",
  appId: "1:717690645919:web:97752024b3719478d4e1aa",
  measurementId: "G-P1PE3BNNH7"
};


  fbi.firebaseInit(config);


  fbi.firebase.auth().onAuthStateChanged( async user => {
    window.user = user;
    if(user)
      console.log(user)
    else console.log('no user');
  })

console.log('boot 2')
