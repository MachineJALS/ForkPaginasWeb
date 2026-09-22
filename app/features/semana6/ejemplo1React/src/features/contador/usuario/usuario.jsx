import useContador from "../../hookes/useContador"
import { CONTADOR_TEXT } from "../constants/contador.constants"

export function Usuario({count, setCount, text, setText}) {

    const {handleIncrement} = useContador(setCount)
    
    
    return (
        <>
            <h2>Usuario</h2>
                <p>{CONTADOR_TEXT.VALOR_ACTUAL}: {count}</p>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <button onClick={count < 5 && handleIncrement}>{CONTADOR_TEXT.AGREGAR_USUARIO}</button>
        </>
    )
}