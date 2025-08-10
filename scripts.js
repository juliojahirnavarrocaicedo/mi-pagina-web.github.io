window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const formMensaje = document.getElementById('formMensaje');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !email || !mensaje) {
      formMensaje.style.color = 'red';
      formMensaje.textContent = 'Por favor, completa todos los campos.';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formMensaje.style.color = 'red';
      formMensaje.textContent = 'Por favor, ingresa un correo electrónico válido.';
      return;
    }

    formMensaje.style.color = 'green';
    formMensaje.textContent = 'Mensaje enviado correctamente. ¡Gracias!';

    this.reset();
  });
});
