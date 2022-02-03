
//hacemos un array de los productos
const productos = [ {id:1, producto:"foto10x15",imagen:"../media/promos/10x15.jpg" , precio:"150"} ];

let carrito = [];

const moneda ='$';

const DOMelementos = $("#impresionFotografia");

const DOMcarrito = $("#carrito");

const DOMtotal = $("#total");

const botonVaciarDOM = $("#boton-vaciar");

//registramos el clik
$("#buttonImpresionFotografia").click(function (e) { 

  //evitamos q recargue la web
  e.preventDefault();

  //editamos la visibilidad de los objetos
  $("#impresionFotografia").show();

  //aplicamos css para mostrar las promociones
  $("#impresionFotografia").css({
    "display":"flex",
    "flex-direction":"row",
    "justify-content":"space-around",
    "flex-wrap":"wrap"
  })
});



