
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
const productos =  [{id:1, producto:"foto10x15", precio:"150"},
                    {id:2, producto:"foto13x18", precio:"180"},
                    {id:3, producto:"foto15x20", precio:"200"},
                    {id:4, producto:"fotoCarnet", precio:"150"},
                    {id:5, producto:"fotoPolaroid", precio:"150"}];


//registramos click del boton
$("#quieroPromo10x15").click(function (e) { 

  //evitamos que recargue
  e.preventDefault();
    
  //agregamos el producto al modal con el precio
  $("#modalContenido").append(
    
    `
    <h2 id="elprecio">${productos[0].precio}</h2>
    `
  );
});


//registramos click del boton 
$("#quieroPromo13x18").click(function (e) { 

  //evitamos que recargue
  e.preventDefault();
  
  //agregamos el producto al modal con el precio
  $("#modalContenido").append(
    
    `
    <h2>${productos[1].precio}</h2>
    `
  );
});


//registramos click del boton 
$("#quieroPromo15x20").click(function (e) { 

  //evitamos que recargue
  e.preventDefault();
  
  //agregamos el producto al modal con el precio
  $("#modalContenido").append(
    
    `
    <h2>${productos[2].precio}</h2>
    `
  );
});


//registramos click del boton 
$("#quieroPromoCarnet").click(function (e) { 

  //evitamos que recargue
  e.preventDefault();
  
  //agregamos el producto al modal con el precio
  $("#modalContenido").append(
    
    `
    <h2>${productos[3].precio}</h2>
    `
  );
});


//registramos click del boton 
$("#quieroPromoPolaroid").click(function (e) { 

  //evitamos que recargue
  e.preventDefault();
  
  //agregamos el producto al modal con el precio
  $("#modalContenido").append(
      
    `
    <h2>${productos[4].precio}</h2>
    `
  );
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

