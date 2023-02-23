function mostrar()
{
    //DECLARO LAS VARIABLES
    let nombreTitular;
    let lugar;
    let temporada;
    let cantidadDias;
    let importeViaje;
    let alturaPasajero;
    let pesoPasajero;
    let sexoPasajero;
    let equipaje;
    let modoPago;
    let contadorPuertoMadryn;
    let contadorVillaGessel;
    let contadorCordoba;
    let contadorTemporadaBaja;
    let contadorTemporadaAlta;
    let contadorSexoF;
    let contadorSexoM;
    let contadorSexoNb;
    let respuesta = "Si";

    //PARSEO DE DATOS NUMERICOS
    cantidadDias = parseInt (cantidadDias);
    importeViaje = parseFloat (importeViaje);
    alturaPasajero = parseFloat (alturaPasajero);
    pesoPasajero = parseFloat (pesoPasajero);
 
    //INGRESO DE DATOS

    while (respuesta == "Si") //REPETIR EL PROGRAMA HASTA QUE NO HAYA MAS VIAJEROS
    {
        let finalizarLugar = 0;
        let finalizarTemporada = 0;
        let finalizarCantidadDias = 0;
        let finalizarImporteViaje = 0;
        let finalizarAlturaPasajero = 0;
        let finalizarPesoPasajero = 0;
        let finalizarSexo = 0;

        nombreTitular = prompt ("Ingrese el nombre del titular:"); //PIDE NOMBRE TITULAR
     
    do // PREGUNTA EL LUGAR A VIAJAR
    {
        lugar = prompt ("Ingrese el lugar donde va a viajar:");
        switch (lugar)
        {
             case "Puerto Madryn":
                 contadorPuertoMadryn = contadorPuertoMadryn + 1;
                 finalizarLugar = 1;
                break;
 
             case "Villa Gessel":
                 contadorVillaGessel = contadorVillaGessel + 1;
                 finalizarLugar = 1;
                 break;
         
             case "Cordoba":
                 contadorCordoba = contadorCordoba + 1;
                 finalizarLugar = 1;
                 break;
 
             default:
                 alert("No hay disponibilidad en este destino, por favor ingrese otro:");
                 break;
        }
    }
    while (finalizarLugar == 0)

    //TEMPORADA EN LA QUE VIAJA
    while (finalizarTemporada == 0)
    {
        temporada = prompt ("En que temporada viaja? (Baja o Alta)");
        if (temporada == "Baja")
        {
            contadorTemporadaBaja = contadorTemporadaBaja + 1;
            finalizarTemporada = 1;
        }

        else if ( temporada == "Alta")
        {
            contadorTemporadaAlta = contadorTemporadaAlta + 1;
            finalizarTemporada = 1;
        }
    
        else 
        {
         alert ("Error, ingrese una temporada valida por favor...");
        }
    }
    
    while (finalizarCantidadDias == 0) //CANTIDAD DE DIAS QUE DURA EL VIAJE
    {
        cantidadDias = prompt ("Ingrese la duracion del viaje (en días):");
        if (cantidadDias > 0)
        {
            finalizarCantidadDias = 1;
        }

        else
        {
            alert ("Ingrese una cantidad de dias validos.");
        }
    }

    while (finalizarImporteViaje == 0) //IMPORTE DEL VIAJE
    {
        importeViaje = prompt ("Ingrese el importe del viaje (en $ Argentinos):");
        if (importeViaje > 0)
        {
            finalizarImporteViaje = 1;
        }

        else
        {
            alert ("Ingrese un importe valido.");
        }
    }

    while (finalizarAlturaPasajero == 0) //IMPORTE DEL VIAJE
    {
        alturaPasajero = prompt ("Ingrese la altura del pasajero (en cm):");
        if (alturaPasajero > 0)
        {
            finalizarAlturaPasajero = 1;
        }

        else
        {
            alert ("Ingrese una altura valida.");
        }
    }

    while (finalizarPesoPasajero == 0)
    {
        pesoPasajero = prompt ("Ingrese el peso del pasajero (en kg):");
        if (pesoPasajero > 0)
        {
            finalizarPesoPasajero = 1;
        }

        else
        {
            alert ("Ingrese un peso valido.")
        }
    }

    while (finalizarSexo == 0)
    {
        sexoPasajero = prompt ("Ingrese el sexo del pasajero: (F - M - NB)");
        switch (sexoPasajero)
        {
            case "F":
                contadorSexoF = contadorSexoF + 1;
                finalizarSexo = 1;
                break;
            
            case "M":
                contadorSexoM = contadorSexoM + 1;
                finalizarSexo = 1;
                break;

            case "NB":
                contadorSexoNb = contadorSexoNb + 1;
                finalizarSexo = 1;
                break;

            default:
                alert ("Ingrese un sexo valido.");
                break;
        }
    }

  





    respuesta = prompt ("Hay otro viajero?");
    }
}
