import './Tabla.css'


export const Tabla = props => {

    const { carrito, borrarID, incrementarCantID, decrementarCantID, subtotal__carrito, total__carrito } = props
    //console.log(productos)

    return (
        <div className="TablaCarrito">

            <div className="table-responsive">
                <table >
                   {/*  <thead>
                        <tr>
                            <th>#</th>
                            <th>nombre</th>
                            <th>precio</th>
                            <th>marca</th>
                            <th>foto</th>
                            <th>cantidad</th>
                            <th>acciones</th>
                        </tr>
                    </thead> */}
                    <tbody>
                        {
                            carrito.map((producto, index) =>
                                <tr key={index}>
                                    {/* <td>{producto.id}</td> */}
                                    <td><img width="100px" src={producto.foto} alt={"foto de " + producto.nombre} /></td>
                                    <td>{producto.nombre}</td>
                                    <td>{producto.detalles}</td>
                                    {/* <td>{producto.marca}</td> */}
                                    <td>${producto.precio}</td>
                                    <td>
                                        {producto.cantidad}
                                        <button className='btn-dec ml-4' onClick={() => decrementarCantID(producto.id)}>-</button>
                                        <button className='btn-inc ml-2' onClick={() => incrementarCantID(producto.id)}>+</button>
                                    </td>
                                    <td>${subtotal__carrito(producto.cantidad, producto.precio)}</td>

                                    <td>
                                        <button className='btn-borrar' onClick={() => borrarID(producto.id)}>Borrar</button>
                                    </td> 
                                </tr>
                                )
                        }
                        <tr/>
                            <td className='sin-borde'></td>
                            <td className='sin-borde'></td>
                            <td className='sin-borde'></td>
                            <td className='sin-borde'></td>
                            <td className='sin-borde'></td>
                            <td className='total'>${total__carrito()}</td>
                        <tr/>
                    </tbody>
                    
                </table>
            </div>
        </div>
    )
}
