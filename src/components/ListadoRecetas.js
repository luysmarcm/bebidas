import React, {useContext} from 'react';
import { RecetasContext } from '../context/RecetasContext';
import Receta from './Receta';



const ListadoRecetas = () => {

    const {recetas} = useContext(RecetasContext);  
    console.log(recetas);
    
    return (
        <div className="row mt-5">
                
                {recetas ?
                recetas.map(receta => (
                <Receta 
                    key={receta.idDrink}
                    receta={receta}
                />
            )) : null}
        
           </div>
    )
};

export default ListadoRecetas;
