/*
Un grupo de x amigos piensan viajar desde Cali al Cartagena.
Averiguando en las aerolíneas más conocidas vieron que Caviana tiene una súper
PROMO (por trayecto) donde el pasaje por cada adulto tiene un valor de $20.000 y ofrece la opción
de seleccionar una maleta de bodega o un refrigerio para todos los pasajeros por solo $4.250. 
También tiene la facilidad de seleccionar ambas opciones por solo $8.500.

Dadas las condiciones anteriores, crear un programa que según la cantidad de pasajeros entregue 
como respuesta el valor total del viaje. Tenga en cuenta que la PROMO solo aplica cuando 
viajan 2 o más personas, ademas recuerde agregar el IVA del 10%
*/

var conMaleta = false;
var conRefrigerio = false;
var ambosTrayectos = true;

var pasajeros = 2;
var pasajeXAdulto = 20000;
var valorServicioAdicional = 4250;
var total = 0;

//Si viajan menos de 2 pasajeros terminamos el programa
if (pasajeros < 2) {
    alert("No aplica la promo");
    throw new Error("Termina la ejecucion");
}

//Calculamos el valor por pasajero sin servicios adicionales (maleta, refrigerio)
total = pasajeros * pasajeXAdulto;

//Maleta y Refrigerio
if (conMaleta && conRefrigerio) {
    total += (valorServicioAdicional * 2);
}
//Maleta o Refrigerio
else if (conMaleta || conRefrigerio) {
    total += valorServicioAdicional;
}
//Ni Maleta Ni Refrigerio
else {
    total = (pasajeros * pasajeXAdulto)
}

//Si selecciono ambios trayecto [(Cali - Cartagena) - (Cartagena - Cali)]
if (ambosTrayectos) {
    total *= 2;
}

//Sumamos el 10% del IVA
total += (total * 0.1);
alert("Total " + total);