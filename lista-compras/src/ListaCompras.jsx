import { useState } from "react";

function ListaCompras() {
  // Estado para la lista y el input
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState("");

  // Agrega un producto si el input no está vacío
  const agregarProducto = () => {
    if (nuevoProducto.trim() !== "") {
      setProductos([...productos, nuevoProducto]);
      setNuevoProducto("");
    }
  };

  // Elimina un producto por índice
  const eliminarProducto = (index) => {
    setProductos(productos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Lista de Compras</h2>
      <input
        type="text"
        value={nuevoProducto}
        onChange={(e) => setNuevoProducto(e.target.value)}
        placeholder="Agregar producto"
      />
      <button onClick={agregarProducto}>Agregar</button>
      <ul>
        {productos.map((producto, index) => (
          <li key={index}>
            {producto}{" "}
            <button onClick={() => eliminarProducto(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaCompras;
