import { CUPOS_TXT } from "../constants/cupos.constants";
import Cupos from "../../hooks/useCupos";

export function Cupos1({count, setCount}) {

    const { handleCuposIncrement } = Cupos(setCount);
    //Para el incremento de cupos, se debe pedir al usuario que ingrese su nombre, y luego se debe guardar en un arreglo de nombres, que se encuentra en el estado del componente padre.
    return (
        <>
            <h1>{CUPOS_TXT.CUPOS}: {count} </h1>
            <input type="text" placeholder={CUPOS_TXT.INPUT_PLACEHOLDER} 
            onkeyDown={(e) => {if (e.key === 'Enter' && e.target.value.trim() && count < CUPOS_TXT.CAPACIDAD_MAXIMA) {
                handleCuposIncrement();
                e.target.value = '';
            }}}>
            </input>
            <p>{CUPOS_TXT.COUNTIN} {count}</p>
        </>
    )
}