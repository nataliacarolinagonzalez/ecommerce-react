import { useEffect } from 'react'

import './Index.css'

import { Tabla } from './Tabla'
import { useLocalStorage } from '../Hooks/useLocalStore'
import { enviarFavoritos } from '../Servicios/favoritos'

export function Index(props) {
    const { titulo: enunciado } = props             // destructuring Object con alias

    const [favoritos, setFavoritos] = useLocalStorage('favoritos', [])

    useEffect(() => {
        console.log('Componente Index Favoritos (montado)')

        return () => {
            console.log('Componente Index Favoritos (desmontado)')
        }
    }, [])

    
    function borrarAllFavoritos() {
        setFavoritos([])
    }

    function borrarIDFavoritos(id) {
        const favoritosClon = [...favoritos]
        const index = favoritosClon.findIndex(p => p.id === id)
        favoritosClon.splice(index,1)
        setFavoritos(favoritosClon)
    }
    
    
    async function pedirFavoritos() {
        console.log('pedir')

        const favoritosEnviado = await enviarFavoritos(favoritos)
        console.log(favoritosEnviado)
        setFavoritos([])
    }

    return (
        <div className="Favoritos">
            <div className="jumbotron">
                <h3>Componente {enunciado}</h3>
                <hr />

                <div className="favoritos">
                    <h1>Mis favoritos</h1>
                    <br /><br />

                    {favoritos.length === 0 && <h3 className='alert alert-danger'>No se encontraron favoritos</h3>}
                    {favoritos.length > 0 &&
                        <>
                            <button className="favoritos__borrar" onClick={borrarAllFavoritos}>Borrar</button>
                            <Tabla 
                                favoritos={favoritos} 
                                borrarIDFav={borrarIDFavoritos}
                            />
                            <button className="favoritos__pedir" onClick={pedirFavoritos}>Pedir</button>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}