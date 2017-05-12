//selecionar formulario-conociendo el id

var formulario = document.getElementById("miFormulario");
/*seleccionar elementos de un formulario
//.elements[] devuelve un array con todos los inputs del formulario 
//getElementById("idElemento")devuelve un elemento con un id determiando
//get ElementbyTagName
//getElementeByName*/

window.onload = iniciar; // sin parentesis

function iniciar(){  //asociar un evento a la pulsacion del boton enviar
	document.getElementById("submit").addEventListener('click',validar,false); //evento click, funcion validar, true asosica al elemento boton enviar que cuando hagamos click ejecute la funcion validar
}
//validar campo nombre
function validaNombre(){ //se selecciona el elemento input que hace referencia nombre
	var elemento= document.getElementById("Nombre");
	limpiarError(elemento);
}// comprobar que el nombre este completo no vacio con una condicion
if(elemento.value == ""){
	alert("El campo no puede ser vacio");
	error(elemento);
	return false;
}else{
	return true;
}

function validaApellido(){ //se selecciona el elemento input que hace referencia nombre
	var elemento= document.getElementById("Apellido");
	limpiarError(elemento); 
}// comprobar que el apellido este completo no vacio con una condicion
if(elemento.value == ""){
	alert("El campo no puede ser vacio");
	error(elemento);
	return false
}else{
	return true;
}
function validaEmail(){
	var elemento= document.getElementById("email");
	var expRegEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	var verificar = true;
	else if(!email.value)
	{
		alert("El campo email es requerido");
		email.focus();
		verificar = false;
	}
	else if(!expRegEmail.exec(email.value))
	{
		alert("El campo email no es valido");
		email.focus();
		verificar=false;
	}


}
function validaDireccion(){
	var elemento= document.getElementById("direccion");
	limpiarError(elemento);
}// comprobar que la direccion este completo no vacio con una condicion
if(elemento.value == ""){
	alert("El campo no puede ser vacio");
	error(elemento);
	return false
}else{
	return true;
}

function validaTelefono(){ // que se un numero lo que este adentro
	var elemento = document.getElementById("Teléfono")
	if(isNaN(elemento.value)){
		alert("El campo telefono tiene que ser numerico");
		return false;
	}else{
		return true;
	}

function validacheckbox(){
 		var campoCheck = document.getElementById("checkbox") 
 		 if(!campoCheck.checked) //si no da true 
 		 	alert("Debe ser mayor de edad")
 		 return false
 		}else{
 			return true;
 		}
 	
function validar (e){  //comprobar que validar nombre es true 
 		if(validaNombre && validaApellido && validaEmail && validaDireccion && validacheckbox && confirm("pulsa aceptar si deseas enviar el formulario")){
 			return true;
 		}else{
 			e.preventDefault(); // evita que se ejecute el evento por defecto asociado a la accion
 			return true;
 		}
 	}
function error(elemento){
 		elemento.className="error";
		elemento.focus();  // ese elemento coge el foco
	}
function limpiarError(elemento){
		elemento.className="";

}

function mostrarDatos(){  // siempre me equivoco aqui . 

document.getElementById("clientes").innerHTML = valor;
document.getElementById("productos").innerHTML = valor;

}
window.onload = mostrarDatos;









