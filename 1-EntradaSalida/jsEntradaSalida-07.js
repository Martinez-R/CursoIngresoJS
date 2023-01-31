/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numuno;

	let numdos;

	let enterouno;

	let suma;
	
		numuno = txtIdNumeroUno.value;

		numdos = txtIdNumeroDos.value;

		enterouno = parseInt (numuno);

		enterodos = parseInt (numdos);

		suma = enterouno + enterodos;

		alert ("La suma es: " + suma);
}

function restar()
{
	let numuno;

	let numdos;

	let enterouno;

	let resta;
	
		numuno = txtIdNumeroUno.value;

		numdos = txtIdNumeroDos.value;

		enterouno = parseInt (numuno);

		enterodos = parseInt (numdos);

		resta = enterouno - enterodos;

		alert ("La resta es: " + resta);
}

function multiplicar()
{ 
	let numuno;

	let numdos;

	let enterouno;

	let producto;
	
		numuno = txtIdNumeroUno.value;

		numdos = txtIdNumeroDos.value;

		enterouno = parseInt (numuno);

		enterodos = parseInt (numdos);

		producto = enterouno * enterodos;

		alert ("La multiplicación es: " + producto);
}


function dividir()
{
	let numuno;

	let numdos;

	let enterouno;

	let cociente;
	
		numuno = txtIdNumeroUno.value;

		numdos = txtIdNumeroDos.value;

		enterouno = parseInt (numuno);

		enterodos = parseInt (numdos);

		cociente = enterouno / enterodos;

		alert ("La división es: " + cociente);
}

