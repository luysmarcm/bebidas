import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

 export const CategoriasContex = createContext();

 
 const CategoriasProvider = (props) =>{

    const [categorias, setcategorias] = useState([]);

    useEffect(() => {   
            const obtenerCategorias = async () => {
                const url='https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
                const categorias = await axios.get(url);
                setcategorias(categorias.data.drinks);
            }
            obtenerCategorias();

    }, []); // eslint-disabled-line
    

    
    
     return (
         <CategoriasContex.Provider
            value={{
                categorias
            }}
         >
             {props.children}  


         </CategoriasContex.Provider>
        
     ) 
 }
 
 
 export default CategoriasProvider;
 

