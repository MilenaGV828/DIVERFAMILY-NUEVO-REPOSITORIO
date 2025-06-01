import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCAeMlJaVuvbFw416G3AzWwSnJqMJeH01I",
  authDomain: "diverfamilybase-de-datos.firebaseapp.com",
  projectId: "diverfamilybase-de-datos",
  storageBucket: "diverfamilybase-de-datos.firebasestorage.app",
  messagingSenderId: "884142337611",
  appId: "1:884142337611:web:52a5d44d9cb34efac4e7ce",
};

// Inicializar Firebase y Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 2. Función para guardar usuario
export async function guardarRegistro(datos) {
  const docRef = await addDoc(collection(db, "USUARIOS"), datos);
  console.log("Documento guardado con ID:", docRef.id);
  return docRef.id;
}

// 3. Aquí es donde debes poner la línea para exportar `db`
export { db };
