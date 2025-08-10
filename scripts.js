document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();
  const formMensaje = document.getElementById('formMensaje');

  if (!nombre || !email || !mensaje) {
    formMensaje.style.color = 'red';
    formMensaje.textContent = 'Por favor, completa todos los campos.';
    return;
  }

  // Validar formato básico de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formMensaje.style.color = 'red';
    formMensaje.textContent = 'Por favor, ingresa un correo electrónico válido.';
    return;
  }

  formMensaje.style.color = 'green';
  formMensaje.textContent = 'Mensaje enviado correctamente. ¡Gracias!';

  // Aquí puedes agregar código para enviar el formulario a un servidor o email

  // Resetear formulario
  this.reset();
});
