// Función para cerrar el primer modal (éxito)
    function cerrarModal() {
    document.getElementById('myModal').style.display = 'none';
}

// Función para cerrar el segundo modal (correo ya registrado)
function cerrarModal2() {
    document.getElementById('myModal2').style.display = 'none';
}

// Mostrar los modales según los parámetros en la URL
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.get('exito') === '1') {
        document.getElementById('myModal').style.display = 'block';
    } else if (urlParams.get('exito2') === '1') {
        document.getElementById('myModal2').style.display = 'block';
    }
};