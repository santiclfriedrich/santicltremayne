localStorage.setItem('carrito', JSON.stringify([]))
let divProductos = document.getElementById("divProductos")
let botonCarrito = document.getElementById("botonCarrito")
let modalBody = document.getElementById("modal-body")
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")
let parrafoCompra = document.getElementById('precioTotal')
let acumulador;

fetch('productos.json')
.then(response => response.json())
.then(dataProductos => {
   dataProductos.forEach((productoEnArray, indice)=> {
   
       divProductos.innerHTML += `
        <div class="card border-success mb-2" id="producto${indice}" style="max-width: 30rem; margin:0px;">
            <div class="card-header text-center">${productoEnArray.nombre}</div>
            <img src="../imagenes/shop/${productoEnArray.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text text-center text-success">$${productoEnArray.precio}</p>
                <p class="card-text">Stock:${productoEnArray.stock}</p>
                <div class="d-grid justify-content-center align-items-center">
                <button id="boton${indice}" class="btn btn-secondary botonshop botontext">Agregar<i class="fas fa-cart-plus fa-1x"></i></button>
                </div>
            </div>
        </div>
       `
   });

   dataProductos.forEach((productoEnArray, indice) => {
       document.getElementById(`boton${indice}`).addEventListener('click', () => {
            if(productos.find(producto => producto.nombre == productoEnArray.nombre)) {
                let index = productos.findIndex(producto => producto.nombre == productoEnArray.nombre)
                productos[index].cant++
                localStorage.setItem('carrito', JSON.stringify(productos))
            } else {
                let nuevoProducto = new Producto(productoEnArray.nombre, 
                productoEnArray.precio, productoEnArray.stock, productoEnArray.image)
                productos.push(nuevoProducto)
                localStorage.setItem('carrito', JSON.stringify(productos))
            }
            
       })
   })
})