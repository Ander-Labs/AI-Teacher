
// onclick
function showMessage() {
    alert("Esta sección esta en desarrollo, ¡Estará disponible pronto!");
}

// contador


// Establecer la fecha de finalización del contador de tiempo
var countDownDate = new Date("August 1, 2023 00:00:00").getTime();

// Actualizar el contador de tiempo cada segundo
var x = setInterval(function() {

  // Obtener la fecha y hora actual
    var now = new Date().getTime();

  // Calcular la distancia entre la fecha de finalización y la fecha actual
    var distance = countDownDate - now;

  // Cálculos para días, horas, minutos y segundos restantes
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Mostrar los resultados en la página web
    document.getElementById("contador").innerHTML =
    "<div><span>" + days + "</span>Días</div>" +
    "<div><span>" + hours + "</span>Horas</div>" +
    "<div><span>" + minutes + "</span>Minutos</div>" +
    "<div><span>" + seconds + "</span>Segundos</div>";

  // Si la cuenta regresiva ha terminado, mostrar un mensaje
    if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "¡Ya estamos aquí!";
    }
}, 1000);

// showAlert
function showAlert() {
    alert("Estará disponible próximamente. ¡Gracias por su paciencia!");
}
