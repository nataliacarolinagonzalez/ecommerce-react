import './Tabla.css'


export const TablaFavoritos = props => {

    const { favoritos, borrarIDFavoritos } = props
    //console.log(productos)

    return (
        <div className="TablaFavoritos">

            <div className="table-responsive">
                <table>
                   {/*  <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead> */}
                    <tbody>
                        {
                            favoritos.map((producto, index) =>
                                <tr key={index}>
                                    {/* <td>{producto.id}</td> */}
                                    <td><img width="100px" src={producto.foto} alt={"foto de " + producto.nombre} /></td>
                                    <td>{producto.nombre}</td>
                                    <td>{producto.detalles}</td>
                                    <td>${producto.precio}</td>
                                    <td>{producto.cantidad}</td>
                                    {/* <td>
                                        {producto.cantidad}
                                        <button className='btn btn-info ml-2' onClick={() => decrementarCantID(producto.id)}>-</button>
                                        <button className='btn btn-info ml-2' onClick={() => incrementarCantID(producto.id)}>+</button>
                                    </td> */}
                                    <td>
                                        <button className='btn-borrar' onClick={() => borrarIDFavoritos(producto.id)}>Borrar</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
