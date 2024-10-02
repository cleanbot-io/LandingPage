import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAckXNF3yhKHVtyZrMoK-HMqQfbfjEJCxU",
    authDomain: "cb-landingpage.firebaseapp.com",
    projectId: "cb-landingpage",
    storageBucket: "cb-landingpage.appspot.com",
    messagingSenderId: "526284433056",
    appId: "1:526284433056:web:16cf76b19e7d19cfbecbc5",
    measurementId: "G-HHS1YYY0K1"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
