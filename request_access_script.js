function requestAccess() {
    navigator.mediaDevices.getUserMedia({video: false, audio: true});
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(redirect);
    }
}

function redirect() {
    window.location.href = 'the_climate_story.html'
}