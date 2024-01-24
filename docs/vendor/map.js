function initMap() {
    console.log('map');

    const mapContainer = document.getElementById('map');

    if (mapContainer) {

      const myPosition = { lat: 48.8338589, lng: 2.3221827 };

      var mapOptions = {
        center: myPosition, // координаты центра карты
        zoom: 12 // масштаб карты
      };


      var map = new google.maps.Map(document.getElementById('map'), mapOptions);


      new google.maps.Marker({
        position: myPosition,
        map,
      });
    }
};
