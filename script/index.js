mapboxgl.accessToken = 'pk.eyJ1IjoiZGV5bm5pYWxtYXphbiIsImEiOiJjbGcxMG1uZGExZ2psM3FwNjlyaWU3MXJ1In0.JVtgXQW2KTo8JQBsPxl-IA';

const trackingBtn = document.querySelector('.tracking-btn');

function getLocation(position) {
    const { latitude, longitude } = position.coords;

    const newCenter = [longitude, latitude];

    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/deynnialmazan/clg5c2xij000101mow29527lh', 
        center: newCenter, // Center in the user's location
        zoom: 14
    });
    
    const nav = new mapboxgl.NavigationControl({
        visualizePitch: true
    });
    
    map.addControl(nav, 'bottom-right');

    // Add market to user's location
    const marker = new mapboxgl.Marker({
    color: "#ff5c4d",
    draggable: true
    }).setLngLat(newCenter)
    .addTo(map);
    
};


function errorHandler() {
    console.log('Unable to retrieve location');
}

const options = {
    enableHighAccuracy: true
}


const timer = setInterval(function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition
        (getLocation, errorHandler), { enableHighAccuracy: true };
    } else {
        console.log('Geolocation is not supported by your browser');
    }    
    clearInterval(timer);
}, 2000);