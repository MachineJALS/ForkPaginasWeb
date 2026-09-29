import useContador from "../../hookes/useContador"
import { CONTADOR_TEXT } from "../constants/contador.constants"

export function Usuario({count, setCount}) {

    const {handleIncrement} = useContador(setCount)
    
    
    return (
        <>
            <h2>Usuario</h2>
                <p>{CONTADOR_TEXT.VALOR_ACTUAL}: {count}</p>
                <input  type="text"  placeholder={CONTADOR_TEXT.AGREGAR_USUARIO}
                onKeyDown={(e) => {if (e.key === 'Enter' && e.target.value.trim() && count < 5) {
                        handleIncrement();
                        e.target.value = '';
                    }
                }}
                     />
        </>
    )
}