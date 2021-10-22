// document.addEventListener("DOMContentLoaded", function (e) {
// });

function mostrarNomb(){
    var nombre = document.getElementById("usuariolog");
    var userName = JSON.parse(localStorage.getItem("user"));
    nombre.innerHTML = `Bienvenido <font color="palegreen"><strong>${userName.usuario}</strong></font> a e-mercado`;
}
mostrarNomb()






function guardarDatos(){
    var nombreUsuario = document.getElementById("nombre");
    var apellidoUsuario = document.getElementById("apellido");
    var celUsuario = document.getElementById("phone");
    var edadUsuario = document.getElementById("edad");
    var emailUsuario = document.getElementById("email");

    localStorage.setItem("name", JSON.stringify({nombre: nombreUsuario.value}));
    localStorage.setItem("lastName", JSON.stringify({apellido: apellidoUsuario.value}));
    localStorage.setItem("cel", JSON.stringify({celular: celUsuario.value}));
    localStorage.setItem("age", JSON.stringify({edad: edadUsuario.value}));
    localStorage.setItem("mail", JSON.stringify({email: emailUsuario.value}));
}

function mostrarDatos(){
    var nombreUser = document.getElementById("nombre");
    var userName = JSON.parse(localStorage.getItem("name"));
    nombreUser.innerHTML = `Bienvenido <font color="palegreen"><strong>${userName.nombre}</strong></font> a e-mercado`;
}