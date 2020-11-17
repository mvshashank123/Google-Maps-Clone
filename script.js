//This is the access token which needs to changed and fetched from mapbox account
mapboxgl.accessToken = "";

//This is used to fetch your current location (api used to fetch your location)
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

//Mapbox receives longitude and latitude
function successLocation(position) {
  //These values are fetched from the geolocation API
  setupMap([position.coords.longitude, position.coords.latitude]);
}

//When there is an error in fetching the location
function errorLocation() {
  setupMap([12.9716, 77.5946]);
}

function setupMap(center) {
  //This is mapboxgl object from the mapboxgl scripts we added in index.html
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    //this is used to go to the coordinate on initialization
    center: center,
    zoom: 10,
  });

  //This adds zoom button and compass
  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  //This is used to add directions to the map interface
  const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    unit: "metric",
  });

  map.addControl(directions, "top-left");
}
