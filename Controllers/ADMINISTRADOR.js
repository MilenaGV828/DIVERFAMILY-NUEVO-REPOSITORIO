import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// ✅ Configuración real de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCAeMlJaVuvbFw416G3AzWwSnJqMJeH01I",
  authDomain: "diverfamilybase-de-datos.firebaseapp.com",
  projectId: "diverfamilybase-de-datos",
  storageBucket: "diverfamilybase-de-datos.appspot.com",
  messagingSenderId: "884142337611",
  appId: "1:884142337611:web:52a5d44d9cb34efac4e7ce",
  measurementId: "G-XVKBT2N8XJ"
};

// 🔥 Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

console.log()

// DOM
const loginSection = document.getElementById("login-section");
const adminPanel = document.getElementById("admin-panel");
const errorMsg = document.getElementById("error-message");

// Iniciar sesión
// window.login = () => {
//   const nombre = document.getElementById("name").value;
//   const contrasena = document.getElementById("password").value;

//   signInWithEmailAndPassword(auth, nombre, contrasena)
//     .then(() => {
//       // ✅ Redirige al panel tras login exitoso
//       window.location.href = "../Views/ADMINVIEW.HTML";
//     })
//     .catch(error => {
//       errorMsg.textContent = "Error: " + error.message;
//       console.log(nombre,contrasena)
//     });
// };

// Cerrar sesión
window.logout = () => {
  signOut(auth);
};

// Detectar usuario activo
onAuthStateChanged(auth, user => {
  if (user) {
    console.log("Usuario autenticado:", user.email);
  } else {
    console.log("Usuario no autenticado");
  }
});
