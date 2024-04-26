/**
 * 
 */
function dibuja() {
	let filas = prompt ("introduzca valor de filas:",1);
	let escrito="";
	/* si ponemos para refinar do {fila= prompt("...");
	/*   while(!number(filas) || filas<=0 )->NaN (false) */
	let fila = "";
	if (filas>0){
	for (let i =0; i<filas; i++){
		fila=fila+ "*";
		escrito=escrito+fila+"<br>";
		/*primera vez: fila=""+"*"="*";
		 escrito=""+"*"+<br>="*<br>"*/
		 /*segunda vez: fila="*"+"*"="**";
		 escrito="*<br>"+"**"+<br>="*<br>**<br>" */ 
		/*tercera vez: fila="**"+"*"="***";
		 escrito="*<br>**<br>"+"***"+<br>="*<br>**<br>***<br>" */ 
		
	}
	
	/* <p> * <br> ** <br>... </p> */
	
