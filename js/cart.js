function mostrarNomb(){
    var nombre = document.getElementById("usuariolog");
    var userName = JSON.parse(localStorage.getItem("user"));
    nombre.innerHTML = `Bienvenido <font color="palegreen"><strong>${userName.usuario}</strong></font> a e-mercado`;
}

mostrarNomb()


document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CARRO_2_ARTICULOS).then(function (resultObj) { //Llamado a JSON con dos articulos

        if (resultObj.status === "ok") {

            prodCarrito = resultObj.data;
            datosCarro = prodCarrito.articles; //Variable que nos permite acceder al arreglo "articles"
            mostrarCarrito(datosCarro); //Llamado a la funcion 
        }
    });
});

var prodCarrito = [];
var subTotal = 0;
var subsub = 0;


function mostrarCarrito(array) {

    let data = "";
    for (let i = 0; i < array.length; i++) {
        let datoscarrito = array[i];
        
        
        if (datoscarrito.currency === "USD"){
            datoscarrito.unitCost = datoscarrito.unitCost * 40; //Condicional para convertir la moneda a pesos uruguayos 
            }

            let totalProducto = datoscarrito.unitCost * datoscarrito.count; //Costo total de cada producto
            subTotal += totalProducto; //Subtotal de productos sumados
       {

            data +=

                `   <tr>
                        <td>
                            <figure class="itemside align-items-center">
                                <div class="aside"><img src="` + datoscarrito.src + `" class="img-sm"></div>
                                    <figcaption class="info"> <a href="products.html" class="title" data-abc="true">`+ datoscarrito.name + `</a>
                                    </figcaption>
                            </figure>
                        </td>
                        <td> 
                            <p>$<span class="precio"> ` + datoscarrito.unitCost + `</span></p>
                        </td>
                        <td> 
                            <input type=number id="cant${i}" onchange="tiempoReal()" style="width: 45px" name="cantidades" min="1" value="` + datoscarrito.count + `">
                        </td>
                        <td> 
                            <p>$<span id="subtProd${i}">` + totalProducto + `</span></p>
                        </td>
                        <td class="text-right d-none d-md-block"><a onclick="deleteRow(this)" class="btn btn-danger" data-abc="true"><i class="fa fa-trash"></i> Remover</a>
                        </td>
                    </tr>
                `
        }
    
        document.getElementById("carrito").innerHTML = data;
        document.getElementById("precioSubTotal").innerHTML = subTotal;
        
        
         
        
    }
}



/*-----No es para esta entrega-----*/
  function standard(){
      document.getElementById("tipoEnvio").innerHTML = "Standard";
      valor = document.getElementById("precioSubTotal").innerHTML;
      nuevoValor = (valor * 5) / 100;
      document.getElementById("costoEnvio").innerHTML = `Costo de envío: $` +nuevoValor;
      precioFinal = parseFloat(valor) + nuevoValor;
      document.getElementById("precioFinal").innerHTML = `Total: $` +precioFinal;
    }
    
  function express(){
      document.getElementById("tipoEnvio").innerHTML = "Express";
      valor = document.getElementById("precioSubTotal").innerHTML;
      nuevoValor = (valor * 7) / 100;
      document.getElementById("costoEnvio").innerHTML = `Costo de envío: $` +nuevoValor;
      precioFinal = parseFloat(valor) + nuevoValor;
      document.getElementById("precioFinal").innerHTML = `Total: $` +precioFinal;
    }

  function premium(){
      document.getElementById("tipoEnvio").innerHTML = "Premium";
      valor = document.getElementById("precioSubTotal").innerHTML;
      nuevoValor = (valor * 15) / 100;
      document.getElementById("costoEnvio").innerHTML = `Costo de envío: $` +nuevoValor;
      precioFinal = parseFloat(valor) + nuevoValor;
      document.getElementById("precioFinal").innerHTML = `Total: $` +precioFinal;   
     }
/*--------------------------------*/



function tiempoReal(){
    let precios = document.getElementsByClassName("precio");  //Se reciben todos los elementos que contengan la clase precio
    let cantidades = document.getElementsByTagName("input"); //Se reciben todos los inputs
    let cantidadItems = 0; //Variable que suma la cantidad de productos en el carro
    subsub = 0; //Variable subtotal modificada en tiempo real

    for(let i = 0; i < precios.length; i++){
            subsub += parseFloat(precios[i].innerHTML) * cantidades[i].value; //El subtotal recibe el precio y la cantidad y se modifica en tiempo real
            document.getElementById("subtProd"+i).innerHTML = parseFloat(precios[i].innerHTML) * cantidades[i].value; //Subtotal por cada producto modificada en tiempo real
            cantidadItems += parseFloat(cantidades[i].value); //Cantidad de items en tiempo real
        }

        document.getElementById("precioSubTotal").innerHTML = subsub; 
        document.getElementById("cantidadItems").innerHTML = cantidadItems;
        document.getElementById("numeroProductos").innerHTML = cantidadItems; //Se pega en el dropDownMenu
        
        
/*---------------No es para esta entrega--------------------*/
        let envio = document.getElementById("envio").value;
       
       
        if (envio == 1){
            standard();
        } if (envio == 2){
                express();
        }   if (envio == 3){
                    premium();
        }
/*----------------------------------------------------------*/

}

/*---------------No es para esta entrega--------------------*/
function deleteRow(r)
    {
    var fila = r.parentNode.parentNode.rowIndex;
    document.getElementById("tablaProductos").deleteRow(fila);
    }
/*----------------------------------------------------------*/
































    




















