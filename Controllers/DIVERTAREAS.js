import { db } from "./BASEDEDATOS.js";
import {
  collection,
  doc,
  getDoc,
  setDoc
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

// Botón asignar tareas
document.getElementById("btnAsignar").addEventListener("click", async () => {
  const nombre = document.getElementById("usuario").value.trim();
  const documento = document.getElementById("password").value.trim();

  if (!nombre || !documento) {
    alert("❌ Ingresa nombre de usuario y documento.");
    return;
  }

  try {
    // Validar usuario en la colección INTEGRANTES
    const docRef = doc(db, "INTEGRANTES", documento);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      alert("❌ Usuario no registrado en INTEGRANTES.");
      return;
    }

    const data = docSnap.data();
    if (data.nombre !== nombre) {
      alert("❌ El nombre no coincide con el documento.");
      return;
    }

    // Guardar el usuario activo para MAPA DEL TESORO
    const idUsuario = `${nombre}_${documento}`;
    localStorage.setItem("usuarioActivo", idUsuario);

    // Recolectar tareas seleccionadas
    const tareasSeleccionadas = [];
    document.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
      if (checkbox.checked) {
        const label = document.querySelector(`label[for="${checkbox.id}"]`);
        if (label) {
          tareasSeleccionadas.push({
            nombre: label.innerText,
            completada: false,
            puntos: 5
          });
        }
      }
    });

    if (tareasSeleccionadas.length === 0) {
      alert("❌ Selecciona al menos una tarea.");
      return;
    }

    // Guardar tareas en la colección MAPA DEL TESORO
    await setDoc(doc(db, "MAPA DEL TESORO", idUsuario), {
      nombre: nombre,
      documento: documento,
      tareas: tareasSeleccionadas,
      puntosTotales: 0
    });

    alert("🎉 Tareas asignadas correctamente al mapa del tesoro.");

  } catch (error) {
    console.error("Error:", error);
    alert("❌ Ocurrió un error al asignar tareas.");
  }
});

// Botón Mapa del Tesoro
document.getElementById("btnMapaTesoro").addEventListener("click", () => {
  window.location.href = "../views/MAPA DEL TESORO.html";
});

// Botón Regresar al Menú
document.getElementById("btnRegresar").addEventListener("click", () => {
  window.location.href = "../Views/Diverfamily.html";
});
