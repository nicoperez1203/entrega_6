document.addEventListener("DOMContentLoaded", function (e) {
    onLoad();
});

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        location.href = "index.html";
        window.location = "index.html";
        });
}

function onLoad() {
    gapi.load('auth2', function () {
        gapi.auth2.init();
    });
}


function cerrarSesion(){
    localStorage.clear();
    window.location = "index.html";
}