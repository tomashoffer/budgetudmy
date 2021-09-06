import React, {Fragment, useState} from 'react';
import Error from './Error'


const Pregunta = ({guardarPresupuesto, guardarRestante}) => {

// definir el state 
const [cantidad, guardarCantidad] = useState(0);
const [error, guardarError] = useState(false);

// Funcion que lee el presupuesto 
const definirPresupuesto = e => {
    guardarCantidad(parseInt(e.target.value, 10))
}
// Submit para definir Presupuesto
const agregarPresupuesto = e =>{
    e.preventDefault();

    // validator
    if(cantidad < 1 || isNaN( cantidad )){
        guardarError(true);
        return;
    }
    // ya validado
    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad)
}

    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error mensaje='Hay un error en el presupuesto'/> : null}
            <form 
            onSubmit={agregarPresupuesto}>
                <input type="number"
                        className="u-full-width"
                        placeholder="Coloca tu presupuesto"
                        onChange={definirPresupuesto}
                />

                <input type="submit"
                className="u-full-width button-primary" 
                value="Definir Presupuesto"/>
            </form>
        </Fragment>
     );
}
 
export default Pregunta;