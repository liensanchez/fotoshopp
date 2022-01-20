
//registro de un nuevo cliente
let registrarse = document.getElementById('registrarse');
registrarse.addEventListener('click', function(){
  //luego del click creamos un form con datos basicos
  let registro = document.createElement('form');
  //editamos el form
  registro.innerHTML = `
  <input placeholder="nombre" type="text" id="inputNombre"></input>
  <input placeholder="apellido" type="text" id="inputApellido"></input>
  <input placeholder="numero" type="number" id="inputNumero"></input>
  <button type="sumbit" id="botonRegistro">Registrarse!</button>
  `;

  //agrego el form utilizo loginBox. en lugar de document.boy ya que necesito agregarlo adento de ese div
  loginBox.appendChild(registro);
  //envio del formulario
    botonRegistro.addEventListener('click', function(event){
      //evitaoms que se refresque la pagina
      event.preventDefault();
      //obtenemos los datos del form
        let nombre = document.getElementById('inputNombre').value;
        let apellido = document.getElementById('inputApellido').value;
        let telefono = document.getElementById('inputNumero').value;
      //los guardamos en el Storage      
      localStorage.setItem('nombre', nombre);
      localStorage.setItem('apellido', apellido);
      localStorage.setItem('numero', telefono);
    })
})
//ingreso de un cliente
let ingresar = document.getElementById('ingresar');
ingresar.addEventListener('click', function(){
  //tomamos los datos para compararlos con los del storage
  let usuario = document.createElement('form');
  //editamos el form
    usuario.innerHTML=`
    <input placeholder="nombre" type="text" id="inputNombre"></input>
    <input placeholder="numero" type="number" id="inputNumero"></input>
    <button type="sumbit" id="botonIngreso">Ingresar!</button>
    `;
    //agregamos el form
    loginBox.appendChild(usuario);
    //enviamos el formulario
      botonIngreso.addEventListener('click', function(event){
        //evitamos el refresco de la pagina
        event.preventDefault();
        //obtenemos los datos del form
        let nombre = document.getElementById('inputNombre').value;
        let telefono = document.getElementById('inputNumero').value;
        //los comparamos con lo almacenado en el storage
        if ((nombre == localStorage.nombre)&&(telefono == localStorage.telefono)) {
          alert("Bienvenido "+localStorage.nombre);
        }
          else if (nombre != localStorage.nombre){
            alert("Usted no se registro correctamente");
          }
          else{
            alert("Usted debe registrarse")
          }
        //corroboramos el numero de telefono
        if (telefono != localStorage.telefono){
          alert("el numero de telefono no coincide");
        }
      })

})

//creacion de usuario cmo objeto
class Usuario{
  constructor(nombre, apellido, numero){
    this.nombre = nombre;
    this.apellido = apellido;
    this.numero = numero;
  }
}
//nuevo usuario
const usuario1 = new Usuario(localStorage.nombre, localStorage.apellido, localStorage.telefono);

//array de usuarios
const listaCliente = [];
listaCliente.push(Usuario);
