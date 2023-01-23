// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGnV9OqiKFu-_I-5GRePA_AZqYAb9LM0c",
    authDomain: "react-cursos-3b19a.firebaseapp.com",
    projectId: "react-cursos-3b19a",
    storageBucket: "react-cursos-3b19a.appspot.com",
    messagingSenderId: "154297237758",
    appId: "1:154297237758:web:c39b48204d9ce5988825af"
};

// Initialize Firebase
export const Firebaseapp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(Firebaseapp);
export const FirebaseDB = getFirestore(Firebaseapp);