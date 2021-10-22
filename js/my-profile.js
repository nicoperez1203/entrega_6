//  document.addEventListener("DOMContentLoaded", function (e) {
//  });

function mostrarNomb(){
    var nombre = document.getElementById("usuariolog");
    var nombre2 = document.getElementById("usuariolog2");
    var userName = JSON.parse(localStorage.getItem("user"));
    nombre.innerHTML = `Bienvenido <font color="palegreen"><strong>${userName.usuario}</strong></font> a e-mercado`;
    nombre2.innerHTML = `Usuario activo: <font color="midnightblue"><strong>${userName.usuario}</strong></font>`;
}
mostrarNomb()



   function guardarDatos(){
      var nombreUsuario = document.getElementById("nombreNuevo");
      var apellidoUsuario = document.getElementById("apellidoNuevo");
      var celUsuario = document.getElementById("celNuevo");
      var edadUsuario = document.getElementById("edadNuevo");
      var emailUsuario = document.getElementById("emailNuevo");

      localStorage.setItem("name", JSON.stringify({nombre: nombreUsuario.value}));
      localStorage.setItem("lastName", JSON.stringify({apellido: apellidoUsuario.value}));
      localStorage.setItem("cel", JSON.stringify({celular: celUsuario.value}));
      localStorage.setItem("age", JSON.stringify({edad: edadUsuario.value}));
      localStorage.setItem("mail", JSON.stringify({email: emailUsuario.value}));

     

      alert("Los datos fueron modificados correctamente. Actualice la pagina para ver los cambios");
  }

//   function previewFile() {
//     let preview = document.getElementById('foto');
//     let file    = document.querySelector('input[type=file]').files[0];
//     let reader  = new FileReader();
  
//     reader.onloadend = function () {
//       preview.src = reader.result; 
//       document.getElementById('contenido').innerHTML= reader.result;
      
//     }
  
//     if (file) {
//       reader.readAsDataURL(file);
     
//     } else {
//       preview.src = "img/avatar.png";
//     }
//   }

 
  /*Imprimiendo datos en caso de que haya algo almacenado en el localstorage, luego de que el DOM este cargado*/
  document.addEventListener('DOMContentLoaded',()=>{

     var nombre = document.getElementById("nombre");
     var userName = JSON.parse(localStorage.getItem("name"));
     nombre.innerHTML = userName.nombre

     var apellido = document.getElementById("apellido");
     var lastName = JSON.parse(localStorage.getItem("lastName"));
     apellido.innerHTML = lastName.apellido

     var cel = document.getElementById("celular");
     var celphone = JSON.parse(localStorage.getItem("cel"));
     cel.innerHTML = celphone.celular

     var edad = document.getElementById("edad");
     var age = JSON.parse(localStorage.getItem("age"));
     edad.innerHTML = age.edad

     var email = document.getElementById("email");
     var mail = JSON.parse(localStorage.getItem("mail"));
     email.innerHTML = mail.email

 })

 






  