const ourCoords = {
    latitude: 47.624851,
    longitude: -122.52099
};

const watchId = null;


let map;

window.onload = getMyLocation;

function getMyLocation() {
    if (navigator.geolocation){
        // navigator.geolocation.getCurrentPosition(displayLocation, displayError);  Works without the buttons
        const watchButton = document.getElementById("watch");
        watchButton.onclick = watchLocation;
        const clearWatchButton = document.getElementById("clearwatch");
        clearWatchButton.onclick = clearWatch;
    } else {
        alert("Oops, no geolocation support");
    }
}

function displayLocation(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const div = document.getElementById("location");
    div.innerHTML = "You're at Latitude: " + latitude + ", Longitude: " + longitude;

    let km = computeDistance(position.coords, ourCoords);
    const distance = document.getElementById("distance");
    distance.innerHTML = "You are " + km + " km from the WickedlySmart HQ";
    distance.innerHTML += " (with " + position.coords.accuracy + " meters accuracy)";

    if (map == null) {
        showMap(position.coords);
    }
}

function displayError(error) {
    const errorTypes = {
        0: "Unknown error",
        1: "Permission denied by user",
        2: "Position is not available",
        3: "Request timed out"
    };
    let errorMessage = errorTypes[error.code];
    if (error.code == 0 || error.code == 2) {
        errorMessage = errorMessage + " " + error.message;
    }
    const div = document.getElementById("location");
    div.innerHTML = errorMessage;
}

function computeDistance(startCoords, destCoords) {
    let startLatRads = degreesToRadians(startCoords.latitude);
    let startLongRads = degreesToRadians(startCoords.longitude);
    let destLatRads = degreesToRadians(destCoords.latitude);
    let destLongRads = degreesToRadians(destCoords.longitude);

    let Radius = 6371;
    let distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) + Math.cos(startLatRads) * Math.cos(destLatRads) * Math.cos(startLongRads - destLongRads)) * Radius;
    return distance;
}

function degreesToRadians(degrees) {
    let radians = (degrees * Math.PI)/180;
    return radians;
}

function showMap(coords) {
    let googleLatAndLong = new google.maps.LatLng(coords.latitude, coords.longitude);

    const mapOptions = {
        zoom: 10,
        center: googleLatAndLong,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    const mapDiv = document.getElementById("map");
    map = new google.maps.Map(mapDiv, mapOptions);

    let title = "Your Location";
    let content = "You are here: " + coords.latitude + ", " + coords.longitude;
    addMarker(map, googleLatAndLong, title, content)
}

function addMarker(map, latlong, title, content) {
    const markerOptions = {
        position: latlong,
        map: map,
        title: title,
        clickable: true
    };
    let marker = new google.maps.Marker(markerOptions);

    const infoWindowOptions = {
        content: content,
        position: latlong
    }

    let infoWindow = new google.maps.InfoWindow(infoWindowOptions);
    google.maps.event.addListener(marker, "click", function() {
        infoWindow.open(map);
    });
}

function watchLocation() {
    watchId = navigator.geolocation.watchPosition(displayLocation, displayError);
}

function clearWatch() {
    if (watchId != null) {
        navigator.geolocation.clearWatch(watchId);
        watchId = null;
    }
}
