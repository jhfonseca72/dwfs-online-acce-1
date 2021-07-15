
import products from './products.js'
//TODO fns returning promises
function obtenerProductos() {
    const response = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    });
    return response;
}

console.log("obtenerProductos()", obtenerProductos());

obtenerProductos().then(function (products) {
    console.log("Mis Productos", products)
});

//TODO async fns return a promise value
async function obtenerProductosAsync() {
    return products;
}

console.log("obtenerProductosAsync()", obtenerProductosAsync());

obtenerProductosAsync().then(function (products) {
    console.log("Mis Productos 2", products)
});

function obtenerProductosNormal() {
    return products;
}

console.log("obtenerProductosNormal()", obtenerProductosNormal());

//TODO call async functions
const productosResultado = await obtenerProductosAsync();
console.log("productosResultado", productosResultado);



//TODO: Programo
const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200");
const data = await response.json();
console.log(data);

//pintarPokemons();
//mostarBanner(data);

const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=300")
const data = await response.json();
console.log(data);

fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200")
    .then(response => {
        console.log(response);
        return response.json()
    })
    .then(data => {
        console.log(data);
    })


//TODO: Promise.all
const resultadoDeBusqueda = fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200")
    .then(response => response.json());

const pokemonLadoDerecho = fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200")
    .then(response => response.json());

await Promise.all([resultadoDeBusqueda, pokemonLadoDerecho])
