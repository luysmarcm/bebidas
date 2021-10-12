import React, { useContext,useState } from "react";
import { CategoriasContex } from "../context/CategoriasContex";
import { RecetasContext } from "../context/RecetasContext";

const Formulario = () => {
  const { categorias } = useContext(CategoriasContex);
  const {setBusquedaReceta} = useContext(RecetasContext)

  const [busqueda, setbusqueda] = useState({
      nombre:'',
      categoria:''
  })

  const BusquedaDatosReceta = e =>{
    setbusqueda({
        ...busqueda,
        [e.target.name] : e.target.value
    })

  }


  return (
    <form className="col-12"
          onSubmit={ e=>{
              e.preventDefault();
              setBusquedaReceta(busqueda);
              

          }}
    
    >
      <fieldset className="text-center">
        <legend>Busca bebidas por categoria o ingredientes</legend>
      </fieldset>

      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="nombre"
            className="form-control"
            type="text"
            placeholder="Buscar por ingrediente"
            onChange={BusquedaDatosReceta}
          />
        </div>

        <div className="col-md-4">
          <select className="form-control" name="categoria" onChange={BusquedaDatosReceta}>
            <option value="">-- Selecciona Categoria--</option>
            {categorias.map((categorias) => (
              <option
                key={categorias.strCategory}
                value={categorias.strCategory}
              >
                {categorias.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar Bebidas "
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
