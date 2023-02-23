function mostrar()
{
    //DECLARO LAS VARIABLES
    let primerNumero;
    let segundoNumero;
    let suma;
    let resta;

    //INGRESO LOS DATOS
    primerNumero = prompt ("Ingrese un numero:");
    segundoNumero = prompt ("Ingrese otro numero");
    primerNumero = parseInt (primerNumero);
    segundoNumero = parseInt (segundoNumero);
debugger
    //IF
    if(primerNumero == segundoNumero)
    {
        alert (primerNumero + ", " + segundoNumero);
    }

    else if (primerNumero > segundoNumero)
    {
        resta = primerNumero - segundoNumero;
        alert ("La resta es: " + resta);
    }

    else
    {
        suma = primerNumero + segundoNumero;
        if(suma > 10)
        {
            alert ("La suma es: " + suma + ", y supero el 10.");
        }

        else 
        {
            alert ("La suma es: " + suma);
        }    
    }
}
