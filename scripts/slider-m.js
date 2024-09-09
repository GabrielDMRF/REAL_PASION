const slider = document.querySelector('.slider-p');

function activate(e) {
  if (!e.target.matches('.next') && !e.target.matches('.prev')) {
    return; // Salir si el clic no es en los botones de navegación
  }

  const items = document.querySelectorAll('.item');
  if (items.length === 0) return; // Salir si no hay elementos en el slider

  if (e.target.matches('.next')) {
    // Mover el primer elemento al final
    slider.append(items[0]);
  } else if (e.target.matches('.prev')) {
    // Mover el último elemento al principio
    slider.prepend(items[items.length - 1]);
  }
}

document.addEventListener('click', activate, false);
