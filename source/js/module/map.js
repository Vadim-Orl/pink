
function init() {
  let map = new ymaps.Map("map", {
    center: [59.94255200890565, 30.360984362273697],
    zoom: 16,
    controls: ['default', 'routeButtonControl']
  });

  let placemark = new ymaps.Placemark([59.943360, 30.363489], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../../img/icon-map-marker.svg',
    iconImageSize: [36, 36],
    iconImageOffset: [0, 0]
  });

  map.controls.remove('searchControl');
  map.controls.remove('zoomControl');
  map.controls.remove('geolocationControl');
  map.controls.remove('trafficControl');
  map.controls.remove('rulerControl');
  map.controls.remove('routeButtonControl');
  map.controls.remove('typeSelector');
  map.controls.remove('fullscreenControl');

  map.geoObjects.add(placemark);
}

ymaps.ready(init);
