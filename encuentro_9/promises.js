
const pc = {
    id: 1,
    brand: "MacBook Pro"
}

function comprarProducto(producto) {
    console.log("Comprando el producto", producto)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Success");
        }, 1000)
    });
}

function verificarEstadoDeCompra() {
    console.log("Verificando el estado del producto")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done");
        }, 2000)
    });
}

function descontarInventario() {
    console.log("Descontando del inventario")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Discounted");
        }, 3000)
    });
}

function enviarNotificacion() {
    console.log("Enviando notificacion")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Sent");
        }, 4000)
    });
}

function guardarTrazabilidad() {
    console.log("Guardando trazabilidad")
}

comprarProducto(pc)
    .then(resultado => resultado === "Success" ? verificarEstadoDeCompra() : undefined)
    .then(estadoDeCompra => estadoDeCompra === "Done" ? descontarInventario() : undefined)
    .then(estadoDeInventario => estadoDeInventario == "Discounted" ? enviarNotificacion() : undefined)
    .then(estadoDeNotificacion => estadoDeNotificacion === "Sent" ? guardarTrazabilidad() : undefined)
    .catch(error => console.error("There was an error", error))
    .finally(() => console.log("Last statement"))

