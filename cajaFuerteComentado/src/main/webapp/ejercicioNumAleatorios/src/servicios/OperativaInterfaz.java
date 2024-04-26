package servicios;
/**
 * catalogo de mètodos que gestionan la operativa del juego
 * @author jrt -27-11-2023
 */


public interface OperativaInterfaz {
	/**
	 * genera un numero aleatorio a partir de la clase math
	 * @return un numero aleatorio entre 0 y 100
	 */
	public int generarNumero();
	
	public boolean validarNumero(numeroAdivinar);

}
