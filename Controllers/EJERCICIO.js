import {guardarRegistro} from './BASEDEDATOS.js';

document.getElementById("REGISTRARME").addEventListener("click", async function () {
    // Obtener valores del formulario
    const nombre = document.getElementById("nombre").value.trim();
    const documento = document.getElementById("documento").value.trim();
    const contrasena = document.getElementById("contrasena").value;
    const validarContrasena = document.getElementById("validarContrasena").value;
    const rol = document.getElementById("rol").value;

    // Validaciones básicas
    if (!nombre || !documento || !contrasena || !validarContrasena) {
        alert("Por favor completa todos los campos.");
        return;
    }

    //validar las contrasenas
    if (contrasena !== validarContrasena) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    // Crear objeto de usuario
    const usuario = {
        nombre: nombre,
        documento: documento,
        contrasena: contrasena,
        rol: rol
    };

    // Mostrar el objeto en la consola antes de guardarlo
    console.log("Usuario a guardar:", usuario);
    
    try {
        await 
        guardarRegistro(usuario);
        // Si todo va bien, redirigimos a INTEGRANTES.html
        window.location.href = "../Views/R_INTEGRANTES.HTML";
    } catch (error) {
        // Mostrar error en caso de que falle guardarRegistro
        alert("Hubo un error durante el registro: " + error.message);
        console.error("Error al guardar el registro:", error);
    }
});
