//registramos el click
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

  //ocultanmos los accesorios
  $("#accesorios").css({
    "display":"none"
  });

  //ocultanmos los albums
  $("#album").css({
    "display":"none"
  });
});


//registramos el click
$("#buttonAlbum").click(function (e) { 

  //evitamos q recargue la web
  e.preventDefault();

  //editamos la visibilidad de los objetos
  $("#album").show();

  //aplicamos css para mostrar las promociones
  $("#album").css({
    "display":"flex",
    "flex-direction":"row",
    "justify-content":"space-around",
    "flex-wrap":"wrap"
  })


  //ocultamos las promos de fotografia
  $("#impresionFotografia").css({
    "display":"none"
  });

  //ocultanmos los accesorios
  $("#accesorios").css({
    "display":"none"
  });
});


//registramos el click
$("#buttonAccesorios").click(function (e) { 

  //evitamos q recargue la web
  e.preventDefault();

  //editamos la visibilidad de los objetos
  $("#accesorios").show();

  //aplicamos css para mostrar las promociones
  $("#accesorios").css({
    "display":"flex",
    "flex-direction":"row",
    "justify-content":"space-around",
    "flex-wrap":"wrap"
  })


  //ocultamos las promos de fotografia
  $("#impresionFotografia").css({
    "display":"none"
  });

  //ocultanmos los albums
  $("#album").css({
    "display":"none"
  });
});


//usar el JSON de mercaderia
const URLproductos="./datos/productos.json"


//registramos click del boton en la promo 10x15
$("#quieroPromo10x15").click(function (e) { 

  //evitamos que recargue
  e.preventDefault();

  //conseguimos el precio del archivo JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable para que pueda ser mostrado
    let valor=JSON.stringify(response['productos'][0]['precio']);

    //agregamos los precios a un carrito y lo parseamos porque esta como string
    carrito.push(parseInt(valor));

    //funcion para sumar los productos del array carrito
    let total = carrito.reduce((a, b) => a + b, 0);


    //retiramos el numero anterior de la bolsita 
    $(".precioFinal").remove();
    
    //mostramos el total arriba en la bolsita
    $("#precioDeSuma").append(
    
    `
    <h2 class="precioFinal" 
                          style="margin-top:15px;
                                margin-right:10px;">
    $${total}
    </h2>
    `
    );
    
    //agregamos el producto al modal con el precio
    $("#modalProductos").append(
      
      `
      <h2 id="precioModal">Una promo 10x15 $${valor}</h2> 
      
      `
    );
    
  })
  
});


//registramos un solo click para que nos agregue una sola vez el texto deseado
$( "#quieroPromo10x15" ).click(function( event ) {

  //obtenemos el JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable
    let mensaje=JSON.stringify(response['productos'][0]['texto'])
    
    //ponemos el texto en el array
    texto.push(mensaje);
  })

});

//registramos click del boton en la promo de dos fotos10x15
$("#quiero2Promo10x15").click(function (e) { 

  //evitamos que recargue
  e.preventDefault();

  //conseguimos el precio del archivo JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable para que pueda ser mostrado
    let valor=JSON.stringify(response['productos'][1]['precio']);

    //agregamos los precios a un carrito y lo parseamos porque esta como string
    carrito.push(parseInt(valor));

    //funcion para sumar los productos del array carrito
    let total = carrito.reduce((a, b) => a + b, 0);


    //retiramos el numero anterior de la bolsita 
    $(".precioFinal").remove();
    
    //mostramos el total arriba en la bolsita
    $("#precioDeSuma").append(
    
    `
    <h2 class="precioFinal" 
                          style="margin-top:15px;
                                margin-right:10px;">
    $${total}
    </h2>
    `
    );
    
    //agregamos el producto al modal con el precio
    $("#modalProductos").append(
      
      `
      <h2 id="precioModal">Dos promos 10x15 $${valor}</h2> 
      
      `
    );
    
  })
  
});


