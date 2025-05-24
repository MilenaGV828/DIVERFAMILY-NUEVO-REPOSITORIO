
document.addEventListener('DOMContentLoaded', function() {
  const asignarBtn = document.querySelector('button[type="submit"]');
  const nombreUsuarioInput = document.querySelector('input[name="usuario"]');
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  asignarBtn.addEventListener('click', function() {
    const nombreUsuario = nombreUsuarioInput.value;
    const tareasSeleccionadas = [];

    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        // Intentamos acceder al texto del label desde el elemento padre (<li>)
        const listItem = checkbox.parentNode;
        const label = listItem.querySelector('label');
        if (label) {
          tareasSeleccionadas.push(label.textContent);
        }
      }
    });

    console.log('Usuario:', nombreUsuario);
    console.log('Tareas Asignadas:', tareasSeleccionadas);
  });
});