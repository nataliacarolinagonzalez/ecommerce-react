import { useEffect, useState } from 'react'

import './Index.css'

import Ingreso from './Ingreso'
import { Tabla } from './Tabla'

import { actualizarProducto, borrarProducto, guardarProducto, obtenerProductos } from '../Servicios/productos'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



export function Index(props) {

    const { titulo: enunciado } = props             // destructuring Object con alias

    const [productos, setProductos] = useState([])  // destructuring Array
    const [producto, setProducto] = useState({
        nombre: '',
        precio: '',
        stock: '',
        marca: '',
        categoria: '',
        detalles: '',
        foto: '',
        envio: ''
    })
    const [editarID, setEditarID] = useState(null)
   
    // ------------------------------------------------------------------
    //   Control del menú modal de confirmación de borrado de producto
    // ------------------------------------------------------------------
    const [show, setShow] = useState(false);
    const [borrarID, setBorrarID] = useState(null)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        console.log('Componente Index Alta (montado)')

        async function pedir() {
            const productos = await obtenerProductos()
            //console.log(productos)
            setProductos(productos)
        }
        pedir()

        return () => {
            console.log('Componente Index Alta (desmontado)')
        }
    }, [])


    // ----------------------------------------------
    //   Actualización de cada campo del formulario
    // ----------------------------------------------
    function onChange(e) {
        const { type, id, value, checked } = e.target
        //console.log(type, value, checked, id)
        setProducto({ ...producto, [id]: type === 'checkbox' ? checked : value })
    }

    // ----------------------------------------------
    // limpieza del formulario de entrada de producto
    // ----------------------------------------------
    function borrarFormulario() {
        setProducto({
            nombre: '',
            precio: '',
            stock: '',
            marca: '',
            categoria: '',
            detalles: '',
            foto: '',
            envio: ''
        })
    }

    function formInvalid() {
        const p = producto
        const noValido =
            //!p.nombre ||
           /*  !/^[a-zA-Z ]{3,15}$/.test(p.nombre) || */
            !/^[1-9]{3,10}$/.test(p.precio) ||
            !/^\d{1,10}$/.test(p.stock) ||
            !/^[a-zA-Z ]{3,15}$/.test(p.marca) ||
            !/^[a-zA-Z ]{3,15}$/.test(p.categoria) ||
            !/^[a-zA-Z ]{3,30}$/.test(p.detalles) ||
            !p.foto

            const noValidoNombre =!/^[a-zA-Z ]{3,15}$/.test(p.nombre)

            //Faltan las alertas en cada input
             
            /* !/^[1-9]{3,10}$/.test(p.precio) ||
            !/^\d{1,10}$/.test(p.stock) ||
            !/^[a-zA-Z ]{3,15}$/.test(p.marca) ||
            !/^[a-zA-Z ]{3,15}$/.test(p.categoria) ||
            !/^[a-zA-Z ]{3,30}$/.test(p.detalles) ||
            !p.foto */
            
            /* if(noValidoNombre){
                console.log("error")
                
            }else{
                console.log("ok!")
                
            } */

       /*  let isError = false
        let errors = {}

        if(!p.nombre.trim()){
            errors.nombre = "Debe completar el nombre del producto"
            isError = true
        }
        return isError ? errors : null */
        return noValido 
    }

    // --------------------------------------------------
    //    Incorporación / actualización de un producto
    // --------------------------------------------------
    async function onSubmit(e) {
        e.preventDefault()

        //console.log(producto)
        const productosClon = [...productos]

        if (!editarID) {
            // ---- guardo el producto en el recurso remoto (mockapi) ------
            const productoGuardado = await guardarProducto(producto)

            // ---- guardo el producto en el recurso local (array) ------
            productosClon.push(productoGuardado)
        }
        else {
            // ---- actualizo el producto en el recurso remoto (mockapi) ------
            const id = editarID

            const productoActualizado = await actualizarProducto(id, producto)

            // ---- actualizo el producto en el recurso local (array) ------
            const index = productosClon.findIndex(p => p.id === productoActualizado.id)
            productosClon.splice(index, 1, producto)

            setEditarID(null)
        }
        setProductos(productosClon)

        borrarFormulario()
    }

    // ----------------------------------------------
    //           Edición de un producto
    // ----------------------------------------------
    function editar(id) {
        console.log('editar', id)

        if (!editarID || editarID !== id) {
            setEditarID(id)
            setProducto(productos.find(p => p.id === id))
        }
        else {
            setEditarID(null)
            borrarFormulario()
        }
    }

    // ----------------------------------------------
    //         Eliminación de un producto
    // ----------------------------------------------
    function borrar(id) {
        console.log('borrar', id)

        if(id) {
            setBorrarID(id)
            handleShow()
        }
    }

    async function goBorrar() {
        const id = borrarID

        if(id) {
        //if (window.confirm('¿Desea eliminar este producto?')) {
            // ---- elimino el producto en el recurso remoto (mockapi) ------
            const productoEliminado = await borrarProducto(id)

            // ---- elimino el producto en el recurso local (array) ------
            const productosClon = [...productos]
            const index = productosClon.findIndex(p => p.id === productoEliminado.id)
            productosClon.splice(index, 1)
            setProductos(productosClon)
        //}
        }
        handleClose()
    }

    return (
        <div className="Alta">
            <div >
                {/* <h3>Componente {enunciado}</h3>
                <hr /> */}
                <h1>- Alta de productos -</h1>
                {/* <Button variant="danger" onClick={handleShow}>
                    Launch demo modal
                </Button> */}
                <br />

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Eliminación de Producto</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        ¿Desea eliminar el producto: {productos.find(p => p.id === borrarID)?.nombre}?
                    </Modal.Body>
                    
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                        <Button variant="danger" onClick={goBorrar}>Aceptar</Button>
                    </Modal.Footer>
                </Modal>

                <Ingreso
                    producto={producto}
                    onChange={onChange}
                    onSubmit={onSubmit}
                    editarID={editarID}
                    invalid={formInvalid()}
                />

                <Tabla
                    productos={productos}
                    editar={editar}
                    borrar={borrar}
                    editarID={editarID}
                />

            </div>
        </div>
    )
}