//registramos un solo click para que nos agregue una sola vez el texto deseado
$("#quiero2Promo10x15" ).click(function( event ) {

  //obtenemos el JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable
    let mensaje=JSON.stringify(response['productos'][1]['texto'])
    
    //ponemos el texto en el array
    texto.push(mensaje);
  })

});


//registramos click del boton en la promo 13x18
$("#quieroPromo13x18").click(function (e) { 

  //evitamos que recargue
  e.preventDefault();

  //conseguimos el precio del archivo JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable para que pueda ser mostrado
    let valor=JSON.stringify(response['productos'][2]['precio']);

    //agregamos los precios a un carrito y lo parseamos porque esta como string
    carrito.push(parseInt(valor));

    //funcion para sumar los productos del array carrito
    let total = carrito.reduce((a, b) => a + b, 0);


    //retiramos el numero anterior de la bolsita 
    $(".precioFinal").remove();
    
    //mostramos el total arriba en la bolsita
    $("#precioDeSuma").append(
    
    `
    <h2 class="precioFinal" 
                          style="margin-top:15px;
                                margin-right:10px;">
    $${total}
    </h2>
    `
    );
    
    //agregamos el producto al modal con el precio
    $("#modalProductos").append(
      
      `
      <h2 id="precioModal">Una promo 13x18 $${valor}</h2> 
      
      `
    );
    
  })
  
});


//registramos un solo click para que nos agregue una sola vez el texto deseado
$( "#quieroPromo13x18" ).click(function( event ) {

  //obtenemos el JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable
    let mensaje=JSON.stringify(response['productos'][2]['texto'])
    
    //ponemos el texto en el array
    texto.push(mensaje);
  })

});

//registramos click del boton en la promo 15x20
$("#quieroPromo15x20").click(function (e) { 

  //evitamos que recargue
  e.preventDefault();

  //conseguimos el precio del archivo JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable para que pueda ser mostrado
    let valor=JSON.stringify(response['productos'][3]['precio']);

    //agregamos los precios a un carrito y lo parseamos porque esta como string
    carrito.push(parseInt(valor));

    //funcion para sumar los productos del array carrito
    let total = carrito.reduce((a, b) => a + b, 0);


    //retiramos el numero anterior de la bolsita 
    $(".precioFinal").remove();
    
    //mostramos el total arriba en la bolsita
    $("#precioDeSuma").append(
    
    `
    <h2 class="precioFinal" 
                          style="margin-top:15px;
                                margin-right:10px;">
    $${total}
    </h2>
    `
    );
    
    //agregamos el producto al modal con el precio
    $("#modalProductos").append(
      
      `
      <h2 id="precioModal">Una promos 15x20 $${valor}</h2> 
      
      `
    );
    
  })
  
});


//registramos un solo click para que nos agregue una sola vez el texto deseado
$("#quieroPromo15x20" ).click(function( event ) {

  //obtenemos el JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable
    let mensaje=JSON.stringify(response['productos'][3]['texto'])
    
    //ponemos el texto en el array
    texto.push(mensaje);
  })

});


//registramos click del boton en la promo de foto carnet
$("#quieroPromoCarnet").click(function (e) { 

  //evitamos que recargue
  e.preventDefault();

  //conseguimos el precio del archivo JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable para que pueda ser mostrado
    let valor=JSON.stringify(response['productos'][4]['precio']);

    //agregamos los precios a un carrito y lo parseamos porque esta como string
    carrito.push(parseInt(valor));

    //funcion para sumar los productos del array carrito
    let total = carrito.reduce((a, b) => a + b, 0);


    //retiramos el numero anterior de la bolsita 
    $(".precioFinal").remove();
    
    //mostramos el total arriba en la bolsita
    $("#precioDeSuma").append(
    
    `
    <h2 class="precioFinal" 
                          style="margin-top:15px;
                                margin-right:10px;">
    $${total}
    </h2>
    `
    );
    
    //agregamos el producto al modal con el precio
    $("#modalProductos").append(
      
      `
      <h2 id="precioModal">Una promos Carnet $${valor}</h2> 
      
      `
    );
    
  })
  
});


