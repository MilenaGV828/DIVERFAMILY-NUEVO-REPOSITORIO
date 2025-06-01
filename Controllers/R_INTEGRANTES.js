
import { guardarRegistro, db } from './BASEDEDATOS.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {
    const botonRegistrar = document.getElementById("registrarIntegranteBtn");
    const botonMostrar = document.getElementById("mostrarIntegrantesBtn");
    const botonNuevo = document.getElementById("actualizarListadoBtn");
    const botonContinuar = document.getElementById("continuarBtn");

    // Registrar integrante
    if (botonRegistrar) {
        botonRegistrar.addEventListener("click", async () => {
            const nombre = document.getElementById("nombre").value.trim();
            const contrasena = document.getElementById("contrasena").value;
            const rol = document.getElementById("rol").value;
            const nombreLider = localStorage.getItem("nombreLider");

            if (!nombre || !contrasena || !rol) {
                alert("Por favor completa todos los campos.");
                return;
            }

            const usuario = {
                nombre,
                contrasena,
                rol,
                registradoPor: nombreLider || "Desconocido"
            };

            try {
                await guardarRegistro(usuario);

                if (rol === "Lider") {
                    localStorage.setItem("nombreLider", nombre);
                }

                localStorage.setItem("mensajeIngreso", "¡Integrante registrado con éxito!");
                
            } catch (error) {
                console.error("Error al registrar integrante:", error);
                alert("Error al registrar integrante: " + error.message);
            }
        });
    }

    // Mostrar integrantes registrados por este líder
    if (botonMostrar) {
        botonMostrar.addEventListener("click", async () => {
            const nombreLider = localStorage.getItem("nombreLider");
            const textarea = document.getElementById("listadoIntegrantes");
            
            if (textarea.style.display === "none") {
            textarea.style.display = "block";
            textarea.value = "Cargando integrantes...";

            try {
                const querySnapshot = await getDocs(collection(db, "USUARIOS"));
                const integrantes = [];

                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    console.log("Usuario encontrado:", data); // ✅ Para depuración

                    if (data.registradoPor === nombreLider && data.rol !== "Lider") {
                        integrantes.push(`• ${data.nombre} - ${data.rol}`);
                    }
                });

                if (integrantes.length === 0) {
                    textarea.value = "No hay integrantes registrados por este líder.";
                } else {
                    textarea.value = integrantes.join("\n");
                }

            } catch (error) {
                console.error("Error al obtener usuarios:", error);
                textarea.value = "Error al cargar integrantes.";
            }
        } else {
            // Ocultar si ya estaba visible
            textarea.style.display = "none";
         }
    });
} 

            // Nuevo integrante - limpiar formulario
    
    if (botonNuevo) {
        botonNuevo.addEventListener("click", () => {
            document.getElementById("nombre").value = "";
            document.getElementById("contrasena").value = "";
            document.getElementById("rol").value = "Lider"; // o cualquier otro valor predeterminado

            const listado = document.getElementById("listadoIntegrantes");
            if (listado) listado.value = "";

            document.getElementById("nombre").focus();
        });
    }

// Redirigir al formulario de ingreso
    if (botonContinuar) {
        botonContinuar.addEventListener("click", () => {
            window.location.href = "../Views/INGRESO.HTML";
        });
    }
});