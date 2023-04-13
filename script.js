function initMap() {
  var macc = { lat: 42.1382114, lng: -71.5212585 };

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: macc,
  });

  var marker = new google.maps.Marker({ position: macc, map: map });
}

function initMap() {
  // Create a map object and specify the center and zoom level
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.7749, lng: -122.4194 },
    zoom: 8,
  });
}

$(document).ready(function () {
  $("#slideup").on("click", function () {
    // $("#checkout").slideToggle();
    document.getElementById("checkout");
  });
});

// jispe click krega
const bottom = document.querySelector(".bottom-content");

bottom.addEventListener("click", () => {
  // jisko toggle krega
  const map = document.querySelector(".top-content");
  map.toggleAttribute("minimize");
});