//registramos un solo click para que nos agregue una sola vez el texto deseado
$("#quieroPromoCarnet" ).click(function( event ) {

  //obtenemos el JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable
    let mensaje=JSON.stringify(response['productos'][4]['texto'])
    
    //ponemos el texto en el array
    texto.push(mensaje);
  })

});


//registramos click del boton en la promo de foto carnet
$("#quieroPromoCarnet6").click(function (e) { 

  //evitamos que recargue
  e.preventDefault();

  //conseguimos el precio del archivo JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable para que pueda ser mostrado
    let valor=JSON.stringify(response['productos'][13]['precio']);

    //agregamos los precios a un carrito y lo parseamos porque esta como string
    carrito.push(parseInt(valor));

    //funcion para sumar los productos del array carrito
    let total = carrito.reduce((a, b) => a + b, 0);


    //retiramos el numero anterior de la bolsita 
    $(".precioFinal").remove();
    
    //mostramos el total arriba en la bolsita
    $("#precioDeSuma").append(
    
    `
    <h2 class="precioFinal" 
                          style="margin-top:15px;
                                margin-right:10px;">
    $${total}
    </h2>
    `
    );
    
    //agregamos el producto al modal con el precio
    $("#modalProductos").append(
      
      `
      <h2 id="precioModal">Una promo Carnet x6 $${valor}</h2> 
      
      `
    );
    
  })
  
});


//registramos un solo click para que nos agregue una sola vez el texto deseado
$("#quieroPromoCarnet6" ).click(function( event ) {

  //obtenemos el JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable
    let mensaje=JSON.stringify(response['productos'][13]['texto'])
    
    //ponemos el texto en el array
    texto.push(mensaje);
  })

});


//registramos click del boton en la promo de foto pasaporte
$("#quieroPromoPasaporte").click(function (e) { 

  //evitamos que recargue
  e.preventDefault();

  //conseguimos el precio del archivo JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable para que pueda ser mostrado
    let valor=JSON.stringify(response['productos'][14]['precio']);

    //agregamos los precios a un carrito y lo parseamos porque esta como string
    carrito.push(parseInt(valor));

    //funcion para sumar los productos del array carrito
    let total = carrito.reduce((a, b) => a + b, 0);


    //retiramos el numero anterior de la bolsita 
    $(".precioFinal").remove();
    
    //mostramos el total arriba en la bolsita
    $("#precioDeSuma").append(
    
    `
    <h2 class="precioFinal" 
                          style="margin-top:15px;
                                margin-right:10px;">
    $${total}
    </h2>
    `
    );
    
    //agregamos el producto al modal con el precio
    $("#modalProductos").append(
      
      `
      <h2 id="precioModal">Una promo pasaporte $${valor}</h2> 
      
      `
    );
    
  })
  
});


//registramos un solo click para que nos agregue una sola vez el texto deseado
$("#quieroPromoPasaporte" ).click(function( event ) {

  //obtenemos el JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable
    let mensaje=JSON.stringify(response['productos'][14]['texto'])
    
    //ponemos el texto en el array
    texto.push(mensaje);
  })

});


//registramos click del boton en la promo de foto polaroid
$("#quieroPromoPolaroid").click(function (e) { 

  //evitamos que recargue
  e.preventDefault();

  //conseguimos el precio del archivo JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable para que pueda ser mostrado
    let valor=JSON.stringify(response['productos'][5]['precio']);

    //agregamos los precios a un carrito y lo parseamos porque esta como string
    carrito.push(parseInt(valor));

    //funcion para sumar los productos del array carrito
    let total = carrito.reduce((a, b) => a + b, 0);


    //retiramos el numero anterior de la bolsita 
    $(".precioFinal").remove();
    
    //mostramos el total arriba en la bolsita
    $("#precioDeSuma").append(
    
    `
    <h2 class="precioFinal" 
                          style="margin-top:15px;
                                margin-right:10px;">
    $${total}
    </h2>
    `
    );
    
    //agregamos el producto al modal con el precio
    $("#modalProductos").append(
      
      `
      <h2 id="precioModal">Una promos Polaroid $${valor}</h2> 
      
      `
    );
    
  })
  
});


