import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBWZE6Ea17vwRbnOn21eTa3BFFvymgCn08",
    authDomain: "ecommerce-react-36813.firebaseapp.com",
    projectId: "ecommerce-react-36813",
    storageBucket: "ecommerce-react-36813.appspot.com",
    messagingSenderId: "156527688904",
    appId: "1:156527688904:web:912ac00aac18344be679fd"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }