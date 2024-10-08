function calcularSumaPrecios(productos) {
    const sumaTotal = productos.reduce((acumulador, producto) => {
        return acumulador + producto.precio;
    }, 0);

    return sumaTotal;
}

const listaProductos = [
    { nombre: 'Pera', precio: 3.2},
    { nombre: 'Manzana', precio: 1.3},
    { nombre: 'Piña', precio: 2.7},
];

const total = calcularSumaPrecios(listaProductos);
console.log(`La suma total de precios es: ${total.toFixed(2)}`);

