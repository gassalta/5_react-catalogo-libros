import { useParams } from "react-router-dom";

const DetalleLibro = ({ libros }) => {
  const { id } = useParams();
  const libro = libros.find((l) => l.id === parseInt(id));

  if (!libro) {
    // Manejar el caso en el que el libro no se encuentre
    return <div>Libro no encontrado</div>;
  }

  return (
    <div className="detalle-libro">
      <h2 className="book-titulo">{libro.título}</h2>
      <p className="book-descripcion">{libro.descripcion}</p>
      <p className="book-autor">{libro.autor}</p>
      <p className="book-categoria">{libro.categoria}</p>
    </div>
  );
};

export default DetalleLibro;
