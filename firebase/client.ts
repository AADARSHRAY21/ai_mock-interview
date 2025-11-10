
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAY1HOQjQqAPZl2joVSaUxuCF43aw_et1I",
    authDomain: "prepwise-ef750.firebaseapp.com",
    projectId: "prepwise-ef750",
    storageBucket: "prepwise-ef750.firebasestorage.app",
    messagingSenderId: "669334237171",
    appId: "1:669334237171:web:61cbd91b2dc73a7b172c86",
    measurementId: "G-3E3MB3G1ZR"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
