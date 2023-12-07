import { useEffect } from 'react'

import './Index.css'

export function Index(props) {
    const { titulo: enunciado } = props             // destructuring Object con alias

    useEffect(() => {
        console.log('Componente Index Otra (montado)')
        
        return () => {
            console.log('Componente Index Otra (desmontado)')
        }
    },[])

    return (
        <div className="Otra">
            <div className="jumbotron">
                <h3>Componente {enunciado}</h3>
                <hr />


            </div>
        </div>
    )
}