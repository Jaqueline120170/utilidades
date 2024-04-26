package servicios;

import java.util.Scanner;

/**
 * Implementacion de la interfaz operativa
 * @author jrt -28/11/2023
 */
public class OperativaImplementacion implements OperativaInterfaz {
	
	public int generarNumero(){
		double aleatorio= Math.random()*100;
		int aleatorioEntero=(int) aleatorio;
		
		return aleatorioEntero;
	}

	@Override
	public boolean validarNumero(int numeroAdivinar) {
		Scanner sc = new Scanner(System.in);
		boolean control = false;
		System.out.println("Intenta adivinar el número");
		int numeroUsuario = sc.nextInt();
		if(numeroUsuario==numeroAdivinar) {
			control=true;
		}
		return false;
	}

}
