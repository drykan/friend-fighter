import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyABVR-8I8hcs7llrlXzqkXNEma-sC9zibU",
    authDomain: "friend-fighter1.firebaseapp.com",
    databaseURL: "https://friend-fighter1.firebaseio.com",
    projectId: "friend-fighter1",
    storageBucket: "gs://friend-fighter1.appspot.com",
    messagingSenderId: "769438702724"
  };

const fire = firebase.initializeApp(config);
const storage = firebase.storage().ref();

// export const facebookProvider = new firebase.auth.FacebookAuthProvider();

export {
  storage, fire as default
};