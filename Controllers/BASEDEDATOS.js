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
//export const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();


// Elementos del DOM
const formulario = document.getElementById("formulario");
//const listaUsuarios = document.getElementById("lista-usuarios");
const inputUsuario = document.getElementById("nombre");
const inputPassword = document.getElementById("contrasena");

let idEdicion = null; // Guardará el ID del usuario en edición

// Función para agregar o actualizar usuario
const guardarUsuario = async (usuario, contraseña) => {
  try {
    
      await addDoc(collection(db, "USUARIOS"), { usuario, contraseña });
    
  } catch (error) {
    console.error("Error al guardar usuario:", error);
  }
};

// Evento para guardar usuario (nuevo o editado)
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const usuario = inputUsuario.value;
  const contraseña = inputPassword.value;
  guardarUsuario(usuario, contraseña);
});




///////configuracion original firebase
// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-analytics.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional


// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// export const db = firebase.firestore(); // Exportable si usas módulos
// // export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


