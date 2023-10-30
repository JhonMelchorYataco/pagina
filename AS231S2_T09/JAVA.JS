// JavaScript para mostrar/ocultar información institucional
const institucionalSection = document.getElementById('Mostrar informacion');
const toggleButton = document.getElementById('toggleButton');
let isHidden = true;

toggleButton.addEventListener('click', () => {
    if (isHidden) {
        institucionalSection.style.display = 'block';
        toggleButton.textContent = 'Ocultar Información';
    } else {
        institucionalSection.style.display = 'none';
        toggleButton.textContent = 'Mostrar Información';
    }
    isHidden = !isHidden;
});
const images = ['imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg'];
let currentIndex = 0;
const imageElement = document.getElementById('galeria');

function cambiarImagen() {
    imageElement.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

// Cambiar la imagen cada 3 segundos (3000 ms)
setInterval(cambiarImagen, 3000);
// JavaScript para mostrar/ocultar la lista de docentes
const docentesSection = document.getElementById('docentes');
const toggleDocentesButton = document.getElementById('toggleDocentesButton');
let docentesHidden = true;

toggleDocentesButton.addEventListener('click', () => {
    if (docentesHidden) {
        docentesSection.style.display = 'block';
        toggleDocentesButton.textContent = 'Ocultar Docentes';
    } else {
        docentesSection.style.display = 'none';
        toggleDocentesButton.textContent = 'Mostrar Docentes';
    }
    docentesHidden = !docentesHidden;
});
