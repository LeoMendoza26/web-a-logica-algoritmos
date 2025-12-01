// Arreglo vacío donde se almacenarán los productos
let listaDeCompras = [];

// Agregar producto
const agregarProducto = (producto) => {
  const productoNormalizado = producto.trim().toLowerCase();

  if (listaDeCompras.includes(productoNormalizado)) {
    console.log(`El producto "${producto}" ya está en la lista.`);
    return;
  }

  listaDeCompras.push(productoNormalizado);
  console.log(` "${producto}" ha sido agregado a la lista.`);
};

// Eliminar producto
const eliminarProducto = (producto) => {
  const productoNormalizado = producto.trim().toLowerCase();
  const index = listaDeCompras.indexOf(productoNormalizado);

  if (index !== -1) {
    listaDeCompras.splice(index, 1);
    console.log(` "${producto}" ha sido eliminado de la lista.`);
  } else {
    console.log(`❌ "${producto}" no se encuentra en la lista.`);
  }
};

// Mostrar lista completa
const mostrarLista = () => {
  console.log("Lista de compras:");

  if (listaDeCompras.length === 0) {
    console.log("   (vacía)");
    return;
  }

  listaDeCompras.forEach((producto, index) =>
    console.log(`${index + 1}. ${producto}`)
  );
};

// --- Ejemplo de uso --- //
agregarProducto("Manzanas");
agregarProducto("Leche");
agregarProducto("leche");   // Duplicado — lo bloquea
agregarProducto("Arroz");

mostrarLista();

eliminarProducto("Leche");

mostrarLista();
