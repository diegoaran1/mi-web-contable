// Función para scroll suave
function scrollToContact() {
    document.getElementById('contacto').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Manejo del formulario
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Aquí integrarás con Formspree o servicio similar
    alert('¡Gracias! Te contactaremos pronto para agendar tu consulta.');
    this.reset();
});

// Efecto de scroll en header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.background = '#fff';
    }
});