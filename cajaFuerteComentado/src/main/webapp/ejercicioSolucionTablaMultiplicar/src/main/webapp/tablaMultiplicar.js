/**
 * 
 */
/*tabla de multiplicar normal, del 0 al 10 siempre*/
function normal() {
	let num;
	do
		num = prompt("introduce el número a multiplicar: ", 0);
	while (!Number(num))
	escribeTit(num)
	escribeTabla(num,10)
}
function personalizada(){
	let num, can;
	do
		num = prompt("introduce el número a multiplicar: ", 0);
	while (!Number(num))
	
	do
		can = prompt("introduce el número de veces a multiplicar: ", 0);
	while (!Number(can))
	
	
	escribeTit(num)
	escribeTabla(num,can)
}
function escribeTit(valor){
	document.getElementById("titulo").innerHTML=("Tabla de multiplicar del "+valor)
}
function escribeTabla(valor,cantidad){
	
	const ruta = document.getElementById("tabla");
	let resultado = 0;
	ruta.innerHTML=""
	for (i=0;i<=cantidad;i++){
		resultado = valor * i;
		ruta.innerHTML+=("<tr><td>"+valor+"x"+i+"</td>"+"<td>"+resultado+"</td></tr>")
	}
	
	
}

