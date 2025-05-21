
document.addEventListener('DOMContentLoaded', function() {
    const nuevoIntegranteBtn = document.querySelector('.container.button button');
    const nombreInput = document.querySelector('.container input[type="text"]');
    const passwordInput = document.querySelector('.container input[type="password"]');
    const rolSelect = document.querySelector('.container select');

    nuevoIntegranteBtn.addEventListener('click', function() {
        const nombre = nombreInput.value;
        const password = passwordInput.value;
        const rol = rolSelect.value;

        console.log('Nombre:', nombre);
        console.log('Contraseña:', password);
        console.log('Rol:', rol);

        // Aquí podrías agregar la lógica para enviar estos datos a un servidor
        // o realizar alguna otra acción con la información.
    });
});