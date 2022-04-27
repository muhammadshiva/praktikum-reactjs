import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from '@firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC0fJp3dchMDFn7qbKiB3IBE6NyCRxRQ_s",
    authDomain: "react-auth-536f1.firebaseapp.com",
    projectId: "react-auth-536f1",
    storageBucket: "react-auth-536f1.appspot.com",
    messagingSenderId: "662844064328",
    appId: "1:662844064328:web:43c020a979b6d6638bce7d"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const authentication = getAuth();
// const db = firebase.firestore();
// const storage = firebase.storage();

export { auth, authentication }