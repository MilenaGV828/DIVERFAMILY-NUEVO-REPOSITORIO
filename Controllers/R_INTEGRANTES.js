
import { guardarRegistro } from './BASEDEDATOS.js';

document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("registrarIntegranteBtn");

    boton.addEventListener("click", async () => {
        // Obtener los valores del formulario
        const nombre = document.getElementById("nombre").value.trim();
        const contrasena = document.getElementById("contrasena").value;
        const rol = document.getElementById("rol").value;

        // Validar campos
        if (!nombre || !contrasena || !rol) {
            alert("Por favor completa todos los campos.");
            return;
        }

        // Crear objeto del usuario
        const usuario = {
            nombre,
            contrasena,
            rol
        };

        try {
            // Guardar el registro
            await guardarRegistro(usuario);

            // Guardar mensaje en localStorage y redirigir
            localStorage.setItem("mensajeIngreso", "¡Integrante registrado con éxito! Inicia sesión.");
            window.location.href = "../Views/INGRESO.HTML";
        } catch (error) {
            console.error("Error al registrar integrante:", error);
            alert("Error al registrar integrante: " + error.message);
        }
    });
});
