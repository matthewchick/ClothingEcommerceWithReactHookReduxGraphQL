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
// store google into firebase database
// async ensures that the function returns a promise, and wraps non-promises in it.
// The keyword await makes JavaScript wait until that promise settles and returns its result.
export const createUserProfileDocument = async (userAuth, additonalData) => {
    //if userAuth does not exit then exit
    if (!userAuth) return;

    //const userRef = firestore.doc('users/02yTVrmoK3SbUpibeOnJ1bE1rsI3');
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    //console.log('firestore.doc',firestore.doc('users/02yTVrmoK3SbUpibeOnJ1bE1rsI3'));
    console.log('snapShot', snapShot);
    console.log('additonalData', additonalData);

    if (!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additonalData
            })
        }
        catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;