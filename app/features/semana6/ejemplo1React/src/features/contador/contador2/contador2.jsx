import useContador from "../../hookes/useContador"
import { CONTADOR_TEXT } from "../constants/contador.constants"

export function Contador2({count, setCount}) {

    const {handleDecrement} = useContador(setCount)
    
    return (
        <>
            <h2>Contador2</h2>
                <p>{CONTADOR_TEXT.VALOR_ACTUAL}: {count}</p>
                <button onClick={count > 0 ? handleDecrement : null}>{CONTADOR_TEXT.DECREMENTAR}</button>
        </>
    )
}