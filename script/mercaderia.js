
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


//hacemos un array de los productos
const productos =  [{id:1, producto:"foto10x15", precio:150, texto: "Quiero una promo 10x15"},
                    {id:2, producto:"foto13x18", precio:180, texto: "que onda loquita"},
                    {id:3, producto:"foto15x20", precio:200},
                    {id:4, producto:"fotoCarnet", precio:150},
                    {id:5, producto:"fotoPolaroid", precio:150}];


//carrito array para sumar los productos
const carrito=[];

const texto=[];

//boton sumar 
$("#sumarProductos").click(function (e) { 
  e.preventDefault();
  
  //funcion para sumar los productos del array carrito
  let total = carrito.reduce((a, b) => a + b, 0);

  //mostramos el total
  $("#modalContenido").append(
    
    `
    <h2>${total}</h2>
    `
  );
 
  //lo guardamos en el local storge para poder insertarlo en wpp
  localStorage.setItem('suma', total);

  //lo guardamos en el local storge para poder insertarlo en wpp
  localStorage.setItem('texto', texto);

});

//registramos click del boton
$("#quieroPromo10x15").click(function (e) { 

  //evitamos que recargue
  e.preventDefault();

  //agregamos los precios a un carrito
  carrito.push(productos[0].precio);
    
  //agregamos el producto al modal con el precio
  $("#modalContenido").append(
    
    `
    <h2>${productos[0].precio}</h2>
    `
  );
  
});

//registramos un solo click para que nos agregue una sola vez el texto deseado
$( "#quieroPromo10x15" ).one( "click", function( event ) {

  //pusheamos el texto a un array que luego sera utilizado en whatsapp
  texto.push(productos[0].texto);

});

//registramos click del boton 
$("#quieroPromo13x18").click(function (e) { 

  //evitamos que recargue
  e.preventDefault();
  
  //agregamos los precios a un carrito
  carrito.push(productos[1].precio);
    
  //agregamos el producto al modal con el precio
  $("#modalContenido").append(
    
    `
    <h2>${productos[1].precio}</h2>
    `
  );

});

//registramos un solo click para que nos agregue una sola vez el texto deseado
$( "#quieroPromo10x15" ).one( "click", function( event ) {

  //pusheamos el texto a un array que luego sera utilizado en whatsapp
  texto.push(productos[1].texto);

});


//registramos click del boton 
$("#quieroPromo15x20").click(function (e) { 

  //evitamos que recargue
  e.preventDefault();
  
  //agregamos los precios a un carrito
  carrito.push(productos[2].precio);
    
  //agregamos el producto al modal con el precio
  $("#modalContenido").append(
    
    `
    <h2>${productos[2].precio}</h2>
    `
  );
});

//registramos un solo click para que nos agregue una sola vez el texto deseado
$( "#quieroPromo10x15" ).one( "click", function( event ) {

  //pusheamos el texto a un array que luego sera utilizado en whatsapp
  texto.push(productos[2].texto);

});


//registramos click del boton 
$("#quieroPromoCarnet").click(function (e) { 

  //evitamos que recargue
  e.preventDefault();
  
  //agregamos los precios a un carrito
  carrito.push(productos[3].precio);
    
  //agregamos el producto al modal con el precio
  $("#modalContenido").append(
    
    `
    <h2>${productos[3].precio}</h2>
    `
  );
});

//registramos un solo click para que nos agregue una sola vez el texto deseado
$( "#quieroPromo10x15" ).one( "click", function( event ) {

  //pusheamos el texto a un array que luego sera utilizado en whatsapp
  texto.push(productos[3].texto);

});


//registramos click del boton 
$("#quieroPromoPolaroid").click(function (e) { 

  //evitamos que recargue
  e.preventDefault();
  
  //agregamos los precios a un carrito
  carrito.push(productos[4].precio);
    
  //agregamos el producto al modal con el precio
  $("#modalContenido").append(
      
    `
    <h2>${productos[4].precio}</h2>
    `
  );
});

//registramos un solo click para que nos agregue una sola vez el texto deseado
$( "#quieroPromo10x15" ).one( "click", function( event ) {

  //pusheamos el texto a un array que luego sera utilizado en whatsapp
  texto.push(productos[4].texto);

});


//modal
$("#botonModal").click(function (e) { 

  //evitamos que recargue la pagina
  e.preventDefault();

  //modificamos el css del modal
  $("#modalCarrito").css({
    "display":"flex",
    "flex-direction":"colum",
    "align-content": "center",
    "justify-content": "center"
  })
  
});

