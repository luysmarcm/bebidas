import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
    
  const [recetas, setrecetas] = useState([]);
  const [busquedaReceta, setBusquedaReceta] = useState({
    nombre: "",
    categoria: "",
  });

  const { nombre, categoria } = busquedaReceta;


  useEffect(() => {
    const obtenerReceta = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;

      const resultado = await axios.get(url);
      setrecetas(resultado.data.drinks);
    };
    obtenerReceta();
  }, [busquedaReceta, categoria, nombre]);

  return (
    <RecetasContext.Provider
      value={{
        setBusquedaReceta,
        recetas,
      }}
    >
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;