//registramos un solo click para que nos agregue una sola vez el texto deseado
$("#quieroPromoPolaroid" ).click(function( event ) {

  //obtenemos el JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable
    let mensaje=JSON.stringify(response['productos'][5]['texto'])
    
    //ponemos el texto en el array
    texto.push(mensaje);
  })

});


//registramos click del boton en la promo de foto polaroid x4
$("#quieroPromoPolaroid4").click(function (e) { 

  //evitamos que recargue
  e.preventDefault();

  //conseguimos el precio del archivo JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable para que pueda ser mostrado
    let valor=JSON.stringify(response['productos'][15]['precio']);

    //agregamos los precios a un carrito y lo parseamos porque esta como string
    carrito.push(parseInt(valor));

    //funcion para sumar los productos del array carrito
    let total = carrito.reduce((a, b) => a + b, 0);


    //retiramos el numero anterior de la bolsita 
    $(".precioFinal").remove();
    
    //mostramos el total arriba en la bolsita
    $("#precioDeSuma").append(
    
    `
    <h2 class="precioFinal" 
                          style="margin-top:15px;
                                margin-right:10px;">
    $${total}
    </h2>
    `
    );
    
    //agregamos el producto al modal con el precio
    $("#modalProductos").append(
      
      `
      <h2 id="precioModal">Una promo Polaroid x4 $${valor}</h2> 
      
      `
    );
    
  })
  
});


//registramos un solo click para que nos agregue una sola vez el texto deseado
$("#quieroPromoPolaroid4" ).click(function( event ) {

  //obtenemos el JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable
    let mensaje=JSON.stringify(response['productos'][15]['texto'])
    
    //ponemos el texto en el array
    texto.push(mensaje);
  })

});


//registramos click del boton en la promo de foto polaroid x 10
$("#quieroPromoPolaroid10").click(function (e) { 

  //evitamos que recargue
  e.preventDefault();

  //conseguimos el precio del archivo JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable para que pueda ser mostrado
    let valor=JSON.stringify(response['productos'][16]['precio']);

    //agregamos los precios a un carrito y lo parseamos porque esta como string
    carrito.push(parseInt(valor));

    //funcion para sumar los productos del array carrito
    let total = carrito.reduce((a, b) => a + b, 0);


    //retiramos el numero anterior de la bolsita 
    $(".precioFinal").remove();
    
    //mostramos el total arriba en la bolsita
    $("#precioDeSuma").append(
    
    `
    <h2 class="precioFinal" 
                          style="margin-top:15px;
                                margin-right:10px;">
    $${total}
    </h2>
    `
    );
    
    //agregamos el producto al modal con el precio
    $("#modalProductos").append(
      
      `
      <h2 id="precioModal">Una promo Polaroid x10 $${valor}</h2> 
      
      `
    );
    
  })
  
});


//registramos un solo click para que nos agregue una sola vez el texto deseado
$("#quieroPromoPolaroid10" ).click(function( event ) {

  //obtenemos el JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable
    let mensaje=JSON.stringify(response['productos'][16]['texto'])
    
    //ponemos el texto en el array
    texto.push(mensaje);
  })

});


