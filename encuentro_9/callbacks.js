
const pc = {
    id: 1,
    brand: "MacBook Pro"
}

function comprarProducto(producto, callback) {
    setTimeout(() => {
        console.log("Comprando el producto", producto)
        callback("Success");
    }, 1000)
}

function verificarEstadoDeCompra(callback) {
    setTimeout(() => {
        console.log("Verificando el estado del producto")
        callback("Done");
    }, 2000)
}

function descontarInventario(callback) {
    setTimeout(() => {
        console.log("Descontando del inventario")
        callback("Discounted");
    }, 3000)
}

function enviarNotificacion(callback) {
    setTimeout(() => {
        console.log("Enviando notificacion")
        callback("Sent");
    }, 4000)
}

function guardarTrazabilidad() {
    console.log("Guardando trazabilidad")
    console.log("Fin")
}

comprarProducto(pc, resultado => {
    if (resultado === "Success") {
        verificarEstadoDeCompra(estadoDeCompra => {
            if (estadoDeCompra === "Done") {
                descontarInventario(estadoDeInventario => {
                    if (estadoDeInventario === "Discounted") {
                        enviarNotificacion(estadoDeNotificacion => {
                            if (estadoDeNotificacion === "Sent") {
                                guardarTrazabilidad();
                            }
                        })
                    }
                })
            }
        })
    }
});

/*
comprarProducto(pc)
    .then(resultado => xxxx)
    .then(estadoDeCompra => xxx)
    .then(estadoDeInventario => xxx)
    .then(estadoDeNotificacion => xxx)
    .catch(error => console.error("There was an error", error))
    .finally(() => console.log("Last statement"))
*/