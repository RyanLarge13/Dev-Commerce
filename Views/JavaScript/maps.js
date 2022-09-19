function myMap() {
  let mapProp= {
    center: new google.maps.LatLng(51.508742,-0.120850),
    zoom: 5,
  };
  let map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}