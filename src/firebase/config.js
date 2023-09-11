// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXluGiQwDXywJB1aLF_Y9FaWNay-iP1QQ",
  authDomain: "music-shop-ecommerce.firebaseapp.com",
  projectId: "music-shop-ecommerce",
  storageBucket: "music-shop-ecommerce.appspot.com",
  messagingSenderId: "779416880589",
  appId: "1:779416880589:web:992183784423ebc83bf084"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app;
export const dataBase = getFirestore(app);
export const myCollection = collection(dataBase, 'products-firestore')