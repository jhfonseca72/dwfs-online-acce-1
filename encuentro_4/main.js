//TODO: Functions (Default parameters)

function suma(k, c) {
    return k + c;
}

let resultado = suma(10, 90);
console.log(resultado);

let resultado2 = suma(89, 89);


function filterPalabrasClaves(titulares, palbraClave) {
    const titularesFiltrados = [];
    for (const titular of titulares) {
        if (titular.includes(palbraClave)) {
            titularesFiltrados.push(titular);
        }
    }

    return titularesFiltrados;
}

const titulares = [
    "Paro: Quedan en libertad los policias investigados por muerte de Santiago Murillo",
    "Llegaron a colombia 909600 dosis de Astrazeneca",
    "Paro nacional tendría un costo económico de entre 4,8 y 6,1",
    "Cotización del dólar cerró a $3657",
    "Congreso aprobó que Medellín sea distrito de ciencia y tecnologia",
    "Ante Perú llego la hora para Colombia",
    "¿Qué debe incluir la reforma a la policia?",
    "Las iglesias abandonan a Duque y se alinean con el paro",
    "¡A enseñar en las aulas Maestros del pais deberán estar vacunados el próximo 15 de julio",
    "'Tenemos que imaginar como salvar el mundo'",
]
let resultadoFilter = filterPalabrasClaves(titulares, "Colombia");
console.log(resultadoFilter);

const frutas = [
    "manzana",
    "banana",
    "mango"
]
let resultadoFilterFrutas = filterPalabrasClaves(frutas, "ana");
console.log(resultadoFilterFrutas)

//TODO: Literal Objects, Computed properties, Constructor Functions, Classes, Box-Unbox, Getter Setter
const inmobiliaria = {
    nombre: "Acrecer",
    representanteLegal: "Pedro Arroyo",
    mostrarUrbanicacionConstruidas: function () {
        console.log("10 urbanci")
        return undefined;
    }
};

const resultadoUrban = inmobiliaria.mostrarUrbanicacionConstruidas();
console.log("resultadoUrban", resultadoUrban);


//Instance Binding
function Inmobiliaria(nombre, representanteLegal) {
    this.nombre = nombre;
    this.representanteLegal = representanteLegal;
    this.mostrarUrbanicacionConstruidas = function () {
        console.log("Mi nombre", this.nombre);
        return undefined;
    }
}

let acrecer = new Inmobiliaria("Acrecer", "Pedro Arroyo");
acrecer.nombre = "Nueva Inmo";
acrecer.mostrarUrbanicacionConstruidas();

let capital = new Inmobiliaria("Capital", "Eduardo Ernesto");
capital.mostrarUrbanicacionConstruidas();


console.log("***************************")

class Inmobiliaria2 {
    constructor(nombre, representanteLegal) {
        this.nombre = nombre;
        this.representanteLegal = representanteLegal;
    }
    mostrarUrbanicacionConstruidas() {
        console.log("Mi nombre", this.nombre);
        return undefined;
    }
}

let coninzaramos = new Inmobiliaria2("coninzaramos", "Pedro Arroyo2");
coninzaramos.mostrarUrbanicacionConstruidas();


