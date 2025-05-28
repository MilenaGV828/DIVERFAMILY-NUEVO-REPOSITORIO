
let puntosTotales = 0;

const actualizarPuntos = () => {
    document.getElementById('puntos').innerText = `Puntos: ${puntosTotales}`;
    console.log(puntosTotales);
};

document.querySelectorAll('.tarea input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
        // Buscar el elemento con la clase .tarea más cercano hacia arriba
        const tarea = this.closest('.tarea');

        // Validar y extraer los puntos
        const puntos = parseInt(tarea?.getAttribute('data-puntos')) || 0;

        if (this.checked) {
            puntosTotales += puntos;
        } else {
            puntosTotales -= puntos;
        }

        actualizarPuntos();
    });
});

