/**
 * 
 *//**
*  Caja Fuerte
*/
/*Declaración de un objeto, este será los datos a introducir para abrir la caja fuerte*/
var dados = {
	pr: 1,
	sc: 2,
	ter: 3
}
/*Declaración de un objeto, aquí se guardaran los valores dados por el usuario*/
var user = {
	pr: 0,
	sc: 0,
	ter: 0
}
/*Declaración de un array, en él aparecerá lo que se desea guardar en la caja fuerte (texto y alumnos) y el número de intentos para abrirla*/
var secreto = ["texto", "usuarios", 3];
/*creación de la función con la que se va a trabajar*/
function caja() {
	/*petición de valores*/
	alert("Introduce los valores correctos para continuar.");
	user.pr = prompt("Primer valor:");
	user.sc = prompt("Segundo valor:");
	user.ter = prompt("Tercer valor:");
	/*comparación, si los datos recibidos son iguales a los deseados se accede dentro*/
	if (user.pr == dados.pr && user.sc == dados.sc && user.ter == dados.ter) {
		/*reseteo de los intentos realizados*/
		secreto[2] = 3;
		/*escritura en el HTML, en el ID: p2*/
		document.getElementById("p2").innerHTML = (secreto[0] + '<br>' + secreto[1] + '<br>' + '<button onclick="valores()">Valores</button><button onclick="change()">cambiar código</button>');
	}
	else {
		/*bajamos los intentos*/
		secreto[2]--;
		/*si hemos llegado a perder todos los intentos*/
		if (secreto[2] <= 0) {
			/*document.write borra toda la página si es lanzada en una función*/
			document.write('<h1>Bloqueada</h1>');
		}
		else {
			/*escribimos en el ID: p2 que se ha producido un Fallo*/


document.getElementById("p2").innerHTML = ('<h1>Fallaste</h1>' + secreto[2]);
		}


	}
}
/*Para mostrar los valores*/
function valores() {
	console.log("primero " + dados.pr);
	console.log("segundo " + dados.sc);
	console.log("tercero " + dados.ter);
}
/*para cambiar los valores*/
function change() {
	dados.pr = prompt("Nuevo primer valor:");
	dados.sc = prompt("Nuevo segundo valor:");
	dados.ter = prompt("Nuevo tercero valor:");
	alert("Valores cambiados satisfactoriamente");
	document.getElementById("p2").innerHTML = (' ');
}
