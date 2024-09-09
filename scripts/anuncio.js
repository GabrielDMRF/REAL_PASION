document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const cerrarModal = document.querySelector('.cerrar-modal');
    const elementosParaDesenfocar = document.querySelectorAll('.anuncios-container, .navbar, .slider'); // Elementos que se desenfocarán

    // Manejador para "Ver más"
    document.querySelectorAll('.ver-mas').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const anuncioId = this.getAttribute('data-anuncio'); // Asegúrate de usar "data-anuncio"

            // Ajusta el contenido del modal según el anuncio
            if (anuncioId == 1) {
                modalTitle.textContent = "Descuento en productos";
                modalText.textContent = "¡Aprovecha nuestro 50% de descuento en todos los productos durante esta temporada!";
            } else if (anuncioId == 2) {
                modalTitle.textContent = "Nueva temporada";
                modalText.textContent = "Descubre las novedades de la nueva temporada, desde equipaciones hasta eventos especiales.";
            } else {
                modalTitle.textContent = "Anuncio no encontrado";
                modalText.textContent = "No hay información disponible para este anuncio.";
            }

            // Aplica desenfoque a los elementos de fondo
            elementosParaDesenfocar.forEach(el => el.classList.add('blur-background'));

            // Desactiva el scroll en el body
            document.body.classList.add('no-scroll');

            // Muestra el overlay y el modal
            modalOverlay.style.display = 'block';
            modal.classList.add('active');
        });
    });

    // Manejador para cerrar el modal
    function closeModal() {
        // Quita el desenfoque de los elementos de fondo
        elementosParaDesenfocar.forEach(el => el.classList.remove('blur-background'));

        // Reactiva el scroll en el body
        document.body.classList.remove('no-scroll');

        // Oculta el overlay y el modal
        modalOverlay.style.display = 'none';
        modal.classList.remove('active');
    }

    cerrarModal.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    // Manejador para cerrar anuncios pequeños
    document.querySelectorAll('.cerrar-anuncio').forEach(button => {
        button.addEventListener('click', function () {
            this.closest('.anuncio').remove();
        });
    });
});
