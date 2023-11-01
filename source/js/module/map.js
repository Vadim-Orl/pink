


function init() {
  let map = new ymaps.Map("map", {
    center: [59.94255200890565, 30.360984362273697],
    zoom: 16,
    controls: ['zoomControl'],
    behaviors: ['drag']}, {
      suppressMapOpenBlock: true
  });

  let placemark = new ymaps.Placemark([59.943360, 30.363489], {
    hintContent: '<div class="map__hint"> ул. Радищева 39Д </div>',
    balloonContent: [
      '<div class="map__balloon">',
      'Наш офис по адресу Радищева 39Д',
      '</div>'
    ].join('')
  }, {
    iconLayout: 'default#image',
    iconImageHref: '../../img/icon-map-marker.svg',
    iconImageSize: [36, 36],
    iconImageOffset: [0, 0]

  });

  map.geoObjects.add(placemark);
}

ymaps.ready(init);
