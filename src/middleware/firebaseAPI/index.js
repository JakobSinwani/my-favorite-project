import firebase from 'firebase/app';
import firestore from 'firebase/firestore';
import auth from 'firebase/auth';
import functions from 'firebase/functions';


const firebaseInit = (config) => {

  return firebase.initializeApp(config);
}

const db = () => {
  return firebase.firestore()
}


export default {
  firebase,
  firebaseInit,
  db
}
