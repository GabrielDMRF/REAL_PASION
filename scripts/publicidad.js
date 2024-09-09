var snippet = [].slice.call(document.querySelectorAll('.snip1584'));
if (snippet.length) {
  snippet.forEach(function (element) {
    element.addEventListener('mouseover', function () {
      element.classList.add('hover');
    });
    element.addEventListener('mouseout', function () {
      element.classList.remove('hover');
    });
  });
}
