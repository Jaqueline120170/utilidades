/**
 * 
 */
 function calcularValorAbsoluto() {
            
            var numero = parseFloat(document.getElementById("numeroUsuario").value);

           
            var valorAbsoluto = Math.abs(numero);

          
            document.getElementById("resultado").innerHTML = "El valor absoluto de " + numero + " es " + valorAbsoluto;
            }