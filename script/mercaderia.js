
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


//usar el JSON de mercaderia
const URLproductos="./datos/productos.json"


//registramos click del boton en la promo 10x15
$("#quieroPromo10x15").one( "click", function (e) { 

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
      <h2 id="precioModal">Una promo 10x15 $${valor}</h2> <button id="quitarProducto" style="height:auto">Eliminar Producto<i class="fas fa-times" style="font-size:10px;"></i></button> 
      
      `
    );

    //boton de retirar producto
    $("#quitarProducto").click(function () { 

      //quitamos el porducto del carrito
      $("#precioModal").remove();

      //quitamos el boton
      $("#quitarProducto").remove();

      //quitamos el producto del array
      carrito.pop()

      //mostramos el precio en la bolsa arriba a la derecha
        //retiramos el numero anterior
        $("#precioDeSuma").remove();

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
      
    });
    
  })
  
});


//registramos un solo click para que nos agregue una sola vez el texto deseado
$( "#quieroPromo10x15" ).one( "click", function( event ) {

  //obtenemos el JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable
    let mensaje=JSON.stringify(response['productos'][0]['texto'])
    
    //ponemos el texto en el array
    texto.push(mensaje);
  })

});


//registramos click del boton en la promo 10x15
$("#quieroPromo13x18").one( "click", function (e) { 

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
      <h2 id="precioModal">Una promo 13x18 $${valor}</h2> <button id="quitarProducto" style="height:auto">Eliminar Producto<i class="fas fa-times" style="font-size:10px;"></i></button> 
      
      `
    );

    //boton de retirar producto
    $("#quitarProducto").click(function () { 

      //quitamos el porducto del carrito
      $("#precioModal").remove();

      //quitamos el boton
      $("#quitarProducto").remove();

      //quitamos el producto del array
      carrito.pop()

      //mostramos el precio en la bolsa arriba a la derecha
        //retiramos el numero anterior
        $("#precioDeSuma").remove();

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
      
    });
    
  })
  
});


//registramos un solo click para que nos agregue una sola vez el texto deseado
$( "#quieroPromo13x18" ).one( "click", function( event ) {

  //obtenemos el JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable
    let mensaje=JSON.stringify(response['productos'][1]['texto'])
    
    //ponemos el texto en el array
    texto.push(mensaje);
  })

});


