// Función para manejar la animación al hacer scroll
function handleScroll() {
    const scrollPosition = window.scrollY;
    const nav = document.querySelector('nav');

    // Cambiar el estilo de la navegación cuando el usuario hace scroll
    if (scrollPosition > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

// Función de inicialización
function init() {
    window.addEventListener('scroll', handleScroll);
}

// Ejecutar cuando el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', init);
