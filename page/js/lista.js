
const form = document.getElementById('form');
const mensaje = document.getElementById('mensaje');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const telefono = document.getElementById('telefono').value;
  
  // Validar que los campos no estén vacíos
  if (nombre === '' || correo === '' || telefono === '') {
    mensaje.textContent = 'Todos los campos son requeridos';
    return;
  }
  
  // Validar que el correo tenga formato correcto
  if (!validarCorreo(correo)) {
    mensaje.textContent = 'Correo electrónico inválido';
    return;
  }
  
  // Enviar datos del formulario por correo electrónico
  enviarCorreo(nombre, correo, telefono);

  // Mostrar mensaje de éxito y limpiar formulario
  mensaje.textContent = '¡Gracias por registrarte! Te avisaremos cuando salga la version 1.0 de AI TEACHER.';
  form.reset();
});

function validarCorreo(correo) {
  const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return expresionRegular.test(correo);
}

function enviarCorreo(nombre, correo, telefono) {
  // Configurar datos del correo electrónico
  const destinatario = 'anderlabss@gmail.com';
  const asunto = 'Registro lista de espera';
  const mensaje = `Hola, soy ${nombre},  me gustaría ser de los primeros en probar AI TEACHER, me inscribo en la lista de espera con correo electrónico ${correo} y teléfono ${telefono}.`;
  
  // Generar URL para enviar correo a través de Gmail
  const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${destinatario}&su=${asunto}&body=${mensaje}`;
  
  // Abrir ventana con URL para enviar correo
  window.open(url);
}