document.addEventListener('DOMContentLoaded', function () {
  const images = [
    'trabajo/1.jpg',
    'trabajo/2.jpg',
    'trabajo/3.jpg',
    'trabajo/4.jpg',
    'trabajo/5.jpg',
    'trabajo/6.jpg',
    // Agrega más imágenes si quieres
  ];

  const carouselInner = document.getElementById('carousel-inner');
  const indicators = document.getElementById('carousel-indicators');

  // Crear slides e indicadores del carrusel
  images.forEach((img, index) => {
    const item = document.createElement('div');
    item.className = 'carousel-item' + (index === 0 ? ' active' : '');
    item.innerHTML = `<img src="${img}" class="d-block w-100 rounded shadow" style="height: 500px; object-fit: cover;" alt="Trabajo ${index + 1}">`;
    carouselInner.appendChild(item);

    const indicator = document.createElement('button');
    indicator.type = 'button';
    indicator.setAttribute('data-bs-target', '#trabajosCarousel');
    indicator.setAttribute('data-bs-slide-to', index);
    indicator.setAttribute('aria-label', `Slide ${index + 1}`);
    if (index === 0) {
      indicator.className = 'active';
      indicator.setAttribute('aria-current', 'true');
    }
    indicators.appendChild(indicator);
  });
});
