import { useEffect, useState } from 'react'

import Modal from 'react-bootstrap/Modal';
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


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function subtotal__carrito (cantidad, precio){
        let subtotal = cantidad*precio
        return subtotal
    }

    function total__carrito (){
        let total = 0
        carrito.forEach(p => {
            total+=p.precio*p.cantidad
        })
        return total
    }

    return (
        <div className="Carrito">
            <div>
                {/* <h3>Componente {enunciado}</h3>
                <hr /> */}
                <Modal className='text-dark' show={show} onHide={handleClose}>
           {/*  <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
            </Modal.Header> */}
            <Modal.Body>
                Su pedido ha sido enviado. Recibirá un mail con todos los datos. Gracias por su compra!
            </Modal.Body>
            {/* <Modal.Footer></Modal.Footer> */}
          </Modal>

                <div className="carrito">
                    <h1>- Carrito de compras -</h1>
                    <br /><br />

                    {carrito.length === 0 && <h6 className='alert alert-dark' style={{width:'50%'}}>El carrito está vacio</h6>}
                    {carrito.length > 0 &&
                        <>
                            <Tabla 
                                carrito={carrito} 
                                borrarID={borrarID}
                                incrementarCantID={incrementarCantID}
                                decrementarCantID={decrementarCantID}
                                subtotal__carrito={subtotal__carrito}
                                total__carrito={total__carrito}
                                
                            />
                            <div id='pie-button'>
                                <button className="carrito__pedir" onClick={
                                    () => {handleShow(); pedir()}}>Pedir</button>
                                <button className="carrito__borrar ml-3" onClick={borrarAll}>Vaciar Carrito</button>

                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}