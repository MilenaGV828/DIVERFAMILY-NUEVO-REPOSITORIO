
document.addEventListener('DOMContentLoaded', function() {
  const iniciarSesionBtn = document.querySelector('.button button a');

  iniciarSesionBtn.addEventListener('click', function(event) {console.log()
    event.preventDefault(); // Evita la navegación predeterminada del enlace

    const nombreInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');

    const nombre = nombreInput.value;
    const password = passwordInput.value;

    // Aquí puedes agregar la lógica para verificar el nombre y la contraseña
    console.log('Nombre:', nombre);
    console.log('Contraseña:', password);console.log()

    // Por ejemplo, podrías redirigir al usuario solo si los datos son válidos
    if (nombre === 'usuarioEjemplo' && password === 'contraseñaEjemplo') {
      window.location.href = '../Views/Diverfamily.html';
    } else {
      alert('Nombre de usuario o contraseña incorrectos.');
    }
  });
});F12