/**
 * 
 */
function pedirFecha(){
	const dia = prompt("Introduce el día de tu fecha de nacimiento");
const mes = prompt("Introduce el mes de tu fecha de nacimiento");
const anyo = prompt("Introduce el anyo de tu fecha de nacimiento");
const fechaNacimiento = new Date (anyo, (mes-1), dia);

verificarEdad(fechaNacimiento);

}

function calcularEdad (fechaNacimiento){
	let fechaActual = new Date();
	let edad= fechaActual.getFullYear() - fechaNacimiento.getFullYear();
	let diferenciaMeses = fechaActual.getMonth() - fechaNacimiento.getMonth();
  
  if (
    diferenciaMeses < 0 ||
    (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
  ) {
    edad
  }
  return edad
}
function verificarEdad(fechaNacimiento){
	var edad = calcularEdad(fechaNacimiento);
if(edad >= 18){
    alert("Eres mayor de edad :D ");
}else{
    alert("Eres menor de edad :( ");
}
}

-----------------------------------------------
/**
*
*/
/*Probar el siguiente código con el script en el head y en el body. ¿Difiere en algo?*/
const ruta = document.getElementById("separado");
const fecha = new Date ();
ruta.innerHTML=("<ul><li>"+fecha.getHours()+"</li><li>"+fecha.getMinutes()+"</li></ul>")
function fhoy(){
	 const dia = new Date();
	 alert (dia);
}
function fmanyana(){
	 const dia = new Date();
	 console.log("El dia de hoy es: "+dia);
	 const manyana = new Date();
	 manyana.setDate(1);
	 console.log(" con setDate(1): "+manyana);
	 /*¿Qué hemos hecho? ¿Hemos sumado, restado u otra cosa?*/
	 const mannana= new Date();
	 mannana.setDate(dia.getDate()+1)
	 console.log("con setDate(getdate+1): " +mannana);
	 /*otra alternativa es la siguiente*/
	 const otro = new Date();
	 otro.setTime(dia.getTime()+24*60*60*1000);
	 console.log(otro);
	 /*otra alternativa para conseguir milisegundos es con Date.parse */
	 manyana.setTime(Date.parse("2024/02/02")+24*60*60*1000);
	 console.log(manyana);
	 const feb = new Date("01/03/2024");
	 console.log(feb.toString());
}


