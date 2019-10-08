import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBQsZm2lPWUhFYFxs2lSRDjy2IaY9--mHI",
    authDomain: "crwn-db-b0fa7.firebaseapp.com",
    databaseURL: "https://crwn-db-b0fa7.firebaseio.com",
    projectId: "crwn-db-b0fa7",
    storageBucket: "",
    messagingSenderId: "443796222454",
    appId: "1:443796222454:web:7ff99e1bf78480e46c57d7",
    measurementId: "G-9LH74PSEMR"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;