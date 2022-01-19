
let hidrogel = prompt("¿cuantos Hidrogel?");
let funda = prompt("¿cuantas fundas?");
alert("Se han agregado " + hidrogel + " Hidrogel y " + funda + " fundas a su pedido");
/*Reemplace las variables con los precios directamente a la funcion de sumar productos Y RETIRE LA FUNCION SUMAR PRODUCTOS Q SE REPETIA
let hg = 1200 ;
let tpu =800;

function sumarProductos() {
  let Total = (1200*hidrogel) + (800*funda) ;
  return Total;
}*/
let compraTotal =((1200*hidrogel) + (800*funda));
alert("El total de tu compra es de $" + compraTotal);

function saludar() {
  let nombre = prompt("Ingresa tu nombre:");
  /*RETIRO LA VARIABLE DE APELLIDO PARA REDUCIR PREGUNTAS
  let apellido = prompt("Ingresa tu apellido:");*/
  alert("Gracias por tu compra " + nombre );
}
saludar();