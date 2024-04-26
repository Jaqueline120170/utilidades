package controladores;

import servicios.OperativaInterfaz;

public class Inicio {

	public static void main(String[]args) {
		
		OperativaInterfaz oi = new OperativaImplementacion();
		
		int numeroAdivinar=oi.generarNumero();
	}
}
