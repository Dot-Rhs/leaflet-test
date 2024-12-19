let map = L.map("map").setView([52.585, -2.127], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([52.587804, -2.134904]).addTo(map);

let circle = L.circle([52.581394, -2.138478], {
  color: "pink",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 100
}).addTo(map);

circle.bindPopup("CIRCLE SHIT");

let popup = L.popup();

const onMapClick = (event) => {
  popup
    .setLatLng(event.latlng)
    .setContent("You clicked the map at  " + event.latlng.toString())
    .openOn(map);
};

map.on("click", onMapClick);
