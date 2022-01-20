
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
  //estilo form
  
  //agrego el form utilizo loginBox. en lugar de document.boy ya que necesito agregarlo adento de ese div
  loginBox.appendChild(registro);
  //envio del formulario
    botonRegistro.addEventListener('click', function(event){
      //evitaoms que se refresque la pagina
      event.preventDefault();
      //obtenemos los datos del form
        let nombre=document.getElementById('inputNombre').value;
        let apellido=document.getElementById('inputApellido').value;
        let telefono=document.getElementById('inputNumero').value;      
    })
  
})



//creador de usuarios

