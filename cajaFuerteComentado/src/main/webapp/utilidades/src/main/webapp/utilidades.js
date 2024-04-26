
ARRAYS
let pagos = [900, 800, 700, 600, 850, 751];
/*Quiero unirlos*/
const texto = pagos.join ("+");
console.log(texto);
/*Quiero un string/num concreto de un array*/
let num = pagos.find(function (numero){
	if (numero%2!=0)
	return numero
}
)
console.log(num);
/*otra manera*/
num = pagos.find((numero) => numero % 2 != 0
)
console.log(num);
/*Quiero un resultado*/
let sum = pagos.reduce(function(total,numero){
	total+=numero;
	return total
},0)
console.log(sum);
/*otra manera*/
sum = pagos.reduce((total,numero)=>total+=numero,0)
console.log(sum);
/*resultados booleanos*/
/*incluye*/
console.log(pagos.includes(500));
/*existe alguno que...*/
let existe = pagos.some(function(numero){
	if(numero%2!=0){
		return numero
	}
})
console.log(existe);
/*forma abreviada*/
existe= pagos.some((numero)=>numero%2!=0);
console.log(existe);
/*cumplen todos...*/
let cumple = pagos.every(function(numero){
	if(numero%2!=0){
		return numero
	}
})
console.log(cumple);
/*forma abreviada*/
cumple= pagos.every((numero)=>numero%2!=0);
console.log(cumple);
/*filtrar*/
let aux = pagos.filter(function(numero){
	if(numero>=800)
	return numero
})
console.log(aux);
/*o también*/
aux = pagos.filter((numero)=>numero>=800)
console.log(aux);
/*modificarlo*/
aux= pagos.map(function(numero){
	return numero/100
});
console.log(aux);
/*o bien*/
aux= pagos.map((numero)=>numero/100);
console.log(aux);
/*cuidado! las siguientes funciones modifican el array, nunca lo hagais sobre un array si quereis conservarlo*/
/*sustituirlo entero*/
aux= aux.fill(1);
console.log(pagos);
/*añadir valores*/
const pagos2=[500, 550];
aux= pagos;
/*concat NO la modifica*/
aux=pagos.concat(pagos2);
console.log(aux);
/*observa la diferencia*/
aux=pagos.concat(); /*ayuda para no modificar pagos*/
aux.push(pagos2); /*no podeis hacer una igualdad*/
console.log(aux);
/*push normal*/
aux=pagos.concat();
aux.push(500);
console.log(aux);
/*observa la diferencia*/
aux= pagos.concat(500);
console.log(aux);
/* aquí no hay diferencia */
/*Quitar*/
aux=pagos.slice(4);
console.log("quitar: "+aux);
aux=pagos.concat();
aux.pop();
console.log("quitar(pop): "+aux);

-------------------------------------------------------

GUARDAR
/*Creó dos elementos diferentes para usar el guardado*/
const elemento1 = "colegio";
const elemento2 = {
	 marca: "altair",
	 clase: "csi",
	 anyo: 2024
}
/*para guardar un elemento (string)*/
localStorage.setItem("string", elemento1);
/*para guardar otros elementos que no sean string*/
localStorage.setItem("otros", JSON.stringify(elemento2));
/*para leer un elemento (string)*/
const dataStorage1 = localStorage.getItem("string");
console.log(dataStorage1);
/*lo que ocurre con otros elementos que no son string*/
const dataStorageAux = localStorage.getItem("otros");
console.log (dataStorageAux)
/*para leer un elemento (no string) */
const dataStorage2 = JSON.parse(localStorage.getItem("otros"));
console.log(dataStorage2);

--------------------------------------
PORTERO DISCOTECA

Se nos pide tener un script que evalúe si un usuario es o no mayor de edad

*cálculo de cuántos milesegundos son 18 años aprox. */
const mayorEdad = 18 * 365 * 24* 60 *60 *1000;
function portero (){
	/*pedimos que nos indique su fecha de nacimiento*/
		let nacimiento;
		do{
			nacimiento=prompt("introduzca su fecha de nacimiento, en el formato indicado","dia/mes/año");
			nacimiento=nacimiento.split("/");
			
		}
		/*comprobar que todos son números*/
		while(!nacimiento.every(function (numero){
			if(Number(numero))
				return true
		}))
		const fecha = new Date(nacimiento[2], nacimiento[1]-1, nacimiento[0]);
	 	const hoy = new Date()
	 	console.log (hoy-fecha);
	 	/*otra opción es const dif = new Date (hoy.getTime()-fecha.getTime())
 if (dif.getFullYear()>18+1970)
alert(“puedes entrar”)
else
alert(“eres menor”)*/
	 	if ((hoy.getTime()-fecha.getTime())>=mayorEdad)
	 		alert("Adelante")
	 	else
	 		alert("Vuelva más adelante")
	
	
}
------------------------------------------------
AHORCADO

/**
* Juego del ahorcado modo wordle
*/
var letras = []
var palabra = []
var adivinado = []
/*guardar palabra a pedir adivinar*/
function guardar() {
	palabra = prompt ("introduce la palabra a adivinar");
	/*creamos un array lleno de * que sea igual a la longitud de la palabra*/
	adivinado = palabra.split("");
	adivinado.fill("*");
	/*creo array de la palabra si igualase estaría apuntando al mismo lugar y de modificar uno modificaría el otro*/
	palabra=palabra.split("");
	/*reseteo todas las letras dichas antes*/
	letter = []
	/*muestro los cuadros para que el usuario vea la longitud de la palabra*/
	mostrar()
}
/*funcion pedir letra*/
function pedir() {
	let letter;
	do
		letter=prompt("introduce una letra")
	while(Number(letter)||letter.length>1||repe(letter)||letter=="")
	/*se analiza si es un número O si son varias letras O si está repetida O si está vacía*/
	
	/*añado la letra dicha al array de letras para que no se pueda repetir mas*/
	letras.push(letter);
	
	/*ahora compruebo si se encuentra dentro de la palabra*/
	comprobar (letter);	
}
/*comprueba la letra, si es correcta usa mostrar*/
function comprobar(letra){
	/*recorro la palabra*/
	for (i=0; i<palabra.length; i++){
		/*si es igual esa posición a la letra dicha*/
		if (palabra[i]==letra){
			alert ("has acertado");
			adivinado[i]=letra;
			mostrar()
			/*si ya no hay * en adivinado, el juego ha terminado*/
			if (!adivinado.some((valor)=>valor=="*"))
				alert("has ganado, la palabra era: "+palabra.join(""));
		}
	}
	if (!palabra.some((valor)=>valor==letra))
		alert("has fallado")
}
/*funcion mostrar en pantalla*/
function mostrar() {
  let texto=""
  adivinado.forEach(function (i) {
		if (i != "*")
			texto = texto + '<p style="background-color:green;margin-right:5%;padding:0.5rem;border:solid black;font-size:2rem;">' +i+ "</p>"
		else
			texto = texto + '<p style="background-color:red;margin-right:5%;padding:0.5rem;border:solid black;font-size:2rem;color:red;"> x</p>'
	 })
	
	 document.getElementById("palabra").innerHTML=(texto)
}
/*funcion comprobar repetido*/
function repe(letra) {
	return letras.some((valor) => letra == valor)
}


