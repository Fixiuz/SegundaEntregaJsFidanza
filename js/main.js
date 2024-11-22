// Array de productos como objetos con stock
const productos = [
    { id: 1, nombre: 'Aceite Esencial de Eucalipto', precio: 500, stock: 10 },
    { id: 2, nombre: 'Aceite Esencial de Manzanilla', precio: 780, stock: 5 },
    { id: 3, nombre: 'Aceite Esencial de Romero', precio: 350, stock: 8 }
];

// Opciones de envío
const opcionesEnvio = [
    { id: 1, destino: 'Buenos Aires', costo: 200 },
    { id: 2, destino: 'Córdoba', costo: 500 },
    { id: 3, destino: 'Mendoza', costo: 600 },
    { id: 4, destino: 'Neuquén', costo: 800 }
];

// Función para mostrar productos y precios
function mostrarProductos() {
    let listaProductos = 'Productos disponibles:\n';
    productos.forEach(producto => {
        listaProductos += `${producto.id} - ${producto.nombre} - Precio: $${producto.precio} - Stock: ${producto.stock}\n`;
        console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio} - Stock: ${producto.stock}`);
    });
    alert(listaProductos);
}

// Función para calcular el precio final con IVA y envío
function calcularPrecioFinal(precio, costoEnvio) {
    const IVA = 0.21;
    return precio * (1 + IVA) + costoEnvio;
}

// Función para validar la selección del producto
function seleccionValidaProducto(seleccionMenu) {
    while (isNaN(seleccionMenu) || seleccionMenu < 1 || seleccionMenu > productos.length) {
        alert('Opción inválida');
        seleccionMenu = parseInt(prompt('Seleccione un producto:\n' + opcionesMenuProducto));
    }
    return seleccionMenu;
}

// Función para validar la cantidad deseada
function validarCantidad(stock) {
    let cantidad = parseInt(prompt(`¿Cuántas unidades desea comprar? (Stock disponible: ${stock})`));
    while (isNaN(cantidad) || cantidad < 1 || cantidad > stock) {
        alert('Cantidad inválida o insuficiente stock.');
        cantidad = parseInt(prompt(`¿Cuántas unidades desea comprar? (Stock disponible: ${stock})`));
    }
    return cantidad;
}

// Función para validar la selección de envío
function seleccionValidaEnvio(seleccionMenu) {
    while (isNaN(seleccionMenu) || seleccionMenu < 1 || seleccionMenu > opcionesEnvio.length) {
        alert('Opción inválida');
        seleccionMenu = parseInt(prompt('Seleccione un lugar de envío:\n' + opcionesMenuEnvio));
    }
    return seleccionMenu;
}

// Inicio del programa --------------------------------------------------------------------------------------------

alert('Bienvenido al simulador de costos y envíos. Recuerda que de momento solo hacemos envíos a: Buenos Aires, Córdoba, Mendoza y Neuquén');
mostrarProductos();

let seleccion = parseInt(prompt('Seleccione un producto:\n1 - Aceite Esencial de Eucalipto\n2 - Aceite Esencial de Manzanilla\n3 - Aceite Esencial de Romero'));
seleccion = seleccionValidaProducto(seleccion);
let productoSeleccionado = productos.find(producto => producto.id === seleccion);

console.log(`Producto seleccionado: ${productoSeleccionado.nombre}`);

let cantidad = validarCantidad(productoSeleccionado.stock);
productoSeleccionado.stock -= cantidad;  // Actualizar el stock

console.log(`Cantidad seleccionada: ${cantidad}`);
console.log(`Stock restante de ${productoSeleccionado.nombre}: ${productoSeleccionado.stock}`);

let seleccionDestino = parseInt(prompt('Seleccione un lugar de envío:\n1 - Buenos Aires\n2 - Córdoba\n3 - Mendoza\n4 - Neuquén'));
seleccionDestino = seleccionValidaEnvio(seleccionDestino);
let envioSeleccionado = opcionesEnvio.find(envio => envio.id === seleccionDestino);

console.log(`Destino de envío seleccionado: ${envioSeleccionado.destino}`);

let precioFinal = calcularPrecioFinal(productoSeleccionado.precio * cantidad, envioSeleccionado.costo);

console.log(`Precio final calculado (con IVA y envío): $${precioFinal}`);
alert(`El costo final de su producto, incluyendo IVA y envío, es de: $${precioFinal}\nCosto de envío: $${envioSeleccionado.costo}\nCantidad comprada: ${cantidad}\n¡Gracias por su compra!`);
