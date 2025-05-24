document.addEventListener('DOMContentLoaded', function() {
    const botonesContainer = document.querySelectorAll('.container');

    botonesContainer.forEach(boton => {
        boton.addEventListener('click', function() {
            const textoBoton = this.textContent.trim();
            alert(`¡Hiciste clic en: ${textoBoton}!`);
        });
    });
});   