//registramos click del boton en la promo de foto polaroid papel ilustracion
$("#quieroPromoPolaroidPapel").click(function (e) { 

  //evitamos que recargue
  e.preventDefault();

  //conseguimos el precio del archivo JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable para que pueda ser mostrado
    let valor=JSON.stringify(response['productos'][17]['precio']);

    //agregamos los precios a un carrito y lo parseamos porque esta como string
    carrito.push(parseInt(valor));

    //funcion para sumar los productos del array carrito
    let total = carrito.reduce((a, b) => a + b, 0);


    //retiramos el numero anterior de la bolsita 
    $(".precioFinal").remove();
    
    //mostramos el total arriba en la bolsita
    $("#precioDeSuma").append(
    
    `
    <h2 class="precioFinal" 
                          style="margin-top:15px;
                                margin-right:10px;">
    $${total}
    </h2>
    `
    );
    
    //agregamos el producto al modal con el precio
    $("#modalProductos").append(
      
      `
      <h2 id="precioModal">Una promo Polaroid papel ilustracion $${valor}</h2> 
      
      `
    );
    
  })
  
});


//registramos un solo click para que nos agregue una sola vez el texto deseado
$("#quieroPromoPolaroidPapel" ).click(function( event ) {

  //obtenemos el JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable
    let mensaje=JSON.stringify(response['productos'][17]['texto'])
    
    //ponemos el texto en el array
    texto.push(mensaje);
  })

});

//ACCESORIOS

//registramos click del boton el boton de cable de ihpone
$("#cableIph").click(function (e) { 

  //evitamos que recargue
  e.preventDefault();

  //conseguimos el precio del archivo JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable para que pueda ser mostrado
    let valor=JSON.stringify(response['productos'][6]['precio']);

    //agregamos los precios a un carrito y lo parseamos porque esta como string
    carrito.push(parseInt(valor));

    //funcion para sumar los productos del array carrito
    let total = carrito.reduce((a, b) => a + b, 0);


    //retiramos el numero anterior de la bolsita 
    $(".precioFinal").remove();
    
    //mostramos el total arriba en la bolsita
    $("#precioDeSuma").append(
    
    `
    <h2 class="precioFinal" 
                          style="margin-top:15px;
                                margin-right:10px;">
    $${total}
    </h2>
    `
    );
    
    //agregamos el producto al modal con el precio
    $("#modalProductos").append(
      
      `
      <h2 id="precioModal">Cable iphone $${valor}</h2> 
      
      `
    );
    
  })
  
});


//registramos un solo click para que nos agregue una sola vez el texto deseado
$("#cableIph" ).click(function( event ) {

  //obtenemos el JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable
    let mensaje=JSON.stringify(response['productos'][6]['texto'])
    
    //ponemos el texto en el array
    texto.push(mensaje);
  })

});


//registramos click del boton el boton de cable de ihpone tipo C
$("#cableIphC").click(function (e) { 

  //evitamos que recargue
  e.preventDefault();

  //conseguimos el precio del archivo JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable para que pueda ser mostrado
    let valor=JSON.stringify(response['productos'][7]['precio']);

    //agregamos los precios a un carrito y lo parseamos porque esta como string
    carrito.push(parseInt(valor));

    //funcion para sumar los productos del array carrito
    let total = carrito.reduce((a, b) => a + b, 0);


    //retiramos el numero anterior de la bolsita 
    $(".precioFinal").remove();
    
    //mostramos el total arriba en la bolsita
    $("#precioDeSuma").append(
    
    `
    <h2 class="precioFinal" 
                          style="margin-top:15px;
                                margin-right:10px;">
    $${total}
    </h2>
    `
    );
    
    //agregamos el producto al modal con el precio
    $("#modalProductos").append(
      
      `
      <h2 id="precioModal">Cable iphone tipo C $${valor}</h2> 
      
      `
    );
    
  })
  
});


//registramos un solo click para que nos agregue una sola vez el texto deseado
$("#cableIphC" ).click(function( event ) {

  //obtenemos el JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable
    let mensaje=JSON.stringify(response['productos'][7]['texto'])
    
    //ponemos el texto en el array
    texto.push(mensaje);
  })

});


