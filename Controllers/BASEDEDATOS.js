import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { 
  getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc 
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const firebaseConfig = {
 apiKey: "AIzaSyCAeMlJaVuvbFw416G3AzWwSnJqMJeH01I",
 authDomain: "diverfamilybase-de-datos.firebaseapp.com",
projectId: "diverfamilybase-de-datos",
storageBucket: "diverfamilybase-de-datos.firebasestorage.app",
messagingSenderId: "884142337611",
appId: "1:884142337611:web:52a5d44d9cb34efac4e7ce",
measurementId: "G-XVKBT2N8XJ"
};

// Inicializar Firebase y Firestore
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();




