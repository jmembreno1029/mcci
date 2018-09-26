// Google maps church location
function initMap() {
    
    var mcciCoord = {lat: 29.879392, lng: -95.327062};
    
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: mcciCoord});
    
    var marker = new google.maps.Marker({position: mcciCoord, map: map});
  }