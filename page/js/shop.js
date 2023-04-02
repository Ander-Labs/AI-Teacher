// Función para calcular la diferencia de tiempo entre la oferta y la hora actual
function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval >= 1) {
        return interval + " años";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
        return interval + " meses";
    }
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
        return interval + " días";
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
        return interval + " horas";
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        return interval + " minutos";
    }
    return Math.floor(seconds) + " segundos";
}

// Agregar el tiempo desde que se publicó la oferta
var offerTimes = document.querySelectorAll(".offer-time");

offerTimes.forEach(function(offerTime) {
    var date = new Date();
    var hours = Math.floor(Math.random() * 24) + 1;
    date.setHours(date.getHours() - hours); // Obtener una fecha aleatoria en las últimas 24 horas
    offerTime.innerText = "Hace " + timeSince(date);
});


const offerBtn = document.querySelector('.offer-btn');




// Seleccionar el botón de hacer oferta
const offerButton = document.querySelector('.offer-btn');

// Seleccionar el contenedor del formulario
const formContainer = document.querySelector('#form-container');

// Seleccionar el iframe del formulario
const offerForm = document.querySelector('#offer-form');

// Agregar un event listener al botón de hacer oferta
offerButton.addEventListener('click', function() {

  // Pedir confirmación al usuario
  const confirmed = confirm("¿Estás seguro que deseas hacer una oferta?");

  if (confirmed) {
    // Si el usuario confirma, cambiar el atributo "src" del iframe para mostrar el formulario de Google
    offerForm.setAttribute('src', 'https://docs.google.com/forms/d/e/1FAIpQLSfyuG9E2noC6mx04d7s6VBvE5K_pW0os4X-CDXAxAYfzqlaWw/viewform?embedded=true');

    // Mostrar el contenedor del formulario
    // formContainer.style.display = 'block';
    formContainer.style.display = 'flex';
    formContainer.style.justifyContent = 'center';
    formContainer.style.alignItems = 'center';

}
});

