/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
let maximo;
let minimo;

contadorIntentos = 0;
maximo = 100;
minimo = 1;

function comenzar()
{
    let numero;
    numero = txtIdNumero.value;
    numeroSecreto = math.round(math.random()*(maximo - minimo) + minimo);
    console.log (numeroSecreto);
}

function verificar()
{
	contadorIntentos = contadorIntentos + 1;

  if (numero === numeroSecreto)
  {
      alert("Usted gano en: " + contadorIntentos + " intentos.");
  }

  
}