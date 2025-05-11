let puntosTotales = 0;

const actualizarPuntos = () => {
    document.getElementById('puntos').innerText = `Puntos: ${puntosTotales}`;
    console.log(puntosTotales);
};

document.querySelectorAll('.tarea input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
        const puntos = parseInt(this.parentElement.getAttribute('data-puntos'));

        if (this.checked) {
            puntosTotales += puntos;
        } else {
            puntosTotales -= puntos;
        }

        actualizarPuntos();

    });
});

