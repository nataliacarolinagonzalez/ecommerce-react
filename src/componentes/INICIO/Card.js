import './Card.css'

export const Card = props => {

    const { producto, agregarCarritoID } = props

    return (
        <div className="Card">
            <section>
                <img src={producto.foto} alt="" />
                <p><b>Categoría: </b>{producto.categoria}</p>
                <h3>{producto.nombre}</h3>
                <p><b>Detalles: </b>{producto.detalles}</p>
                <p><b className="precio">Precio: </b>${producto.precio}</p>
                {/* <p><b>Stock: </b>{producto.stock}</p>
                <p><b>Marca: </b>{producto.marca}</p> */}               
                <br />
                <p><b style={{color:'gold'}}>Envío: </b>{producto.envio? 'Si' : 'No'}</p>
                <br />
                <button onClick={
                    () => agregarCarritoID(producto.id)
                }>Agregar al carrito</button>
                <br />
            </section>
        </div>
    )
}