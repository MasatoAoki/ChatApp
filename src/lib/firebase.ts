//lib/firebase

import  firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    // databaseURL: 'YOUR_DATABASE_URL',
    apiKey: "AIzaSyDfZQ0LMFzORvJ_Kye1c1Sn1kPgmZMeO_w",
    authDomain: "chatapp-45ba4.firebaseapp.com",
    projectId: "chatapp-45ba4",
    storageBucket: "chatapp-45ba4.appspot.com",
    messagingSenderId: "353078107543",
    appId: "1:353078107543:web:09df5368e5793c1c86b8d2"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const getMessageDocRef = async () => {
    return await firebase.firestore().collection('messages').doc();
};

export const getUserId = async () => {
    const userCredential = await firebase.auth().signInAnonymously();
    return userCredential.user?.uid;
};