//registramos click del boton el boton de cable de Samsung tipo C
$("#cableSmgC").click(function (e) { 

  //evitamos que recargue
  e.preventDefault();

  //conseguimos el precio del archivo JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable para que pueda ser mostrado
    let valor=JSON.stringify(response['productos'][8]['precio']);

    //agregamos los precios a un carrito y lo parseamos porque esta como string
    carrito.push(parseInt(valor));

    //funcion para sumar los productos del array carrito
    let total = carrito.reduce((a, b) => a + b, 0);


    //retiramos el numero anterior de la bolsita 
    $(".precioFinal").remove();
    
    //mostramos el total arriba en la bolsita
    $("#precioDeSuma").append(
    
    `
    <h2 class="precioFinal" 
                          style="margin-top:15px;
                                margin-right:10px;">
    $${total}
    </h2>
    `
    );
    
    //agregamos el producto al modal con el precio
    $("#modalProductos").append(
      
      `
      <h2 id="precioModal">Cable Samsung tipo C $${valor}</h2> 
      
      `
    );
    
  })
  
});


//registramos un solo click para que nos agregue una sola vez el texto deseado
$("#cableSmgC" ).click(function( event ) {

  //obtenemos el JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable
    let mensaje=JSON.stringify(response['productos'][8]['texto'])
    
    //ponemos el texto en el array
    texto.push(mensaje);
  })

});


//registramos click del boton el boton de cable de Samsung micro usb
$("#cableSmgMicro").click(function (e) { 

  //evitamos que recargue
  e.preventDefault();

  //conseguimos el precio del archivo JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable para que pueda ser mostrado
    let valor=JSON.stringify(response['productos'][9]['precio']);

    //agregamos los precios a un carrito y lo parseamos porque esta como string
    carrito.push(parseInt(valor));

    //funcion para sumar los productos del array carrito
    let total = carrito.reduce((a, b) => a + b, 0);


    //retiramos el numero anterior de la bolsita 
    $(".precioFinal").remove();
    
    //mostramos el total arriba en la bolsita
    $("#precioDeSuma").append(
    
    `
    <h2 class="precioFinal" 
                          style="margin-top:15px;
                                margin-right:10px;">
    $${total}
    </h2>
    `
    );
    
    //agregamos el producto al modal con el precio
    $("#modalProductos").append(
      
      `
      <h2 id="precioModal">Cable Samsung micro usb $${valor}</h2> 
      
      `
    );
    
  })
  
});


//registramos un solo click para que nos agregue una sola vez el texto deseado
$("#cableSmgMicro" ).click(function( event ) {

  //obtenemos el JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable
    let mensaje=JSON.stringify(response['productos'][9]['texto'])
    
    //ponemos el texto en el array
    texto.push(mensaje);
  })

});


//registramos click del boton el boton de cargador 20w
$("#cargador20w").click(function (e) { 

  //evitamos que recargue
  e.preventDefault();

  //conseguimos el precio del archivo JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable para que pueda ser mostrado
    let valor=JSON.stringify(response['productos'][10]['precio']);

    //agregamos los precios a un carrito y lo parseamos porque esta como string
    carrito.push(parseInt(valor));

    //funcion para sumar los productos del array carrito
    let total = carrito.reduce((a, b) => a + b, 0);


    //retiramos el numero anterior de la bolsita 
    $(".precioFinal").remove();
    
    //mostramos el total arriba en la bolsita
    $("#precioDeSuma").append(
    
    `
    <h2 class="precioFinal" 
                          style="margin-top:15px;
                                margin-right:10px;">
    $${total}
    </h2>
    `
    );
    
    //agregamos el producto al modal con el precio
    $("#modalProductos").append(
      
      `
      <h2 id="precioModal">Cargador 20w$${valor}</h2> 
      
      `
    );
    
  })
  
});


//registramos un solo click para que nos agregue una sola vez el texto deseado
$("#cargador20w" ).click(function( event ) {

  //obtenemos el JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable
    let mensaje=JSON.stringify(response['productos'][10]['texto'])
    
    //ponemos el texto en el array
    texto.push(mensaje);
  })

});


