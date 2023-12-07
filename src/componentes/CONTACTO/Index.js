import { useEffect } from 'react'

import './Index.css'

export function Index(props) {
    const { titulo: enunciado } = props             // destructuring Object con alias

    useEffect(() => {
        console.log('Componente Index Contacto (montado)')
        
        return () => {
            console.log('Componente Index Contacto (desmontado)')
        }
    },[])

    return (
        <div className="Contacto">
            <div className="jumbotron">
                <h3>Componente {enunciado}</h3>
                <hr />


            </div>
        </div>
    )
}