//Desafio 6 - Santiago Claros Friedrich

// Variables y objetos
let totalPrendas = 0,
    totalPrecio = 0;


let prendas = [

    {   'nombre': 'Oversized Negra',
        'precio': 1760,
        'cantidad': 0,
        'marca': 'Heiston',
        'talle': 'M',
    },

    {   'nombre': 'Buzo Salmón',
        'precio': 4600,
        'cantidad': 0,
        'marca': 'Straight',
        'talle': 'XL',
    },

    {   'nombre': 'Chino Azul',
        'precio': 5300,
        'cantidad': 0,
        'marca': 'Tremayne',
        'talle': 'S',
    }
];


// Limite de productos a agregar (25)
function addProduct() {
    totalPrendas = totalPrendas + 1;
    if (totalPrendas == 25) {
        alert("El carrito de compras está lleno");
    }
}

// Agregar producto : Oversized negra
function addProduct1() {
    prendas[0].cantidad = prendas[0].cantidad + 1;
    console.log('Oversized Negra agregada exitosamente al carrito');
}

// Agregar producto : Buzo Salmón
function addProduct2() {
    prendas[1].cantidad = prendas[1].cantidad + 1;
    console.log('Buzo Salmón agregado exitosamente al carrito');
}

// Agregar producto : Chino Azul
function addProduct3() {
    prendas[2].cantidad = prendas[2].cantidad + 1;
    console.log('Chino Azul agregado exitosamente al carrito');
}

// Información detallada sobre un producto
function infOversized() {
    console.log('Oversized Negra:\n');
    console.log(prendas[0]);
}

// Información detallada sobre un producto
function infBuzoSalmon() {
    console.log('Buzo Salmón:\n');
    console.log(prendas[1]);
}

// Información detallada sobre un producto
function infChinoAzul() {
    console.log('Chino Azul:\n');
    console.log(prendas[2]);
}

// Calculo individual del precio de los productos y Precio Total de cada variable de los productos
function totalCarrito() {
    prendas[0].precio = prendas[0].precio * prendas[0].cantidad;
    prendas[1].precio = prendas[1].precio * prendas[1].cantidad;
    prendas[2].precio = prendas[2].precio * prendas[2].cantidad;

    precioTotal = prendas[0].precio + prendas[1].precio + prendas[2].precio;
}

// Muestra en consola la cantidad y precio de la compra realizada
function verCarrito() {
    // funcion que suma el precio total de la compra
    totalCarrito();

    console.log("\nEl total de su compra de la prenda Oversized Negra es de: " + prendas[0].cantidad);
    console.log("El valor total de su compra Oversized Negra es de: $" + prendas[0].precio);

    console.log("\nEl total de su compra de la prenda Buzo Salmón es de: " + prendas[1].cantidad);
    console.log("El valor total de su compra Buzo Salmón es de: $" + prendas[1].precio);

    console.log("\nEl total de su compra de la prenda Chino Azul es de: " + prendas[2].cantidad);
    console.log("El valor total de su compra Chino Azul es de: $" + prendas[2].precio);

    alert("\n El monto total de su compra es $" + totalPrecio);
}

// Reset del carrito con alerta y aviso en consola
function vaciarCarrito() {
    prendas[0].cantidad = 0;
    prendas[1].cantidad = 0;
    prendas[2].cantidad = 0;

    prendas[0].precio = 1760;
    prendas[1].precio = 4600;
    prendas[2].precio = 5300;
    
    totalProductos = 0;
    totalPrecio = 0;
    alert("Vaciaste tu carrito de compras");

    console.log("\nEl total de productos en su carrito es: " + totalPrendas);
}

