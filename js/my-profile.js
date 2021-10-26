

function mostrarNomb(){
    var nombre = document.getElementById("usuariolog");
    var nombre2 = document.getElementById("usuariolog2");
    var userName = JSON.parse(localStorage.getItem("user"));
    nombre.innerHTML = `Bienvenido <font color="palegreen"><strong>${userName.usuario}</strong></font> a e-mercado`;
    nombre2.innerHTML = `<font color="midnightblue"><strong>${userName.usuario}</strong></font>`;
}
mostrarNomb()

function previewFile() {
  let preview = document.getElementById('foto');
  let file    = document.querySelector('input[type=file]').files[0];
  let reader  = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result; 
    document.getElementById('contenido').innerHTML= reader.result;
    
  }

  if (file) {
    reader.readAsDataURL(file);
   
  } else {
    preview.src = "img/avatar.png";
  }
}

function guardar() {
  let preview = document.getElementById('foto');
  let perfil = {};

  perfil.nombre = document.getElementById("nombre").value;
  perfil.apellido = document.getElementById("apellido").value;
  perfil.edad = document.getElementById("edad").value; 
  perfil.celular = document.getElementById("celular").value;
  perfil.email = document.getElementById("email").value;
  perfil.imagen = preview.src;

  localStorage.setItem('usuario', JSON.stringify(perfil));
  
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Perfil guardado correctamente, por favor, actualice la pagina!',
    showConfirmButton: true,
    })
}

document.addEventListener('DOMContentLoaded',()=>{
  let preview = document.getElementById('foto');
  let perfil = JSON.parse(localStorage.getItem('usuario'));
 
  if (perfil != null){
      

    document.getElementById('nombre').value = perfil.nombre;
    document.getElementById("apellido").value = perfil.apellido;
    document.getElementById('edad').value= perfil.edad;
    document.getElementById('celular').value= perfil.celular;
    document.getElementById('email').value= perfil.email;
    document.getElementById('foto').src = perfil.imagen;

  }else {
    preview.src = "img/avatar.png";
  }
 

})

    






  