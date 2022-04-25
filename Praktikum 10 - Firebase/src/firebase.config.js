import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from '@firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAPxUl2pVlpa7jIV-4Qne_iZIGnbyJqgpA",
    authDomain: "react-auth-4986c.firebaseapp.com",
    projectId: "react-auth-4986c",
    storageBucket: "react-auth-4986c.appspot.com",
    messagingSenderId: "513410868105",
    appId: "1:513410868105:web:02b94b1a10ddbd30b57758"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const authentication = getAuth();
// const db = firebase.firestore();
// const storage = firebase.storage();

export { auth, authentication }