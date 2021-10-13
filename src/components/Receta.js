/* eslint-disable jsx-a11y/alt-text */
import React, {useContext, useState} from "react";
import { ModalContext } from "../context/ModalContext";
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 300,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Receta = ({ receta }) => {

    const [ modalStyle ] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes= useStyles();

    const handleOpen = () =>{
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const {recetainf,setidReceta, setreceta} = useContext(ModalContext);

    const mostrarIngredientes = recetainf => {
        let ingredientes = [];
        for(let i = 1; i < 16; i++){
            if( recetainf[`strIngredient${i}`] ) {
                ingredientes.push(
                    <li> { recetainf[`strIngredient${i}`] }  { recetainf[`strMeasure${i}`] }</li>
                )
            }
        }

        return ingredientes;
    }

  return (
    <div className="col-md-4 mb-3">
    <div className="card">
      <h2 className="card-header">{receta.strDrink}</h2>
      <img className="card-img-top" src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`} />
        <div className="card-body">
                <button
                    type="button" 
                    className="btn btn-primary btn-block"
                    onClick={()=>{
                        setidReceta(receta.idDrink)
                        handleOpen();
                        
                    }}    
                >
                    Ver Resceta
                </button>

                <Modal
                    open={open}
                    onClose={()=>{
                        handleClose();
                        setidReceta(null);
                        setreceta({});
                        

                    }}
                >
                    <div  style={modalStyle} className={classes.paper}> 
                    <h2>{recetainf.strDrink}</h2>
                            <h3 className="mt-4">Instrucciones</h3>
                            <p>
                                {recetainf.strInstructions}
                            </p>

                            <img className="img-fluid my-4" src={recetainf.strDrinkThumb} />

                            <h3>Ingredientes y cantidades</h3>
                            <ul>
                                { mostrarIngredientes(recetainf) }
                            </ul>
                           
                    </div>
                </Modal>
        </div>


    </div>
  </div>
  );
};

export default Receta;
