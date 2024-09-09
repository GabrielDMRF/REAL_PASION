// Obtén el elemento del slider y la navbar
const sponsorSlider = document.querySelector('#sponsor-slider');
const navbar = document.querySelector('.navbar');

// Verifica que los elementos hayan sido encontrados
if (!sponsorSlider || !navbar) {
    console.error("No se encontraron los elementos necesarios");
} else {
    // Define la última posición de scroll
    let lastScrollTop = 0;

    // Función para manejar el evento de scroll
    function handleScroll() {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Debugging: Muestra la posición del scroll
        console.log("Current scroll top:", currentScrollTop);
        console.log("Last scroll top:", lastScrollTop);

        if (currentScrollTop > lastScrollTop) {
            // Scroll hacia abajo
            console.log("Scrolling down");
            sponsorSlider.style.opacity = '0'; // Desvanece el slider
            navbar.classList.add('navbar-shift'); // Mueve la navbar hacia arriba
        } else {
            // Scroll hacia arriba
            console.log("Scrolling up");
            sponsorSlider.style.opacity = '1'; // Muestra el slider
            navbar.classList.remove('navbar-shift'); // Devuelve la navbar a su posición original
        }

        // Actualiza la última posición de scroll
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    }

    // Agrega el listener para el evento de scroll
    window.addEventListener('scroll', handleScroll);
}
