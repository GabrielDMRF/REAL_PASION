function toggleEdit() {
    const editor = document.getElementById('editableDiv');
    const editButton = document.getElementById('editTextButton');
    const confirmButton = document.getElementById('confirmTextButton');

    // Habilitar la edición del texto
    editor.setAttribute('contenteditable', 'true');
    editor.focus();
    editButton.style.display = 'none'; // Ocultar el botón de editar
    confirmButton.style.display = 'inline'; // Mostrar botón de confirmar
}

function confirmEdit() {
    const editor = document.getElementById('editableDiv');
    const editButton = document.getElementById('editTextButton');
    const confirmButton = document.getElementById('confirmTextButton');

    // Deshabilitar la edición del texto
    editor.setAttribute('contenteditable', 'false');
    confirmButton.style.display = 'none'; // Ocultar el botón de confirmar
    editButton.style.display = 'inline'; // Mostrar el botón de editar
}

// Cambiar la imagen al cargar una nueva
document.getElementById('imageInput').addEventListener('change', function() {
    const image = document.getElementById('editableImage');
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            image.src = e.target.result; // Actualizar la imagen
        };
        reader.readAsDataURL(file);
    }
});