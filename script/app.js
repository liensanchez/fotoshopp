
$("#buttonImpresionFotografia").click(function (e) { 
  e.preventDefault();
  $("#impresionFotografia").show();
  $("#impresionFotografia").css({
    "display":"flex",
    "flex-direction":"row",
    "justify-content":"space-around",
    "flex-wrap":"wrap"
  })
});