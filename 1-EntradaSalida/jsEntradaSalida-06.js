/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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