//registramos click del boton el boton de cargador 5w
$("#cargador5w").click(function (e) { 

  //evitamos que recargue
  e.preventDefault();

  //conseguimos el precio del archivo JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable para que pueda ser mostrado
    let valor=JSON.stringify(response['productos'][11]['precio']);

    //agregamos los precios a un carrito y lo parseamos porque esta como string
    carrito.push(parseInt(valor));

    //funcion para sumar los productos del array carrito
    let total = carrito.reduce((a, b) => a + b, 0);


    //retiramos el numero anterior de la bolsita 
    $(".precioFinal").remove();
    
    //mostramos el total arriba en la bolsita
    $("#precioDeSuma").append(
    
    `
    <h2 class="precioFinal" 
                          style="margin-top:15px;
                                margin-right:10px;">
    $${total}
    </h2>
    `
    );
    
    //agregamos el producto al modal con el precio
    $("#modalProductos").append(
      
      `
      <h2 id="precioModal">Cargador 5w $${valor}</h2> 
      
      `
    );
    
  })
  
});


//registramos un solo click para que nos agregue una sola vez el texto deseado
$("#cargador5w" ).click(function( event ) {

  //obtenemos el JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable
    let mensaje=JSON.stringify(response['productos'][11]['texto'])
    
    //ponemos el texto en el array
    texto.push(mensaje);
  })

});


//registramos click del boton el boton de cargador 
$("#cargador").click(function (e) { 

  //evitamos que recargue
  e.preventDefault();

  //conseguimos el precio del archivo JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable para que pueda ser mostrado
    let valor=JSON.stringify(response['productos'][12]['precio']);

    //agregamos los precios a un carrito y lo parseamos porque esta como string
    carrito.push(parseInt(valor));

    //funcion para sumar los productos del array carrito
    let total = carrito.reduce((a, b) => a + b, 0);


    //retiramos el numero anterior de la bolsita 
    $(".precioFinal").remove();
    
    //mostramos el total arriba en la bolsita
    $("#precioDeSuma").append(
    
    `
    <h2 class="precioFinal" 
                          style="margin-top:15px;
                                margin-right:10px;">
    $${total}
    </h2>
    `
    );
    
    //agregamos el producto al modal con el precio
    $("#modalProductos").append(
      
      `
      <h2 id="precioModal">Cargador $${valor}</h2> 
      
      `
    );
    
  })
  
});


//registramos un solo click para que nos agregue una sola vez el texto deseado
$("#cargador" ).click(function( event ) {

  //obtenemos el JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable
    let mensaje=JSON.stringify(response['productos'][12]['texto'])
    
    //ponemos el texto en el array
    texto.push(mensaje);
  })

});

//ALBUM


//registramos click del boton el boton de album de 25 paginas
$("#album25").click(function (e) { 

  //evitamos que recargue
  e.preventDefault();

  //conseguimos el precio del archivo JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable para que pueda ser mostrado
    let valor=JSON.stringify(response['productos'][18]['precio']);

    //agregamos los precios a un carrito y lo parseamos porque esta como string
    carrito.push(parseInt(valor));

    //funcion para sumar los productos del array carrito
    let total = carrito.reduce((a, b) => a + b, 0);


    //retiramos el numero anterior de la bolsita 
    $(".precioFinal").remove();
    
    //mostramos el total arriba en la bolsita
    $("#precioDeSuma").append(
    
    `
    <h2 class="precioFinal" 
                          style="margin-top:15px;
                                margin-right:10px;">
    $${total}
    </h2>
    `
    );
    
    //agregamos el producto al modal con el precio
    $("#modalProductos").append(
      
      `
      <h2 id="precioModal">Album 25 paginas $${valor}</h2> 
      
      `
    );
    
  })
  
});


//registramos un solo click para que nos agregue una sola vez el texto deseado
$("#album25" ).click(function( event ) {

  //obtenemos el JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable
    let mensaje=JSON.stringify(response['productos'][18]['texto'])
    
    //ponemos el texto en el array
    texto.push(mensaje);
  })

});


