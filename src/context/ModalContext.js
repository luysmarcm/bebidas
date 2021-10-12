import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import Receta from "../components/Receta";

export const ModalContext = createContext();


const ModalProvider = (props) => {

    const [idReceta, setidReceta] = useState(null)
    const [recetainf, setreceta] = useState({})


    useEffect(()=> {
        
        const guardarReceta = async() =>{
            if(!idReceta) return;

            const url=`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
            const resultado = await axios.get(url)

            setreceta(resultado.data.drinks[0]);

        }
        guardarReceta();



    }, [idReceta]);

  return (
    <ModalContext.Provider 
        value={{
            recetainf,
            setreceta,
            setidReceta
        }}>
                
            {props.children}
            
    </ModalContext.Provider>
  );
};

export default ModalProvider;
