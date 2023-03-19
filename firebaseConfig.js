
import 'firebase/firestore';
import 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { Firestore } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyBdNA-848Bz1jQ4aTTNoOZsmbDRIKNIKUw",
    authDomain: "wichat-d22aa.firebaseapp.com",
    projectId: "wichat-d22aa",
    storageBucket: "wichat-d22aa.appspot.com",
    messagingSenderId: "207838320836",
    appId: "1:207838320836:web:24728fa607d8ded9b8d191"
  };





const app = initializeApp(firebaseConfig);


const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};

