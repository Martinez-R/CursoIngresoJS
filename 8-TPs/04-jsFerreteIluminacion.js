/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	//DECLARO LAS VARIABLES

        let lamparitas;
        let precio;
        let marca;
        let iibb;
        let importeFinal;

            //INGRESO DE LOS DATOS

                lamparitas = txtIdCantidad.value;
                marca = Marca.value;
                precio = 35;

                    //PARSEO LOS DATOS

                        lamparitas = parseInt(lamparitas);

                            //CALCULAMOS EL PRECIO FINAL

                                if(lamparitas >= 6) //COMPRA DE 6 LAMPARITAS O MAS
                                {
                                    importeFinal = lamparitas * precio * 0.5; 
                                    txtIdprecioDescuento.value = importeFinal;

                                    if(importeFinal > 120) //AUMENTO 10% DE IIBB PARA COMPRAS MAYORES A 120
                                    {
                                        iibb = importeFinal * 0.1;

                                        txtIdprecioDescuento.value = importeFinal + iibb;
                                        alert ("Usted pago: $" + iibb + " de IIBB");
                                        
                                    }
                                }


                                if(lamparitas == 5) //COMPRA DE 5 LAMPARITAS
                                {
                                    if(marca == "ArgentinaLuz")
                                    {
                                        importeFinal = lamparitas * precio * 0.6;
                                        txtIdprecioDescuento.value = importeFinal;

                                        if(importeFinal > 120) //AUMENTO 10% DE IIBB PARA COMPRAS MAYORES A 120
                                        {
                                            iibb = importeFinal * 0.1;

                                            txtIdprecioDescuento.value = importeFinal + iibb;
                                            alert ("Usted pago: $" + iibb + " de IIBB");
                                        
                                        }
                                    }  

                                    else //5 LAMPARITAS DE OTRA MARCA
                                    {
                                        importeFinal = lamparitas * precio * 0.7;
                                        txtIdprecioDescuento.value = importeFinal;

                                        if(importeFinal > 120) //AUMENTO 10% DE IIBB PARA COMPRAS MAYORES A 120
                                        {
                                            iibb = importeFinal * 0.1;

                                            txtIdprecioDescuento.value = importeFinal + iibb;
                                            alert ("Usted pago: $" + iibb + " de IIBB");
                                        
                                        }
                                    }    
                                }


                                if(lamparitas == 4) //COMPRA DE 4 LAMPARITAS
                                {
                                    if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                                    {
                                        importeFinal = lamparitas * precio * 0.75;
                                        txtIdprecioDescuento.value = importeFinal;
                                    
                                        if(importeFinal > 120) //AUMENTO 10% DE IIBB PARA COMPRAS MAYORES A 120
                                        {
                                            iibb = importeFinal * 0.1;

                                            txtIdprecioDescuento.value = importeFinal + iibb;
                                            alert ("Usted pago: $" + iibb + " de IIBB");
                                        
                                        }
                                    }

                                    else 
                                    {
                                        importeFinal = lamparitas * precio * 0.8;
                                        txtIdprecioDescuento.value = importeFinal;
                                    
                                        if(importeFinal > 120) //AUMENTO 10% DE IIBB PARA COMPRAS MAYORES A 120
                                        {
                                            iibb = importeFinal * 0.1;

                                            txtIdprecioDescuento.value = importeFinal + iibb;
                                            alert ("Usted pago: $" + iibb + " de IIBB");
                                        
                                        }
                                    }
                                }


                                if(lamparitas == 3) //COMPRA DE 3 LAMPARITAS
                                {
                                    if(marca == "ArgentinaLuz") 
                                    {
                                        importeFinal = lamparitas * precio * 0.9;
                                        txtIdprecioDescuento.value = importeFinal;

                                        if(importeFinal > 120) //AUMENTO 10% DE IIBB PARA COMPRAS MAYORES A 120
                                        {
                                            iibb = importeFinal * 0.1;

                                            txtIdprecioDescuento.value = importeFinal + iibb;
                                            alert ("Usted pago: $" + iibb + " de IIBB");
                                        
                                        }
                                    }  
                                    
                                    if(marca == "FelipeLamparas") 
                                    {
                                        importeFinal = lamparitas * precio * 0.9;
                                        txtIdprecioDescuento.value = importeFinal;

                                        if(importeFinal > 120) //AUMENTO 10% DE IIBB PARA COMPRAS MAYORES A 120
                                        {
                                            iibb = importeFinal * 0.1;

                                            txtIdprecioDescuento.value = importeFinal + iibb;
                                            alert ("Usted pago: $" + iibb + " de IIBB");
                                        
                                        }
                                    }  

                                    else 
                                    {
                                        importeFinal = lamparitas * precio * 0.95;
                                        txtIdprecioDescuento.value = importeFinal;
                                    
                                        if(importeFinal > 120) //AUMENTO 10% DE IIBB PARA COMPRAS MAYORES A 120
                                        {
                                            iibb = importeFinal * 0.1;

                                            txtIdprecioDescuento.value = importeFinal + iibb;
                                            alert ("Usted pago: $" + iibb + " de IIBB");
                                        
                                        }
                                    }
                                }

}
