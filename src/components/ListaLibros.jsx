import { useState } from "react";
import { Link } from "react-router-dom";
import FormularioAgregarLibro from "./FormularioAgregarLibro";

const ListaLibros = ({ libros }) => {
  const [categoria, setCategoria] = useState("");
    
    const [ListaLibros, setListaLibros] = useState(libros);

    const agregarLibro = (nuevoLibro) => {
        setListaLibros([...ListaLibros, nuevoLibro]);
    };
  
    const librosFiltrados = ListaLibros.filter(
        (libro) => libro.categoria === categoria || !categoria
    );
  return (
    <>
    <h1>Formulario nuevo Libro</h1>
    <FormularioAgregarLibro agregarLibro={agregarLibro} />
      <h1>Mini Catalogo de Libros</h1>
      <label>Categoría: </label>
            <select onChange={(e) => setCategoria(e.target.value)} className="custom-select">
                <option key="0" value="">Todos</option>
                <option key="1" value="Clásico">Clásico</option>
                <option key="2" value="Distopía">Distopía</option>
                <option key="3" value="Fantasía">Fantasía</option>
                <option key="4" value="Ciencia Ficción">Ciencia Ficción</option>
                <option key="5" value="Realismo Mágico">Realismo Mágico</option>
                <option key="6" value="Thriller">Thriller</option>
                <option key="7" value="Historia">Historia</option>
            </select>

      <div className="book-grid">
        {librosFiltrados.map((libro) => (
          <div key={libro.id} className="book-card">
            <div className="book-title">{libro.título}</div>
            <div>{libro.descripcion}</div>
            <div>{libro.autor}</div>
            <div>{libro.categoria}</div><br/>
            <Link to={`/libro/${libro.id}`}>Ver mas</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListaLibros;