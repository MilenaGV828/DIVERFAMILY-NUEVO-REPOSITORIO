import { db } from "./BASEDEDATOS.js";
import {
  collection,
  doc,
  query,
  where,
  getDocs,
  setDoc
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

// Botón asignar tareas
document.getElementById("btnAsignar").addEventListener("click", async () => {
  const nombre = document.getElementById("usuario").value.trim();
  const documento = document.getElementById("password").value.trim();
  console.log('documento:', typeof documento); // Para depuración
  if (!nombre || !documento) {
    alert("❌ Ingresa nombre de usuario y documento.");
    return;
  }

  try {
    // Validar usuario en la colección INTEGRANTES

    // Select * from INTEGRANTES where constrasena = documento;
    const q = query(
      collection(db, "INTEGRANTES"),
      where("contrasena", "==", documento)
    );

    const docSnap = await getDocs(q);
    
    if (docSnap.empty) {
      alert("❌ Usuario no registrado en INTEGRANTES.");
      return;
    }

    let dataEncontrada = null;
    docSnap.forEach((doc) => {
      const data = doc.data();
      if (data.nombre === nombre) {
        dataEncontrada = data;
      }
    });

    if (!dataEncontrada) {
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
            puntos: 10
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
  window.location.href = "../Views/MAPA_DEL_TESORO.HTML";
});

// Botón Regresar al Menú
document.getElementById("btnRegresar").addEventListener("click", () => {
  window.location.href = "../Views/Diverfamily.html";
});
