
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCAeMlJaVuvbFw416G3AzWwSnJqMJeH01I",
  authDomain: "diverfamilybase-de-datos.firebaseapp.com",
  projectId: "diverfamilybase-de-datos",
  storageBucket: "diverfamilybase-de-datos.firebasestorage.app",
  messagingSenderId: "884142337611",
  appId: "1:884142337611:web:52a5d44d9cb34efac4e7ce",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.addEventListener('DOMContentLoaded', async function () {
  const iniciarSesionBtn = document.querySelector('#iniciarSesionBtn'); // usa ID directamente

  // Mostrar mensaje si viene del registro
  const mensaje = localStorage.getItem("mensajeIngreso");
  if (mensaje) {
    document.getElementById("mensajeExito").innerText = mensaje;
    localStorage.removeItem("mensajeIngreso");
  }

  iniciarSesionBtn.addEventListener('click', async function (event) {
    event.preventDefault();

    const nombre = document.querySelector('#nombre').value.trim();
    const contrasena = document.querySelector('#contrasena').value;

    if (!nombre || !contrasena) {
      alert("Por favor completa todos los campos.");
      return;
    }

    try {
      const querySnapshot = await getDocs(collection(db, "USUARIOS"));
      let usuarioEncontrado = false;

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.nombre === nombre && data.contrasena === contrasena) {
          usuarioEncontrado = true;
        }
      });

      if (usuarioEncontrado) {
        localStorage.setItem("usuarioActivo", nombre); // ✅ Guarda sesión activa
        alert("Inicio de sesión exitoso");
        window.location.href = "../Views/Diverfamily.html"; // redirige correctamente
      } else {
        alert("Nombre o contraseña incorrectos.");
      }

    } catch (error) {
      console.error("Error al buscar usuario:", error);
      alert("Ocurrió un error al intentar iniciar sesión.");
    }
  });
});