//registramos click del boton el boton de album de 50 paginas
$("#album50").click(function (e) { 

  //evitamos que recargue
  e.preventDefault();

  //conseguimos el precio del archivo JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable para que pueda ser mostrado
    let valor=JSON.stringify(response['productos'][19]['precio']);

    //agregamos los precios a un carrito y lo parseamos porque esta como string
    carrito.push(parseInt(valor));

    //funcion para sumar los productos del array carrito
    let total = carrito.reduce((a, b) => a + b, 0);


    //retiramos el numero anterior de la bolsita 
    $(".precioFinal").remove();
    
    //mostramos el total arriba en la bolsita
    $("#precioDeSuma").append(
    
    `
    <h2 class="precioFinal" 
                          style="margin-top:15px;
                                margin-right:10px;">
    $${total}
    </h2>
    `
    );
    
    //agregamos el producto al modal con el precio
    $("#modalProductos").append(
      
      `
      <h2 id="precioModal">Album 50 paginas $${valor}</h2> 
      
      `
    );
    
  })
  
});


//registramos un solo click para que nos agregue una sola vez el texto deseado
$("#album50" ).click(function( event ) {

  //obtenemos el JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable
    let mensaje=JSON.stringify(response['productos'][19]['texto'])
    
    //ponemos el texto en el array
    texto.push(mensaje);
  })

});


//registramos click del boton el boton de album de 75 paginas
$("#album75").click(function (e) { 

  //evitamos que recargue
  e.preventDefault();

  //conseguimos el precio del archivo JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable para que pueda ser mostrado
    let valor=JSON.stringify(response['productos'][20]['precio']);

    //agregamos los precios a un carrito y lo parseamos porque esta como string
    carrito.push(parseInt(valor));

    //funcion para sumar los productos del array carrito
    let total = carrito.reduce((a, b) => a + b, 0);


    //retiramos el numero anterior de la bolsita 
    $(".precioFinal").remove();
    
    //mostramos el total arriba en la bolsita
    $("#precioDeSuma").append(
    
    `
    <h2 class="precioFinal" 
                          style="margin-top:15px;
                                margin-right:10px;">
    $${total}
    </h2>
    `
    );
    
    //agregamos el producto al modal con el precio
    $("#modalProductos").append(
      
      `
      <h2 id="precioModal">Album 75 paginas $${valor}</h2> 
      
      `
    );
    
  })
  
});


//registramos un solo click para que nos agregue una sola vez el texto deseado
$("#album75" ).click(function( event ) {

  //obtenemos el JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable
    let mensaje=JSON.stringify(response['productos'][20]['texto'])
    
    //ponemos el texto en el array
    texto.push(mensaje);
  })

});


//registramos click del boton el boton de album de 100 paginas
$("#album100").click(function (e) { 

  //evitamos que recargue
  e.preventDefault();

  //conseguimos el precio del archivo JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable para que pueda ser mostrado
    let valor=JSON.stringify(response['productos'][21]['precio']);

    //agregamos los precios a un carrito y lo parseamos porque esta como string
    carrito.push(parseInt(valor));

    //funcion para sumar los productos del array carrito
    let total = carrito.reduce((a, b) => a + b, 0);


    //retiramos el numero anterior de la bolsita 
    $(".precioFinal").remove();
    
    //mostramos el total arriba en la bolsita
    $("#precioDeSuma").append(
    
    `
    <h2 class="precioFinal" 
                          style="margin-top:15px;
                                margin-right:10px;">
    $${total}
    </h2>
    `
    );
    
    //agregamos el producto al modal con el precio
    $("#modalProductos").append(
      
      `
      <h2 id="precioModal">Album 100 paginas $${valor}</h2> 
      
      `
    );
    
  })
  
});


//registramos un solo click para que nos agregue una sola vez el texto deseado
$("#album100" ).click(function( event ) {

  //obtenemos el JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable
    let mensaje=JSON.stringify(response['productos'][21]['texto'])
    
    //ponemos el texto en el array
    texto.push(mensaje);
  })

});