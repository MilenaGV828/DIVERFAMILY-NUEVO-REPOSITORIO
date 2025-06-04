
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// Configura tu Firebase aquí:
const firebaseConfig = {
  apiKey: "AIzaSyCAeMlJaVuvbFw416G3AzWwSnJqMJeH01I",
  authDomain: "diverfamilybase-de-datos.firebaseapp.com",
  projectId: "diverfamilybase-de-datos",
  storageBucket: "diverfamilybase-de-datos.firebasestorage.app",
  messagingSenderId: "884142337611",
  appId: "1:884142337611:web:52a5d44d9cb34efac4e7ce",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Obtener usuario activo
const usuarioActivo = localStorage.getItem("usuarioActivo");
const tareasContainer = document.getElementById("contenedorTareas");
const puntosElemento = document.getElementById("puntos");
const btnGuardar = document.getElementById("btnGuardar");
const animacionTesoro = document.getElementById("animacionTesoro");

let tareas = [];
let puntos = 0;

// Función para cargar tareas desde Firestore
async function cargarTareas() {
  const docRef = doc(db, "MAPA DEL TESORO", usuarioActivo);
  const docSnap = await getDoc(docRef);
  console.log("Cargando tareas desde Firestore para el usuario:", docSnap);
  console.log("Cargando tareas para el usuario:", usuarioActivo);
  
  if (docSnap.exists()) {
    tareas = docSnap.data().tareas || [];
    puntos = docSnap.data().puntosTotales || 0;
    tareas.forEach((tarea, index) => {
      const tareaHTML = `
      <div class="row tarea-row align-items-center">
      <div class="col-2">
      <img src="../assets/tareas/${tarea.nombre}.jpg" class="img-thumbnail" />
      </div>
      <div class="col-8 text-start">
      ${tarea.nombre}
      </div>
      <div class="col-2">
      <input type="checkbox" class="form-check-input" data-index="${index}" ${tarea.completada ? 'checked' : ''}>
      </div>
      </div>`;
      tareasContainer.innerHTML += tareaHTML;

    });

    actualizarPuntos();
    btnGuardar.disabled = false;
  }
}

// Actualizar puntos y mostrar animación si todas están completas
function actualizarPuntos() {
  puntosElemento.textContent = `PUNTOS: ${puntos}`;
  if (tareas.length > 0 && puntos === tareas.length) {
    animacionTesoro.style.display = "block";
  }
}

// Evento para marcar tareas completadas
tareasContainer.addEventListener("change", (e) => {
  if (e.target.classList.contains("form-check-input")) {
    const index = e.target.dataset.index;
    tareas[index].completada = e.target.checked;
    puntos = puntos + 10;
    actualizarPuntos();
  }
});

// Guardar estado en Firestore
btnGuardar.addEventListener("click", async () => {
  const docRef = doc(db, "MAPA DEL TESORO", usuarioActivo);
  await updateDoc(docRef, {
    puntosTotales: puntos,
    tareas: tareas
  });
  alert("✅ ¡Tareas guardadas correctamente!");
});

document.addEventListener("DOMContentLoaded", () => {
  if (usuarioActivo) {
    cargarTareas();
  } else {
    alert("❌ No hay usuario activo.");
     window.location.href = "index.html";
  }
});