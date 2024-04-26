/**
 * 
 */
var num = 0; /*números pulsados*/
var texto = []; /*cadena de texto de lo introducido*/
var total = 0;
var cuenta = 0;
const operador = ["=", "+", "-", "x", "/"];
/*añadir un número*/
function anadir(numero) {
	num = num * 10 + numero;
	texto.push(numero);
	escritura()
}
function quitar() {
	if (signo()) {
		num = total;
		cuenta = 0;
	}
	else {
		num = Math.trunc(num / 10);
	}
	texto.pop()
	escritura()
}
function signo() {
	if (Number(texto[texto.length - 1])|| texto.length==0)
		return false
	else
		return true
}
function escritura() {
	document.getElementById("resultado").innerHTML = texto.join("")
}
function operacion(valor) {
	/*si no se introducen números se cambia el valor de la operación*/
	if (signo()) {
		texto.pop();
		cuenta = valor;
	}
	else {
		if (cuenta == 0) {  /*si no hay operación antes*/
			console.log(num)
			total = num
			num = 0
			cuenta = valor;
		}
		else {
			resultado()
		}
	}
	texto.push(operador[valor])
	escritura()
}
function resultado() {
	switch (cuenta) {
		case 0:
			total = num;
			num = 0;
			texto = []
			document.getElementById("resultado").innerHTML = total;
			break
		case 1:
			total += num;
			num = 0;
			texto = []
			document.getElementById("resultado").innerHTML = total;
			break
		case 2:
			total -= num;
			num = 0;
			texto = []
			document.getElementById("resultado").innerHTML = total;
			break
		case 3:
			total *= num;
			num = 0;
			texto = []
			document.getElementById("resultado").innerHTML = total;
			break
		case 4:
			if (num != 0)
				total /= num;
			else
				alert("error, resultado infinito")
			num = 0;
			texto = []
			document.getElementById("resultado").innerHTML = total
			break
	}
	cuenta = 0
}
