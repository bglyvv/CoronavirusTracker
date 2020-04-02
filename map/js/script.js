let latitude = 0;
let longitude = 0;

let button = document.querySelector("#button");

 function locationmarker(){
  var baseMapLayer = new ol.layer.Tile({
    source: new ol.source.OSM()
  });
  var map = new ol.Map({
    target: 'map',
    nowrap: true,
    layers: [ baseMapLayer],
    view: new ol.View({
            center: ol.proj.fromLonLat([longitude,latitude]), 
            zoom: 16 //Initial Zoom Level
          })
  });
  //Adding a marker on the map
  button.onclick = function(){
    var marker = new ol.Feature({
      geometry: new ol.geom.Point(
        ol.proj.fromLonLat([longitude,latitude])
      ),  // Cordinates of New York's Town Hall
    });
    var vectorSource = new ol.source.Vector({
      features: [marker]
    });
    var markerVectorLayer = new ol.layer.Vector({
      source: vectorSource,
    });
    map.addLayer(markerVectorLayer);
  }
}

function map(){
  var baseMapLayer = new ol.layer.Tile({
    source: new ol.source.OSM()
  });
  var map = new ol.Map({
    target: 'map',
    nowrap: true,
    layers: [ baseMapLayer],
    view: new ol.View({
            center: ol.proj.fromLonLat([49.849716,40.379368]), 
            zoom: 10 //Initial Zoom Level
          })
  });
}
if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position){
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    altitude = position.coords.altitude;
    locationmarker();
    button.style.display = "block"
    
  },function(){
    map();
  })
}




