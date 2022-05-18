import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCZzecYHGHcOEg7adijJtrVRU9SGupOKxM",
    authDomain: "fir-login-97725.firebaseapp.com",
    projectId: "fir-login-97725",
    storageBucket: "fir-login-97725.appspot.com",
    messagingSenderId: "68122388047",
    appId: "1:68122388047:web:4fbb7aa40add05681bec3a"
}

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDB = myFirebase.firestore();
export const db = baseDB;