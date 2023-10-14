import { useForm } from "react-hook-form";

const FormularioAgregarLibro = ({ agregarLibro }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    agregarLibro(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="formulario-container">
      <div>
        <label htmlFor="título">Título: </label>
        <input type="text"
          id="título"
          name="título"
          {...register("título", { required: "Este campo es requerido" })}
        />
        {errors.título && <span>errors.titulo.message</span>}
      </div>
      <div>
        <label htmlFor="descripcion">Descripción: </label>
        <input type="text"
          id="descripcion"
          name="descripcion"
          {...register("descripcion", { required: "Este campo es requerido" })}
        />
        {errors.descripcion && <span>errors.titulo.message</span>}
      </div>
      <div>
        <label htmlFor="autor">Autor: </label>
        <input type="text"
          id="autor"
          name="autor"
          {...register("autor", { required: "Este campo es requerido" })}
        />
        {errors.titulo && <span>errors.titulo.message</span>}
      </div>
      <div>
        <label htmlFor="categoria">Categoría: </label>
        <input type="text"
          id="categoria"
          name="categoria"
          {...register("categoria", { required: "Este campo es requerido" })}
        />
        {errors.título && <span>errors.título.message</span>}
      </div>
      <button type="submit">Agregar Libro</button>
    </form>
  );
};

export default FormularioAgregarLibro;
