import { useEffect } from 'react'

import './Index.css'

import { Tabla } from './Tabla'
import { useLocalStorage } from '../Hooks/useLocalStore'
import { enviarCarrito } from '../Servicios/carrito'

export function Index(props) {
    const { titulo: enunciado } = props             // destructuring Object con alias

    const [carrito, setCarrito] = useLocalStorage('carrito', [])

    useEffect(() => {
        console.log('Componente Index Carrito (montado)')

        return () => {
            console.log('Componente Index Carrito (desmontado)')
        }
    }, [])

    
    function borrarAll() {
        setCarrito([])
    }

    function borrarID(id) {
        const carritoClon = [...carrito]
        const index = carritoClon.findIndex(p => p.id === id)
        carritoClon.splice(index,1)
        setCarrito(carritoClon)
    }
    
    function incrementarCantID(id) {
        const carritoClon = [...carrito]
        const producto = carritoClon.find(p => p.id === id)
        if(producto.cantidad < producto.stock) {
            producto.cantidad++
            setCarrito(carritoClon)
        }
    }
    
    function decrementarCantID(id) {
        const carritoClon = [...carrito]
        const producto = carritoClon.find(p => p.id === id)
        if(producto.cantidad > 1) {
            producto.cantidad--
            setCarrito(carritoClon)
        }
    }

    async function pedir() {
        console.log('pedir')

        const carritoEnviado = await enviarCarrito(carrito)
        console.log(carritoEnviado)
        setCarrito([])
    }

    return (
        <div className="Carrito">
            <div>
                {/* <h3>Componente {enunciado}</h3>
                <hr /> */}

                <div className="carrito">
                    <h1>- Carrito de compras -</h1>
                    <br /><br />

                    {carrito.length === 0 && <h3 className='alert alert-danger'>No se encontraron pedidos</h3>}
                    {carrito.length > 0 &&
                        <>
                            <Tabla 
                                carrito={carrito} 
                                borrarID={borrarID}
                                incrementarCantID={incrementarCantID}
                                decrementarCantID={decrementarCantID}
                            />
                            <div id='pie-button'>
                                <button className="carrito__pedir" onClick={pedir}>Pedir</button>
                                <button className="carrito__borrar ml-3" onClick={borrarAll}>Borrar</button>

                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}