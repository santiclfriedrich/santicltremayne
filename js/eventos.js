//Calcular el total de la compra
function compraTotal(productosDelStorage) {
    acumulador = 0;
    productosDelStorage.forEach((productoCarrito) => {
        acumulador += productoCarrito.precio * productoCarrito.cant
    })

    if(acumulador == 0) {
        parrafoCompra.innerHTML = ""
        modalBody.innerHTML = "<p>No hay productos agregados en el carrito </p>" 
    } else {
        parrafoCompra.innerHTML = `Importe total $${new Intl.NumberFormat("de-DE").format(acumulador)}`
    }
   
}

//Cargar las funciones al modal (carrito)
function cargarEventosModal(productosDelStorage) {

    productosDelStorage.forEach((productoCarrito, indice) => {
        document.getElementById(`botonEliminar${indice}`).addEventListener('click', () => {
            console.log(`Producto ${productoCarrito.nombre} eliminado`)
            document.getElementById(`productoCarrito${indice}`).remove()
            productos.splice(indice, 1)
            localStorage.setItem('carrito', JSON.stringify(productos))
            cargarProductosModal(JSON.parse(localStorage.getItem('carrito')))
        })
    })

    productosDelStorage.forEach((productoCarrito, indice) => {
        document.getElementById(`sum${indice}`).addEventListener('click', () => {
            console.log()
            if(productos[indice].cant < productos[indice].stock) {
                productos[indice].cant++
                localStorage.setItem('carrito', JSON.stringify(productos))
                cargarProductosModal(JSON.parse(localStorage.getItem('carrito')))
                
            }
        })
    })

    productosDelStorage.forEach((productoCarrito, indice) => {
        document.getElementById(`rest${indice}`).addEventListener('click', () => {
            console.log()
            if(productos[indice].cant > 1) {
                productos[indice].cant--
                localStorage.setItem('carrito', JSON.stringify(productos))
                cargarProductosModal(JSON.parse(localStorage.getItem('carrito')))
            }
        })
    })
    
}

//Cargar los productos al modal con imágenes (carrito)
function cargarProductosModal(productosDelStorage) {

    modalBody.innerHTML = " "  
    productosDelStorage.forEach((productoCarrito, indice) => {
        
        modalBody.innerHTML += `
            <div class="card border-primary mb-3" id ="productoCarrito${indice}" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="../imagenes/shop/${productoCarrito.image}" class="img-fluid rounded-start" alt="...">
                </div>
            <div class="col-md-8">
                <div class="card-body">
               
                <h5 class="card-title">${productoCarrito.nombre}</h5>
                <div class="row">
                    <p class="card-text">Cantidad: ${productoCarrito.cant}</p>
                    <button class= "btn btn-outline-secondary" id="sum${indice}">aumentar<i class="fas fa-plus"></i></button>
                    <button class= "btn btn-outline-secondary" id="rest${indice}">disminuir<i class="fas fa-minus"></i></button> 
                </div>
                <p class="card-text">$${new Intl.NumberFormat("de-DE").format(productoCarrito.precio * productoCarrito.cant)}</p> 
                <button class= "btn btn-danger" id="botonEliminar${indice}">eliminar<i class="fas fa-trash-alt"></i></button>
            </div>
            </div>
            </div>
        </div>
    `
})
//aplicar las funciones/eventos del carrito
cargarEventosModal(productosDelStorage)
compraTotal(productosDelStorage)
}

//agregar los productos del json al carrito
botonCarrito.addEventListener('click', () => {
    let productosDelStorage = JSON.parse(localStorage.getItem('carrito'))

    cargarProductosModal(productosDelStorage)
    
})

//botón de acción al finalizar la compra
botonFinalizarCompra.addEventListener('click', () => {
    localStorage.setItem('carrito', JSON.stringify([]))
    swal("Gracias por su compra!", "Los productos serán procesados y enviados", "success");
})