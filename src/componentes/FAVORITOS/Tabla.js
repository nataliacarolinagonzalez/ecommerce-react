import './Tabla.css'


export const Tabla = props => {

    const { favoritos, borrarID } = props
    //console.log(productos)

    return (
        <div className="TablaFav">

            <div className="table-responsive">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            {/* <th>#</th> */}
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            favoritos.map((producto, index) =>
                                <tr key={index}>
                                    <td><img width="100px" src={producto.foto} alt={"foto de " + producto.nombre} /></td>
                                    <td>{producto.nombre}</td>
                                    <td>${producto.precio}</td>
                                    <td>{producto.marca}</td>
                                    {/* <td>
                                        {producto.cantidad}
                                        <button className='btn btn-info ml-2' onClick={() => decrementarCantID(producto.id)}>-</button>
                                        <button className='btn btn-info ml-2' onClick={() => incrementarCantID(producto.id)}>+</button>
                                    </td> */}
                                    <td>
                                        <button className='btn btn-danger' onClick={() => borrarID(producto.id)}>Borrar</button>
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
