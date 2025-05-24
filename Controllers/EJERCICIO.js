import { db } from './BASEDEDATOS.js';


document.getElementById("REGISTRARME").addEventListener("click", function () {
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

    // Guardar en Firestore
    db.collection("USUARIOS").doc(documento).set(usuario)
    .then(() => {
        alert("Usuario registrado exitosamente en Firebase.");
        
        // Limpiar campos
        document.getElementById("nombre").value = "";
        document.getElementById("documento").value = "";
        document.getElementById("contrasena").value = "";
        document.getElementById("validarContrasena").value = "";
        document.getElementById("rol").selectedIndex = 0;
    })
    .catch((error) => {
        console.error("Error al registrar usuario: ", error);
        alert("Ocurrió un error al registrar el usuario.");
    });

    // // Guardar en localStorage
    // localStorage.setItem(`usuario_${documento}`, JSON.stringify(usuario));
    // alert("Usuario registrado exitosamente.");
    
    // // Limpiar campos (opcional)
    // document.getElementById("nombre").value = "";
    // document.getElementById("documento").value = "";
    // document.getElementById("contrasena").value = "";
    // document.getElementById("validarContrasena").value = "";
    // document.getElementById("rol").selectedIndex = 0;
});
