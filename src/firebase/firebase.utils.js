import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAlcEoXlXCpxTZqJFvuy8yF61t54b6Lt8Y',
  authDomain: 'crown-clothing-cb880.firebaseapp.com',
  databaseURL: 'https://crown-clothing-cb880.firebaseio.com',
  projectId: 'crown-clothing-cb880',
  storageBucket: 'crown-clothing-cb880.appspot.com',
  messagingSenderId: '907440884543',
  appId: '1:907440884543:web:ad3233c7f7527dc2c9a18a',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
